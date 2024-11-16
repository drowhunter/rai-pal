
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

/** user-defined commands **/


export const commands = {
async addGame(path: string) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("add_game", { path }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async clearCache() : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("clear_cache") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async configureMod(installedGame: InstalledGame, modId: string) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("configure_mod", { installedGame, modId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async deleteMod(modId: string) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("delete_mod", { modId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async deleteSteamAppinfoCache() : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("delete_steam_appinfo_cache") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async downloadMod(modId: string) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("download_mod", { modId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async fetchRemoteGames() : Promise<Result<RemoteGame[], Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("fetch_remote_games") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async frontendReady() : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("frontend_ready") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getLocalMods() : Promise<Result<{ [key in string]: LocalMod }, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_local_mods") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getModLoaders() : Promise<Result<{ [key in string]: ModLoaderData }, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_mod_loaders") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getProviderData(providerId: ProviderId) : Promise<Result<ProviderData, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_provider_data", { providerId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getProviderGames(providerId: ProviderId) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_provider_games", { providerId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getProviderIds() : Promise<Result<ProviderId[], Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_provider_ids") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getRemoteMods() : Promise<Result<{ [key in string]: RemoteMod }, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_remote_mods") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async installMod(installedGame: InstalledGame, modId: string) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("install_mod", { installedGame, modId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async openGameFolder(installedGame: InstalledGame) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("open_game_folder", { installedGame }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async openGameModsFolder(installedGame: InstalledGame) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("open_game_mods_folder", { installedGame }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async openInstalledModFolder(installedGame: InstalledGame, modId: string) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("open_installed_mod_folder", { installedGame, modId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async openLogsFolder() : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("open_logs_folder") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async openModFolder(modId: string) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("open_mod_folder", { modId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async openModLoaderFolder(modLoaderId: string) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("open_mod_loader_folder", { modLoaderId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async openModsFolder() : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("open_mods_folder") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async refreshGame(installedGame: InstalledGame) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("refresh_game", { installedGame }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async removeGame(installedGame: InstalledGame) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("remove_game", { installedGame }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async runProviderCommand(ownedGame: OwnedGame, commandAction: ProviderCommandAction) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("run_provider_command", { ownedGame, commandAction }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async runRunnableWithoutGame(modId: string) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("run_runnable_without_game", { modId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async startGameExe(installedGame: InstalledGame) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("start_game_exe", { installedGame }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async startGame(installedGame: InstalledGame) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("start_game", { installedGame }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async uninstallAllMods(installedGame: InstalledGame) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("uninstall_all_mods", { installedGame }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async uninstallMod(installedGame: InstalledGame, modId: string) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("uninstall_mod", { installedGame, modId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async updateLocalMods() : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("update_local_mods") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async setInstalledGamesFilter(filter: InstalledGamesFilter) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("set_installed_games_filter", { filter }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getInstalledGamesFilter() : Promise<Result<InstalledGamesFilter, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_installed_games_filter") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getAllInstalledGamesFilters() : Promise<Result<InstalledGamesFilter, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_all_installed_games_filters") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
}
}

/** user-defined events **/


export const events = __makeEvents__<{
errorRaised: ErrorRaised,
executedProviderCommand: ExecutedProviderCommand,
foundInstalledGame: FoundInstalledGame,
foundOwnedGame: FoundOwnedGame,
selectInstalledGame: SelectInstalledGame,
syncLocalMods: SyncLocalMods,
syncModLoaders: SyncModLoaders,
syncRemoteMods: SyncRemoteMods
}>({
errorRaised: "error-raised",
executedProviderCommand: "executed-provider-command",
foundInstalledGame: "found-installed-game",
foundOwnedGame: "found-owned-game",
selectInstalledGame: "select-installed-game",
syncLocalMods: "sync-local-mods",
syncModLoaders: "sync-mod-loaders",
syncRemoteMods: "sync-remote-mods"
})

/** user-defined constants **/



/** user-defined types **/

export type Architecture = "X64" | "X86"
export type CommonModData = { id: string; engine: EngineBrand | null; unityBackend: UnityScriptingBackend | null; engineVersionRange: EngineVersionRange | null; loaderId: string }
export type EngineBrand = "Unity" | "Unreal" | "Godot" | "GameMaker"
export type EngineVersion = { numbers: EngineVersionNumbers; suffix: string | null; display: string }
export type EngineVersionNumbers = { major: number; minor: number | null; patch: number | null }
export type EngineVersionRange = { minimum: EngineVersionNumbers | null; maximum: EngineVersionNumbers | null }
export type Error = "Tauri" | "Core" | "SerdeJson" | { FailedToGetResourcesPath: string } | { EmptyStateData: [] } | { FailedToAccessStateData: string }
export type ErrorRaised = string
export type ExecutedProviderCommand = null
export type FoundInstalledGame = []
export type FoundOwnedGame = []
export type GameEngine = { brand: EngineBrand; version: EngineVersion | null }
export type GameExecutable = { path: string; name: string; engine: GameEngine | null; architecture: Architecture | null; scriptingBackend: UnityScriptingBackend | null }
export type GameSubscription = "UbisoftClassics" | "UbisoftPremium" | "XboxGamePass" | "EaPlay"
export type GameTag = "VR" | "Demo"
export type GameTitle = { display: string; normalized: string[] }
export type IdKind = "Steam" | "Manual" | "Itch" | "Epic" | "Gog" | "Xbox" | "Ubisoft" | "NormalizedTitle"
export type InstalledGame = { id: string; title: GameTitle; provider: ProviderId; executable: GameExecutable; installedModVersions: { [key in string]: string }; discriminator: string | null; thumbnailUrl: string | null; ownedGameId: string | null; startCommand: ProviderCommand | null }
export type InstalledGamesFilter = { providers: { [key in ProviderId]: boolean }; tags: { [key in GameTag]: boolean }; architectures: { [key in Architecture]: boolean }; unityScriptingBackends: { [key in UnityScriptingBackend]: boolean }; engines: { [key in EngineBrand]: boolean } }
export type LocalMod = { data: LocalModData; common: CommonModData }
export type LocalModData = { path: string; manifest: Manifest | null }
export type Manifest = { title: string | null; version: string; runnable: RunnableModData | null; engine: EngineBrand | null; engineVersionRange: EngineVersionRange | null; unityBackend: UnityScriptingBackend | null }
export type ModDownload = { id: string; url: string; root: string | null; runnable: RunnableModData | null }
export type ModKind = "Installable" | "Runnable"
export type ModLoaderData = { id: string; path: string; kind: ModKind }
export type OwnedGame = { globalId: string; providerGameId: string; provider: ProviderId; title: GameTitle; releaseDate: bigint | null; thumbnailUrl: string | null; tags: GameTag[]; providerCommands: { [key in ProviderCommandAction]: ProviderCommand }; fromSubscriptions: GameSubscription[] }
export type ProviderCommand = { String: string } | { Path: [string, string[]] }
export type ProviderCommandAction = "Install" | "ShowInLibrary" | "ShowInStore" | "Start" | "OpenInBrowser"
export type ProviderData = { installedGames: { [key in string]: InstalledGame }; ownedGames: { [key in string]: OwnedGame } }
export type ProviderId = "Steam" | "Manual" | "Itch" | "Epic" | "Gog" | "Xbox"
export type RemoteGame = { title: string | null; engines: GameEngine[] | null; ids: { [key in IdKind]: string[] }; subscriptions: GameSubscription[] | null }
export type RemoteMod = { common: CommonModData; data: RemoteModData }
export type RemoteModData = { title: string; deprecated: boolean; author: string; sourceCode: string; description: string; latestVersion: ModDownload | null }
export type RunnableModData = { path: string; args: string[] }
export type SelectInstalledGame = string
export type SyncLocalMods = { [key in string]: LocalMod }
export type SyncModLoaders = { [key in string]: ModLoaderData }
export type SyncRemoteMods = { [key in string]: RemoteMod }
export type UnityScriptingBackend = "Il2Cpp" | "Mono"

/** tauri-specta globals **/

import {
	invoke as TAURI_INVOKE,
	Channel as TAURI_CHANNEL,
} from "@tauri-apps/api/core";
import * as TAURI_API_EVENT from "@tauri-apps/api/event";
import { type WebviewWindow as __WebviewWindow__ } from "@tauri-apps/api/webviewWindow";

type __EventObj__<T> = {
	listen: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.listen<T>>;
	once: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.once<T>>;
	emit: null extends T
		? (payload?: T) => ReturnType<typeof TAURI_API_EVENT.emit>
		: (payload: T) => ReturnType<typeof TAURI_API_EVENT.emit>;
};

export type Result<T, E> =
	| { status: "ok"; data: T }
	| { status: "error"; error: E };

function __makeEvents__<T extends Record<string, any>>(
	mappings: Record<keyof T, string>,
) {
	return new Proxy(
		{} as unknown as {
			[K in keyof T]: __EventObj__<T[K]> & {
				(handle: __WebviewWindow__): __EventObj__<T[K]>;
			};
		},
		{
			get: (_, event) => {
				const name = mappings[event as keyof T];

				return new Proxy((() => {}) as any, {
					apply: (_, __, [window]: [__WebviewWindow__]) => ({
						listen: (arg: any) => window.listen(name, arg),
						once: (arg: any) => window.once(name, arg),
						emit: (arg: any) => window.emit(name, arg),
					}),
					get: (_, command: keyof __EventObj__<any>) => {
						switch (command) {
							case "listen":
								return (arg: any) => TAURI_API_EVENT.listen(name, arg);
							case "once":
								return (arg: any) => TAURI_API_EVENT.once(name, arg);
							case "emit":
								return (arg: any) => TAURI_API_EVENT.emit(name, arg);
						}
					},
				});
			},
		},
	);
}
