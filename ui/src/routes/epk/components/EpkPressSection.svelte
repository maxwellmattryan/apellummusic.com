<script lang="ts">
	import { base } from '$app/paths'
	import EpkSection from './EpkSection.svelte'
	import type { IEpkPressData } from '@lib/data/epk'

	export let pressData: IEpkPressData

	const { images } = pressData
</script>

<EpkSection title="Press">
	<div class="flex flex-col md:flex-row items-center md:justify-center gap-8">
		{#each images as image, index}
			<img
				class="w-full md:w-1/3 object-contain"
				src="{base}/images/{image}"
				alt="EPK press {index + 1}"
			/>
		{/each}
	</div>
</EpkSection>
