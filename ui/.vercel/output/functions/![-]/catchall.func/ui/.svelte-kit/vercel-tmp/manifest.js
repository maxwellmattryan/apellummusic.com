export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/music_mix_audiophiles-002.jpg","images/music_mix_dj-mixes.jpg","images/music_mix_mixed-tape.jpg","images/music_mix_rn-060.jpg","images/music_mix_womm-090.jpg","images/music_original_mind-fog.jpg","images/music_original_protocol-ep.jpg","images/music_original_scenes-of-water.jpg","images/music_remix_exhibit-1.jpg","images/music_remix_so-seductive.jpg","images/music_set_immediate-rush_2024-11-09.jpg","images/music_set_kitchen-techno_2024-07-12.jpg","images/press_about-01.webp","images/press_about-02.webp","images/press_about-03.jpg","images/press_contact.jpg","images/press_epk-01.jpg","images/press_epk-02.jpg","images/press_epk-03.jpg","images/press_epk-04.jpg","images/press_epk-05.jpg","images/press_home.webp","images/press_live-01.png","logos/black.svg","logos/white.svg","manifest.json","robots.txt","service-worker.js"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.B7vqthcr.js",app:"_app/immutable/entry/app.7KetRfB0.js",imports:["_app/immutable/entry/start.B7vqthcr.js","_app/immutable/chunks/D4f8t5KQ.js","_app/immutable/chunks/DUZvNpQf.js","_app/immutable/chunks/BLScLmK0.js","_app/immutable/entry/app.7KetRfB0.js","_app/immutable/chunks/D4f8t5KQ.js","_app/immutable/chunks/DpX7TR1M.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/epk",
				pattern: /^\/epk\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/music",
				pattern: /^\/music\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/_server.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
