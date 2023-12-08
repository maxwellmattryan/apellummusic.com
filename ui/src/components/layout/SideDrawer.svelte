<script lang="ts">
	import { Icon, WebsiteNavbar } from '@components'
	import { closeSideDrawer, IconName, sideDrawerState } from '@lib/app'
</script>

<side-drawer
	class="absolute top-0 right-0 {$sideDrawerState.hidden
		? 'w-0'
		: 'w-screen'} h-screen md:invisible z-20 overflow-x-hidden"
>
	<button type="button" on:click={closeSideDrawer}>
		<Icon icon={IconName.Close} />
	</button>
	<WebsiteNavbar />
</side-drawer>

<style lang="postcss">
	side-drawer {
		@apply bg-slate-950;

		transition: width 500ms ease-in-out;
		animation-fill-mode: both;
	}
</style>
