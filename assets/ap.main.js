(() => {
  function e(e, t, r, n) {
    Object.defineProperty(e, t, { get: r, set: n, enumerable: !0, configurable: !0 });
  }
  var t = globalThis,
    r = {},
    n = {},
    o = t.parcelRequirece54;
  null == o &&
    (((o = function (e) {
      if (e in r) return r[e].exports;
      if (e in n) {
        var t = n[e];
        delete n[e];
        var o = { id: e, exports: {} };
        return (r[e] = o), t.call(o.exports, o, o.exports), o.exports;
      }
      var a = Error("Cannot find module '" + e + "'");
      throw ((a.code = 'MODULE_NOT_FOUND'), a);
    }).register = function (e, t) {
      n[e] = t;
    }),
    (t.parcelRequirece54 = o));
  var a = o.register;
  a('juxiN', function (t, r) {
    e(
      t.exports,
      'register',
      () => n,
      (e) => (n = e),
    ),
      e(
        t.exports,
        'resolve',
        () => o,
        (e) => (o = e),
      );
    var n,
      o,
      a = new Map();
    (n = function (e, t) {
      for (var r = 0; r < t.length - 1; r += 2) a.set(t[r], { baseUrl: e, path: t[r + 1] });
    }),
      (o = function (e) {
        var t = a.get(e);
        if (null == t) throw Error('Could not resolve bundle with id ' + e);
        return new URL(t.path, t.baseUrl).toString();
      });
  }),
    a('4qOVI', function (t, r) {
      e(
        t.exports,
        'getBundleURL',
        () => n,
        (e) => (n = e),
      );
      var n,
        o = {};
      n = function (e) {
        var t = o[e];
        return (
          t ||
            ((t = (function () {
              try {
                throw Error();
              } catch (t) {
                var e = ('' + t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
                if (e)
                  return (
                    ('' + e[2]).replace(
                      /^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,
                      '$1',
                    ) + '/'
                  );
              }
              return '/';
            })()),
            (o[e] = t)),
          t
        );
      };
    }),
    a('egvyN', function (e, t) {
      e.exports = o('hK9Md')(o('juxiN').resolve('5y1O5')).then(() => o('7iKxI'));
    }),
    a('hK9Md', function (e, t) {
      var r = o('3AMmx');
      e.exports = r(function (e) {
        return new Promise(function (t, r) {
          if (
            [].concat(document.getElementsByTagName('script')).some(function (t) {
              return t.src === e;
            })
          ) {
            t();
            return;
          }
          var n = document.createElement('link');
          (n.href = e), (n.rel = 'preload'), (n.as = 'script'), document.head.appendChild(n);
          var o = document.createElement('script');
          (o.async = !0),
            (o.type = 'text/javascript'),
            (o.src = e),
            (o.onerror = function (t) {
              var n = TypeError(
                'Failed to fetch dynamically imported module: '.concat(e, '. Error: ').concat(t.message),
              );
              (o.onerror = o.onload = null), o.remove(), r(n);
            }),
            (o.onload = function () {
              (o.onerror = o.onload = null), t();
            }),
            document.getElementsByTagName('head')[0].appendChild(o);
        });
      });
    }),
    a('3AMmx', function (e, t) {
      var r = {},
        n = {},
        o = {};
      e.exports = function (e, t) {
        return function (a) {
          var c = (function (e) {
            switch (e) {
              case 'preload':
                return n;
              case 'prefetch':
                return o;
              default:
                return r;
            }
          })(t);
          return c[a]
            ? c[a]
            : (c[a] = e.apply(null, arguments).catch(function (e) {
                throw (delete c[a], e);
              }));
        };
      };
    }),
    a('2slkc', function (e, t) {
      e.exports = o('hK9Md')(o('juxiN').resolve('4s5mb')).then(() => o('cy73i'));
    }),
    o('juxiN').register(
      o('4qOVI').getBundleURL('8YWtF'),
      JSON.parse('["8YWtF","ap.main.js","5y1O5","ap.dynamic.6e1603ba.js","4s5mb","ap.splide.esm.3f04ed09.js"]'),
    ),
    (window.static = !0),
    document.querySelector('.js').setAttribute('data-active', ''),
    o('egvyN').then(({ default: e }) => e()),
    o('2slkc').then(() => {
      document.querySelector('.js-dynamic-module').setAttribute('data-active', ''),
        console.log(`\u{2705} ${document.querySelector('.js-dynamic-module').textContent.trim()}`);
    });
})();
