<script lang="ts">
	import { base } from '$app/paths'
	import type { IMusicItem } from '@lib/data/music'

	export let musicItem: IMusicItem
	const { image, urls, title, description, date } = musicItem ?? {}
</script>

<epk-music-card>
	<a
		href={urls[0].url ?? ''}
		target="_blank"
		class="w-full h-auto p-4 flex flex-row items-center bg-indigo-950 rounded-lg"
		aria-label={title}
	>
		<img
			src="{base}/images/{image}.jpg"
			alt={image}
			class="rounded-lg aspect-square max-w-[108px] max-h-[108px] md:max-w-[128px] md:max-h-[128px]"
		/>
		<div class="flex flex-col justify-around mx-4">
			<div>
				<p class="title font-semibold">{title}</p>
				{#if date}
					{@const adjustedDate = date.toISOString().split('T')[0].replaceAll('-', '.') ?? ''}
					<p class="date text-indigo-50 opacity-60">{adjustedDate}</p>
				{/if}
			</div>
			<p class="description font-medium text-indigo-50 opacity-60">{description}</p>
		</div>
	</a>
</epk-music-card>

<style lang="postcss">
	a {
		@apply cursor-pointer;
		@apply transition-colors;

		&:hover {
			@apply bg-indigo-900;
		}
	}

	.title {
		@apply md:text-lg !important;
	}

	.date {
		@apply opacity-40;
		@apply text-sm !important;
	}

	.description {
		@apply text-xs md:text-sm !important;
	}
</style>
