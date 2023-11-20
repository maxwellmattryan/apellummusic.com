export function isUserOnMobileDevice(): boolean {
	const mobileOsRegex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
	return mobileOsRegex.test(navigator.userAgent)
}
