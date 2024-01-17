import type { MusicCollectionType } from './music-data.enum'

export interface IMusicData {
	collections: IMusicCollections
}

export interface IMusicCollections {
	[MusicCollectionType.Original]: IMusicItem[]
	[MusicCollectionType.Remix]: IMusicItem[]
	[MusicCollectionType.Set]: IMusicItem[]
	[MusicCollectionType.Mix]: IMusicItem[]
}

export interface IMusicItem {
	image: string
	url: string
	title: string
	description: string
	date?: Date
	hidden?: boolean
}
