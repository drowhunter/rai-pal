use std::collections::HashMap;

use rai_pal_proc_macros::serializable_struct;

use crate::{
	app_type::AppType,
	game_mode::GameMode,
	game_title::GameTitle,
	providers::{
		provider::ProviderId,
		provider_command::{ProviderCommand, ProviderCommandAction},
	},
};

#[serializable_struct]
pub struct OwnedGame {
	pub global_id: String,
	pub provider_game_id: String,
	pub provider: ProviderId,
	pub title: GameTitle,
	pub release_date: Option<i64>,
	pub thumbnail_url: Option<String>,
	pub game_mode: Option<GameMode>,
	pub app_type: Option<AppType>,

	pub provider_commands: HashMap<ProviderCommandAction, ProviderCommand>,
}

impl OwnedGame {
	pub fn new(provider_game_id: &str, provider: ProviderId, name: &str) -> Self {
		Self {
			global_id: get_global_id(provider, provider_game_id),
			provider_game_id: provider_game_id.to_string(),
			provider,
			title: GameTitle::new(name),
			provider_commands: HashMap::default(),
			release_date: None,
			thumbnail_url: None,
			game_mode: None,
			app_type: None,
		}
	}

	pub fn set_release_date(&mut self, release_date: i64) -> &mut Self {
		self.release_date = Some(release_date);
		self
	}

	pub fn set_thumbnail_url(&mut self, thumbnail_url: &str) -> &mut Self {
		self.thumbnail_url = Some(thumbnail_url.to_string());
		self
	}

	pub fn set_game_mode(&mut self, game_mode: GameMode) -> &mut Self {
		self.game_mode = Some(game_mode);
		self
	}

	pub fn set_app_type(&mut self, app_type: AppType) -> &mut Self {
		self.app_type = Some(app_type);
		self
	}

	pub fn guess_app_type(&mut self) -> &mut Self {
		self.app_type = Some(if self.title.is_probably_demo() {
			AppType::Demo
		} else {
			AppType::Game
		});
		self
	}

	pub fn add_provider_command(
		&mut self,
		command_action: ProviderCommandAction,
		command: ProviderCommand,
	) -> &mut Self {
		self.provider_commands.insert(command_action, command);
		self
	}
}

pub fn get_global_id(provider: ProviderId, provider_game_id: &str) -> String {
	format!("{provider}_{provider_game_id}")
}
