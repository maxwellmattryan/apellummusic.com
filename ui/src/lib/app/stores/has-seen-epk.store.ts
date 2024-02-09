import { writable } from 'svelte/store'

export const hasSeenEpk = writable<boolean>(false)
