import { readable } from 'svelte/store'
import { isUserOnMobileDevice } from './utils'

export const isMobile = readable<boolean>(isUserOnMobileDevice())
