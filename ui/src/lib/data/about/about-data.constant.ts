import { EPK_DATA, EpkBiographyType } from '@lib/data/epk'
import type { IAboutData } from './about-data.interface'

const BIOGRAPHY_PARAGRAPHS = EPK_DATA.biographyData.biographies[EpkBiographyType.Long].text ?? []

export const ABOUT_DATA: IAboutData = {
	sections: [
		{
			image: 'press_about-01.jpg',
			header: 'Introducing Apellum',
			paragraph: BIOGRAPHY_PARAGRAPHS[0],
		},
		{
			image: 'press_about-02.jpg',
			header: 'Influences across genres',
			paragraph: BIOGRAPHY_PARAGRAPHS[1],
		},
		{
			image: 'press_about-03.jpg',
			header: 'Exploration in the studio',
			paragraph: BIOGRAPHY_PARAGRAPHS[2],
		},
	],
}
