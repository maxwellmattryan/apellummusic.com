<script lang="ts">
	import { onMount } from 'svelte'
	import { AppRoute, getPageTitle, setAppRoute } from '@lib/app'
	import { ABOUT_DATA } from '@lib/data/about'
	import { AboutSection } from './components'

	const { sections } = ABOUT_DATA

	onMount(() => {
		setAppRoute(AppRoute.About)
	})
</script>

<svelte:head>
	<title>{getPageTitle(AppRoute.About)}</title>
</svelte:head>
<about-page class="w-full h-auto mt-[10vh] mb-[15vh] flex flex-col items-center">
	{#each sections as section, index}
		<div class="about-section">
			<AboutSection {section} {index} justifyLeft={index % 2 === 0} />
		</div>
	{/each}
</about-page>

<style lang="postcss">
	.about-section:not(:first-of-type) {
		@apply mt-[10vh];
	}
</style>
