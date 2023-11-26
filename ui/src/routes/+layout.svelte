<script lang="ts">
	import '../app.css'
	import { LinkSidebar, WebsiteNavbar, WebsiteRoute } from '@components'
</script>

<home-layout class="w-full h-screen flex flex-col justify-between">
	<WebsiteNavbar route={WebsiteRoute.Home} />
	<LinkSidebar />
	<slot />
</home-layout>

<style lang="postcss">
	home-layout {
		@apply bg-slate-950;
		@apply text-indigo-50;
	}
</style>
