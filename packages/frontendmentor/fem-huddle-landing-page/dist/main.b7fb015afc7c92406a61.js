(() => {
  "use strict";
  var e,
    t,
    n,
    r,
    o,
    i,
    a,
    s,
    c,
    p,
    d,
    l,
    f,
    u,
    h = {
      157: (e, t, n) => {
        n.d(t, { Z: () => h });
        var r = n(558),
          o = n.n(r),
          i = n(361),
          a = n.n(i),
          s = n(626),
          c = n.n(s),
          p = new URL(n(265), n.b),
          d = new URL(n(521), n.b),
          l = a()(o());
        l.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@700&display=swap);",
        ]);
        var f = c()(p),
          u = c()(d);
        l.push([
          e.id,
          'h1,h2{font-family:"Poppins","Tahoma",sans-sherif;color:#00252e;text-transform:capitalize}p{font-family:"Open Sans","Verdana",sans-sherif;color:#00252e;line-height:1.5;font-weight:400}.btn-primary{border:none;background:#ff52bf;color:#e0ffff;text-transform:capitalize;box-shadow:0 1px 4px #ff8fd8;border-radius:50px;cursor:pointer;transition:background .2s ease}.btn-primary:hover{background:#ff8fd8}.btn-primary-no-bg{border:1px solid #ff52bf;background:none;color:#ff52bf;text-transform:capitalize;border-radius:50px;cursor:pointer;transition:all .2s ease}.btn-primary-no-bg:hover{border:1px solid #ff8fd8;color:#ff8fd8}*{margin:0;padding:0;box-sizing:border-box}body{font-weight:400;background:#f5faff}main section{margin-bottom:6em}nav{display:flex;justify-content:space-between;align-items:center;padding:2em 1em}nav .logo{width:150px}nav button{padding:.5em 2em}@media screen and (min-width: 700px){nav{padding:2.5em 3em}}section.hero{display:flex;flex-direction:column;text-align:center;align-items:center;gap:1em}section.hero .btn-primary{padding:1.1em 5em;margin-top:1em}section.hero .hero__stats{display:flex;width:50%;justify-content:space-around;align-items:center;flex-direction:column;gap:6em;text-align:left}section.hero .hero__stats h1{font-size:3.5em;position:relative}section.hero .hero__stats .stats__itm:nth-child(1)>h1::before{background:url(' +
            f +
            ");background-size:contain;background-repeat:no-repeat}section.hero .hero__stats .stats__itm:nth-child(2)>h1::before{background:url(" +
            u +
            ');background-size:contain;background-repeat:no-repeat}section.hero .hero__stats h1::before{content:"";width:35px;height:35px;top:-30%;position:absolute}section.hero .hero__img{width:100%;max-width:650px;margin-top:2em}section.hero .hero__img img{width:100%}section.hero>p,section.hero>h2{width:80%;max-width:500px}section.hero>h2{max-width:800px;font-size:clamp(1.5em,5vw - 10px,2em)}@media screen and (min-width: 700px){section.hero .hero__stats{flex-direction:row;justify-content:space-between;width:50%;margin-top:3em}}section.features{display:flex;flex-direction:column;align-items:center;gap:3em;text-align:center}section.features .features__row{display:flex;flex-direction:column;align-items:center;width:90%;gap:3em;max-width:500px}section.features .features__row img{width:80%}@media screen and (min-width: 700px){section.features{text-align:left;gap:8em}section.features .features__row{flex-direction:row;width:80%;max-width:1200px}section.features .row__content{width:70%}section.features .features__row:nth-child(2){flex-direction:row-reverse}section.features .features__row img{width:50%}}section.build{flex-direction:column;margin:10em 0;display:flex;align-items:center;justify-content:center;gap:2em}section.build h1{text-align:center}section.build button{padding:1.1em 5em}',
          "",
        ]);
        const h = l;
      },
      361: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var p = 0; p < e.length; p++) {
                var d = [].concat(e[p]);
                (r && a[d[0]]) ||
                  (void 0 !== i &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = i)),
                  n &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = n))
                      : (d[2] = n)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      626: (e) => {
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      558: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      487: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, a = [], s = 0; s < e.length; s++) {
            var c = e[s],
              p = r.base ? c[0] + r.base : c[0],
              d = i[p] || 0,
              l = "".concat(p, " ").concat(d);
            i[p] = d + 1;
            var f = n(l),
              u = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(u);
            else {
              var h = o(u, r);
              (r.byIndex = s),
                t.splice(s, 0, { identifier: l, updater: h, references: 1 });
            }
            a.push(l);
          }
          return a;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var s = n(i[a]);
              t[s].references--;
            }
            for (var c = r(e, o), p = 0; p < i.length; p++) {
              var d = n(i[p]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            i = c;
          };
        };
      },
      52: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      469: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      10: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      631: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      329: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      265: (e, t, n) => {
        e.exports = n.p + "e889ff65d255a5e94c8e.svg";
      },
      521: (e, t, n) => {
        e.exports = n.p + "a93f061b7c60758bb4ba.svg";
      },
    },
    m = {};
  function g(e) {
    var t = m[e];
    if (void 0 !== t) return t.exports;
    var n = (m[e] = { id: e, exports: {} });
    return h[e](n, n.exports, g), n.exports;
  }
  (g.m = h),
    (g.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return g.d(t, { a: t }), t;
    }),
    (g.d = (e, t) => {
      for (var n in t)
        g.o(t, n) &&
          !g.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (g.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (g.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      g.g.importScripts && (e = g.g.location + "");
      var t = g.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (g.p = e);
    })(),
    (g.b = document.baseURI || self.location.href),
    (g.nc = void 0),
    (e = g(487)),
    (t = g.n(e)),
    (n = g(631)),
    (r = g.n(n)),
    (o = g(52)),
    (i = g.n(o)),
    (a = g(10)),
    (s = g.n(a)),
    (c = g(469)),
    (p = g.n(c)),
    (d = g(329)),
    (l = g.n(d)),
    (f = g(157)),
    ((u = {}).styleTagTransform = l()),
    (u.setAttributes = s()),
    (u.insert = i().bind(null, "head")),
    (u.domAPI = r()),
    (u.insertStyleElement = p()),
    t()(f.Z, u),
    f.Z && f.Z.locals && f.Z.locals;
})();
