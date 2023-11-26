<script lang="ts">
	import { base } from '$app/paths'
	import { onMount } from 'svelte'
	import { MultiBiography } from '@components'
	import { AppRoute, getPageTitle, setAppRoute } from '@lib/app'

	onMount(() => {
		setAppRoute(AppRoute.Epk)
	})
</script>

<svelte:head>
	<title>{getPageTitle(AppRoute.Epk)}</title>
</svelte:head>
<epk-page class="w-full h-auto flex flex-col items-center">
	<div class="flex flex-row items-start">
		<img
			class="w-[35vw] px-[4vw] object-contain"
			src="{base}/images/press_epk-01.jpg"
			alt="EPK 1"
		/>
		<MultiBiography />
	</div>
</epk-page>
