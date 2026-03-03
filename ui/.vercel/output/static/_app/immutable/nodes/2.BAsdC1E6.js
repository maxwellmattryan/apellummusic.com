import { s as O, n as C, h as R, c as J, o as S } from '../chunks/D4f8t5KQ.js'
import {
	S as k,
	i as z,
	d as r,
	n as m,
	b as I,
	z as s,
	y,
	o as F,
	E as L,
	e as b,
	p as h,
	q as g,
	x as U,
	v as V,
	s as E,
	r as u,
	w as B,
} from '../chunks/DpX7TR1M.js'
import { b as $ } from '../chunks/DUZvNpQf.js'
import { A as j, s as K } from '../chunks/BnkzR3UQ.js'
import { i as N } from '../chunks/B3052n2p.js'
import { g as Q } from '../chunks/9ZC-oahI.js'
function W(d) {
	let c,
		t,
		a,
		e,
		l,
		M,
		w,
		i,
		G = 'Apellum',
		A,
		n,
		H,
		v,
		q,
		p
	return (
		(document.title = Q(j.Home)),
		{
			c() {
				;(c = E()),
					(t = u('home-page')),
					(a = u('home-page-left')),
					(e = u('div')),
					(l = u('img')),
					(w = E()),
					(i = u('h1')),
					(i.textContent = G),
					(A = E()),
					(n = u('h2')),
					(H = B('Techno producer & DJ')),
					(q = E()),
					(p = u('home-page-right')),
					this.h()
			},
			l(o) {
				L('svelte-17xu8q7', document.head).forEach(r),
					(c = b(o)),
					(t = h(o, 'HOME-PAGE', { class: !0 }))
				var x = g(t)
				a = h(x, 'HOME-PAGE-LEFT', { class: !0 })
				var P = g(a)
				e = h(P, 'DIV', { class: !0 })
				var _ = g(e)
				;(l = h(_, 'IMG', { src: !0, alt: !0, class: !0 })),
					(w = b(_)),
					(i = h(_, 'H1', { class: !0, 'data-svelte-h': !0 })),
					U(i) !== 'svelte-1x2ludx' && (i.textContent = G),
					(A = b(_)),
					(n = h(_, 'H2', { class: !0 }))
				var T = g(n)
				;(H = V(T, 'Techno producer & DJ')),
					T.forEach(r),
					_.forEach(r),
					P.forEach(r),
					(q = b(x)),
					(p = h(x, 'HOME-PAGE-RIGHT', { class: !0, style: !0 }))
				var D = g(p)
				D.forEach(r), x.forEach(r), this.h()
			},
			h() {
				R(l.src, (M = $ + '/logos/white.svg')) || m(l, 'src', M),
					m(l, 'alt', 'Apellum logo'),
					m(l, 'class', 'invisible md:visible object-contain'),
					m(i, 'class', 'invisible h-0'),
					m(n, 'class', (v = (d[0] ? 'mt-[38vh]' : 'mt-4') + ' italic svelte-1r4n2qs')),
					m(
						e,
						'class',
						'w-full max-w-3xl h-full md:px-[6rem] flex flex-col justify-center items-center md:items-end text-right',
					),
					y(
						a,
						'class',
						'w-full md:w-1/2 absolute md:static flex flex-col justify-center items-center',
					),
					y(p, 'class', 'w-full md:w-1/2 h-full svelte-1r4n2qs'),
					F(p, '--bg-image-url', 'url(' + d[1] + ')'),
					y(t, 'class', 'w-full h-screen max-h-screen flex flex-row')
			},
			m(o, f) {
				I(o, c, f),
					I(o, t, f),
					s(t, a),
					s(a, e),
					s(e, l),
					s(e, w),
					s(e, i),
					s(e, A),
					s(e, n),
					s(n, H),
					s(t, q),
					s(t, p)
			},
			p(o, [f]) {
				f & 1 &&
					v !== (v = (o[0] ? 'mt-[38vh]' : 'mt-4') + ' italic svelte-1r4n2qs') &&
					m(n, 'class', v)
			},
			i: C,
			o: C,
			d(o) {
				o && (r(c), r(t))
			},
		}
	)
}
function X(d, c, t) {
	let a
	J(d, N, (l) => t(0, (a = l)))
	const e = `${$}/images/press_home.webp`
	return (
		S(() => {
			K(j.Home)
		}),
		[a, e]
	)
}
class le extends k {
	constructor(c) {
		super(), z(this, c, X, W, O, {})
	}
}
export { le as component }
