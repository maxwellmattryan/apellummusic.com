<script lang="ts">
	import { onMount } from 'svelte'
	import { AppRoute, setAppRoute } from '@lib/app'

	onMount(() => {
		setAppRoute(AppRoute.Home)
	})
</script>

<home-page class="w-full h-full max-h-screen flex flex-row">
	<home-page-left class="w-1/2 h-full px-[6rem] flex flex-col justify-center items-end">
		<img src="./logos/white.svg" alt="Apellum logo" />
		<p>Techno producer & DJ</p>
	</home-page-left>
	<home-page-right class="w-1/2 h-full"> </home-page-right>
</home-page>

<style lang="postcss">
	home-page-right {
		background-image: url('./images/photo_press_home.jpg');
		@apply bg-cover bg-center;
	}
</style>
