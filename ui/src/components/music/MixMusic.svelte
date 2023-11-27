<script lang="ts">
	import Music from './Music.svelte'

	const MIX_MUSIC_ITEMS = [
		{
			image: 'music_mix_womm-090',
			title: "What's On My Mind 090",
			description: "Techno episode for No Light Thing's radio show podcast.",
			url: 'https://on.soundcloud.com/M13G6',
		},
		{
			image: 'music_mix_dj-mixes',
			title: 'DJ Mixes',
			description: 'Collection of my DJ mixes.',
			url: 'https://on.soundcloud.com/huyJ8',
		},
		{
			image: 'music_mix_mixed-tape',
			title: 'Mixed Tape',
			description:
				'Collection of my Mixed Tape series, i.e. mini-mixes that featuring specific artists.',
			url: 'https://on.soundcloud.com/iJz4h',
		},
	]
</script>

<Music musicItems={MIX_MUSIC_ITEMS} />
