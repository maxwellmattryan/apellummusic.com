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
	const SET_MUSIC_ITEMS: IMusicItem[] = [
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

<set-music class="space-y-4">
	{#each SET_MUSIC_ITEMS as { image, title, date, description, url }}
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
						<p class="date text-indigo-50 opacity-60 font-medium">{date}</p>
					{/if}
				</div>
				{#if description}
					<p class="description text-indigo-50 opacity-60 font-medium">{description}</p>
				{/if}
			</div>
		</a>
	{/each}
</set-music>

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
