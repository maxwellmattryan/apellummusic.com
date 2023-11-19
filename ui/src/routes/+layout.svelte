<script>
	import '../app.css'
	import { Footer, Header } from '@components'
</script>

<home-layout class="w-full h-screen flex flex-col justify-between">
	<Header />
	<slot />
	<Footer />
</home-layout>
