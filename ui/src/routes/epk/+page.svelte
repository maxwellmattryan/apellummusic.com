<script lang="ts">
	import { onMount } from 'svelte'
	import { Contact, Icon } from '@components'
	import { AppRoute, IconName, getPageTitle, setAppRoute } from '@lib/app'
	import { EPK_DATA } from '@lib/data/epk'
	import { EpkBiographySection, EpkMusicSection, EpkPressSection } from './components'

	const { downloadUrl, biographyData, musicData, pressData } = EPK_DATA

	onMount(() => {
		setAppRoute(AppRoute.Epk)
	})
</script>

<svelte:head>
	<title>{getPageTitle(AppRoute.Epk)}</title>
</svelte:head>
<epk-page class="w-full h-auto mb-[15vh] flex flex-col items-center">
	<a
		href={downloadUrl}
		target="_blank"
		class="download-link invisible md:visible mt-2 md:mb-[10vh] flex flex-row justify-center items-center"
	>
		<p type="button" class="download">Download (.zip)</p>
		<Icon icon={IconName.Download} />
	</a>
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

	.download-link {
		@apply opacity-60;
		@apply transition-opacity;

		&:hover {
			@apply opacity-100;
		}
	}
</style>
