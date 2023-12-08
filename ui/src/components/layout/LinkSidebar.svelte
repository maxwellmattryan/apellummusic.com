<script lang="ts" context="module">
	export interface ILink {
		url: string
		icon?: string
	}
</script>

<script lang="ts">
	import { Icon } from '@components'
	import { CONTACT_DATA, ContactType } from '@lib/data/contact'

	export let linkColor: string | undefined = undefined
	export let context: 'page' | 'drawer' = 'page'

	const { contacts } = CONTACT_DATA

	const socialLinks: ILink[] = contacts[ContactType.Social].map(({ url, icon }) => ({ url, icon }))
	const musicLinks: ILink[] = contacts[ContactType.Music].map(({ url, icon }) => ({ url, icon }))
	const LINKS: ILink[] = [...socialLinks, ...musicLinks]
</script>

<link-sidebar class="{context} right-4 border-solid border-r-2 border-[#4c5adb]">
	{#each LINKS as { url, icon }}
		<a
			class="mr-4 {context}"
			style="--link-color: {linkColor ?? 'slate-950'}"
			href={url}
			target="_blank"
			aria-label={icon}
		>
			<Icon {icon} />
		</a>
	{/each}
</link-sidebar>

<style lang="postcss">
	link-sidebar {
		&.page {
			@apply absolute top-[8vh];
		}

		&.drawer {
			@apply mr-8;
		}
	}

	link-sidebar :global(a) {
		@apply flex flex-row justify-center items-center;

		&.page {
			@apply h-[2.125rem];
		}

		&.drawer {
			@apply h-[3rem];
		}
	}

	link-sidebar :global(a svg) {
		@apply w-[20px] h-[20px];
		@apply fill-[var(--link-color)];
		@apply opacity-75;
		@apply transition-opacity;

		&:hover {
			@apply opacity-100;
		}
	}
</style>
