import { s as z, n as S, i as O, h as Z, o as ee } from '../chunks/D4f8t5KQ.js'
import {
	S as K,
	i as X,
	d as h,
	n as b,
	y as w,
	b as B,
	z as p,
	p as v,
	q as E,
	v as U,
	e as C,
	r as A,
	w as N,
	s as I,
	C as te,
	j as Y,
	t as j,
	a as P,
	c as ae,
	m as F,
	E as se,
	l as J,
	k as Q,
	g as re,
} from '../chunks/DpX7TR1M.js'
import { e as $ } from '../chunks/D6YF6ztN.js'
import { b as oe } from '../chunks/DUZvNpQf.js'
import { E as le, b as ne, A as W, s as ie } from '../chunks/BnkzR3UQ.js'
import { g as ce } from '../chunks/9ZC-oahI.js'
import '../chunks/C7nbUKwt.js'
import { C as ue } from '../chunks/-MzZbKmP.js'
const q = le.biographyData.biographies[ne.Long].text ?? [],
	fe = {
		sections: [
			{ image: 'press_about-01.webp', header: '', paragraph: q[0] },
			{ image: 'press_about-02.webp', header: '', paragraph: q[1] },
		],
	}
function he(n) {
	let e, a, l, o, i, d, u, s, f, t, c, r, x, _, G, T, y
	return {
		c() {
			;(e = A('about-section')),
				(a = A('about-section-paragraph')),
				(l = A('about-section-paragraph-header')),
				(o = A('h3')),
				(i = N(n[3])),
				(s = I()),
				(f = A('about-section-paragraph-text')),
				(t = A('p')),
				(c = N(n[4])),
				(x = I()),
				(_ = A('img')),
				this.h()
		},
		l(g) {
			e = v(g, 'ABOUT-SECTION', { class: !0 })
			var m = E(e)
			a = v(m, 'ABOUT-SECTION-PARAGRAPH', { class: !0 })
			var R = E(a)
			l = v(R, 'ABOUT-SECTION-PARAGRAPH-HEADER', { class: !0 })
			var H = E(l)
			o = v(H, 'H3', { class: !0 })
			var k = E(o)
			;(i = U(k, n[3])),
				k.forEach(h),
				H.forEach(h),
				(s = C(R)),
				(f = v(R, 'ABOUT-SECTION-PARAGRAPH-TEXT', {}))
			var D = E(f)
			t = v(D, 'P', { class: !0 })
			var L = E(t)
			;(c = U(L, n[4])),
				L.forEach(h),
				D.forEach(h),
				R.forEach(h),
				(x = C(m)),
				(_ = v(m, 'IMG', { class: !0, src: !0, alt: !0 })),
				m.forEach(h),
				this.h()
		},
		h() {
			b(o, 'class', (d = O(n[0] ? 'is-left' : 'is-right') + ' svelte-10pri6x')),
				w(
					l,
					'class',
					(u =
						'w-full mb-[2vh] md:mb-[4vh] pb-4 border-b-2 border-solid border-[' +
						(n[0] ? '#4c5adb' : '#ef2e5e') +
						']'),
				),
				b(t, 'class', (r = O(n[0] ? 'is-left' : 'is-right') + ' svelte-10pri6x')),
				w(a, 'class', 'px-[1vw] pb-[4vh] flex flex-col justify-between opacity-90'),
				b(_, 'class', 'md:w-[35vw] md:max-h-[640px] md:px-[4vw]'),
				Z(_.src, (G = oe + '/images/' + n[2])) || b(_, 'src', G),
				b(_, 'alt', (T = 'Press ' + (n[1] + 1))),
				w(
					e,
					'class',
					(y =
						'about-pair flex flex-col md:flex-row ' +
						(n[0] ? 'md:flex-row' : 'md:flex-row-reverse') +
						' items-center'),
				)
		},
		m(g, m) {
			B(g, e, m),
				p(e, a),
				p(a, l),
				p(l, o),
				p(o, i),
				p(a, s),
				p(a, f),
				p(f, t),
				p(t, c),
				p(e, x),
				p(e, _)
		},
		p(g, [m]) {
			m & 1 && d !== (d = O(g[0] ? 'is-left' : 'is-right') + ' svelte-10pri6x') && b(o, 'class', d),
				m & 1 &&
					u !==
						(u =
							'w-full mb-[2vh] md:mb-[4vh] pb-4 border-b-2 border-solid border-[' +
							(g[0] ? '#4c5adb' : '#ef2e5e') +
							']') &&
					w(l, 'class', u),
				m & 1 &&
					r !== (r = O(g[0] ? 'is-left' : 'is-right') + ' svelte-10pri6x') &&
					b(t, 'class', r),
				m & 2 && T !== (T = 'Press ' + (g[1] + 1)) && b(_, 'alt', T),
				m & 1 &&
					y !==
						(y =
							'about-pair flex flex-col md:flex-row ' +
							(g[0] ? 'md:flex-row' : 'md:flex-row-reverse') +
							' items-center') &&
					w(e, 'class', y)
		},
		i: S,
		o: S,
		d(g) {
			g && h(e)
		},
	}
}
function _e(n, e, a) {
	let { section: l } = e,
		{ justifyLeft: o = !0 } = e,
		{ index: i = 0 } = e
	const { image: d, header: u, paragraph: s } = l ?? {}
	return (
		(n.$$set = (f) => {
			'section' in f && a(5, (l = f.section)),
				'justifyLeft' in f && a(0, (o = f.justifyLeft)),
				'index' in f && a(1, (i = f.index))
		}),
		[o, i, d, u, s, l]
	)
}
class me extends K {
	constructor(e) {
		super(), X(this, e, _e, he, z, { section: 5, justifyLeft: 0, index: 1 })
	}
}
function M(n, e, a) {
	const l = n.slice()
	return (l[1] = e[a]), (l[3] = a), l
}
function V(n) {
	let e, a, l
	return (
		(a = new me({ props: { section: n[1], index: n[3], justifyLeft: n[3] % 2 !== 0 } })),
		{
			c() {
				;(e = A('div')), Q(a.$$.fragment), this.h()
			},
			l(o) {
				e = v(o, 'DIV', { class: !0 })
				var i = E(e)
				J(a.$$.fragment, i), i.forEach(h), this.h()
			},
			h() {
				b(e, 'class', 'about-section svelte-1wnhg9f')
			},
			m(o, i) {
				B(o, e, i), F(a, e, null), (l = !0)
			},
			p: S,
			i(o) {
				l || (P(a.$$.fragment, o), (l = !0))
			},
			o(o) {
				j(a.$$.fragment, o), (l = !1)
			},
			d(o) {
				o && h(e), Y(a)
			},
		}
	)
}
function pe(n) {
	let e, a, l, o, i, d
	document.title = ce(W.About)
	let u = $(n[0]),
		s = []
	for (let t = 0; t < u.length; t += 1) s[t] = V(M(n, u, t))
	const f = (t) =>
		j(s[t], 1, 1, () => {
			s[t] = null
		})
	return (
		(i = new ue({})),
		{
			c() {
				;(e = I()), (a = A('about-page'))
				for (let t = 0; t < s.length; t += 1) s[t].c()
				;(l = I()), (o = A('div')), Q(i.$$.fragment), this.h()
			},
			l(t) {
				se('svelte-ju79ej', document.head).forEach(h),
					(e = C(t)),
					(a = v(t, 'ABOUT-PAGE', { class: !0 }))
				var r = E(a)
				for (let _ = 0; _ < s.length; _ += 1) s[_].l(r)
				;(l = C(r)), (o = v(r, 'DIV', { class: !0 }))
				var x = E(o)
				J(i.$$.fragment, x), x.forEach(h), r.forEach(h), this.h()
			},
			h() {
				b(o, 'class', 'about-section svelte-1wnhg9f'),
					w(a, 'class', 'w-full h-auto mt-[10vh] mb-[15vh] flex flex-col items-center')
			},
			m(t, c) {
				B(t, e, c), B(t, a, c)
				for (let r = 0; r < s.length; r += 1) s[r] && s[r].m(a, null)
				p(a, l), p(a, o), F(i, o, null), (d = !0)
			},
			p(t, [c]) {
				if (c & 1) {
					u = $(t[0])
					let r
					for (r = 0; r < u.length; r += 1) {
						const x = M(t, u, r)
						s[r] ? (s[r].p(x, c), P(s[r], 1)) : ((s[r] = V(x)), s[r].c(), P(s[r], 1), s[r].m(a, l))
					}
					for (re(), r = u.length; r < s.length; r += 1) f(r)
					ae()
				}
			},
			i(t) {
				if (!d) {
					for (let c = 0; c < u.length; c += 1) P(s[c])
					P(i.$$.fragment, t), (d = !0)
				}
			},
			o(t) {
				s = s.filter(Boolean)
				for (let c = 0; c < s.length; c += 1) j(s[c])
				j(i.$$.fragment, t), (d = !1)
			},
			d(t) {
				t && (h(e), h(a)), te(s, t), Y(i)
			},
		}
	)
}
function de(n) {
	const { sections: e } = fe
	return (
		ee(() => {
			ie(W.About)
		}),
		[e]
	)
}
class Te extends K {
	constructor(e) {
		super(), X(this, e, de, pe, z, {})
	}
}
export { Te as component }
