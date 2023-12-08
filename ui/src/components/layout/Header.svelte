<script lang="ts">
	import { onMount } from 'svelte'
	import { base } from '$app/paths'
	import { Icon, LinkSidebar, Logo, WebsiteNavbar } from '@components'
	import { AppRoute, appRoute, IconName, isMobile, openSideDrawer } from '@lib/app'

	let isHome: boolean = true
	$: isHome = $appRoute === AppRoute.Home

	$: linkColor = getLinkColor($appRoute)
	function getLinkColor(route: AppRoute): string {
		switch (route) {
			case AppRoute.Error:
			case AppRoute.About:
			case AppRoute.Music:
			case AppRoute.Epk:
			case AppRoute.PhotosAndVideos:
				return '#eef2ff'
			case AppRoute.Home:
			default:
				return 'slate-950'
		}
	}

	let showLogoHeader: boolean = true

	function onDesktopScroll(): void {
		showLogoHeader = window.scrollY <= 100
	}

	let mobileLayout: HTMLElement

	function onMobileScroll(event): void {
		if (isHome) {
			mobileLayout.classList.remove('bg-slate-950')
		} else {
			mobileLayout.classList.add('bg-slate-950')

			if (event.deltaY > 0) {
				mobileLayout.classList.replace('opacity-100', 'opacity-0')
				mobileLayout.classList.replace('pointer-events-auto', 'pointer-events-none')
			} else {
				mobileLayout.classList.replace('opacity-0', 'opacity-100')
				mobileLayout.classList.replace('pointer-events-none', 'pointer-events-auto')
			}
		}
	}

	onMount(() => {
		$isMobile = navigator.maxTouchPoints > 0 && window.screen.width < 1024
		if ($isMobile) {
			window.onwheel = onMobileScroll
		} else {
			window.onscroll = onDesktopScroll
		}
	})
</script>

<header class="w-full sticky top-0 z-10">
	<mobile-layout
		bind:this={mobileLayout}
		class="absolute top-0 w-full h-[8vh] p-6 visible md:invisible flex flex-row justify-between items-center {isHome
			? ''
			: 'bg-slate-950'} pointer-events-auto opacity-100"
	>
		<a href="/" class={isHome ? 'text-slate-800' : 'text-indigo-50'}>
			<Logo color={isHome ? 'black' : 'white'} />
		</a>
		<button
			type="button"
			style="--menu-icon-color: {isHome ? '#020617' : '#eef2ff'}"
			on:click={openSideDrawer}
		>
			<Icon icon={IconName.Menu} />
		</button>
	</mobile-layout>
	<desktop-layout
		class="absolute top-0 w-full invisible md:visible flex flex-row justify-center items-center"
	>
		<WebsiteNavbar />
		{#if $appRoute !== AppRoute.Home}
			<logo-header id="logo-header" class:hide={!showLogoHeader} class="absolute top-8 w-[20vw]">
				<!-- ghost header -->
				<h1 class="invisible h-0">Apellum</h1>
				<a href="/">
					<img src="{base}/logos/white.svg" alt="Apellum logo" />
				</a>
			</logo-header>
		{/if}
		<LinkSidebar {linkColor} />
	</desktop-layout>
</header>

<style lang="postcss">
	logo-header,
	mobile-layout {
		@apply transition-opacity;
	}

	mobile-layout {
		@apply duration-150;
	}

	mobile-layout :global(svg) {
		@apply h-[28px] w-[28px];
	}

	mobile-layout :global(button svg) {
		@apply fill-[var(--menu-icon-color)];
	}

	.hide {
		@apply opacity-0;
	}
</style>
