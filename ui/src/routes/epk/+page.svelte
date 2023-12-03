<script lang="ts">
	import { onMount } from 'svelte'
	import { Contact, Icon } from '@components'
	import { AppRoute, IconName, getPageTitle, setAppRoute } from '@lib/app'
	import { EPK_DATA } from '@lib/data/epk'
	import { EpkBiographySection, EpkMusicSection, EpkPressSection } from './components'

	const { downloadUrl, biographyData, musicData, pressData } = EPK_DATA

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
	<download-button
		class="invisible md:visible mt-2 md:mb-[10vh] flex flex-row justify-center items-center"
	>
		<button class="download" on:click={onDownloadClick}> Download (.zip) </button>
		<Icon icon={IconName.Download} />
	</download-button>
	<EpkBiographySection {biographyData} />
	<EpkMusicSection {musicData} />
	<EpkPressSection {pressData} />
	<epk-section>
		<Contact />
	</epk-section>
</epk-page>

<style lang="postcss">
	:global(epk-section:not(:first-of-type)) {
		@apply mt-[10vh];
	}

	download-button {
		@apply opacity-60;
		@apply transition-opacity;

		&:hover {
			@apply opacity-100;
		}
	}
</style>
