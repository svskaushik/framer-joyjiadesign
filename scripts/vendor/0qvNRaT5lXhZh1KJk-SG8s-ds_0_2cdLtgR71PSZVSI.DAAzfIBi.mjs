import { t as e } from "./rolldown-runtime.CawJvvTp.mjs";
import {
  A as t,
  O as n,
  P as r,
  _ as i,
  c as a,
  j as o,
  l as s,
  o as c,
  s as ee,
  w as l,
  y as te,
} from "./react.6snvU8bB.mjs";
import { S as u, a as d, r as f, t as p } from "./motion.CpAcN4_Y.mjs";
import {
  A as m,
  At as ne,
  Ct as h,
  D as re,
  Dt as g,
  E as _,
  Et as v,
  F as y,
  N as b,
  S as ie,
  St as x,
  Tt as S,
  U as C,
  V as w,
  X as T,
  a as E,
  ct as ae,
  d as D,
  gt as O,
  it as k,
  k as A,
  lt as j,
  mt as oe,
  n as M,
  o as N,
  pt as se,
  s as P,
  ut as ce,
  vt as le,
  wt as ue,
  x as de,
  yt as fe,
} from "./framer.7e87VJV8.mjs";
import { a as pe, c as F, i as I, o as L, r as R, s as z } from "./shared-lib.DsSu9Ft0.mjs";
import { n as B, t as V } from "./TwJkpe0RQ.DVtLc_1h.mjs";
import { n as H, t as me } from "./tL73CBK8h.ZLTz48Xz.mjs";
import { n as he, t as ge } from "./K1UDmAL9B.M3oHWv3J.mjs";
import { i as _e, r as ve } from "./nOXL0BeXe.C_sRkJqx.mjs";
import { i as ye, n as be, r as xe, t as Se } from "./VwJ5pWYb7.D17Hvg8v.mjs";
import { n as Ce, r as we } from "./IFvtpR9s0.D0CXSCAi.mjs";
function Te(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ee,
  De,
  Oe,
  ke,
  U,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  W,
  G,
  Fe = e(() => {
    (c(),
      T(),
      p(),
      l(),
      F(),
      (Ee = { hOf6lSSOE: { hover: !0 } }),
      (De = [`hOf6lSSOE`, `sivslqre3`]),
      (Oe = `framer-bSW3I`),
      (ke = { hOf6lSSOE: `framer-v-15f26z8`, sivslqre3: `framer-v-5pmd30` }),
      (U = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (Ae = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: s, children: n });
      }),
      (je = { Active: `sivslqre3`, Inactive: `hOf6lSSOE` }),
      (Me = u.create(r)),
      (Ne = ({ click: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        eAHGXWjyh: e ?? a.eAHGXWjyh,
        mXpY5N3RA: r ?? a.mXpY5N3RA ?? `Category`,
        variant: je[a.variant] ?? a.variant ?? `hOf6lSSOE`,
      })),
      (Pe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = g(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            s = te(),
            { activeLocale: c, setLocale: ee } = le();
          ce();
          let {
              style: l,
              className: d,
              layoutId: p,
              variant: m,
              mXpY5N3RA: ne,
              eAHGXWjyh: h,
              ...g
            } = Ne(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: ie,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = v({
              cycleOrder: De,
              defaultVariant: `hOf6lSSOE`,
              enabledGestures: Ee,
              ref: o,
              variant: m,
              variantClassNames: ke,
            }),
            D = Pe(e, E),
            { activeVariantCallback: O, delay: k } = ae(_),
            A = O(async (...e) => {
              if ((w({ isPressed: !1 }), h && (await h(...e)) === !1)) return !1;
            }),
            j = b(Oe, pe);
          return a(f, {
            id: p ?? s,
            children: a(Me, {
              animate: E,
              initial: !1,
              children: a(Ae, {
                value: U,
                children: a(u.div, {
                  ...g,
                  ...x,
                  className: b(j, `framer-15f26z8`, d, y),
                  "data-border": !0,
                  "data-framer-name": `Inactive`,
                  "data-highlight": !0,
                  layoutDependency: D,
                  layoutId: `hOf6lSSOE`,
                  onTap: A,
                  ref: o,
                  style: {
                    "--border-bottom-width": `0.5px`,
                    "--border-color": `rgba(255, 255, 255, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    ...l,
                  },
                  variants: { sivslqre3: { "--border-color": `rgb(255, 255, 255)` } },
                  ...Te(
                    {
                      "hOf6lSSOE-hover": { "data-framer-name": void 0 },
                      sivslqre3: { "data-framer-name": `Active` },
                    },
                    _,
                    S
                  ),
                  children: a(re, {
                    __fromCanvasComponent: !0,
                    children: a(r, {
                      children: a(u.p, {
                        className: `framer-styles-preset-15hwgrk`,
                        "data-styles-preset": `rbICbRVFi`,
                        dir: `auto`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4213617f-db71-4b9f-b786-d4b4f6de56f3, rgb(166, 166, 166)))`,
                        },
                        children: `Category`,
                      }),
                    }),
                    className: `framer-1bd9k21`,
                    "data-framer-name": `Title`,
                    fonts: [`Inter`],
                    layoutDependency: D,
                    layoutId: `aAmMR4JJo`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-4213617f-db71-4b9f-b786-d4b4f6de56f3, rgb(166, 166, 166))`,
                    },
                    text: ne,
                    variants: {
                      "hOf6lSSOE-hover": {
                        "--extracted-r6o4lv": `var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255))`,
                      },
                      sivslqre3: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Te(
                      {
                        "hOf6lSSOE-hover": {
                          children: a(r, {
                            children: a(u.p, {
                              className: `framer-styles-preset-15hwgrk`,
                              "data-styles-preset": `rbICbRVFi`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255)))`,
                              },
                              children: `Category`,
                            }),
                          }),
                        },
                        sivslqre3: {
                          children: a(r, {
                            children: a(u.p, {
                              className: `framer-styles-preset-15hwgrk`,
                              "data-styles-preset": `rbICbRVFi`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                              },
                              children: `Category`,
                            }),
                          }),
                        },
                      },
                      _,
                      S
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-bSW3I.framer-u5k5xy, .framer-bSW3I .framer-u5k5xy { display: block; }`,
          `.framer-bSW3I.framer-15f26z8 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 4px 0px 4px 0px; position: relative; width: min-content; }`,
          `.framer-bSW3I .framer-1bd9k21 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...L,
          `.framer-bSW3I[data-border="true"]::after, .framer-bSW3I [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-bSW3I`
      )),
      (G = W),
      (W.displayName = `Tab`),
      (W.defaultProps = { height: 27, width: 81 }),
      m(W, {
        variant: {
          options: [`hOf6lSSOE`, `sivslqre3`],
          optionTitles: [`Inactive`, `Active`],
          title: `Variant`,
          type: P.Enum,
        },
        mXpY5N3RA: {
          defaultValue: `Category`,
          displayTextArea: !1,
          title: `Title`,
          type: P.String,
        },
        onmXpY5N3RAChange: { changes: `mXpY5N3RA`, type: P.ChangeHandler },
        eAHGXWjyh: { title: `Click`, type: P.EventHandler },
      }),
      A(
        W,
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
          ...C(z),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  K,
  qe,
  q,
  Je,
  Ye,
  J,
  Y,
  Xe,
  Ze,
  Qe,
  X,
  Z,
  Q,
  $e,
  et,
  tt,
  $,
  nt,
  rt;
e(() => {
  (c(),
    T(),
    p(),
    l(),
    I(),
    me(),
    B(),
    Fe(),
    he(),
    ve(),
    ye(),
    Ce(),
    (Ie = w(G)),
    (Le = w(H)),
    (Re = ne(N)),
    (ze = w(R)),
    (Be = w(V)),
    (Ve = {
      dtmiloTd9: `(min-width: 1200px)`,
      ed_UntlQA: `(min-width: 810px) and (max-width: 1199.98px)`,
      YzcQdhUUh: `(max-width: 809.98px)`,
    }),
    (He = [`services`, `service`]),
    (Ue = `framer-5A4Tv`),
    (We = {
      dtmiloTd9: `framer-v-f2f0mu`,
      ed_UntlQA: `framer-v-11ij6d0`,
      YzcQdhUUh: `framer-v-1403qog`,
    }),
    (Ge = (e, t, n) => (e && t ? `position` : n)),
    (Ke = {
      effect: {
        filter: `blur(10px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 0.95,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      },
      startDelay: 0.6,
      tokenization: `word`,
      transition: { bounce: 0, delay: 0.1, duration: 1.8, type: `spring` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (K = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (qe = (e, t) => (e ? `hOf6lSSOE` : `sivslqre3`)),
    (q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Je = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (Ye = (e, t) => (e ? `sivslqre3` : `hOf6lSSOE`)),
    (J = () => ({
      from: { alias: `ZJyoc3shD`, data: ge, type: `Collection` },
      select: [
        { collection: `ZJyoc3shD`, name: `id`, type: `Identifier` },
        { collection: `ZJyoc3shD`, name: `fvyoDlct9`, type: `Identifier` },
        { collection: `ZJyoc3shD`, name: `Ew0DD0oLS`, type: `Identifier` },
      ],
    })),
    (Y = ({ query: e, pageSize: t, children: n }) => n(x(e))),
    (Xe = { bounce: 0, delay: 0.2, duration: 1.4, type: `spring` }),
    (Ze = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
    (Qe = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (X = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Z = (e) => ({
      from: { alias: `Zw04bQTGQ`, data: _e, type: `Collection` },
      select: [
        { collection: `Zw04bQTGQ`, name: `McxOXebVw`, type: `Identifier` },
        { collection: `Zw04bQTGQ`, name: `zWbd1IZi3`, type: `Identifier` },
        { collection: `Zw04bQTGQ`, name: `lTa0BBJJI`, type: `Identifier` },
        { collection: `Zw04bQTGQ`, name: `Y3mPbtUk_`, type: `Identifier` },
        { collection: `Zw04bQTGQ`, name: `c2FwDDNTL`, type: `Identifier` },
        { collection: `Zw04bQTGQ`, name: `Ez5VCK3ej`, type: `Identifier` },
        { collection: `Zw04bQTGQ`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          left: { type: `LiteralValue`, value: e },
          operator: `==`,
          right: { type: `LiteralValue`, value: null },
          type: `BinaryOperation`,
        },
        operator: `or`,
        right: {
          left: { type: `LiteralValue`, value: e },
          operator: `in`,
          right: { collection: `Zw04bQTGQ`, name: `iJDFTfgcO`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        type: `BinaryOperation`,
      },
    })),
    (Q = { Desktop: `dtmiloTd9`, Phone: `YzcQdhUUh`, Tablet: `ed_UntlQA` }),
    ($e = ({ value: e }) =>
      O()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (et = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `dtmiloTd9`,
    })),
    (tt = {
      component: V,
      transition: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` },
      variant: `t4e5r1qqd`,
    }),
    ($ = g(
      i(function (e, i) {
        let c = n(null),
          l = i ?? c,
          p = te(),
          { activeLocale: m, setLocale: ne } = le(),
          g = ce(),
          [v, y] = j({ collectionId: `K1UDmAL9B`, optional: !0, parameterName: `service` }),
          { style: x, className: C, layoutId: w, variant: T, ...O } = et(e);
        fe(o(() => we({}, m), [m]));
        let [k, A] = oe(T, Ve, !1),
          { activeVariantCallback: P, delay: pe } = ae(void 0),
          F = P(async (...e) => {
            y?.(void 0);
          }),
          I = ({ arg10ntkyo: e }) =>
            P(async (...t) => {
              y?.(e);
            }),
          L = b(Ue, Se),
          z = t(D)?.isLayoutTemplate,
          B = Ge(z, !!t(d)?.transition?.layout),
          V = h(`XYvp9zth0`),
          me = S();
        return (
          ue(),
          se({ "19a84d9": tt }),
          a(D.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Q,
              primaryVariantId: `dtmiloTd9`,
              variantClassNames: We,
            },
            children: s(f, {
              id: w ?? p,
              children: [
                a($e, {
                  value: `html body { background: var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, rgb(74, 35, 21)); }`,
                }),
                s(u.div, {
                  ...O,
                  className: b(L, `framer-f2f0mu`, C),
                  ref: l,
                  style: { ...x },
                  children: [
                    a(u.main, {
                      className: `framer-xdbgg2`,
                      "data-framer-name": `Main`,
                      layout: B,
                      children: a(`section`, {
                        className: `framer-mij5n6`,
                        "data-border": !0,
                        "data-framer-name": `Section - Works`,
                        id: V,
                        ref: me(V),
                        children: s(`div`, {
                          className: `framer-wyve5l`,
                          "data-framer-name": `Container`,
                          children: [
                            a(`div`, {
                              className: `framer-i1mbbb`,
                              "data-framer-name": `Title Wrapper`,
                              children: a(re, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`h1`, {
                                    className: `framer-styles-preset-1aa1zhl`,
                                    "data-styles-preset": `VwJ5pWYb7`,
                                    dir: `auto`,
                                    children: `Works`,
                                  }),
                                }),
                                className: `framer-12v39r8`,
                                effect: Ke,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            a(`div`, {
                              className: `framer-1ps0wqd`,
                              "data-framer-name": `Filters`,
                              children: a(`div`, {
                                className: `framer-1lx4h18`,
                                children: a(M, {
                                  children: a(Y, {
                                    query: J(),
                                    children: (e, t, n) =>
                                      s(ee, {
                                        children: [
                                          a(E, {
                                            height: 27,
                                            children: a(N, {
                                              className: `framer-roduj5-container`,
                                              nodeId: `U3IbMzIXM`,
                                              scopeId: `IFvtpR9s0`,
                                              children: a(G, {
                                                eAHGXWjyh: F,
                                                height: `100%`,
                                                id: `U3IbMzIXM`,
                                                layoutId: `U3IbMzIXM`,
                                                mXpY5N3RA: `All Works`,
                                                variant: q(qe(K(v), m)),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          e?.map(
                                            ({ Ew0DD0oLS: e, fvyoDlct9: t, id: n }, r) => (
                                              (t ??= ``),
                                              (e ??= ``),
                                              a(
                                                f,
                                                {
                                                  id: `ZJyoc3shD-${n}`,
                                                  children: a(de.Provider, {
                                                    value: { Ew0DD0oLS: e },
                                                    children: a(E, {
                                                      height: 27,
                                                      children: a(N, {
                                                        className: `framer-125c0go-container`,
                                                        nodeId: `ZlONvbIXK`,
                                                        scopeId: `IFvtpR9s0`,
                                                        children: a(G, {
                                                          eAHGXWjyh: I({ arg10ntkyo: n }),
                                                          height: `100%`,
                                                          id: `ZlONvbIXK`,
                                                          layoutId: `ZlONvbIXK`,
                                                          mXpY5N3RA: t,
                                                          variant: q(Ye(Je(v, n), m)),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                },
                                                n
                                              )
                                            )
                                          ),
                                        ],
                                      }),
                                  }),
                                }),
                              }),
                            }),
                            a(`div`, {
                              className: `framer-4ktc12`,
                              "data-framer-cursor": `19a84d9`,
                              "data-framer-name": `Works Grid`,
                              children: a(M, {
                                children: a(Y, {
                                  query: Z(v),
                                  children: (e, t, n) =>
                                    a(ee, {
                                      children: e?.map(
                                        (
                                          {
                                            c2FwDDNTL: e,
                                            Ez5VCK3ej: t,
                                            id: n,
                                            lTa0BBJJI: r,
                                            McxOXebVw: i,
                                            Y3mPbtUk_: o,
                                            zWbd1IZi3: s,
                                          },
                                          c
                                        ) => (
                                          (s ??= ``),
                                          (r ??= ``),
                                          (o ??= ``),
                                          a(
                                            f,
                                            {
                                              id: `Zw04bQTGQ-${n}`,
                                              children: a(de.Provider, {
                                                value: { Y3mPbtUk_: o },
                                                children: a(_, {
                                                  links: [
                                                    {
                                                      href: {
                                                        pathVariables: { Y3mPbtUk_: o },
                                                        webPageId: `VgfNK2SV3`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { Y3mPbtUk_: o },
                                                        webPageId: `VgfNK2SV3`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { Y3mPbtUk_: o },
                                                        webPageId: `VgfNK2SV3`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                  ],
                                                  children: (n) =>
                                                    a(ie, {
                                                      breakpoint: k,
                                                      overrides: {
                                                        ed_UntlQA: {
                                                          width: `max((min(${g?.width || `100vw`} - 40px, 1920px) - 100px) / 2, 50px)`,
                                                        },
                                                        YzcQdhUUh: {
                                                          width: `max(min(${g?.width || `100vw`} - 40px, 1920px) - 40px, 50px)`,
                                                        },
                                                      },
                                                      children: a(E, {
                                                        height: 532,
                                                        width: `max((min(${g?.width || `100vw`} - 40px, 1920px) - 120px) / 3, 50px)`,
                                                        children: a(Re, {
                                                          animate: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            transition: Ze(Xe, c * 0.075),
                                                            x: 0,
                                                            y: 0,
                                                          },
                                                          className: `framer-me4rb1-container`,
                                                          "data-framer-appear-id": `me4rb1-${c}`,
                                                          "data-framer-cursor": `19a84d9`,
                                                          initial: Qe,
                                                          nodeId: `JLVGX2vGf`,
                                                          optimized: !0,
                                                          rendersWithMotion: !0,
                                                          scopeId: `IFvtpR9s0`,
                                                          children: a(ie, {
                                                            breakpoint: k,
                                                            overrides: {
                                                              ed_UntlQA: {
                                                                L6R7y2TaL: n[1],
                                                                variant: q(`EzdL6j049`),
                                                              },
                                                              YzcQdhUUh: {
                                                                L6R7y2TaL: n[2],
                                                                variant: q(`EzdL6j049`),
                                                              },
                                                            },
                                                            children: a(H, {
                                                              dGaHSwr8K: X(i),
                                                              dwJRQb_7B: !1,
                                                              height: `100%`,
                                                              id: `JLVGX2vGf`,
                                                              L6R7y2TaL: n[0],
                                                              layoutId: `JLVGX2vGf`,
                                                              o4DUUefPB: s,
                                                              ORGbJbZ9r: e,
                                                              quCsUw_5F: K(e),
                                                              S2S3oVbI8: r,
                                                              style: { width: `100%` },
                                                              variant: q(`A31E1w9iO`),
                                                              width: `100%`,
                                                              X9U_zUNVJ: X(t),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                              }),
                                            },
                                            n
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    a(E, {
                      height: 0,
                      children: a(N, {
                        className: `framer-yjpnmf-container`,
                        layout: B,
                        nodeId: `ajS8F9VGn`,
                        scopeId: `IFvtpR9s0`,
                        children: a(R, {
                          height: `100%`,
                          id: `ajS8F9VGn`,
                          layoutId: `ajS8F9VGn`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-5A4Tv.framer-1tgdrxa, .framer-5A4Tv .framer-1tgdrxa { display: block; }`,
        `.framer-5A4Tv.framer-f2f0mu { align-content: center; align-items: center; background-color: var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, #4a2315); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-5A4Tv .framer-xdbgg2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5A4Tv .framer-mij5n6 { --border-bottom-width: 0px; --border-color: var(--token-847bdcde-68af-4acc-bb45-37d83fa37c74, #1a1a1a); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, #4a2315); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 160px 0px 60px 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-5A4Tv .framer-wyve5l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 1920px; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-5A4Tv .framer-i1mbbb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5A4Tv .framer-12v39r8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5A4Tv .framer-1ps0wqd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5A4Tv .framer-1lx4h18 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 20px 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5A4Tv .framer-roduj5-container, .framer-5A4Tv .framer-125c0go-container, .framer-5A4Tv .framer-yjpnmf-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-5A4Tv .framer-4ktc12 { display: grid; flex: none; gap: 60px 20px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5A4Tv .framer-me4rb1-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        ...be,
        `.framer-5A4Tv[data-border="true"]::after, .framer-5A4Tv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-5A4Tv.framer-f2f0mu { width: 810px; } .framer-5A4Tv .framer-4ktc12 { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-5A4Tv.framer-f2f0mu { width: 390px; } .framer-5A4Tv .framer-wyve5l { padding: 0px 20px 0px 20px; } .framer-5A4Tv .framer-4ktc12 { grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-5A4Tv`
    )),
    (nt = $),
    ($.displayName = `Works`),
    ($.defaultProps = { height: 2281, width: 1200 }),
    A(
      $,
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
        ...Ie,
        ...Le,
        ...ze,
        ...Be,
        ...C(xe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = (async () => ({
            cFjtK6LzP1: await (async () => {
              let e = t.pathVariables?.service ?? ``;
              if (!e) return ``;
              let r = t.collectionUtils?.get(`K1UDmAL9B`);
              return r ? ((await r.getRecordIdBySlug(e, n)) ?? ``) : ``;
            })(),
          }))(),
          i = k.get(J(), n);
        return Promise.allSettled([
          i.preload(),
          r.then(({ cFjtK6LzP1: e }) => k.get(Z(e), n).preload()),
          y(R, {}, t),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [y(G, {}, t), y(G, {}, t)]));
          })(),
          (async () => {
            let { cFjtK6LzP1: e } = await r,
              i = (await k.get(Z(e), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(i.flatMap((e) => y(H, {}, t)));
          })(),
        ]);
      },
    }),
    (rt = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerIFvtpR9s0`,
          slots: [],
          annotations: {
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ed_UntlQA":{"layout":["fixed","auto"]},"YzcQdhUUh":{"layout":["fixed","auto"]}}}`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerScrollSections: `{"XYvp9zth0":{"pattern":":XYvp9zth0","name":"works"}}`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `2281`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1200`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { rt as __FramerMetadata__, nt as default, He as queryParamNames };
//# sourceMappingURL=0qvNRaT5lXhZh1KJk-SG8s-ds_0_2cdLtgR71PSZVSI.DAAzfIBi.mjs.map
