import { t as e } from "./rolldown-runtime.CawJvvTp.mjs";
import {
  A as t,
  L as n,
  O as r,
  P as i,
  _ as a,
  a as o,
  c as s,
  f as c,
  i as l,
  j as u,
  l as d,
  o as f,
  s as p,
  u as m,
  w as h,
  y as ee,
  z as g,
} from "./react.6snvU8bB.mjs";
import { S as _, a as te, n as ne, r as re, t as v } from "./motion.CpAcN4_Y.mjs";
import {
  A as y,
  At as b,
  C as ie,
  Ct as ae,
  D as x,
  Dt as S,
  Et as oe,
  F as C,
  G as se,
  N as w,
  O as ce,
  S as le,
  St as ue,
  T as de,
  Tt as fe,
  U as T,
  V as E,
  W as pe,
  X as D,
  _ as me,
  a as O,
  ct as he,
  d as ge,
  gt as _e,
  it as ve,
  k as ye,
  m as be,
  mt as xe,
  n as Se,
  o as Ce,
  p as we,
  pt as Te,
  r as Ee,
  s as k,
  t as De,
  ut as Oe,
  vt as ke,
  x as Ae,
  xt as je,
  yt as Me,
} from "./framer.7e87VJV8.mjs";
import { a as Ne, c as Pe, i as Fe, o as Ie, r as Le, s as Re } from "./shared-lib.DsSu9Ft0.mjs";
import { a as ze, i as Be, n as Ve, o as He, r as Ue, t as A } from "./Video.CgQGXeKK.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./VwJ5pWYb7.D17Hvg8v.mjs";
import { n as Je, r as Ye } from "./X_ReXY54C.Bqat6gkS.mjs";
function Xe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  j,
  M,
  lt = e(() => {
    (f(),
      D(),
      v(),
      h(),
      Ve(),
      Pe(),
      (Ze = E(A)),
      (Qe = se(A)),
      ($e = { x3koIu3qM: { hover: !0 } }),
      (et = `framer-LZbZK`),
      (tt = { x3koIu3qM: `framer-v-1athhm` }),
      (nt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (rt = (e) => !e),
      (it = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (at = ({ value: e, children: n }) => {
        let r = t(te),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(te.Provider, { value: a, children: n });
      }),
      (ot = _.create(i)),
      (st = ({
        height: e,
        id: t,
        image: n,
        imageOverlay: r,
        title: i,
        video: a,
        videoOverlay: o,
        videoVisible: s,
        width: c,
        ...l
      }) => ({
        ...l,
        Bk5w6mMGm: s ?? l.Bk5w6mMGm ?? !0,
        JyKA5E0pM: n ?? l.JyKA5E0pM,
        N01dpVC4u: a ?? l.N01dpVC4u,
        nyJaEMCpo: r ?? l.nyJaEMCpo,
        ut5wiDGRD: i ?? l.ut5wiDGRD ?? `009`,
        Ygo18gvSX: o ?? l.Ygo18gvSX,
      })),
      (ct = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (j = S(
        a(function (e, t) {
          let n = r(null),
            a = t ?? n,
            o = ee(),
            { activeLocale: c, setLocale: l } = ke(),
            u = Oe(),
            {
              style: f,
              className: p,
              layoutId: m,
              variant: h,
              Bk5w6mMGm: g,
              N01dpVC4u: te,
              JyKA5E0pM: ne,
              ut5wiDGRD: v,
              Ygo18gvSX: y,
              nyJaEMCpo: b,
              ...ie
            } = st(e),
            {
              baseVariant: ae,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: se,
              gestureVariant: le,
              isLoading: ue,
              setGestureState: de,
              setVariant: fe,
              variants: T,
            } = oe({
              defaultVariant: `x3koIu3qM`,
              enabledGestures: $e,
              ref: a,
              variant: h,
              variantClassNames: tt,
            }),
            E = ct(e, T),
            { activeVariantCallback: D, delay: me } = he(ae),
            ge = D(async (...e) => {
              if (y && (await y(...e)) === !1) return !1;
            }),
            _e = D(async (...e) => {
              if (b && (await b(...e)) === !1) return !1;
            }),
            ve = w(et, Ne),
            ye = rt(g);
          return s(re, {
            id: m ?? o,
            children: s(ot, {
              animate: T,
              initial: !1,
              children: s(at, {
                value: nt,
                children: d(_.div, {
                  ...ie,
                  ...se,
                  className: w(ve, `framer-1athhm`, p, S),
                  "data-framer-name": `Default`,
                  layoutDependency: E,
                  layoutId: `x3koIu3qM`,
                  ref: a,
                  style: { ...f },
                  ...Xe({ "x3koIu3qM-hover": { "data-framer-name": void 0 } }, ae, le),
                  children: [
                    d(_.figure, {
                      className: `framer-slvi3d`,
                      "data-framer-name": `Image / Video`,
                      layoutDependency: E,
                      layoutId: `Ec3qrVjHf`,
                      children: [
                        g !== !1 &&
                          s(_.div, {
                            className: `framer-1yyb7qf`,
                            "data-framer-name": `Video Wrapper`,
                            "data-highlight": !0,
                            layoutDependency: E,
                            layoutId: `BH4CkaxKz`,
                            onTap: ge,
                            children: s(O, {
                              children: s(ce, {
                                className: `framer-125izu0-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                layoutDependency: E,
                                layoutId: `UAV_tksKx-container`,
                                nodeId: `UAV_tksKx`,
                                rendersWithMotion: !0,
                                scopeId: `kGkC1GBGV`,
                                style: { filter: `brightness(1)`, WebkitFilter: `brightness(1)` },
                                variants: {
                                  "x3koIu3qM-hover": {
                                    filter: `brightness(0.75)`,
                                    WebkitFilter: `brightness(0.75)`,
                                  },
                                },
                                children: s(A, {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  borderRadius: 0,
                                  bottomLeftRadius: 0,
                                  bottomRightRadius: 0,
                                  controls: !1,
                                  height: `100%`,
                                  id: `UAV_tksKx`,
                                  isMixedBorderRadius: !1,
                                  layoutId: `UAV_tksKx`,
                                  loop: !0,
                                  muted: !0,
                                  objectFit: `cover`,
                                  playing: !0,
                                  posterEnabled: !0,
                                  srcFile: te,
                                  srcType: `Upload`,
                                  srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                  startTime: 0,
                                  style: { width: `100%` },
                                  topLeftRadius: 0,
                                  topRightRadius: 0,
                                  volume: 25,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ye !== !1 &&
                          s(_.div, {
                            className: `framer-iqqed0`,
                            "data-framer-name": `Image Wrapper`,
                            "data-highlight": !0,
                            layoutDependency: E,
                            layoutId: `lRLE333Tw`,
                            onTap: _e,
                            children: s(we, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: pe((u?.y || 0) + 0 + 0 + 0 + 0 + 0),
                                sizes: `max(${u?.width || `100vw`} / 0, 1px)`,
                                ...it(ne),
                              },
                              className: `framer-1oqsjs1`,
                              fitImageDimension: `height`,
                              layoutDependency: E,
                              layoutId: `YIUwk2YPu`,
                              style: { filter: `brightness(1)`, WebkitFilter: `brightness(1)` },
                              variants: {
                                "x3koIu3qM-hover": {
                                  filter: `brightness(0.75)`,
                                  WebkitFilter: `brightness(0.75)`,
                                },
                              },
                            }),
                          }),
                      ],
                    }),
                    s(_.div, {
                      className: `framer-1d8vmy1`,
                      "data-framer-name": `Title Wrapper`,
                      layoutDependency: E,
                      layoutId: `UFqEfbeux`,
                      children: s(x, {
                        __fromCanvasComponent: !0,
                        children: s(i, {
                          children: s(_.h2, {
                            className: `framer-styles-preset-15hwgrk`,
                            "data-styles-preset": `rbICbRVFi`,
                            children: `009`,
                          }),
                        }),
                        className: `framer-go5alo`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `ojWt_SG9t`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: v,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-LZbZK.framer-1uror8s, .framer-LZbZK .framer-1uror8s { display: block; }`,
          `.framer-LZbZK.framer-1athhm { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 281px; }`,
          `.framer-LZbZK .framer-slvi3d { align-content: flex-start; align-items: flex-start; cursor: zoom-in; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-LZbZK .framer-1yyb7qf { align-content: center; align-items: center; cursor: pointer; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-LZbZK .framer-125izu0-container { flex: 1 0 0px; height: auto; pointer-events: none; position: relative; width: 1px; }`,
          `.framer-LZbZK .framer-iqqed0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-LZbZK .framer-1oqsjs1 { flex: none; height: auto; pointer-events: none; position: relative; width: 100%; }`,
          `.framer-LZbZK .framer-1d8vmy1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 8px 0px 0px 0px; pointer-events: none; position: relative; width: 100%; z-index: 1; }`,
          `.framer-LZbZK .framer-go5alo { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...Ie,
        ],
        `framer-LZbZK`
      )),
      (M = j),
      (j.displayName = `Archive Item Component`),
      (j.defaultProps = { height: 185.5, width: 281 }),
      y(j, {
        Bk5w6mMGm: { defaultValue: !0, title: `Video Visible`, type: k.Boolean },
        onBk5w6mMGmChange: { changes: `Bk5w6mMGm`, type: k.ChangeHandler },
        N01dpVC4u: Qe?.srcFile && {
          ...Qe.srcFile,
          __defaultAssetReference: `https://framerusercontent.com/assets/HH1qWtbmS4Y4cq6hZ1hFyqo9fo0.mp4`,
          description: void 0,
          hidden: void 0,
          title: `Video`,
        },
        onN01dpVC4uChange: { changes: `N01dpVC4u`, type: k.ChangeHandler },
        JyKA5E0pM: { title: `Image`, type: k.ResponsiveImage },
        ut5wiDGRD: { defaultValue: `009`, title: `Title`, type: k.String },
        onut5wiDGRDChange: { changes: `ut5wiDGRD`, type: k.ChangeHandler },
        Ygo18gvSX: { title: `Video Overlay`, type: k.EventHandler },
        nyJaEMCpo: { title: `Image Overlay`, type: k.EventHandler },
      }),
      ye(
        j,
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
          ...Ze,
          ...T(Re),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function ut(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function N(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function P(e) {
  throw Error(`Unexpected value: ${e}`);
}
function F(e, t, n, r) {
  (N(e >= t, e, `outside lower bound for`, r), N(e <= n, e, `outside upper bound for`, r));
}
function dt(e) {
  return typeof e == `string`;
}
function I(e) {
  return Number.isFinite(e);
}
function L(e) {
  return e === null;
}
function ft(e) {
  if (L(e)) return 0;
  switch (e.type) {
    case k.Array:
      return 1;
    case k.Boolean:
      return 2;
    case k.Color:
      return 3;
    case k.Date:
      return 4;
    case k.Enum:
      return 5;
    case k.File:
      return 6;
    case k.ResponsiveImage:
      return 10;
    case k.Link:
      return 7;
    case k.Number:
      return 8;
    case k.Object:
      return 9;
    case k.RichText:
      return 11;
    case k.String:
      return 12;
    case k.VectorSetItem:
      return 13;
    default:
      P(e);
  }
}
function pt(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = R.read(e);
    n.push(t);
  }
  return { type: k.Array, value: n };
}
function mt(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) R.write(e, n);
}
function ht(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = R.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function gt(e) {
  return { type: k.Boolean, value: e.readUint8() !== 0 };
}
function _t(e, t) {
  e.writeUint8(t.value ? 1 : 0);
}
function vt(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function yt(e) {
  return { type: k.Color, value: e.readString() };
}
function bt(e, t) {
  e.writeString(t.value);
}
function xt(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function St(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: k.Date, value: n.toISOString() };
}
function Ct(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function wt(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Tt(e) {
  return { type: k.Enum, value: e.readString() };
}
function Et(e, t) {
  e.writeString(t.value);
}
function Dt(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Ot(e) {
  return { type: k.File, value: e.readString() };
}
function kt(e, t) {
  e.writeString(t.value);
}
function At(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function jt(e) {
  return { type: k.Link, value: e.readJson() };
}
function Mt(e, t) {
  e.writeJson(t.value);
}
function Nt(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Pt(e) {
  return { type: k.Number, value: e.readFloat64() };
}
function Ft(e, t) {
  e.writeFloat64(t.value);
}
function It(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Lt(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = R.read(e);
  }
  return { type: k.Object, value: n };
}
function Rt(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), R.write(e, r));
}
function zt(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = R.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Bt(e) {
  return { type: k.ResponsiveImage, value: e.readJson() };
}
function Vt(e, t) {
  e.writeJson(t.value);
}
function Ht(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Ut(e) {
  let t = e.readInt8();
  if (t === 0) return { type: k.RichText, value: e.readUint32() };
  if (t === 1) return { type: k.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Wt(e, t) {
  if (I(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (dt(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Gt(e, t) {
  let n = e.value,
    r = t.value;
  if ((I(n) && I(r)) || (dt(n) && dt(r))) return n < r ? -1 : n > r ? 1 : 0;
  throw Error(`Invalid rich text pointer`);
}
function Kt(e) {
  return { type: k.String, value: e.readString() };
}
function qt(e, t) {
  e.writeString(t.value);
}
function Jt(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function Yt(e) {
  return { type: k.VectorSetItem, value: e.readUint32() };
}
function Xt(e, t) {
  e.writeUint32(t.value);
}
function Zt(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
async function Qt(e) {
  let t = Math.floor(yn * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function $t(e, t) {
  let n = tn(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await xn(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Sn(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function en(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function tn(e) {
  N(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
var R,
  nn,
  z,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  B,
  fn,
  V,
  H,
  pn,
  mn,
  U,
  W,
  hn,
  G,
  K,
  gn,
  q,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  J,
  Cn,
  wn,
  Tn,
  En = e(() => {
    (n(),
      D(),
      (nn = Object.create),
      (z = Object.defineProperty),
      (rn = Object.getOwnPropertyDescriptor),
      (an = Object.getOwnPropertyNames),
      (on = Object.getPrototypeOf),
      (sn = Object.prototype.hasOwnProperty),
      (cn = (e, t, n) =>
        t in e
          ? z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n)),
      (ln = (e, t) =>
        function () {
          return (t || (0, e[an(e)[0]])((t = { exports: {} }).exports, t), t.exports);
        }),
      (un = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of an(t))
            sn.call(e, i) ||
              i === n ||
              z(e, i, { get: () => t[i], enumerable: !(r = rn(t, i)) || r.enumerable });
        return e;
      }),
      (dn = (e, t, n) => (
        (n = e == null ? {} : nn(on(e))),
        un(!t && e && e.__esModule ? n : z(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (B = (e, t, n) => cn(e, typeof t == `symbol` ? t : t + ``, n)),
      (fn = dn(
        ln({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (V = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (H = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = V.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = V.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = V.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = V.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = V.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = V.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = V.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = V.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = V.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = V.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            B(this, `offset`, 0),
            B(this, `view`),
            B(this, `decoder`, new TextDecoder()),
            (this.view = ut(this.bytes)));
        }
      }),
      g !== void 0 && g.requestIdleCallback,
      (pn = 1024),
      (mn = 1.5),
      (U = (e) => 2 ** e - 1),
      (W = (e) => -(2 ** (e - 1))),
      (hn = (e) => 2 ** (e - 1) - 1),
      (G = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: W(8),
        Int16: W(16),
        Int32: W(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (K = {
        Uint8: U(8),
        Uint16: U(16),
        Uint32: U(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: hn(8),
        Int16: hn(16),
        Int32: hn(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (gn = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * mn) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = ut(n)));
        }
        writeUint8(e) {
          F(e, G.Uint8, K.Uint8, `Uint8`);
          let t = V.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          F(e, G.Uint16, K.Uint16, `Uint16`);
          let t = V.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          F(e, G.Uint32, K.Uint32, `Uint32`);
          let t = V.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          F(e, G.Uint64, K.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          F(e, G.BigUint64, K.BigUint64, `BigUint64`);
          let t = V.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          F(e, G.Int8, K.Int8, `Int8`);
          let t = V.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          F(e, G.Int16, K.Int16, `Int16`);
          let t = V.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          F(e, G.Int32, K.Int32, `Int32`);
          let t = V.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          F(e, G.Int64, K.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          F(e, G.BigInt64, K.BigInt64, `BigInt64`);
          let t = V.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = V.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = V.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (B(this, `offset`, 0),
            B(this, `bytes`, new Uint8Array(pn)),
            B(this, `view`, ut(this.bytes)),
            B(this, `encoder`, new TextEncoder()),
            B(this, `encodedStrings`, new Map()));
        }
      }),
      (q = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            N(I(n), `Invalid chunkId`),
            N(I(r), `Invalid offset`),
            N(I(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          return new e(t.readUint16(), t.readUint32(), t.readUint32());
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (N(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return pt(e);
            case 2:
              return gt(e);
            case 3:
              return yt(e);
            case 4:
              return St(e);
            case 5:
              return Tt(e);
            case 6:
              return Ot(e);
            case 7:
              return jt(e);
            case 8:
              return Pt(e);
            case 9:
              return Lt(e);
            case 10:
              return Bt(e);
            case 11:
              return Ut(e);
            case 12:
              return Kt(e);
            case 13:
              return Yt(e);
            default:
              P(t);
          }
        }),
          (e.write = function (e, t) {
            let n = ft(t);
            if ((e.writeUint8(n), !L(t)))
              switch (t.type) {
                case k.Array:
                  return mt(e, t);
                case k.Boolean:
                  return _t(e, t);
                case k.Color:
                  return bt(e, t);
                case k.Date:
                  return Ct(e, t);
                case k.Enum:
                  return Et(e, t);
                case k.File:
                  return kt(e, t);
                case k.Link:
                  return Mt(e, t);
                case k.Number:
                  return Ft(e, t);
                case k.Object:
                  return Rt(e, t);
                case k.ResponsiveImage:
                  return Vt(e, t);
                case k.RichText:
                  return Wt(e, t);
                case k.VectorSetItem:
                  return Xt(e, t);
                case k.String:
                  return qt(e, t);
                default:
                  P(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = ft(e),
              i = ft(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (L(e) || L(t)) return 0;
            switch (e.type) {
              case k.Array:
                return (N(t.type === k.Array), ht(e, t, n));
              case k.Boolean:
                return (N(t.type === k.Boolean), vt(e, t));
              case k.Color:
                return (N(t.type === k.Color), xt(e, t));
              case k.Date:
                return (N(t.type === k.Date), wt(e, t));
              case k.Enum:
                return (N(t.type === k.Enum), Dt(e, t));
              case k.File:
                return (N(t.type === k.File), At(e, t));
              case k.Link:
                return (N(t.type === k.Link), Nt(e, t));
              case k.Number:
                return (N(t.type === k.Number), It(e, t));
              case k.Object:
                return (N(t.type === k.Object), zt(e, t, n));
              case k.ResponsiveImage:
                return (N(t.type === k.ResponsiveImage), Ht(e, t));
              case k.RichText:
                return (N(t.type === k.RichText), Gt(e, t));
              case k.VectorSetItem:
                return (N(t.type === k.VectorSetItem), Zt(e, t));
              case k.String:
                return (N(t.type === k.String), Jt(e, t, n));
              default:
                P(e);
            }
          }));
      })((R ||= {})),
      (_n = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = R.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new H(t),
            r = n.readJson(),
            i = n.readUint8(),
            a = [];
          for (let e = 0; e < i; e++) {
            let e = n.readString();
            a.push(e);
          }
          let o = new e(a, { collation: r }),
            s = n.readUint32();
          for (let e = 0; e < s; e++) {
            let e = [];
            for (let t = 0; t < i; t++) {
              let t = R.read(n);
              e.push(t);
            }
            let t = q.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new gn();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) R.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          ((this.fieldNames = e), (this.options = t), B(this, `entries`, []));
        }
      }),
      (vn = 3),
      (yn = 250),
      (bn = [408, 429, 500, 502, 503, 504]),
      (xn = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!bn.includes(r.status) || ++n > vn) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > vn) throw e;
          }
          await Qt(n);
        }
      }),
      (Sn = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((N(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = en(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((N(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = en(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          B(this, `chunks`, []);
        }
      }),
      (J = class {
        async loadModel() {
          let [e] = await $t(this.options.url, [this.options.range]);
          return (N(e, `Failed to load model`), _n.deserialize(e));
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          N(e.length === this.fields.length, `Invalid query length`);
          let t = await this.getModel(),
            n = e.reduce(
              (e, t, n) =>
                e.flatMap((e) => {
                  switch (t.type) {
                    case `All`:
                      return [e];
                    case `Equals`:
                      return this.queryEquals(e, t, n);
                    case `NotEquals`:
                      return this.queryNotEquals(e, t, n);
                    case `LessThan`:
                      return this.queryLessThan(e, t, n);
                    case `GreaterThan`:
                      return this.queryGreaterThan(e, t, n);
                    case `Contains`:
                      return this.queryContains(e, t, n);
                    case `StartsWith`:
                      return this.queryStartsWith(e, t, n);
                    case `EndsWith`:
                      return this.queryEndsWith(e, t, n);
                    default:
                      P(t);
                  }
                }),
              [t.entries]
            ),
            r = [];
          for (let e of n)
            for (let t of e) {
              let e = {};
              for (let n = 0; n < this.options.fieldNames.length; n++) {
                let r = this.options.fieldNames[n];
                e[r] = t.values[n];
              }
              r.push({ pointer: t.pointer.toString(), data: e });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== k.String || t.value?.type !== k.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== k.String || t.value?.type !== k.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== k.String || t.value?.type !== k.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > R.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            R.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        findItems(e, t, n) {
          let r = [],
            i = 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a].values[t];
            if (!n(o)) {
              if (i < a) {
                let t = e.slice(i, a);
                r.push(t);
              }
              i = a + 1;
            }
          }
          if (i < e.length) {
            let t = e.slice(i);
            r.push(t);
          }
          return r;
        }
        constructor(e) {
          ((this.options = e),
            B(this, `schema`),
            B(this, `fields`),
            B(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            B(this, `modelPromise`),
            B(this, `model`),
            B(this, `collation`));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (N(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (Cn = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = R.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), R.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          B(this, `fields`, new Map());
        }
      }),
      (wn = class {
        scanItems() {
          return (
            (this.itemsPromise ??= xn(this.url).then(async (e) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new H(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = Cn.read(n),
                  i = n.getOffset() - e,
                  a = new q(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            B(this, `itemsPromise`),
            B(
              this,
              `itemLoader`,
              new fn.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = q.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await $t(this.url, t)).map((t, n) => {
                    let r = new H(t),
                      i = Cn.read(r),
                      a = e[n];
                    return (N(a, `Missing pointer`), { pointer: a, data: i.getData() });
                  });
                },
                { maxBatchSize: 250 }
              )
            ));
        }
      }),
      (Tn = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = q.fromString(e),
                n = this.chunks[t.chunkId];
              return (N(n, `Missing chunk`), n.resolveItem(e));
            })
          );
        }
        compareItems(e, t) {
          let n = q.fromString(e.pointer),
            r = q.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return R.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            B(this, `id`),
            B(this, `schema`),
            B(this, `indexes`),
            B(this, `resolveRichText`),
            B(this, `resolveVectorSetItem`),
            B(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new wn(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Dn(e) {
  return typeof e == `object` && !!e && !c(e) && An in e;
}
function On(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function kn(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let a = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return m(i, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return m(me, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, o] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (Dn(r) && r.preload(), (i[t] = r));
          }
          let c = e[r];
          return (
            On(c, `Module not found`),
            Dn(c) && c.preload(),
            s(Ee, {
              componentIdentifier: r,
              children: (e) => s(De, { component: c, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return m(e === `a` ? _.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, a), a);
  };
}
var Y,
  An,
  jn,
  Mn = e(() => {
    (n(),
      f(),
      D(),
      h(),
      g !== void 0 && g.requestIdleCallback,
      (An = `preload`),
      (jn =
        (((Y = jn || {})[(Y.Fragment = 1)] = `Fragment`),
        (Y[(Y.Link = 2)] = `Link`),
        (Y[(Y.Module = 3)] = `Module`),
        (Y[(Y.Tag = 4)] = `Tag`),
        (Y[(Y.Text = 5)] = `Text`),
        Y)));
  }),
  X,
  Nn,
  Z,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  Q,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn = e(() => {
    (D(),
      En(),
      Mn(),
      (X = {
        createdAt: { isNullable: !0, type: k.Date },
        FDvgUVG_U: { isNullable: !0, type: k.File },
        HSuVZXwuj: { isNullable: !0, type: k.String },
        id: { isNullable: !1, type: k.String },
        nextItemId: { isNullable: !0, type: k.String },
        nTmBOaAxd: { isNullable: !0, type: k.String },
        previousItemId: { isNullable: !0, type: k.String },
        updatedAt: { isNullable: !0, type: k.Date },
        YBcFB_dSD: { isNullable: !0, type: k.ResponsiveImage },
      }),
      (Nn = [`id`]),
      (Z = { type: 1 }),
      (Pn = [`previousItemId`]),
      (Fn = [`nextItemId`]),
      (In = [`id`, `nTmBOaAxd`]),
      (Ln = [`nTmBOaAxd`, `id`]),
      (Rn = [`HSuVZXwuj`]),
      (Q = { type: 0 }),
      (zn = [`nTmBOaAxd`]),
      (Bn = [`YBcFB_dSD`]),
      (Vn = [`FDvgUVG_U`]),
      (Hn = []),
      (Un = (e) => {
        let t = Hn[e];
        if (t) return t().then((e) => e.default);
      }),
      (Wn = kn({})),
      new ie(),
      (Gn = {
        collectionByLocaleId: {
          default: new Tn({
            chunks: [
              new URL(
                `./zWW33InhF-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/409jFb6Y8F01u2lAu8nO/rDHgPPuJYhgaaqRSDI91/zWW33InhF.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `daf54a3f-08b8-4a84-a01a-08a22d7e892fdefault`,
            indexes: [
              new J({
                collation: Z,
                collectionSchema: X,
                fieldNames: Nn,
                range: { from: 0, to: 217 },
                url: new URL(
                  `./zWW33InhF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/409jFb6Y8F01u2lAu8nO/rDHgPPuJYhgaaqRSDI91/zWW33InhF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Z,
                collectionSchema: X,
                fieldNames: Pn,
                range: { from: 217, to: 433 },
                url: new URL(
                  `./zWW33InhF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/409jFb6Y8F01u2lAu8nO/rDHgPPuJYhgaaqRSDI91/zWW33InhF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Z,
                collectionSchema: X,
                fieldNames: Fn,
                range: { from: 433, to: 645 },
                url: new URL(
                  `./zWW33InhF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/409jFb6Y8F01u2lAu8nO/rDHgPPuJYhgaaqRSDI91/zWW33InhF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Z,
                collectionSchema: X,
                fieldNames: In,
                range: { from: 645, to: 939 },
                url: new URL(
                  `./zWW33InhF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/409jFb6Y8F01u2lAu8nO/rDHgPPuJYhgaaqRSDI91/zWW33InhF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Z,
                collectionSchema: X,
                fieldNames: Ln,
                range: { from: 939, to: 1233 },
                url: new URL(
                  `./zWW33InhF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/409jFb6Y8F01u2lAu8nO/rDHgPPuJYhgaaqRSDI91/zWW33InhF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: Rn,
                range: { from: 1233, to: 1409 },
                url: new URL(
                  `./zWW33InhF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/409jFb6Y8F01u2lAu8nO/rDHgPPuJYhgaaqRSDI91/zWW33InhF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: zn,
                range: { from: 1409, to: 1585 },
                url: new URL(
                  `./zWW33InhF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/409jFb6Y8F01u2lAu8nO/rDHgPPuJYhgaaqRSDI91/zWW33InhF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: Bn,
                range: { from: 1585, to: 7214 },
                url: new URL(
                  `./zWW33InhF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/409jFb6Y8F01u2lAu8nO/rDHgPPuJYhgaaqRSDI91/zWW33InhF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: Vn,
                range: { from: 7214, to: 7334 },
                url: new URL(
                  `./zWW33InhF-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/409jFb6Y8F01u2lAu8nO/rDHgPPuJYhgaaqRSDI91/zWW33InhF.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: Wn,
            resolveVectorSetItem: Un,
            schema: X,
          }),
        },
        displayName: `Archives`,
        id: `daf54a3f-08b8-4a84-a01a-08a22d7e892f`,
      }),
      (Kn = Gn),
      y(Gn, {
        HSuVZXwuj: { defaultValue: ``, title: `Title`, type: k.String },
        nTmBOaAxd: { preventLocalization: !0, title: `Slug`, type: k.String },
        YBcFB_dSD: { title: `Image`, type: k.ResponsiveImage },
        FDvgUVG_U: { allowedFileTypes: [`mp4`], title: `Video`, type: k.File },
        createdAt: { title: `Created`, type: k.Date },
        updatedAt: { title: `Updated`, type: k.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/zWW33InhF:default`,
          title: `Previous`,
          type: k.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/zWW33InhF:default`,
          title: `Next`,
          type: k.CollectionReference,
        },
      }));
  }),
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  $,
  br,
  xr;
e(() => {
  (f(),
    D(),
    v(),
    h(),
    o(),
    Ve(),
    Fe(),
    lt(),
    qn(),
    He(),
    We(),
    Je(),
    (Jn = E(M)),
    (Yn = E(A)),
    (Xn = b(_.div)),
    (Zn = E(Le)),
    (Qn = {
      JRX1_lOGf: `(max-width: 809.98px)`,
      pOUKlux2D: `(min-width: 810px) and (max-width: 1199.98px)`,
      UCvZPyHNP: `(min-width: 1200px)`,
    }),
    ($n = []),
    (er = `framer-WGsJB`),
    (tr = {
      JRX1_lOGf: `framer-v-8pz3b0`,
      pOUKlux2D: `framer-v-1hw0o1`,
      UCvZPyHNP: `framer-v-148liif`,
    }),
    (nr = (e, t, n) => (e && t ? `position` : n)),
    (rr = {
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
    (ir = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.8, duration: 1.6, type: `spring` },
      x: 0,
      y: 0,
    }),
    (ar = {
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
    (or = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (sr = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (cr = { bounce: 0, delay: 0, duration: 0.2, type: `spring` }),
    (lr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: cr,
      x: 0,
      y: 0,
    }),
    (ur = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0, duration: 0.6, type: `spring` },
      x: 0,
      y: 0,
    }),
    (dr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (fr = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (pr = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: cr,
      x: 0,
      y: 0,
    }),
    (mr = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = je({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (hr = () => ({
      from: { alias: `X3KwhEOe4`, data: Kn, type: `Collection` },
      select: [
        { collection: `X3KwhEOe4`, name: `FDvgUVG_U`, type: `Identifier` },
        { collection: `X3KwhEOe4`, name: `YBcFB_dSD`, type: `Identifier` },
        { collection: `X3KwhEOe4`, name: `HSuVZXwuj`, type: `Identifier` },
        { collection: `X3KwhEOe4`, name: `nTmBOaAxd`, type: `Identifier` },
        { collection: `X3KwhEOe4`, name: `id`, type: `Identifier` },
      ],
    })),
    (gr = ({ query: e, pageSize: t, children: n }) => n(ue(e))),
    (_r = { Desktop: `UCvZPyHNP`, Phone: `JRX1_lOGf`, Tablet: `pOUKlux2D` }),
    (vr = ({ value: e }) =>
      _e()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (yr = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: _r[r.variant] ?? r.variant ?? `UCvZPyHNP`,
    })),
    ($ = S(
      a(function (e, n) {
        let a = r(null),
          o = n ?? a,
          c = ee(),
          { activeLocale: f, setLocale: m } = ke(),
          h = Oe(),
          { style: g, className: v, layoutId: y, variant: b, ...ie } = yr(e);
        Me(u(() => Ye({}, f), [f]));
        let [S, oe] = xe(b, Qn, !1),
          { activeVariantCallback: C, delay: se } = he(void 0),
          ce = ({ overlay: e }) =>
            C(async (...t) => {
              e.toggle();
            }),
          ue = ({ overlay: e }) =>
            C(async (...t) => {
              e.toggle();
            }),
          T = ({ overlay: e }) =>
            C(async (...t) => {
              e.hide();
            }),
          E = w(er, qe, Ue),
          pe = t(ge)?.isLayoutTemplate,
          D = nr(pe, !!t(te)?.transition?.layout),
          me = ae(`qWVNzUkY9`),
          _e = fe();
        return (
          Te({}),
          s(ge.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: _r,
              primaryVariantId: `UCvZPyHNP`,
              variantClassNames: tr,
            },
            children: d(re, {
              id: y ?? c,
              children: [
                s(vr, {
                  value: `html body { background: var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, rgb(74, 35, 21)); }`,
                }),
                d(_.div, {
                  ...ie,
                  className: w(E, `framer-148liif`, v),
                  ref: o,
                  style: { ...g },
                  children: [
                    s(_.main, {
                      className: `framer-1qsjqeg`,
                      "data-framer-name": `Main`,
                      layout: D,
                      children: s(`section`, {
                        className: `framer-1fwirdj`,
                        "data-border": !0,
                        "data-framer-name": `Section - Archives`,
                        id: me,
                        ref: _e(me),
                        children: d(`div`, {
                          className: `framer-pwkge1`,
                          "data-framer-name": `Container`,
                          children: [
                            s(`div`, {
                              className: `framer-r5t3wu`,
                              "data-framer-name": `Wrapper`,
                              children: s(x, {
                                __fromCanvasComponent: !0,
                                children: s(i, {
                                  children: s(`h1`, {
                                    className: `framer-styles-preset-1aa1zhl`,
                                    "data-styles-preset": `VwJ5pWYb7`,
                                    children: `The archives`,
                                  }),
                                }),
                                className: `framer-1qzw11q`,
                                effect: rr,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            s(Xn, {
                              animate: ir,
                              className: `framer-1e2xzrs`,
                              "data-framer-appear-id": `1e2xzrs`,
                              initial: ar,
                              optimized: !0,
                              children: s(Se, {
                                children: s(gr, {
                                  query: hr(),
                                  children: (e, t, n) =>
                                    s(p, {
                                      children: e?.map(
                                        (
                                          {
                                            FDvgUVG_U: e,
                                            HSuVZXwuj: t,
                                            id: n,
                                            nTmBOaAxd: r,
                                            YBcFB_dSD: a,
                                          },
                                          o
                                        ) => (
                                          (t ??= ``),
                                          (r ??= ``),
                                          s(
                                            re,
                                            {
                                              id: `X3KwhEOe4-${n}`,
                                              children: s(Ae.Provider, {
                                                value: { nTmBOaAxd: r },
                                                children: s(`div`, {
                                                  className: `framer-7gs23a`,
                                                  children: s(mr, {
                                                    blockDocumentScrolling: !1,
                                                    dismissWithEsc: !0,
                                                    children: (n) =>
                                                      s(mr, {
                                                        blockDocumentScrolling: !1,
                                                        dismissWithEsc: !0,
                                                        children: (o) =>
                                                          s(p, {
                                                            children: s(le, {
                                                              breakpoint: S,
                                                              overrides: {
                                                                JRX1_lOGf: {
                                                                  width: `max(max(min(${h?.width || `100vw`}, 1920px) - 40px, 50px), 1px)`,
                                                                },
                                                              },
                                                              children: s(O, {
                                                                height: 185,
                                                                width: `max(max((min(${h?.width || `100vw`}, 1920px) - 90px) / 2, 50px), 1px)`,
                                                                y:
                                                                  (h?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  160 +
                                                                  0 +
                                                                  0 +
                                                                  92 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                                children: d(Ce, {
                                                                  className: `framer-17d71xs-container`,
                                                                  id: `${r}-17d71xs`,
                                                                  nodeId: `UbD7zu164`,
                                                                  scopeId: `X_ReXY54C`,
                                                                  children: [
                                                                    s(M, {
                                                                      Bk5w6mMGm: or(e),
                                                                      height: `100%`,
                                                                      id: `UbD7zu164`,
                                                                      JyKA5E0pM: sr(a),
                                                                      layoutId: `UbD7zu164`,
                                                                      N01dpVC4u: e,
                                                                      nyJaEMCpo: ue({ overlay: n }),
                                                                      style: { width: `100%` },
                                                                      ut5wiDGRD: t,
                                                                      width: `100%`,
                                                                      Ygo18gvSX: ce({ overlay: o }),
                                                                    }),
                                                                    s(ne, {
                                                                      children:
                                                                        o.visible &&
                                                                        s(p, {
                                                                          children: l(
                                                                            s(be, {
                                                                              triggerId: `${r}-17d71xs`,
                                                                              children: d(de, {
                                                                                children: [
                                                                                  s(
                                                                                    _.div,
                                                                                    {
                                                                                      animate: {
                                                                                        opacity: 1,
                                                                                        transition:
                                                                                          {
                                                                                            delay: 0,
                                                                                            duration: 0,
                                                                                            ease: [
                                                                                              0.5,
                                                                                              0,
                                                                                              0.88,
                                                                                              0.77,
                                                                                            ],
                                                                                            type: `tween`,
                                                                                          },
                                                                                      },
                                                                                      className: w(
                                                                                        E,
                                                                                        `framer-xw7lm6`
                                                                                      ),
                                                                                      "data-framer-name": `Video Overlay`,
                                                                                      "data-framer-portal-id": `${r}-17d71xs`,
                                                                                      exit: {
                                                                                        opacity: 0,
                                                                                        transition:
                                                                                          {
                                                                                            delay: 0,
                                                                                            duration: 0,
                                                                                            ease: [
                                                                                              0.12,
                                                                                              0.23,
                                                                                              0.5,
                                                                                              1,
                                                                                            ],
                                                                                            type: `tween`,
                                                                                          },
                                                                                      },
                                                                                      initial: {
                                                                                        opacity: 0,
                                                                                      },
                                                                                      onTap: () =>
                                                                                        o.hide(),
                                                                                    },
                                                                                    `vgzlXvlOM`
                                                                                  ),
                                                                                  d(_.div, {
                                                                                    animate: ur,
                                                                                    className: w(
                                                                                      E,
                                                                                      `framer-17ei6yh`
                                                                                    ),
                                                                                    "data-framer-name": `Container`,
                                                                                    "data-framer-portal-id": `${r}-17d71xs`,
                                                                                    exit: lr,
                                                                                    initial: dr,
                                                                                    children: [
                                                                                      s(_.div, {
                                                                                        className: `framer-re24i7`,
                                                                                        "data-framer-name": `Close Overlay Background`,
                                                                                        onTap: T({
                                                                                          overlay:
                                                                                            o,
                                                                                        }),
                                                                                      }),
                                                                                      s(_.div, {
                                                                                        className: `framer-1poynrb`,
                                                                                        "data-framer-name": `Video Wrapper`,
                                                                                        children: s(
                                                                                          O,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                Ce,
                                                                                                {
                                                                                                  className: `framer-1s4ezer-container`,
                                                                                                  inComponentSlot:
                                                                                                    !0,
                                                                                                  isAuthoredByUser:
                                                                                                    !0,
                                                                                                  isModuleExternal:
                                                                                                    !0,
                                                                                                  nodeId: `Dg_F7Smp4`,
                                                                                                  rendersWithMotion:
                                                                                                    !0,
                                                                                                  scopeId: `X_ReXY54C`,
                                                                                                  children:
                                                                                                    s(
                                                                                                      A,
                                                                                                      {
                                                                                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                                                                                        borderRadius: 0,
                                                                                                        bottomLeftRadius: 0,
                                                                                                        bottomRightRadius: 0,
                                                                                                        controls:
                                                                                                          !1,
                                                                                                        height: `100%`,
                                                                                                        id: `Dg_F7Smp4`,
                                                                                                        isMixedBorderRadius:
                                                                                                          !1,
                                                                                                        layoutId: `Dg_F7Smp4`,
                                                                                                        loop: !0,
                                                                                                        muted:
                                                                                                          !0,
                                                                                                        objectFit: `cover`,
                                                                                                        playing:
                                                                                                          !0,
                                                                                                        posterEnabled:
                                                                                                          !0,
                                                                                                        srcFile:
                                                                                                          e,
                                                                                                        srcType: `Upload`,
                                                                                                        srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                                                                                        startTime: 0,
                                                                                                        style:
                                                                                                          {
                                                                                                            width: `100%`,
                                                                                                          },
                                                                                                        topLeftRadius: 0,
                                                                                                        topRightRadius: 0,
                                                                                                        volume: 25,
                                                                                                        width: `100%`,
                                                                                                      }
                                                                                                    ),
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                      }),
                                                                                      s(x, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          i,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `h3`,
                                                                                                {
                                                                                                  className: `framer-styles-preset-3dejsl`,
                                                                                                  "data-styles-preset": `swlvDMe4s`,
                                                                                                  dir: `auto`,
                                                                                                  style:
                                                                                                    {
                                                                                                      "--framer-text-alignment": `center`,
                                                                                                    },
                                                                                                  children: `Rivage`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1g9qle4`,
                                                                                        fonts: [
                                                                                          `Inter`,
                                                                                        ],
                                                                                        text: t,
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                            }),
                                                                            fr()
                                                                          ),
                                                                        }),
                                                                    }),
                                                                    s(ne, {
                                                                      children:
                                                                        n.visible &&
                                                                        s(p, {
                                                                          children: l(
                                                                            s(be, {
                                                                              triggerId: `${r}-17d71xs`,
                                                                              children: d(de, {
                                                                                children: [
                                                                                  s(
                                                                                    _.div,
                                                                                    {
                                                                                      animate: {
                                                                                        opacity: 1,
                                                                                        transition:
                                                                                          {
                                                                                            delay: 0,
                                                                                            duration: 0,
                                                                                            ease: [
                                                                                              0.5,
                                                                                              0,
                                                                                              0.88,
                                                                                              0.77,
                                                                                            ],
                                                                                            type: `tween`,
                                                                                          },
                                                                                      },
                                                                                      className: w(
                                                                                        E,
                                                                                        `framer-1vq0ylx`
                                                                                      ),
                                                                                      "data-framer-name": `Image Overlay`,
                                                                                      "data-framer-portal-id": `${r}-17d71xs`,
                                                                                      exit: {
                                                                                        opacity: 0,
                                                                                        transition:
                                                                                          {
                                                                                            delay: 0,
                                                                                            duration: 0,
                                                                                            ease: [
                                                                                              0.12,
                                                                                              0.23,
                                                                                              0.5,
                                                                                              1,
                                                                                            ],
                                                                                            type: `tween`,
                                                                                          },
                                                                                      },
                                                                                      initial: {
                                                                                        opacity: 0,
                                                                                      },
                                                                                      onTap: () =>
                                                                                        n.hide(),
                                                                                    },
                                                                                    `vINUAuYep`
                                                                                  ),
                                                                                  d(_.div, {
                                                                                    animate: ur,
                                                                                    className: w(
                                                                                      E,
                                                                                      `framer-tklebv`
                                                                                    ),
                                                                                    "data-framer-name": `Container`,
                                                                                    "data-framer-portal-id": `${r}-17d71xs`,
                                                                                    exit: pr,
                                                                                    initial: dr,
                                                                                    children: [
                                                                                      s(_.div, {
                                                                                        className: `framer-7lp9id`,
                                                                                        "data-framer-name": `Close Overlay Background`,
                                                                                        onTap: T({
                                                                                          overlay:
                                                                                            n,
                                                                                        }),
                                                                                      }),
                                                                                      s(_.div, {
                                                                                        className: `framer-15cdqip`,
                                                                                        "data-framer-name": `Image Wrapper`,
                                                                                        children: s(
                                                                                          we,
                                                                                          {
                                                                                            background:
                                                                                              {
                                                                                                alt: ``,
                                                                                                fit: `fill`,
                                                                                                pixelHeight: 4e3,
                                                                                                pixelWidth: 6e3,
                                                                                                sizes: `max(min(100vw - 40px, 420px), 1px)`,
                                                                                                ...sr(
                                                                                                  a
                                                                                                ),
                                                                                              },
                                                                                            className: `framer-1dgznii`,
                                                                                            fitImageDimension: `height`,
                                                                                          }
                                                                                        ),
                                                                                      }),
                                                                                      s(x, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          i,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `h3`,
                                                                                                {
                                                                                                  className: `framer-styles-preset-3dejsl`,
                                                                                                  "data-styles-preset": `swlvDMe4s`,
                                                                                                  dir: `auto`,
                                                                                                  style:
                                                                                                    {
                                                                                                      "--framer-text-alignment": `center`,
                                                                                                    },
                                                                                                  children: `Rivage`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-d01iws`,
                                                                                        "data-framer-name": `Title`,
                                                                                        fonts: [
                                                                                          `Inter`,
                                                                                        ],
                                                                                        text: t,
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                            }),
                                                                            fr()
                                                                          ),
                                                                        }),
                                                                    }),
                                                                  ],
                                                                }),
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
                    s(le, {
                      breakpoint: S,
                      overrides: { JRX1_lOGf: { y: (h?.y || 0) + 0 + 2437 } },
                      children: s(O, {
                        height: 0,
                        y: (h?.y || 0) + 0 + 1457,
                        children: s(Ce, {
                          className: `framer-8stx1b-container`,
                          layout: D,
                          nodeId: `oezaChTUV`,
                          scopeId: `X_ReXY54C`,
                          children: s(Le, {
                            height: `100%`,
                            id: `oezaChTUV`,
                            layoutId: `oezaChTUV`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-WGsJB.framer-qn68ph, .framer-WGsJB .framer-qn68ph { display: block; }`,
        `.framer-WGsJB.framer-148liif { align-content: center; align-items: center; background-color: var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, #4a2315); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-WGsJB .framer-1qsjqeg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-WGsJB .framer-1fwirdj { --border-bottom-width: 0px; --border-color: var(--token-847bdcde-68af-4acc-bb45-37d83fa37c74, #1a1a1a); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, #4a2315); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 160px 0px 40px 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-WGsJB .framer-pwkge1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 1920px; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-WGsJB .framer-r5t3wu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-WGsJB .framer-1qzw11q { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1120px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-WGsJB .framer-1e2xzrs { display: grid; flex: none; gap: 60px 10px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-WGsJB .framer-7gs23a { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-WGsJB .framer-17d71xs-container, .framer-WGsJB .framer-1s4ezer-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-WGsJB.framer-xw7lm6, .framer-WGsJB.framer-1vq0ylx { inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-WGsJB.framer-17ei6yh { -webkit-backdrop-filter: blur(8px); align-content: center; align-items: center; backdrop-filter: blur(8px); background-color: rgba(15, 15, 15, 0.9); bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; justify-content: center; left: 0px; overflow: visible; padding: 20px; position: fixed; right: 0px; top: 0px; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-WGsJB .framer-re24i7, .framer-WGsJB .framer-7lp9id { bottom: 0px; cursor: pointer; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-WGsJB .framer-1poynrb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 800px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-WGsJB .framer-1g9qle4, .framer-WGsJB .framer-d01iws { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-WGsJB.framer-tklebv { -webkit-backdrop-filter: blur(8px); align-content: center; align-items: center; backdrop-filter: blur(8px); background-color: rgba(15, 15, 15, 0.9); bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; justify-content: center; left: 0px; overflow: visible; padding: 20px; position: fixed; right: 0px; top: 0px; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-WGsJB .framer-15cdqip { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 420px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-WGsJB .framer-1dgznii { flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-WGsJB .framer-8stx1b-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...Ge,
        ...Be,
        `.framer-WGsJB[data-border="true"]::after, .framer-WGsJB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-WGsJB.framer-148liif { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-WGsJB.framer-148liif { width: 390px; } .framer-WGsJB .framer-pwkge1 { padding: 0px 20px 0px 20px; } .framer-WGsJB .framer-1e2xzrs { grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-WGsJB`
    )),
    (br = $),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 3695, width: 1200 }),
    ye(
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
        ...Jn,
        ...Yn,
        ...Zn,
        ...T(Ke),
        ...T(ze),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = ve.get(hr(), n);
        return Promise.allSettled([
          r.preload(),
          C(Le, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => C(M, {}, t)));
          })(),
        ]);
      },
    }),
    (xr = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerX_ReXY54C`,
          slots: [],
          annotations: {
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"pOUKlux2D":{"layout":["fixed","auto"]},"JRX1_lOGf":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `3695`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `{"qWVNzUkY9":{"pattern":":qWVNzUkY9","name":"archives"}}`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { xr as __FramerMetadata__, br as default, $n as queryParamNames };
//# sourceMappingURL=_wz9C9k0zAu5ZeWy2F072m36wYpOKr2A1EsuPUKfr7M.BqY3eC1v.mjs.map
