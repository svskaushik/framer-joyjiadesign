import { t as e } from "./rolldown-runtime.CawJvvTp.mjs";
import {
  F as t,
  L as n,
  M as r,
  N as i,
  O as a,
  R as o,
  c as s,
  g as c,
  j as l,
  o as u,
  w as d,
} from "./react.6snvU8bB.mjs";
import { N as f, b as p, t as m } from "./motion.CpAcN4_Y.mjs";
import { A as h, P as ee, X as g, ht as _, s as v, w as y } from "./framer.7e87VJV8.mjs";
var b,
  x,
  S,
  C = e(() => {
    (g(),
      ee.loadFonts([
        `GF;Cormorant Garamond-500italic`,
        `GF;Cormorant Garamond-700italic`,
        `GF;Cormorant Garamond-700italic`,
        `GF;Cormorant Garamond-500italic`,
      ]),
      (b = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Cormorant Garamond`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Cormorant Garamond`,
              url: `../../assets/fonts/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5wDDOitk9Ifu5UQ.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Cormorant Garamond`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Cormorant Garamond`,
              url: `https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5FTfOitk9Ifu5UQ.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (x = [
        `.framer-f6wH2 .framer-styles-preset-3dejsl:not(.rich-text-wrapper), .framer-f6wH2 .framer-styles-preset-3dejsl.rich-text-wrapper h3 { --framer-font-family: "Cormorant Garamond", "Cormorant Garamond Placeholder", serif; --framer-font-family-bold: "Cormorant Garamond", "Cormorant Garamond Placeholder", serif; --framer-font-family-bold-italic: "Cormorant Garamond", "Cormorant Garamond Placeholder", serif; --framer-font-family-italic: "Cormorant Garamond", "Cormorant Garamond Placeholder", serif; --framer-font-open-type-features: 'ss07' on; --framer-font-size: 24px; --framer-font-style: italic; --framer-font-style-bold: italic; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-412736a6-764a-4748-80bf-a9c04ad63339, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (S = `framer-f6wH2`));
  }),
  w,
  T,
  E = e(() => {
    (g(),
      (w = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...w },
      (T = {
        onClick: { type: v.EventHandler },
        onMouseEnter: { type: v.EventHandler },
        onMouseLeave: { type: v.EventHandler },
      }),
      v.Number,
      v.Boolean,
      v.String,
      v.Enum);
  });
function te(e, t) {
  return D(!0, e, t);
}
function ne(e, t) {
  return D(!1, e, t);
}
function D(e, t, n = !0) {
  let r = _();
  i(() => {
    n && r === e && t();
  }, [r]);
}
var O = e(() => {
    (g(), d());
  }),
  k = e(() => {
    d();
  }),
  A = e(() => {
    g();
  }),
  j = e(() => {
    g();
  }),
  M = e(() => {
    d();
  }),
  N = e(() => {
    g();
  }),
  P,
  F,
  I = e(() => {
    (n(),
      d(),
      (P = () => {
        if (o !== void 0) {
          let e = o.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (F = () => l(() => P(), [])));
  }),
  L = e(() => {
    (d(), j());
  }),
  R = e(() => {
    (d(), g(), j(), k());
  }),
  z = e(() => {
    (g(), d(), E());
  });
function re() {
  return l(() => y.current(), []);
}
function ie() {
  return l(() => y.current() === y.canvas, []);
}
var B = e(() => {
    (d(), g());
  }),
  V = e(() => {
    d();
  });
function ae(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: a,
    bottomLeftRadius: o,
  } = e;
  return l(() => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`), [t, n, r, i, a, o]);
}
var H,
  U = e(() => {
    (d(),
      g(),
      (H = {
        borderRadius: {
          title: `Radius`,
          type: v.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      v.FusedNumber);
  }),
  W = e(() => {
    (E(), O(), k(), A(), j(), M(), N(), I(), L(), R(), z(), B(), V(), U());
  });
function G(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function K(e) {
  return s(Q, { ...G(e) });
}
function oe(e) {
  let t = _(),
    n = a(!1),
    i = a(!1),
    o = r((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: r(() => {
      let r = e.current;
      r &&
        ((r.preload = `auto`),
        !(
          r.currentTime > 0 &&
          r.onplaying &&
          !r.paused &&
          !r.ended &&
          r.readyState >= r.HAVE_CURRENT_DATA
        ) &&
          r &&
          !n.current &&
          t &&
          ((n.current = !0),
          (i.current = !0),
          r
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: r(() => {
      !e.current || n.current || (e.current.pause(), (i.current = !1));
    }, []),
    setProgress: o,
    isPlaying: i,
  };
}
function se({ playingProp: e, muted: n, loop: r, playsinline: i, controls: a }) {
  let [o] = t(() => e),
    [s, c] = t(!1);
  e !== o && !s && c(!0);
  let l = o && n && r && i && !a && !s,
    u;
  return ((u = l ? `on-viewport` : o ? `on-mount` : `no-autoplay`), u);
}
function q(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function J(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(q).join(` `);
}
var Y,
  X,
  Z,
  Q,
  $,
  ce = e(() => {
    (u(),
      g(),
      m(),
      W(),
      d(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((Y ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((X ||= {})),
      (Z = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (Q = c(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: o = !1,
            controls: c = !1,
            playing: u = !0,
            loop: d = !0,
            muted: m = !0,
            playsinline: h = !0,
            restartOnEnter: ee = !1,
            objectFit: g = `cover`,
            backgroundColor: _ = `rgba(0,0,0,0)`,
            radius: v = 0,
            volume: b = 25,
            startTime: x = 0,
            poster: S,
            playing: C,
            progress: w,
            onSeeked: T,
            onPause: E,
            onPlay: D,
            onEnd: O,
            onClick: k,
            onMouseEnter: A,
            onMouseLeave: j,
            onMouseDown: M,
            onMouseUp: N,
          } = e,
          P = a(),
          I = F(),
          L = a(null),
          R = a(null),
          z = ie(),
          B = re(),
          V = z || B === y.export,
          H = ae(e),
          U = V
            ? `no-autoplay`
            : se({ playingProp: C, muted: m, loop: d, playsinline: h, controls: c }),
          W = V ? !0 : f(P),
          G = V ? !1 : f(P, { margin: `10%`, once: !0 }),
          K = x === 100 ? 99.9 : x,
          { play: q, pause: J, setProgress: Y, isPlaying: X } = oe(P);
        (i(() => {
          V || (U !== `on-viewport` && (C ? q() : J()));
        }, [U, C]),
          i(() => {
            V || (W && C && U !== `no-autoplay` && q(), U === `on-viewport` && J());
          }, [U, W, C]),
          i(() => {
            !z || S || o || K || !P.current || (P.current.currentTime = 0.01);
          }, [o, S, K]));
        let Q = a(!1);
        (i(() => {
          if (!Q.current) {
            Q.current = !0;
            return;
          }
          Y(((p(w) ? w.get() : (w ?? 0) * 0.01) ?? 0) || (K ?? 0) / 100);
        }, [K, r, n, w]),
          i(() => {
            if (p(w)) return w.on(`change`, (e) => Y(e));
          }, [w]),
          te(() => {
            L.current !== null && P.current && ((!R && d) || !L.current) && q();
          }),
          ne(() => {
            P.current && ((R.current = P.current.ended), (L.current = P.current.paused), J());
          }));
        let $ = l(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return r + ``;
        }, [t, r, n, K]);
        return (
          i(() => {
            I && P.current && U === `on-mount` && setTimeout(() => q(), 50);
          }, []),
          i(() => {
            P.current && !m && (P.current.volume = (b ?? 0) / 100);
          }, [b]),
          s(`video`, {
            onClick: k,
            onMouseEnter: A,
            onMouseLeave: j,
            onMouseDown: M,
            onMouseUp: N,
            src: $,
            loop: d,
            ref: P,
            onSeeked: (e) => T?.(e),
            onPause: (e) => E?.(e),
            onPlay: (e) => D?.(e),
            onEnded: (e) => O?.(e),
            autoPlay: X.current || U === `on-mount` || (C && U === `on-viewport` && W),
            preload: X.current
              ? `auto`
              : V && !S
                ? `metadata`
                : U !== `on-mount` && !G
                  ? `none`
                  : `metadata`,
            poster:
              o && !r && n === Z
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : o && S
                  ? S
                  : void 0,
            onLoadedData: () => {
              let e = P.current;
              e &&
                (e.currentTime < 0.3 && K > 0 && Y((K ?? 0) * 0.01),
                (X.current || U === `on-mount` || (C && U === `on-viewport` && W)) && q());
            },
            controls: c,
            muted: V ? !0 : m,
            playsInline: h,
            style: {
              cursor: k ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: H,
              display: `block`,
              objectFit: g,
              backgroundColor: _,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (K.displayName = `Video`),
      ($ = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      h(K, {
        srcType: {
          type: v.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: v.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: v.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: v.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...H,
        posterEnabled: {
          type: v.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: v.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: v.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: v.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: v.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: v.Enum, title: `Fit`, options: $, optionTitles: $.map(J) },
        controls: {
          type: v.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: v.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: v.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: v.EventHandler },
        onSeeked: { type: v.EventHandler },
        onPause: { type: v.EventHandler },
        onPlay: { type: v.EventHandler },
        ...T,
      }));
  });
export { b as a, x as i, ce as n, C as o, S as r, K as t };
//# sourceMappingURL=Video.CgQGXeKK.mjs.map
