<script lang="ts" context="module">
	export interface IMusicItem {
		image: string
		title: string
		date?: string
		description?: string
		url?: string
	}
</script>

<script lang="ts">
	import { base } from '$app/paths'
	const MIX_MUSIC_ITEMS: IMusicItem[] = [
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

<mix-music class="space-y-4">
	{#each MIX_MUSIC_ITEMS as { image, title, date, description, url }}
		<a
			href={url}
			target="_blank"
			class="w-full h-[15vh] p-4 flex flex-row bg-indigo-950 bg-opacity-90 rounded-lg"
		>
			<img src="{base}/images/{image}.jpg" alt={image} class="rounded-lg" />
			<div class="flex flex-col justify-around ml-4">
				<div>
					<p class="title font-semibold">{title}</p>
					{#if date}
						<p class="date text-indigo-50 opacity-60">{date}</p>
					{/if}
				</div>
				{#if description}
					<p class="description font-medium text-indigo-50 opacity-60">{description}</p>
				{/if}
			</div>
		</a>
	{/each}
</mix-music>

<style lang="postcss">
	a {
		@apply cursor-pointer;

		&:hover {
			@apply bg-opacity-100;
		}
	}

	.title {
		@apply text-lg !important;
	}

	.date {
		@apply opacity-40;
		@apply text-sm !important;
	}

	.description {
		@apply text-sm !important;
	}
</style>
