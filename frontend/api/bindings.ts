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

export type Game = { id: number; name: string; executables: GameExecutable[]; distinctExecutables: GameExecutable[] }
export type OperatingSystem = "Linux" | "Windows" | "Unknown"
export type SteamLaunchOption = { launchId: string; appId: number; description: string | null; executable: string | null; arguments: string | null; appType: string | null; osList: string | null; betaKey: string | null; osArch: string | null }
export type Architecture = "X64" | "X32" | "Unknown"
export type GameExecutable = { id: string; name: string; isLegacy: boolean; modFilesPath: string; fullPath: string; architecture: Architecture; scriptingBackend: UnityScriptingBackend; unityVersion: string; operatingSystem: OperatingSystem; steamLaunch: SteamLaunchOption | null }
export type UnityScriptingBackend = "Il2Cpp" | "Mono"
export type OwnedUnityGame = { id: string; name: string; installed: boolean }
