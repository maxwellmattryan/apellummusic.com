<script lang="ts">
	import { base } from '$app/paths'
	import { onMount } from 'svelte'
	import { AppRoute, getPageTitle, setAppRoute } from '@lib/app'

	onMount(() => {
		setAppRoute(AppRoute.About)
	})
</script>

<svelte:head>
	<title>{getPageTitle(AppRoute.About)}</title>
</svelte:head>
<about-page class="w-full h-auto mt-[10vh] flex flex-col items-center">
	<div class="about-pair flex flex-row justify-center items-center">
		<img class="w-[35vw] px-[4vw]" src="{base}/images/press_about-01.jpg" alt="Press 1" />
		<about-page-paragraph
			class="px-[1vw] flex flex-col justify-between items-start leading-8 opacity-90"
		>
			<h3 class="text-left mb-[10vh]">Introduction</h3>
			<p>
				In the ever-evolving landscape of electronic music, Apellum emerges as an up-and-coming
				techno DJ and producer deeply rooted in the vibrant Austin scene. With a diverse background
				as a percussionist, audio engineer, and sound designer, Apellum artfully weaves together
				influences from a vast spectrum of musical genres, crafting a sonic tapestry that resonates
				closely with the hypnotic and groovy essence of Berlin techno.
			</p>
		</about-page-paragraph>
	</div>
	<div class="about-pair flex flex-row justify-center items-center">
		<about-page-paragraph
			class="px-[1vw] flex flex-col justify-between items-end leading-8 opacity-90"
		>
			<h3 class="text-right mb-[10vh]">Influences across genres</h3>
			<p class="text-right">
				Within the techno scene, Apellum finds inspiration in many artists from multiple sub-genres,
				like Ketch or Yan Cook for darker Berlin techno, Maōh for hardgroove, or Wata Igarashi for
				hypnotic / dub techno. Beyond the confines of techno, Apellum’s creative canvas is painted
				with shades of drum ‘n bass, jungle, trance, jazz, fusion, funk, classical, and rock, among
				many others.
			</p>
		</about-page-paragraph>
		<img class="w-[35vw] px-[4vw]" src="{base}/images/press_about-02.jpg" alt="Press 2" />
	</div>
	<div class="about-pair flex flex-row justify-center items-center">
		<img class="w-[35vw] px-[4vw]" src="{base}/images/press_about-03.jpg" alt="Press 3" />
		<about-page-paragraph
			class="px-[1vw] flex flex-col justify-between items-start leading-8 opacity-90"
		>
			<h3 class="text-left mb-[10vh]">Exploration in the studio</h3>
			<p>
				Apellum’s studio has been a realm of exploration and creativity, where new sounds and music
				are discovered and crafted. His upcoming EP, Protocol, embodies a culmination of recent
				artistic influences that have shaped and defined his signature sound. Join Apellum on a
				transformative journey, where the rhythms and sounds transcend boundaries and transport
				listeners to new emotional realms, an invitation to experience the power of techno in its
				purest form.
			</p>
		</about-page-paragraph>
	</div>
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
