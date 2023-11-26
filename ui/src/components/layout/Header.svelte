<script lang="ts">
	import { base } from '$app/paths'
	import { AppRoute, appRoute } from '@lib/app'
	import { LinkSidebar, WebsiteNavbar } from '@components'
	import { onMount } from 'svelte'

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

	let showLogoHeader: boolean = true

	onMount(() => {
		window.onscroll = () => {
			if (window.scrollY > 100) {
				showLogoHeader = false
			} else {
				showLogoHeader = true
			}
		}
	})
</script>

<header class="w-full sticky top-0 flex flex-row justify-center items-center">
	<WebsiteNavbar />
	{#if $appRoute !== AppRoute.Home}
		<logo-header class:hide={!showLogoHeader} class="absolute top-8 w-[20vw]">
			<a href="/">
				<img src="{base}/logos/white.svg" alt="Apellum logo" />
			</a>
		</logo-header>
	{/if}
	<LinkSidebar {linkColor} />
</header>

<style lang="postcss">
	logo-header {
		@apply transition-opacity;
	}

	.hide {
		@apply opacity-0;
	}
</style>
