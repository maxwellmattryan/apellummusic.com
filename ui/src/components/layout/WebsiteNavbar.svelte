<script lang="ts" context="module">
	export enum WebsiteRoute {
		Home = 'home',
		About = 'about',
		PhotosAndVideos = 'photosAndVideos',
		Events = 'events'
	}
</script>

<script lang="ts">
	import { FEATURES } from '@lib/features'

	export let route: WebsiteRoute | undefined = undefined

	function getWebsiteRoutes(): WebsiteRoute[] {
		return Object.values(WebsiteRoute).filter((route) => FEATURES[route]?.enabled)
	}

	function getWebsiteRouteUrl(route: WebsiteRoute): string {
		switch (route) {
			default:
			case WebsiteRoute.Home:
				return ''
			case WebsiteRoute.About:
				return 'about'
			case WebsiteRoute.PhotosAndVideos:
				return 'media'
			case WebsiteRoute.Events:
				return 'events'
		}
	}

	function getWebsiteRouteText(route: WebsiteRoute): string {
		switch (route) {
			default:
			case WebsiteRoute.Home:
				return 'Home'
			case WebsiteRoute.About:
				return 'About'
			case WebsiteRoute.PhotosAndVideos:
				return 'Photos & Videos'
			case WebsiteRoute.Events:
				return 'Events'
		}
	}
</script>

<website-navbar class="absolute top-[8vw] left-4">
	<nav class="flex flex-col">
		{#each getWebsiteRoutes() as websiteRoute}
			{@const selected = route === websiteRoute}
			<website-navbar-link class:selected class="group h-[1.625rem]">
				<website-navbar-link-highlight class="border-solid border-l-2"
				></website-navbar-link-highlight>
				<a href={'/' + getWebsiteRouteUrl(websiteRoute)}>{getWebsiteRouteText(websiteRoute)}</a>
			</website-navbar-link>
		{/each}
	</nav>
</website-navbar>

<style lang="postcss">
	website-navbar-link {
		@apply text-[#eeeff9];
		@apply opacity-60 transition-opacity;
		&:hover,
		&.selected {
			@apply text-[#fafafd];
			@apply opacity-100;
		}
		&.selected {
			& website-navbar-link-highlight {
				@apply border-[#ef2e5e];
			}
		}
		& website-navbar-link-highlight {
			@apply border-slate-950;
		}
		& a {
			@apply ml-2;
		}
	}
</style>
