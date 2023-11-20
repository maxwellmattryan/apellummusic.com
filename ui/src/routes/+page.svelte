<script lang="ts">
	import { is_mobile } from '@lib'
</script>

<home-page class="w-full h-full">
	<div class="w-full h-full flex justify-center items-center">
		<p>Hello!</p>
		{#if $is_mobile}
			<p>It seems you're on a mobile device...</p>
		{/if}
	</div>
</home-page>
