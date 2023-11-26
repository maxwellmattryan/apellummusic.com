<script lang="ts">
	import { base } from '$app/paths'
	import { onMount } from 'svelte'
	import { AppRoute, setAppRoute } from '@lib/app'

	const backgroundImageUrl = `${base}/images/press_home.jpg`

	onMount(() => {
		setAppRoute(AppRoute.Home)
	})
</script>

<home-page class="w-full h-full max-h-screen flex flex-row">
	<home-page-left class="w-1/2 h-full flex flex-col justify-center items-center">
		<div
			class="w-full max-w-3xl h-full px-[6rem] flex flex-col justify-center items-end text-right"
		>
			<img src="{base}/logos/white.svg" alt="Apellum logo" />
			<!-- ghost header -->
			<h1 class="invisible h-0">Apellum</h1>
			<h2 class="mt-4 italic text-right">Techno producer & DJ</h2>
		</div>
	</home-page-left>
	<home-page-right class="w-1/2 h-full" style="--bg-image-url: url({backgroundImageUrl})">
	</home-page-right>
</home-page>

<style lang="postcss">
	home-page-right {
		@apply text-indigo-50;
		background-image: var(--bg-image-url);
		@apply bg-cover bg-center;
	}
</style>
