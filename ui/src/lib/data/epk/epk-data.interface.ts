import type { EpkBiographyType, EpkMusicCollectionType } from './epk-data.enum'

export interface IEpkData {
	downloadUrl: string
	biographyData: IEpkBiographyData
	musicData: IEpkMusicData
	pressImages: string[]
}

// BIOGRAPHY

export interface IEpkBiographyData {
	image: string
	biographies: IEpkBiographies
}

export interface IEpkBiographies {
	[EpkBiographyType.Long]: IEpkBiography
	[EpkBiographyType.Short]: IEpkBiography
	[EpkBiographyType.OneLine]: IEpkBiography
}

export interface IEpkBiography {
	type: EpkBiographyType
	text: string[]
}

// MUSIC

export interface IEpkMusicData {
	image: string
	collections: IEpkMusicCollections
}

export interface IEpkMusicCollections {
	[EpkMusicCollectionType.Original]: IEpkMusicItem[]
	// [EpkMusicCollectionType.Remix]: IEpkMusicItem[]
	[EpkMusicCollectionType.Set]: IEpkMusicItem[]
	[EpkMusicCollectionType.Mix]: IEpkMusicItem[]
}

export interface IEpkMusicItem {
	image: string
	url: string
	title: string
	description: string
	date?: Date
}
