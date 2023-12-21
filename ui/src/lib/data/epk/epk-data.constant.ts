import type { IEpkData } from './epk-data.interface'
import { EpkBiographyType, EpkMusicCollectionType } from './epk-data.enum'

export const EPK_DATA: IEpkData = {
	downloadUrl: 'https://storage.googleapis.com/apellum-files/epks/apellum-epk.zip',
	biographyData: {
		image: 'press_epk-01.jpg',
		biographies: {
			[EpkBiographyType.OneLine]: {
				type: EpkBiographyType.OneLine,
				text: [
					`
                    Apellum is a visionary techno artist from Austin, weaving a sonic tapestry from threads of groovy,
                    hypnotic, and raw techno to create a transcendental dancefloor experience.
                `,
				],
			},
			[EpkBiographyType.Short]: {
				type: EpkBiographyType.Short,
				text: [
					`
                    In the ever-evolving landscape of electronic music, Apellum emerges as a techno producer and DJ deeply rooted in the vibrant Austin scene. With a diverse background as a percussionist, audio engineer, and sound designer, Apellum artfully weaves together influences from a vast spectrum of musical genres, crafting a sonic tapestry that resonates closely with the groovy, hypnotic, and raw essence of Berlin techno.
                `,
				],
			},
			[EpkBiographyType.Long]: {
				type: EpkBiographyType.Long,
				text: [
					`
                    	In the ever-evolving landscape of electronic music, Apellum emerges as a techno producer and DJ deeply rooted in the vibrant Austin scene. With a diverse background as a percussionist, audio engineer, and sound designer, Apellum artfully weaves together influences from a vast spectrum of musical genres, crafting a sonic tapestry that resonates closely with the groovy, hypnotic, and raw essence of Berlin techno.
                    `,
					`
						Within the techno scene, Apellum finds inspiration in many artists from multiple sub-genres, like Ketch or Marcal for raw Berlin techno, Chlär for powerful and groovy techno, or Wata Igarashi for hypnotic dub techno. Beyond the confines of techno, Apellum’s creative canvas is painted with shades of jungle, trance, jazz, fusion, funk, and classical, among many others.
                    `,
					`
                        Apellum’s studio has been a realm of exploration and creativity, where new sounds and music
						are discovered and crafted. His upcoming release, Protocol EP, embodies a culmination of recent
						artistic influences that have shaped and defined his signature sound. Join Apellum on a
						transformative journey, where the rhythms and textures transcend boundaries and transport
						listeners to new emotional realms, an invitation to experience the power of techno in its
						purest form.
                    `,
				],
			},
		},
	},
	musicData: {
		image: 'press_epk-02.jpg',
		collections: {
			[EpkMusicCollectionType.Original]: [
				{
					image: 'music_original_eko',
					title: 'Eko',
					description:
						'Pulsating rhythm and ambient sounds into the vastness and intrigue of the subterranean.',
					url: 'https://open.spotify.com/track/4crFX8q2LDFoO5yLDQu0yY?si=55a3c2cdcc804b07',
					date: new Date('January 18, 2019'),
				},
				{
					image: 'music_original_in-snowfield',
					title: 'In Snowfield',
					description:
						'Relentless percussion with icy synth textures, mirroring the cat-and-mouse chase with Sniper Wolf.',
					url: 'https://open.spotify.com/track/1Oesrus6lIdvUiF1apvFRK?si=7e3a938c87434225',
					date: new Date('December 12, 2018'),
				},
			],
			[EpkMusicCollectionType.Set]: [
				{
					image: 'music_set_birds-of-a-feather_2023-09-16',
					url: 'https://on.soundcloud.com/zN8rm',
					title: 'Birds of a Feather',
					description: "Performance for Kai Castro's Birds of a Feather event.",
					date: new Date('September 16, 2023'),
				},
				{
					image: 'music_set_the-oven_2023-08-11',
					url: 'https://on.soundcloud.com/1hZWo',
					title: 'The Oven',
					description: 'Performance at The Oven, local after-hours spot.',
					date: new Date('August 11, 2023'),
				},
			],
			[EpkMusicCollectionType.Mix]: [
				{
					image: 'music_mix_womm-090',
					url: 'https://on.soundcloud.com/xfcv7',
					title: "What's On My Mind 090",
					description: "Techno episode for No Light Thing's radio show podcast.",
				},
				{
					image: 'music_mix_dj-mixes',
					url: 'https://on.soundcloud.com/huyJ8',
					title: 'DJ Mixes',
					description: 'Collection of my DJ mixes.',
				},
				{
					image: 'music_mix_mixed-tape',
					url: 'https://on.soundcloud.com/iJz4h',
					title: 'Mixed Tape',
					description:
						'Collection of my Mixed Tape series, i.e. mini-mixes that featuring specific artists.',
				},
			],
		},
	},
	pressData: {
		images: ['press_epk-03.jpg', 'press_epk-04.jpg', 'press_epk-05.jpg'],
	},
}
