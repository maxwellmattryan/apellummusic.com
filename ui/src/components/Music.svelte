<script lang="ts">
	import { base } from '$app/paths'
	import type { IEpkMusicItem } from '@lib/data/epk'

	export let musicItem: IEpkMusicItem
	const { image, url, title, description, date } = musicItem ?? {}
</script>

<music>
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
					{@const adjustedDate = date.toISOString().split('T')[0].replaceAll('-', '.') ?? ''}
					<p class="date text-indigo-50 opacity-60">{adjustedDate}</p>
				{/if}
			</div>
			<p class="description font-medium text-indigo-50 opacity-60">{description}</p>
		</div>
	</a>
</music>

<style lang="postcss">
	a {
		@apply cursor-pointer;

		&:hover {
			@apply bg-opacity-100;
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
