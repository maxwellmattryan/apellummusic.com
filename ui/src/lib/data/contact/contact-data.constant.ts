import { IconName } from '@lib/app'

import { ContactType } from './contact-data.enum'
import type { IContactData } from './contact-data.interface'

export const CONTACT_DATA: IContactData = {
	contacts: {
		[ContactType.Email]: [
			{
				name: 'Email',
				url: 'apellummusic@gmail.com',
			},
		],
		[ContactType.Music]: [
			{
				name: 'Spotify',
				url: 'https://open.spotify.com/artist/2MOOYBdY5kjSsiTCugonnJ?si=GspHlrStQEiTmjuf3aIZqA',
				username: 'Apellum',
				icon: IconName.Spotify,
			},
			{
				name: 'SoundCloud',
				url: 'https://soundcloud.com/apellum',
				username: 'apellum',
				icon: IconName.SoundCloud,
			},
			{
				name: 'Bandcamp',
				url: 'https://apellum.bandcamp.com',
				username: 'Apellum',
				icon: IconName.Bandcamp,
			},
			{
				name: 'Apple Music',
				url: 'https://music.apple.com/us/artist/apellum/1535711525',
				username: 'Apellum',
				icon: IconName.AppleMusic,
			},
		],
		[ContactType.Social]: [
			{
				name: 'Instagram',
				url: 'https://instagram.com/apellum',
				username: 'apellum',
				icon: IconName.Instagram,
			},
			{
				name: 'Facebook',
				url: 'https://facebook.com/apellummusic',
				username: 'apellummusic',
				icon: IconName.Facebook,
			},
		],
	},
}
