import { updateSideDrawerState } from '../stores'

export function openSideDrawer(): void {
	updateSideDrawerState({ hidden: false })
}

export function closeSideDrawer(): void {
	updateSideDrawerState({ hidden: true })
}
