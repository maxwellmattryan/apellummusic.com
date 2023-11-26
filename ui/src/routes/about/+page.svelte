<script lang="ts">
	import { onMount } from 'svelte'
	import { AppRoute, setAppRoute } from '@lib/app'

	onMount(() => {
		setAppRoute(AppRoute.About)
	})
</script>

<about-page>
	<p>coming soon ...</p>
</about-page>
