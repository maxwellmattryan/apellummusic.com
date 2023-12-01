<script lang="ts">
	export let title: string = ''
</script>

<epk-section class="epk-section w-full h-auto flex flex-col">
	<epk-bio-section-header class="mb-8">
		<h3>{title}</h3>
	</epk-bio-section-header>
	<epk-bio-section-content class="flex flex-row justify-center items-start px-[4vw] gap-8">
		<slot />
	</epk-bio-section-content>
</epk-section>

<style lang="postcss">
	h3 {
		@apply font-semibold;
	}

	p {
		@apply font-medium;
	}
</style>
