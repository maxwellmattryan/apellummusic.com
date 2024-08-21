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
			[EpkBiographyType.OneLine]: {
				type: EpkBiographyType.OneLine,
				text: [
					`
					Apellum is a techno artist based in Austin, weaving a sonic tapestry from threads of groovy, hypnotic, and raw techno to create a transcendental dancefloor experience.
				`,
				],
			},
			[EpkBiographyType.Short]: {
				type: EpkBiographyType.Short,
				text: [
					`
					In the dynamic landscape of electronic music, Apellum stands as a techno producer and DJ deeply rooted in the vibrant Austin scene. With a diverse background as a percussionist, audio engineer, and sound designer, Apellum artfully weaves together influences from a vast spectrum of musical genres, crafting a sonic tapestry that resonates closely with the groovy, hypnotic, and raw essence of Berlin techno. Fans can look forward to his new EP, "Voyager", which is an experience exploring the vastness and hostility of space travel in a futuristic world. 
				`,
				],
			},
			[EpkBiographyType.Long]: {
				type: EpkBiographyType.Long,
				text: [
					`
					In the dynamic landscape of electronic music, Apellum stands as a techno producer and DJ deeply rooted in the vibrant Austin scene. With a diverse background as a percussionist, audio engineer, and sound designer, Apellum artfully weaves together influences from a vast spectrum of musical genres, crafting a sonic tapestry that resonates closely with the groovy, hypnotic, and raw essence of Berlin techno.
				`,
					`
					Within the techno scene, Apellum finds inspiration in many artists from multiple sub-genres, such as Rene Wise for raw and groovy techno, Ketch for dark and cerebral techno, and Wata Igarashi for hypnotic dub techno. Beyond the confines of techno, Apellum's creative canvas is painted with shades of jungle, trance, jazz, fusion, funk, and classical, among many others.
				`,
					`
					Apellum's studio has been a realm of exploration and creativity, where new sounds and music are discovered and crafted. Fans can look forward to his new EP, "Voyager", which is an experience exploring the vastness and hostility of space travel in a futuristic world.
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
