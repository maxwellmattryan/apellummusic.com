<script lang="ts">
	import { base } from '$app/paths'
	import { Music } from '@components'
	import EpkSection from './EpkSection.svelte'
	import type { IEpkMusicData } from '@lib/data/epk'
	import { EpkMusicCollectionType } from '@lib/data/epk'

	export let musicData: IEpkMusicData

	const { image, collections } = musicData

	let selectedMusicCollectionType: EpkMusicCollectionType = EpkMusicCollectionType.Original

	function onMusicTypeClick(musicCollectionType: EpkMusicCollectionType): void {
		selectedMusicCollectionType = musicCollectionType
	}

	function getMusicTypeText(musicCollectionType: EpkMusicCollectionType): string {
		switch (musicCollectionType) {
			case EpkMusicCollectionType.Original:
				return 'Originals'
			// case MusicType.Remixes:
			// 	return 'Remixes'
			case EpkMusicCollectionType.Set:
				return 'DJ Sets'
			case EpkMusicCollectionType.Mix:
				return 'DJ Mixes'
		}
	}
</script>

<EpkSection title="Music">
	<epk-music class="w-full h-full flex flex-col">
		<epk-music-header class="flex flex-row justify-between items-start">
			<epk-music-collection-selector class="flex flex-row items-center mb-4">
				{#each Object.values(EpkMusicCollectionType) as musicCollectionType}
					{@const selected = musicCollectionType === selectedMusicCollectionType}
					<epk-music-collection-selector-item class:selected>
						<button
							on:click={() => onMusicTypeClick(musicCollectionType)}
							class="{selected
								? 'border-b-2 border-solid border-[#4c5adb]'
								: ''} font-medium text-indigo-50"
						>
							{getMusicTypeText(musicCollectionType)}
						</button>
					</epk-music-collection-selector-item>
				{/each}
			</epk-music-collection-selector>
		</epk-music-header>
		<epk-selected-music-collection class="space-y-4">
			{#key selectedMusicCollectionType}
				{#each collections[selectedMusicCollectionType] as musicItem}
					<div class="epk-music-collection-item">
						<Music {musicItem} />
					</div>
				{/each}
			{/key}
		</epk-selected-music-collection>
	</epk-music>
	<img class="w-1/2 object-contain" src="{base}/images/{image}" alt="EPK 2" />
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
