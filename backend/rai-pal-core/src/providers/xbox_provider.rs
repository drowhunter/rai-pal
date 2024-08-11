#![cfg(target_os = "windows")]

use std::path::PathBuf;

use log::error;
use winreg::{
	enums::{HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE},
	RegKey,
};

use crate::{
	installed_game::InstalledGame,
	owned_game::OwnedGame,
	paths::file_name_without_extension,
	providers::provider::{ProviderActions, ProviderId, ProviderStatic},
	result::Result,
};

#[derive(Clone)]
pub struct Xbox {}

impl ProviderStatic for Xbox {
	const ID: &'static ProviderId = &ProviderId::Xbox;

	fn new() -> Result<Self>
	where
		Self: Sized,
	{
		Ok(Self {})
	}
}

impl ProviderActions for Xbox {
	async fn get_games<TInstalledCallback, TOwnedCallback>(
		&self,
		mut installed_callback: TInstalledCallback,
		mut _owned_callback: TOwnedCallback,
	) -> Result
	where
		TInstalledCallback: FnMut(InstalledGame) + Send + Sync,
		TOwnedCallback: FnMut(OwnedGame) + Send + Sync,
	{
		let gaming_services = RegKey::predef(HKEY_LOCAL_MACHINE)
			.open_subkey("SOFTWARE\\Microsoft\\GamingServices")?;
		let package_roots = gaming_services.open_subkey("PackageRepository\\Root")?;
		let game_configs = gaming_services.open_subkey("GameConfig")?;
		let app_packages = RegKey::predef(HKEY_CURRENT_USER).open_subkey("Software\\Classes\\Local Settings\\Software\\Microsoft\\Windows\\CurrentVersion\\AppModel\\Repository\\Packages")?;

		for key in package_roots.enum_keys().flatten() {
			if let Ok(child) = package_roots.open_subkey(key) {
				if let Some(Ok(subkey)) = child.enum_keys().nth(0) {
					if let Ok(subchild) = child.open_subkey(subkey) {
						if let Ok(package_id) = subchild.get_value::<String, _>("Package") {
							if let Ok(root_path) = subchild.get_value::<String, _>("Root") {
								if let Ok(executables) =
									game_configs.open_subkey(format!("{package_id}\\Executable"))
								{
									if let Some(Ok(first_executable_key)) =
										executables.enum_keys().nth(0)
									{
										if let Ok(first_executable) =
											executables.open_subkey(first_executable_key)
										{
											if let Ok(executable_name) =
												first_executable.get_value::<String, _>("Name")
											{
												let executable_path =
													PathBuf::from(root_path).join(executable_name);

												let display_name = app_packages
													.open_subkey(&package_id)
													.and_then(|package| {
														package
															.get_value::<String, _>("DisplayName")
													})
													.or_else(|error| {
														error!("Failed to find display name for Xbox game: {}", error);
														file_name_without_extension(
															&executable_path,
														)
														.map(ToString::to_string)
													})
													.unwrap_or_else(|error| {
														error!("Failed to get game name from exe path: {}", error);
														"[Name Not Found]".to_string()
													});

												if let Some(game) = InstalledGame::new(
													&executable_path,
													&display_name,
													*Self::ID,
												) {
													installed_callback(game.clone());
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}

		Ok(())
	}
}
