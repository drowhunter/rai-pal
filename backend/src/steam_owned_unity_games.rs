use std::collections::HashSet;

use serde::Serialize;
use specta::Type;
use steamlocate::SteamDir;

use crate::{appinfo::read_appinfo, game::OperatingSystem, steam_game::get_steam_games, Result};

const UNITY_STEAM_APP_IDS_URL: &str =
    "https://raw.githubusercontent.com/Raicuparta/steam-unity-app-ids/main/unity-app-ids.txt";

#[derive(Serialize, Type, Clone)]
#[serde(rename_all = "camelCase")]
pub struct OwnedUnityGame {
    id: String,
    name: String,
    installed: bool,
    os_list: HashSet<OperatingSystem>,
}

pub async fn get_steam_owned_unity_games() -> Result<Vec<OwnedUnityGame>> {
    let response = reqwest::get(UNITY_STEAM_APP_IDS_URL).await?.text().await?;
    let steam_games = get_steam_games().await?;

    // TODO this is repeated in steam_game.
    // Should try to cache it.
    let steam_dir = SteamDir::locate().unwrap();
    let app_info = read_appinfo(
        &steam_dir
            .path
            .join("appcache/appinfo.vdf")
            .to_string_lossy(),
    );

    return Ok(response
        .split(',')
        .filter_map(|app_id| {
            let id = app_id.parse::<u32>().ok()?;

            let app_info = app_info.apps.get(&id)?;

            let os_list: HashSet<_> = app_info
                .launch_options
                .iter()
                .filter_map(|launch| match launch.clone().os_list?.as_str() {
                    "linux" => Some(OperatingSystem::Linux),
                    "windows" => Some(OperatingSystem::Windows),
                    _ => None,
                })
                .collect();

            Some(OwnedUnityGame {
                id: app_id.to_owned(),
                name: app_info.name.clone(),
                // TODO do this some other way
                // installed: steam_games.get(&id).is_some(),
                installed: false,
                os_list,
            })
        })
        .collect());
}
