<script lang="ts">
	import { onMount } from 'svelte'
	import { AppRoute, getPageTitle, setAppRoute } from '@lib/app'

	onMount(() => {
		setAppRoute(AppRoute.Music)
	})
</script>

<svelte:head>
	<title>{getPageTitle(AppRoute.Music)}</title>
</svelte:head>
<music-page class="w-full h-full flex justify-center items-center">
	<p>Coming soon ...</p>
</music-page>
