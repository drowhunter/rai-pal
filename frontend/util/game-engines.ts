import { GameEngine, EngineVersion } from "@api/bindings";

const defaultVersion: EngineVersion = {
	numbers: {
		major: 0,
		minor: 0,
		patch: 0,
	},
	suffix: "",
	display: "",
};

export function getAdjustedUnityMajor(engine: GameEngine | null | undefined) {
	const major = engine?.version?.numbers.major;
	if (!major) return 0;

	if (engine?.brand === "Unity" && major > 5 && major < 2000) {
		// Unity did this silly thing.
		// It went from Unity 5 to Unity 2017-2023, then back to Unity 6.
		// So for sorting purposes, we consider Unity 6, 7, 8, etc to be Unity 2106, 2107, 2108, etc.
		// This will of course break if they go back to year-based versions,
		// or if they release a LOT of major versions.
		return major + 2100;
	}

	return major;
}

export function sortGamesByEngine(
	engineA: GameEngine | null | undefined,
	engineB: GameEngine | null | undefined,
) {
	const versionA = engineA?.version ?? defaultVersion;
	const versionB = engineB?.version ?? defaultVersion;
	const brandA = engineA?.brand ?? "";
	const brandB = engineB?.brand ?? "";

	return (
		brandA.localeCompare(brandB) ||
		getAdjustedUnityMajor(engineA) - getAdjustedUnityMajor(engineB) ||
		(versionA.numbers.minor ?? 0) - (versionB.numbers.minor ?? 0) ||
		(versionA.numbers.patch ?? 0) - (versionB.numbers.patch ?? 0) ||
		0
	);
}
