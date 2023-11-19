<script>
	import '../app.css'
</script>

<home-layout class="flex flex-row justify-between items-center basis-0 grow">
	<navigation>
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/about">EPK</a>
		</nav>
	</navigation>
	<logo>
		<h1>APELLUM</h1>
	</logo>
	<links>
		<a href="https://spotify.com">Spotify</a>
		<a href="https://bandcamp.apellum.com">Bandcamp</a>
		<a href="https://soundcloud.com/apellum">SoundCloud</a>
	</links>
</home-layout>
<slot />
