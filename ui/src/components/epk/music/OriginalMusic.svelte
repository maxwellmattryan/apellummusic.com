<script lang="ts" context="module">
	export interface IMusicItem {
		image: string
		title: string
		description?: string
		url?: string
	}
</script>

<script lang="ts">
	import { base } from '$app/paths'
	const ORIGINAL_MUSIC_ITEMS: IMusicItem[] = [
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

<original-music class="space-y-4">
	{#each ORIGINAL_MUSIC_ITEMS as { image, title, description, url }}
		<a
			href={url}
			target="_blank"
			class="w-full h-[15vh] p-4 flex flex-row bg-indigo-950 bg-opacity-90 rounded-lg"
		>
			<img src="{base}/images/{image}.jpg" alt={image} class="rounded-lg" />
			<div class="flex flex-col justify-around ml-4">
				<p class="title font-semibold">{title}</p>
				{#if description}
					<p class="description text-indigo-50 opacity-60">{description}</p>
				{/if}
			</div>
		</a>
	{/each}
</original-music>

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
