<script lang="ts" context="module">
	export enum WebsiteRoute {
		Home = 'home',
		About = 'about',
		PhotosAndVideos = 'photosAndVideos',
		Events = 'events'
	}
</script>

<script lang="ts">
	export let route: WebsiteRoute | undefined = undefined

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
		{#each Object.values(WebsiteRoute) as websiteRoute}
			{@const selected = route === websiteRoute}
			<website-navbar-link class:selected class="group h-[1.625rem]">
				{#if selected}
					<website-navbar-link-selected class="border-solid border-l-2 border-[#ef2e5e]">
					</website-navbar-link-selected>
				{:else}
					<website-navbar-link-unselected class="border-solid border-l-2 border-slate-950">
					</website-navbar-link-unselected>
				{/if}
				<a class="ml-2" href={'/' + getWebsiteRouteUrl(websiteRoute)}
					>{getWebsiteRouteText(websiteRoute)}</a
				>
			</website-navbar-link>
		{/each}
	</nav>
</website-navbar>
