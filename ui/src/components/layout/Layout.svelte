<script lang="ts">
	import { base } from '$app/paths'
	import { LinkSidebar, WebsiteNavbar } from '@components'
	import { AppRoute, appRoute } from '@lib/app'

	$: showLogoHeader = shouldShowLogoHeader($appRoute)
	function shouldShowLogoHeader(route: AppRoute): boolean {
		switch (route) {
			default:
			case AppRoute.Error:
			case AppRoute.About:
			case AppRoute.PhotosAndVideos:
				return true
			case AppRoute.Home:
				return false
		}
	}

	$: linkColor = getLinkColor($appRoute)
	function getLinkColor(route: AppRoute): string {
		switch (route) {
			case AppRoute.Error:
			case AppRoute.About:
			case AppRoute.PhotosAndVideos:
				return '#eef2ff'
			case AppRoute.Home:
			default:
				return 'slate-950'
		}
	}
</script>

<layout class="w-full h-screen flex flex-col justify-center items-center">
	<WebsiteNavbar />
	{#if showLogoHeader}
		<logo-header class="absolute top-8 w-[20vw]">
			<a href="/">
				<img src="{base}/logos/white.svg" alt="Apellum logo" />
			</a>
		</logo-header>
	{/if}
	<LinkSidebar {linkColor} />
	<slot />
</layout>

<style lang="postcss">
	layout {
		@apply text-indigo-50;
	}
</style>
