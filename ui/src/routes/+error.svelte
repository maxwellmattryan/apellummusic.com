<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { AppState, getAppState, setAppState } from '@lib/app'

	let previousAppState: AppState | undefined = undefined

	onMount(() => {
		console.log('set app error')
		previousAppState = getAppState()
		setAppState(AppState.Error)
	})

	onDestroy(() => {
		setAppState(previousAppState)
	})
</script>

<error-page class="w-full h-full flex flex-col justify-center items-center">
	<h1>404</h1>
	<p>Page not found</p>
</error-page>
