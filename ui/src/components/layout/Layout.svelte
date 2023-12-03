<script lang="ts">
	import { Footer, Header } from '@components'
	import { AppRoute, appRoute, getPageHeader } from '@lib/app'

	$: isHomeRoute = $appRoute === AppRoute.Home
	$: isErrorRoute = $appRoute === AppRoute.Error
</script>

<layout class="w-full h-screen flex flex-col items-center">
	<Header />
	<page-content
		class="w-full h-{isHomeRoute || isErrorRoute || $appRoute === AppRoute.Music
			? 'full'
			: 'auto'} {isHomeRoute ? '' : 'pt-[20vh] px-[10vw] md:px-[15vw]'}"
	>
		{#if !isHomeRoute && !isErrorRoute}
			<h2 class="text-indigo-50">
				{getPageHeader($appRoute)}
			</h2>
		{/if}
		<slot />
	</page-content>
	{#if !isHomeRoute}
		<Footer />
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
		@apply font-semibold;
	}

	:global(p, a, button) {
		@apply font-medium;
		@apply text-xs leading-6 md:text-lg md:leading-8 !important;
	}
</style>
