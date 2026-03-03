import {
	s as U,
	b as z,
	e as Te,
	u as we,
	g as ye,
	f as Ce,
	h as W,
	n as V,
	o as Ie,
} from '../chunks/D4f8t5KQ.js'
import {
	S as H,
	i as q,
	d as m,
	t as x,
	a as I,
	g as Z,
	c as ee,
	b as y,
	y as S,
	p as v,
	q as T,
	r as $,
	j as L,
	n as E,
	m as M,
	A as te,
	l as B,
	e as O,
	f as J,
	k as K,
	s as P,
	u as le,
	z as k,
	v as A,
	w as R,
	C as F,
	o as ne,
	B as Q,
	E as Oe,
	x as Pe,
} from '../chunks/DpX7TR1M.js'
import { b as X } from '../chunks/DUZvNpQf.js'
import { b as G, M as Y, A as Ee, s as xe, E as De } from '../chunks/BnkzR3UQ.js'
import { I as ve, h as Se } from '../chunks/Dr2d7BnT.js'
import { I as $e } from '../chunks/C7nbUKwt.js'
import { g as je } from '../chunks/9ZC-oahI.js'
import { C as Le } from '../chunks/-MzZbKmP.js'
import { e as N } from '../chunks/D6YF6ztN.js'
import { g as Me } from '../chunks/ZwL_c45G.js'
function Be(o) {
	return o.filter((e) => !e.hidden)
}
function Ke(o) {
	const e = {}
	for (const [s, t] of Object.entries(o)) e[s] = Be(t)
	return e
}
function Ne(o) {
	switch (o) {
		case G.Long:
			return 'Long'
		case G.Short:
			return 'Short'
		case G.OneLine:
			return 'One-line'
		default:
			return ''
	}
}
function ie(o) {
	let e, s, t, l, i, n, a
	s = new ve({ props: { icon: o[0] } })
	let r = o[1] && re(o)
	return {
		c() {
			;(e = $('button')), K(s.$$.fragment), (t = P()), r && r.c(), (l = J()), this.h()
		},
		l(_) {
			e = v(_, 'BUTTON', { type: !0, alt: !0, 'aria-label': !0, class: !0 })
			var f = T(e)
			B(s.$$.fragment, f), f.forEach(m), (t = O(_)), r && r.l(_), (l = J()), this.h()
		},
		h() {
			E(e, 'type', 'button'),
				E(e, 'alt', o[0]),
				E(e, 'aria-label', o[0]),
				E(e, 'class', 'svelte-16tc6xk')
		},
		m(_, f) {
			y(_, e, f),
				M(s, e, null),
				y(_, t, f),
				r && r.m(_, f),
				y(_, l, f),
				(i = !0),
				n || ((a = te(e, 'click', o[3])), (n = !0))
		},
		p(_, f) {
			const h = {}
			f & 1 && (h.icon = _[0]),
				s.$set(h),
				(!i || f & 1) && E(e, 'alt', _[0]),
				(!i || f & 1) && E(e, 'aria-label', _[0]),
				_[1]
					? r
						? r.p(_, f)
						: ((r = re(_)), r.c(), r.m(l.parentNode, l))
					: r && (r.d(1), (r = null))
		},
		i(_) {
			i || (I(s.$$.fragment, _), (i = !0))
		},
		o(_) {
			x(s.$$.fragment, _), (i = !1)
		},
		d(_) {
			_ && (m(e), m(t), m(l)), L(s), r && r.d(_), (n = !1), a()
		},
	}
}
function re(o) {
	let e, s, t
	return {
		c() {
			;(e = $('tooltip')), (s = $('p')), (t = R(o[1])), this.h()
		},
		l(l) {
			e = v(l, 'TOOLTIP', { class: !0 })
			var i = T(e)
			s = v(i, 'P', { class: !0 })
			var n = T(s)
			;(t = A(n, o[1])), n.forEach(m), i.forEach(m), this.h()
		},
		h() {
			E(s, 'class', 'inline-block text-indigo-50 opacity-60 font-medium svelte-16tc6xk'),
				E(e, 'class', 'absolute opacity-0 transition-opacity svelte-16tc6xk')
		},
		m(l, i) {
			y(l, e, i), k(e, s), k(s, t), o[5](e)
		},
		p(l, i) {
			i & 2 && le(t, l[1])
		},
		d(l) {
			l && m(e), o[5](null)
		},
	}
}
function Ae(o) {
	let e,
		s,
		t = o[0] && ie(o)
	return {
		c() {
			;(e = $('icon-button')), t && t.c(), this.h()
		},
		l(l) {
			e = v(l, 'ICON-BUTTON', { class: !0 })
			var i = T(e)
			t && t.l(i), i.forEach(m), this.h()
		},
		h() {
			S(e, 'class', 'flex flex-row-reverse md:flex-row items-center')
		},
		m(l, i) {
			y(l, e, i), t && t.m(e, null), (s = !0)
		},
		p(l, [i]) {
			l[0]
				? t
					? (t.p(l, i), i & 1 && I(t, 1))
					: ((t = ie(l)), t.c(), I(t, 1), t.m(e, null))
				: t &&
				  (Z(),
				  x(t, 1, 1, () => {
						t = null
				  }),
				  ee())
		},
		i(l) {
			s || (I(t), (s = !0))
		},
		o(l) {
			x(t), (s = !1)
		},
		d(l) {
			l && m(e), t && t.d()
		},
	}
}
const Re = 1500
function Ue(o, e, s) {
	let { icon: t = void 0 } = e,
		{ tooltipText: l = '' } = e,
		{ onClick: i = () => {} } = e,
		n
	function a() {
		i &&
			(i(),
			n.classList.replace('opacity-0', 'opacity-100'),
			setTimeout(() => {
				n.classList.replace('opacity-100', 'opacity-0')
			}, Re))
	}
	function r(_) {
		z[_ ? 'unshift' : 'push'](() => {
			;(n = _), s(2, n)
		})
	}
	return (
		(o.$$set = (_) => {
			'icon' in _ && s(0, (t = _.icon)),
				'tooltipText' in _ && s(1, (l = _.tooltipText)),
				'onClick' in _ && s(4, (i = _.onClick))
		}),
		[t, l, n, a, i, r]
	)
}
class He extends H {
	constructor(e) {
		super(), q(this, e, Ue, Ae, U, { icon: 0, tooltipText: 1, onClick: 4 })
	}
}
function qe(o) {
	let e, s, t, l, i, n, a, r
	const _ = o[3].default,
		f = Te(_, o, o[2], null)
	return {
		c() {
			;(e = $('epk-section')),
				(s = $('epk-bio-section-header')),
				(t = $('h3')),
				(l = R(o[0])),
				(i = P()),
				(n = $('epk-bio-section-content')),
				f && f.c(),
				this.h()
		},
		l(h) {
			e = v(h, 'EPK-SECTION', { class: !0 })
			var p = T(e)
			s = v(p, 'EPK-BIO-SECTION-HEADER', { class: !0 })
			var b = T(s)
			t = v(b, 'H3', {})
			var d = T(t)
			;(l = A(d, o[0])),
				d.forEach(m),
				b.forEach(m),
				(i = O(p)),
				(n = v(p, 'EPK-BIO-SECTION-CONTENT', { class: !0 }))
			var g = T(n)
			f && f.l(g), g.forEach(m), p.forEach(m), this.h()
		},
		h() {
			S(s, 'class', 'mb-[4vh]'),
				S(
					n,
					'class',
					(a =
						'w-full h-full flex flex-col-reverse ' +
						(o[1] ? 'md:flex-row' : 'md:flex-row-reverse') +
						' justify-center items-center md:items-start md:px-[4vw] gap-8'),
				),
				S(e, 'class', 'epk-section w-full h-auto flex flex-col')
		},
		m(h, p) {
			y(h, e, p), k(e, s), k(s, t), k(t, l), k(e, i), k(e, n), f && f.m(n, null), (r = !0)
		},
		p(h, [p]) {
			;(!r || p & 1) && le(l, h[0]),
				f && f.p && (!r || p & 4) && we(f, _, h, h[2], r ? Ce(_, h[2], p, null) : ye(h[2]), null),
				(!r ||
					(p & 2 &&
						a !==
							(a =
								'w-full h-full flex flex-col-reverse ' +
								(h[1] ? 'md:flex-row' : 'md:flex-row-reverse') +
								' justify-center items-center md:items-start md:px-[4vw] gap-8'))) &&
					S(n, 'class', a)
		},
		i(h) {
			r || (I(f, h), (r = !0))
		},
		o(h) {
			x(f, h), (r = !1)
		},
		d(h) {
			h && m(e), f && f.d(h)
		},
	}
}
function Ge(o, e, s) {
	let { $$slots: t = {}, $$scope: l } = e,
		{ title: i = '' } = e,
		{ justifyLeft: n = !0 } = e
	return (
		(o.$$set = (a) => {
			'title' in a && s(0, (i = a.title)),
				'justifyLeft' in a && s(1, (n = a.justifyLeft)),
				'$$scope' in a && s(2, (l = a.$$scope))
		}),
		[i, n, l, t]
	)
}
class se extends H {
	constructor(e) {
		super(), q(this, e, Ge, qe, U, { title: 0, justifyLeft: 1 })
	}
}
function ce(o, e, s) {
	const t = o.slice()
	return (t[15] = e[s]), t
}
function ae(o, e, s) {
	const t = o.slice()
	t[18] = e[s]
	const l = t[18] === t[2]
	return (t[19] = l), t
}
function fe(o) {
	let e,
		s,
		t = Ne(o[18]) + '',
		l,
		i,
		n,
		a,
		r
	function _() {
		return o[12](o[18])
	}
	return {
		c() {
			;(e = $('epk-bio-selector-item')), (s = $('button')), (l = R(t)), (n = P()), this.h()
		},
		l(f) {
			e = v(f, 'EPK-BIO-SELECTOR-ITEM', { class: !0 })
			var h = T(e)
			s = v(h, 'BUTTON', { type: !0, class: !0 })
			var p = T(s)
			;(l = A(p, t)), p.forEach(m), (n = O(h)), h.forEach(m), this.h()
		},
		h() {
			E(s, 'type', 'button'),
				E(
					s,
					'class',
					(i =
						(o[19] ? 'border-b-2 border-solid border-[#ef2e5e]' : '') +
						' text-indigo-50 font-medium'),
				),
				S(e, 'class', 'svelte-12lmixh'),
				Q(e, 'selected', o[19])
		},
		m(f, h) {
			y(f, e, h), k(e, s), k(s, l), k(e, n), a || ((r = te(s, 'click', _)), (a = !0))
		},
		p(f, h) {
			;(o = f),
				h & 4 &&
					i !==
						(i =
							(o[19] ? 'border-b-2 border-solid border-[#ef2e5e]' : '') +
							' text-indigo-50 font-medium') &&
					E(s, 'class', i),
				h & 68 && Q(e, 'selected', o[19])
		},
		d(f) {
			f && m(e), (a = !1), r()
		},
	}
}
function ue(o) {
	let e,
		s = o[15] + '',
		t
	return {
		c() {
			;(e = $('p')), (t = R(s)), this.h()
		},
		l(l) {
			e = v(l, 'P', { class: !0 })
			var i = T(e)
			;(t = A(i, s)), i.forEach(m), this.h()
		},
		h() {
			E(e, 'class', 'svelte-12lmixh')
		},
		m(l, i) {
			y(l, e, i), k(e, t)
		},
		p(l, i) {
			i & 4 && s !== (s = l[15] + '') && le(t, s)
		},
		d(l) {
			l && m(e)
		},
	}
}
function Ve(o) {
	let e,
		s,
		t,
		l,
		i,
		n,
		a,
		r,
		_,
		f,
		h,
		p = N(Object.values(G).filter(o[11])),
		b = []
	for (let u = 0; u < p.length; u += 1) b[u] = fe(ae(o, p, u))
	r = new He({ props: { icon: $e.Copy, tooltipText: 'Copied!', onClick: o[8] } })
	let d = N(o[6][o[2]].text),
		g = []
	for (let u = 0; u < d.length; u += 1) g[u] = ue(ce(o, d, u))
	return {
		c() {
			;(e = $('img')),
				(t = P()),
				(l = $('epk-bios')),
				(i = $('epk-bios-header')),
				(n = $('epk-bio-selector'))
			for (let u = 0; u < b.length; u += 1) b[u].c()
			;(a = P()), K(r.$$.fragment), (_ = P()), (f = $('epk-selected-bio'))
			for (let u = 0; u < g.length; u += 1) g[u].c()
			this.h()
		},
		l(u) {
			;(e = v(u, 'IMG', { class: !0, src: !0, alt: !0 })),
				(t = O(u)),
				(l = v(u, 'EPK-BIOS', { class: !0 }))
			var w = T(l)
			i = v(w, 'EPK-BIOS-HEADER', { class: !0 })
			var c = T(i)
			n = v(c, 'EPK-BIO-SELECTOR', { class: !0 })
			var C = T(n)
			for (let j = 0; j < b.length; j += 1) b[j].l(C)
			C.forEach(m),
				(a = O(c)),
				B(r.$$.fragment, c),
				c.forEach(m),
				(_ = O(w)),
				(f = v(w, 'EPK-SELECTED-BIO', { style: !0, class: !0 }))
			var D = T(f)
			for (let j = 0; j < g.length; j += 1) g[j].l(D)
			D.forEach(m), w.forEach(m), this.h()
		},
		h() {
			E(e, 'class', 'w-full md:w-1/2 max-h-[640px] object-contain'),
				W(e.src, (s = X + '/images/' + o[5])) || E(e, 'src', s),
				E(e, 'alt', 'EPK biography'),
				S(n, 'class', 'flex flex-row items-center mb-4'),
				S(i, 'class', 'flex flex-row justify-between items-start svelte-12lmixh'),
				ne(f, '--bio-height', o[4]),
				S(f, 'class', 'overflow-y-auto svelte-12lmixh'),
				S(l, 'class', 'w-full flex flex-col justify-center')
		},
		m(u, w) {
			y(u, e, w), o[10](e), y(u, t, w), y(u, l, w), k(l, i), k(i, n)
			for (let c = 0; c < b.length; c += 1) b[c] && b[c].m(n, null)
			k(i, a), M(r, i, null), o[13](i), k(l, _), k(l, f)
			for (let c = 0; c < g.length; c += 1) g[c] && g[c].m(f, null)
			o[14](f), (h = !0)
		},
		p(u, w) {
			if (w & 196) {
				p = N(Object.values(G).filter(u[11]))
				let c
				for (c = 0; c < p.length; c += 1) {
					const C = ae(u, p, c)
					b[c] ? b[c].p(C, w) : ((b[c] = fe(C)), b[c].c(), b[c].m(n, null))
				}
				for (; c < b.length; c += 1) b[c].d(1)
				b.length = p.length
			}
			if (w & 68) {
				d = N(u[6][u[2]].text)
				let c
				for (c = 0; c < d.length; c += 1) {
					const C = ce(u, d, c)
					g[c] ? g[c].p(C, w) : ((g[c] = ue(C)), g[c].c(), g[c].m(f, null))
				}
				for (; c < g.length; c += 1) g[c].d(1)
				g.length = d.length
			}
			;(!h || w & 16) && ne(f, '--bio-height', u[4])
		},
		i(u) {
			h || (I(r.$$.fragment, u), (h = !0))
		},
		o(u) {
			x(r.$$.fragment, u), (h = !1)
		},
		d(u) {
			u && (m(e), m(t), m(l)), o[10](null), F(b, u), L(r), o[13](null), F(g, u), o[14](null)
		},
	}
}
function Fe(o) {
	let e, s
	return (
		(e = new se({
			props: { title: 'Biographies', $$slots: { default: [Ve] }, $$scope: { ctx: o } },
		})),
		{
			c() {
				K(e.$$.fragment)
			},
			l(t) {
				B(e.$$.fragment, t)
			},
			m(t, l) {
				M(e, t, l), (s = !0)
			},
			p(t, [l]) {
				const i = {}
				l & 4194335 && (i.$$scope = { dirty: l, ctx: t }), e.$set(i)
			},
			i(t) {
				s || (I(e.$$.fragment, t), (s = !0))
			},
			o(t) {
				x(e.$$.fragment, t), (s = !1)
			},
			d(t) {
				L(e, t)
			},
		}
	)
}
function ze(o, e, s) {
	let t,
		{ biographyData: l } = e
	const { image: i, biographies: n } = l ?? {}
	let a = G.Short
	function r(c) {
		s(2, (a = c))
	}
	let _, f, h
	function p() {
		if (h) {
			const c = h.textContent ?? ''
			navigator && navigator.clipboard.writeText(c)
		}
	}
	function b(c) {
		z[c ? 'unshift' : 'push'](() => {
			;(_ = c), s(0, _)
		})
	}
	const d = (c) => c in n,
		g = (c) => r(c)
	function u(c) {
		z[c ? 'unshift' : 'push'](() => {
			;(f = c), s(1, f)
		})
	}
	function w(c) {
		z[c ? 'unshift' : 'push'](() => {
			;(h = c), s(3, h)
		})
	}
	return (
		(o.$$set = (c) => {
			'biographyData' in c && s(9, (l = c.biographyData))
		}),
		(o.$$.update = () => {
			o.$$.dirty & 3 && s(4, (t = _ && f ? `${_.offsetHeight - f.offsetHeight}px` : 'auto'))
		}),
		[_, f, a, h, t, i, n, r, p, l, b, d, g, u, w]
	)
}
class Je extends H {
	constructor(e) {
		super(), q(this, e, ze, Fe, U, { biographyData: 9 })
	}
}
function _e(o) {
	const e = o.slice(),
		s = e[4].toISOString().split('T')[0].replaceAll('-', '.') ?? ''
	return (e[6] = s), e
}
function Qe(o) {
	let e,
		s = o[6] + '',
		t
	return {
		c() {
			;(e = $('p')), (t = R(s)), this.h()
		},
		l(l) {
			e = v(l, 'P', { class: !0 })
			var i = T(e)
			;(t = A(i, s)), i.forEach(m), this.h()
		},
		h() {
			E(e, 'class', 'date text-indigo-50 opacity-60 svelte-vpoxhj')
		},
		m(l, i) {
			y(l, e, i), k(e, t)
		},
		p: V,
		d(l) {
			l && m(e)
		},
	}
}
function We(o) {
	let e,
		s,
		t,
		l,
		i,
		n,
		a,
		r,
		_,
		f,
		h,
		p,
		b,
		d = o[4] && Qe(_e(o))
	return {
		c() {
			;(e = $('epk-music-card')),
				(s = $('a')),
				(t = $('img')),
				(i = P()),
				(n = $('div')),
				(a = $('div')),
				(r = $('p')),
				(_ = R(o[2])),
				(f = P()),
				d && d.c(),
				(h = P()),
				(p = $('p')),
				(b = R(o[3])),
				this.h()
		},
		l(g) {
			e = v(g, 'EPK-MUSIC-CARD', {})
			var u = T(e)
			s = v(u, 'A', { href: !0, target: !0, class: !0, 'aria-label': !0 })
			var w = T(s)
			;(t = v(w, 'IMG', { src: !0, alt: !0, class: !0 })),
				(i = O(w)),
				(n = v(w, 'DIV', { class: !0 }))
			var c = T(n)
			a = v(c, 'DIV', {})
			var C = T(a)
			r = v(C, 'P', { class: !0 })
			var D = T(r)
			;(_ = A(D, o[2])),
				D.forEach(m),
				(f = O(C)),
				d && d.l(C),
				C.forEach(m),
				(h = O(c)),
				(p = v(c, 'P', { class: !0 }))
			var j = T(p)
			;(b = A(j, o[3])), j.forEach(m), c.forEach(m), w.forEach(m), u.forEach(m), this.h()
		},
		h() {
			W(t.src, (l = X + '/images/' + o[0] + '.jpg')) || E(t, 'src', l),
				E(t, 'alt', o[0]),
				E(
					t,
					'class',
					'rounded-lg aspect-square max-w-[108px] max-h-[108px] md:max-w-[128px] md:max-h-[128px]',
				),
				E(r, 'class', 'title font-semibold svelte-vpoxhj'),
				E(p, 'class', 'description font-medium text-indigo-50 opacity-60 svelte-vpoxhj'),
				E(n, 'class', 'flex flex-col justify-around mx-4'),
				E(s, 'href', o[1][0].url ?? ''),
				E(s, 'target', '_blank'),
				E(
					s,
					'class',
					'w-full h-auto p-4 flex flex-row items-center bg-indigo-950 rounded-lg svelte-vpoxhj',
				),
				E(s, 'aria-label', o[2])
		},
		m(g, u) {
			y(g, e, u),
				k(e, s),
				k(s, t),
				k(s, i),
				k(s, n),
				k(n, a),
				k(a, r),
				k(r, _),
				k(a, f),
				d && d.m(a, null),
				k(n, h),
				k(n, p),
				k(p, b)
		},
		p(g, [u]) {
			g[4] && d.p(_e(g), u)
		},
		i: V,
		o: V,
		d(g) {
			g && m(e), d && d.d()
		},
	}
}
function Xe(o, e, s) {
	let { musicItem: t } = e
	const { image: l, urls: i, title: n, description: a, date: r } = t ?? {}
	return (
		(o.$$set = (_) => {
			'musicItem' in _ && s(5, (t = _.musicItem))
		}),
		[l, i, n, a, r, t]
	)
}
class Ye extends H {
	constructor(e) {
		super(), q(this, e, Xe, We, U, { musicItem: 5 })
	}
}
function he(o, e, s) {
	const t = o.slice()
	return (t[7] = e[s]), t
}
function me(o, e, s) {
	const t = o.slice()
	t[10] = e[s]
	const l = t[10] === t[0]
	return (t[11] = l), t
}
function pe(o) {
	let e,
		s,
		t = Me(o[10]) + '',
		l,
		i,
		n,
		a,
		r
	function _() {
		return o[5](o[10])
	}
	return {
		c() {
			;(e = $('epk-music-collection-selector-item')),
				(s = $('button')),
				(l = R(t)),
				(n = P()),
				this.h()
		},
		l(f) {
			e = v(f, 'EPK-MUSIC-COLLECTION-SELECTOR-ITEM', { class: !0 })
			var h = T(e)
			s = v(h, 'BUTTON', { type: !0, class: !0 })
			var p = T(s)
			;(l = A(p, t)), p.forEach(m), (n = O(h)), h.forEach(m), this.h()
		},
		h() {
			E(s, 'type', 'button'),
				E(
					s,
					'class',
					(i =
						(o[11] ? 'border-b-2 border-solid border-[#4c5adb]' : '') +
						' font-medium text-indigo-50'),
				),
				S(e, 'class', 'svelte-1l662ga'),
				Q(e, 'selected', o[11])
		},
		m(f, h) {
			y(f, e, h), k(e, s), k(s, l), k(e, n), a || ((r = te(s, 'click', _)), (a = !0))
		},
		p(f, h) {
			;(o = f),
				h & 1 &&
					i !==
						(i =
							(o[11] ? 'border-b-2 border-solid border-[#4c5adb]' : '') +
							' font-medium text-indigo-50') &&
					E(s, 'class', i),
				h & 1 && Q(e, 'selected', o[11])
		},
		d(f) {
			f && m(e), (a = !1), r()
		},
	}
}
function de(o) {
	let e, s, t, l
	return (
		(s = new Ye({ props: { musicItem: o[7] } })),
		{
			c() {
				;(e = $('div')), K(s.$$.fragment), (t = P()), this.h()
			},
			l(i) {
				e = v(i, 'DIV', { class: !0 })
				var n = T(e)
				B(s.$$.fragment, n), (t = O(n)), n.forEach(m), this.h()
			},
			h() {
				E(e, 'class', 'epk-music-collection-item svelte-1l662ga')
			},
			m(i, n) {
				y(i, e, n), M(s, e, null), k(e, t), (l = !0)
			},
			p(i, n) {
				const a = {}
				n & 1 && (a.musicItem = i[7]), s.$set(a)
			},
			i(i) {
				l || (I(s.$$.fragment, i), (l = !0))
			},
			o(i) {
				x(s.$$.fragment, i), (l = !1)
			},
			d(i) {
				i && m(e), L(s)
			},
		}
	)
}
function ge(o) {
	let e,
		s,
		t = N(o[2][o[0]]),
		l = []
	for (let n = 0; n < t.length; n += 1) l[n] = de(he(o, t, n))
	const i = (n) =>
		x(l[n], 1, 1, () => {
			l[n] = null
		})
	return {
		c() {
			for (let n = 0; n < l.length; n += 1) l[n].c()
			e = J()
		},
		l(n) {
			for (let a = 0; a < l.length; a += 1) l[a].l(n)
			e = J()
		},
		m(n, a) {
			for (let r = 0; r < l.length; r += 1) l[r] && l[r].m(n, a)
			y(n, e, a), (s = !0)
		},
		p(n, a) {
			if (a & 5) {
				t = N(n[2][n[0]])
				let r
				for (r = 0; r < t.length; r += 1) {
					const _ = he(n, t, r)
					l[r]
						? (l[r].p(_, a), I(l[r], 1))
						: ((l[r] = de(_)), l[r].c(), I(l[r], 1), l[r].m(e.parentNode, e))
				}
				for (Z(), r = t.length; r < l.length; r += 1) i(r)
				ee()
			}
		},
		i(n) {
			if (!s) {
				for (let a = 0; a < t.length; a += 1) I(l[a])
				s = !0
			}
		},
		o(n) {
			l = l.filter(Boolean)
			for (let a = 0; a < l.length; a += 1) x(l[a])
			s = !1
		},
		d(n) {
			n && m(e), F(l, n)
		},
	}
}
function Ze(o) {
	let e,
		s,
		t,
		l,
		i,
		n,
		a,
		r,
		_ = o[0],
		f,
		h = N(Object.values(Y)),
		p = []
	for (let d = 0; d < h.length; d += 1) p[d] = pe(me(o, h, d))
	let b = ge(o)
	return {
		c() {
			;(e = $('img')),
				(t = P()),
				(l = $('epk-music')),
				(i = $('epk-music-header')),
				(n = $('epk-music-collection-selector'))
			for (let d = 0; d < p.length; d += 1) p[d].c()
			;(a = P()), (r = $('epk-selected-music-collection')), b.c(), this.h()
		},
		l(d) {
			;(e = v(d, 'IMG', { class: !0, src: !0, alt: !0 })),
				(t = O(d)),
				(l = v(d, 'EPK-MUSIC', { class: !0 }))
			var g = T(l)
			i = v(g, 'EPK-MUSIC-HEADER', { class: !0 })
			var u = T(i)
			n = v(u, 'EPK-MUSIC-COLLECTION-SELECTOR', { class: !0 })
			var w = T(n)
			for (let C = 0; C < p.length; C += 1) p[C].l(w)
			w.forEach(m),
				u.forEach(m),
				(a = O(g)),
				(r = v(g, 'EPK-SELECTED-MUSIC-COLLECTION', { class: !0 }))
			var c = T(r)
			b.l(c), c.forEach(m), g.forEach(m), this.h()
		},
		h() {
			E(e, 'class', 'w-full md:w-1/2 max-h-[640px] object-contain'),
				W(e.src, (s = X + '/images/' + o[1])) || E(e, 'src', s),
				E(e, 'alt', 'EPK music'),
				S(n, 'class', 'flex flex-row items-center mb-4'),
				S(i, 'class', 'flex flex-row justify-between items-start'),
				S(r, 'class', 'space-y-4'),
				S(l, 'class', 'w-full h-full flex flex-col')
		},
		m(d, g) {
			y(d, e, g), y(d, t, g), y(d, l, g), k(l, i), k(i, n)
			for (let u = 0; u < p.length; u += 1) p[u] && p[u].m(n, null)
			k(l, a), k(l, r), b.m(r, null), (f = !0)
		},
		p(d, g) {
			if (g & 9) {
				h = N(Object.values(Y))
				let u
				for (u = 0; u < h.length; u += 1) {
					const w = me(d, h, u)
					p[u] ? p[u].p(w, g) : ((p[u] = pe(w)), p[u].c(), p[u].m(n, null))
				}
				for (; u < p.length; u += 1) p[u].d(1)
				p.length = h.length
			}
			g & 1 && U(_, (_ = d[0]))
				? (Z(), x(b, 1, 1, V), ee(), (b = ge(d)), b.c(), I(b, 1), b.m(r, null))
				: b.p(d, g)
		},
		i(d) {
			f || (I(b), (f = !0))
		},
		o(d) {
			x(b), (f = !1)
		},
		d(d) {
			d && (m(e), m(t), m(l)), F(p, d), b.d(d)
		},
	}
}
function et(o) {
	let e, s
	return (
		(e = new se({
			props: { title: 'Music', justifyLeft: !1, $$slots: { default: [Ze] }, $$scope: { ctx: o } },
		})),
		{
			c() {
				K(e.$$.fragment)
			},
			l(t) {
				B(e.$$.fragment, t)
			},
			m(t, l) {
				M(e, t, l), (s = !0)
			},
			p(t, [l]) {
				const i = {}
				l & 16385 && (i.$$scope = { dirty: l, ctx: t }), e.$set(i)
			},
			i(t) {
				s || (I(e.$$.fragment, t), (s = !0))
			},
			o(t) {
				x(e.$$.fragment, t), (s = !1)
			},
			d(t) {
				L(e, t)
			},
		}
	)
}
function tt(o, e, s) {
	let { musicData: t } = e
	const { image: l, collections: i } = t,
		n = Ke(i)
	let a = Y.Original
	function r(f) {
		s(0, (a = f))
	}
	const _ = (f) => r(f)
	return (
		(o.$$set = (f) => {
			'musicData' in f && s(4, (t = f.musicData))
		}),
		[a, l, n, r, t, _]
	)
}
class lt extends H {
	constructor(e) {
		super(), q(this, e, tt, et, U, { musicData: 4 })
	}
}
function be(o, e, s) {
	const t = o.slice()
	return (t[2] = e[s]), (t[4] = s), t
}
function ke(o) {
	let e, s
	return {
		c() {
			;(e = $('img')), this.h()
		},
		l(t) {
			;(e = v(t, 'IMG', { class: !0, src: !0, alt: !0 })), this.h()
		},
		h() {
			E(e, 'class', 'w-full md:w-1/3 max-h-[640px] object-contain'),
				W(e.src, (s = X + '/images/' + o[2])) || E(e, 'src', s),
				E(e, 'alt', 'EPK press ' + (o[4] + 1))
		},
		m(t, l) {
			y(t, e, l)
		},
		p: V,
		d(t) {
			t && m(e)
		},
	}
}
function st(o) {
	let e,
		s = N(o[0]),
		t = []
	for (let l = 0; l < s.length; l += 1) t[l] = ke(be(o, s, l))
	return {
		c() {
			e = $('div')
			for (let l = 0; l < t.length; l += 1) t[l].c()
			this.h()
		},
		l(l) {
			e = v(l, 'DIV', { class: !0 })
			var i = T(e)
			for (let n = 0; n < t.length; n += 1) t[n].l(i)
			i.forEach(m), this.h()
		},
		h() {
			E(e, 'class', 'flex flex-col md:flex-row items-center md:justify-center gap-8')
		},
		m(l, i) {
			y(l, e, i)
			for (let n = 0; n < t.length; n += 1) t[n] && t[n].m(e, null)
		},
		p(l, i) {
			if (i & 1) {
				s = N(l[0])
				let n
				for (n = 0; n < s.length; n += 1) {
					const a = be(l, s, n)
					t[n] ? t[n].p(a, i) : ((t[n] = ke(a)), t[n].c(), t[n].m(e, null))
				}
				for (; n < t.length; n += 1) t[n].d(1)
				t.length = s.length
			}
		},
		d(l) {
			l && m(e), F(t, l)
		},
	}
}
function ot(o) {
	let e, s
	return (
		(e = new se({ props: { title: 'Press', $$slots: { default: [st] }, $$scope: { ctx: o } } })),
		{
			c() {
				K(e.$$.fragment)
			},
			l(t) {
				B(e.$$.fragment, t)
			},
			m(t, l) {
				M(e, t, l), (s = !0)
			},
			p(t, [l]) {
				const i = {}
				l & 32 && (i.$$scope = { dirty: l, ctx: t }), e.$set(i)
			},
			i(t) {
				s || (I(e.$$.fragment, t), (s = !0))
			},
			o(t) {
				x(e.$$.fragment, t), (s = !1)
			},
			d(t) {
				L(e, t)
			},
		}
	)
}
function nt(o, e, s) {
	let { pressData: t } = e
	const { images: l } = t
	return (
		(o.$$set = (i) => {
			'pressData' in i && s(1, (t = i.pressData))
		}),
		[l, t]
	)
}
class it extends H {
	constructor(e) {
		super(), q(this, e, nt, ot, U, { pressData: 1 })
	}
}
function rt(o) {
	let e,
		s,
		t,
		l,
		i = 'Download (.zip)',
		n,
		a,
		r,
		_,
		f,
		h,
		p,
		b,
		d,
		g,
		u,
		w
	return (
		(document.title = je(Ee.Epk)),
		(a = new ve({ props: { icon: $e.Download } })),
		(_ = new Je({ props: { biographyData: o[1] } })),
		(h = new lt({ props: { musicData: o[2] } })),
		(b = new it({ props: { pressData: o[3] } })),
		(u = new Le({})),
		{
			c() {
				;(e = P()),
					(s = $('epk-page')),
					(t = $('a')),
					(l = $('p')),
					(l.textContent = i),
					(n = P()),
					K(a.$$.fragment),
					(r = P()),
					K(_.$$.fragment),
					(f = P()),
					K(h.$$.fragment),
					(p = P()),
					K(b.$$.fragment),
					(d = P()),
					(g = $('epk-section')),
					K(u.$$.fragment),
					this.h()
			},
			l(c) {
				Oe('svelte-1qqsql4', document.head).forEach(m),
					(e = O(c)),
					(s = v(c, 'EPK-PAGE', { class: !0 }))
				var D = T(s)
				t = v(D, 'A', { href: !0, target: !0, class: !0 })
				var j = T(t)
				;(l = v(j, 'P', { type: !0, class: !0, 'data-svelte-h': !0 })),
					Pe(l) !== 'svelte-1aeuuvy' && (l.textContent = i),
					(n = O(j)),
					B(a.$$.fragment, j),
					j.forEach(m),
					(r = O(D)),
					B(_.$$.fragment, D),
					(f = O(D)),
					B(h.$$.fragment, D),
					(p = O(D)),
					B(b.$$.fragment, D),
					(d = O(D)),
					(g = v(D, 'EPK-SECTION', {}))
				var oe = T(g)
				B(u.$$.fragment, oe), oe.forEach(m), D.forEach(m), this.h()
			},
			h() {
				E(l, 'type', 'button'),
					E(l, 'class', 'download'),
					E(t, 'href', o[0]),
					E(t, 'target', '_blank'),
					E(
						t,
						'class',
						'download-link invisible md:visible mt-2 md:mb-[10vh] flex flex-row justify-center items-center svelte-gunkgp',
					),
					S(s, 'class', 'w-full h-auto mb-[15vh] flex flex-col items-center')
			},
			m(c, C) {
				y(c, e, C),
					y(c, s, C),
					k(s, t),
					k(t, l),
					k(t, n),
					M(a, t, null),
					k(s, r),
					M(_, s, null),
					k(s, f),
					M(h, s, null),
					k(s, p),
					M(b, s, null),
					k(s, d),
					k(s, g),
					M(u, g, null),
					(w = !0)
			},
			p: V,
			i(c) {
				w ||
					(I(a.$$.fragment, c),
					I(_.$$.fragment, c),
					I(h.$$.fragment, c),
					I(b.$$.fragment, c),
					I(u.$$.fragment, c),
					(w = !0))
			},
			o(c) {
				x(a.$$.fragment, c),
					x(_.$$.fragment, c),
					x(h.$$.fragment, c),
					x(b.$$.fragment, c),
					x(u.$$.fragment, c),
					(w = !1)
			},
			d(c) {
				c && (m(e), m(s)), L(a), L(_), L(h), L(b), L(u)
			},
		}
	)
}
function ct(o) {
	const { downloadUrl: e, biographyData: s, musicData: t, pressData: l } = De
	return (
		Ie(() => {
			xe(Ee.Epk), Se.set(!0)
		}),
		[e, s, t, l]
	)
}
class kt extends H {
	constructor(e) {
		super(), q(this, e, ct, rt, U, {})
	}
}
export { kt as component }
