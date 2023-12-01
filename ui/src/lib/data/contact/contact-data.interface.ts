import { IconName } from '@lib/app'

import { ContactType } from './contact-data.enum'

export interface IContactData {
	contacts: {
		[ContactType.Email]: IContact[]
		[ContactType.Music]: IContact[]
		[ContactType.Social]: IContact[]
	}
}

export interface IContact {
	name: string
	url: string
	username?: string
	icon?: IconName
}
