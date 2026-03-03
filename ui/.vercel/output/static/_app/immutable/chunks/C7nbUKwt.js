import './BnkzR3UQ.js'
var l = ((a) => (
		(a.AppleMusic = 'apple-music'),
		(a.Bandcamp = 'bandcamp'),
		(a.Close = 'close'),
		(a.Copy = 'copy'),
		(a.Download = 'download'),
		(a.Facebook = 'facebook'),
		(a.Instagram = 'instagram'),
		(a.Menu = 'menu'),
		(a.SoundCloud = 'Soundcloud'),
		(a.Spotify = 'spotify'),
		a
	))(l || {}),
	u = ((a) => ((a.Email = 'email'), (a.Music = 'music'), (a.Social = 'social'), a))(u || {})
const s = {
	contacts: {
		[u.Email]: [{ name: 'Email', url: 'apellummusic@gmail.com' }],
		[u.Music]: [
			{
				name: 'Spotify',
				url: 'https://open.spotify.com/artist/2MOOYBdY5kjSsiTCugonnJ?si=GspHlrStQEiTmjuf3aIZqA',
				username: 'Apellum',
				icon: l.Spotify,
			},
			{
				name: 'Apple Music',
				url: 'https://music.apple.com/us/artist/apellum/1535711525',
				username: 'Apellum',
				icon: l.AppleMusic,
			},
			{
				name: 'SoundCloud',
				url: 'https://soundcloud.com/apellum',
				username: 'apellum',
				icon: l.SoundCloud,
			},
			{
				name: 'Bandcamp',
				url: 'https://apellum.bandcamp.com',
				username: 'Apellum',
				icon: l.Bandcamp,
			},
		],
		[u.Social]: [
			{
				name: 'Instagram',
				url: 'https://instagram.com/apellum',
				username: 'apellum',
				icon: l.Instagram,
			},
			{
				name: 'Facebook',
				url: 'https://facebook.com/apellummusic',
				username: 'apellummusic',
				icon: l.Facebook,
			},
		],
	},
}
export { s as C, l as I, u as a }
