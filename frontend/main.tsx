import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { type } from "@tauri-apps/plugin-os";
import { commands } from "@api/bindings";
import App from "./app";
import { theme } from "./theme";
import { registerEvents } from "./register-events";

import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/notifications/styles.css";
import "./global-styles/global.css";
import "./global-styles/mantine-overrides.css";
import "./global-styles/scroll-bar.css";

commands.frontendReady();
registerEvents();

const OS_TYPE = type();
document.body.classList.add(OS_TYPE);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider
			defaultColorScheme="dark"
			theme={theme}
		>
			<App />
		</MantineProvider>
	</React.StrictMode>,
);
