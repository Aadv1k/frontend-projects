(() => {
  "use strict";
  var e,
    t,
    r,
    o,
    n,
    a,
    i,
    c,
    s,
    d,
    l,
    p,
    u,
    f,
    h = {
      512: (e, t, r) => {
        r.d(t, { Z: () => h });
        var o = r(558),
          n = r.n(o),
          a = r(361),
          i = r.n(a),
          c = r(626),
          s = r.n(c),
          d = new URL(r(409), r.b),
          l = new URL(r(427), r.b),
          p = i()(n());
        p.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);",
        ]);
        var u = s()(d),
          f = s()(l);
        p.push([
          e.id,
          'body{--main-bg: hsl(230, 17%, 14%);--top-bg: hsl(232, 19%, 15%);--card-bg: hsl(228, 28%, 20%);--text-1: hsl(228, 34%, 66%);--text-2: hsl(0, 0%, 100%);--toggle: linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%));--hover: #333a56}body.light{--main-bg: hsl(0, 0%, 100%);--top-bg: hsl(225, 100%, 98%);--card-bg: hsl(227, 47%, 96%);--text-1: hsl(228, 12%, 44%);--text-2: hsl(230, 17%, 14%);--toggle: hsl(230, 22%, 74%);--hover: #e1e3f0}.card{background:var(--card-bg);display:flex;flex-direction:column;position:relative;cursor:pointer;transition:background 300ms;border-radius:0 0 10px 10px}.card:hover{background:var(--hover)}.card h1{color:var(--text-2);font-size:3.2em}.card p{color:var(--text-1)}.card .card__link{display:flex;align-items:center;gap:.5em}.card .card__link a{color:var(--text-1);font-weight:700;text-decoration:none}.card h2{color:var(--text-2);font-size:2.1em}.card--fb::before{content:"";width:100%;height:4px;position:absolute;top:-4px;background:#198ff5;border-radius:10px 10px 0 0}.card--yt::before{content:"";width:100%;height:4px;position:absolute;top:-4px;background:#c4032a;border-radius:10px 10px 0 0}.card--insta::before{content:"";width:100%;height:4px;position:absolute;top:-4px;background:linear-gradient(hsl(37deg, 97%, 70%), hsl(329deg, 70%, 58%));border-radius:10px 10px 0 0}.card--twt::before{content:"";width:100%;height:4px;position:absolute;top:-4px;background:#1ca0f2;border-radius:10px 10px 0 0}span.link-up{color:#1db489;font-weight:700;font-size:.85em;position:relative;padding-left:1.2em}span.link-up::before{content:"";position:absolute;left:0;width:10px;height:10px;top:50%;transform:translateY(-50%);background-image:url(' +
            u +
            ');background-position:center;background-repeat:no-repeat;background-size:contain}span.link-down{color:#dc414c;font-weight:700;font-size:.85em;position:relative;padding-left:1.2em}span.link-down::before{content:"";position:absolute;left:0;width:10px;height:10px;top:50%;background-image:url(' +
            f +
            ');background-position:center;background-repeat:no-repeat;background-size:contain;transform:translateY(-50%)}*{margin:0;padding:0;box-sizing:border-box}body{background:var(--main-bg);font-family:"Inter","Segoe UI",sans-sherif;min-height:100vh;display:flex;align-items:center}body::before{content:"";position:absolute;top:0;left:50%;transform:translateX(-50%);width:100vw;height:40vh;border-radius:0 0 20px 20px;z-index:-1;background:var(--top-bg)}main{margin:0 auto;width:90%;max-width:1200px;padding-block:1.5em;display:flex;flex-direction:column;gap:2em;position:relative}section.head{display:flex;flex-direction:column;gap:1em}section.head h3{color:var(--text-2);font-size:clamp(1.3em,3vw + 10px,2em)}section.head p{color:var(--text-1);font-weight:700;font-size:.9em}section.head hr{border:none;height:1px;background:var(--text-1);opacity:30%;width:100%}section.head .head__toggle{display:flex;justify-content:space-between;align-items:center}section.head .head__toggle label{color:var(--text-1);font-weight:700;font-size:.9em}section.head input[type=checkbox]{width:40px;height:20px;border-radius:10px;-webkit-appearance:none;-moz-appearance:none;background:var(--toggle);position:relative;cursor:pointer}section.head input[type=checkbox]::after{content:"";width:16px;height:16px;position:absolute;top:50%;left:55%;transform:translateY(-50%);border-radius:50%;background:var(--main-bg);opacity:90%;transition:500ms}section.head input[type=checkbox]:checked::after{left:5%}section.followers{display:flex;gap:1.5em;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center}section.followers .card{flex-grow:2;text-align:center;align-items:center;padding-block:2em;gap:1em;max-width:400px;width:100%}section.followers .card .follower p{text-transform:uppercase;color:var(--text-1);font-size:.8em;letter-spacing:5px}@media only screen and (min-width: 500px){section.followers .card{width:40%}}@media only screen and (min-width: 900px){section.followers{flex-direction:row;flex-wrap:nowrap}}section.overview{display:flex;flex-direction:column;gap:1em}section.overview h3{color:var(--text-2);font-size:clamp(1.3em,3vw + 10px,2em)}section.overview .card>div{display:flex;flex-direction:row;justify-content:space-between;align-items:center}section.overview .card{padding:1.5em;gap:1em;border-radius:10px}section.overview .card p{font-weight:700}section.overview .overview__cards{display:grid;gap:1.5em;grid-template-columns:repeat(1, 1fr)}@media only screen and (min-width: 500px){section.overview .overview__cards{grid-template-columns:repeat(2, 1fr)}}@media only screen and (min-width: 900px){section.overview .overview__cards{grid-template-columns:repeat(4, 1fr)}}',
          "",
        ]);
        const h = p;
      },
      361: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = "",
                  o = void 0 !== t[5];
                return (
                  t[4] && (r += "@supports (".concat(t[4], ") {")),
                  t[2] && (r += "@media ".concat(t[2], " {")),
                  o &&
                    (r += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (r += e(t)),
                  o && (r += "}"),
                  t[2] && (r += "}"),
                  t[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (t.i = function (e, r, o, n, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (o)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var l = [].concat(e[d]);
                (o && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  r &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = r))
                      : (l[2] = r)),
                  n &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = n))
                      : (l[4] = "".concat(n))),
                  t.push(l));
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
        function r(e) {
          for (var r = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === e) {
              r = o;
              break;
            }
          return r;
        }
        function o(e, o) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              d = o.base ? s[0] + o.base : s[0],
              l = a[d] || 0,
              p = "".concat(d, " ").concat(l);
            a[d] = l + 1;
            var u = r(p),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== u) t[u].references++, t[u].updater(f);
            else {
              var h = n(f, o);
              (o.byIndex = c),
                t.splice(c, 0, { identifier: p, updater: h, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function n(e, t) {
          var r = t.domAPI(t);
          return (
            r.update(e),
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
                r.update((e = t));
              } else r.remove();
            }
          );
        }
        e.exports = function (e, n) {
          var a = o((e = e || []), (n = n || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var c = r(a[i]);
              t[c].references--;
            }
            for (var s = o(e, n), d = 0; d < a.length; d++) {
              var l = r(a[d]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = s;
          };
        };
      },
      52: (e) => {
        var t = {};
        e.exports = function (e, r) {
          var o = (function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(r);
        };
      },
      469: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      10: (e, t, r) => {
        e.exports = function (e) {
          var t = r.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      631: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (r) {
              !(function (e, t, r) {
                var o = "";
                r.supports && (o += "@supports (".concat(r.supports, ") {")),
                  r.media && (o += "@media ".concat(r.media, " {"));
                var n = void 0 !== r.layer;
                n &&
                  (o += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (o += r.css),
                  n && (o += "}"),
                  r.media && (o += "}"),
                  r.supports && (o += "}");
                var a = r.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(o, e, t.options);
              })(t, e, r);
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
      427: (e, t, r) => {
        e.exports = r.p + "0c77426d8f1ab70c4ae6.svg";
      },
      409: (e, t, r) => {
        e.exports = r.p + "359200b20d83a37cfb26.svg";
      },
    },
    g = {};
  function m(e) {
    var t = g[e];
    if (void 0 !== t) return t.exports;
    var r = (g[e] = { id: e, exports: {} });
    return h[e](r, r.exports, m), r.exports;
  }
  (m.m = h),
    (m.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return m.d(t, { a: t }), t;
    }),
    (m.d = (e, t) => {
      for (var r in t)
        m.o(t, r) &&
          !m.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (m.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (m.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      m.g.importScripts && (e = m.g.location + "");
      var t = m.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (m.p = e);
    })(),
    (m.b = document.baseURI || self.location.href),
    (m.nc = void 0),
    (e = m(487)),
    (t = m.n(e)),
    (r = m(631)),
    (o = m.n(r)),
    (n = m(52)),
    (a = m.n(n)),
    (i = m(10)),
    (c = m.n(i)),
    (s = m(469)),
    (d = m.n(s)),
    (l = m(329)),
    (p = m.n(l)),
    (u = m(512)),
    ((f = {}).styleTagTransform = p()),
    (f.setAttributes = c()),
    (f.insert = a().bind(null, "head")),
    (f.domAPI = o()),
    (f.insertStyleElement = d()),
    t()(u.Z, f),
    u.Z && u.Z.locals && u.Z.locals,
    document.getElementById("themeToggle").addEventListener("click", () => {
      setTimeout(() => {
        document.getElementsByTagName("body")[0].classList.toggle("light");
      }, 250);
    });
})();
