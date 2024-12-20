import { useCallback, useEffect, useRef, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { commands, Result, Error, events, ProviderId } from "@api/bindings";
import { loadingCountAtom, gameIdsAtom } from "./use-data";
import { showAppNotification } from "@components/app-notifications";
import { useAppEvent } from "./use-app-event";
import { gamesQueryAtom } from "./use-data-query";

export function useUpdateData(executeOnMount = false) {
	const setLoading = useSetAtom(loadingCountAtom);
	const setGameIds = useSetAtom(gameIdsAtom);
	const gamesQuery = useAtomValue(gamesQueryAtom);
	const [providerIds, setProviderIds] = useState<ProviderId[]>([]);
	const fetchCount = useRef(0);

	useEffect(() => {
		commands.getProviderIds().then((providerIdsResult) => {
			if (providerIdsResult.status === "error") {
				showAppNotification(
					`Failed to get info about available game providers: ${providerIdsResult.error}`,
					"error",
				);
				return;
			}

			setProviderIds(providerIdsResult.data);
		});
	}, []);

	const updateProviderGames = useCallback(() => {
		fetchCount.current++;
		const thisFetchCount = fetchCount.current;
		commands.getData(gamesQuery).then((result) => {
			if (thisFetchCount !== fetchCount.current) {
				console.log(
					"Cancelling this fetch since another one happened in the meantime.",
				);
				return false;
			}

			if (result.status === "error") {
				showAppNotification(`Failed to get app data: ${result.error}`, "error");
				return false;
			}

			setGameIds(result.data);

			return true;
		});
	}, [gamesQuery, setGameIds]);

	useEffect(() => {
		updateProviderGames();
	}, [updateProviderGames]);

	useAppEvent(events.foundGame, updateProviderGames);

	const updateAppData = useCallback(() => {
		function handleDataPromise(promise: Promise<Result<null, Error>>) {
			setLoading((previousLoading) => previousLoading + 1);
			promise
				.then((result) => {
					if (result.status === "error") {
						showAppNotification(
							`Error while updating data: ${result.error}`,
							"error",
						);
					}
				})
				.catch((error) => {
					showAppNotification(
						`Failed to initialize data update: ${error}`,
						"error",
					);
				})
				.finally(() => setLoading((previousLoading) => previousLoading - 1));
		}

		for (const providerId of providerIds) {
			handleDataPromise(commands.getProviderGames(providerId));
		}

		handleDataPromise(commands.updateLocalMods());
	}, [providerIds, setLoading]);

	useEffect(() => {
		if (executeOnMount) {
			updateAppData();
		}
	}, [executeOnMount, updateAppData]);

	return updateAppData;
}
