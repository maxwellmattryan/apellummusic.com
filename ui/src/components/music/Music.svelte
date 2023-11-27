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

	export let musicItems: IMusicItem[] = []
</script>

<music class="space-y-4">
	{#each musicItems as { image, title, date, description, url }}
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
</music>

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
