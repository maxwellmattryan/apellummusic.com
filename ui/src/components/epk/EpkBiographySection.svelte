<script lang="ts" context="module">
	export enum BioType {
		Long = 'long',
		Short = 'short',
		OneLine = 'oneLine',
	}
</script>

<script lang="ts">
	import { IconButton, IconName } from '@components'
	import type { IEpkBiographies } from '../../routes/epk/epk-data.constant'

	export let biographies: IEpkBiographies

	let selectedBioType: BioType = BioType.Long

	function onBioTypeClick(bioType: BioType): void {
		selectedBioType = bioType
	}

	function getBioTypeText(bioType: BioType): string {
		switch (bioType) {
			case BioType.Long:
				return 'Long'
			case BioType.Short:
				return 'Short'
			case BioType.OneLine:
				return 'One-line'
		}
	}

	let biography: HTMLElement | undefined

	function onBioCopyClick(): void {
		if (biography) {
			const text: string = biography.textContent
			if (navigator) {
				navigator.clipboard.writeText(text)
			}
		}
	}
</script>

<bios class="h-full flex flex-col">
	<bio-selector-header class="flex flex-row justify-between items-start">
		<bio-selector class="flex flex-row items-center mb-4">
			{#each Object.values(BioType) as bioType}
				{@const selected = bioType === selectedBioType}
				<bio-selector-item class:selected>
					<button
						on:click={() => onBioTypeClick(bioType)}
						class="{selected
							? 'border-b-2 border-solid border-[#4c5adb]'
							: ''} text-indigo-50 font-medium"
					>
						{getBioTypeText(bioType)}
					</button>
				</bio-selector-item>
			{/each}
		</bio-selector>
		<IconButton icon={IconName.Copy} tooltipText="Copied!" onClick={onBioCopyClick} />
	</bio-selector-header>
	<selected-bio bind:this={biography} class="overflow-y-auto">
		{#each biographies[selectedBioType].text as paragraph}
			<p>{paragraph}</p>
		{/each}
	</selected-bio>
</bios>

<style lang="postcss">
	bio-selector-item {
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

	p {
		@apply leading-7;
	}

	p:not(:first-of-type) {
		@apply mt-4;
	}
</style>
