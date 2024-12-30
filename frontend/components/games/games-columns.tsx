import { Badge, Flex, Paper, Stack, Table, Tooltip } from "@mantine/core";
import { TableColumnBase, columnMapToList } from "@components/table/table-head";
import { ItemName } from "../item-name";
import {
	ArchitectureBadge,
	EngineBadge,
	UnityBackendBadge,
} from "@components/badges/color-coded-badge";
import { OutdatedMarker } from "@components/outdated-marker";
import styles from "../table/table.module.css";
import { Game, GamesSortBy } from "@api/bindings";
import { IconCloud, IconDeviceDesktop } from "@tabler/icons-react";
import { GameTags } from "@components/game-tags/game-tags";
import { GameImage } from "@components/game-image";
import { ProviderIcon } from "@components/providers/provider-icon";

type GamesColumn = TableColumnBase<Game, GamesSortBy>;

type CellProps = { readonly item: Game };

const ThumbnailComponent = ({ item }: CellProps) => (
	<Table.Td
		p={0}
		bg="dark"
	>
		<GameImage
			mah={75}
			src={item.thumbnailUrl}
		/>
	</Table.Td>
);

const thumbnail: GamesColumn = {
	hideInDetails: true,
	label: "Thumbnail",
	hideLabel: true,
	hidable: true,
	width: 150,
	component: ThumbnailComponent,
};

const NameCell = ({ item }: CellProps) => (
	<Table.Td className={styles.nameCell}>
		<Tooltip
			disabled={!item.installedGame?.hasOutdatedMod}
			label="One of the mods installed in this game is outdated."
			position="bottom"
		>
			<Flex
				gap={3}
				align="center"
			>
				<ItemName label={item.installedGame?.discriminator}>
					{item.installedGame?.hasOutdatedMod && <OutdatedMarker />}
					<Flex
						gap="xs"
						align="center"
					>
						<Tooltip
							label={
								item.installedGame
									? `Installed on ${item.providerId}`
									: `Owned on ${item.providerId}, not installed`
							}
						>
							<Paper
								bg={item.installedGame ? "green.9" : "dark.7"}
								variant="light"
								p="xs"
							>
								<Stack>
									<ProviderIcon providerId={item.providerId} />
									{item.installedGame ? <IconDeviceDesktop /> : <IconCloud />}
								</Stack>
							</Paper>
						</Tooltip>
						{item?.title.display}
						<GameTags game={item} />
					</Flex>
				</ItemName>
			</Flex>
		</Tooltip>
	</Table.Td>
);

const name: GamesColumn = {
	hideInDetails: true,
	label: "Game",
	sort: "Title",
	component: NameCell,
};

const architecture: GamesColumn = {
	label: "Arch",
	sort: "Architecture",
	width: 70,
	center: true,
	hidable: true,
	component: ({ item }: CellProps) => (
		<Table.Td>
			<ArchitectureBadge value={item.installedGame?.executable.architecture} />
		</Table.Td>
	),
};

const engine: GamesColumn = {
	label: "Engine",
	sort: "Engine",
	width: 180,
	center: true,
	hidable: true,
	component: ({ item }: CellProps) => {
		// TODO somehow take into account the other remote engines too? Might also need to sort them.
		const engine =
			item.installedGame?.executable.engine ?? item.remoteGame?.engines?.[0];

		const scriptingBackend = item.installedGame?.executable.scriptingBackend;
		return (
			<Table.Td
			// A bit annoying that I'm defining the column width in two places (see engineColumn.width),
			// but it's to prevent this one from being squished and hiding the version number.
			// Maybe I shouldn't be using a regular table component at all for this...
			// miw={170}
			>
				<Stack
					align="center"
					justify="center"
					gap="xs"
				>
					<Flex
						gap="xs"
						align="center"
					>
						<EngineBadge value={engine?.brand} />
						{scriptingBackend && (
							<UnityBackendBadge
								size="xs"
								value={scriptingBackend}
								variant="light"
								opacity={0.75}
							/>
						)}
					</Flex>
					{engine?.version?.display && (
						<Badge
							color="dark"
							variant="filled"
							size="sm"
							opacity={0.6}
						>
							{engine.version.display}
						</Badge>
					)}
				</Stack>
			</Table.Td>
		);
	},
};

const gamesColumnsMap = {
	thumbnail,
	name,
	architecture,
	engine,
};

export type GamesColumnId = keyof typeof gamesColumnsMap;

export const gamesColumns = columnMapToList(gamesColumnsMap);
