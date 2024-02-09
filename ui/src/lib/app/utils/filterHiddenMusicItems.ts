import type { IMusicItem } from '@lib/data/music'

export function filterHiddenMusicItems(musicItems: IMusicItem[]): IMusicItem[] {
	return musicItems.filter((item) => !item.hidden)
}
