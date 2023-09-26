use std::collections::HashSet;

use steamlocate::SteamDir;

use super::appinfo;
use crate::{
	game::OperatingSystem,
	serializable_struct,
	Result,
};

const UNITY_STEAM_APP_IDS_URL: &str =
	"https://raw.githubusercontent.com/Raicuparta/steam-unity-app-ids/main/unity-app-ids.txt";

serializable_struct!(OwnedUnityGame {
	id: String,
	name: String,
	installed: bool,
	os_list: HashSet<OperatingSystem>,
});

pub async fn get() -> Result<Vec<OwnedUnityGame>> {
	let response = reqwest::get(UNITY_STEAM_APP_IDS_URL).await?.text().await?;

	// TODO this is repeated in steam_game.
	// Should try to cache it.
	let steam_dir = SteamDir::locate()?;
	let app_info = appinfo::read(&steam_dir.path().join("appcache/appinfo.vdf"));

	return Ok(response
		.split(',')
		.filter_map(|app_id| {
			let id = app_id.parse::<u32>().ok()?;

			let app_info = app_info.as_ref().ok()?.apps.get(&id)?;

			let os_list: HashSet<_> = app_info
				.launch_options
				.iter()
				.filter_map(|launch| match launch.clone().os_list?.as_str() {
					"linux" => Some(OperatingSystem::Linux),
					"windows" => Some(OperatingSystem::Windows),
					_ => None,
				})
				.collect();

			let installed = steam_dir
				.app(id)
				.map_or(false, |steam_app| steam_app.is_some());

			Some(OwnedUnityGame {
				id: app_id.to_owned(),
				name: app_info.name.clone(),
				installed,
				os_list,
			})
		})
		.collect());
}
