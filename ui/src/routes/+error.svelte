<script lang="ts">
	import { onMount } from 'svelte'
	import { AppRoute, getPageTitle, setAppRoute } from '@lib/app'

	onMount(() => {
		setAppRoute(AppRoute.Error)
	})
</script>

<svelte:head>
	<title>{getPageTitle(AppRoute.Error)}</title>
</svelte:head>
<error-page class="w-full h-[50vh] flex flex-col justify-center items-center">
	<h1>404</h1>
	<p>Page not found</p>
</error-page>
