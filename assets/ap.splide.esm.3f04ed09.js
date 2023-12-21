(() => {
  function t(t, e, n, i) {
    Object.defineProperty(t, e, { get: n, set: i, enumerable: !0, configurable: !0 });
  }
  (0, globalThis.parcelRequirece54.register)('cy73i', function (e, n) {
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    Object.defineProperty(e.exports, '__esModule', { value: !0, configurable: !0 }),
      t(e.exports, 'EventBinder', () => tp),
      t(e.exports, 'EVENT_MOUNTED', () => th),
      t(e.exports, 'EVENT_READY', () => tv),
      t(e.exports, 'EVENT_MOVE', () => tg),
      t(e.exports, 'EVENT_MOVED', () => tm),
      t(e.exports, 'EVENT_CLICK', () => tE),
      t(e.exports, 'EVENT_ACTIVE', () => tS),
      t(e.exports, 'EVENT_INACTIVE', () => ty),
      t(e.exports, 'EVENT_VISIBLE', () => tx),
      t(e.exports, 'EVENT_HIDDEN', () => tb),
      t(e.exports, 'EVENT_REFRESH', () => t_),
      t(e.exports, 'EVENT_UPDATED', () => tA),
      t(e.exports, 'EVENT_RESIZE', () => tC),
      t(e.exports, 'EVENT_RESIZED', () => tL),
      t(e.exports, 'EVENT_DRAG', () => tT),
      t(e.exports, 'EVENT_DRAGGING', () => tw),
      t(e.exports, 'EVENT_DRAGGED', () => tN),
      t(e.exports, 'EVENT_SCROLL', () => tP),
      t(e.exports, 'EVENT_SCROLLED', () => tO),
      t(e.exports, 'EVENT_OVERFLOW', () => tD),
      t(e.exports, 'EVENT_DESTROY', () => tk),
      t(e.exports, 'EVENT_ARROWS_MOUNTED', () => tR),
      t(e.exports, 'EVENT_ARROWS_UPDATED', () => tV),
      t(e.exports, 'EVENT_PAGINATION_MOUNTED', () => tI),
      t(e.exports, 'EVENT_PAGINATION_UPDATED', () => tM),
      t(e.exports, 'EVENT_NAVIGATION_MOUNTED', () => tG),
      t(e.exports, 'EVENT_AUTOPLAY_PLAY', () => tz),
      t(e.exports, 'EVENT_AUTOPLAY_PLAYING', () => tW),
      t(e.exports, 'EVENT_AUTOPLAY_PAUSE', () => tF),
      t(e.exports, 'EVENT_LAZYLOAD_LOADED', () => tj),
      t(e.exports, 'EVENT_SLIDE_KEYDOWN', () => tH),
      t(e.exports, 'EVENT_SHIFTED', () => tU),
      t(e.exports, 'EVENT_END_INDEX_CHANGED', () => tB),
      t(e.exports, 'EventInterface', () => tY),
      t(e.exports, 'RequestInterval', () => tX),
      t(e.exports, 'State', () => tq),
      t(e.exports, 'Throttle', () => tK),
      t(e.exports, 'LTR', () => t1),
      t(e.exports, 'RTL', () => t4),
      t(e.exports, 'TTB', () => t5),
      t(e.exports, 'CLASS_ROOT', () => ed),
      t(e.exports, 'CLASS_TRACK', () => ep),
      t(e.exports, 'CLASS_LIST', () => eh),
      t(e.exports, 'CLASS_SLIDE', () => ev),
      t(e.exports, 'CLASS_CLONE', () => eg),
      t(e.exports, 'CLASS_CONTAINER', () => em),
      t(e.exports, 'CLASS_ARROWS', () => eE),
      t(e.exports, 'CLASS_ARROW', () => eS),
      t(e.exports, 'CLASS_ARROW_PREV', () => ey),
      t(e.exports, 'CLASS_ARROW_NEXT', () => ex),
      t(e.exports, 'CLASS_PAGINATION', () => eb),
      t(e.exports, 'CLASS_PAGINATION_PAGE', () => e_),
      t(e.exports, 'CLASS_PROGRESS', () => eA),
      t(e.exports, 'CLASS_PROGRESS_BAR', () => eC),
      t(e.exports, 'CLASS_TOGGLE', () => eL),
      t(e.exports, 'CLASS_TOGGLE_PLAY', () => eT),
      t(e.exports, 'CLASS_TOGGLE_PAUSE', () => ew),
      t(e.exports, 'CLASS_SPINNER', () => eN),
      t(e.exports, 'CLASS_SR', () => eP),
      t(e.exports, 'CLASS_INITIALIZED', () => eO),
      t(e.exports, 'CLASS_ACTIVE', () => eD),
      t(e.exports, 'CLASS_PREV', () => ek),
      t(e.exports, 'CLASS_NEXT', () => eR),
      t(e.exports, 'CLASS_VISIBLE', () => eV),
      t(e.exports, 'CLASS_LOADING', () => eI),
      t(e.exports, 'CLASS_FOCUS_IN', () => eM),
      t(e.exports, 'CLASS_OVERFLOW', () => eG),
      t(e.exports, 'STATUS_CLASSES', () => ez),
      t(e.exports, 'CLASSES', () => eW),
      t(e.exports, 'SLIDE', () => eU),
      t(e.exports, 'LOOP', () => eB),
      t(e.exports, 'FADE', () => eY),
      t(e.exports, 'DEFAULTS', () => e3),
      t(e.exports, 'Splide', () => e7),
      t(e.exports, 'SplideRenderer', () => ne),
      t(e.exports, 'default', () => e7);
    /*!
     * Splide.js
     * Version  : 4.1.4
     * License  : MIT
     * Copyright: 2022 Naotoshi Fujita
     */ var r = '(prefers-reduced-motion: reduce)';
    function o(t) {
      t.length = 0;
    }
    function s(t, e, n) {
      return Array.prototype.slice.call(t, e, n);
    }
    function u(t) {
      return t.bind.apply(t, [null].concat(s(arguments, 1)));
    }
    var a = setTimeout,
      c = function () {};
    function l(t) {
      return requestAnimationFrame(t);
    }
    function f(t, e) {
      return typeof e === t;
    }
    function d(t) {
      return null !== t && f('object', t);
    }
    var p = Array.isArray,
      h = u(f, 'function'),
      v = u(f, 'string'),
      g = u(f, 'undefined');
    function m(t) {
      try {
        return t instanceof (t.ownerDocument.defaultView || window).HTMLElement;
      } catch (t) {
        return !1;
      }
    }
    function E(t) {
      return p(t) ? t : [t];
    }
    function S(t, e) {
      E(t).forEach(e);
    }
    function y(t, e) {
      return t.indexOf(e) > -1;
    }
    function x(t, e) {
      return t.push.apply(t, E(e)), t;
    }
    function b(t, e, n) {
      t &&
        S(e, function (e) {
          e && t.classList[n ? 'add' : 'remove'](e);
        });
    }
    function _(t, e) {
      b(t, v(e) ? e.split(' ') : e, !0);
    }
    function A(t, e) {
      S(e, t.appendChild.bind(t));
    }
    function C(t, e) {
      S(t, function (t) {
        var n = (e || t).parentNode;
        n && n.insertBefore(t, e);
      });
    }
    function L(t, e) {
      return m(t) && (t.msMatchesSelector || t.matches).call(t, e);
    }
    function T(t, e) {
      var n = t ? s(t.children) : [];
      return e
        ? n.filter(function (t) {
            return L(t, e);
          })
        : n;
    }
    function w(t, e) {
      return e ? T(t, e)[0] : t.firstElementChild;
    }
    var N = Object.keys;
    function P(t, e, n) {
      return (
        t &&
          (n ? N(t).reverse() : N(t)).forEach(function (n) {
            '__proto__' !== n && e(t[n], n);
          }),
        t
      );
    }
    function O(t) {
      return (
        s(arguments, 1).forEach(function (e) {
          P(e, function (n, i) {
            t[i] = e[i];
          });
        }),
        t
      );
    }
    function D(t) {
      return (
        s(arguments, 1).forEach(function (e) {
          P(e, function (e, n) {
            p(e) ? (t[n] = e.slice()) : d(e) ? (t[n] = D({}, d(t[n]) ? t[n] : {}, e)) : (t[n] = e);
          });
        }),
        t
      );
    }
    function k(t, e) {
      S(e || N(t), function (e) {
        delete t[e];
      });
    }
    function R(t, e) {
      S(t, function (t) {
        S(e, function (e) {
          t && t.removeAttribute(e);
        });
      });
    }
    function V(t, e, n) {
      d(e)
        ? P(e, function (e, n) {
            V(t, n, e);
          })
        : S(t, function (t) {
            null === n || '' === n ? R(t, e) : t.setAttribute(e, String(n));
          });
    }
    function I(t, e, n) {
      var i = document.createElement(t);
      return e && (v(e) ? _(i, e) : V(i, e)), n && A(n, i), i;
    }
    function M(t, e, n) {
      if (g(n)) return getComputedStyle(t)[e];
      null !== n && (t.style[e] = '' + n);
    }
    function G(t, e) {
      M(t, 'display', e);
    }
    function z(t) {
      (t.setActive && t.setActive()) || t.focus({ preventScroll: !0 });
    }
    function W(t, e) {
      return t.getAttribute(e);
    }
    function F(t, e) {
      return t && t.classList.contains(e);
    }
    function j(t) {
      return t.getBoundingClientRect();
    }
    function H(t) {
      S(t, function (t) {
        t && t.parentNode && t.parentNode.removeChild(t);
      });
    }
    function U(t) {
      return w(new DOMParser().parseFromString(t, 'text/html').body);
    }
    function B(t, e) {
      t.preventDefault(), e && (t.stopPropagation(), t.stopImmediatePropagation());
    }
    function Y(t, e) {
      return t && t.querySelector(e);
    }
    function X(t, e) {
      return e ? s(t.querySelectorAll(e)) : [];
    }
    function q(t, e) {
      b(t, e, !1);
    }
    function K(t) {
      return t.timeStamp;
    }
    function Z(t) {
      return v(t) ? t : t ? t + 'px' : '';
    }
    var J = 'splide',
      Q = 'data-' + J;
    function $(t, e) {
      if (!t) throw Error('[' + J + '] ' + (e || ''));
    }
    var tt = Math.min,
      te = Math.max,
      tn = Math.floor,
      ti = Math.ceil,
      tr = Math.abs;
    function to(t, e, n, i) {
      var r = tt(e, n),
        o = te(e, n);
      return i ? r < t && t < o : r <= t && t <= o;
    }
    function ts(t, e, n) {
      var i = tt(e, n),
        r = te(e, n);
      return tt(te(i, t), r);
    }
    function tu(t) {
      return +(t > 0) - +(t < 0);
    }
    function ta(t) {
      return t.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    }
    function tc(t, e) {
      return (
        S(e, function (e) {
          t = t.replace('%s', '' + e);
        }),
        t
      );
    }
    function tl(t) {
      return t < 10 ? '0' + t : '' + t;
    }
    var tf = {};
    function td(t) {
      return '' + t + tl((tf[t] = (tf[t] || 0) + 1));
    }
    function tp() {
      var t = [];
      function e(t, e, n) {
        S(t, function (t) {
          t &&
            S(e, function (e) {
              e.split(' ').forEach(function (e) {
                var i = e.split('.');
                n(t, i[0], i[1]);
              });
            });
        });
      }
      return {
        bind: function (n, i, r, o) {
          e(n, i, function (e, n, i) {
            var s = 'addEventListener' in e,
              u = s ? e.removeEventListener.bind(e, n, r, o) : e.removeListener.bind(e, r);
            s ? e.addEventListener(n, r, o) : e.addListener(r), t.push([e, n, i, r, u]);
          });
        },
        unbind: function (n, i, r) {
          e(n, i, function (e, n, i) {
            t = t.filter(function (t) {
              return t[0] !== e || t[1] !== n || t[2] !== i || (!!r && t[3] !== r) || (t[4](), !1);
            });
          });
        },
        dispatch: function (t, e, n) {
          var i;
          return (
            'function' == typeof CustomEvent
              ? (i = new CustomEvent(e, { bubbles: !0, detail: n }))
              : (i = document.createEvent('CustomEvent')).initCustomEvent(e, !0, !1, n),
            t.dispatchEvent(i),
            i
          );
        },
        destroy: function () {
          t.forEach(function (t) {
            t[4]();
          }),
            o(t);
        },
      };
    }
    var th = 'mounted',
      tv = 'ready',
      tg = 'move',
      tm = 'moved',
      tE = 'click',
      tS = 'active',
      ty = 'inactive',
      tx = 'visible',
      tb = 'hidden',
      t_ = 'refresh',
      tA = 'updated',
      tC = 'resize',
      tL = 'resized',
      tT = 'drag',
      tw = 'dragging',
      tN = 'dragged',
      tP = 'scroll',
      tO = 'scrolled',
      tD = 'overflow',
      tk = 'destroy',
      tR = 'arrows:mounted',
      tV = 'arrows:updated',
      tI = 'pagination:mounted',
      tM = 'pagination:updated',
      tG = 'navigation:mounted',
      tz = 'autoplay:play',
      tW = 'autoplay:playing',
      tF = 'autoplay:pause',
      tj = 'lazyload:loaded',
      tH = 'sk',
      tU = 'sh',
      tB = 'ei';
    function tY(t) {
      var e = t ? t.event.bus : document.createDocumentFragment(),
        n = tp();
      return (
        t && t.event.on(tk, n.destroy),
        O(n, {
          bus: e,
          on: function (t, i) {
            n.bind(e, E(t).join(' '), function (t) {
              i.apply(i, p(t.detail) ? t.detail : []);
            });
          },
          off: u(n.unbind, e),
          emit: function (t) {
            n.dispatch(e, t, s(arguments, 1));
          },
        })
      );
    }
    function tX(t, e, n, i) {
      var r,
        o,
        s = Date.now,
        u = 0,
        a = !0,
        c = 0;
      function f() {
        if (!a) {
          if (((u = t ? tt((s() - r) / t, 1) : 1), n && n(u), u >= 1 && (e(), (r = s()), i && ++c >= i))) return d();
          o = l(f);
        }
      }
      function d() {
        a = !0;
      }
      function p() {
        o && cancelAnimationFrame(o), (u = 0), (o = 0), (a = !0);
      }
      return {
        start: function (e) {
          e || p(), (r = s() - (e ? u * t : 0)), (a = !1), (o = l(f));
        },
        rewind: function () {
          (r = s()), (u = 0), n && n(u);
        },
        pause: d,
        cancel: p,
        set: function (e) {
          t = e;
        },
        isPaused: function () {
          return a;
        },
      };
    }
    function tq(t) {
      var e = t;
      return {
        set: function (t) {
          e = t;
        },
        is: function (t) {
          return y(E(t), e);
        },
      };
    }
    function tK(t, e) {
      var n = tX(e || 0, t, null, 1);
      return function () {
        n.isPaused() && n.start();
      };
    }
    var tZ = 'Arrow',
      tJ = tZ + 'Left',
      tQ = tZ + 'Right',
      t$ = tZ + 'Up',
      t0 = tZ + 'Down',
      t1 = 'ltr',
      t4 = 'rtl',
      t5 = 'ttb',
      t2 = {
        width: ['height'],
        left: ['top', 'right'],
        right: ['bottom', 'left'],
        x: ['y'],
        X: ['Y'],
        Y: ['X'],
        ArrowLeft: [t$, tQ],
        ArrowRight: [t0, tJ],
      };
    function t3(t, e, n) {
      return {
        resolve: function (t, e, i) {
          var r = (i = i || n.direction) !== t4 || e ? (i === t5 ? 0 : -1) : 1;
          return (
            (t2[t] && t2[t][r]) ||
            t.replace(/width|left|right/i, function (t, e) {
              var n = t2[t.toLowerCase()][r] || t;
              return e > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n;
            })
          );
        },
        orient: function (t) {
          return t * (n.direction === t4 ? 1 : -1);
        },
      };
    }
    var t6 = 'role',
      t8 = 'tabindex',
      t7 = 'aria-',
      t9 = t7 + 'controls',
      et = t7 + 'current',
      ee = t7 + 'selected',
      en = t7 + 'label',
      ei = t7 + 'labelledby',
      er = t7 + 'hidden',
      eo = t7 + 'orientation',
      es = t7 + 'roledescription',
      eu = t7 + 'live',
      ea = t7 + 'busy',
      ec = t7 + 'atomic',
      el = [t6, t8, 'disabled', t9, et, en, ei, er, eo, es],
      ef = J + '__',
      ed = J,
      ep = ef + 'track',
      eh = ef + 'list',
      ev = ef + 'slide',
      eg = ev + '--clone',
      em = ev + '__container',
      eE = ef + 'arrows',
      eS = ef + 'arrow',
      ey = eS + '--prev',
      ex = eS + '--next',
      eb = ef + 'pagination',
      e_ = eb + '__page',
      eA = ef + 'progress',
      eC = eA + '__bar',
      eL = ef + 'toggle',
      eT = eL + '__play',
      ew = eL + '__pause',
      eN = ef + 'spinner',
      eP = ef + 'sr',
      eO = 'is-initialized',
      eD = 'is-active',
      ek = 'is-prev',
      eR = 'is-next',
      eV = 'is-visible',
      eI = 'is-loading',
      eM = 'is-focus-in',
      eG = 'is-overflow',
      ez = [eD, eV, ek, eR, eI, eM, eG],
      eW = { slide: ev, clone: eg, arrows: eE, arrow: eS, prev: ey, next: ex, pagination: eb, page: e_, spinner: eN },
      eF = 'touchstart mousedown',
      ej = 'touchmove mousemove',
      eH = 'touchend touchcancel mouseup click',
      eU = 'slide',
      eB = 'loop',
      eY = 'fade',
      eX = 'http://www.w3.org/2000/svg',
      eq = 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z',
      eK = Q + '-interval',
      eZ = { passive: !1, capture: !0 },
      eJ = { Spacebar: ' ', Right: tQ, Left: tJ, Up: t$, Down: t0 };
    function eQ(t) {
      return eJ[(t = v(t) ? t : t.key)] || t;
    }
    var e$ = 'keydown',
      e0 = Q + '-lazy',
      e1 = e0 + '-srcset',
      e4 = '[' + e0 + '], [' + e1 + ']',
      e5 = [' ', 'Enter'],
      e2 = Object.freeze({
        __proto__: null,
        Media: function (t, e, n) {
          var i = t.state,
            o = n.breakpoints || {},
            s = n.reducedMotion || {},
            u = tp(),
            a = [];
          function c(t) {
            t && u.destroy();
          }
          function l(t, e) {
            var n = matchMedia(e);
            u.bind(n, 'change', f), a.push([t, n]);
          }
          function f() {
            var e = i.is(7),
              r = n.direction,
              o = a.reduce(function (t, e) {
                return D(t, e[1].matches ? e[0] : {});
              }, {});
            k(n),
              d(o),
              n.destroy
                ? t.destroy('completely' === n.destroy)
                : e
                ? (c(!0), t.mount())
                : r !== n.direction && t.refresh();
          }
          function d(e, r, o) {
            D(n, e), r && D(Object.getPrototypeOf(n), e), (o || !i.is(1)) && t.emit(tA, n);
          }
          return {
            setup: function () {
              var t = 'min' === n.mediaQuery;
              N(o)
                .sort(function (e, n) {
                  return t ? +e - +n : +n - +e;
                })
                .forEach(function (e) {
                  l(o[e], '(' + (t ? 'min' : 'max') + '-width:' + e + 'px)');
                }),
                l(s, r),
                f();
            },
            destroy: c,
            reduce: function (t) {
              matchMedia(r).matches && (t ? D(n, s) : k(n, N(s)));
            },
            set: d,
          };
        },
        Direction: t3,
        Elements: function (t, e, n) {
          var i,
            r,
            s,
            u = tY(t),
            a = u.on,
            c = u.bind,
            l = t.root,
            f = n.i18n,
            d = {},
            p = [],
            v = [],
            g = [];
          function m() {
            var t, e;
            (r = w((i = y('.' + ep)), '.' + eh)),
              $(i && r, 'A track/list element is missing.'),
              x(p, T(r, '.' + ev + ':not(.' + eg + ')')),
              P({ arrows: eE, pagination: eb, prev: ey, next: ex, bar: eC, toggle: eL }, function (t, e) {
                d[e] = y('.' + t);
              }),
              O(d, { root: l, track: i, list: r, slides: p }),
              (t = l.id || td(J)),
              (e = n.role),
              (l.id = t),
              (i.id = i.id || t + '-track'),
              (r.id = r.id || t + '-list'),
              !W(l, t6) && 'SECTION' !== l.tagName && e && V(l, t6, e),
              V(l, es, f.carousel),
              V(r, t6, 'presentation'),
              S();
          }
          function E(t) {
            var e = el.concat('style');
            o(p), q(l, v), q(i, g), R([i, r], e), R(l, t ? e : ['style', es]);
          }
          function S() {
            q(l, v), q(i, g), (v = A(ed)), (g = A(ep)), _(l, v), _(i, g), V(l, en, n.label), V(l, ei, n.labelledby);
          }
          function y(t) {
            var e = Y(l, t);
            return e &&
              (function (t, e) {
                if (h(t.closest)) return t.closest(e);
                for (var n = t; n && 1 === n.nodeType && !L(n, e); ) n = n.parentElement;
                return n;
              })(e, '.' + ed) === l
              ? e
              : void 0;
          }
          function A(t) {
            return [
              t + '--' + n.type,
              t + '--' + n.direction,
              n.drag && t + '--draggable',
              n.isNavigation && t + '--nav',
              t === ed && eD,
            ];
          }
          return O(d, {
            setup: m,
            mount: function () {
              a(t_, E),
                a(t_, m),
                a(tA, S),
                c(
                  document,
                  eF + ' keydown',
                  function (t) {
                    s = 'keydown' === t.type;
                  },
                  { capture: !0 },
                ),
                c(l, 'focusin', function () {
                  b(l, eM, !!s);
                });
            },
            destroy: E,
          });
        },
        Slides: function (t, e, n) {
          var i = tY(t),
            r = i.on,
            s = i.emit,
            a = i.bind,
            c = e.Elements,
            l = c.slides,
            f = c.list,
            d = [];
          function p() {
            l.forEach(function (t, e) {
              x(t, e, -1);
            });
          }
          function g() {
            N(function (t) {
              t.destroy();
            }),
              o(d);
          }
          function x(e, n, i) {
            var r = (function (t, e, n, i) {
              var r,
                o = tY(t),
                s = o.on,
                a = o.emit,
                c = o.bind,
                l = t.Components,
                f = t.root,
                d = t.options,
                p = d.isNavigation,
                h = d.updateOnMove,
                v = d.i18n,
                g = d.pagination,
                m = d.slideFocus,
                E = l.Direction.resolve,
                S = W(i, 'style'),
                y = W(i, en),
                x = n > -1,
                _ = w(i, '.' + em);
              function A() {
                var r = t.splides
                  .map(function (t) {
                    var n = t.splide.Components.Slides.getAt(e);
                    return n ? n.slide.id : '';
                  })
                  .join(' ');
                V(i, en, tc(v.slideX, (x ? n : e) + 1)), V(i, t9, r), V(i, t6, m ? 'button' : ''), m && R(i, es);
              }
              function C() {
                r || L();
              }
              function L() {
                if (!r) {
                  var n,
                    o = t.index;
                  (n = T()) !== F(i, eD) && (b(i, eD, n), V(i, et, (p && n) || ''), a(n ? tS : ty, N)),
                    (function () {
                      var e = (function () {
                          if (t.is(eY)) return T();
                          var e = j(l.Elements.track),
                            n = j(i),
                            r = E('left', !0),
                            o = E('right', !0);
                          return tn(e[r]) <= ti(n[r]) && tn(n[o]) <= ti(e[o]);
                        })(),
                        n = !e && (!T() || x);
                      if (
                        (t.state.is([4, 5]) || V(i, er, n || ''),
                        V(X(i, d.focusableNodes || ''), t8, n ? -1 : ''),
                        m && V(i, t8, n ? -1 : 0),
                        e !== F(i, eV) && (b(i, eV, e), a(e ? tx : tb, N)),
                        !e && document.activeElement === i)
                      ) {
                        var r = l.Slides.getAt(t.index);
                        r && z(r.slide);
                      }
                    })(),
                    b(i, ek, e === o - 1),
                    b(i, eR, e === o + 1);
                }
              }
              function T() {
                var i = t.index;
                return i === e || (d.cloneStatus && i === n);
              }
              var N = {
                index: e,
                slideIndex: n,
                slide: i,
                container: _,
                isClone: x,
                mount: function () {
                  x ||
                    ((i.id = f.id + '-slide' + tl(e + 1)),
                    V(i, t6, g ? 'tabpanel' : 'group'),
                    V(i, es, v.slide),
                    V(i, en, y || tc(v.slideLabel, [e + 1, t.length]))),
                    c(i, 'click', u(a, tE, N)),
                    c(i, 'keydown', u(a, tH, N)),
                    s([tm, tU, tO], L),
                    s(tG, A),
                    h && s(tg, C);
                },
                destroy: function () {
                  (r = !0), o.destroy(), q(i, ez), R(i, el), V(i, 'style', S), V(i, en, y || '');
                },
                update: L,
                style: function (t, e, n) {
                  M((n && _) || i, t, e);
                },
                isWithin: function (n, i) {
                  var r = tr(n - e);
                  return !x && (d.rewind || t.is(eB)) && (r = tt(r, t.length - r)), r <= i;
                },
              };
              return N;
            })(t, n, i, e);
            r.mount(),
              d.push(r),
              d.sort(function (t, e) {
                return t.index - e.index;
              });
          }
          function T(t) {
            return t
              ? P(function (t) {
                  return !t.isClone;
                })
              : d;
          }
          function N(t, e) {
            T(e).forEach(t);
          }
          function P(t) {
            return d.filter(
              h(t)
                ? t
                : function (e) {
                    return v(t) ? L(e.slide, t) : y(E(t), e.index);
                  },
            );
          }
          return {
            mount: function () {
              p(), r(t_, g), r(t_, p);
            },
            destroy: g,
            update: function () {
              N(function (t) {
                t.update();
              });
            },
            register: x,
            get: T,
            getIn: function (t) {
              var i = e.Controller,
                r = i.toIndex(t),
                o = i.hasFocus() ? 1 : n.perPage;
              return P(function (t) {
                return to(t.index, r, r + o - 1);
              });
            },
            getAt: function (t) {
              return P(t)[0];
            },
            add: function (t, e) {
              S(t, function (t) {
                if ((v(t) && (t = U(t)), m(t))) {
                  var i,
                    r,
                    o,
                    c,
                    d = l[e];
                  d ? C(t, d) : A(f, t),
                    _(t, n.classes.slide),
                    (i = t),
                    (r = u(s, tC)),
                    (c = (o = X(i, 'img')).length)
                      ? o.forEach(function (t) {
                          a(t, 'load error', function () {
                            --c || r();
                          });
                        })
                      : r();
                }
              }),
                s(t_);
            },
            remove: function (t) {
              H(
                P(t).map(function (t) {
                  return t.slide;
                }),
              ),
                s(t_);
            },
            forEach: N,
            filter: P,
            style: function (t, e, n) {
              N(function (i) {
                i.style(t, e, n);
              });
            },
            getLength: function (t) {
              return t ? l.length : d.length;
            },
            isEnough: function () {
              return d.length > n.perPage;
            },
          };
        },
        Layout: function (t, e, n) {
          var i,
            r,
            o,
            s = tY(t),
            a = s.on,
            c = s.bind,
            l = s.emit,
            f = e.Slides,
            p = e.Direction.resolve,
            h = e.Elements,
            v = h.root,
            g = h.track,
            m = h.list,
            E = f.getAt,
            S = f.style;
          function y() {
            (i = n.direction === t5),
              M(v, 'maxWidth', Z(n.width)),
              M(g, p('paddingLeft'), _(!1)),
              M(g, p('paddingRight'), _(!0)),
              x(!0);
          }
          function x(t) {
            var e,
              s = j(v);
            (t || r.width !== s.width || r.height !== s.height) &&
              (M(
                g,
                'height',
                ((e = ''),
                i &&
                  ($((e = A()), 'height or heightRatio is missing.'),
                  (e = 'calc(' + e + ' - ' + _(!1) + ' - ' + _(!0) + ')')),
                e),
              ),
              S(p('marginRight'), Z(n.gap)),
              S('width', n.autoWidth ? null : Z(n.fixedWidth) || (i ? '' : C())),
              S('height', Z(n.fixedHeight) || (i ? (n.autoHeight ? null : C()) : A()), !0),
              (r = s),
              l(tL),
              o !== (o = O()) && (b(v, eG, o), l(tD, o)));
          }
          function _(t) {
            var e = n.padding,
              i = p(t ? 'right' : 'left');
            return (e && Z(e[i] || (d(e) ? 0 : e))) || '0px';
          }
          function A() {
            return Z(n.height || j(m).width * n.heightRatio);
          }
          function C() {
            var t = Z(n.gap);
            return 'calc((100%' + (t && ' + ' + t) + ')/' + (n.perPage || 1) + (t && ' - ' + t) + ')';
          }
          function L() {
            return j(m)[p('width')];
          }
          function T(t, e) {
            var n = E(t || 0);
            return n ? j(n.slide)[p('width')] + (e ? 0 : P()) : 0;
          }
          function w(t, e) {
            var n = E(t);
            return n ? tr(j(n.slide)[p('right')] - j(m)[p('left')]) + (e ? 0 : P()) : 0;
          }
          function N(e) {
            return w(t.length - 1) - w(0) + T(0, e);
          }
          function P() {
            var t = E(0);
            return (t && parseFloat(M(t.slide, p('marginRight')))) || 0;
          }
          function O() {
            return t.is(eY) || N(!0) > L();
          }
          return {
            mount: function () {
              y(), c(window, 'resize load', tK(u(l, tC))), a([tA, t_], y), a(tC, x);
            },
            resize: x,
            listSize: L,
            slideSize: T,
            sliderSize: N,
            totalSize: w,
            getPadding: function (t) {
              return parseFloat(M(g, p('padding' + (t ? 'Right' : 'Left')))) || 0;
            },
            isOverflow: O,
          };
        },
        Clones: function (t, e, n) {
          var i,
            r = tY(t),
            s = r.on,
            u = e.Elements,
            a = e.Slides,
            c = e.Direction.resolve,
            l = [];
          function f() {
            s(t_, d),
              s([tA, tC], h),
              (i = v()) &&
                ((function (e) {
                  var i = a.get().slice(),
                    r = i.length;
                  if (r) {
                    for (; i.length < e; ) x(i, i);
                    x(i.slice(-e), i.slice(0, e)).forEach(function (o, s) {
                      var c,
                        f = s < e,
                        d =
                          (_((c = o.slide.cloneNode(!0)), n.classes.clone),
                          (c.id = t.root.id + '-clone' + tl(s + 1)),
                          c);
                      f ? C(d, i[0].slide) : A(u.list, d), x(l, d), a.register(d, s - e + (f ? 0 : r), o.index);
                    });
                  }
                })(i),
                e.Layout.resize(!0));
          }
          function d() {
            p(), f();
          }
          function p() {
            H(l), o(l), r.destroy();
          }
          function h() {
            var t = v();
            i !== t && (i < t || !t) && r.emit(t_);
          }
          function v() {
            var i = n.clones;
            if (t.is(eB)) {
              if (g(i)) {
                var r = n[c('fixedWidth')] && e.Layout.slideSize(0);
                i = (r && ti(j(u.track)[c('width')] / r)) || (n[c('autoWidth')] && t.length) || 2 * n.perPage;
              }
            } else i = 0;
            return i;
          }
          return { mount: f, destroy: p };
        },
        Move: function (t, e, n) {
          var i,
            r = tY(t),
            o = r.on,
            s = r.emit,
            u = t.state.set,
            a = e.Layout,
            c = a.slideSize,
            l = a.getPadding,
            f = a.totalSize,
            d = a.listSize,
            p = a.sliderSize,
            h = e.Direction,
            v = h.resolve,
            m = h.orient,
            E = e.Elements,
            S = E.list,
            y = E.track;
          function x() {
            e.Controller.isBusy() || (e.Scroll.cancel(), b(t.index), e.Slides.update());
          }
          function b(t) {
            _(T(t, !0));
          }
          function _(n, i) {
            if (!t.is(eY)) {
              var r = i
                ? n
                : (function (n) {
                    if (t.is(eB)) {
                      var i = L(n),
                        r = i > e.Controller.getEnd();
                      (i < 0 || r) && (n = A(n, r));
                    }
                    return n;
                  })(n);
              M(S, 'transform', 'translate' + v('X') + '(' + r + 'px)'), n !== r && s(tU);
            }
          }
          function A(t, e) {
            var n = t - N(e),
              i = p();
            return t - m(i * (ti(tr(n) / i) || 1)) * (e ? 1 : -1);
          }
          function C() {
            _(w(), !0), i.cancel();
          }
          function L(t) {
            for (var n = e.Slides.get(), i = 0, r = 1 / 0, o = 0; o < n.length; o++) {
              var s = n[o].index,
                u = tr(T(s, !0) - t);
              if (u <= r) (r = u), (i = s);
              else break;
            }
            return i;
          }
          function T(e, i) {
            var r,
              o,
              s = m(f(e - 1) - ('center' === (r = n.focus) ? (d() - c(e, !0)) / 2 : +r * c(e) || 0));
            return i ? ((o = s), n.trimSpace && t.is(eU) && (o = ts(o, 0, m(p(!0) - d()))), o) : s;
          }
          function w() {
            var t = v('left');
            return j(S)[t] - j(y)[t] + m(l(!1));
          }
          function N(t) {
            return T(t ? e.Controller.getEnd() : 0, !!n.trimSpace);
          }
          return {
            mount: function () {
              (i = e.Transition), o([th, tL, tA, t_], x);
            },
            move: function (t, e, n, r) {
              var o, a;
              t !== e &&
                ((o = t > n), (a = m(A(w(), o))), o ? a >= 0 : a <= S[v('scrollWidth')] - j(y)[v('width')]) &&
                (C(), _(A(w(), t > n), !0)),
                u(4),
                s(tg, e, n, t),
                i.start(e, function () {
                  u(3), s(tm, e, n, t), r && r();
                });
            },
            jump: b,
            translate: _,
            shift: A,
            cancel: C,
            toIndex: L,
            toPosition: T,
            getPosition: w,
            getLimit: N,
            exceededLimit: function (t, e) {
              e = g(e) ? w() : e;
              var n = !0 !== t && m(e) < m(N(!1)),
                i = !1 !== t && m(e) > m(N(!0));
              return n || i;
            },
            reposition: x,
          };
        },
        Controller: function (t, e, n) {
          var i,
            r,
            o,
            s,
            a = tY(t),
            c = a.on,
            l = a.emit,
            f = e.Move,
            d = f.getPosition,
            p = f.getLimit,
            h = f.toPosition,
            m = e.Slides,
            E = m.isEnough,
            S = m.getLength,
            y = n.omitEnd,
            x = t.is(eB),
            b = t.is(eU),
            _ = u(N, !1),
            A = u(N, !0),
            C = n.start || 0,
            L = C;
          function T() {
            (r = S(!0)), (o = n.perMove), (s = n.perPage), (i = D());
            var t = ts(C, 0, y ? i : r - 1);
            t !== C && ((C = t), f.reposition());
          }
          function w() {
            i !== D() && l(tB);
          }
          function N(t, e) {
            var n = o || (I() ? 1 : s),
              r = P(C + n * (t ? -1 : 1), C, !(o || I()));
            return -1 === r && b && !(1 > tr(d() - p(!t))) ? (t ? 0 : i) : e ? r : O(r);
          }
          function P(e, u, a) {
            if (E() || I()) {
              var c = (function (e) {
                if (b && 'move' === n.trimSpace && e !== C)
                  for (var i = d(); i === h(e, !0) && to(e, 0, t.length - 1, !n.rewind); ) e < C ? --e : ++e;
                return e;
              })(e);
              c !== e && ((u = e), (e = c), (a = !1)),
                e < 0 || e > i
                  ? (e =
                      !o && (to(0, e, u, !0) || to(i, u, e, !0))
                        ? k(R(e))
                        : x
                        ? a
                          ? e < 0
                            ? -(r % s || s)
                            : r
                          : e
                        : n.rewind
                        ? e < 0
                          ? i
                          : 0
                        : -1)
                  : a && e !== u && (e = k(R(u) + (e < u ? -1 : 1)));
            } else e = -1;
            return e;
          }
          function O(t) {
            return x ? (t + r) % r || 0 : t;
          }
          function D() {
            for (var t = r - (I() || (x && o) ? 1 : s); y && t-- > 0; )
              if (h(r - 1, !0) !== h(t, !0)) {
                t++;
                break;
              }
            return ts(t, 0, r - 1);
          }
          function k(t) {
            return ts(I() ? t : s * t, 0, i);
          }
          function R(t) {
            return I() ? tt(t, i) : tn((t >= i ? r - 1 : t) / s);
          }
          function V(t) {
            t !== C && ((L = C), (C = t));
          }
          function I() {
            return !g(n.focus) || n.isNavigation;
          }
          function M() {
            return t.state.is([4, 5]) && !!n.waitForTransition;
          }
          return {
            mount: function () {
              T(), c([tA, t_, tB], T), c(tL, w);
            },
            go: function (t, e, n) {
              if (!M()) {
                var r = (function (t) {
                    var e = C;
                    if (v(t)) {
                      var n = t.match(/([+\-<>])(\d+)?/) || [],
                        r = n[1],
                        o = n[2];
                      '+' === r || '-' === r
                        ? (e = P(C + +('' + r + (+o || 1)), C))
                        : '>' === r
                        ? (e = o ? k(+o) : _(!0))
                        : '<' === r && (e = A(!0));
                    } else e = x ? t : ts(t, 0, i);
                    return e;
                  })(t),
                  o = O(r);
                o > -1 && (e || o !== C) && (V(o), f.move(r, o, L, n));
              }
            },
            scroll: function (t, n, r, o) {
              e.Scroll.scroll(t, n, r, function () {
                var t = O(f.toIndex(d()));
                V(y ? tt(t, i) : t), o && o();
              });
            },
            getNext: _,
            getPrev: A,
            getAdjacent: N,
            getEnd: D,
            setIndex: V,
            getIndex: function (t) {
              return t ? L : C;
            },
            toIndex: k,
            toPage: R,
            toDest: function (t) {
              var e = f.toIndex(t);
              return b ? ts(e, 0, i) : e;
            },
            hasFocus: I,
            isBusy: M,
          };
        },
        Arrows: function (t, e, n) {
          var i,
            r,
            o = tY(t),
            s = o.on,
            a = o.bind,
            c = o.emit,
            l = n.classes,
            f = n.i18n,
            d = e.Elements,
            p = e.Controller,
            h = d.arrows,
            v = d.track,
            g = h,
            m = d.prev,
            E = d.next,
            S = {};
          function y() {
            var t;
            (t = n.arrows) &&
              !(m && E) &&
              ((g = h || I('div', l.arrows)), (m = T(!0)), (E = T(!1)), (i = !0), A(g, [m, E]), h || C(g, v)),
              m &&
                E &&
                (O(S, { prev: m, next: E }),
                G(g, t ? '' : 'none'),
                _(g, (r = eE + '--' + n.direction)),
                t &&
                  (s([th, tm, t_, tO, tB], w),
                  a(E, 'click', u(L, '>')),
                  a(m, 'click', u(L, '<')),
                  w(),
                  V([m, E], t9, v.id),
                  c(tR, m, E))),
              s(tA, x);
          }
          function x() {
            b(), y();
          }
          function b() {
            o.destroy(), q(g, r), i ? (H(h ? [m, E] : g), (m = E = null)) : R([m, E], el);
          }
          function L(t) {
            p.go(t, !0);
          }
          function T(t) {
            return U(
              '<button class="' +
                l.arrow +
                ' ' +
                (t ? l.prev : l.next) +
                '" type="button"><svg xmlns="' +
                eX +
                '" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' +
                (n.arrowPath || eq) +
                '" />',
            );
          }
          function w() {
            if (m && E) {
              var e = t.index,
                n = p.getPrev(),
                i = p.getNext(),
                r = n > -1 && e < n ? f.last : f.prev,
                o = i > -1 && e > i ? f.first : f.next;
              (m.disabled = n < 0), (E.disabled = i < 0), V(m, en, r), V(E, en, o), c(tV, m, E, n, i);
            }
          }
          return { arrows: S, mount: y, destroy: b, update: w };
        },
        Autoplay: function (t, e, n) {
          var i,
            r,
            o = tY(t),
            s = o.on,
            u = o.bind,
            a = o.emit,
            c = tX(n.interval, t.go.bind(t, '>'), function (t) {
              var e = f.bar;
              e && M(e, 'width', 100 * t + '%'), a(tW, t);
            }),
            l = c.isPaused,
            f = e.Elements,
            d = e.Elements,
            p = d.root,
            h = d.toggle,
            v = n.autoplay,
            g = 'pause' === v;
          function m() {
            l() && e.Slides.isEnough() && (c.start(!n.resetProgress), (r = i = g = !1), y(), a(tz));
          }
          function E(t) {
            void 0 === t && (t = !0), (g = !!t), y(), l() || (c.pause(), a(tF));
          }
          function S() {
            g || (i || r ? E(!1) : m());
          }
          function y() {
            h && (b(h, eD, !g), V(h, en, n.i18n[g ? 'play' : 'pause']));
          }
          function x(t) {
            var i = e.Slides.getAt(t);
            c.set((i && +W(i.slide, eK)) || n.interval);
          }
          return {
            mount: function () {
              v &&
                (n.pauseOnHover &&
                  u(p, 'mouseenter mouseleave', function (t) {
                    (i = 'mouseenter' === t.type), S();
                  }),
                n.pauseOnFocus &&
                  u(p, 'focusin focusout', function (t) {
                    (r = 'focusin' === t.type), S();
                  }),
                h &&
                  u(h, 'click', function () {
                    g ? m() : E(!0);
                  }),
                s([tg, tP, t_], c.rewind),
                s(tg, x),
                h && V(h, t9, f.track.id),
                g || m(),
                y());
            },
            destroy: c.cancel,
            play: m,
            pause: E,
            isPaused: l,
          };
        },
        Cover: function (t, e, n) {
          var i = tY(t).on;
          function r(t) {
            e.Slides.forEach(function (e) {
              var n = w(e.container || e.slide, 'img');
              n && n.src && o(t, n, e);
            });
          }
          function o(t, e, n) {
            n.style('background', t ? 'center/cover no-repeat url("' + e.src + '")' : '', !0), G(e, t ? 'none' : '');
          }
          return {
            mount: function () {
              n.cover && (i(tj, u(o, !0)), i([th, tA, t_], u(r, !0)));
            },
            destroy: u(r, !1),
          };
        },
        Scroll: function (t, e, n) {
          var i,
            r,
            o = tY(t),
            s = o.on,
            a = o.emit,
            c = t.state.set,
            l = e.Move,
            f = l.getPosition,
            d = l.getLimit,
            p = l.exceededLimit,
            h = l.translate,
            v = t.is(eU),
            g = 1;
          function m(t, n, o, s, d) {
            var h = f();
            if ((y(), o && (!v || !p()))) {
              var m = e.Layout.sliderSize(),
                x = tu(t) * m * tn(tr(t) / m) || 0;
              t = l.toPosition(e.Controller.toDest(t % m)) + x;
            }
            var b = 1 > tr(h - t);
            (g = 1),
              (n = b ? 0 : n || te(tr(t - h) / 1.5, 800)),
              (r = s),
              (i = tX(n, E, u(S, h, t, d), 1)),
              c(5),
              a(tP),
              i.start();
          }
          function E() {
            c(3), r && r(), a(tO);
          }
          function S(t, e, i, o) {
            var s,
              u = f(),
              a = (t + (e - t) * ((s = n.easingFunc) ? s(o) : 1 - Math.pow(1 - o, 4)) - u) * g;
            h(u + a), v && !i && p() && ((g *= 0.6), 10 > tr(a) && m(d(p(!0)), 600, !1, r, !0));
          }
          function y() {
            i && i.cancel();
          }
          function x() {
            i && !i.isPaused() && (y(), E());
          }
          return {
            mount: function () {
              s(tg, y), s([tA, t_], x);
            },
            destroy: y,
            scroll: m,
            cancel: x,
          };
        },
        Drag: function (t, e, n) {
          var i,
            r,
            o,
            s,
            u,
            a,
            l,
            f,
            p = tY(t),
            h = p.on,
            v = p.emit,
            g = p.bind,
            m = p.unbind,
            E = t.state,
            S = e.Move,
            y = e.Scroll,
            x = e.Controller,
            b = e.Elements.track,
            _ = e.Media.reduce,
            A = e.Direction,
            C = A.resolve,
            T = A.orient,
            w = S.getPosition,
            N = S.exceededLimit,
            P = !1;
          function O() {
            var t = n.drag;
            (l = !t), (s = 'free' === t);
          }
          function D(t) {
            if (((a = !1), !l)) {
              var e,
                i,
                r = W(t);
              (e = t.target),
                (i = n.noDrag),
                L(e, '.' + e_ + ', .' + eS) ||
                  (i && L(e, i)) ||
                  (!r && t.button) ||
                  (x.isBusy()
                    ? B(t, !0)
                    : ((f = r ? b : window),
                      (u = E.is([4, 5])),
                      (o = null),
                      g(f, ej, k, eZ),
                      g(f, eH, R, eZ),
                      S.cancel(),
                      y.cancel(),
                      I(t)));
            }
          }
          function k(e) {
            if ((E.is(6) || (E.set(6), v(tT)), e.cancelable)) {
              if (u) {
                S.translate(i + M(e) / (P && t.is(eU) ? 5 : 1));
                var r,
                  o,
                  s,
                  c,
                  l = G(e) > 200,
                  f = P !== (P = N());
                (l || f) && I(e), (a = !0), v(tw), B(e);
              } else
                tr(M(e)) > tr(M(e, !0)) &&
                  ((s = ((o = d((r = n.dragMinThreshold))) && r.mouse) || 0),
                  (c = (o ? r.touch : +r) || 10),
                  (u = tr(M(e)) > (W(e) ? c : s)),
                  B(e));
            }
          }
          function R(i) {
            var r, o, a, c;
            E.is(6) && (E.set(3), v(tN)),
              u &&
                ((r = o =
                  (function (e) {
                    if (t.is(eB) || !P) {
                      var n = G(e);
                      if (n && n < 200) return M(e) / n;
                    }
                    return 0;
                  })(i)),
                (a =
                  w() +
                  tu(r) * tt(tr(r) * (n.flickPower || 600), s ? 1 / 0 : e.Layout.listSize() * (n.flickMaxPages || 1))),
                (c = n.rewind && n.rewindByDrag),
                _(!1),
                s
                  ? x.scroll(a, 0, n.snap)
                  : t.is(eY)
                  ? x.go(0 > T(tu(o)) ? (c ? '<' : '-') : c ? '>' : '+')
                  : t.is(eU) && P && c
                  ? x.go(N(!0) ? '>' : '<')
                  : x.go(x.toDest(a), !0),
                _(!0),
                B(i)),
              m(f, ej, k),
              m(f, eH, R),
              (u = !1);
          }
          function V(t) {
            !l && a && B(t, !0);
          }
          function I(t) {
            (o = r), (r = t), (i = w());
          }
          function M(t, e) {
            return z(t, e) - z((r === t && o) || r, e);
          }
          function G(t) {
            return K(t) - K((r === t && o) || r);
          }
          function z(t, e) {
            return (W(t) ? t.changedTouches[0] : t)['page' + C(e ? 'Y' : 'X')];
          }
          function W(t) {
            return 'undefined' != typeof TouchEvent && t instanceof TouchEvent;
          }
          return {
            mount: function () {
              g(b, ej, c, eZ),
                g(b, eH, c, eZ),
                g(b, eF, D, eZ),
                g(b, 'click', V, { capture: !0 }),
                g(b, 'dragstart', B),
                h([th, tA], O);
            },
            disable: function (t) {
              l = t;
            },
            isDragging: function () {
              return u;
            },
          };
        },
        Keyboard: function (t, e, n) {
          var i,
            r,
            o = tY(t),
            s = o.on,
            u = o.bind,
            c = o.unbind,
            l = t.root,
            f = e.Direction.resolve;
          function d() {
            var t = n.keyboard;
            t && u((i = 'global' === t ? window : l), e$, v);
          }
          function p() {
            c(i, e$);
          }
          function h() {
            var t = r;
            (r = !0),
              a(function () {
                r = t;
              });
          }
          function v(e) {
            if (!r) {
              var n = eQ(e);
              n === f(tJ) ? t.go('<') : n === f(tQ) && t.go('>');
            }
          }
          return {
            mount: function () {
              d(), s(tA, p), s(tA, d), s(tg, h);
            },
            destroy: p,
            disable: function (t) {
              r = t;
            },
          };
        },
        LazyLoad: function (t, e, n) {
          var i = tY(t),
            r = i.on,
            s = i.off,
            a = i.bind,
            c = i.emit,
            l = 'sequential' === n.lazyLoad,
            f = [tm, tO],
            d = [];
          function p() {
            o(d),
              e.Slides.forEach(function (t) {
                X(t.slide, e4).forEach(function (e) {
                  var i = W(e, e0),
                    r = W(e, e1);
                  if (i !== e.src || r !== e.srcset) {
                    var o = n.classes.spinner,
                      s = e.parentElement,
                      u = w(s, '.' + o) || I('span', o, s);
                    d.push([e, t, u]), e.src || G(e, 'none');
                  }
                });
              }),
              l ? m() : (s(f), r(f, h), h());
          }
          function h() {
            (d = d.filter(function (e) {
              var i = n.perPage * ((n.preloadPages || 1) + 1) - 1;
              return !e[1].isWithin(t.index, i) || v(e);
            })).length || s(f);
          }
          function v(t) {
            var e = t[0];
            _(t[1].slide, eI),
              a(e, 'load error', u(g, t)),
              V(e, 'src', W(e, e0)),
              V(e, 'srcset', W(e, e1)),
              R(e, e0),
              R(e, e1);
          }
          function g(t, e) {
            var n = t[0],
              i = t[1];
            q(i.slide, eI), 'error' !== e.type && (H(t[2]), G(n, ''), c(tj, n, i), c(tC)), l && m();
          }
          function m() {
            d.length && v(d.shift());
          }
          return {
            mount: function () {
              n.lazyLoad && (p(), r(t_, p));
            },
            destroy: u(o, d),
            check: h,
          };
        },
        Pagination: function (t, e, n) {
          var i,
            r,
            a = tY(t),
            c = a.on,
            l = a.emit,
            f = a.bind,
            d = e.Slides,
            p = e.Elements,
            h = e.Controller,
            v = h.hasFocus,
            g = h.getIndex,
            m = h.go,
            E = e.Direction.resolve,
            S = p.pagination,
            y = [];
          function x() {
            i && (H(S ? s(i.children) : i), q(i, r), o(y), (i = null)), a.destroy();
          }
          function b(t) {
            m('>' + t, !0);
          }
          function A(t, e) {
            var n = y.length,
              i = eQ(e),
              r = C(),
              o = -1;
            i === E(tQ, !1, r)
              ? (o = ++t % n)
              : i === E(tJ, !1, r)
              ? (o = (--t + n) % n)
              : 'Home' === i
              ? (o = 0)
              : 'End' === i && (o = n - 1);
            var s = y[o];
            s && (z(s.button), m('>' + o), B(e, !0));
          }
          function C() {
            return n.paginationDirection || n.direction;
          }
          function L(t) {
            return y[h.toPage(t)];
          }
          function T() {
            var t = L(g(!0)),
              e = L(g());
            if (t) {
              var n = t.button;
              q(n, eD), R(n, ee), V(n, t8, -1);
            }
            if (e) {
              var r = e.button;
              _(r, eD), V(r, ee, !0), V(r, t8, '');
            }
            l(tM, { list: i, items: y }, t, e);
          }
          return {
            items: y,
            mount: function e() {
              x(), c([tA, t_, tB], e);
              var o = n.pagination;
              S && G(S, o ? '' : 'none'),
                o &&
                  (c([tg, tP, tO], T),
                  (function () {
                    var e = t.length,
                      o = n.classes,
                      s = n.i18n,
                      a = n.perPage,
                      c = v() ? h.getEnd() + 1 : ti(e / a);
                    _((i = S || I('ul', o.pagination, p.track.parentElement)), (r = eb + '--' + C())),
                      V(i, t6, 'tablist'),
                      V(i, en, s.select),
                      V(i, eo, C() === t5 ? 'vertical' : '');
                    for (var l = 0; l < c; l++) {
                      var g = I('li', null, i),
                        m = I('button', { class: o.page, type: 'button' }, g),
                        E = d.getIn(l).map(function (t) {
                          return t.slide.id;
                        }),
                        x = !v() && a > 1 ? s.pageX : s.slideX;
                      f(m, 'click', u(b, l)),
                        n.paginationKeyboard && f(m, 'keydown', u(A, l)),
                        V(g, t6, 'presentation'),
                        V(m, t6, 'tab'),
                        V(m, t9, E.join(' ')),
                        V(m, en, tc(x, l + 1)),
                        V(m, t8, -1),
                        y.push({ li: g, button: m, page: l });
                    }
                  })(),
                  T(),
                  l(tI, { list: i, items: y }, L(t.index)));
            },
            destroy: x,
            getAt: L,
            update: T,
          };
        },
        Sync: function (t, e, n) {
          var i = n.isNavigation,
            r = n.slideFocus,
            s = [];
          function a() {
            var e, n;
            t.splides.forEach(function (e) {
              e.isParent || (l(t, e.splide), l(e.splide, t));
            }),
              i && ((n = (e = tY(t)).on)(tE, d), n(tH, p), n([th, tA], f), s.push(e), e.emit(tG, t.splides));
          }
          function c() {
            s.forEach(function (t) {
              t.destroy();
            }),
              o(s);
          }
          function l(t, e) {
            var n = tY(t);
            n.on(tg, function (t, n, i) {
              e.go(e.is(eB) ? i : t);
            }),
              s.push(n);
          }
          function f() {
            V(e.Elements.list, eo, n.direction === t5 ? 'vertical' : '');
          }
          function d(e) {
            t.go(e.index);
          }
          function p(t, e) {
            y(e5, eQ(e)) && (d(t), B(e));
          }
          return {
            setup: u(e.Media.set, { slideFocus: g(r) ? i : r }, !0),
            mount: a,
            destroy: c,
            remount: function () {
              c(), a();
            },
          };
        },
        Wheel: function (t, e, n) {
          var i = tY(t).bind,
            r = 0;
          function o(i) {
            if (i.cancelable) {
              var o = i.deltaY,
                s = o < 0,
                u = K(i),
                a = n.wheelMinThreshold || 0,
                c = n.wheelSleep || 0;
              tr(o) > a && u - r > c && (t.go(s ? '<' : '>'), (r = u)),
                (!n.releaseWheel || t.state.is(4) || -1 !== e.Controller.getAdjacent(s)) && B(i);
            }
          }
          return {
            mount: function () {
              n.wheel && i(e.Elements.track, 'wheel', o, eZ);
            },
          };
        },
        Live: function (t, e, n) {
          var i = tY(t).on,
            r = e.Elements.track,
            o = n.live && !n.isNavigation,
            s = I('span', eP),
            a = tX(90, u(c, !1));
          function c(t) {
            V(r, ea, t), t ? (A(r, s), a.start()) : (H(s), a.cancel());
          }
          function l(t) {
            o && V(r, eu, t ? 'off' : 'polite');
          }
          return {
            mount: function () {
              o &&
                (l(!e.Autoplay.isPaused()),
                V(r, ec, !0),
                (s.textContent = '…'),
                i(tz, u(l, !0)),
                i(tF, u(l, !1)),
                i([tm, tO], u(c, !0)));
            },
            disable: l,
            destroy: function () {
              R(r, [eu, ec, ea]), H(s);
            },
          };
        },
      }),
      e3 = {
        type: 'slide',
        role: 'region',
        speed: 400,
        perPage: 1,
        cloneStatus: !0,
        arrows: !0,
        pagination: !0,
        paginationKeyboard: !0,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        drag: !0,
        direction: 'ltr',
        trimSpace: !0,
        focusableNodes: 'a, button, textarea, input, select, iframe',
        live: !0,
        classes: eW,
        i18n: {
          prev: 'Previous slide',
          next: 'Next slide',
          first: 'Go to first slide',
          last: 'Go to last slide',
          slideX: 'Go to slide %s',
          pageX: 'Go to page %s',
          play: 'Start autoplay',
          pause: 'Pause autoplay',
          carousel: 'carousel',
          slide: 'slide',
          select: 'Select a slide to show',
          slideLabel: '%s of %s',
        },
        reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: 'pause' },
      };
    function e6(t, e, n) {
      var i = e.Slides;
      function r() {
        i.forEach(function (t) {
          t.style('transform', 'translateX(-' + 100 * t.index + '%)');
        });
      }
      return {
        mount: function () {
          tY(t).on([th, t_], r);
        },
        start: function (t, e) {
          i.style('transition', 'opacity ' + n.speed + 'ms ' + n.easing), a(e);
        },
        cancel: c,
      };
    }
    function e8(t, e, n) {
      var i,
        r = e.Move,
        o = e.Controller,
        s = e.Scroll,
        a = e.Elements.list,
        c = u(M, a, 'transition');
      function l() {
        c(''), s.cancel();
      }
      return {
        mount: function () {
          tY(t).bind(a, 'transitionend', function (t) {
            t.target === a && i && (l(), i());
          });
        },
        start: function (e, u) {
          var a = r.toPosition(e, !0),
            l = r.getPosition(),
            f = (function (e) {
              var i = n.rewindSpeed;
              if (t.is(eU) && i) {
                var r = o.getIndex(!0),
                  s = o.getEnd();
                if ((0 === r && e >= s) || (r >= s && 0 === e)) return i;
              }
              return n.speed;
            })(e);
          tr(a - l) >= 1 && f >= 1
            ? n.useScroll
              ? s.scroll(a, f, !1, u)
              : (c('transform ' + f + 'ms ' + n.easing), r.translate(a, !0), (i = u))
            : (r.jump(e), u());
        },
        cancel: l,
      };
    }
    var e7 = (function () {
      function t(e, n) {
        (this.event = tY()),
          (this.Components = {}),
          (this.state = tq(1)),
          (this.splides = []),
          (this._o = {}),
          (this._E = {});
        var i = v(e) ? Y(document, e) : e;
        $(i, i + ' is invalid.'),
          (this.root = i),
          (n = D({ label: W(i, en) || '', labelledby: W(i, ei) || '' }, e3, t.defaults, n || {}));
        try {
          D(n, JSON.parse(W(i, Q)));
        } catch (t) {
          $(!1, 'Invalid JSON');
        }
        this._o = Object.create(D({}, n));
      }
      var e,
        n = t.prototype;
      return (
        (n.mount = function (t, e) {
          var n = this,
            i = this.state,
            r = this.Components;
          return (
            $(i.is([1, 7]), 'Already mounted!'),
            i.set(1),
            (this._C = r),
            (this._T = e || this._T || (this.is(eY) ? e6 : e8)),
            (this._E = t || this._E),
            P(O({}, e2, this._E, { Transition: this._T }), function (t, e) {
              var i = t(n, r, n._o);
              (r[e] = i), i.setup && i.setup();
            }),
            P(r, function (t) {
              t.mount && t.mount();
            }),
            this.emit(th),
            _(this.root, eO),
            i.set(3),
            this.emit(tv),
            this
          );
        }),
        (n.sync = function (t) {
          return (
            this.splides.push({ splide: t }),
            t.splides.push({ splide: this, isParent: !0 }),
            this.state.is(3) && (this._C.Sync.remount(), t.Components.Sync.remount()),
            this
          );
        }),
        (n.go = function (t) {
          return this._C.Controller.go(t), this;
        }),
        (n.on = function (t, e) {
          return this.event.on(t, e), this;
        }),
        (n.off = function (t) {
          return this.event.off(t), this;
        }),
        (n.emit = function (t) {
          var e;
          return (e = this.event).emit.apply(e, [t].concat(s(arguments, 1))), this;
        }),
        (n.add = function (t, e) {
          return this._C.Slides.add(t, e), this;
        }),
        (n.remove = function (t) {
          return this._C.Slides.remove(t), this;
        }),
        (n.is = function (t) {
          return this._o.type === t;
        }),
        (n.refresh = function () {
          return this.emit(t_), this;
        }),
        (n.destroy = function (t) {
          void 0 === t && (t = !0);
          var e = this.event,
            n = this.state;
          return (
            n.is(1)
              ? tY(this).on(tv, this.destroy.bind(this, t))
              : (P(
                  this._C,
                  function (e) {
                    e.destroy && e.destroy(t);
                  },
                  !0,
                ),
                e.emit(tk),
                e.destroy(),
                t && o(this.splides),
                n.set(7)),
            this
          );
        }),
        i(t.prototype, [
          {
            key: 'options',
            get: function () {
              return this._o;
            },
            set: function (t) {
              this._C.Media.set(t, !0, !0);
            },
          },
          {
            key: 'length',
            get: function () {
              return this._C.Slides.getLength(!0);
            },
          },
          {
            key: 'index',
            get: function () {
              return this._C.Controller.getIndex();
            },
          },
        ]),
        e && i(t, e),
        Object.defineProperty(t, 'prototype', { writable: !1 }),
        t
      );
    })();
    (e7.defaults = {}),
      (e7.STATES = { CREATED: 1, MOUNTED: 2, IDLE: 3, MOVING: 4, SCROLLING: 5, DRAGGING: 6, DESTROYED: 7 });
    var e9 = { listTag: 'ul', slideTag: 'li' },
      nt = (function () {
        function t(t, e) {
          (this.styles = {}), (this.id = t), (this.options = e);
        }
        var e = t.prototype;
        return (
          (e.rule = function (t, e, n, i) {
            i = i || 'default';
            var r = (this.styles[i] = this.styles[i] || {});
            (r[t] = r[t] || {})[e] = n;
          }),
          (e.build = function () {
            var t = this,
              e = '';
            return (
              this.styles.default && (e += this.buildSelectors(this.styles.default)),
              Object.keys(this.styles)
                .sort(function (e, n) {
                  return 'min' === t.options.mediaQuery ? +e - +n : +n - +e;
                })
                .forEach(function (n) {
                  'default' !== n &&
                    (e += '@media screen and (max-width: ' + n + 'px) {' + t.buildSelectors(t.styles[n]) + '}');
                }),
              e
            );
          }),
          (e.buildSelectors = function (t) {
            var e = this,
              n = '';
            return (
              P(t, function (t, i) {
                (i = ('#' + e.id + ' ' + i).trim()),
                  (n += i + ' {'),
                  P(t, function (t, e) {
                    (t || 0 === t) && (n += e + ': ' + t + ';');
                  }),
                  (n += '}');
              }),
              n
            );
          }),
          t
        );
      })(),
      ne = (function () {
        function t(t, e, n, i) {
          (this.slides = []),
            (this.options = {}),
            (this.breakpoints = []),
            D(e3, i || {}),
            D(D(this.options, e3), e || {}),
            (this.contents = t),
            (this.config = O({}, e9, n || {})),
            (this.id = this.config.id || td('splide')),
            (this.Style = new nt(this.id, this.options)),
            (this.Direction = t3(null, null, this.options)),
            $(this.contents.length, 'Provide at least 1 content.'),
            this.init();
        }
        t.clean = function (t) {
          var e = tY(t).on,
            n = t.root,
            i = X(n, '.' + eg);
          e(th, function () {
            H(w(n, 'style'));
          }),
            H(i);
        };
        var e = t.prototype;
        return (
          (e.init = function () {
            this.parseBreakpoints(),
              this.initSlides(),
              this.registerRootStyles(),
              this.registerTrackStyles(),
              this.registerSlideStyles(),
              this.registerListStyles();
          }),
          (e.initSlides = function () {
            var t = this;
            x(
              this.slides,
              this.contents.map(function (e, n) {
                ((e = v(e) ? { html: e } : e).styles = e.styles || {}), (e.attrs = e.attrs || {}), t.cover(e);
                var i = t.options.classes.slide + ' ' + (0 === n ? eD : '');
                return (
                  O(e.attrs, { class: (i + ' ' + (e.attrs.class || '')).trim(), style: t.buildStyles(e.styles) }), e
                );
              }),
            ),
              this.isLoop() && this.generateClones(this.slides);
          }),
          (e.registerRootStyles = function () {
            var t = this;
            this.breakpoints.forEach(function (e) {
              var n = e[0],
                i = e[1];
              t.Style.rule(' ', 'max-width', Z(i.width), n);
            });
          }),
          (e.registerTrackStyles = function () {
            var t = this,
              e = this.Style,
              n = '.' + ep;
            this.breakpoints.forEach(function (i) {
              var r = i[0],
                o = i[1];
              e.rule(n, t.resolve('paddingLeft'), t.cssPadding(o, !1), r),
                e.rule(n, t.resolve('paddingRight'), t.cssPadding(o, !0), r),
                e.rule(n, 'height', t.cssTrackHeight(o), r);
            });
          }),
          (e.registerListStyles = function () {
            var t = this,
              e = this.Style,
              n = '.' + eh;
            this.breakpoints.forEach(function (i) {
              var r = i[0],
                o = i[1];
              e.rule(n, 'transform', t.buildTranslate(o), r),
                t.cssSlideHeight(o) || e.rule(n, 'aspect-ratio', t.cssAspectRatio(o), r);
            });
          }),
          (e.registerSlideStyles = function () {
            var t = this,
              e = this.Style,
              n = '.' + ev;
            this.breakpoints.forEach(function (i) {
              var r = i[0],
                o = i[1];
              e.rule(n, 'width', t.cssSlideWidth(o), r),
                e.rule(n, 'height', t.cssSlideHeight(o) || '100%', r),
                e.rule(n, t.resolve('marginRight'), Z(o.gap) || '0px', r),
                e.rule(n + ' > img', 'display', o.cover ? 'none' : 'inline', r);
            });
          }),
          (e.buildTranslate = function (t) {
            var e = this.Direction,
              n = e.resolve,
              i = e.orient,
              r = [];
            return (
              r.push(this.cssOffsetClones(t)),
              r.push(this.cssOffsetGaps(t)),
              this.isCenter(t) && (r.push(this.buildCssValue(i(-50), '%')), r.push.apply(r, this.cssOffsetCenter(t))),
              r
                .filter(Boolean)
                .map(function (t) {
                  return 'translate' + n('X') + '(' + t + ')';
                })
                .join(' ')
            );
          }),
          (e.cssOffsetClones = function (t) {
            var e = this.Direction,
              n = e.resolve,
              i = e.orient,
              r = this.getCloneCount();
            if (this.isFixedWidth(t)) {
              var o = this.parseCssValue(t[n('fixedWidth')]),
                s = o.value,
                u = o.unit;
              return this.buildCssValue(i(s) * r, u);
            }
            return i((100 * r) / t.perPage) + '%';
          }),
          (e.cssOffsetCenter = function (t) {
            var e = this.Direction,
              n = e.resolve,
              i = e.orient;
            if (this.isFixedWidth(t)) {
              var r = this.parseCssValue(t[n('fixedWidth')]),
                o = r.value,
                s = r.unit;
              return [this.buildCssValue(i(o / 2), s)];
            }
            var u = [],
              a = t.perPage,
              c = t.gap;
            if ((u.push(i(50 / a) + '%'), c)) {
              var l = this.parseCssValue(c),
                f = l.value,
                d = l.unit;
              u.push(this.buildCssValue(i((f / a - f) / 2), d));
            }
            return u;
          }),
          (e.cssOffsetGaps = function (t) {
            var e = this.getCloneCount();
            if (e && t.gap) {
              var n = this.Direction.orient,
                i = this.parseCssValue(t.gap),
                r = i.value,
                o = i.unit;
              if (this.isFixedWidth(t)) return this.buildCssValue(n(r * e), o);
              var s = t.perPage;
              return this.buildCssValue(n((e / s) * r), o);
            }
            return '';
          }),
          (e.resolve = function (t) {
            return ta(this.Direction.resolve(t));
          }),
          (e.cssPadding = function (t, e) {
            var n = t.padding,
              i = this.Direction.resolve(e ? 'right' : 'left', !0);
            return (n && Z(n[i] || (d(n) ? 0 : n))) || '0px';
          }),
          (e.cssTrackHeight = function (t) {
            var e = '';
            return (
              this.isVertical() &&
                ($((e = this.cssHeight(t)), '"height" is missing.'),
                (e = 'calc(' + e + ' - ' + this.cssPadding(t, !1) + ' - ' + this.cssPadding(t, !0) + ')')),
              e
            );
          }),
          (e.cssHeight = function (t) {
            return Z(t.height);
          }),
          (e.cssSlideWidth = function (t) {
            return t.autoWidth ? '' : Z(t.fixedWidth) || (this.isVertical() ? '' : this.cssSlideSize(t));
          }),
          (e.cssSlideHeight = function (t) {
            return (
              Z(t.fixedHeight) || (this.isVertical() ? (t.autoHeight ? '' : this.cssSlideSize(t)) : this.cssHeight(t))
            );
          }),
          (e.cssSlideSize = function (t) {
            var e = Z(t.gap);
            return 'calc((100%' + (e && ' + ' + e) + ')/' + (t.perPage || 1) + (e && ' - ' + e) + ')';
          }),
          (e.cssAspectRatio = function (t) {
            var e = t.heightRatio;
            return e ? '' + 1 / e : '';
          }),
          (e.buildCssValue = function (t, e) {
            return '' + t + e;
          }),
          (e.parseCssValue = function (t) {
            return v(t)
              ? { value: parseFloat(t) || 0, unit: t.replace(/\d*(\.\d*)?/, '') || 'px' }
              : { value: t, unit: 'px' };
          }),
          (e.parseBreakpoints = function () {
            var t = this,
              e = this.options.breakpoints;
            this.breakpoints.push(['default', this.options]),
              e &&
                P(e, function (e, n) {
                  t.breakpoints.push([n, D(D({}, t.options), e)]);
                });
          }),
          (e.isFixedWidth = function (t) {
            return !!t[this.Direction.resolve('fixedWidth')];
          }),
          (e.isLoop = function () {
            return this.options.type === eB;
          }),
          (e.isCenter = function (t) {
            if ('center' === t.focus) {
              if (this.isLoop()) return !0;
              if (this.options.type === eU) return !this.options.trimSpace;
            }
            return !1;
          }),
          (e.isVertical = function () {
            return this.options.direction === t5;
          }),
          (e.buildClasses = function () {
            var t = this.options;
            return [
              ed,
              ed + '--' + t.type,
              ed + '--' + t.direction,
              t.drag && ed + '--draggable',
              t.isNavigation && ed + '--nav',
              eD,
              !this.config.hidden && 'is-rendered',
            ]
              .filter(Boolean)
              .join(' ');
          }),
          (e.buildAttrs = function (t) {
            var e = '';
            return (
              P(t, function (t, n) {
                e += t ? ' ' + ta(n) + '="' + t + '"' : '';
              }),
              e.trim()
            );
          }),
          (e.buildStyles = function (t) {
            var e = '';
            return (
              P(t, function (t, n) {
                e += ' ' + ta(n) + ':' + t + ';';
              }),
              e.trim()
            );
          }),
          (e.renderSlides = function () {
            var t = this,
              e = this.config.slideTag;
            return this.slides
              .map(function (n) {
                return '<' + e + ' ' + t.buildAttrs(n.attrs) + '>' + (n.html || '') + '</' + e + '>';
              })
              .join('');
          }),
          (e.cover = function (t) {
            var e = t.styles,
              n = t.html;
            if (this.options.cover && !this.options.lazyLoad) {
              var i = (void 0 === n ? '' : n).match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);
              i && i[2] && (e.background = "center/cover no-repeat url('" + i[2] + "')");
            }
          }),
          (e.generateClones = function (t) {
            for (var e = this.options.classes, n = this.getCloneCount(), i = t.slice(); i.length < n; ) x(i, i);
            x(i.slice(-n).reverse(), i.slice(0, n)).forEach(function (i, r) {
              var o = O({}, i.attrs, { class: i.attrs.class + ' ' + e.clone }),
                s = O({}, i, { attrs: o });
              r < n ? t.unshift(s) : t.push(s);
            });
          }),
          (e.getCloneCount = function () {
            if (this.isLoop()) {
              var t = this.options;
              return t.clones
                ? t.clones
                : te.apply(
                    void 0,
                    this.breakpoints.map(function (t) {
                      return t[1].perPage;
                    }),
                  ) *
                    ((t.flickMaxPages || 1) + 1);
            }
            return 0;
          }),
          (e.renderArrows = function () {
            return (
              '<div class="' +
              this.options.classes.arrows +
              '">' +
              this.renderArrow(!0) +
              this.renderArrow(!1) +
              '</div>'
            );
          }),
          (e.renderArrow = function (t) {
            var e = this.options,
              n = e.classes,
              i = e.i18n,
              r = { class: n.arrow + ' ' + (t ? n.prev : n.next), type: 'button', ariaLabel: t ? i.prev : i.next };
            return (
              '<button ' +
              this.buildAttrs(r) +
              '><svg xmlns="' +
              eX +
              '" viewBox="0 0 40 40" width="40" height="40"><path d="' +
              (this.options.arrowPath || eq) +
              '" /></svg></button>'
            );
          }),
          (e.html = function () {
            var t = this.config,
              e = t.rootClass,
              n = t.listTag,
              i = t.arrows,
              r = t.beforeTrack,
              o = t.afterTrack,
              s = t.slider,
              u = t.beforeSlider,
              a = t.afterSlider,
              c = '';
            return (
              (c +=
                '<div id="' +
                this.id +
                '" class="' +
                this.buildClasses() +
                ' ' +
                (e || '') +
                '"><style>' +
                this.Style.build() +
                '</style>'),
              s && (c += (u || '') + '<div class="splide__slider">'),
              (c += r || ''),
              i && (c += this.renderArrows()),
              (c +=
                '<div class="splide__track"><' +
                n +
                ' class="splide__list">' +
                this.renderSlides() +
                '</' +
                n +
                '></div>' +
                (o || '')),
              s && (c += '</div>' + (a || '')),
              (c += '</div>')
            );
          }),
          t
        );
      })();
  });
})();
