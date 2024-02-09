import { MusicCollectionType } from '@lib/data/music'

export function getTextFromMusicCollectionType(musicCollectionType: MusicCollectionType): string {
	switch (musicCollectionType) {
		case MusicCollectionType.Original:
			return 'Originals'
		case MusicCollectionType.Remix:
			return 'Remixes'
		case MusicCollectionType.Set:
			return 'DJ Sets'
		case MusicCollectionType.Mix:
			return 'DJ Mixes'
		default:
			return ''
	}
}
