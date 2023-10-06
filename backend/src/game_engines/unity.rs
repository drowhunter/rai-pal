use std::{
	fs::{
		self,
		File,
	},
	io::Read,
	path::{
		Path,
		PathBuf,
	},
};

use lazy_regex::regex_find;

use crate::{
	game::{
		GameEngine,
		GameEngineBrand,
		GameEngineVersion,
		UnityScriptingBackend,
	},
	paths,
	result::{
		Error,
		Result,
	},
};

fn get_version_from_asset(asset_path: &Path) -> Result<String> {
	let mut file = File::open(asset_path)?;
	let mut data = vec![0u8; 4096];

	let bytes_read = file.read(&mut data)?;
	if bytes_read == 0 {
		return Err(Error::EmptyFile(asset_path.to_path_buf()));
	}

	let data_str = String::from_utf8_lossy(&data[..bytes_read]);
	let match_result = regex_find!(r"\d+\.\d+\.\d+[fp]\d+", &data_str);

	match_result.map_or_else(
		|| Ok("No version found".to_string()),
		|matched| Ok(matched.to_string()),
	)
}

fn get_unity_version(game_exe_path: &Path) -> Option<GameEngineVersion> {
	const ASSETS_WITH_VERSION: [&str; 3] = ["globalgamemanagers", "mainData", "data.unity3d"];

	if let Ok(data_path) = get_unity_data_path(game_exe_path) {
		for asset_name in &ASSETS_WITH_VERSION {
			let asset_path = data_path.join(asset_name);

			if let Ok(metadata) = fs::metadata(&asset_path) {
				if metadata.is_file() {
					if let Ok(version) = get_version_from_asset(&asset_path) {
						let mut version_parts = version.split('.');
						let major = version_parts.next().unwrap_or("0").parse().unwrap_or(0);
						let minor = version_parts.next().unwrap_or("0").parse().unwrap_or(0);
						let patch = version_parts.next().unwrap_or("0").parse().unwrap_or(0);
						let suffix = version_parts.next().unwrap_or("0").to_string();

						return Some(GameEngineVersion {
							major,
							minor,
							patch,
							suffix: Some(suffix),
							display: version,
						});
					}
				}
			}
		}
	}

	None
}

fn get_unity_data_path(game_exe_path: &Path) -> Result<PathBuf> {
	let parent = paths::path_parent(game_exe_path)?;
	let file_stem = paths::file_name_without_extension(game_exe_path)?;

	Ok(parent.join(format!("{file_stem}_Data")))
}

pub fn get_scripting_backend(game_exe_path: &Path) -> Result<UnityScriptingBackend> {
	let game_folder = paths::path_parent(game_exe_path)?;

	if game_folder.join("GameAssembly.dll").is_file()
		|| game_folder.join("GameAssembly.so").is_file()
	{
		Ok(UnityScriptingBackend::Il2Cpp)
	} else {
		Ok(UnityScriptingBackend::Mono)
	}
}

fn is_unity_exe(game_path: &Path) -> bool {
	game_path.is_file()
		&& get_unity_data_path(game_path).map_or(false, |data_path| data_path.is_dir())
}

pub fn get_engine(game_path: &Path) -> Option<GameEngine> {
	if is_unity_exe(game_path) {
		Some(GameEngine {
			brand: GameEngineBrand::Unity,
			version: get_unity_version(game_path),
		})
	} else {
		None
	}
}
