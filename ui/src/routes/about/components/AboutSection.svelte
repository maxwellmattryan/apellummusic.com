<script lang="ts">
	import { base } from '$app/paths'
	import type { IAboutSection } from '@lib/data/about'

	export let section: IAboutSection
	export let justifyLeft: boolean = true
	export let index: number = 0

	const { image, header, paragraph } = section ?? {}
</script>

<about-section
	class="about-pair flex flex-col md:flex-row {justifyLeft
		? 'md:flex-row'
		: 'md:flex-row-reverse'} items-center"
>
	<about-section-paragraph
		class="px-[1vw] pb-[4vh] flex flex-col justify-between leading-8 opacity-90"
	>
		<about-section-paragraph-header
			class="w-full mb-[2vh] md:mb-[8vh] pb-4 border-b-2 border-solid border-[{justifyLeft
				? '#4c5adb'
				: '#ef2e5e'}]"
		>
			<h3 class={justifyLeft ? 'is-left' : 'is-right'}>{header}</h3>
		</about-section-paragraph-header>
		<about-section-paragraph-text>
			<p class={justifyLeft ? 'is-left' : 'is-right'}>{paragraph}</p>
		</about-section-paragraph-text>
	</about-section-paragraph>
	<img
		class="md:w-[35vw] md:max-h-[70vh] md:px-[4vw]"
		src="{base}/images/{image}"
		alt="Press {index + 1}"
	/>
</about-section>

<style lang="postcss">
	.is-left {
		@apply text-left md:text-left;
	}

	.is-right {
		@apply text-left md:text-right;
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
