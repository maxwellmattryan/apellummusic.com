<script lang="ts">
	import { LinkSidebar, WebsiteNavbar } from '@components'
	import { AppRoute, appRoute } from '@lib/app'

	$: linkColor = getLinkColor($appRoute)
	function getLinkColor(route: AppRoute): string {
		switch (route) {
			case AppRoute.Error:
			case AppRoute.About:
			case AppRoute.PhotosAndVideos:
				return '#eeeff9'
			case AppRoute.Home:
			default:
				return 'slate-950'
		}
	}
</script>

<layout class="w-full h-screen flex flex-col justify-center items-center">
	<WebsiteNavbar />
	<LinkSidebar {linkColor} />
	<slot />
</layout>

<style lang="postcss">
	layout {
		@apply bg-slate-950;
		@apply text-indigo-50;
	}
</style>
