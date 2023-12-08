export interface IFeatures {
	home: IFeatureFlag
	about: IFeatureFlag
	music: IFeatureFlag
	epk: IFeatureFlag
	photosAndVideos: IFeatureFlag
	events: IFeatureFlag
}

export interface IFeatureFlag {
	enabled: boolean
	hidden?: boolean
}

export const FEATURES: IFeatures = {
	home: {
		enabled: true,
	},
	about: {
		enabled: true,
	},
	music: {
		enabled: true,
	},
	epk: {
		enabled: true,
		hidden: true,
	},
	photosAndVideos: {
		enabled: false,
		hidden: true,
	},
	events: {
		enabled: false,
	},
}
