<script>
	import '../app.css'
	import { Footer, Header } from '@components'
</script>

<home-layout class="w-full h-screen flex flex-col justify-between">
	<Header />
	<slot />
	<Footer />
</home-layout>

<style lang="postcss">
	home-layout {
		@apply bg-slate-950;
		@apply text-indigo-50;
	}
</style>
