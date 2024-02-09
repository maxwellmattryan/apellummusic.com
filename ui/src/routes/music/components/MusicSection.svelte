<script lang="ts">
	import { base } from '$app/paths'
	import { getTextFromMusicCollectionType } from '@lib/app'
	import type { IMusicItem, MusicCollectionType } from '@lib/data/music'

	export let collectionType: MusicCollectionType
	export let collection: IMusicItem[]
</script>

<music-section>
	<about-section-header>
		<h3>{getTextFromMusicCollectionType(collectionType)}</h3>
	</about-section-header>
	{#each collection as musicItem}
		<img src="{base}/images/{musicItem.image}.jpg" alt={musicItem.image} class="aspect-square" />
	{/each}
</music-section>
