<script lang="ts">
	import { base } from '$app/paths'
	import { IconButton } from '@components'
	import { IconName } from '@lib/app'
	import { EpkBiographyType } from '@lib/data/epk'
	import type { IEpkBiographyData } from '@lib/data/epk'
	import EpkSection from './EpkSection.svelte'

	export let biographyData: IEpkBiographyData

	const { image, biographies } = biographyData ?? {}

	let selectedBioType: EpkBiographyType = EpkBiographyType.Short

	function onBioTypeClick(bioType: EpkBiographyType): void {
		selectedBioType = bioType
	}

	function getBioTypeText(bioType: EpkBiographyType): string {
		switch (bioType) {
			case EpkBiographyType.Long:
				return 'Long'
			case EpkBiographyType.Short:
				return 'Short'
			case EpkBiographyType.OneLine:
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

<EpkSection title="Biographies">
	<img class="w-full md:w-1/2 object-contain" src="{base}/images/{image}" alt="EPK biography" />
	<epk-bios class="w-full flex flex-col justify-center">
		<epk-bios-header class="flex flex-row justify-between items-start">
			<epk-bio-selector class="flex flex-row items-center mb-4">
				{#each Object.values(EpkBiographyType) as bioType}
					{@const selected = bioType === selectedBioType}
					<epk-bio-selector-item class:selected>
						<button
							type="button"
							on:click={() => onBioTypeClick(bioType)}
							class="{selected
								? 'border-b-2 border-solid border-[#4c5adb]'
								: ''} text-indigo-50 font-medium"
						>
							{getBioTypeText(bioType)}
						</button>
					</epk-bio-selector-item>
				{/each}
			</epk-bio-selector>
			<IconButton icon={IconName.Copy} tooltipText="Copied!" onClick={onBioCopyClick} />
		</epk-bios-header>
		<epk-selected-bio bind:this={biography} class="max-h-[50vh] md:max-h-full overflow-y-auto">
			{#each biographies[selectedBioType].text as paragraph}
				<p>{paragraph}</p>
			{/each}
		</epk-selected-bio>
	</epk-bios>
</EpkSection>

<style lang="postcss">
	epk-bio-selector-item {
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

	p:not(:first-of-type) {
		@apply mt-4;
	}
</style>