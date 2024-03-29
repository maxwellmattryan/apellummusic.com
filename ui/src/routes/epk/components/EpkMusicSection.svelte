<script lang="ts">
	import { base } from '$app/paths'
	import EpkMusicCard from './EpkMusicCard.svelte'
	import EpkSection from './EpkSection.svelte'
	import {
		filterHiddenMusicItemsForCollections,
		getTextFromMusicCollectionType,
	} from '@lib/app/utils'
	import type { IEpkMusicData } from '@lib/data/epk'
	import { MusicCollectionType } from '@lib/data/music'

	export let musicData: IEpkMusicData

	const { image, collections } = musicData
	const filteredCollections = filterHiddenMusicItemsForCollections(collections)

	let selectedMusicCollectionType: MusicCollectionType = MusicCollectionType.Original

	function onMusicTypeClick(musicCollectionType: MusicCollectionType): void {
		selectedMusicCollectionType = musicCollectionType
	}
</script>

<EpkSection title="Music" justifyLeft={false}>
	<img
		class="w-full md:w-1/2 max-h-[640px] object-contain"
		src="{base}/images/{image}"
		alt="EPK music"
	/>
	<epk-music class="w-full h-full flex flex-col">
		<epk-music-header class="flex flex-row justify-between items-start">
			<epk-music-collection-selector class="flex flex-row items-center mb-4">
				{#each Object.values(MusicCollectionType) as musicCollectionType}
					{@const selected = musicCollectionType === selectedMusicCollectionType}
					<epk-music-collection-selector-item class:selected>
						<button
							type="button"
							on:click={() => onMusicTypeClick(musicCollectionType)}
							class="{selected
								? 'border-b-2 border-solid border-[#4c5adb]'
								: ''} font-medium text-indigo-50"
						>
							{getTextFromMusicCollectionType(musicCollectionType)}
						</button>
					</epk-music-collection-selector-item>
				{/each}
			</epk-music-collection-selector>
		</epk-music-header>
		<epk-selected-music-collection class="space-y-4">
			{#key selectedMusicCollectionType}
				{#each filteredCollections[selectedMusicCollectionType] as musicItem}
					<div class="epk-music-collection-item">
						<EpkMusicCard {musicItem} />
					</div>
				{/each}
			{/key}
		</epk-selected-music-collection>
	</epk-music>
</EpkSection>

<style lang="postcss">
	epk-music-collection-selector-item {
		@apply opacity-60;
		@apply transition-opacity;

		animation-fill-mode: both;

		&:hover,
		&.selected {
			@apply opacity-100;
		}

		&:not(:first-of-type) {
			@apply ml-4;
		}
	}

	.epk-music-collection-item:not(:first-of-type) {
		@apply mt-4;
	}
</style>
