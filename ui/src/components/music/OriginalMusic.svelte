<script lang="ts">
	import Music from './Music.svelte'

	const ORIGINAL_MUSIC_ITEMS = [
		{
			image: 'music_original_eko',
			title: 'Eko',
			description:
				'Pulsating rhythm and ambient sounds into the vastness and intrigue of the subterranean.',
			url: 'https://open.spotify.com/track/4crFX8q2LDFoO5yLDQu0yY?si=55a3c2cdcc804b07',
		},
		{
			image: 'music_original_in-snowfield',
			title: 'In Snowfield',
			description:
				'Relentless beats with icy synth textures, mirroring the cat-and-mouse chase with Sniper Wolf.',
			url: 'https://open.spotify.com/track/1Oesrus6lIdvUiF1apvFRK?si=7e3a938c87434225',
		},
	]
</script>

<Music musicItems={ORIGINAL_MUSIC_ITEMS} />
