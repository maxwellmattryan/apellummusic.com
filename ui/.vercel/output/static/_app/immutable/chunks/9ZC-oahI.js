import { A as e } from './BnkzR3UQ.js'
const t = 'Apellum | Techno Producer & DJ'
function s(r) {
	switch (r) {
		default:
		case e.Error:
			return `Page not found | ${t}`
		case e.Home:
			return `${t}`
		case e.About:
			return `About | ${t}`
		case e.Music:
			return `Music | ${t}`
		case e.Epk:
			return `EPK | ${t}`
		case e.PhotosAndVideos:
			return `Photos & Videos | ${t}`
		case e.Events:
			return `Events | ${t}`
	}
}
export { s as g }
