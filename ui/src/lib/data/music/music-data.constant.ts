import { MusicCollectionType, MusicUrlType } from './music-data.enum'
import type { IMusicData } from './music-data.interface'

export const MUSIC_DATA: IMusicData = {
	collections: {
		[MusicCollectionType.Original]: [
			{
				image: 'music_original_protocol-ep',
				title: 'Protocol EP',
				description:
					'Sonic textures from interference-laden chaos to the dense and powerful layers of a messaging protocol.',
				urls: [
					{
						type: MusicUrlType.Spotify,
						url: 'https://open.spotify.com/album/6jzHkIy9vlppA9FzLOeyWq',
					},
				],
				date: new Date('January 19, 2024'),
				hidden: false,
			},
			{
				image: 'music_original_eko',
				title: 'Eko',
				description:
					'Pulsating rhythm and ambient sounds into the vastness and intrigue of the subterranean.',
				urls: [
					{
						type: MusicUrlType.Spotify,
						url: 'https://open.spotify.com/track/4crFX8q2LDFoO5yLDQu0yY?si=55a3c2cdcc804b07',
					},
				],
				date: new Date('January 18, 2019'),
			},
			{
				image: 'music_original_in-snowfield',
				title: 'In Snowfield',
				description:
					'Relentless percussion with icy synth textures, mirroring the cat-and-mouse chase with Sniper Wolf.',
				urls: [
					{
						type: MusicUrlType.Spotify,
						url: 'https://open.spotify.com/track/1Oesrus6lIdvUiF1apvFRK?si=7e3a938c87434225',
					},
				],
				date: new Date('December 12, 2018'),
			},
		],
		[MusicCollectionType.Remix]: [
			{
				image: 'music_remix_so-seductive',
				title: 'EMSKI & Remedy - So Seductive (Apellum Bootleg)',
				description: 'A fun club mix of a recent release by EMSKI and Remedy.',
				urls: [
					{
						type: MusicUrlType.SoundCloud,
						url: 'https://on.soundcloud.com/Qjt2u',
					},
				],
				date: new Date('January 31, 2024'),
				hidden: false,
			},
			{
				image: 'music_remix_exhibit-1',
				title: 'Slam - Exhibit 1 (Apellum Bootleg)',
				description: "My submission for Slam's remix competition held in December 2023.",
				urls: [
					{
						type: MusicUrlType.SoundCloud,
						url: 'https://on.soundcloud.com/VMZB2',
					},
				],
				date: new Date('January 5, 2024'),
			},
		],
		[MusicCollectionType.Set]: [
			{
				image: 'music_set_kitchen-techno_2024-03-23',
				urls: [
					{
						type: MusicUrlType.SoundCloud,
						url: 'https://on.soundcloud.com/UZ1L76EFpDdpTgaU9',
					},
				],
				title: 'Kitchen Techno',
				description: 'Hypnotic and groovy techno set for another Kitchen Techno party.',
				date: new Date('March 23, 2024'),
			},
			{
				image: 'music_set_kitchen-techno_2023-12-16',
				urls: [
					{
						type: MusicUrlType.SoundCloud,
						url: 'https://on.soundcloud.com/8LRgH',
					},
				],
				title: 'Kitchen Techno',
				description: "Raw and groovy techno set for Kitchen Techno's first house party in Austin.",
				date: new Date('December 16, 2023'),
			},
			{
				image: 'music_set_birds-of-a-feather_2023-09-16',
				urls: [
					{
						type: MusicUrlType.SoundCloud,
						url: 'https://on.soundcloud.com/Kpy16',
					},
				],
				title: 'Birds of a Feather',
				description: "Performance for Kai Castro's Birds of a Feather event.",
				date: new Date('September 16, 2023'),
			},
			{
				image: 'music_set_the-oven_2023-08-11',
				urls: [
					{
						type: MusicUrlType.SoundCloud,
						url: 'https://on.soundcloud.com/qEmyB',
					},
				],
				title: 'The Oven',
				description: 'Performance at The Oven, local after-hours spot.',
				date: new Date('August 11, 2023'),
			},
		],
		[MusicCollectionType.Mix]: [
			{
				image: 'music_mix_audiophiles-002',
				urls: [
					{
						type: MusicUrlType.SoundCloud,
						url: 'https://on.soundcloud.com/UpsFfyKGuCySktxU6',
					},
				],
				title: 'Audiophiles 002',
				description: 'Kicking off a podcast series with raw and energetic techno.',
			},
			{
				image: 'music_mix_rn-060',
				urls: [
					{
						type: MusicUrlType.SoundCloud,
						url: 'https://on.soundcloud.com/Ny3Ee',
					},
				],
				title: 'Required Noise 060',
				description: "Techno episode for the Required Noise label's podcast.",
			},
			{
				image: 'music_mix_womm-090',
				urls: [
					{
						type: MusicUrlType.SoundCloud,
						url: 'https://on.soundcloud.com/xfcv7',
					},
				],
				title: "What's On My Mind 090",
				description: "Techno episode for No Light Thing's radio show podcast.",
			},
			{
				image: 'music_mix_dj-mixes',
				urls: [
					{
						type: MusicUrlType.SoundCloud,
						url: 'https://on.soundcloud.com/uch1p',
					},
				],
				title: 'DJ Mixes',
				description: 'Collection of my DJ mixes.',
			},
			{
				image: 'music_mix_mixed-tape',
				urls: [
					{
						type: MusicUrlType.SoundCloud,
						url: 'https://on.soundcloud.com/Mx6ky',
					},
				],
				title: 'Mixed Tape',
				description:
					'Collection of my Mixed Tape series, i.e. mini-mixes that featuring specific artists.',
			},
		],
	},
}
