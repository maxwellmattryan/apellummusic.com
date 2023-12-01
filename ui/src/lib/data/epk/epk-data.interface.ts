import { EpkBiographyType } from './epk-data.enum'

export interface IEpkData {
	downloadUrl: string
	biographyData: IEpkBiographyData
	musicImage: string
	pressImages: string[]
}

export interface IEpkBiographyData {
	image: string
	biographies: IEpkBiographies
}

export interface IEpkBiographies {
	[EpkBiographyType.OneLine]: IEpkBiography
	[EpkBiographyType.Short]: IEpkBiography
	[EpkBiographyType.Long]: IEpkBiography
}

export interface IEpkBiography {
	type: EpkBiographyType
	text: string[]
}
