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
  Et as m,
  N as h,
  Tt as g,
  W as _,
  X as v,
  _ as y,
  _t as b,
  k as x,
  lt as S,
  p as C,
} from "./framer.DMuD-Poq.mjs";
function w(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F = e(() => {
    (s(),
      v(),
      p(),
      c(),
      (T = { t4e5r1qqd: { hover: !0 } }),
      (E = `framer-pjfqq`),
      (D = { t4e5r1qqd: `framer-v-cbm29h` }),
      (O = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (k = ({ value: e, children: n }) => {
        let r = o(d),
          i = e ?? r.transition,
          s = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: s, children: n });
      }),
      (A = u.create(r)),
      (j = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (M = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (N = m(
        i(function (e, t) {
          let r = n(null),
            i = t ?? r,
            o = l(),
            { activeLocale: s, setLocale: c } = b(),
            u = S(),
            { style: d, className: p, layoutId: m, variant: v, ...x } = j(e),
            {
              baseVariant: N,
              classNames: P,
              clearLoadingGesture: F,
              gestureHandlers: I,
              gestureVariant: L,
              isLoading: R,
              setGestureState: z,
              setVariant: B,
              variants: V,
            } = g({
              defaultVariant: `t4e5r1qqd`,
              enabledGestures: T,
              ref: i,
              variant: v,
              variantClassNames: D,
            }),
            H = M(e, V),
            U = h(E);
          return a(f, {
            id: m ?? o,
            children: a(A, {
              animate: V,
              initial: !1,
              children: a(k, {
                value: O,
                children: a(y, {
                  href: { webPageId: `augiA20Il` },
                  motionChild: !0,
                  nodeId: `t4e5r1qqd`,
                  openInNewTab: !1,
                  scopeId: `TwJkpe0RQ`,
                  smoothScroll: !1,
                  children: a(C, {
                    ...x,
                    ...I,
                    as: `a`,
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 312,
                      intrinsicWidth: 450,
                      loading: _(u?.y || 0),
                      pixelHeight: 312,
                      pixelWidth: 450,
                      sizes: u?.width || `100vw`,
                      src: `../../assets/images/X4wPFCHJs4GRPdskSEQefZllr8.png`,
                    },
                    className: `${h(U, `framer-cbm29h`, p, P)} framer-dsqwfn`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: H,
                    layoutId: `t4e5r1qqd`,
                    ref: i,
                    style: { ...d },
                    ...w(
                      {
                        "t4e5r1qqd-hover": {
                          "data-framer-name": void 0,
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 416,
                            intrinsicWidth: 450,
                            loading: _(u?.y || 0),
                            pixelHeight: 416,
                            pixelWidth: 450,
                            sizes: u?.width || `100vw`,
                            src: `https://framerusercontent.com/images/SWAKFLrwkvkEAnpyOQi4daIa4w.png?width=450&height=416`,
                          },
                        },
                      },
                      N,
                      L
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-pjfqq.framer-dsqwfn, .framer-pjfqq .framer-dsqwfn { display: block; }`,
          `.framer-pjfqq.framer-cbm29h { cursor: pointer; height: 36px; position: relative; text-decoration: none; width: 49px; }`,
        ],
        `framer-pjfqq`
      )),
      (P = N),
      (N.displayName = `LOGO`),
      (N.defaultProps = { height: 36, width: 49 }),
      x(N, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
export { F as n, P as t };
//# sourceMappingURL=TwJkpe0RQ.CZtQ7Gfn.mjs.map
