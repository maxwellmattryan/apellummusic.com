<script lang="ts">
	import { appRoute, AppRoute, getPageHeader, setAppRoute } from '@lib/app'
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
			case AppRoute.Music:
				return 'music'
			case AppRoute.Epk:
				return 'epk'
			case AppRoute.PhotosAndVideos:
				return 'media'
			case AppRoute.Events:
				return 'events'
		}
	}

	function onAppRouteClick(route: AppRoute): void {
		switch (route) {
			case AppRoute.Home:
				setAppRoute(route)
				break
			case AppRoute.About:
			case AppRoute.Music:
			case AppRoute.Epk:
			case AppRoute.PhotosAndVideos:
			case AppRoute.Events:
			default:
				break
		}
	}
</script>

<website-navbar class="pl-4 absolute top-[8vh] left-0">
	<nav class="flex flex-col">
		{#each getAppRoutes() as route}
			{@const selected = route === $appRoute}
			<website-navbar-link
				class:selected
				class:invisible={FEATURES[route]?.hidden}
				class="group h-[1.625rem]"
			>
				<website-navbar-link-highlight class="border-solid border-l-2"
				></website-navbar-link-highlight>
				<a href={'/' + getAppRouteUrl(route)} on:click={() => onAppRouteClick(route)}
					>{getPageHeader(route)}</a
				>
			</website-navbar-link>
		{/each}
	</nav>
</website-navbar>

<style lang="postcss">
	website-navbar-link {
		@apply text-indigo-50;
		@apply opacity-60;
		@apply transition-opacity;

		animation-fill-mode: both;

		&:hover,
		&.selected {
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
			@apply font-medium;
			@apply ml-4;
		}
	}
</style>
