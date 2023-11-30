<script lang="ts">
	import { onMount } from 'svelte'
	import { base } from '$app/paths'
	import { EpkSection, Icon, IconName, MultiBiography, MultiMusic } from '@components'
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
<epk-page class="w-full h-auto mb-[15vh] flex flex-col items-center">
	<download-button class="mt-2 mb-[10vh] flex flex-row justify-center items-center">
		<button class="download" on:click={onDownloadClick}> Download (.zip) </button>
		<Icon icon={IconName.Download} />
	</download-button>
	<EpkSection title="Biographies">
		<img class="w-1/2 object-contain" src="{base}/images/press_epk-01.jpg" alt="EPK 1" />
		<MultiBiography />
	</EpkSection>
	<EpkSection title="Music">
		<MultiMusic />
		<img class="w-1/2 object-contain" src="{base}/images/press_epk-02.jpg" alt="EPK 2" />
	</EpkSection>
	<EpkSection title="Press">
		<img class="w-1/3 object-contain" src="{base}/images/press_epk-03.jpg" alt="EPK 3" />
		<img class="w-1/3 object-contain" src="{base}/images/press_epk-04.jpg" alt="EPK 4" />
		<img class="w-1/3 object-contain" src="{base}/images/press_epk-05.jpg" alt="EPK 5" />
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
