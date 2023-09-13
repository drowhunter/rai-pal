/* eslint-disable */
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

declare global {
    interface Window {
        __TAURI_INVOKE__<T>(cmd: string, args?: Record<string, unknown>): Promise<T>;
    }
}

// Function avoids 'window not defined' in SSR
const invoke = () => window.__TAURI_INVOKE__;

export function getGameMap() {
    return invoke()<{ [key: number]: Game }>("get_game_map")
}

export function getOwnedGames() {
    return invoke()<OwnedUnityGame[]>("get_owned_games")
}

export function openGameFolder(gameId: number, executableId: string) {
    return invoke()<null>("open_game_folder", { gameId,executableId })
}

export function getModLoaders() {
    return invoke()<BepInEx[]>("get_mod_loaders")
}

export function installMod(modLoaderId: string, modId: string, gameId: number, gameExecutableId: string) {
    return invoke()<null>("install_mod", { modLoaderId,modId,gameId,gameExecutableId })
}

export function openModsFolder(gameId: number, executableId: string) {
    return invoke()<null>("open_mods_folder", { gameId,executableId })
}

export type OwnedUnityGame = { id: string; name: string; installed: boolean }
export type SteamLaunchOption = { launchId: string; appId: number; description: string | null; executable: string | null; arguments: string | null; appType: string | null; osList: string | null; betaKey: string | null; osArch: string | null }
export type UnityScriptingBackend = "Il2Cpp" | "Mono"
export type GameExecutable = { id: string; name: string; isLegacy: boolean; modFilesPath: string; fullPath: string; architecture: Architecture; scriptingBackend: UnityScriptingBackend; unityVersion: string; operatingSystem: OperatingSystem; steamLaunch: SteamLaunchOption | null }
export type Architecture = "X64" | "X32" | "Unknown"
export type Mod = { id: string; name: string; scriptingBackend: UnityScriptingBackend; path: string }
export type Game = { id: number; name: string; executables: { [key: string]: GameExecutable } }
export type BepInEx = { id: string; modCount: number; mods: Mod[] }
export type OperatingSystem = "Linux" | "Windows" | "Unknown"
