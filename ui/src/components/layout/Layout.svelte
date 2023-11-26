<script lang="ts">
	import { Footer, Header } from '@components'
	import { AppRoute, appRoute } from '@lib/app'

	$: isHomeRoute = $appRoute === AppRoute.Home
	$: isErrorRoute = $appRoute === AppRoute.Error
</script>

<layout class="w-full h-screen flex flex-col items-center">
	<Header />
	<div
		class="w-full h-{isHomeRoute ||
		isErrorRoute ||
		$appRoute === AppRoute.Music ||
		$appRoute === AppRoute.Epk
			? 'full'
			: 'auto'} {isHomeRoute ? '' : 'pt-[20vh] px-[15vw]'}"
	>
		<slot />
	</div>
	{#if !isHomeRoute}
		<div class="mt-[20vh]">
			<Footer />
		</div>
	{/if}
</layout>

<style lang="postcss">
	layout {
		@apply text-indigo-50;
	}
</style>
