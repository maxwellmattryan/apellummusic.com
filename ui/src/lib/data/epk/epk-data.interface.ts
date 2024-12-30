import type { IMusicCollections } from '@lib/data/music'
import type { EpkBiographyType } from './epk-data.enum'

export interface IEpkData {
	downloadUrl: string
	biographyData: IEpkBiographyData
	musicData: IEpkMusicData
	pressData: IEpkPressData
}

// BIOGRAPHY

export interface IEpkBiographyData {
	image: string
	biographies: IEpkBiographies
}

export interface IEpkBiographies {
	[EpkBiographyType.Long]: IEpkBiography
	[EpkBiographyType.Short]: IEpkBiography
	// [EpkBiographyType.OneLine]: IEpkBiography
}

export interface IEpkBiography {
	type: EpkBiographyType
	text: string[]
}

// MUSIC

export interface IEpkMusicData {
	image: string
	collections: IMusicCollections
}

// PRESS

export interface IEpkPressData {
	images: string[]
}
