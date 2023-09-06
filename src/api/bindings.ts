/* eslint-disable */
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

declare global {
    interface Window {
        __TAURI_INVOKE__<T>(cmd: string, args?: Record<string, unknown>): Promise<T>;
    }
}

// Function avoids 'window not defined' in SSR
const invoke = () => window.__TAURI_INVOKE__;

export function getSteamAppsJson() {
    return invoke()<{ [key: number]: Game }>("get_steam_apps_json")
}

export type Game = { id: number; name: string; executables: GameExecutable[]; distinctExecutables: GameExecutable[] }
export type GameExecutable = { id: string; name: string; isLegacy: boolean; modFilesPath: string; fullPath: string; architecture: string; scriptingBackend: string; unityVersion: string; isLinux: boolean; steamLaunch: SteamLaunchOption | null }
export type SteamLaunchOption = { launchId: string; appId: number; description: string | null; executable: string | null; arguments: string | null; appType: string | null; osList: string | null; betaKey: string | null; osArch: string | null }