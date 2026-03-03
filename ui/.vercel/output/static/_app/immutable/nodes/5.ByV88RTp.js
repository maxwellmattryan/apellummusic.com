import { s as O, n as y, h as C, o as D } from '../chunks/D4f8t5KQ.js'
import {
	S as q,
	i as U,
	d as m,
	C as w,
	u as G,
	b as T,
	z as d,
	p as g,
	q as b,
	v as H,
	e as P,
	r as p,
	w as N,
	s as R,
	n as _,
	t as A,
	a as v,
	c as z,
	y as F,
	E as J,
	j as K,
	m as L,
	l as Q,
	k as V,
	g as W,
} from '../chunks/DpX7TR1M.js'
import { e as E } from '../chunks/D6YF6ztN.js'
import { A as B, s as X, c as Y } from '../chunks/BnkzR3UQ.js'
import { g as Z } from '../chunks/9ZC-oahI.js'
import { b as S } from '../chunks/DUZvNpQf.js'
import { g as k } from '../chunks/ZwL_c45G.js'
function I(i, e, c) {
	const o = i.slice()
	return (o[2] = e[c]), o
}
function $(i) {
	let e, c, o
	return {
		c() {
			;(e = p('img')), this.h()
		},
		l(a) {
			;(e = g(a, 'IMG', { src: !0, alt: !0, class: !0 })), this.h()
		},
		h() {
			C(e.src, (c = S + '/images/' + i[2].image + '.jpg')) || _(e, 'src', c),
				_(e, 'alt', (o = i[2].image)),
				_(e, 'class', 'aspect-square')
		},
		m(a, l) {
			T(a, e, l)
		},
		p(a, l) {
			l & 2 && !C(e.src, (c = S + '/images/' + a[2].image + '.jpg')) && _(e, 'src', c),
				l & 2 && o !== (o = a[2].image) && _(e, 'alt', o)
		},
		d(a) {
			a && m(e)
		},
	}
}
function ee(i) {
	let e,
		c,
		o,
		a = k(i[0]) + '',
		l,
		f,
		n = E(i[1]),
		s = []
	for (let t = 0; t < n.length; t += 1) s[t] = $(I(i, n, t))
	return {
		c() {
			;(e = p('music-section')),
				(c = p('about-section-header')),
				(o = p('h3')),
				(l = N(a)),
				(f = R())
			for (let t = 0; t < s.length; t += 1) s[t].c()
		},
		l(t) {
			e = g(t, 'MUSIC-SECTION', {})
			var u = b(e)
			c = g(u, 'ABOUT-SECTION-HEADER', {})
			var r = b(c)
			o = g(r, 'H3', {})
			var h = b(o)
			;(l = H(h, a)), h.forEach(m), r.forEach(m), (f = P(u))
			for (let M = 0; M < s.length; M += 1) s[M].l(u)
			u.forEach(m)
		},
		m(t, u) {
			T(t, e, u), d(e, c), d(c, o), d(o, l), d(e, f)
			for (let r = 0; r < s.length; r += 1) s[r] && s[r].m(e, null)
		},
		p(t, [u]) {
			if ((u & 1 && a !== (a = k(t[0]) + '') && G(l, a), u & 2)) {
				n = E(t[1])
				let r
				for (r = 0; r < n.length; r += 1) {
					const h = I(t, n, r)
					s[r] ? s[r].p(h, u) : ((s[r] = $(h)), s[r].c(), s[r].m(e, null))
				}
				for (; r < s.length; r += 1) s[r].d(1)
				s.length = n.length
			}
		},
		i: y,
		o: y,
		d(t) {
			t && m(e), w(s, t)
		},
	}
}
function te(i, e, c) {
	let { collectionType: o } = e,
		{ collection: a } = e
	return (
		(i.$$set = (l) => {
			'collectionType' in l && c(0, (o = l.collectionType)),
				'collection' in l && c(1, (a = l.collection))
		}),
		[o, a]
	)
}
class le extends q {
	constructor(e) {
		super(), U(this, e, te, ee, O, { collectionType: 0, collection: 1 })
	}
}
function j(i, e, c) {
	const o = i.slice()
	return (o[1] = e[c][0]), (o[2] = e[c][1]), o
}
function x(i) {
	let e, c
	return (
		(e = new le({ props: { collectionType: i[1], collection: i[2] } })),
		{
			c() {
				V(e.$$.fragment)
			},
			l(o) {
				Q(e.$$.fragment, o)
			},
			m(o, a) {
				L(e, o, a), (c = !0)
			},
			p: y,
			i(o) {
				c || (v(e.$$.fragment, o), (c = !0))
			},
			o(o) {
				A(e.$$.fragment, o), (c = !1)
			},
			d(o) {
				K(e, o)
			},
		}
	)
}
function oe(i) {
	let e, c, o
	document.title = Z(B.Music)
	let a = E(Object.entries(i[0])),
		l = []
	for (let n = 0; n < a.length; n += 1) l[n] = x(j(i, a, n))
	const f = (n) =>
		A(l[n], 1, 1, () => {
			l[n] = null
		})
	return {
		c() {
			;(e = R()), (c = p('music-page'))
			for (let n = 0; n < l.length; n += 1) l[n].c()
			this.h()
		},
		l(n) {
			J('svelte-1dho5sh', document.head).forEach(m),
				(e = P(n)),
				(c = g(n, 'MUSIC-PAGE', { class: !0 }))
			var t = b(c)
			for (let u = 0; u < l.length; u += 1) l[u].l(t)
			t.forEach(m), this.h()
		},
		h() {
			F(c, 'class', 'w-full h-auto mt-[10vh] mb-[15vh] flex flex-col items-center')
		},
		m(n, s) {
			T(n, e, s), T(n, c, s)
			for (let t = 0; t < l.length; t += 1) l[t] && l[t].m(c, null)
			o = !0
		},
		p(n, [s]) {
			if (s & 1) {
				a = E(Object.entries(n[0]))
				let t
				for (t = 0; t < a.length; t += 1) {
					const u = j(n, a, t)
					l[t] ? (l[t].p(u, s), v(l[t], 1)) : ((l[t] = x(u)), l[t].c(), v(l[t], 1), l[t].m(c, null))
				}
				for (W(), t = a.length; t < l.length; t += 1) f(t)
				z()
			}
		},
		i(n) {
			if (!o) {
				for (let s = 0; s < a.length; s += 1) v(l[s])
				o = !0
			}
		},
		o(n) {
			l = l.filter(Boolean)
			for (let s = 0; s < l.length; s += 1) A(l[s])
			o = !1
		},
		d(n) {
			n && (m(e), m(c)), w(l, n)
		},
	}
}
function ce(i) {
	const { collections: e } = Y
	return (
		D(() => {
			X(B.Music)
		}),
		[e]
	)
}
class fe extends q {
	constructor(e) {
		super(), U(this, e, ce, oe, O, {})
	}
}
export { fe as component }
