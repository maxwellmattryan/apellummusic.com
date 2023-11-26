<script lang="ts">
	import { onMount } from 'svelte'
	import { AppRoute, setAppRoute } from '@lib/app'

	onMount(() => {
		setAppRoute(AppRoute.Error)
	})
</script>

<error-page class="w-full h-full flex flex-col justify-center items-center">
	<h1>404</h1>
	<p>Page not found</p>
</error-page>
