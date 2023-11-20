import { readable } from 'svelte/store'
import { isUserOnMobileDevice } from './utils'

export const is_mobile = readable<boolean>(isUserOnMobileDevice())
