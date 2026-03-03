import { s as m, n as o, o as p } from '../chunks/D4f8t5KQ.js'
import {
	S as f,
	i as u,
	d as r,
	b as i,
	y as d,
	E as h,
	e as _,
	p as g,
	x,
	s as E,
	r as v,
} from '../chunks/DpX7TR1M.js'
import { A as c, s as R } from '../chunks/BnkzR3UQ.js'
import { g as A } from '../chunks/9ZC-oahI.js'
function y(n) {
	let s,
		e,
		l = '<h1>404</h1> <p>Page not found</p>'
	return (
		(document.title = A(c.Error)),
		{
			c() {
				;(s = E()), (e = v('error-page')), (e.innerHTML = l), this.h()
			},
			l(t) {
				h('svelte-130ngo0', document.head).forEach(r),
					(s = _(t)),
					(e = g(t, 'ERROR-PAGE', { class: !0, 'data-svelte-h': !0 })),
					x(e) !== 'svelte-ozdwf9' && (e.innerHTML = l),
					this.h()
			},
			h() {
				d(e, 'class', 'w-full h-[50vh] flex flex-col justify-center items-center')
			},
			m(t, a) {
				i(t, s, a), i(t, e, a)
			},
			p: o,
			i: o,
			o,
			d(t) {
				t && (r(s), r(e))
			},
		}
	)
}
function M(n) {
	return (
		p(() => {
			R(c.Error)
		}),
		[]
	)
}
class H extends f {
	constructor(s) {
		super(), u(this, s, M, y, m, {})
	}
}
export { H as component }
