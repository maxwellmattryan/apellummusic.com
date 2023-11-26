<script lang="ts">
	import { onMount } from 'svelte'
	import { AppRoute, setAppRoute } from '@lib/app'

	onMount(() => {
		setAppRoute(AppRoute.Music)
	})
</script>

<svelte:head>
	<title>Music | Apellum</title>
</svelte:head>
<p>Coming soon ...</p>
