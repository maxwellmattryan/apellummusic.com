<script lang="ts">
	import { Icon, IconName } from '@components'

	export let icon: IconName | undefined = undefined
	export let iconColor: string = ''
	export let onClick: () => void = () => {}
	console.log('icon: ', icon)
</script>

{#if icon}
	<button on:click={onClick}>
		<Icon {icon} {iconColor} />
	</button>
{/if}

<style lang="postcss">
	button {
		@apply cursor-pointer;
	}

	button :global(svg) {
		@apply transition-opacity;

		&:hover {
			@apply opacity-100;
		}
	}
</style>
