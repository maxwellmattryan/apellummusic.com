import { s as $, n as w } from './D4f8t5KQ.js'
import {
	S as z,
	i as D,
	d as m,
	C as q,
	b as S,
	z as _,
	n as p,
	p as d,
	q as x,
	x as H,
	e as A,
	r as C,
	s as T,
	v,
	w as g,
} from './DpX7TR1M.js'
import { e as k } from './D6YF6ztN.js'
import { a as E, C as j } from './C7nbUKwt.js'
function y(c, t, o) {
	const h = c.slice()
	return (h[1] = t[o].name), (h[2] = t[o].url), (h[3] = t[o].username), h
}
function N(c, t, o) {
	const h = c.slice()
	return (h[1] = t[o].name), (h[2] = t[o].url), h
}
function O(c) {
	let t,
		o = c[1] + '',
		h,
		u,
		s,
		f = c[2] + '',
		n
	return {
		c() {
			;(t = C('p')), (h = g(o)), (u = g(': ')), (s = C('a')), (n = g(f)), this.h()
		},
		l(i) {
			t = d(i, 'P', { class: !0 })
			var a = x(t)
			;(h = v(a, o)), (u = v(a, ': ')), (s = d(a, 'A', { class: !0, href: !0, 'aria-label': !0 }))
			var l = x(s)
			;(n = v(l, f)), l.forEach(m), a.forEach(m), this.h()
		},
		h() {
			p(s, 'class', 'contact-link svelte-16xw5p0'),
				p(s, 'href', 'mailto:' + c[2]),
				p(s, 'aria-label', c[1]),
				p(t, 'class', 'svelte-16xw5p0')
		},
		m(i, a) {
			S(i, t, a), _(t, h), _(t, u), _(t, s), _(s, n)
		},
		p: w,
		d(i) {
			i && m(t)
		},
	}
}
function P(c) {
	let t,
		o = c[1] + '',
		h,
		u,
		s,
		f,
		n = c[3] + '',
		i,
		a
	return {
		c() {
			;(t = C('p')),
				(h = g(o)),
				(u = g(': ')),
				(s = C('a')),
				(f = g('@')),
				(i = g(n)),
				(a = T()),
				this.h()
		},
		l(l) {
			t = d(l, 'P', { class: !0 })
			var r = x(t)
			;(h = v(r, o)),
				(u = v(r, ': ')),
				(s = d(r, 'A', { class: !0, href: !0, target: !0, 'aria-label': !0 }))
			var e = x(s)
			;(f = v(e, '@')), (i = v(e, n)), e.forEach(m), (a = A(r)), r.forEach(m), this.h()
		},
		h() {
			p(s, 'class', 'contact-link svelte-16xw5p0'),
				p(s, 'href', c[2]),
				p(s, 'target', '_blank'),
				p(s, 'aria-label', c[1]),
				p(t, 'class', 'svelte-16xw5p0')
		},
		m(l, r) {
			S(l, t, r), _(t, h), _(t, u), _(t, s), _(s, f), _(s, i), _(t, a)
		},
		p: w,
		d(l) {
			l && m(t)
		},
	}
}
function B(c) {
	let t,
		o,
		h = 'Contact',
		u,
		s,
		f = k(c[0][E.Email]),
		n = []
	for (let l = 0; l < f.length; l += 1) n[l] = O(N(c, f, l))
	let i = k(c[0][E.Social]),
		a = []
	for (let l = 0; l < i.length; l += 1) a[l] = P(y(c, i, l))
	return {
		c() {
			;(t = C('contact')), (o = C('h3')), (o.textContent = h), (u = T())
			for (let l = 0; l < n.length; l += 1) n[l].c()
			s = T()
			for (let l = 0; l < a.length; l += 1) a[l].c()
			this.h()
		},
		l(l) {
			t = d(l, 'CONTACT', { class: !0 })
			var r = x(t)
			;(o = d(r, 'H3', { class: !0, 'data-svelte-h': !0 })),
				H(o) !== 'svelte-1e5ovvx' && (o.textContent = h),
				(u = A(r))
			for (let e = 0; e < n.length; e += 1) n[e].l(r)
			s = A(r)
			for (let e = 0; e < a.length; e += 1) a[e].l(r)
			r.forEach(m), this.h()
		},
		h() {
			p(o, 'class', 'mb-[4vh]'), p(t, 'class', 'contact-section text-left svelte-16xw5p0')
		},
		m(l, r) {
			S(l, t, r), _(t, o), _(t, u)
			for (let e = 0; e < n.length; e += 1) n[e] && n[e].m(t, null)
			_(t, s)
			for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, null)
		},
		p(l, [r]) {
			if (r & 1) {
				f = k(l[0][E.Email])
				let e
				for (e = 0; e < f.length; e += 1) {
					const b = N(l, f, e)
					n[e] ? n[e].p(b, r) : ((n[e] = O(b)), n[e].c(), n[e].m(t, s))
				}
				for (; e < n.length; e += 1) n[e].d(1)
				n.length = f.length
			}
			if (r & 1) {
				i = k(l[0][E.Social])
				let e
				for (e = 0; e < i.length; e += 1) {
					const b = y(l, i, e)
					a[e] ? a[e].p(b, r) : ((a[e] = P(b)), a[e].c(), a[e].m(t, null))
				}
				for (; e < a.length; e += 1) a[e].d(1)
				a.length = i.length
			}
		},
		i: w,
		o: w,
		d(l) {
			l && m(t), q(n, l), q(a, l)
		},
	}
}
function F(c) {
	const { contacts: t } = j
	return [t]
}
class L extends z {
	constructor(t) {
		super(), D(this, t, F, B, $, {})
	}
}
export { L as C }
