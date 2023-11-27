<script lang="ts">
	import { onMount } from 'svelte'
	import { base } from '$app/paths'
	import { MultiBiography, MultiMusic } from '@components'
	import { AppRoute, getPageTitle, setAppRoute } from '@lib/app'

	function onDownloadClick(): void {
		window.open('https://storage.googleapis.com/apellum-files/epks/apellum-epk.zip')
	}

	onMount(() => {
		setAppRoute(AppRoute.Epk)
	})
</script>

<svelte:head>
	<title>{getPageTitle(AppRoute.Epk)}</title>
</svelte:head>
<epk-page class="w-full h-auto flex flex-col items-center">
	<button class="download mt-2 mb-[5vh]" on:click={onDownloadClick}>Download (.zip)</button>
	<epk-bio-section class="epk-section w-full h-auto flex flex-col">
		<epk-bio-section-header class="mb-8">
			<h3>Biographies</h3>
		</epk-bio-section-header>
		<epk-bio-section-content class="flex flex-row items-start px-[4vw] gap-8">
			<img class="w-1/2 object-contain" src="{base}/images/press_epk-01.jpg" alt="EPK 1" />
			<MultiBiography />
		</epk-bio-section-content>
	</epk-bio-section>
	<epk-music-section class="epk-section mt-[10vh] w-full h-auto flex flex-col">
		<epk-music-section-header class="mb-8">
			<h3>Music</h3>
		</epk-music-section-header>
		<epk-music-section-content class="flex flex-row items-start px-[4vw] gap-8">
			<MultiMusic />
			<img class="w-1/2 object-contain" src="{base}/images/press_epk-02.jpg" alt="EPK 2" />
		</epk-music-section-content>
	</epk-music-section>
	<epk-press-section class="epk-section mt-[10vh] w-full h-auto flex flex-col">
		<epk-press-section-header class="mb-8">
			<h3>Press</h3>
		</epk-press-section-header>
		<epk-press-section-content class="flex flex-row items-start px-[4vw] gap-8">
			<img class="w-1/3 object-contain" src="{base}/images/press_epk-03.jpg" alt="EPK 3" />
			<img class="w-1/3 object-contain" src="{base}/images/press_epk-04.jpg" alt="EPK 4" />
			<img class="w-1/3 object-contain" src="{base}/images/press_epk-05.jpg" alt="EPK 5" />
		</epk-press-section-content>
	</epk-press-section>
</epk-page>

<style lang="postcss">
	h3 {
		@apply font-semibold;
	}

	button.download {
		@apply opacity-60;
		@apply transition-opacity;

		&:hover {
			@apply opacity-100;
		}
	}
</style>
