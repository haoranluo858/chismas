			/*!
			 * DrawSVGPlugin 3.10.4
			 * https://greensock.com
			 * 
			 * @license Copyright 2022, GreenSock. All rights reserved.
			 * *** DO NOT DEPLOY THIS FILE ***
			 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
			 * Loading it on an unauthorized domain violates the license and will cause a redirect.
			 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
			 * @author: Jack Doyle, jack@greensock.com
			 */

			! function(e, t) {
				"object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define
					.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
			}(this, function(e) {
				"use strict";

				function j() {
					return "undefined" != typeof window
				}

				function k() {
					return r || j() && (r = window.gsap) && r.registerPlugin && r
				}

				function n(e) {
					return Math.round(1e4 * e) / 1e4
				}

				function o(e) {
					return parseFloat(e) || 0
				}

				function p(e, t) {
					var n = o(e);
					return ~e.indexOf("%") ? n / 100 * t : n
				}

				function q(e, t) {
					return o(e.getAttribute(t))
				}

				function s(e, t, n, r, i, s) {
					return M(Math.pow((o(n) - o(e)) * i, 2) + Math.pow((o(r) - o(t)) * s, 2))
				}

				function t(e) {
					return console.warn(e)
				}

				function u(e) {
					return "non-scaling-stroke" === e.getAttribute("vector-effect")
				}

				function x() {
					return String.fromCharCode.apply(null, arguments)
				}

				function B(e) {
					if (!(e = v(e)[0])) return 0;
					var r, i, o, a, d, f, h, l = e.tagName.toLowerCase(),
						c = e.style,
						x = 1,
						g = 1;
					u(e) && (g = e.getScreenCTM(), x = M(g.a * g.a + g.b * g.b), g = M(g.d * g.d + g.c * g.c));
					try {
						i = e.getBBox()
					} catch (e) {
						t("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
					}
					var p = i || {
							x: 0,
							y: 0,
							width: 0,
							height: 0
						},
						w = p.x,
						_ = p.y,
						y = p.width,
						m = p.height;
					if (i && (y || m) || !O[l] || (y = q(e, O[l][0]), m = q(e, O[l][1]), "rect" !== l && "line" !== l && (
							y *= 2, m *= 2), "line" === l && (w = q(e, "x1"), _ = q(e, "y1"), y = Math.abs(y - w), m =
							Math.abs(m - _))), "path" === l) a = c.strokeDasharray, c.strokeDasharray = "none", r = e
						.getTotalLength() || 0, n(x) !== n(g) && !b && (b = 1) && t(
							"Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
							), r *= (x + g) / 2, c.strokeDasharray = a;
					else if ("rect" === l) r = 2 * y * x + 2 * m * g;
					else if ("line" === l) r = s(w, _, w + y, _ + m, x, g);
					else if ("polyline" === l || "polygon" === l)
						for (o = e.getAttribute("points").match(P) || [], "polygon" === l && o.push(o[0], o[1]), r = 0, d =
							2; d < o.length; d += 2) r += s(o[d - 2], o[d - 1], o[d], o[d + 1], x, g) || 0;
					else "circle" !== l && "ellipse" !== l || (f = y / 2 * x, h = m / 2 * g, r = Math.PI * (3 * (f + h) - M((
						3 * f + h) * (f + 3 * h))));
					return r || 0
				}

				function C(e, t) {
					if (!(e = v(e)[0])) return [0, 0];
					t = t || B(e) + 1;
					var n = d.getComputedStyle(e),
						r = n.strokeDasharray || "",
						i = o(n.strokeDashoffset),
						s = r.indexOf(",");
					return s < 0 && (s = r.indexOf(" ")), t < (r = s < 0 ? t : o(r.substr(0, s))) && (r = t), [-i || 0, r -
						i || 0
					]
				}

				function D() {
					j() && (d = window, h = r = k(), v = r.utils.toArray, f = -1 !== ((d.navigator || {}).userAgent || "")
						.indexOf("Edge"))
				}
				var r, v, d, f, h, b, P = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
					O = {
						rect: ["width", "height"],
						circle: ["r", "r"],
						ellipse: ["rx", "ry"],
						line: ["x2", "y2"]
					},
					M = Math.sqrt,
					a = "DrawSVGPlugin",
					l = x(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
					c = function(e) {
						var t = "undefined" != typeof window,
							n = 0 === (t ? window.location.href : "").indexOf(x(102, 105, 108, 101, 58, 47, 47)) || -1 !== e
							.indexOf(x(108, 111, 99, 97, 108, 104, 111, 115, 116)) || -1 !== e.indexOf(x(49, 50, 55, 46, 48,
								32, 48, 46, 49)),
							r = [l, x(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), x(99, 111, 100, 101, 112, 101, 110,
								46, 112, 108, 117, 109, 98, 105, 110, 103), x(99, 111, 100, 101, 112, 101, 110, 46, 100,
								101, 118), x(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), x(99, 111, 100, 101,
								112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), x(112, 101, 110, 115, 46, 99, 108,
								111, 117, 100), x(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), x(99,
								100, 112, 110, 46, 105, 111), x(112, 101, 110, 115, 46, 105, 111), x(103, 97, 110, 110,
								111, 110, 46, 116, 118), x(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101,
								116), x(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), x(99,
								101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), x(116, 121, 109, 112, 97,
								110, 117, 115, 46, 110, 101, 116), x(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111,
								109), x(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), x(112, 108, 110,
								107, 114, 46, 99, 111), x(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), x(119, 101, 98,
								112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), x(97, 114, 99, 104, 105, 118, 101, 46,
								111, 114, 103), x(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), x(
								99, 115, 98, 46, 97, 112, 112), x(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99,
								111, 109), x(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), x(99, 111,
								100, 105, 101, 114, 46, 105, 111), x(109, 111, 116, 105, 111, 110, 116, 114, 105, 99,
								107, 115, 46, 99, 111, 109), x(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111,
								119, 46, 99, 111, 109), x(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101,
								46, 99, 111, 109), x(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
							i = r.length;
						for (setTimeout(function checkWarn() {
								t && ("loading" === document.readyState || "interactive" === document.readyState ?
									document.addEventListener("readystatechange", checkWarn) : (document
										.removeEventListener("readystatechange", checkWarn), t && window.console && !
										window._gsapWarned && "object" == typeof window.gsap && !1 !== window.gsap
										.config().trialWarn && (console.log(x(37, 99, 87, 97, 114, 110, 105, 110,
												103), x(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48,
												112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)),
											console.log(x(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115,
												105, 111, 110, 32, 111, 102, 32) + a + x(32, 105, 115, 32, 108,
												111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108,
												121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108,
												121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105,
												110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112,
												101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101,
												115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42,
												42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32,
												84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111,
												97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110,
												32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100,
												32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101,
												115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32,
												97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101,
												32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80,
												108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117,
												98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111,
												32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101,
												115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117,
												115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97,
												116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97,
												110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101,
												114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98,
												108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105,
												110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99,
												111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97,
												114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(
												x(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105,
													99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32,
													104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110,
													115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), x(
													102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120,
													59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)),
											window._gsapWarned = 1)))
							}, 50); - 1 < --i;)
							if (-1 !== e.indexOf(r[i])) return !0;
						return n || !setTimeout(function() {
							t && (window.location.href = x(104, 116, 116, 112, 115, 58, 47, 47) + l + x(47, 114, 101,
								113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105,
								112, 47) + "?plugin=" + a + "&source=trial")
						}, 3e3)
					}("undefined" != typeof window ? window.location.host : ""),
					i = {
						version: "3.10.4",
						name: "drawSVG",
						register: function register(e) {
							r = e, D()
						},
						init: function init(e, t) {
							if (!e.getBBox) return !1;
							h || D();
							var r, i, s, a = B(e);
							return this._style = e.style, this._target = e, t + "" == "true" ? t = "0 100%" : t ? -1 ===
								(t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", i = function _parse(e, t, n) {
									var r, i, o = e.indexOf(" ");
									return i = o < 0 ? (r = void 0 !== n ? n + "" : e, e) : (r = e.substr(0, o), e
										.substr(o + 1)), r = p(r, t), (i = p(i, t)) < r ? [i, r] : [r, i]
								}(t, a, (r = C(e, a))[0]), this._length = n(a), this._dash = n(r[1] - r[0]), this
								._offset = n(-r[0]), this._dashPT = this.add(this, "_dash", this._dash, n(i[1] - i[0])),
								this._offsetPT = this.add(this, "_offset", this._offset, n(-i[0])), f && (s = d
									.getComputedStyle(e)).strokeLinecap !== s.strokeLinejoin && (i = o(s
									.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", i, i + .01)), this._live =
								u(e) || ~(t + "").indexOf("live"), this._nowrap = ~(t + "").indexOf("nowrap"), this
								._props.push("drawSVG"), c
						},
						render: function render(e, t) {
							var n, r, i, o, s = t._pt,
								a = t._style;
							if (s) {
								for (t._live && (n = B(t._target)) !== t._length && (r = n / t._length, t._length = n, t
										._offsetPT && (t._offsetPT.s *= r, t._offsetPT.c *= r), t._dashPT ? (t._dashPT
											.s *= r, t._dashPT.c *= r) : t._dash *= r); s;) s.r(e, s.d), s = s._next;
								i = t._dash || e && 1 !== e && 1e-4 || 0, n = t._length - i + .1, o = t._offset, i &&
									o && i + Math.abs(o % t._length) > t._length - .2 && (o += o < 0 ? .1 : -.1) && (n +=
										.1), a.strokeDashoffset = i ? o : o + .001, a.strokeDasharray = n < .2 ? "none" :
									i ? i + "px," + (t._nowrap ? 999999 : n) + "px" : "0px, 999999px"
							}
						},
						getLength: B,
						getPosition: C
					};
				k() && r.registerPlugin(i), e.DrawSVGPlugin = i, e.default = i;
				if (typeof(window) === "undefined" || window !== e) {
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				} else {
					delete e.default
				}
			});