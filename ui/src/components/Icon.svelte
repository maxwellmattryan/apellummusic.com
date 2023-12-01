<script lang="ts">
	import { IconName } from '@lib/app'

	import AppleMusic from '$lib/assets/icons/apple-music.svg?raw'
	import Bandcamp from '$lib/assets/icons/bandcamp.svg?raw'
	import Copy from '$lib/assets/icons/copy.svg?raw'
	import Download from '$lib/assets/icons/download.svg?raw'
	import Facebook from '$lib/assets/icons/facebook.svg?raw'
	import Instagram from '$lib/assets/icons/instagram.svg?raw'
	import SoundCloud from '$lib/assets/icons/soundcloud.svg?raw'
	import Spotify from '$lib/assets/icons/spotify.svg?raw'

	const ICON_NAME_COMPONENT_MAP: { [key in IconName]: unknown } = {
		[IconName.AppleMusic]: AppleMusic,
		[IconName.Bandcamp]: Bandcamp,
		[IconName.Copy]: Copy,
		[IconName.Download]: Download,
		[IconName.Facebook]: Facebook,
		[IconName.Instagram]: Instagram,
		[IconName.SoundCloud]: SoundCloud,
		[IconName.Spotify]: Spotify,
	}

	export let icon: IconName | undefined = undefined
</script>

{#if icon}
	<!-- eslint-disable svelte/no-at-html-tags -->
	{@html ICON_NAME_COMPONENT_MAP[icon]}
{/if}

<style lang="postcss">
	:global(svg) {
		@apply h-[18px];
		@apply opacity-75;
		@apply fill-indigo-50;
	}
</style>
