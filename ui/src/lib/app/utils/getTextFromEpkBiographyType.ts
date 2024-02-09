import { EpkBiographyType } from '@lib/data/epk'

export function getTextFromEpkBiographyType(biographyType: EpkBiographyType): string {
	switch (biographyType) {
		case EpkBiographyType.Long:
			return 'Long'
		case EpkBiographyType.Short:
			return 'Short'
		case EpkBiographyType.OneLine:
			return 'One-line'
		default:
			return ''
	}
}
