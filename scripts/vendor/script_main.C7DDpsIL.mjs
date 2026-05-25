import { t as e } from "./rolldown-runtime.TjgygFMs.mjs";
import {
  A as t,
  D as n,
  I as r,
  L as i,
  M as a,
  N as o,
  P as s,
  R as c,
  S as l,
  _ as u,
  a as d,
  c as f,
  g as p,
  i as m,
  j as h,
  k as g,
  l as _,
  m as v,
  n as y,
  o as b,
  p as x,
  r as S,
  s as C,
  t as w,
  u as T,
  v as E,
  w as D,
  y as O,
} from "./react.DY0xf786.mjs";
import { S as k, a as A, r as ee, t as te } from "./motion.BEaCLYSy.mjs";
import {
  A as j,
  At as ne,
  Ct as re,
  D as M,
  E as N,
  Et as P,
  F,
  G as ie,
  J as ae,
  Mt as oe,
  N as I,
  O as L,
  Ot as se,
  P as ce,
  Q as R,
  S as le,
  Tt as ue,
  U as z,
  V as B,
  X as V,
  Y as de,
  Z as fe,
  _ as pe,
  _t as H,
  a as U,
  b as me,
  d as he,
  dt as ge,
  et as _e,
  f as ve,
  ft as ye,
  g as be,
  gt as xe,
  h as Se,
  ht as Ce,
  it as we,
  jt as Te,
  k as Ee,
  kt as De,
  l as Oe,
  lt as ke,
  nt as Ae,
  o as je,
  ot as Me,
  pt as Ne,
  s as W,
  st as Pe,
  w as Fe,
  wt as Ie,
  y as Le,
} from "./framer.DMuD-Poq.mjs";
import { a as Re, c as ze, o as Be, s as Ve } from "./shared-lib.Dqp23CCf.mjs";
import { n as He, t as Ue } from "./TwJkpe0RQ.CZtQ7Gfn.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./PkNO11rL0.B2Dr7UM7.mjs";
import { i as Je, n as Ye, r as Xe, t as Ze } from "./rxHmVAwkI.D5E6Qd6Q.mjs";
var Qe,
  $e,
  et,
  tt = e(() => {
    (V(),
      ce.loadFonts([
        `GF;Cormorant Garamond-500`,
        `GF;Cormorant Garamond-700`,
        `GF;Cormorant Garamond-700italic`,
        `GF;Cormorant Garamond-500italic`,
      ]),
      (Qe = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Cormorant Garamond`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Cormorant Garamond`,
              url: `https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_s06GnbEi_s4Mfs.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Cormorant Garamond`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Cormorant Garamond`,
              url: `https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_hg9GnbEi_s4Mfs.woff2`,
              weight: `700`,
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
            {
              cssFamilyName: `Cormorant Garamond`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Cormorant Garamond`,
              url: `../../assets/fonts/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5wDDOitk9Ifu5UQ.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      ($e = [
        `.framer-KxI8r .framer-styles-preset-3jyyt6:not(.rich-text-wrapper), .framer-KxI8r .framer-styles-preset-3jyyt6.rich-text-wrapper p { --framer-font-family: "Cormorant Garamond", "Cormorant Garamond Placeholder", serif; --framer-font-family-bold: "Cormorant Garamond", "Cormorant Garamond Placeholder", serif; --framer-font-family-bold-italic: "Cormorant Garamond", "Cormorant Garamond Placeholder", serif; --framer-font-family-italic: "Cormorant Garamond", "Cormorant Garamond Placeholder", serif; --framer-font-open-type-features: 'ss07' on; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.06em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-412736a6-764a-4748-80bf-a9c04ad63339, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (et = `framer-KxI8r`));
  });
function nt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  G,
  K,
  pt = e(() => {
    (b(),
      V(),
      te(),
      D(),
      ze(),
      tt(),
      (rt = { hSS1lVekK: { hover: !0 } }),
      (it = [`hSS1lVekK`, `hEPbAqzoU`]),
      (at = `framer-HkEV4`),
      (ot = { hEPbAqzoU: `framer-v-s657s0`, hSS1lVekK: `framer-v-1ew1d7k` }),
      (st = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (ct = ({ value: e, children: n }) => {
        let r = g(A),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(A.Provider, { value: a, children: n });
      }),
      (lt = k.create(o)),
      (ut = { Default: `hSS1lVekK`, Mobile: `hEPbAqzoU` }),
      (dt = ({ click: e, height: t, id: n, link: r, linkText: i, newTab: a, width: o, ...s }) => ({
        ...s,
        kVSoi3gN9: a ?? s.kVSoi3gN9,
        MMIO6ixY6: r ?? s.MMIO6ixY6,
        ncTjJCkYG: i ?? s.ncTjJCkYG ?? `Link Text`,
        Ny_3_2lrs: e ?? s.Ny_3_2lrs,
        variant: ut[s.variant] ?? s.variant ?? `hSS1lVekK`,
      })),
      (ft = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = P(
        u(function (e, t) {
          let r = n(null),
            i = t ?? r,
            a = O(),
            { activeLocale: s, setLocale: c } = H();
          ke();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              ncTjJCkYG: m,
              MMIO6ixY6: h,
              Ny_3_2lrs: g,
              kVSoi3gN9: _,
              ...v
            } = dt(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = ue({
              cycleOrder: it,
              defaultVariant: `hSS1lVekK`,
              enabledGestures: rt,
              ref: i,
              variant: p,
              variantClassNames: ot,
            }),
            A = ft(e, D),
            { activeVariantCallback: te, delay: j } = Pe(y),
            ne = te(async (...e) => {
              if ((T({ isPressed: !1 }), g && (await g(...e)) === !1)) return !1;
            }),
            re = I(at, Re, et);
          return f(ee, {
            id: d ?? a,
            children: f(lt, {
              animate: D,
              initial: !1,
              children: f(ct, {
                value: st,
                children: f(pe, {
                  href: h,
                  motionChild: !0,
                  nodeId: `hSS1lVekK`,
                  openInNewTab: _,
                  scopeId: `Bu1Q64ShN`,
                  children: f(k.a, {
                    ...v,
                    ...S,
                    className: `${I(re, `framer-1ew1d7k`, u, b)} framer-1a3tnhw`,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: A,
                    layoutId: `hSS1lVekK`,
                    onTap: ne,
                    ref: i,
                    style: { ...l },
                    ...nt(
                      {
                        "hSS1lVekK-hover": { "data-framer-name": void 0 },
                        hEPbAqzoU: { "data-framer-name": `Mobile` },
                      },
                      y,
                      C
                    ),
                    children: f(k.div, {
                      className: `framer-1jqeftg`,
                      "data-framer-name": `Wrapper`,
                      layoutDependency: A,
                      layoutId: `lL_oynxek`,
                      children: f(M, {
                        __fromCanvasComponent: !0,
                        children: f(o, {
                          children: f(k.p, {
                            className: `framer-styles-preset-15hwgrk`,
                            "data-styles-preset": `rbICbRVFi`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255)))`,
                            },
                            children: `Link Text`,
                          }),
                        }),
                        className: `framer-1s2pbkq`,
                        fonts: [`Inter`],
                        layoutDependency: A,
                        layoutId: `VjFOBIJ2O`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: m,
                        variants: {
                          "hSS1lVekK-hover": {
                            "--extracted-r6o4lv": `var(--token-4213617f-db71-4b9f-b786-d4b4f6de56f3, rgb(153, 153, 153))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...nt(
                          {
                            "hSS1lVekK-hover": {
                              children: f(o, {
                                children: f(k.p, {
                                  className: `framer-styles-preset-15hwgrk`,
                                  "data-styles-preset": `rbICbRVFi`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4213617f-db71-4b9f-b786-d4b4f6de56f3, rgb(153, 153, 153)))`,
                                  },
                                  children: `Link Text`,
                                }),
                              }),
                            },
                            hEPbAqzoU: {
                              children: f(o, {
                                children: f(k.p, {
                                  className: `framer-styles-preset-3jyyt6`,
                                  "data-styles-preset": `ZiuAtt3CS`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255)))`,
                                  },
                                  children: `Link Text`,
                                }),
                              }),
                            },
                          },
                          y,
                          C
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-HkEV4.framer-1a3tnhw, .framer-HkEV4 .framer-1a3tnhw { display: block; }`,
          `.framer-HkEV4.framer-1ew1d7k { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-HkEV4 .framer-1jqeftg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-HkEV4 .framer-1s2pbkq { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...Be,
          ...$e,
        ],
        `framer-HkEV4`
      )),
      (K = G),
      (G.displayName = `Nav Link`),
      (G.defaultProps = { height: 18, width: 70.5 }),
      j(G, {
        variant: {
          options: [`hSS1lVekK`, `hEPbAqzoU`],
          optionTitles: [`Default`, `Mobile`],
          title: `Variant`,
          type: W.Enum,
        },
        ncTjJCkYG: {
          defaultValue: `Link Text`,
          displayTextArea: !1,
          title: `Link Text`,
          type: W.String,
        },
        MMIO6ixY6: { title: `Link`, type: W.Link },
        Ny_3_2lrs: { title: `Click`, type: W.EventHandler },
        kVSoi3gN9: { defaultValue: !1, title: `New Tab`, type: W.Boolean },
      }),
      Ee(
        G,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...z(Ve),
          ...z(Qe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function mt(e) {
  let { toggle: t } = e;
  return t
    ? f(`style`, {
        "data-frameruni-stop-scroll": !0,
        children: `html,body { overflow: hidden !important; }`,
      })
    : f(C, {});
}
var ht = e(() => {
  (b(),
    V(),
    (mt.displayName = `Stop Scroll`),
    j(mt, {
      toggle: {
        type: W.Boolean,
        title: `Block Scroll`,
        description: `More components at [Framer University](https://frameruni.link/cc).`,
      },
    }));
});
function gt(e, t, n, r, i, a, o) {
  let s = new Date(),
    c = o || void 0;
  try {
    let o = { timeZone: e };
    switch (t) {
      case `time`:
        ((o.hour = r ? `2-digit` : `numeric`),
          (o.minute = `2-digit`),
          (o.hour12 = n),
          i && (o.second = `2-digit`));
        break;
      case `date`:
        o.dateStyle = a;
        break;
      case `dateTime`:
        switch (a) {
          case `short`:
            ((o.year = `2-digit`), (o.month = `numeric`), (o.day = `numeric`));
            break;
          case `medium`:
            ((o.year = `numeric`), (o.month = `short`), (o.day = `numeric`));
            break;
          case `long`:
            ((o.year = `numeric`), (o.month = `long`), (o.day = `numeric`));
            break;
          case `full`:
            ((o.weekday = `long`), (o.year = `numeric`), (o.month = `long`), (o.day = `numeric`));
            break;
        }
        ((o.hour = r ? `2-digit` : `numeric`),
          (o.minute = `2-digit`),
          (o.hour12 = n),
          i && (o.second = `2-digit`));
        break;
    }
    return new Intl.DateTimeFormat(c, o).format(s);
  } catch {
    return new Date().toLocaleString();
  }
}
function _t(e) {
  for (let t of [`p`, `span`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`]) {
    let n = e.querySelectorAll(t);
    for (let e = n.length - 1; e >= 0; e--) {
      let t = n[e];
      if (
        Array.from(t.childNodes).some((e) => e.nodeType === Node.TEXT_NODE && e.textContent?.trim())
      )
        return t;
    }
  }
  let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null),
    n = t.nextNode();
  for (; n; ) {
    if (n.textContent?.trim() && n.parentElement) return n.parentElement;
    n = t.nextNode();
  }
  return null;
}
function vt(e) {
  let {
      textLayer: t,
      timezone: r,
      useCustomTimezone: i,
      customTimezone: o,
      format: c,
      showSeconds: l,
      hour12: u,
      padHour: d,
      dateStyle: p,
      prefix: m,
      suffix: h,
      locale: g,
      style: v,
    } = e,
    y = n(null),
    b = n(null),
    [x, S] = s(!1),
    [w, T] = s(!1),
    E = Fe.current() === Fe.canvas,
    D = xe(),
    O = i ? o : r;
  return (
    a(() => {
      S(!0);
    }, []),
    a(() => {
      if (!x || !y.current) return;
      T(!1);
      let e = setTimeout(() => {
        y.current && ((b.current = _t(y.current)), b.current && T(!0));
      }, 200);
      return () => clearTimeout(e);
    }, [x, t]),
    a(() => {
      !x ||
        !w ||
        !b.current ||
        (!E && !D) ||
        (b.current.textContent = m + gt(O, c, u, d, l, p, g) + h);
    }, [x, w, E, D, O, c, u, d, l, p, m, h, g]),
    a(() => {
      if (!x || E || D || !w || !b.current) return;
      let e = l && (c === `time` || c === `dateTime`) ? 1e3 : 1e4,
        t = () => {
          b.current && (b.current.textContent = m + gt(O, c, u, d, l, p, g) + h);
        };
      t();
      let n = setInterval(t, e);
      return () => clearInterval(n);
    }, [x, E, D, w, O, c, u, d, l, p, m, h, g]),
    t
      ? _(C, {
          children: [
            f(`style`, { children: yt }),
            f(`div`, {
              ref: y,
              className: `wc-fill`,
              style: {
                ...v,
                position: `relative`,
                width: `100%`,
                height: `100%`,
                overflow: `hidden`,
              },
              children: t,
            }),
          ],
        })
      : f(`div`, {
          style: {
            ...v,
            width: `100%`,
            height: `100%`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            background: `rgba(136, 85, 255, 0.1)`,
            border: `1px dashed rgba(136, 85, 255, 0.5)`,
            borderRadius: 8,
            padding: 16,
            color: `rgba(136, 85, 255, 0.8)`,
            fontSize: 14,
            fontFamily: `Inter, sans-serif`,
          },
          children: `Connect a text layer`,
        })
  );
}
var yt,
  bt = e(() => {
    (b(),
      D(),
      V(),
      (yt = `
    .wc-fill > *,
    .wc-fill > * > *,
    .wc-fill > * > * > *,
    .wc-fill > * > * > * > * {
        width: 100% !important;
        height: 100% !important;
        min-width: unset !important;
        max-width: unset !important;
        min-height: unset !important;
        max-height: unset !important;
        position: relative !important;
        left: unset !important;
        top: unset !important;
        right: unset !important;
        bottom: unset !important;
        flex-shrink: 0 !important;
    }
`),
      (vt.defaultProps = {
        timezone: `America/New_York`,
        useCustomTimezone: !1,
        customTimezone: `UTC`,
        format: `time`,
        showSeconds: !1,
        hour12: !0,
        padHour: !1,
        dateStyle: `medium`,
        prefix: ``,
        suffix: ``,
        locale: ``,
      }),
      j(vt, {
        textLayer: { type: W.ComponentInstance, title: `Text Layer` },
        timezone: {
          type: W.Enum,
          title: `Timezone`,
          defaultValue: `America/New_York`,
          options:
            `America/New_York.America/Chicago.America/Denver.America/Los_Angeles.America/Anchorage.Pacific/Honolulu.America/Toronto.America/Vancouver.America/Mexico_City.America/Sao_Paulo.America/Argentina/Buenos_Aires.Europe/London.Europe/Paris.Europe/Berlin.Europe/Amsterdam.Europe/Madrid.Europe/Rome.Europe/Stockholm.Europe/Moscow.Europe/Istanbul.Africa/Cairo.Africa/Johannesburg.Africa/Lagos.Asia/Dubai.Asia/Kolkata.Asia/Bangkok.Asia/Singapore.Asia/Shanghai.Asia/Tokyo.Asia/Seoul.Asia/Hong_Kong.Australia/Sydney.Australia/Melbourne.Pacific/Auckland.UTC`.split(
              `.`
            ),
          optionTitles:
            `New York (ET).Chicago (CT).Denver (MT).Los Angeles (PT).Anchorage (AKT).Honolulu (HT).Toronto (ET).Vancouver (PT).Mexico City (CST).São Paulo (BRT).Buenos Aires (ART).London (GMT/BST).Paris (CET).Berlin (CET).Amsterdam (CET).Madrid (CET).Rome (CET).Stockholm (CET).Moscow (MSK).Istanbul (TRT).Cairo (EET).Johannesburg (SAST).Lagos (WAT).Dubai (GST).Kolkata (IST).Bangkok (ICT).Singapore (SGT).Shanghai (CST).Tokyo (JST).Seoul (KST).Hong Kong (HKT).Sydney (AEST).Melbourne (AEST).Auckland (NZST).UTC`.split(
              `.`
            ),
          hidden: (e) => e.useCustomTimezone,
        },
        useCustomTimezone: {
          type: W.Boolean,
          title: `Custom TZ`,
          defaultValue: !1,
          enabledTitle: `Custom`,
          disabledTitle: `Preset`,
        },
        customTimezone: {
          type: W.String,
          title: `IANA Timezone`,
          defaultValue: `UTC`,
          placeholder: `e.g. Europe/London`,
          hidden: (e) => !e.useCustomTimezone,
        },
        format: {
          type: W.Enum,
          title: `Format`,
          defaultValue: `time`,
          options: [`time`, `date`, `dateTime`],
          optionTitles: [`Time`, `Date`, `Date + Time`],
          displaySegmentedControl: !0,
        },
        hour12: {
          type: W.Boolean,
          title: `12-Hour`,
          defaultValue: !0,
          enabledTitle: `12h`,
          disabledTitle: `24h`,
          hidden: (e) => e.format === `date`,
        },
        padHour: {
          type: W.Boolean,
          title: `Leading Zero`,
          defaultValue: !1,
          enabledTitle: `05`,
          disabledTitle: `5`,
          hidden: (e) => e.format === `date`,
        },
        showSeconds: {
          type: W.Boolean,
          title: `Seconds`,
          defaultValue: !1,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          hidden: (e) => e.format === `date`,
        },
        dateStyle: {
          type: W.Enum,
          title: `Date Style`,
          defaultValue: `medium`,
          options: [`short`, `medium`, `long`, `full`],
          optionTitles: [`Short`, `Medium`, `Long`, `Full`],
          hidden: (e) => e.format === `time`,
        },
        prefix: { type: W.String, title: `Prefix`, defaultValue: ``, placeholder: `e.g. NYC: ` },
        suffix: { type: W.String, title: `Suffix`, defaultValue: ``, placeholder: `e.g.  EST` },
        locale: {
          type: W.String,
          title: `Locale`,
          defaultValue: ``,
          placeholder: `auto (e.g. en-US, fr-FR)`,
        },
      }));
  }),
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  q,
  Mt,
  Nt = e(() => {
    (b(),
      V(),
      te(),
      D(),
      bt(),
      ze(),
      (xt = B(vt)),
      (St = ie(vt)),
      (Ct = `framer-3hO5q`),
      (wt = { aC9syjQkU: `framer-v-1opv84k` }),
      (Tt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Et = ({ value: e, children: n }) => {
        let r = g(A),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(A.Provider, { value: a, children: n });
      }),
      (Dt = k.create(o)),
      (Ot = {
        "Amsterdam (CET)": `Europe/Amsterdam`,
        "Anchorage (AKT)": `America/Anchorage`,
        "Auckland (NZST)": `Pacific/Auckland`,
        "Bangkok (ICT)": `Asia/Bangkok`,
        "Berlin (CET)": `Europe/Berlin`,
        "Buenos Aires (ART)": `America/Argentina/Buenos_Aires`,
        "Cairo (EET)": `Africa/Cairo`,
        "Chicago (CT)": `America/Chicago`,
        "Denver (MT)": `America/Denver`,
        "Dubai (GST)": `Asia/Dubai`,
        "Hong Kong (HKT)": `Asia/Hong_Kong`,
        "Honolulu (HT)": `Pacific/Honolulu`,
        "Istanbul (TRT)": `Europe/Istanbul`,
        "Johannesburg (SAST)": `Africa/Johannesburg`,
        "Kolkata (IST)": `Asia/Kolkata`,
        "Lagos (WAT)": `Africa/Lagos`,
        "London (GMT/BST)": `Europe/London`,
        "Los Angeles (PT)": `America/Los_Angeles`,
        "Madrid (CET)": `Europe/Madrid`,
        "Melbourne (AEST)": `Australia/Melbourne`,
        "Mexico City (CST)": `America/Mexico_City`,
        "Moscow (MSK)": `Europe/Moscow`,
        "New York (ET)": `America/New_York`,
        "Paris (CET)": `Europe/Paris`,
        "Rome (CET)": `Europe/Rome`,
        "São Paulo (BRT)": `America/Sao_Paulo`,
        "Seoul (KST)": `Asia/Seoul`,
        "Shanghai (CST)": `Asia/Shanghai`,
        "Singapore (SGT)": `Asia/Singapore`,
        "Stockholm (CET)": `Europe/Stockholm`,
        "Sydney (AEST)": `Australia/Sydney`,
        "Tokyo (JST)": `Asia/Tokyo`,
        "Toronto (ET)": `America/Toronto`,
        "Vancouver (PT)": `America/Vancouver`,
        UTC: `UTC`,
      }),
      (kt = { "Date + Time": `dateTime`, Date: `date`, Time: `time` }),
      (At = ({
        _12Hour: e,
        customTZ: t,
        format: n,
        height: r,
        id: i,
        leadingZero: a,
        locale: o,
        prefix: s,
        seconds: c,
        suffix: l,
        timezone: u,
        width: d,
        ...f
      }) => ({
        ...f,
        d5YpIXkyq: t ?? f.d5YpIXkyq,
        h4iITHxmT: a ?? f.h4iITHxmT ?? !0,
        IvQ2oBuPn: Ot[u] ?? u ?? f.IvQ2oBuPn ?? `America/Mexico_City`,
        j19Pghvx6: e ?? f.j19Pghvx6 ?? !0,
        jcgA5Ky8H: o ?? f.jcgA5Ky8H,
        LPXLzTQXv: s ?? f.LPXLzTQXv ?? `CDMX `,
        Q0DcHmbBz: c ?? f.Q0DcHmbBz ?? !0,
        R50esfiRZ: kt[n] ?? n ?? f.R50esfiRZ ?? `time`,
        rtjWUvlNt: l ?? f.rtjWUvlNt,
      })),
      (jt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = P(
        u(function (e, t) {
          let r = n(null),
            i = t ?? r,
            a = O(),
            { activeLocale: s, setLocale: c } = H();
          ke();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              IvQ2oBuPn: m,
              d5YpIXkyq: h,
              R50esfiRZ: g,
              j19Pghvx6: _,
              h4iITHxmT: v,
              Q0DcHmbBz: y,
              LPXLzTQXv: b,
              rtjWUvlNt: x,
              jcgA5Ky8H: S,
              ...C
            } = At(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: A,
              isLoading: te,
              setGestureState: j,
              setVariant: ne,
              variants: re,
            } = ue({ defaultVariant: `aC9syjQkU`, ref: i, variant: p, variantClassNames: wt }),
            N = jt(e, re),
            P = I(Ct, Re);
          return f(ee, {
            id: d ?? a,
            children: f(Dt, {
              animate: re,
              initial: !1,
              children: f(Et, {
                value: Tt,
                children: f(k.div, {
                  ...C,
                  ...D,
                  className: I(P, `framer-1opv84k`, u, T),
                  "data-framer-name": `Default`,
                  layoutDependency: N,
                  layoutId: `aC9syjQkU`,
                  ref: i,
                  style: { ...l },
                  children: f(U, {
                    children: f(L, {
                      className: `framer-1y8kp2k-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: N,
                      layoutId: `u2eVMOHeF-container`,
                      nodeId: `u2eVMOHeF`,
                      rendersWithMotion: !0,
                      scopeId: `GOv5Uicgg`,
                      children: f(vt, {
                        customTimezone: `UTC`,
                        dateStyle: `medium`,
                        format: g,
                        height: `100%`,
                        hour12: _,
                        id: `u2eVMOHeF`,
                        layoutId: `u2eVMOHeF`,
                        locale: S,
                        padHour: v,
                        prefix: b,
                        showSeconds: y,
                        style: { width: `100%` },
                        suffix: x,
                        textLayer: [
                          f(k.div, {
                            className: `framer-1f6w3ty`,
                            "data-framer-name": `Text Layer`,
                            layoutDependency: N,
                            layoutId: `oUianhKft`,
                            children: f(M, {
                              __fromCanvasComponent: !0,
                              children: f(o, {
                                children: f(k.p, {
                                  className: `framer-styles-preset-15hwgrk`,
                                  "data-styles-preset": `rbICbRVFi`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `right` },
                                  children: `cdmx`,
                                }),
                              }),
                              className: `framer-1n541eb`,
                              fonts: [`Inter`],
                              layoutDependency: N,
                              layoutId: `f2VHTZYnb`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                        timezone: m,
                        useCustomTimezone: h,
                        width: `100%`,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-3hO5q.framer-17wqhhm, .framer-3hO5q .framer-17wqhhm { display: block; }`,
          `.framer-3hO5q.framer-1opv84k { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 232px; }`,
          `.framer-3hO5q .framer-1y8kp2k-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-3hO5q .framer-1f6w3ty { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 257px; }`,
          `.framer-3hO5q .framer-1n541eb { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...Be,
        ],
        `framer-3hO5q`
      )),
      (Mt = q),
      (q.displayName = `Clock Component`),
      (q.defaultProps = { height: 24, width: 232 }),
      j(q, {
        IvQ2oBuPn: St?.timezone && {
          ...St.timezone,
          defaultValue: `America/Mexico_City`,
          description: void 0,
          hidden: void 0,
          title: `Timezone`,
        },
        onIvQ2oBuPnChange: { changes: `IvQ2oBuPn`, type: W.ChangeHandler },
        d5YpIXkyq: { defaultValue: !1, title: `Custom TZ`, type: W.Boolean },
        ond5YpIXkyqChange: { changes: `d5YpIXkyq`, type: W.ChangeHandler },
        R50esfiRZ: St?.format && {
          ...St.format,
          defaultValue: `time`,
          description: void 0,
          hidden: void 0,
          title: `Format`,
        },
        onR50esfiRZChange: { changes: `R50esfiRZ`, type: W.ChangeHandler },
        j19Pghvx6: { defaultValue: !0, title: `12 Hour`, type: W.Boolean },
        onj19Pghvx6Change: { changes: `j19Pghvx6`, type: W.ChangeHandler },
        h4iITHxmT: { defaultValue: !0, title: `Leading Zero`, type: W.Boolean },
        onh4iITHxmTChange: { changes: `h4iITHxmT`, type: W.ChangeHandler },
        Q0DcHmbBz: { defaultValue: !0, title: `Seconds`, type: W.Boolean },
        onQ0DcHmbBzChange: { changes: `Q0DcHmbBz`, type: W.ChangeHandler },
        LPXLzTQXv: {
          defaultValue: `CDMX `,
          placeholder: `e.g. NYC: `,
          title: `Prefix`,
          type: W.String,
        },
        onLPXLzTQXvChange: { changes: `LPXLzTQXv`, type: W.ChangeHandler },
        rtjWUvlNt: { defaultValue: ``, placeholder: `e.g.  EST`, title: `Suffix`, type: W.String },
        onrtjWUvlNtChange: { changes: `rtjWUvlNt`, type: W.ChangeHandler },
        jcgA5Ky8H: {
          defaultValue: ``,
          placeholder: `auto (e.g. en-US, fr-FR)`,
          title: `Locale`,
          type: W.String,
        },
        onjcgA5Ky8HChange: { changes: `jcgA5Ky8H`, type: W.ChangeHandler },
      }),
      Ee(
        q,
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
          ...xt,
          ...z(Ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Y,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  X,
  Zt,
  Qt = e(() => {
    (b(),
      V(),
      te(),
      D(),
      ht(),
      ze(),
      pt(),
      Nt(),
      He(),
      (Pt = B(mt)),
      (Ft = B(Ue)),
      (It = B(K)),
      (Lt = B(Mt)),
      (Rt = De(se(k.div))),
      (zt = [`XYyEUvm1I`, `YDEExNB3U`, `k90JaU_QE`, `FXxa5zSeN`]),
      (Bt = `framer-LSrBf`),
      (Vt = {
        FXxa5zSeN: `framer-v-1p5oebw`,
        k90JaU_QE: `framer-v-utjcj`,
        XYyEUvm1I: `framer-v-cwkb55`,
        YDEExNB3U: `framer-v-165gn3u`,
      }),
      (Ht = { bounce: 0, delay: 0, duration: 0.8, type: `spring` }),
      (Ut = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Wt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0, duration: 1.2, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Gt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -120,
      }),
      (Y = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Kt = ({ value: e, children: n }) => {
        let r = g(A),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(A.Provider, { value: a, children: n });
      }),
      (qt = {
        "Desktop Transparent": `FXxa5zSeN`,
        "Desktop With Background": `XYyEUvm1I`,
        "Tablet / Mobile Closed": `k90JaU_QE`,
        "Tablet / Mobile Open": `YDEExNB3U`,
      }),
      (Jt = k.create(o)),
      (Yt = ({ height: e, id: t, paddingContainer: n, width: r, ...i }) => ({
        ...i,
        dKmh2_1Yc: n ?? i.dKmh2_1Yc ?? `20px`,
        variant: qt[i.variant] ?? i.variant ?? `XYyEUvm1I`,
      })),
      (Xt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = P(
        u(function (e, t) {
          let r = n(null),
            i = t ?? r,
            a = O(),
            { activeLocale: s, setLocale: c } = H(),
            l = ke(),
            { style: u, className: d, layoutId: p, variant: m, dKmh2_1Yc: h, ...g } = Yt(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = ue({
              cycleOrder: zt,
              defaultVariant: `XYyEUvm1I`,
              ref: i,
              variant: m,
              variantClassNames: Vt,
            }),
            D = Xt(e, E),
            { activeVariantCallback: A, delay: te } = Pe(v),
            j = A(async (...e) => {
              T(`k90JaU_QE`);
            }),
            ne = A(async (...e) => {
              T(`YDEExNB3U`);
            }),
            P = A(async (...e) => {
              T(`k90JaU_QE`);
            }),
            F = A(async (...e) => {
              T(`XYyEUvm1I`);
            }),
            ie = I(Bt, Re),
            ae = () => !![`YDEExNB3U`, `k90JaU_QE`].includes(v);
          re();
          let oe = () => ![`YDEExNB3U`, `k90JaU_QE`].includes(v);
          return f(ee, {
            id: p ?? a,
            children: f(Jt, {
              animate: E,
              initial: !1,
              children: f(Kt, {
                value: Ht,
                children: _(k.nav, {
                  ...g,
                  ...x,
                  className: I(ie, `framer-cwkb55`, d, y),
                  "data-framer-name": `Desktop With Background`,
                  layoutDependency: D,
                  layoutId: `XYyEUvm1I`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, rgb(74, 35, 21))`,
                    ...u,
                  },
                  variants: { FXxa5zSeN: { backgroundColor: `rgba(15, 15, 15, 0)` } },
                  ...J(
                    {
                      FXxa5zSeN: { "data-framer-name": `Desktop Transparent` },
                      k90JaU_QE: { "data-framer-name": `Tablet / Mobile Closed` },
                      YDEExNB3U: { "data-framer-name": `Tablet / Mobile Open` },
                    },
                    v,
                    S
                  ),
                  children: [
                    f(U, {
                      children: f(L, {
                        className: `framer-1meuhep-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: D,
                        layoutId: `sReqvoPEZ-container`,
                        nodeId: `sReqvoPEZ`,
                        rendersWithMotion: !0,
                        scopeId: `gsKOM0wdL`,
                        children: f(mt, {
                          height: `100%`,
                          id: `sReqvoPEZ`,
                          layoutId: `sReqvoPEZ`,
                          toggle: !1,
                          width: `100%`,
                          ...J({ YDEExNB3U: { toggle: !0 } }, v, S),
                        }),
                      }),
                    }),
                    _(Rt, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: Wt,
                      className: `framer-ouh0y8`,
                      "data-framer-appear-id": `ouh0y8`,
                      "data-framer-name": `Container`,
                      initial: Gt,
                      layoutDependency: D,
                      layoutId: `rH5gIQqE4`,
                      optimized: !0,
                      style: { "--s3nqeg": Ut(h) },
                      ...J(
                        {
                          k90JaU_QE: { animate: void 0, initial: void 0, optimized: void 0 },
                          YDEExNB3U: { animate: void 0, initial: void 0, optimized: void 0 },
                        },
                        v,
                        S
                      ),
                      children: [
                        _(k.div, {
                          className: `framer-1grl81i`,
                          "data-framer-name": `Logo & Menu Button Mobile`,
                          layoutDependency: D,
                          layoutId: `dB_rIJJtO`,
                          children: [
                            f(U, {
                              height: 36,
                              children: f(L, {
                                className: `framer-16z1278-container`,
                                layoutDependency: D,
                                layoutId: `ESoTitMU0-container`,
                                nodeId: `ESoTitMU0`,
                                rendersWithMotion: !0,
                                scopeId: `gsKOM0wdL`,
                                children: f(Ue, {
                                  height: `100%`,
                                  id: `ESoTitMU0`,
                                  layoutId: `ESoTitMU0`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            ae() &&
                              _(k.div, {
                                className: `framer-229hv`,
                                "data-framer-name": `Menu Button Mobile`,
                                layoutDependency: D,
                                layoutId: `PfaswfYxg`,
                                ...J(
                                  {
                                    k90JaU_QE: { "data-highlight": !0, onTap: ne },
                                    YDEExNB3U: { "data-highlight": !0, onTap: j },
                                  },
                                  v,
                                  S
                                ),
                                children: [
                                  f(M, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(k.p, {
                                        className: `framer-styles-preset-15hwgrk`,
                                        "data-styles-preset": `rbICbRVFi`,
                                        dir: `auto`,
                                        children: `Menu`,
                                      }),
                                    }),
                                    className: `framer-1l2jmq1`,
                                    fonts: [`Inter`],
                                    layoutDependency: D,
                                    layoutId: `nrCKDnd8Z`,
                                    style: {
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(M, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(k.p, {
                                        className: `framer-styles-preset-15hwgrk`,
                                        "data-styles-preset": `rbICbRVFi`,
                                        dir: `auto`,
                                        children: `Close`,
                                      }),
                                    }),
                                    className: `framer-i6nt9q`,
                                    fonts: [`Inter`],
                                    layoutDependency: D,
                                    layoutId: `rAbAD_MA8`,
                                    style: {
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        _(k.ul, {
                          className: `framer-s38h4c`,
                          "data-framer-name": `Nav Menu`,
                          layoutDependency: D,
                          layoutId: `jyV9adD6E`,
                          children: [
                            f(N, {
                              links: [
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(U, {
                                  height: 18,
                                  children: f(L, {
                                    as: `li`,
                                    className: `framer-oao3i0-container`,
                                    layoutDependency: D,
                                    layoutId: `XWnLuuo_r-container`,
                                    nodeId: `XWnLuuo_r`,
                                    rendersWithMotion: !0,
                                    scopeId: `gsKOM0wdL`,
                                    children: f(K, {
                                      height: `100%`,
                                      id: `XWnLuuo_r`,
                                      kVSoi3gN9: !1,
                                      layoutId: `XWnLuuo_r`,
                                      MMIO6ixY6: e[0],
                                      ncTjJCkYG: `Home`,
                                      variant: Y(`hSS1lVekK`),
                                      width: `100%`,
                                      ...J(
                                        {
                                          FXxa5zSeN: { MMIO6ixY6: e[3] },
                                          k90JaU_QE: { MMIO6ixY6: e[2], variant: Y(`hEPbAqzoU`) },
                                          YDEExNB3U: {
                                            MMIO6ixY6: e[1],
                                            Ny_3_2lrs: P,
                                            variant: Y(`hEPbAqzoU`),
                                          },
                                        },
                                        v,
                                        S
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(N, {
                              links: [
                                { href: { webPageId: `IFvtpR9s0` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `IFvtpR9s0` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `IFvtpR9s0` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `IFvtpR9s0` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(U, {
                                  height: 18,
                                  children: f(L, {
                                    as: `li`,
                                    className: `framer-1hzi9pn-container`,
                                    layoutDependency: D,
                                    layoutId: `qTx43rN1z-container`,
                                    nodeId: `qTx43rN1z`,
                                    rendersWithMotion: !0,
                                    scopeId: `gsKOM0wdL`,
                                    children: f(K, {
                                      height: `100%`,
                                      id: `qTx43rN1z`,
                                      kVSoi3gN9: !1,
                                      layoutId: `qTx43rN1z`,
                                      MMIO6ixY6: e[0],
                                      ncTjJCkYG: `Works`,
                                      Ny_3_2lrs: F,
                                      variant: Y(`hSS1lVekK`),
                                      width: `100%`,
                                      ...J(
                                        {
                                          FXxa5zSeN: { MMIO6ixY6: e[3] },
                                          k90JaU_QE: { MMIO6ixY6: e[2], variant: Y(`hEPbAqzoU`) },
                                          YDEExNB3U: {
                                            MMIO6ixY6: e[1],
                                            Ny_3_2lrs: P,
                                            variant: Y(`hEPbAqzoU`),
                                          },
                                        },
                                        v,
                                        S
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(N, {
                              links: [
                                { href: { webPageId: `X_ReXY54C` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `X_ReXY54C` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `X_ReXY54C` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `X_ReXY54C` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(U, {
                                  height: 18,
                                  children: f(L, {
                                    as: `li`,
                                    className: `framer-1kqxqgr-container`,
                                    layoutDependency: D,
                                    layoutId: `OGpiXc_Xd-container`,
                                    nodeId: `OGpiXc_Xd`,
                                    rendersWithMotion: !0,
                                    scopeId: `gsKOM0wdL`,
                                    children: f(K, {
                                      height: `100%`,
                                      id: `OGpiXc_Xd`,
                                      kVSoi3gN9: !1,
                                      layoutId: `OGpiXc_Xd`,
                                      MMIO6ixY6: e[0],
                                      ncTjJCkYG: `Archives`,
                                      variant: Y(`hSS1lVekK`),
                                      width: `100%`,
                                      ...J(
                                        {
                                          FXxa5zSeN: { MMIO6ixY6: e[3] },
                                          k90JaU_QE: { MMIO6ixY6: e[2], variant: Y(`hEPbAqzoU`) },
                                          YDEExNB3U: {
                                            MMIO6ixY6: e[1],
                                            Ny_3_2lrs: P,
                                            variant: Y(`hEPbAqzoU`),
                                          },
                                        },
                                        v,
                                        S
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(N, {
                              links: [
                                { href: { webPageId: `OzGETAt6L` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `OzGETAt6L` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `OzGETAt6L` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `OzGETAt6L` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(U, {
                                  height: 18,
                                  children: f(L, {
                                    as: `li`,
                                    className: `framer-1066vbk-container`,
                                    layoutDependency: D,
                                    layoutId: `IemBTAHEn-container`,
                                    nodeId: `IemBTAHEn`,
                                    rendersWithMotion: !0,
                                    scopeId: `gsKOM0wdL`,
                                    children: f(K, {
                                      height: `100%`,
                                      id: `IemBTAHEn`,
                                      kVSoi3gN9: !1,
                                      layoutId: `IemBTAHEn`,
                                      MMIO6ixY6: e[0],
                                      ncTjJCkYG: `Contact`,
                                      variant: Y(`hSS1lVekK`),
                                      width: `100%`,
                                      ...J(
                                        {
                                          FXxa5zSeN: { MMIO6ixY6: e[3] },
                                          k90JaU_QE: { MMIO6ixY6: e[2], variant: Y(`hEPbAqzoU`) },
                                          YDEExNB3U: {
                                            MMIO6ixY6: e[1],
                                            Ny_3_2lrs: P,
                                            variant: Y(`hEPbAqzoU`),
                                          },
                                        },
                                        v,
                                        S
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            f(N, {
                              links: [
                                { href: { webPageId: `d_JPOyUje` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `d_JPOyUje` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `d_JPOyUje` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `d_JPOyUje` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(U, {
                                  height: 18,
                                  children: f(L, {
                                    as: `li`,
                                    className: `framer-1paxyeo-container`,
                                    layoutDependency: D,
                                    layoutId: `eSZyXWPOa-container`,
                                    nodeId: `eSZyXWPOa`,
                                    rendersWithMotion: !0,
                                    scopeId: `gsKOM0wdL`,
                                    children: f(K, {
                                      height: `100%`,
                                      id: `eSZyXWPOa`,
                                      kVSoi3gN9: !1,
                                      layoutId: `eSZyXWPOa`,
                                      MMIO6ixY6: e[0],
                                      ncTjJCkYG: `Reflection`,
                                      variant: Y(`hSS1lVekK`),
                                      width: `100%`,
                                      ...J(
                                        {
                                          FXxa5zSeN: { MMIO6ixY6: e[3] },
                                          k90JaU_QE: { MMIO6ixY6: e[2] },
                                          YDEExNB3U: { MMIO6ixY6: e[1] },
                                        },
                                        v,
                                        S
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                        oe() &&
                          f(k.div, {
                            className: `framer-1jjw1cv`,
                            "data-framer-name": `Clock`,
                            layoutDependency: D,
                            layoutId: `EeyPFz4Au`,
                            children: f(U, {
                              height: 24,
                              width: `max(((min(${l?.width || `100vw`}, 1920px) - ${h * 2}px) - 80px) / 4, 1px)`,
                              children: f(L, {
                                className: `framer-1uc3wp-container`,
                                layoutDependency: D,
                                layoutId: `M5JeyZe2y-container`,
                                nodeId: `M5JeyZe2y`,
                                rendersWithMotion: !0,
                                scopeId: `gsKOM0wdL`,
                                children: f(Mt, {
                                  d5YpIXkyq: !1,
                                  h4iITHxmT: !0,
                                  height: `100%`,
                                  id: `M5JeyZe2y`,
                                  IvQ2oBuPn: `America/Mexico_City`,
                                  j19Pghvx6: !1,
                                  jcgA5Ky8H: ``,
                                  layoutId: `M5JeyZe2y`,
                                  LPXLzTQXv: `Edmonton  `,
                                  Q0DcHmbBz: !0,
                                  R50esfiRZ: `time`,
                                  rtjWUvlNt: ``,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-LSrBf.framer-jgxqb4, .framer-LSrBf .framer-jgxqb4 { display: block; }`,
          `.framer-LSrBf.framer-cwkb55 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-LSrBf .framer-1meuhep-container, .framer-LSrBf .framer-16z1278-container, .framer-LSrBf .framer-oao3i0-container, .framer-LSrBf .framer-1hzi9pn-container, .framer-LSrBf .framer-1kqxqgr-container, .framer-LSrBf .framer-1066vbk-container, .framer-LSrBf .framer-1paxyeo-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-LSrBf .framer-ouh0y8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 1920px; overflow: visible; padding: var(--s3nqeg); position: relative; width: 100%; }`,
          `.framer-LSrBf .framer-1grl81i { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
          `.framer-LSrBf .framer-229hv { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 18px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-LSrBf .framer-1l2jmq1, .framer-LSrBf .framer-i6nt9q { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-LSrBf .framer-s38h4c { align-content: center; align-items: center; display: flex; flex: 2 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; list-style: none; margin: 0px; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
          `.framer-LSrBf .framer-1jjw1cv { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
          `.framer-LSrBf .framer-1uc3wp-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-LSrBf.framer-v-165gn3u.framer-cwkb55, .framer-LSrBf.framer-v-utjcj.framer-cwkb55 { align-content: flex-start; align-items: flex-start; width: 390px; }`,
          `.framer-LSrBf.framer-v-165gn3u .framer-ouh0y8 { flex-direction: column; min-height: calc(var(--framer-viewport-height, 100vh) * 1); }`,
          `.framer-LSrBf.framer-v-165gn3u .framer-1grl81i, .framer-LSrBf.framer-v-utjcj .framer-1grl81i { flex: none; width: 100%; }`,
          `.framer-LSrBf.framer-v-165gn3u .framer-229hv { cursor: pointer; justify-content: flex-end; }`,
          `.framer-LSrBf.framer-v-165gn3u .framer-s38h4c, .framer-LSrBf.framer-v-utjcj .framer-s38h4c { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 4px; justify-content: flex-start; width: 200%; }`,
          `.framer-LSrBf.framer-v-utjcj .framer-ouh0y8 { flex-direction: column; height: 58px; }`,
          `.framer-LSrBf.framer-v-utjcj .framer-229hv { cursor: pointer; }`,
          ...Be,
        ],
        `framer-LSrBf`
      )),
      (Zt = X),
      (X.displayName = `Navbar`),
      (X.defaultProps = { height: 76, width: 1200 }),
      j(X, {
        variant: {
          options: [`XYyEUvm1I`, `YDEExNB3U`, `k90JaU_QE`, `FXxa5zSeN`],
          optionTitles: [
            `Desktop With Background`,
            `Tablet / Mobile Open`,
            `Tablet / Mobile Closed`,
            `Desktop Transparent`,
          ],
          title: `Variant`,
          type: W.Enum,
        },
        dKmh2_1Yc: { defaultValue: `20px`, title: `Padding Container`, type: W.Padding },
      }),
      Ee(
        X,
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
          ...Pt,
          ...Ft,
          ...It,
          ...Lt,
          ...z(Ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([F(Ue, {}, t), F(K, {}, t), F(Mt, {}, t)])),
      }));
  }),
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  Z,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  Q,
  bn,
  xn = e(() => {
    (b(),
      V(),
      te(),
      D(),
      pt(),
      Qt(),
      He(),
      We(),
      ze(),
      Je(),
      ($t = B(Zt)),
      (en = Te(Zt)),
      (tn = B(K)),
      (nn = B(Ue)),
      (rn = {
        t_ZaGGSr9: `(max-width: 809.98px)`,
        Tx4T4LGZR: `(min-width: 810px) and (max-width: 1199.98px)`,
        ZCPtkEyfP: `(min-width: 1200px)`,
      }),
      (an = `framer-TWptj`),
      (on = {
        t_ZaGGSr9: `framer-v-s5gvas`,
        Tx4T4LGZR: `framer-v-2uforx`,
        ZCPtkEyfP: `framer-v-p5jovi`,
      }),
      (sn = (e, t) => `translateX(-50%) ${t}`),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (cn = {
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
        startDelay: 0.2,
        threshold: 1,
        tokenization: `word`,
        transition: { bounce: 0, delay: 0.1, duration: 1.8, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (ln = {
        t_ZaGGSr9: [
          `.framer-TWptj .framer-jreu0k { padding: 0px 20px 0px 20px; }`,
          `.framer-TWptj .framer-939ny2 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 48px; justify-content: flex-start; }`,
          `.framer-TWptj .framer-1cmoijs, .framer-TWptj .framer-lr5r2w { flex: none; width: 100%; }`,
        ],
      }),
      (un = Object.keys(ln)),
      (dn = { t_ZaGGSr9: `.framer-s5gvas-override` }),
      (fn = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-TWptj.framer-17yjk4k, .framer-TWptj .framer-17yjk4k { display: block; }`,
        `.framer-TWptj.framer-p5jovi { align-content: center; align-items: center; background-color: var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, #4a2315); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-TWptj .framer-trbcup-container { flex: none; height: auto; left: 50%; order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 0px; width: 100%; z-index: 10; }`,
        `.framer-TWptj .framer-1t17y08 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-TWptj .framer-tc28hr { align-content: center; align-items: center; background-color: var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, #30180f); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; order: 1002; overflow: hidden; padding: 60px 0px 40px 0px; position: relative; width: 100%; z-index: 7; }`,
        `.framer-TWptj .framer-jreu0k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 1920px; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-TWptj .framer-ps9kdj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-TWptj .framer-wm5425 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-TWptj .framer-939ny2 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-TWptj .framer-1cmoijs { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-TWptj .framer-l9rge7-container, .framer-TWptj .framer-zor2lr-container, .framer-TWptj .framer-18ryqsi-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-TWptj .framer-lr5r2w { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-TWptj .framer-15jvf87 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        ...Ye,
        ...Ge,
        ...Be,
      ]),
      (pn = {
        t_ZaGGSr9: `(max-width: 809.98px)`,
        Tx4T4LGZR: `(min-width: 810px) and (max-width: 1199.98px)`,
        ZCPtkEyfP: `(min-width: 1200px)`,
      }),
      (mn = { Desktop: `ZCPtkEyfP`, Phone: `t_ZaGGSr9`, Tablet: `Tx4T4LGZR` }),
      (hn = ({ value: e }) =>
        Ce()
          ? null
          : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (gn = ({ height: e, id: t, scrollSectionNavbar: n, width: r, ...i }) => ({
        ...i,
        QunVsZw7u: n ?? i.QunVsZw7u,
        variant: mn[i.variant] ?? i.variant ?? `ZCPtkEyfP`,
      })),
      (_n = { component: Ue, variant: `t4e5r1qqd` }),
      (vn = u(function (e, t) {
        let r = n(null),
          i = t ?? r,
          a = O(),
          { activeLocale: s, setLocale: c } = H(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: p,
            QunVsZw7u: m,
            children: h,
            ...g
          } = gn(e),
          [v, y] = Ne(p, rn, !1),
          b = I(an, Ze, qe, Re);
        return (
          ye({ wrsxj9: _n }),
          f(he.Provider, {
            value: {
              activeVariantId: v,
              humanReadableVariantMap: mn,
              isLayoutTemplate: !0,
              primaryVariantId: `ZCPtkEyfP`,
              variantClassNames: on,
            },
            children: _(ee, {
              id: d ?? a,
              children: [
                f(hn, {
                  value: `:root body { background: var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, rgb(74, 35, 21)); }`,
                }),
                _(k.div, {
                  ...g,
                  className: I(b, `framer-p5jovi`, u),
                  "data-framer-cursor": `wrsxj9`,
                  "data-layout-template": !0,
                  ref: i,
                  style: { ...l },
                  children: [
                    f(U, {
                      height: 76,
                      width: `100vw`,
                      y: 0,
                      children: f(je, {
                        className: `framer-trbcup-container`,
                        "data-framer-cursor": `wrsxj9`,
                        "data-framer-layout-hint-center-x": !0,
                        layoutScroll: !0,
                        nodeId: `nRR_JTuqz`,
                        rendersWithMotion: !0,
                        scopeId: `WvucJel4E`,
                        transformTemplate: sn,
                        children: f(le, {
                          breakpoint: v,
                          overrides: {
                            t_ZaGGSr9: {
                              __framer__variantAppearEffectEnabled: void 0,
                              dKmh2_1Yc: `20px 20px 20px 20px`,
                              variant: Z(`k90JaU_QE`),
                            },
                            Tx4T4LGZR: {
                              __framer__variantAppearEffectEnabled: void 0,
                              variant: Z(`k90JaU_QE`),
                            },
                          },
                          children: f(en, {
                            __framer__animateOnce: !1,
                            __framer__targets: [{ ref: m, target: `XYyEUvm1I` }],
                            __framer__threshold: 0.5,
                            __framer__variantAppearEffectEnabled: !0,
                            dKmh2_1Yc: `20px 40px 20px 40px`,
                            height: `100%`,
                            id: `nRR_JTuqz`,
                            layoutId: `nRR_JTuqz`,
                            style: { width: `100%` },
                            variant: Z(`FXxa5zSeN`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    h,
                    f(`div`, { className: `framer-1t17y08` }),
                    f(k.footer, {
                      className: `framer-tc28hr`,
                      "data-framer-cursor": `wrsxj9`,
                      "data-framer-name": `Footer`,
                      children: _(`div`, {
                        className: `framer-jreu0k`,
                        "data-framer-name": `Container`,
                        children: [
                          f(`div`, {
                            className: `framer-ps9kdj`,
                            "data-framer-name": `Contact Link`,
                            children: f(M, {
                              __fromCanvasComponent: !0,
                              children: f(o, {
                                children: f(`h2`, {
                                  className: `framer-styles-preset-tajk5m`,
                                  "data-styles-preset": `rxHmVAwkI`,
                                  dir: `auto`,
                                  children: f(pe, {
                                    href: { webPageId: `OzGETAt6L` },
                                    motionChild: !0,
                                    nodeId: `UuBdJIhsh`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `WvucJel4E`,
                                    smoothScroll: !1,
                                    children: f(k.a, {
                                      className: `framer-styles-preset-u7w58n`,
                                      "data-styles-preset": `PkNO11rL0`,
                                      children: `Get in Touch`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-wm5425`,
                              effect: cn,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          _(`div`, {
                            className: `framer-939ny2`,
                            "data-framer-name": `Wrapper`,
                            children: [
                              _(`div`, {
                                className: `framer-1cmoijs`,
                                "data-framer-name": `Social Links`,
                                children: [
                                  f(U, {
                                    height: 18,
                                    children: f(je, {
                                      className: `framer-l9rge7-container`,
                                      nodeId: `MiQjowZJc`,
                                      scopeId: `WvucJel4E`,
                                      children: f(K, {
                                        height: `100%`,
                                        id: `MiQjowZJc`,
                                        kVSoi3gN9: !0,
                                        layoutId: `MiQjowZJc`,
                                        MMIO6ixY6: `https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrdktxtFCLkRbqBshhjmtWVmlCvCCLtRWKvrbszsSlGZPjScQJCtQHXktzBMhFMwGhGwgq`,
                                        ncTjJCkYG: `Email`,
                                        variant: Z(`hSS1lVekK`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  f(U, {
                                    height: 18,
                                    children: f(je, {
                                      className: `framer-zor2lr-container`,
                                      nodeId: `o5mVnATaM`,
                                      scopeId: `WvucJel4E`,
                                      children: f(K, {
                                        height: `100%`,
                                        id: `o5mVnATaM`,
                                        kVSoi3gN9: !0,
                                        layoutId: `o5mVnATaM`,
                                        MMIO6ixY6: `https://www.instagram.com/joyjia.design/`,
                                        ncTjJCkYG: `Instagram`,
                                        variant: Z(`hSS1lVekK`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  f(U, {
                                    height: 18,
                                    children: f(je, {
                                      className: `framer-18ryqsi-container`,
                                      nodeId: `uUYK2njTy`,
                                      scopeId: `WvucJel4E`,
                                      children: f(K, {
                                        height: `100%`,
                                        id: `uUYK2njTy`,
                                        kVSoi3gN9: !0,
                                        layoutId: `uUYK2njTy`,
                                        MMIO6ixY6: `www.linkedin.com/in/joyjiadesign`,
                                        ncTjJCkYG: `LinkedIn`,
                                        variant: Z(`hSS1lVekK`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              f(`div`, {
                                className: `framer-lr5r2w`,
                                "data-framer-name": `Copyright`,
                                children: f(le, {
                                  breakpoint: v,
                                  overrides: {
                                    t_ZaGGSr9: {
                                      children: f(o, {
                                        children: f(`p`, {
                                          className: `framer-styles-preset-15hwgrk`,
                                          "data-styles-preset": `rbICbRVFi`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255))`,
                                          },
                                          children: `©2026`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: f(M, {
                                    __fromCanvasComponent: !0,
                                    children: f(o, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-15hwgrk`,
                                        "data-styles-preset": `rbICbRVFi`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `right`,
                                          "--framer-text-color": `var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255))`,
                                        },
                                        children: `©2026`,
                                      }),
                                    }),
                                    className: `framer-15jvf87`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (yn = (e) =>
        e === Fe.canvas || e === Fe.export
          ? [
              ...fn,
              ...un.flatMap((e) => {
                let t = dn[e];
                return ln[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...fn, ...un.map((e) => `@media ${pn[e]} { ${ln[e].join(` `)} }`)]),
      (Q = P(vn, yn, `framer-TWptj`)),
      (bn = Q),
      (Q.displayName = `Main`),
      (Q.defaultProps = { height: 1e3, width: 1200 }),
      j(Q, { QunVsZw7u: { title: `Scroll Section Navbar`, type: W.ScrollSectionRef } }),
      Ee(
        Q,
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
          ...$t,
          ...tn,
          ...nn,
          ...z(Xe),
          ...z(Ke),
          ...z(Ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([F(Zt, {}, t), F(K, {}, t)])) }));
  });
function Sn({ webPageId: e, children: t, style: n, ...r }) {
  let i = { QunVsZw7u: { href: { hash: `:lwGJUZXPf`, webPageId: `augiA20Il` }, refKey: !0 } },
    a = { ...i, QunVsZw7u: { href: { hash: `:XYvp9zth0`, webPageId: `IFvtpR9s0` }, refKey: !0 } },
    o = { ...i, QunVsZw7u: { href: { hash: `:qWVNzUkY9`, webPageId: `X_ReXY54C` }, refKey: !0 } },
    s = { ...i, QunVsZw7u: { href: { hash: `:tT57GdiID`, webPageId: `OzGETAt6L` }, refKey: !0 } },
    c = { ...i, QunVsZw7u: void 0 },
    l = { ...i, QunVsZw7u: { href: { webPageId: `RnhOvYCUk` }, refKey: !0 } },
    u = { ...i, QunVsZw7u: { href: { hash: `:Qn3rsdpUH`, webPageId: `VgfNK2SV3` }, refKey: !0 } },
    d = Ie(),
    f =
      {
        augiA20Il: i,
        d_JPOyUje: c,
        IFvtpR9s0: a,
        OzGETAt6L: s,
        RnhOvYCUk: l,
        VgfNK2SV3: u,
        X_ReXY54C: o,
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `IFvtpR9s0`:
    case `X_ReXY54C`:
    case `OzGETAt6L`:
    case `d_JPOyUje`:
    case `RnhOvYCUk`:
    case `VgfNK2SV3`:
      return T(N, { links: [f.QunVsZw7u] }, (e) =>
        T(bn, { ...f, key: `Main`, QunVsZw7u: d(e[0]), style: n }, t(!0))
      );
    default:
      return t(!1);
  }
}
function Cn(e) {
  switch (e) {
    case `augiA20Il`:
    case `IFvtpR9s0`:
    case `X_ReXY54C`:
    case `OzGETAt6L`:
    case `d_JPOyUje`:
    case `RnhOvYCUk`:
    case `VgfNK2SV3`:
      return [
        { hash: `p5jovi`, mediaQuery: `(min-width: 1200px)` },
        { hash: `2uforx`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `s5gvas`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function wn({ routeId: e, pathVariables: t, localeId: r, collectionItemId: i }) {
  let u = $[e].page.preload(),
    d = T(Le, {
      children: T(ve, {
        children: T(be, {
          children: T(me, {
            isWebsite: !0,
            environment: `site`,
            routeId: e,
            pathVariables: t,
            routes: $,
            collectionUtils: On,
            framerSiteId: kn,
            notFoundPage: R(
              () => import(`./srDnsO03dv-SFY9Y8ttAtnW_8rbSE5HeVf3nvr1Qqqg.CMvyPpMe.mjs`)
            ),
            isReducedMotion: void 0,
            localeId: r,
            locales: Dn,
            preserveQueryParams: !0,
            siteCanonicalURL: `https://joyjiadesign.framer.website`,
            EditorBar:
              c === void 0
                ? void 0
                : (() => {
                    if (jn) {
                      console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                      return;
                    }
                    return R(async () => {
                      c.__framer_editorBarDependencies = {
                        __version: 3,
                        framer: { useCurrentRoute: ge, useLocaleInfo: H, useRouter: re },
                        react: {
                          createElement: T,
                          Fragment: o,
                          memo: p,
                          useCallback: h,
                          useEffect: a,
                          useRef: n,
                          useState: s,
                          useLayoutEffect: l,
                        },
                        "react-dom": { createPortal: m },
                      };
                      let { createEditorBar: e } = await import(`init.mjs`);
                      return { default: e() };
                    });
                  })(),
            adaptLayoutToTextDirection: !1,
            LayoutTemplate: Sn,
            loadSnippetsModule: new Se(
              () => import(`./s-QfdNPF7IRsU7BUJj-uZsXcxnd0920lZ2F4YUQU4wk.To4LLX3b.mjs`)
            ),
            initialCollectionItemId: i,
          }),
          value: {
            autobahnNavigation: !0,
            disableCustomCode: !1,
            editorBarDisableFrameAncestorsSecurity: !1,
            motionDivToDiv: !1,
            onPageLocalizationSupport: !0,
            onPageMoveTool: !0,
            synchronousNavigationOnDesktop: !1,
            yieldOnTap: !1,
          },
        }),
      }),
      value: {
        global: {
          enter: {
            opacity: 1,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 1.2,
              ease: [0.77, 0, 0.175, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `100%`,
          },
          exit: {
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 1.2,
              ease: [0.77, 0, 0.175, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `-25%`,
          },
        },
        routes: {},
      },
    });
  return (await u, d);
}
function Tn() {
  An && c.__framer_events.push(arguments);
}
async function En(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || c.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    Tn(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = Ae($, r)));
    else {
      Ae($, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = ae($, decodeURIComponent(location.pathname), !0, Dn);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let l = wn({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    c !== void 0 &&
      (async () => {
        let e = $[r],
          t = Dn.find(({ id: e }) => (i ? e === i : e === `default`)).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && On) {
          let r = await On[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          l = o.timeZone,
          u = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          c.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: kn ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: c.location.href,
              hostname: c.location.hostname || null,
              pathname: c.location.pathname || null,
              hash: c.location.hash || null,
              search: c.location.search || null,
              timezone: l,
              locale: u,
            },
            `eager`,
          ]),
          await oe({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let u = await l;
    e
      ? (ne(`framer-rewrite-breakpoints`, () => {
          (we(o), c.__framer_onRewriteBreakpoints?.(o));
        }),
        (jn ? (e) => e() : E)(() => {
          (_e(), Me(), w(t, u, { onRecoverableError: n }));
        }))
      : S(t, { onRecoverableError: n }).render(u);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var $, Dn, On, kn, An, jn;
e(() => {
  if (
    (r(),
    V(),
    D(),
    d(),
    y(),
    xn(),
    ($ = {
      augiA20Il: {
        elements: { lwGJUZXPf: `works`, WemT6d0vc: `about`, zwaV8XJhc: `services` },
        page: R(() => import(`./l6d27d0Yzo3aZK6AY59tvnTmXonEizICRiCjNGRR0iA.n1sO3KQo.mjs`)),
        path: `/`,
      },
      IFvtpR9s0: {
        elements: { XYvp9zth0: `works` },
        page: R(() => import(`./0qvNRaT5lXhZh1KJk-SG8s-ds_0_2cdLtgR71PSZVSI.BnuX3iPC.mjs`)),
        path: `/works`,
      },
      X_ReXY54C: {
        elements: { qWVNzUkY9: `archives` },
        page: R(() => import(`./_wz9C9k0zAu5ZeWy2F072m36wYpOKr2A1EsuPUKfr7M.DQgelPAw.mjs`)),
        path: `/archives`,
      },
      OzGETAt6L: {
        elements: { tT57GdiID: `contact` },
        page: R(() => import(`./nY83SGnUV-HylnaZdUTpd4k0tWNonCb9cwhSDuiQHZE.Zzqgg8Ma.mjs`)),
        path: `/contact`,
      },
      d_JPOyUje: {
        elements: { E6oBQ0xfY: `contact` },
        page: R(() => import(`./SrUDHJVLvCWFstxM34WER4eYiRIcUW0hQiX7GpNJ578.0KVwlP2H.mjs`)),
        path: `/reflection`,
      },
      RnhOvYCUk: {
        elements: {},
        page: R(() => import(`./srDnsO03dv-SFY9Y8ttAtnW_8rbSE5HeVf3nvr1Qqqg.CMvyPpMe.mjs`)),
        path: `/404`,
      },
      VgfNK2SV3: {
        collectionId: `nOXL0BeXe`,
        elements: { De5IIlWjK: `next`, Qn3rsdpUH: `hero`, SPQGxZW6t: `details` },
        page: R(() => import(`./JIiZ1fk5-8P-z2zB50InAdfYnpEIkeSFNB3X76OSGjY.B8Wb_SgA.mjs`)),
        path: `/works/:Y3mPbtUk_`,
      },
    }),
    (Dn = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (On = {
      K1UDmAL9B: async () => (await import(`./K1UDmAL9B.QU0EptGX.mjs`))?.utils,
      nOXL0BeXe: async () =>
        (await import(`./bWbetTpvzgJ9a6PfV2VvtPNVBKh7yXlfta68TsDE_Y8.B7aEFC9J.mjs`))?.utils,
    }),
    (kn = `85d0fc5d2762a72705064677254e9680f9a761ba26dd986e577f35cedb6a0cd5`),
    (An = typeof document < `u`),
    (jn = An && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(i.userAgent)),
    An)
  ) {
    ((c.__framer_importFromPackage = (e, t) => () =>
      T(Oe, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (c.__framer_events = c.__framer_events || []),
      de(),
      fe());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? En(!0, e) : En(!1, e);
  }
  (function () {
    An &&
      E(() => {
        w(
          document.getElementById(`__framer-badge-container`),
          T(v, {}, T(x(() => import(`./PX9hIOIVM.CXQgJIfa.mjs`))))
        );
      });
  })();
})();
export { Cn as getLayoutTemplateBreakpoints, wn as getPageRoot };
//# sourceMappingURL=script_main.C7DDpsIL.mjs.map
