<script lang="ts">
	import { Icon, LinkSidebar, WebsiteNavbar } from '@components'
	import { closeSideDrawer, IconName, sideDrawerState } from '@lib/app'
</script>

<side-drawer
	class="absolute top-0 right-0 {$sideDrawerState.hidden
		? 'w-0'
		: 'w-screen'} h-screen md:invisible z-20 overflow-x-hidden flex flex-col items-end gap-[5vh]"
>
	<button type="button" on:click={closeSideDrawer} class="mt-6 mr-6">
		<Icon icon={IconName.Close} />
	</button>
	<WebsiteNavbar context="drawer" direction="right" />
	<LinkSidebar context="drawer" linkColor="#eef2ff" />
</side-drawer>

<style lang="postcss">
	side-drawer {
		@apply bg-slate-950;

		transition: width 500ms ease-in-out;
		animation-fill-mode: both;
	}

	:global(a) {
		@apply text-lg !important;
	}
</style>
