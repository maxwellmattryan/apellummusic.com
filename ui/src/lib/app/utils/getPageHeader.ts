import { AppRoute } from '../enums'

export function getPageHeader(route: AppRoute): string {
	switch (route) {
		default:
		case AppRoute.Error:
			return 'Error'
		case AppRoute.Home:
			return 'Home'
		case AppRoute.About:
			return 'About'
		case AppRoute.Music:
			return 'Music'
		case AppRoute.Epk:
			return 'EPK'
		case AppRoute.PhotosAndVideos:
			return 'Photos & Videos'
		case AppRoute.Events:
			return 'Events'
	}
}
