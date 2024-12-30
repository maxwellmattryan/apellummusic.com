<script lang="ts">
	import { onMount } from 'svelte'
	import { base } from '$app/paths'
	import { AppRoute, getPageTitle, setAppRoute, isMobile } from '@lib/app'

	const backgroundImageUrl = `${base}/images/press_home.jpg`

	onMount(() => {
		setAppRoute(AppRoute.Home)
	})
</script>

<svelte:head>
	<title>{getPageTitle(AppRoute.Home)}</title>
</svelte:head>
<home-page class="w-full h-screen max-h-screen flex flex-row">
	<home-page-left
		class="w-full md:w-1/2 absolute md:static flex flex-col justify-center items-center"
	>
		<div
			class="w-full max-w-3xl h-full md:px-[6rem] flex flex-col justify-center items-center md:items-end text-right"
		>
			<img
				src="{base}/logos/white.svg"
				alt="Apellum logo"
				class="invisible md:visible object-contain"
			/>
			<!-- ghost header -->
			<h1 class="invisible h-0">Apellum</h1>
			<h2 class="{$isMobile ? 'mt-[38vh]' : 'mt-4'} italic">Techno producer & DJ</h2>
		</div>
	</home-page-left>
	<home-page-right class="w-full md:w-1/2 h-full" style="--bg-image-url: url({backgroundImageUrl})">
	</home-page-right>
</home-page>

<style lang="postcss">
	home-page-right {
		background-image: var(--bg-image-url);
		@apply bg-cover bg-center;
	}

	h2 {
		@apply text-2xl md:text-4xl !important;
		@apply text-left md:text-right;
		@apply opacity-95 text-indigo-100 md:opacity-80;
		@apply absolute md:static;
		@apply top-[10vh];
	}
</style>
