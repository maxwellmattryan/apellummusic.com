<script lang="ts">
	import { Icon, IconName } from '@components'

	export let icon: IconName | undefined = undefined
	export let iconColor: string = ''
	export let tooltipText: string = ''
	export let onClick: () => void = () => {}

	const TOOLTIP_APPEAR_DURATION: number = 1500

	let buttonTooltip: HTMLElement | undefined = undefined

	function _onClick(): void {
		if (onClick) {
			onClick()

			buttonTooltip.classList.replace('opacity-0', 'opacity-100')
			setTimeout(() => {
				buttonTooltip.classList.replace('opacity-100', 'opacity-0')
			}, TOOLTIP_APPEAR_DURATION)
		}
	}
</script>

<icon-button class="flex flex-row items-center">
	{#if icon}
		<button on:click={_onClick} alt={icon}>
			<Icon {icon} {iconColor} />
		</button>
		{#if tooltipText}
			<tooltip bind:this={buttonTooltip} class="absolute opacity-0 transition-opacity">
				<p class="inline-block text-indigo-50 opacity-60 font-medium">{tooltipText}</p>
			</tooltip>
		{/if}
	{/if}
</icon-button>

<style lang="postcss">
	button {
		@apply cursor-pointer;
	}

	tooltip {
		@apply ml-[32px];
		@apply pointer-events-none;

		font-size: 10px;
	}

	button :global(svg) {
		@apply transition-opacity;

		&:hover {
			@apply opacity-100;
		}
	}
</style>
