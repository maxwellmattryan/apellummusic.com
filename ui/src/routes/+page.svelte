<script lang="ts">
	import { onMount } from 'svelte'
	import { Hello } from '@components'
	import { hello } from '@lib'

	onMount(() => {
		hello()
	})
</script>

<Hello />
