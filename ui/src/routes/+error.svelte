<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { AppRoute, getAppRoute, setAppRoute } from '@lib/app'

	let previousAppRoute: AppRoute | undefined = undefined

	onMount(() => {
		previousAppRoute = getAppRoute()
		setAppRoute(AppRoute.Error)
	})

	onDestroy(() => {
		setAppRoute(previousAppRoute)
	})
</script>

<error-page class="w-full h-full flex flex-col justify-center items-center">
	<h1>404</h1>
	<p>Page not found</p>
</error-page>
