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
			: 'auto'} {isHomeRoute ? '' : 'pt-[20vh] px-[15vw]'}"
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

	h2 {
		@apply font-semibold;
	}
</style>
