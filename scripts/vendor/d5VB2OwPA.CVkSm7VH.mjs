import { t as e } from "./rolldown-runtime.TjgygFMs.mjs";
import {
  A as t,
  D as n,
  N as r,
  _ as i,
  c as a,
  k as o,
  o as s,
  w as c,
  y as l,
} from "./react.DY0xf786.mjs";
import { S as u, a as d, r as f, t as p } from "./motion.BEaCLYSy.mjs";
import {
  A as m,
  D as h,
  Et as g,
  N as _,
  Tt as v,
  U as y,
  X as b,
  _ as x,
  _t as S,
  k as C,
  lt as w,
  s as T,
} from "./framer.DMuD-Poq.mjs";
import { a as E, c as D, o as O, s as k } from "./shared-lib.Dqp23CCf.mjs";
function A(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U = e(() => {
    (s(),
      b(),
      p(),
      c(),
      D(),
      (j = { g9RwOfbCl: { hover: !0 }, xNGPb2vC9: { hover: !0 } }),
      (M = [`g9RwOfbCl`, `xNGPb2vC9`]),
      (N = `framer-HbvMp`),
      (P = { g9RwOfbCl: `framer-v-1m27byo`, xNGPb2vC9: `framer-v-x9nvvq` }),
      (F = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (I = ({ value: e, children: n }) => {
        let r = o(d),
          i = e ?? r.transition,
          s = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: s, children: n });
      }),
      (L = { Active: `xNGPb2vC9`, Default: `g9RwOfbCl` }),
      (R = u.create(r)),
      (z = ({ height: e, id: t, link: n, text: r, width: i, ...a }) => ({
        ...a,
        gFmsDu1G9: n ?? a.gFmsDu1G9,
        jxKssWe7X: r ?? a.jxKssWe7X ?? `See project`,
        variant: L[a.variant] ?? a.variant ?? `g9RwOfbCl`,
      })),
      (B = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = g(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            s = l(),
            { activeLocale: c, setLocale: d } = S();
          w();
          let {
              style: p,
              className: m,
              layoutId: g,
              variant: y,
              jxKssWe7X: b,
              gFmsDu1G9: C,
              ...T
            } = z(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: L,
              gestureVariant: V,
              isLoading: H,
              setGestureState: U,
              setVariant: W,
              variants: G,
            } = v({
              cycleOrder: M,
              defaultVariant: `g9RwOfbCl`,
              enabledGestures: j,
              ref: o,
              variant: y,
              variantClassNames: P,
            }),
            K = B(e, G),
            q = _(N, E);
          return a(f, {
            id: g ?? s,
            children: a(R, {
              animate: G,
              initial: !1,
              children: a(I, {
                value: F,
                children: a(x, {
                  href: C,
                  motionChild: !0,
                  nodeId: `g9RwOfbCl`,
                  scopeId: `d5VB2OwPA`,
                  children: a(u.a, {
                    ...T,
                    ...L,
                    className: `${_(q, `framer-1m27byo`, m, O)} framer-npfks`,
                    "data-framer-name": `Default`,
                    layoutDependency: K,
                    layoutId: `g9RwOfbCl`,
                    ref: o,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backdropFilter: `blur(5px)`,
                      WebkitBackdropFilter: `blur(5px)`,
                      ...p,
                    },
                    variants: {
                      "g9RwOfbCl-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                      "xNGPb2vC9-hover": {
                        "--border-color": `var(--token-4213617f-db71-4b9f-b786-d4b4f6de56f3, rgb(153, 153, 153))`,
                      },
                      xNGPb2vC9: {
                        "--border-bottom-width": `0.5px`,
                        "--border-color": `var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255))`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                      },
                    },
                    ...A(
                      {
                        "g9RwOfbCl-hover": { "data-framer-name": void 0 },
                        "xNGPb2vC9-hover": { "data-framer-name": void 0 },
                        xNGPb2vC9: { "data-border": !0, "data-framer-name": `Active` },
                      },
                      D,
                      V
                    ),
                    children: a(h, {
                      __fromCanvasComponent: !0,
                      children: a(r, {
                        children: a(u.p, {
                          className: `framer-styles-preset-15hwgrk`,
                          "data-styles-preset": `rbICbRVFi`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4213617f-db71-4b9f-b786-d4b4f6de56f3, rgb(153, 153, 153)))`,
                          },
                          children: `See project`,
                        }),
                      }),
                      className: `framer-10dqgn1`,
                      fonts: [`Inter`],
                      layoutDependency: K,
                      layoutId: `yhH_XGcWW`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-4213617f-db71-4b9f-b786-d4b4f6de56f3, rgb(153, 153, 153))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: b,
                      variants: {
                        "g9RwOfbCl-hover": {
                          "--extracted-r6o4lv": `var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255))`,
                        },
                        "xNGPb2vC9-hover": {
                          "--extracted-r6o4lv": `var(--token-4213617f-db71-4b9f-b786-d4b4f6de56f3, rgb(153, 153, 153))`,
                        },
                        xNGPb2vC9: {
                          "--extracted-r6o4lv": `var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...A(
                        {
                          "g9RwOfbCl-hover": {
                            children: a(r, {
                              children: a(u.p, {
                                className: `framer-styles-preset-15hwgrk`,
                                "data-styles-preset": `rbICbRVFi`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255)))`,
                                },
                                children: `See project`,
                              }),
                            }),
                          },
                          "xNGPb2vC9-hover": {
                            children: a(r, {
                              children: a(u.p, {
                                className: `framer-styles-preset-15hwgrk`,
                                "data-styles-preset": `rbICbRVFi`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4213617f-db71-4b9f-b786-d4b4f6de56f3, rgb(153, 153, 153)))`,
                                },
                                children: `See project`,
                              }),
                            }),
                          },
                          xNGPb2vC9: {
                            children: a(r, {
                              children: a(u.p, {
                                className: `framer-styles-preset-15hwgrk`,
                                "data-styles-preset": `rbICbRVFi`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255)))`,
                                },
                                children: `See project`,
                              }),
                            }),
                          },
                        },
                        D,
                        V
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-HbvMp.framer-npfks, .framer-HbvMp .framer-npfks { display: block; }`,
          `.framer-HbvMp.framer-1m27byo { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 4px 0px 4px 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-HbvMp .framer-10dqgn1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...O,
          `.framer-HbvMp[data-border="true"]::after, .framer-HbvMp [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-HbvMp`
      )),
      (H = V),
      (V.displayName = `Underline Link`),
      (V.defaultProps = { height: 27, width: 100.5 }),
      m(V, {
        variant: {
          options: [`g9RwOfbCl`, `xNGPb2vC9`],
          optionTitles: [`Default`, `Active`],
          title: `Variant`,
          type: T.Enum,
        },
        jxKssWe7X: {
          defaultValue: `See project`,
          displayTextArea: !1,
          title: `Text`,
          type: T.String,
        },
        onjxKssWe7XChange: { changes: `jxKssWe7X`, type: T.ChangeHandler },
        gFmsDu1G9: { title: `Link`, type: T.Link },
      }),
      C(
        V,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...y(k),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { U as n, H as t };
//# sourceMappingURL=d5VB2OwPA.CVkSm7VH.mjs.map
