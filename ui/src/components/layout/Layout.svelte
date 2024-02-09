<script lang="ts">
	import { Footer, Header, SideDrawer } from '@components'
	import { AppRoute, appRoute, getPageHeader } from '@lib/app'

	$: isHomeRoute = $appRoute === AppRoute.Home
	$: isErrorRoute = $appRoute === AppRoute.Error
</script>

<SideDrawer />
<layout class="w-full flex flex-col items-center">
	<Header />
	<page-content
		class="w-full h-{isHomeRoute || isErrorRoute ? 'full' : 'auto'} {isHomeRoute
			? ''
			: 'pt-[12vh] md:pt-[20vh] px-[10vw] md:px-[15vw]'}"
	>
		{#if !isHomeRoute && !isErrorRoute}
			<h2 class="text-indigo-50">
				{getPageHeader($appRoute)}
			</h2>
		{/if}
		<slot />
	</page-content>
	{#if !isHomeRoute}
		<div class={$appRoute === AppRoute.Error ? 'absolute bottom-0' : ''}>
			<Footer />
		</div>
	{/if}
</layout>

<style lang="postcss">
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
		@apply text-sm leading-6 md:text-base md:leading-8 !important;
	}
</style>
