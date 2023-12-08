<script lang="ts">
	export let title: string = ''
	export let justifyLeft: boolean = true
</script>

<epk-section class="epk-section w-full h-auto flex flex-col">
	<epk-bio-section-header class="mb-[4vh]">
		<h3>{title}</h3>
	</epk-bio-section-header>
	<epk-bio-section-content
		class="w-full h-full flex flex-col-reverse {justifyLeft
			? 'md:flex-row'
			: 'md:flex-row-reverse'} justify-center items-center md:items-start md:px-[4vw] gap-8"
	>
		<slot />
	</epk-bio-section-content>
</epk-section>
