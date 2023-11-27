<script lang="ts" context="module">
	export enum MusicType {
		Originals = 'originals',
		// Remixes = 'remixes',
		Sets = 'sets',
		Mixes = 'mixes',
	}
</script>

<script lang="ts">
	import { MixMusic, OriginalMusic, SetMusic } from './musics'

	let selectedMusicType: MusicType = MusicType.Originals

	const MUSIC_TYPE_COMPONENT_MAP: { [key in MusicType]: unknown } = {
		[MusicType.Originals]: OriginalMusic,
		// [MusicType.Remixes]: OriginalMusic,
		[MusicType.Sets]: SetMusic,
		[MusicType.Mixes]: MixMusic,
	}

	function onMusicTypeClick(musicType: MusicType): void {
		selectedMusicType = musicType
	}

	function getMusicTypeText(musicType: MusicType): string {
		switch (musicType) {
			case MusicType.Originals:
				return 'Originals'
			// case MusicType.Remixes:
			// 	return 'Remixes'
			case MusicType.Sets:
				return 'DJ Sets'
			case MusicType.Mixes:
				return 'DJ Mixes'
		}
	}
</script>

<musics class="w-full h-full flex flex-col">
	<music-selector-header class="flex flex-row justify-between items-start">
		<music-selector class="flex flex-row items-center mb-4">
			{#each Object.values(MusicType) as musicType}
				{@const selected = musicType === selectedMusicType}
				<music-selector-item class:selected>
					<button
						on:click={() => onMusicTypeClick(musicType)}
						class="{selected
							? 'border-b-2 border-solid border-[#4c5adb]'
							: ''} font-medium text-indigo-50"
					>
						{getMusicTypeText(musicType)}
					</button>
				</music-selector-item>
			{/each}
		</music-selector>
	</music-selector-header>
	<selected-music class="overflow-y-auto">
		<svelte:component this={MUSIC_TYPE_COMPONENT_MAP[selectedMusicType]} />
	</selected-music>
</musics>

<style lang="postcss">
	music-selector-item {
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
</style>
