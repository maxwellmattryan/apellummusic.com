<script lang="ts">
	import { base } from '$app/paths'
	import { onMount } from 'svelte'
	import { AppRoute, getPageTitle, setAppRoute } from '@lib/app'
	import { ABOUT_DATA } from '@lib/data/about'

	const { sections } = ABOUT_DATA

	onMount(() => {
		setAppRoute(AppRoute.About)
	})
</script>

<svelte:head>
	<title>{getPageTitle(AppRoute.About)}</title>
</svelte:head>
<about-page class="w-full h-auto mt-[5vh] mb-[15vh] flex flex-col items-center">
	{#each sections as { image, header, paragraph }, index}
		{@const isLeft = index % 2 === 0}
		<div class="about-pair flex flex-row justify-center items-center">
			{#if isLeft}
				<img class="w-[35vw] px-[4vw]" src="{base}/images/{image}" alt="Press {index + 1}" />
			{/if}
			<about-page-paragraph
				class="px-[1vw] flex flex-col justify-between items-start leading-8 opacity-90"
			>
				<about-section-header
					class="w-full mb-[8vh] pb-4 border-b-2 border-solid border-[{isLeft
						? '#4c5adb'
						: '#ef2e5e'}]"
				>
					<h3 class="text-{isLeft ? 'left' : 'right'}">{header}</h3>
				</about-section-header>
				<about-section-paragraph>
					<p class="text-{isLeft ? 'left' : 'right'}">{paragraph}</p>
				</about-section-paragraph>
			</about-page-paragraph>
			{#if !isLeft}
				<img class="w-[35vw] px-[4vw]" src="{base}/images/{image}" alt="Press {index + 1}" />
			{/if}
		</div>
	{/each}
</about-page>

<style lang="postcss">
	.about-pair:not(:first-of-type) {
		@apply mt-[5vh];
	}

	h3 {
		@apply font-semibold;
	}

	h3,
	p {
		@apply text-indigo-50;
	}
</style>
