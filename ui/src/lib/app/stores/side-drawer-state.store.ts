import { writable } from 'svelte/store'
import { DEFAULT_SIDE_DRAWER_STATE } from '../constants'
import type { ISideDrawerState } from '../interfaces'

export const sideDrawerState = writable<ISideDrawerState>(DEFAULT_SIDE_DRAWER_STATE)

export function updateSideDrawerState(payload: Partial<ISideDrawerState>): void {
	sideDrawerState.update((state) => {
		return {
			...state,
			...payload,
		}
	})
}
