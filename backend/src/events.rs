use std::fmt::Display;

use log::error;
use serde::Serialize;
use tauri::{
	EventTarget,
	Manager,
};

use crate::serializable_enum;

serializable_enum!(AppEvent {
	SyncInstalledGames,
	SyncOwnedGames,
	SyncRemoteGames,
	SyncModLoaders,
	SyncLocalMods,
	SyncRemoteMods,
	ExecutedProviderCommand,
	GameAdded,
	GameRemoved,
	Error,
});

pub trait EventEmitter {
	fn emit_event<TPayload: Serialize + Clone>(&self, event: AppEvent, payload: TPayload);
	fn emit_error<TPayload: Serialize + Clone + Display>(&self, payload: TPayload);
}

impl EventEmitter for tauri::AppHandle {
	fn emit_event<TPayload: Serialize + Clone>(&self, event: AppEvent, payload: TPayload) {
		self.emit_to(EventTarget::any(), &event.to_string(), payload)
			.unwrap_or_else(|err| error!("Failed to emit event: {err}"));
	}

	fn emit_error<TPayload: Serialize + Clone + Display>(&self, payload: TPayload) {
		error!("Error: {payload}");
		self.emit_to(EventTarget::any(), &AppEvent::Error.to_string(), payload)
			.unwrap_or_else(|err| error!("Failed to emit error: {err}."));
	}
}
