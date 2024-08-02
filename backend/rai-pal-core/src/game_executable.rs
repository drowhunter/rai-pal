use std::{
	fs::File,
	io::{self, Read, Seek},
	path::{Path, PathBuf},
};

use rai_pal_proc_macros::serializable_struct;

use crate::{
	game_engines::{
		game_engine::GameEngine,
		unity::{self, UnityScriptingBackend},
		unreal,
	},
	paths::{file_name_without_extension, normalize_path},
	result::Result,
	serializable_enum,
};

serializable_enum!(Architecture { X64, X86 });

#[serializable_struct]
pub struct GameExecutable {
	pub path: PathBuf,
	pub name: String,
	pub engine: Option<GameEngine>,
	pub architecture: Option<Architecture>,
	pub scripting_backend: Option<UnityScriptingBackend>,
}

pub fn get_architecture(exe_path: &Path) -> Result<Option<Architecture>> {
	// Open the file
	let mut file = File::open(exe_path)?;

	// Read only the first 2 bytes (DOS header signature)
	let mut buf2 = [0; 2];
	file.read_exact(&mut buf2)?;

	// Check if the file starts with "MZ" (DOS header signature)

	if &buf2 == b"MZ" {
		// Seek to the 60th byte to read the offset to the PE header
		file.seek(io::SeekFrom::Start(60))?;
		let mut buf4 = [0; 4];
		file.read_exact(&mut buf4)?;

		// Convert offset to PE header to u32
		let pe_offset = u32::from_le_bytes(buf4);

		// Seek to the PE header offset
		file.seek(io::SeekFrom::Start(u64::from(pe_offset)))?;

		file.read_exact(&mut buf4)?;

		// Check PE signature (should be "PE\0\0")

		// Read the machine type field at offset 4 bytes from the PE signature
		let mut machine_buf = [0; 2];
		file.read_exact(&mut machine_buf)?;

		// Convert machine type to u16
		let machine_type = u16::from_le_bytes(machine_buf);

		// Check machine type to determine 32-bit or 64-bit
		return match machine_type {
			0x014c => Ok(Some(Architecture::X86)),
			0x8664 => Ok(Some(Architecture::X64)),
			_ => Ok(None),
		};
	}

	Ok(None)
}

impl GameExecutable {
	pub fn new(path: &Path) -> Option<Self> {
		let normalized_path = normalize_path(path);

		unity::get_executable(&normalized_path)
			.or_else(|| unreal::get_executable(&normalized_path))
			.or_else(|| {
				Some(Self {
					path: path.to_owned(),
					name: file_name_without_extension(path).ok()?.to_string(),
					engine: None,
					architecture: None,
					scripting_backend: None,
				})
			})
	}
}
