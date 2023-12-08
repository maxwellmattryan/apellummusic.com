import { BASE_PAGE_TITLE } from '../constants'
import { AppRoute } from '../enums'

export function getPageTitle(route: AppRoute): string {
	switch (route) {
		default:
		case AppRoute.Error:
			return `Page not found | ${BASE_PAGE_TITLE}`
		case AppRoute.Home:
			return `${BASE_PAGE_TITLE}`
		case AppRoute.About:
			return `About | ${BASE_PAGE_TITLE}`
		case AppRoute.Music:
			return `Music | ${BASE_PAGE_TITLE}`
		case AppRoute.Epk:
			return `EPK | ${BASE_PAGE_TITLE}`
		case AppRoute.PhotosAndVideos:
			return `Photos & Videos | ${BASE_PAGE_TITLE}`
		case AppRoute.Events:
			return `Events | ${BASE_PAGE_TITLE}`
	}
}
