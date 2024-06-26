
         // This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

         /** user-defined commands **/

         export const commands = {
async updateData() : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("update_data") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getInstalledGames() : Promise<Result<{ [key in string]: InstalledGame }, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("get_installed_games") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getOwnedGames() : Promise<Result<{ [key in string]: OwnedGame }, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("get_owned_games") };
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
async openGameFolder(gameId: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("open_game_folder", { gameId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async installMod(gameId: string, modId: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("install_mod", { gameId, modId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async configureMod(gameId: string, modId: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("configure_mod", { gameId, modId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async openInstalledModFolder(gameId: string, modId: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("open_installed_mod_folder", { gameId, modId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async uninstallMod(gameId: string, modId: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("uninstall_mod", { gameId, modId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async uninstallAllMods(gameId: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("uninstall_all_mods", { gameId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async openGameModsFolder(gameId: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("open_game_mods_folder", { gameId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async startGame(gameId: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("start_game", { gameId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async startGameExe(gameId: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("start_game_exe", { gameId }) };
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
async downloadMod(modId: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("download_mod", { modId }) };
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
async deleteMod(modId: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("delete_mod", { modId }) };
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
async addGame(path: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("add_game", { path }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async removeGame(gameId: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("remove_game", { gameId }) };
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
async getRemoteMods() : Promise<Result<{ [key in string]: RemoteMod }, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("get_remote_mods") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getRemoteGames() : Promise<Result<{ [key in string]: RemoteGame }, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("get_remote_games") };
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
async refreshGame(gameId: string) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("refresh_game", { gameId }) };
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
async runProviderCommand(ownedGameId: string, commandAction: ProviderCommandAction) : Promise<Result<null, Error>> {
try {
    return { status: "ok", data: await TAURI_INVOKE("run_provider_command", { ownedGameId, commandAction }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
}
}

         /** user-defined events **/

export const events = __makeEvents__<{
syncInstalledGames: SyncInstalledGames,
foundInstalledGame: FoundInstalledGame,
syncOwnedGames: SyncOwnedGames,
syncRemoteGames: SyncRemoteGames,
syncModLoaders: SyncModLoaders,
syncLocalMods: SyncLocalMods,
syncRemoteMods: SyncRemoteMods,
executedProviderCommand: ExecutedProviderCommand,
gameAdded: GameAdded,
gameRemoved: GameRemoved,
errorRaised: ErrorRaised
}>({
syncInstalledGames: "sync-installed-games",
foundInstalledGame: "found-installed-game",
syncOwnedGames: "sync-owned-games",
syncRemoteGames: "sync-remote-games",
syncModLoaders: "sync-mod-loaders",
syncLocalMods: "sync-local-mods",
syncRemoteMods: "sync-remote-mods",
executedProviderCommand: "executed-provider-command",
gameAdded: "game-added",
gameRemoved: "game-removed",
errorRaised: "error-raised"
})

         /** user-defined statics **/

         

/** user-defined types **/

export type AppType = "Game" | "Demo"
export type Architecture = "X64" | "X86"
export type CommonModData = { id: string; engine: EngineBrand | null; unityBackend: UnityScriptingBackend | null; engineVersionRange: EngineVersionRange | null; loaderId: string }
export type EngineBrand = "Unity" | "Unreal" | "Godot" | "GameMaker"
export type EngineVersion = { numbers: EngineVersionNumbers; suffix: string | null; display: string }
export type EngineVersionNumbers = { major: number; minor: number | null; patch: number | null }
export type EngineVersionRange = { minimum: EngineVersionNumbers | null; maximum: EngineVersionNumbers | null }
export type Error = "NotImplemented" | "Io" | "GlobPattern" | "Glob" | "Reqwest" | "Goblin" | "SteamLocate" | "Zip" | "Tauri" | "Json" | "ChronoParse" | "SQLite" | "Env" | "TaskJoin" | "UrlEncode" | "HeaderToStr" | { InvalidBinaryVdfType: number } | { AppDataNotFound: [] } | { PathParseFailure: string } | { PathParentNotFound: string } | { EmptyFile: string } | { AppInfoNotFound: string } | { FailedToParseUnityVersionAsset: string } | { ModInstallInfoInsufficient: [string, string] } | { EmptyStateData: [] } | { FailedToAccessStateData: string } | { FailedToGetGameFromPath: string } | { GameAlreadyAdded: string } | { DataEntryNotFound: string } | { UnityBackendUnknown: string } | { ModDownloadNotAvailable: string } | { RunnableManifestNotFound: string } | { CantRunNonRunnable: string }
export type ErrorRaised = string
export type ExecutedProviderCommand = null
export type FoundInstalledGame = InstalledGame
export type GameAdded = string
export type GameEngine = { brand: EngineBrand; version: EngineVersion | null }
export type GameExecutable = { path: string; name: string; engine: GameEngine | null; architecture: Architecture | null; operatingSystem: OperatingSystem | null; scriptingBackend: UnityScriptingBackend | null }
export type GameMode = "VR" | "Flat"
export type GameRemoved = string
export type InstalledGame = { id: string; name: string; provider: ProviderId; executable: GameExecutable; installedModVersions: { [key in string]: string }; discriminator: string | null; thumbnailUrl: string | null; ownedGameId: string | null; startCommand: ProviderCommand | null }
export type LocalMod = { data: LocalModData; common: CommonModData }
export type LocalModData = { path: string; manifest: Manifest | null }
export type Manifest = { title: string | null; version: string; runnable: RunnableModData | null; engine: EngineBrand | null; engineVersionRange: EngineVersionRange | null; unityBackend: UnityScriptingBackend | null }
export type ModDownload = { id: string; url: string; root: string | null; runnable: RunnableModData | null }
export type ModKind = "Installable" | "Runnable"
export type ModLoaderData = { id: string; path: string; kind: ModKind }
export type OperatingSystem = "Linux" | "Windows"
export type OwnedGame = { id: string; provider: ProviderId; name: string; osList: OperatingSystem[]; releaseDate: bigint | null; thumbnailUrl: string | null; gameMode: GameMode | null; appType: AppType | null; providerCommands: { [key in ProviderCommandAction]: ProviderCommand } }
export type ProviderCommand = { String: string } | { Path: [string, string[]] }
export type ProviderCommandAction = "Install" | "ShowInLibrary" | "ShowInStore" | "Start" | "OpenInBrowser"
export type ProviderId = "Steam" | "Manual" | "Itch" | "Epic" | "Gog" | "Xbox"
export type RemoteGame = { id: string; engine: GameEngine | null; skipCache: boolean }
export type RemoteMod = { common: CommonModData; data: RemoteModData }
export type RemoteModData = { title: string; deprecated: boolean; author: string; sourceCode: string; description: string; latestVersion: ModDownload | null }
export type RunnableModData = { path: string; args: string[] }
export type SyncInstalledGames = { [key in string]: InstalledGame }
export type SyncLocalMods = { [key in string]: LocalMod }
export type SyncModLoaders = { [key in string]: ModLoaderData }
export type SyncOwnedGames = { [key in string]: OwnedGame }
export type SyncRemoteGames = { [key in string]: RemoteGame }
export type SyncRemoteMods = { [key in string]: RemoteMod }
export type UnityScriptingBackend = "Il2Cpp" | "Mono"

/** tauri-specta globals **/

         import { invoke as TAURI_INVOKE } from "@tauri-apps/api/core";
import * as TAURI_API_EVENT from "@tauri-apps/api/event";
import { type WebviewWindow as __WebviewWindow__ } from "@tauri-apps/api/webviewWindow";

type __EventObj__<T> = {
  listen: (
    cb: TAURI_API_EVENT.EventCallback<T>
  ) => ReturnType<typeof TAURI_API_EVENT.listen<T>>;
  once: (
    cb: TAURI_API_EVENT.EventCallback<T>
  ) => ReturnType<typeof TAURI_API_EVENT.once<T>>;
  emit: T extends null
    ? (payload?: T) => ReturnType<typeof TAURI_API_EVENT.emit>
    : (payload: T) => ReturnType<typeof TAURI_API_EVENT.emit>;
};

export type Result<T, E> =
  | { status: "ok"; data: T }
  | { status: "error"; error: E };

function __makeEvents__<T extends Record<string, any>>(
  mappings: Record<keyof T, string>
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
    }
  );
}

     