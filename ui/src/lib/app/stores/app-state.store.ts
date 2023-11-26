import { get, writable } from 'svelte/store'

import { AppState } from '../enums'

export const appState = writable<AppState | undefined>(undefined)

export function getAppState(): AppState {
	return get(appState)
}

export function setAppState(state: AppState): void {
	if (state) {
		appState.set(state)
	}
}

export function isAppInErrorState(): boolean {
	return get(appState) === AppState.Error
}
