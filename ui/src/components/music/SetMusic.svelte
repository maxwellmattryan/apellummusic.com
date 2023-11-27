<script lang="ts">
	import Music from './Music.svelte'

	const SET_MUSIC_ITEMS = [
		{
			image: 'music_set_birds-of-a-feather_2023-09-16',
			title: 'Birds of a Feather',
			date: '2023.09.16',
			description: "Performance for Kai Castro's Birds of a Feather event.",
			url: 'https://on.soundcloud.com/zN8rm',
		},
		{
			image: 'music_set_the-oven_2023-08-11',
			title: 'The Oven',
			date: '2023.08.11',
			description: 'Performance at The Oven, local after-hours spot.',
			url: 'https://on.soundcloud.com/1hZWo',
		},
	]
</script>

<Music musicItems={SET_MUSIC_ITEMS} />
