<script lang="ts">
	import { onMount } from 'svelte'
	import { base } from '$app/paths'
	import { EpkSection, Icon, IconName, EpkBiographySection, MultiMusic } from '@components'
	import { AppRoute, getPageTitle, setAppRoute } from '@lib/app'
	import { EPK_DATA } from '@lib/data/epk'

	const { downloadUrl, biographyData, musicImage, pressImages } = EPK_DATA

	function onDownloadClick(): void {
		window.open(downloadUrl)
	}

	onMount(() => {
		setAppRoute(AppRoute.Epk)
	})
</script>

<svelte:head>
	<title>{getPageTitle(AppRoute.Epk)}</title>
</svelte:head>
<epk-page class="w-full h-auto mb-[15vh] flex flex-col items-center">
	<download-button class="mt-2 mb-[10vh] flex flex-row justify-center items-center">
		<button class="download" on:click={onDownloadClick}> Download (.zip) </button>
		<Icon icon={IconName.Download} />
	</download-button>
	<EpkBiographySection {biographyData} />
	<EpkSection title="Music">
		<MultiMusic />
		<img class="w-1/2 object-contain" src="{base}/images/{musicImage}" alt="EPK 2" />
	</EpkSection>
	<EpkSection title="Press">
		{#each pressImages as pressImage, index}
			<img class="w-1/3 object-contain" src="{base}/images/{pressImage}" alt="EPK {index + 3}" />
		{/each}
	</EpkSection>
</epk-page>

<style lang="postcss">
	:global(epk-section:not(:first-of-type)) {
		@apply mt-[15vh];
	}

	download-button {
		@apply opacity-60;
		@apply transition-opacity;

		&:hover {
			@apply opacity-100;
		}
	}
</style>
