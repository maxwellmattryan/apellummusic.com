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
			image: 'music_set_birds-of-a-feather_2023-09-16',
			title: "What's On My Mind 090",
			date: '2023.09.16',
			description: 'The description',
			url: 'https://on.soundcloud.com/zN8rm',
		},
		{
			image: 'music_set_the-oven_2023-08-11',
			title: 'The Oven',
			date: '2023.08.11',
			description: 'The description',
			url: 'https://on.soundcloud.com/1hZWo',
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
			<div class="flex flex-col justify-between ml-4">
				<div>
					<p class="title">{title}</p>
					{#if date}
						<p class="date text-indigo-50 opacity-60">{date}</p>
					{/if}
				</div>
				{#if description}
					<p class="description text-indigo-50 opacity-60">{description}</p>
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

	.date {
		@apply opacity-40;
		@apply text-sm !important;
	}

	.description {
		@apply text-sm !important;
	}
</style>
