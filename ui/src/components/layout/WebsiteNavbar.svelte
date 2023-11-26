<script lang="ts">
	import { appRoute, AppRoute, setAppRoute } from '@lib/app'
	import { FEATURES } from '@lib/features'

	function getAppRoutes(): AppRoute[] {
		return Object.values(AppRoute).filter((route) => FEATURES[route]?.enabled)
	}

	function getAppRouteUrl(route: AppRoute): string {
		switch (route) {
			default:
			case AppRoute.Home:
				return ''
			case AppRoute.About:
				return 'about'
			case AppRoute.PhotosAndVideos:
				return 'media'
			case AppRoute.Events:
				return 'events'
		}
	}

	function getAppRouteText(route: AppRoute): string {
		switch (route) {
			default:
			case AppRoute.Home:
				return 'Home'
			case AppRoute.About:
				return 'About'
			case AppRoute.PhotosAndVideos:
				return 'Photos & Videos'
			case AppRoute.Events:
				return 'Events'
		}
	}

	function onAppRouteClick(route: AppRoute): void {
		switch (route) {
			case AppRoute.Home:
				setAppRoute(route)
				break
			case AppRoute.About:
			case AppRoute.PhotosAndVideos:
			case AppRoute.Events:
			default:
				break
		}
	}
</script>

<website-navbar class="absolute top-[8vw] left-4">
	<nav class="flex flex-col">
		{#each getAppRoutes() as route}
			{@const selected = route === $appRoute}
			<website-navbar-link class:selected class="group h-[1.625rem]">
				<website-navbar-link-highlight class="border-solid border-l-2"
				></website-navbar-link-highlight>
				<a href={'/' + getAppRouteUrl(route)} on:click={() => onAppRouteClick(route)}
					>{getAppRouteText(route)}</a
				>
			</website-navbar-link>
		{/each}
	</nav>
</website-navbar>

<style lang="postcss">
	website-navbar-link {
		@apply text-[#eeeff9];
		@apply opacity-60;
		@apply transition-opacity;

		animation-fill-mode: both;

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
