/* eslint-disable */
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

declare global {
    interface Window {
        __TAURI_INVOKE__<T>(cmd: string, args?: Record<string, unknown>): Promise<T>;
    }
}

// Function avoids 'window not defined' in SSR
const invoke = () => window.__TAURI_INVOKE__;

export function dummyCommand() {
    return invoke()<[Game, SyncDataEvent]>("dummy_command")
}

export function updateData() {
    return invoke()<null>("update_data")
}

export function getInstalledGames() {
    return invoke()<{ [key: string]: Game }>("get_installed_games")
}

export function getOwnedGames() {
    return invoke()<OwnedGame[]>("get_owned_games")
}

export function getDiscoverGames() {
    return invoke()<SteamGame[]>("get_discover_games")
}

export function getModLoaders() {
    return invoke()<{ [key: string]: ModLoaderData }>("get_mod_loaders")
}

export function openGameFolder(gameId: string) {
    return invoke()<null>("open_game_folder", { gameId })
}

export function installMod(modLoaderId: string, modId: string, gameId: string) {
    return invoke()<null>("install_mod", { modLoaderId,modId,gameId })
}

export function uninstallMod(gameId: string, modId: string) {
    return invoke()<null>("uninstall_mod", { gameId,modId })
}

export function openGameModsFolder(gameId: string) {
    return invoke()<null>("open_game_mods_folder", { gameId })
}

export function startGame(gameId: string) {
    return invoke()<null>("start_game", { gameId })
}

export function openModFolder(modLoaderId: string, modId: string) {
    return invoke()<null>("open_mod_folder", { modLoaderId,modId })
}

export function deleteSteamAppinfoCache() {
    return invoke()<null>("delete_steam_appinfo_cache")
}

export function openModsFolder() {
    return invoke()<null>("open_mods_folder")
}

export type OperatingSystem = "Linux" | "Windows"
export type SteamGame = { id: string; nsfw: boolean; engine: GameEngineBrand }
export type GameEngine = { brand: GameEngineBrand; version: GameEngineVersion | null }
export type GameExecutable = { path: string; engine: GameEngine | null; architecture: Architecture | null; operatingSystem: OperatingSystem | null; scriptingBackend: UnityScriptingBackend | null }
export type Mod = { id: string; name: string; scriptingBackend: UnityScriptingBackend | null; engine: GameEngineBrand | null; kind: ModKind; path: string }
export type OwnedGame = { id: string; name: string; installed: boolean; osList: OperatingSystem[]; engine: GameEngineBrand; releaseDate: number; thumbnailUrl: string }
export type ModLoaderData = { id: string; path: string; mods: Mod[] }
export type UnityScriptingBackend = "Il2Cpp" | "Mono"
export type SyncDataEvent = "SyncInstalledGames" | "SyncOwnedGames" | "SyncDiscoverGames" | "SyncMods"
export type SteamLaunchOption = { launchId: string; appId: number; description: string | null; executable: string | null; arguments: string | null; appType: string | null; osList: string | null; betaKey: string | null; osArch: string | null }
export type GameEngineVersion = { major: number; minor: number; patch: number; suffix: string | null; display: string }
export type ModKind = "Installable" | "Runnable"
export type GameEngineBrand = "Unity" | "Unreal" | "Godot"
export type Game = { id: string; name: string; discriminator: string | null; steamLaunch: SteamLaunchOption | null; executable: GameExecutable; thumbnailUrl: string | null; availableMods: { [key: string]: boolean } }
export type Architecture = "X64" | "X86"
