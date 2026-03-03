import { MUSIC_DATA } from '@lib/data/music'
import type { IEpkData } from './epk-data.interface'
import { EpkBiographyType } from './epk-data.enum'

export const EPK_DATA: IEpkData = {
	downloadUrl: 'https://storage.googleapis.com/apellum-files/epks/apellum-epk.zip',
	biographyData: {
		image: 'press_epk-01.jpg',
		/**
		 * When updating the biography, make sure to make changes in the following places:
		 * - Bandcamp
		 * - Beatport
		 * - Google Drive (upload to GCP)
		 * - Kinetic Management
		 * - Resident Advisor
		 * - Spotify
		 * - Website (source of truth)
		 */
		biographies: {
			// [EpkBiographyType.OneLine]: {
			// 	type: EpkBiographyType.OneLine,
			// 	text: [
			// 		`
			// 		In the heart of Austin’s electronic music scene, Apellum crafts a sound that is immersive, hypnotic, and deeply attuned to the dancefloor. As a producer and DJ, Apellum channels an intricate interplay of rhythm and texture, creating music that traverses the cerebral and physical, inviting listeners to lose themselves in the groove.
			// 	`,
			// 	],
			// },
			[EpkBiographyType.Short]: {
				type: EpkBiographyType.Short,
				text: [
					`
					Apellum is an Austin-based producer and DJ crafting organic and hypnotic electronic music drawn from the vibrations of flora, water, and ether.
					With a background in percussion and audio engineering, his work blends syncopated rhythms, earthy sound design, and field-recorded elements into something alive and introspective.
					He is the founder of Mystic Twin, an electronic music label whose inaugural release, the four-track compilation Mystic Collections Vol. I, arrives March 6th, 2026.
				`,
				],
			},
			[EpkBiographyType.Long]: {
				type: EpkBiographyType.Long,
				text: [
					`
					Apellum is an Austin-based producer and DJ crafting organic and hypnotic electronic music drawn from the vibrations of flora, water, and ether.
					With a background in percussion and audio engineering, his work blends syncopated rhythms, earthy sound design, and field-recorded elements into something alive and introspective.
				`,
					`
					He is the founder of Mystic Twin, an electronic music label whose inaugural release, the four-track compilation Mystic Collections Vol. I, arrives March 6th, 2026.
				`,
				],
			},
		},
	},
	musicData: {
		image: 'press_epk-02.jpg',
		collections: MUSIC_DATA.collections,
	},
	pressData: {
		images: ['press_epk-03.jpg', 'press_epk-04.jpg', 'press_epk-05.jpg'],
	},
}
