import type { IMusicCollections, MusicCollectionType } from '@lib/data/music'
import { filterHiddenMusicItems } from './filterHiddenMusicItems'

export function filterHiddenMusicItemsForCollections(
	collections: IMusicCollections,
): IMusicCollections {
	const filteredCollections = {} as IMusicCollections
	for (const [collectionType, collection] of Object.entries(collections)) {
		filteredCollections[collectionType as MusicCollectionType] = filterHiddenMusicItems(collection)
	}
	return filteredCollections
}
