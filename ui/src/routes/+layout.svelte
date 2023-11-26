<script lang="ts">
	import '../app.css'
	import { onMount } from 'svelte'
	import { Layout } from '@components'
	import { appRoute, AppRoute, setAppRoute } from '@lib/app'

	let isOnErrorPage: boolean = false
	$: isOnErrorPage = $appRoute === AppRoute.Error

	onMount(() => {
		isOnErrorPage = $appRoute === AppRoute.Error
		if (!isOnErrorPage) {
			setAppRoute(AppRoute.Home)
		}
	})
</script>

<Layout>
	<slot />
</Layout>
