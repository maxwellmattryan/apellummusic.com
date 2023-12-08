<div class="w-screen h-screen flex flex-row justify-center items-center">
	<div class="loader"></div>
</div>

<style lang="postcss">
	.loader {
		border: 10px solid #4c5adb;
		border-top: 10px solid #020617;
		border-radius: 50%;
		width: 90px;
		height: 90px;
		animation: spin 1.5s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
