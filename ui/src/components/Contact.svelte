<script lang="ts">
	import { CONTACT_DATA, ContactType } from '@lib/data/contact'

	const { contacts } = CONTACT_DATA
</script>

<contact class="contact-section text-left">
	<h3 class="mb-[4vh]">Contact</h3>
	{#each contacts[ContactType.Email] as { name, url }}
		<p>{name}: <a class="contact-link" href="mailto:{url}">{url}</a></p>
	{/each}
	{#each contacts[ContactType.Social] as { name, url, username }}
		<p>{name}: <a class="contact-link" href={url} target="_blank">@{username}</a></p>
	{/each}
</contact>

<style lang="postcss">
	.contact-link {
		@apply ml-2;
		@apply opacity-60;
		@apply transition-opacity;
		@apply text-sm md:text-base !important;

		&:hover {
			@apply opacity-100;
		}
	}

	.contact-section p {
		&:not(:first-of-type) {
			@apply mt-[1vh] md:mt-[2vh];
		}
	}
</style>
