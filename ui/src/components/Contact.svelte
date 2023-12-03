<script lang="ts">
	import { CONTACT_DATA, ContactType } from '@lib/data/contact'

	const { contacts } = CONTACT_DATA
</script>

<contact class="contact-section text-left">
	<h3 class="mb-[5vh]">Contact</h3>
	{#each contacts[ContactType.Email] as { name, url }}
		<p>{name}: <a class="contact-link" href="mailto:{url}">{url}</a></p>
	{/each}
	{#each contacts[ContactType.Social] as { name, url, username }}
		<p>{name}: <a class="contact-link" href={url} target="_blank">@{username}</a></p>
	{/each}
</contact>

<style lang="postcss">
	h3 {
		@apply font-semibold text-indigo-50;
	}

	.contact-link {
		@apply ml-2;
		@apply opacity-60;
		@apply transition-opacity;

		&:hover {
			@apply opacity-100;
		}
	}

	p {
		@apply font-medium;
	}

	.contact-section p {
		&:not(:first-of-type) {
			@apply mt-[1vh] md:mt-[2.5vh];
		}
	}
</style>
