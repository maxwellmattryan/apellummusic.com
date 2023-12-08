<script lang="ts">
	import BlackLetter from '$lib/assets/logos/letter_black.svg?raw'
	import WhiteLetter from '$lib/assets/logos/letter_white.svg?raw'

	export let color: 'black' | 'white' = 'black'

	const LOGO_COLOR_MAP: { [color: string]: unknown } = {
		black: BlackLetter,
		white: WhiteLetter,
	}
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
{@html LOGO_COLOR_MAP[color]}

<style lang="postcss">
	:global(svg) {
		@apply w-[28px] h-[28px];
	}
</style>
