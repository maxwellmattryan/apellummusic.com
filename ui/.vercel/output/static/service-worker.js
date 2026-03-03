const s = location.pathname.split('/').slice(0, -1).join('/'),
	n = [
		s + '/_app/immutable/entry/start.B7vqthcr.js',
		s + '/_app/immutable/entry/app.7KetRfB0.js',
		s + '/_app/immutable/nodes/0.DkOEaKCM.js',
		s + '/_app/immutable/assets/0.DDWY0xxz.css',
		s + '/_app/immutable/nodes/1.6TYl_pXE.js',
		s + '/_app/immutable/nodes/2.BAsdC1E6.js',
		s + '/_app/immutable/assets/2.BkhXyfQE.css',
		s + '/_app/immutable/nodes/3.DZ1do79O.js',
		s + '/_app/immutable/assets/3.CjW2QzaI.css',
		s + '/_app/immutable/nodes/4.B83dvqX6.js',
		s + '/_app/immutable/assets/4.Cj3s2xOu.css',
		s + '/_app/immutable/nodes/5.ByV88RTp.js',
		s + '/_app/immutable/assets/Logo.BIod71KQ.css',
		s + '/_app/immutable/chunks/-MzZbKmP.js',
		s + '/_app/immutable/chunks/9ZC-oahI.js',
		s + '/_app/immutable/chunks/B3052n2p.js',
		s + '/_app/immutable/chunks/BLScLmK0.js',
		s + '/_app/immutable/chunks/BnkzR3UQ.js',
		s + '/_app/immutable/chunks/C7nbUKwt.js',
		s + '/_app/immutable/chunks/D4f8t5KQ.js',
		s + '/_app/immutable/chunks/D6YF6ztN.js',
		s + '/_app/immutable/chunks/DUZvNpQf.js',
		s + '/_app/immutable/chunks/DpX7TR1M.js',
		s + '/_app/immutable/chunks/Dr2d7BnT.js',
		s + '/_app/immutable/chunks/ZwL_c45G.js',
	],
	u = [
		s + '/favicon.png',
		s + '/images/music_mix_audiophiles-002.jpg',
		s + '/images/music_mix_dj-mixes.jpg',
		s + '/images/music_mix_mixed-tape.jpg',
		s + '/images/music_mix_rn-060.jpg',
		s + '/images/music_mix_womm-090.jpg',
		s + '/images/music_original_mind-fog.jpg',
		s + '/images/music_original_protocol-ep.jpg',
		s + '/images/music_original_scenes-of-water.jpg',
		s + '/images/music_remix_exhibit-1.jpg',
		s + '/images/music_remix_so-seductive.jpg',
		s + '/images/music_set_immediate-rush_2024-11-09.jpg',
		s + '/images/music_set_kitchen-techno_2024-07-12.jpg',
		s + '/images/press_about-01.webp',
		s + '/images/press_about-02.webp',
		s + '/images/press_about-03.jpg',
		s + '/images/press_contact.jpg',
		s + '/images/press_epk-01.jpg',
		s + '/images/press_epk-02.jpg',
		s + '/images/press_epk-03.jpg',
		s + '/images/press_epk-04.jpg',
		s + '/images/press_epk-05.jpg',
		s + '/images/press_home.webp',
		s + '/images/press_live-01.png',
		s + '/logos/black.svg',
		s + '/logos/white.svg',
		s + '/manifest.json',
		s + '/robots.txt',
	],
	o = '1772557877034',
	m = `cache-${o}`,
	c = [...n, ...u]
self.addEventListener('install', (e) => {
	async function i() {
		await (await caches.open(m)).addAll(c)
	}
	e.waitUntil(i())
})
self.addEventListener('activate', (e) => {
	async function i() {
		for (const a of await caches.keys()) a !== m && (await caches.delete(a))
	}
	e.waitUntil(i())
})
self.addEventListener('fetch', (e) => {
	if (e.request.method !== 'GET') return
	async function i() {
		const a = new URL(e.request.url),
			t = await caches.open(m)
		if (c.includes(a.pathname)) return t.match(a.pathname)
		try {
			const p = await fetch(e.request)
			return p.status === 200 && t.put(e.request, p.clone()), p
		} catch {
			return t.match(e.request)
		}
	}
	e.respondWith(i())
})
