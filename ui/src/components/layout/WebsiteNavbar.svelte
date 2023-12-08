<script lang="ts">
	import { appRoute, AppRoute, closeSideDrawer, getPageHeader, setAppRoute } from '@lib/app'
	import { FEATURES } from '@lib/features'

	export let context: 'page' | 'drawer' = 'page'
	export let direction: 'left' | 'right' = 'left'

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

		closeSideDrawer()
	}
</script>

<website-navbar class="{context} {direction}-4">
	<nav class="flex flex-col">
		{#each getAppRoutes() as route}
			{@const selected = route === $appRoute}
			<website-navbar-link
				class:selected
				class:invisible={FEATURES[route]?.hidden}
				class="group h-[{context === 'page' ? '1.8125' : '3'}rem] {direction === 'right'
					? 'text-right'
					: ''}"
			>
				{#if direction === 'left'}
					<website-navbar-link-highlight class="border-solid border-l-2"
					></website-navbar-link-highlight>
				{/if}
				<a
					href={'/' + getAppRouteUrl(route)}
					on:click={() => onAppRouteClick(route)}
					class={direction === 'left' ? 'ml-4' : 'mr-4'}
					aria-label={route}>{getPageHeader(route)}</a
				>
				{#if direction === 'right'}
					<website-navbar-link-highlight class="border-solid border-r-2"
					></website-navbar-link-highlight>
				{/if}
			</website-navbar-link>
		{/each}
	</nav>
</website-navbar>

<style lang="postcss">
	website-navbar {
		&.page {
			@apply absolute top-[8vh] left-4;
		}

		&.drawer {
			@apply mt-[8vh] pr-8;
		}
	}

	website-navbar-link {
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
	}
</style>
