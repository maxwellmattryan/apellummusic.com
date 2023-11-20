<script lang="ts">
	import { isMobile } from '@lib'
</script>

<home-page class="w-full h-full">
	<div class="w-full h-full flex justify-center items-center">
		<p>Hello!</p>
		{#if $isMobile}
			<p>It seems you're on a mobile device...</p>
		{/if}
	</div>
</home-page>
