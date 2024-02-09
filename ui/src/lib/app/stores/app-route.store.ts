import { writable } from 'svelte/store'
import type { AppRoute } from '../enums'

export const appRoute = writable<AppRoute>()

export function setAppRoute(route: AppRoute): void {
	if (route) {
		appRoute.set(route)
	}
}
