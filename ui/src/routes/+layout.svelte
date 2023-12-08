<script lang="ts">
	import { onMount } from 'svelte'
	import { Layout, Loader } from '@components'
	import '../app.css'

	let isLoading = true

	onMount(() => {
		setTimeout(() => {
			isLoading = false
		}, 500)
	})
</script>

{#if isLoading}
	<Loader />
{:else}
	<Layout>
		<slot />
	</Layout>
{/if}
