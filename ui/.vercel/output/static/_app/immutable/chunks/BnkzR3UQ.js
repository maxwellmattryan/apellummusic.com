import { w as n } from './BLScLmK0.js'
const s = n()
function u(e) {
	e && s.set(e)
}
var a = ((e) => (
		(e.Error = 'error'),
		(e.Home = 'home'),
		(e.About = 'about'),
		(e.Music = 'music'),
		(e.Epk = 'epk'),
		(e.PhotosAndVideos = 'photosAndVideos'),
		(e.Events = 'events'),
		e
	))(a || {}),
	t = ((e) => (
		(e.Original = 'original'), (e.Remix = 'remix'), (e.Set = 'set'), (e.Mix = 'mix'), e
	))(t || {}),
	o = ((e) => (
		(e.AppleMusic = 'appleMusic'),
		(e.Bandcamp = 'bandcamp'),
		(e.SoundCloud = 'soundcloud'),
		(e.Spotify = 'spotify'),
		(e.YouTube = 'youtube'),
		e
	))(o || {})
const r = {
	collections: {
		[t.Original]: [
			{
				image: 'music_original_mind-fog',
				title: 'Mind Fog',
				description:
					'The sounds of a Mind adrift, lost in its own Fog. What is to be found within the beauty of mystery?',
				urls: [{ type: o.Spotify, url: 'https://open.spotify.com/track/4k2Z4f243V7wySxxmdfmdy' }],
				date: new Date('May 9, 2025'),
			},
			{
				image: 'music_original_scenes-of-water',
				title: 'Scenes of Water',
				description:
					'An exploration of beautiful, naturally occuring phenomena that involve water.',
				urls: [{ type: o.Spotify, url: 'https://open.spotify.com/album/7q4QpV8ABx5eh1QrjupGKG' }],
				date: new Date('June 27, 2024'),
			},
			{
				image: 'music_original_protocol-ep',
				title: 'Protocol EP',
				description:
					'Sonic textures from interference-laden chaos to the dense and powerful layers of a messaging protocol.',
				urls: [{ type: o.Spotify, url: 'https://open.spotify.com/album/6jzHkIy9vlppA9FzLOeyWq' }],
				date: new Date('January 19, 2024'),
			},
		],
		[t.Remix]: [
			{
				image: 'music_remix_so-seductive',
				title: 'EMSKI & Remedy - So Seductive (Apellum Bootleg)',
				description: 'A fun club mix of a recent release by EMSKI and Remedy.',
				urls: [{ type: o.SoundCloud, url: 'https://on.soundcloud.com/Qjt2u' }],
				date: new Date('January 31, 2024'),
				hidden: !1,
			},
			{
				image: 'music_remix_exhibit-1',
				title: 'Slam - Exhibit 1 (Apellum Bootleg)',
				description: "My submission for Slam's remix competition held in December 2023.",
				urls: [{ type: o.SoundCloud, url: 'https://on.soundcloud.com/VMZB2' }],
				date: new Date('January 5, 2024'),
			},
		],
		[t.Set]: [
			{
				image: 'music_set_immediate-rush_2024-11-09',
				urls: [{ type: o.SoundCloud, url: 'https://on.soundcloud.com/aYmoqckGLPX7TYiZ9' }],
				title: 'Immediate Rush @ Kingdom Nightclub',
				description: 'Raw and hypnotic techno set at Kingdom Nightclub.',
				date: new Date('November 11, 2024'),
			},
			{
				image: 'music_set_kitchen-techno_2024-07-12',
				urls: [{ type: o.SoundCloud, url: 'https://on.soundcloud.com/UZ1L76EFpDdpTgaU9' }],
				title: 'Kitchen Techno @ Club Eternal',
				description: 'Hypnotic and groovy techno set at a Kitchen Techno party.',
				date: new Date('July 12, 2024'),
			},
		],
		[t.Mix]: [
			{
				image: 'music_mix_audiophiles-002',
				urls: [{ type: o.SoundCloud, url: 'https://on.soundcloud.com/UpsFfyKGuCySktxU6' }],
				title: 'Audiophiles 002',
				description: 'Kicking off a podcast series with raw and energetic techno.',
			},
			{
				image: 'music_mix_rn-060',
				urls: [{ type: o.SoundCloud, url: 'https://on.soundcloud.com/Ny3Ee' }],
				title: 'Required Noise 060',
				description: "Techno episode for the Required Noise label's podcast.",
			},
			{
				image: 'music_mix_womm-090',
				urls: [{ type: o.SoundCloud, url: 'https://on.soundcloud.com/xfcv7' }],
				title: "What's On My Mind 090",
				description: "Techno episode for No Light Thing's radio show podcast.",
				hidden: !0,
			},
			{
				image: 'music_mix_dj-mixes',
				urls: [{ type: o.SoundCloud, url: 'https://on.soundcloud.com/uch1p' }],
				title: 'DJ Mixes',
				description: 'Collection of my DJ mixes.',
			},
			{
				image: 'music_mix_mixed-tape',
				urls: [{ type: o.SoundCloud, url: 'https://on.soundcloud.com/Mx6ky' }],
				title: 'Mixed Tape',
				description:
					'Collection of my Mixed Tape series, i.e. mini-mixes that featuring specific artists.',
				hidden: !0,
			},
		],
	},
}
var i = ((e) => ((e.Short = 'short'), (e.OneLine = 'oneLine'), (e.Long = 'long'), e))(i || {})
const c = {
	downloadUrl: 'https://storage.googleapis.com/apellum-files/epks/apellum-epk.zip',
	biographyData: {
		image: 'press_epk-01.jpg',
		biographies: {
			[i.Short]: {
				type: i.Short,
				text: [
					`
					Apellum is an Austin-based producer and DJ crafting organic and hypnotic electronic music drawn from the vibrations of flora, water, and ether.
					With a background in percussion and audio engineering, his work blends syncopated rhythms, earthy sound design, and field-recorded elements into something alive and introspective.
					He is the founder of Mystic Twin, an underground label born in Austin, devoted to deep, hypnotic electronic music.
				`,
				],
			},
			[i.Long]: {
				type: i.Long,
				text: [
					`
					Apellum is an Austin-based producer and DJ crafting organic and hypnotic electronic music drawn from the vibrations of flora, water, and ether. 
					With a background in percussion and audio engineering, his work blends syncopated rhythm, earthy sound design, and field-recorded elements into something alive and introspective. 
				`,
					`
					He is the founder of Mystic Twin, an underground label born in Austin, devoted to deep, hypnotic electronic music.
				`,
				],
			},
		},
	},
	musicData: { image: 'press_epk-02.jpg', collections: r.collections },
	pressData: { images: ['press_epk-03.jpg', 'press_epk-04.jpg', 'press_epk-05.jpg'] },
}
export { a as A, c as E, t as M, s as a, i as b, r as c, u as s }
