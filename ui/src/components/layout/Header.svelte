<script lang="ts">
	import { base } from '$app/paths'
	import { AppRoute, appRoute } from '@lib/app'
	import { LinkSidebar, WebsiteNavbar } from '@components'

	$: linkColor = getLinkColor($appRoute)
	function getLinkColor(route: AppRoute): string {
		switch (route) {
			case AppRoute.Error:
			case AppRoute.About:
			case AppRoute.Music:
			case AppRoute.PhotosAndVideos:
				return '#eef2ff'
			case AppRoute.Home:
			default:
				return 'slate-950'
		}
	}
</script>

<header class="flex flex-row justify-center items-center">
	<WebsiteNavbar />
	{#if $appRoute !== AppRoute.Home}
		<logo-header class="absolute top-8 w-[20vw]">
			<a href="/">
				<img src="{base}/logos/white.svg" alt="Apellum logo" />
			</a>
		</logo-header>
	{/if}
	<LinkSidebar {linkColor} />
</header>
