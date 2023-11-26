<script lang="ts">
	import { LinkSidebar, WebsiteNavbar } from '@components'

	export let linkColor: string | undefined = undefined
</script>

<layout class="w-full h-screen flex flex-col justify-center items-center">
	<WebsiteNavbar />
	<LinkSidebar {linkColor} />
	<slot />
</layout>

<style lang="postcss">
	layout {
		@apply bg-slate-950;
		@apply text-indigo-50;
	}
</style>
