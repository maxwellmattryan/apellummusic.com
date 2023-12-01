<script lang="ts">
	import { base } from '$app/paths'
	import type { IAboutSection } from '@lib/data/about'

	export let section: IAboutSection
	export let justifyLeft: boolean = true
	export let index: number = 0

	const { image, header, paragraph } = section ?? {}
</script>

<about-section class="about-pair flex flex-row justify-center items-center">
	{#if justifyLeft}
		<img class="w-[35vw] px-[4vw]" src="{base}/images/{image}" alt="Press {index + 1}" />
	{/if}
	<about-section-paragraph
		class="px-[1vw] flex flex-col justify-between items-start leading-8 opacity-90"
	>
		<about-section-paragraph-header
			class="w-full mb-[8vh] pb-4 border-b-2 border-solid border-[{justifyLeft
				? '#4c5adb'
				: '#ef2e5e'}]"
		>
			<h3 class={justifyLeft ? 'is-left' : 'is-right'}>{header}</h3>
		</about-section-paragraph-header>
		<about-section-paragraph-text>
			<p class={justifyLeft ? 'is-left' : 'is-right'}>{paragraph}</p>
		</about-section-paragraph-text>
	</about-section-paragraph>
	{#if !justifyLeft}
		<img class="w-[35vw] px-[4vw]" src="{base}/images/{image}" alt="Press {index + 1}" />
	{/if}
</about-section>

<style lang="postcss">
	.is-left {
		@apply text-left;
	}

	.is-right {
		@apply text-right;
	}

	h3 {
		@apply font-semibold;
	}

	h3,
	p {
		@apply text-indigo-50;
	}

	p {
		@apply font-medium;
	}
</style>
