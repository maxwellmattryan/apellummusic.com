import { get, writable } from 'svelte/store'
import { AppRoute } from '../enums'

export const appRoute = writable<AppRoute>()

export function getAppRoute(): AppRoute {
	return get(appRoute)
}

export function setAppRoute(route: AppRoute): void {
	console.log('route: ', route)
	if (route) {
		appRoute.set(route)
	}
}
