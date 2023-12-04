<script lang="ts">
	import { onMount } from 'svelte'
	import { base } from '$app/paths'
	import { AppRoute, appRoute } from '@lib/app'
	import { LinkSidebar, WebsiteNavbar } from '@components'

	$: linkColor = getLinkColor($appRoute)
	function getLinkColor(route: AppRoute): string {
		switch (route) {
			case AppRoute.Error:
			case AppRoute.About:
			case AppRoute.Music:
			case AppRoute.Epk:
			case AppRoute.PhotosAndVideos:
				return '#eef2ff'
			case AppRoute.Home:
			default:
				return 'slate-950'
		}
	}

	let showSidebar: boolean = false

	function toggleSidebar(): void {
		showSidebar = !showSidebar
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

<header class="w-full sticky top-0 z-10">
	<mobile-layout
		class="absolute top-0 w-full pt-6 px-6 visible md:invisible flex flex-row justify-between items-center"
	>
		<a href="/">
			<!--			<img src="{base}/logos/white.svg" alt="Apellum logo" />-->
			A
		</a>
		<button type="button" on:click={toggleSidebar}> Sidebar </button>
	</mobile-layout>
	<desktop-layout
		class="absolute top-0 w-full invisible md:visible flex flex-row justify-center items-center"
	>
		<WebsiteNavbar />
		{#if $appRoute !== AppRoute.Home}
			<logo-header class:hide={!showLogoHeader} class="absolute top-8 w-[20vw]">
				<!-- ghost header -->
				<h1 class="invisible h-0">Apellum</h1>
				<a href="/">
					<img src="{base}/logos/white.svg" alt="Apellum logo" />
				</a>
			</logo-header>
		{/if}
		<LinkSidebar {linkColor} />
	</desktop-layout>
</header>

<style lang="postcss">
	logo-header {
		@apply transition-opacity;
	}

	.hide {
		@apply opacity-0;
	}
</style>
