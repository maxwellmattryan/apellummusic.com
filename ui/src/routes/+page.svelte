<script lang="ts">
	import { onMount } from 'svelte'
	import { hello } from '@lib'

	onMount(() => {
		hello()
	})
</script>

<home-page class="w-full h-full">
	<div class="w-full h-full flex justify-center items-center">
		<p>Hello!</p>
	</div>
</home-page>
