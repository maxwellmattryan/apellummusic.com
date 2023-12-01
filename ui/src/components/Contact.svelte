<contact class="contact-section text-left">
	<h3 class="mb-[5vh]">Contact</h3>
	<p>
		Email: <a class="contact-link" href="mailto:apellummusic@gmail.com">apellummusic@gmail.com</a>
	</p>
	<p>
		Instagram: <a class="contact-link" href="https://instagram.com/apellum" target="_blank"
			>@apellum</a
		>
	</p>
	<p>
		Facebook: <a class="contact-link" href="https://facebook.com/apellummusic" target="_blank"
			>@apellummusic</a
		>
	</p>
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
			@apply mt-[2.5vh];
		}
	}
</style>
