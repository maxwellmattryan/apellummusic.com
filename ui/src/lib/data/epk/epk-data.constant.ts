import type { IEpkData } from './epk-data.interface'
import { EpkBiographyType } from './epk-data.enum'

export const EPK_DATA: IEpkData = {
	downloadUrl: 'https://storage.googleapis.com/apellum-files/epks/apellum-epk.zip',
	biographyData: {
		image: 'press_epk-01.jpg',
		biographies: {
			[EpkBiographyType.OneLine]: {
				type: EpkBiographyType.OneLine,
				text: [
					`
                    Apellum is a visionary techno artist from Austin, weaving a sonic tapestry from threads of Berlin,
                    dub, and ambient techno to create a transcendental dancefloor experience.
                `,
				],
			},
			[EpkBiographyType.Short]: {
				type: EpkBiographyType.Short,
				text: [
					`
                    In the ever-evolving landscape of electronic music, Apellum emerges as an up-and-coming techno DJ
                    and producer deeply rooted in the vibrant Austin scene. With a diverse background as a
                    percussionist, audio engineer, and sound designer, Apellum artfully weaves together influences
                    from a vast spectrum of musical genres, crafting a sonic tapestry that resonates closely with the
                    hypnotic and groovy essence of Berlin techno.
                `,
				],
			},
			[EpkBiographyType.Long]: {
				type: EpkBiographyType.Long,
				text: [
					`
                        In the ever-evolving landscape of electronic music, Apellum emerges as an up-and-coming techno DJ
                        and producer deeply rooted in the vibrant Austin scene. With a diverse background as a
                        percussionist, audio engineer, and sound designer, Apellum artfully weaves together influences
                        from a vast spectrum of musical genres, crafting a sonic tapestry that resonates closely with the
                        hypnotic and groovy essence of Berlin techno.
                    `,
					`
                        Within the techno scene, Apellum finds inspiration in many artists from multiple sub-genres, like
                        Ketch or Yan Cook for darker Berlin techno, Maōh for hardgroove, or Wata Igarashi for hypnotic /
                        dub techno. Beyond the confines of techno, Apellum’s creative canvas is painted with shades of
                        drum ‘n bass, jungle, trance, jazz, fusion, funk, classical, and rock, among many others.
                    `,
					`
                        Apellum’s studio has been a realm of exploration and creativity, where new sounds and music are
                        discovered and crafted. His upcoming EP, Protocol, embodies a culmination of recent artistic
                        influences that have shaped and defined his signature sound. Join Apellum on a transformative
                        journey, where the rhythms and sounds transcend boundaries and transport listeners to new
                        emotional realms, an invitation to experience the power of techno in its purest form.
                    `,
				],
			},
		},
	},
	musicImage: 'press_epk-02.jpg',
	pressImages: ['press_epk-03.jpg', 'press_epk-04.jpg', 'press_epk-05.jpg'],
}
