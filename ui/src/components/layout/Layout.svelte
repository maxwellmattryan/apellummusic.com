<script lang="ts">
	import { Footer, Header } from '@components'
	import { AppRoute, appRoute } from '@lib/app'

	$: isHomeRoute = $appRoute === AppRoute.Home
</script>

<layout class="w-full h-screen flex flex-col items-center">
	<Header />
	<div class="w-full h-full {isHomeRoute ? '' : 'pt-[20vh] px-[15vw]'}">
		<slot />
	</div>
	{#if !isHomeRoute}
		<Footer />
	{/if}
</layout>

<style lang="postcss">
	layout {
		@apply text-indigo-50;
	}
</style>
