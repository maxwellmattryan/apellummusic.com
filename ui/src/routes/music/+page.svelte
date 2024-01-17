<script lang="ts">
	import { onMount } from 'svelte'
	import { AppRoute, getPageTitle, setAppRoute } from '@lib/app'
	import { MUSIC_DATA } from '@lib/data/music'
	import { MusicSection } from './components'

	const { collections } = MUSIC_DATA

	onMount(() => {
		setAppRoute(AppRoute.Music)
	})
</script>

<svelte:head>
	<title>{getPageTitle(AppRoute.Music)}</title>
</svelte:head>
<music-page class="w-full h-auto mt-[10vh] mb-[15vh] flex flex-col items-center">
	{#each Object.entries(collections) as [collectionType, collection]}
		<MusicSection {collectionType} {collection} />
	{/each}
</music-page>
