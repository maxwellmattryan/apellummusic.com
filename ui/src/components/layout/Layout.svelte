<script lang="ts">
	import { Footer, Header, WebsiteNavbar } from '@components'
	import { AppRoute, appRoute, closeSideDrawer, getPageHeader, sideDrawerState } from '@lib/app'

	$: console.log('side drawer hidden: ', $sideDrawerState.hidden)

	$: isHomeRoute = $appRoute === AppRoute.Home
	$: isErrorRoute = $appRoute === AppRoute.Error
</script>

<side-drawer
	class="absolute top-0 right-0 {$sideDrawerState.hidden
		? 'w-0'
		: 'w-screen'} h-screen md:invisible z-20 overflow-x-hidden"
>
	<button type="button" on:click={closeSideDrawer}>SIDEBARSIBDEARSIDEBAR</button>
	<WebsiteNavbar />
</side-drawer>
<layout class="w-full flex flex-col items-center">
	<Header />
	<page-content
		class="w-full h-{isHomeRoute || isErrorRoute || $appRoute === AppRoute.Music
			? 'full'
			: 'auto'} {isHomeRoute ? '' : 'pt-[12vh] md:pt-[20vh] px-[10vw] md:px-[15vw]'}"
	>
		{#if !isHomeRoute && !isErrorRoute}
			<h2 class="text-indigo-50">
				{getPageHeader($appRoute)}
			</h2>
		{/if}
		<slot />
	</page-content>
	{#if !isHomeRoute}
		<div class={$appRoute === AppRoute.Music ? 'absolute bottom-0' : ''}>
			<Footer />
		</div>
	{/if}
</layout>

<style lang="postcss">
	side-drawer {
		@apply bg-slate-950;

		transition: width 500ms ease-in-out;
		animation-fill-mode: both;
	}

	layout {
		@apply text-indigo-50;
	}

	:global(h1, h2, h3, h4, h5, h6, p, a, button) {
		@apply text-indigo-50;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		@apply font-semibold !important;
	}

	:global(p, a, button) {
		@apply font-medium !important;
		@apply text-xs leading-6 md:text-lg md:leading-8 !important;
	}
</style>
