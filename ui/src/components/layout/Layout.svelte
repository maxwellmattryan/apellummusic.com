<script lang="ts">
	import { LinkSidebar, WebsiteNavbar, WebsiteRoute } from '@components'

	export let route: WebsiteRoute | undefined = undefined
</script>

<layout class="w-full h-screen flex flex-col justify-center items-center">
	<WebsiteNavbar {route} />
	<LinkSidebar />
	<slot />
</layout>

<style lang="postcss">
	layout {
		@apply bg-slate-950;
		@apply text-indigo-50;
	}
</style>
