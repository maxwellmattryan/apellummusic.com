<script lang="ts" context="module">
	export interface ILink {
		url: string
		icon?: string
	}
</script>

<script lang="ts">
	import { Icon, IconName } from '@components'

	export let linkColor: string | undefined = undefined

	const LINKS: ILink[] = [
		{ url: 'https://instagram.com/apellum', icon: IconName.Instagram },
		{ url: 'https://facebook.com/apellummusic', icon: IconName.Facebook },
		{
			url: 'https://open.spotify.com/artist/2MOOYBdY5kjSsiTCugonnJ?si=GspHlrStQEiTmjuf3aIZqA',
			icon: IconName.Spotify,
		},
		{ url: 'https://soundcloud.com/apellum', icon: IconName.SoundCloud },
		{ url: 'https://music.apple.com/us/artist/apellum/1535711525', icon: IconName.AppleMusic },
	]
</script>

<link-sidebar class="absolute top-[8vh] right-4 pr-2 border-solid border-r-2 border-[#4c5adb]">
	{#each LINKS as { url, icon }}
		<a class="mr-2" style="--link-color: {linkColor ?? 'slate-950'}" href={url} target="_blank">
			<Icon {icon} iconColor={linkColor} />
		</a>
	{/each}
</link-sidebar>

<style lang="postcss">
	link-sidebar :global(a) {
		@apply h-[2rem];
		@apply flex flex-row justify-center items-center;
	}

	link-sidebar :global(a svg) {
		@apply h-[18px];
		@apply fill-[var(--link-color)];
		@apply opacity-75;
		@apply transition-opacity;

		&:hover {
			@apply opacity-100;
		}
	}
</style>
