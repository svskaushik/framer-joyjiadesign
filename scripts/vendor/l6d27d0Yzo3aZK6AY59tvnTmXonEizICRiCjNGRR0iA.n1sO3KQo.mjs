import { t as e } from "./rolldown-runtime.TjgygFMs.mjs";
import {
  A as t,
  D as n,
  I as r,
  M as i,
  N as a,
  P as o,
  R as s,
  _ as c,
  c as l,
  k as u,
  l as d,
  o as f,
  s as p,
  w as m,
  y as h,
} from "./react.DY0xf786.mjs";
import { B as g, H as _, S as v, a as y, n as ee, r as b, t as x } from "./motion.BEaCLYSy.mjs";
import {
  A as S,
  Ct as C,
  D as w,
  Dt as T,
  E,
  Et as D,
  F as O,
  N as k,
  Ot as A,
  S as j,
  St as M,
  Tt as te,
  U as N,
  V as P,
  W as F,
  X as I,
  _ as ne,
  _t as re,
  a as L,
  c as ie,
  d as ae,
  ft as oe,
  ht as se,
  k as ce,
  lt as le,
  n as ue,
  o as R,
  p as de,
  pt as fe,
  rt as pe,
  s as z,
  st as me,
  u as he,
  vt as ge,
  wt as _e,
  x as ve,
  xt as ye,
  yt as be,
} from "./framer.DMuD-Poq.mjs";
import { a as xe, c as Se, i as Ce, o as we, r as Te, s as Ee } from "./shared-lib.Dqp23CCf.mjs";
import { n as De, t as Oe } from "./TwJkpe0RQ.CZtQ7Gfn.mjs";
import { i as ke, n as Ae, r as je, t as Me } from "./rxHmVAwkI.D5E6Qd6Q.mjs";
import { i as Ne, n as Pe, r as Fe, t as Ie } from "./QtLJn_5pp.CiIbR03O.mjs";
import { a as Le, i as Re, o as ze, r as Be } from "./Video.CLc8Xk_M.mjs";
import { n as Ve, t as B } from "./d5VB2OwPA.CVkSm7VH.mjs";
import { n as He, t as Ue } from "./tL73CBK8h.3AGeDc7I.mjs";
import { n as We, t as Ge } from "./K1UDmAL9B.9vbflJSV.mjs";
import { i as Ke, r as qe } from "./nOXL0BeXe.LC0aDWbL.mjs";
import { n as Je, r as Ye } from "./augiA20Il.BSLmjZ9e.mjs";
function Xe(e) {
  let t = ie({ state: Object.freeze({ ...e }) }),
    n = (e) => {
      (typeof e == `function` && (e = e(t.state)), (t.state = Object.freeze({ ...t.state, ...e })));
    },
    r = typeof e == `object` ? Object.freeze({ ...e }) : e,
    a = new Set(),
    s = (e) => {
      (typeof e == `function` && (e = e(r)),
        (r = typeof e == `object` ? Object.freeze({ ...r, ...e }) : e),
        a.forEach((e) => e(r)));
    };
  function c() {
    let [e, c] = o(r);
    return (
      i(() => (a.add(c), () => a.delete(c)), []),
      be() === !0 ? (be(), [t.state, n]) : [e, s]
    );
  }
  return c;
}
var Ze = e(() => {
    (m(), I());
  }),
  Qe = e(() => {
    Ze();
  }),
  $e,
  et = e(() => {
    (r(),
      f(),
      I(),
      Qe(),
      ($e = ({ title: e, description: t, containerStyle: n }) =>
        d(`div`, {
          style: {
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            textAlign: `center`,
            justifyContent: `center`,
            backgroundColor: `rgba(136, 85, 255, 0.1)`,
            overflow: `hidden`,
            ...n,
          },
          children: [
            l(`span`, {
              role: `img`,
              "aria-label": `icon`,
              style: { fontSize: `32px` },
              children: `✨`,
            }),
            d(`div`, {
              style: { maxWidth: `240px` },
              children: [
                l(`h1`, { style: { fontSize: 11, color: `#96F`, fontWeight: 600 }, children: e }),
                l(`p`, {
                  style: { fontSize: 11, color: `rgba(153, 102, 255, 0.7)`, lineHeight: 1.5 },
                  children: t,
                }),
              ],
            }),
          ],
        })),
      z.Object,
      z.Color,
      z.Number,
      z.Number,
      z.Number,
      z.Enum,
      z.Number,
      Xe({
        initialLimit: void 0,
        initialOffset: void 0,
        limit: void 0,
        offset: void 0,
        totalItems: void 0,
        page: 1,
        searchQuery: ``,
        totalPages: void 0,
      }));
  }),
  tt = e(() => {
    et();
  });
function nt(e) {
  let [t, n] = o(!1);
  return (
    i(() => {
      let t = !0;
      return (
        (async () => {
          let r = e.map(
            (e) =>
              new Promise((t, n) => {
                let r = new Image();
                ((r.src = e), (r.onload = t), (r.onerror = n));
              })
          );
          try {
            (await Promise.all(r), t && n(!0));
          } catch (e) {
            console.error(`Failed to preload images:`, e);
          }
        })(),
        () => {
          t = !1;
        }
      );
    }, [e]),
    t
  );
}
function V({
  images: e = [],
  style: t = { width: 100, height: 100, radius: 0, fit: `fill` },
  frequency: r = 50,
  visibleFor: a = 1,
  perspective: s = { enabled: !1, value: 1e3 },
  animation: c = {
    in: {
      from: {
        opacity: 0,
        scale: 0.5,
        blur: 8,
        is3D: `2D`,
        rotate2D: 0,
        rotate3D: { x: 0, y: 0, z: 0 },
      },
      to: {
        opacity: 1,
        scale: 1,
        blur: 0,
        is3D: `2D`,
        rotate2D: 0,
        rotate3D: { x: 0, y: 0, z: 0 },
      },
      transition: { type: `spring`, stiffness: 300, damping: 30 },
    },
    out: {
      opacity: 0,
      scale: 0.5,
      blur: 8,
      is3D: `2D`,
      rotate2D: 0,
      rotate3D: { x: 0, y: 0, z: 0 },
      transition: { type: `spring`, stiffness: 300, damping: 30 },
    },
  },
  ...u
}) {
  let d = 200 - ((r - 1) * 199) / 49,
    [f, p] = o({ x: 0, y: 0 }),
    [m, h] = o(!1),
    [g, _] = o(0),
    [y, b] = o([]),
    [x, S] = o(!1),
    C = n(null),
    w = nt(x ? e : []);
  i(() => {
    let e = new IntersectionObserver(
      ([e]) => {
        S(e.isIntersecting);
      },
      { root: null, rootMargin: `0px`, threshold: 0.1 }
    );
    return (
      C.current && e.observe(C.current),
      () => {
        C.current && e.unobserve(C.current);
      }
    );
  }, []);
  let T = (e) => {
      let t = e.currentTarget.getBoundingClientRect();
      p({ x: e.clientX - t.left, y: e.clientY - t.top });
    },
    E = () => {
      h(!0);
    },
    D = () => {
      h(!1);
    };
  return (
    i(() => {
      if (m && e.length > 0) {
        let t = y[y.length - 1];
        if ((t ? Math.hypot(f.x - t.x, f.y - t.y) : 1 / 0) > d) {
          let t = {
            id: Math.random(),
            position: g,
            x: f.x,
            y: f.y,
            createdAt: Date.now(),
            state: `entering`,
          };
          (b((e) => [...e, t]),
            _((t) => (t + 1) % e.length),
            setTimeout(() => {
              b((e) => e.map((e) => (e.id === t.id ? { ...e, state: `exiting` } : e)));
            }, a * 1e3),
            setTimeout(() => {
              b((e) => e.filter((e) => e.id !== t.id));
            }, 1e4));
        }
      }
    }, [f, m, e, d, g, a]),
    e.length === 0
      ? l($e, {
          title: `Set Up the Component`,
          description: `Add images to the component through the 'Images' property on the right panel. Then preview the website, and hover over the component.`,
          containerStyle: { ...u.style, width: `100%`, height: `100%` },
        })
      : l(he, {
          ...u,
          ref: C,
          onMouseMove: T,
          onMouseEnter: E,
          onMouseLeave: D,
          background: ``,
          children:
            w &&
            l(ee, {
              children: y.map(({ id: n, position: r, x: i, y: a, state: o }) =>
                l(
                  v.div,
                  {
                    initial: {
                      opacity: c.in.from.opacity,
                      scale: c.in.from.scale,
                      filter: `blur(${c.in.from.blur}px)`,
                      x: i - t.width / 2,
                      y: a - t.height / 2,
                      rotate: c.in.from.is3D === `2D` ? c.in.from.rotate2D : 0,
                      rotateX: c.in.from.is3D === `3D` ? c.in.from.rotate3D.x : 0,
                      rotateY: c.in.from.is3D === `3D` ? c.in.from.rotate3D.y : 0,
                      rotateZ: c.in.from.is3D === `3D` ? c.in.from.rotate3D.z : 0,
                    },
                    animate:
                      o === `entering`
                        ? {
                            opacity: c.in.to.opacity,
                            scale: c.in.to.scale,
                            filter: `blur(${c.in.to.blur}px)`,
                            x: i - t.width / 2,
                            y: a - t.height / 2,
                            rotate: c.in.to.is3D === `2D` ? c.in.to.rotate2D : 0,
                            rotateX: c.in.to.is3D === `3D` ? c.in.to.rotate3D.x : 0,
                            rotateY: c.in.to.is3D === `3D` ? c.in.to.rotate3D.y : 0,
                            rotateZ: c.in.to.is3D === `3D` ? c.in.to.rotate3D.z : 0,
                          }
                        : {
                            opacity: c.out.opacity,
                            scale: c.out.scale,
                            filter: `blur(${c.out.blur}px)`,
                            x: i - t.width / 2,
                            y: a - t.height / 2,
                            rotate: c.out.is3D === `2D` ? c.out.rotate2D : 0,
                            rotateX: c.out.is3D === `3D` ? c.out.rotate3D.x : 0,
                            rotateY: c.out.is3D === `3D` ? c.out.rotate3D.y : 0,
                            rotateZ: c.out.is3D === `3D` ? c.out.rotate3D.z : 0,
                          },
                    transition: o === `entering` ? c.in.transition : c.out.transition,
                    style: {
                      position: `absolute`,
                      width: `${t.width}px`,
                      height: `${t.height}px`,
                      backgroundImage: `url(${e[r] ?? ``})`,
                      backgroundSize: t.fit === `fill` ? `cover` : `contain`,
                      backgroundPosition: `center`,
                      backgroundRepeat: `no-repeat`,
                      borderRadius: `${t.radius}px`,
                      pointerEvents: `none`,
                      perspective: s.enabled ? `${s.value}px` : `none`,
                    },
                  },
                  n
                )
              ),
            }),
        })
  );
}
var rt = e(() => {
  (f(),
    m(),
    I(),
    x(),
    tt(),
    (V.displayName = `Cursor Image Trail`),
    S(V, {
      images: { type: z.Array, title: `Images`, propertyControl: { type: z.Image } },
      style: {
        type: z.Object,
        title: `Style`,
        controls: {
          width: {
            type: z.Number,
            title: `Width`,
            defaultValue: 100,
            min: 0,
            max: 1e3,
            unit: `px`,
            step: 1,
            displayStepper: !0,
          },
          height: {
            type: z.Number,
            title: `Height`,
            defaultValue: 100,
            min: 0,
            max: 1e3,
            unit: `px`,
            step: 1,
            displayStepper: !0,
          },
          radius: {
            type: z.Number,
            title: `Radius`,
            defaultValue: 0,
            min: 0,
            max: 500,
            unit: `px`,
            step: 1,
            displayStepper: !0,
          },
          fit: {
            type: z.Enum,
            title: `Type`,
            options: [`fill`, `fit`],
            optionTitles: [`Fill`, `Fit`],
            defaultValue: `fill`,
            description: `Style the images that will appear.`,
          },
        },
      },
      frequency: {
        type: z.Number,
        title: `Frequency`,
        defaultValue: 35,
        min: 1,
        max: 50,
        step: 1,
        displayStepper: !1,
        description: `How frequently these images appear.`,
      },
      visibleFor: {
        type: z.Number,
        title: `Visible For`,
        defaultValue: 1,
        min: 0.1,
        max: 10,
        step: 0.1,
        unit: `s`,
        displayStepper: !0,
        description: `How long they're visible for before they animate out.`,
      },
      animation: {
        type: z.Object,
        title: `Animation`,
        controls: {
          in: {
            type: z.Object,
            title: `In`,
            controls: {
              from: {
                type: z.Object,
                title: `From`,
                controls: {
                  opacity: {
                    type: z.Number,
                    title: `Opacity`,
                    defaultValue: 0,
                    min: 0,
                    max: 1,
                    step: 0.1,
                  },
                  scale: {
                    type: z.Number,
                    title: `Scale`,
                    defaultValue: 0.5,
                    min: 0,
                    max: 10,
                    step: 0.1,
                  },
                  blur: {
                    type: z.Number,
                    title: `Blur`,
                    defaultValue: 10,
                    min: 0,
                    max: 50,
                    step: 1,
                    unit: `px`,
                  },
                  is3D: {
                    type: z.Enum,
                    title: `Rotation`,
                    options: [`2D`, `3D`],
                    optionTitles: [`2D`, `3D`],
                    defaultValue: `2D`,
                    displaySegmentedControl: !0,
                  },
                  rotate2D: {
                    type: z.Number,
                    title: `2D Rotate`,
                    defaultValue: 0,
                    min: -360,
                    max: 360,
                    step: 1,
                    unit: `°`,
                    hidden: (e) => e.is3D === `3D`,
                  },
                  rotate3D: {
                    type: z.Object,
                    title: `3D Rotate`,
                    controls: {
                      x: {
                        type: z.Number,
                        title: `X`,
                        defaultValue: 0,
                        min: -360,
                        max: 360,
                        step: 1,
                        unit: `°`,
                      },
                      y: {
                        type: z.Number,
                        title: `Y`,
                        defaultValue: 0,
                        min: -360,
                        max: 360,
                        step: 1,
                        unit: `°`,
                      },
                      z: {
                        type: z.Number,
                        title: `Z`,
                        defaultValue: 0,
                        min: -360,
                        max: 360,
                        step: 1,
                        unit: `°`,
                      },
                    },
                    hidden: (e) => e.is3D === `2D`,
                  },
                },
              },
              to: {
                type: z.Object,
                title: `To`,
                controls: {
                  opacity: {
                    type: z.Number,
                    title: `Opacity`,
                    defaultValue: 1,
                    min: 0,
                    max: 1,
                    step: 0.1,
                  },
                  scale: {
                    type: z.Number,
                    title: `Scale`,
                    defaultValue: 1,
                    min: 0,
                    max: 10,
                    step: 0.1,
                  },
                  blur: {
                    type: z.Number,
                    title: `Blur`,
                    defaultValue: 0,
                    min: 0,
                    max: 50,
                    step: 1,
                    unit: `px`,
                  },
                  is3D: {
                    type: z.Enum,
                    title: `Rotation`,
                    options: [`2D`, `3D`],
                    optionTitles: [`2D`, `3D`],
                    defaultValue: `2D`,
                    displaySegmentedControl: !0,
                  },
                  rotate2D: {
                    type: z.Number,
                    title: `2D Rotate`,
                    defaultValue: 0,
                    min: -360,
                    max: 360,
                    step: 1,
                    unit: `°`,
                    hidden: (e) => e.is3D === `3D`,
                  },
                  rotate3D: {
                    type: z.Object,
                    title: `3D Rotate`,
                    controls: {
                      x: {
                        type: z.Number,
                        title: `X`,
                        defaultValue: 0,
                        min: -360,
                        max: 360,
                        step: 1,
                        unit: `°`,
                      },
                      y: {
                        type: z.Number,
                        title: `Y`,
                        defaultValue: 0,
                        min: -360,
                        max: 360,
                        step: 1,
                        unit: `°`,
                      },
                      z: {
                        type: z.Number,
                        title: `Z`,
                        defaultValue: 0,
                        min: -360,
                        max: 360,
                        step: 1,
                        unit: `°`,
                      },
                    },
                    hidden: (e) => e.is3D === `2D`,
                  },
                },
              },
              transition: { type: z.Transition, title: `Transition` },
            },
          },
          out: {
            type: z.Object,
            title: `Out`,
            controls: {
              opacity: {
                type: z.Number,
                title: `Opacity`,
                defaultValue: 0,
                min: 0,
                max: 1,
                step: 0.1,
              },
              scale: {
                type: z.Number,
                title: `Scale`,
                defaultValue: 0.5,
                min: 0,
                max: 10,
                step: 0.1,
              },
              blur: {
                type: z.Number,
                title: `Blur`,
                defaultValue: 10,
                min: 0,
                max: 50,
                step: 1,
                unit: `px`,
              },
              is3D: {
                type: z.Enum,
                title: `Rotation`,
                options: [`2D`, `3D`],
                optionTitles: [`2D`, `3D`],
                defaultValue: `2D`,
                displaySegmentedControl: !0,
              },
              rotate2D: {
                type: z.Number,
                title: `2D Rotate`,
                defaultValue: 0,
                min: -360,
                max: 360,
                step: 1,
                unit: `°`,
                hidden: (e) => e.is3D === `3D`,
              },
              rotate3D: {
                type: z.Object,
                title: `3D Rotate`,
                controls: {
                  x: {
                    type: z.Number,
                    title: `X`,
                    defaultValue: 0,
                    min: -360,
                    max: 360,
                    step: 1,
                    unit: `°`,
                  },
                  y: {
                    type: z.Number,
                    title: `Y`,
                    defaultValue: 0,
                    min: -360,
                    max: 360,
                    step: 1,
                    unit: `°`,
                  },
                  z: {
                    type: z.Number,
                    title: `Z`,
                    defaultValue: 0,
                    min: -360,
                    max: 360,
                    step: 1,
                    unit: `°`,
                  },
                },
                hidden: (e) => e.is3D === `2D`,
              },
              transition: { type: z.Transition, title: `Transition` },
            },
          },
        },
      },
      perspective: {
        type: z.Object,
        title: `Perspective`,
        description: `More components at [Framer University](https://frameruni.link/cc).`,
        controls: {
          enabled: { type: z.Boolean, title: `Enable`, defaultValue: !1 },
          value: {
            type: z.Number,
            title: `Value`,
            defaultValue: 1200,
            min: 500,
            max: 5e3,
            step: 10,
            displayStepper: !0,
            hidden: (e) => !e.enabled,
          },
        },
      },
    }));
});
function it(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  H,
  U,
  gt = e(() => {
    (f(),
      I(),
      x(),
      m(),
      Ne(),
      ze(),
      (at = [`vdtAWloMU`, `hB3EWmawb`, `AfXM11d69`, `blkqSGih6`]),
      (ot = `framer-nOPDZ`),
      (st = {
        AfXM11d69: `framer-v-12351fn`,
        blkqSGih6: `framer-v-1f1ns9o`,
        hB3EWmawb: `framer-v-yrjqco`,
        vdtAWloMU: `framer-v-yac5jc`,
      }),
      (ct = void 0),
      (lt = { bounce: 0, delay: 0, duration: 0.8, type: `spring` }),
      (ut = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (dt = ({ value: e, children: n }) => {
        let r = u(y),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(y.Provider, { value: a, children: n });
      }),
      (ft = {
        "Tablet / Mobile Closed": `blkqSGih6`,
        "Tablet / Mobile Open": `AfXM11d69`,
        Active: `vdtAWloMU`,
        Inactive: `hB3EWmawb`,
      }),
      (pt = v.create(a)),
      (mt = ({ description: e, height: t, id: n, image: r, title: i, width: a, ...o }) => ({
        ...o,
        uDBHG1ZOj:
          e ??
          o.uDBHG1ZOj ??
          `I provide creative leadership to ensure your brand’s visuals, photography, and campaigns align beautifully with your identity — guiding every detail for a cohesive, polished result.`,
        variant: ft[o.variant] ?? o.variant ?? `vdtAWloMU`,
        XrYPsN4sI: i ?? o.XrYPsN4sI ?? `Art Direction`,
        ywH7Qr9ap: r ?? o.ywH7Qr9ap,
      })),
      (ht = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = D(
        c(function (e, t) {
          let r = n(null),
            i = t ?? r,
            o = h(),
            { activeLocale: s, setLocale: c } = re(),
            u = le(),
            {
              style: f,
              className: p,
              layoutId: m,
              variant: g,
              ywH7Qr9ap: _,
              XrYPsN4sI: y,
              uDBHG1ZOj: ee,
              ...x
            } = mt(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: O,
              setGestureState: A,
              setVariant: j,
              variants: M,
            } = te({
              cycleOrder: at,
              defaultVariant: `vdtAWloMU`,
              ref: i,
              variant: g,
              variantClassNames: st,
            }),
            N = ht(e, M),
            { activeVariantCallback: P, delay: I } = me(S),
            L = P(async (...e) => {
              (A({ isHovered: !1 }), j(`hB3EWmawb`));
            }),
            ie = P(async (...e) => {
              (A({ isHovered: !0 }), j(`vdtAWloMU`));
            }),
            ae = P(async (...e) => {
              (A({ isPressed: !1 }), j(`blkqSGih6`));
            }),
            oe = P(async (...e) => {
              (A({ isPressed: !1 }), j(`AfXM11d69`));
            }),
            se = k(ot, Be, Ie);
          return l(b, {
            id: m ?? o,
            children: l(pt, {
              animate: M,
              initial: !1,
              children: l(dt, {
                value: lt,
                children: l(ne, {
                  href: ct,
                  motionChild: !0,
                  nodeId: `vdtAWloMU`,
                  scopeId: `bW71OiVK0`,
                  children: l(v.a, {
                    ...x,
                    ...E,
                    className: `${k(se, `framer-yac5jc`, p, C)} framer-1lwe6oz`,
                    "data-framer-name": `Active`,
                    "data-highlight": !0,
                    layoutDependency: N,
                    layoutId: `vdtAWloMU`,
                    onMouseLeave: L,
                    ref: i,
                    style: { ...f },
                    ...it(
                      {
                        AfXM11d69: {
                          "data-framer-name": `Tablet / Mobile Open`,
                          onMouseLeave: void 0,
                          onTap: ae,
                        },
                        blkqSGih6: {
                          "data-framer-name": `Tablet / Mobile Closed`,
                          onMouseLeave: void 0,
                          onTap: oe,
                        },
                        hB3EWmawb: {
                          "data-framer-name": `Inactive`,
                          onMouseEnter: ie,
                          onMouseLeave: void 0,
                        },
                      },
                      S,
                      D
                    ),
                    children: d(v.div, {
                      className: `framer-1o0uuy4`,
                      "data-framer-name": `Container`,
                      layoutDependency: N,
                      layoutId: `CEt77dEjH`,
                      children: [
                        l(v.div, {
                          className: `framer-r2qrc9`,
                          "data-framer-name": `Details`,
                          layoutDependency: N,
                          layoutId: `a5gqqKetJ`,
                          style: { backdropFilter: `blur(5px)`, WebkitBackdropFilter: `blur(5px)` },
                          variants: {
                            blkqSGih6: { backdropFilter: `none`, WebkitBackdropFilter: `none` },
                            hB3EWmawb: { backdropFilter: `none`, WebkitBackdropFilter: `none` },
                          },
                          children: d(v.div, {
                            className: `framer-11bvudc`,
                            "data-framer-name": `Title`,
                            layoutDependency: N,
                            layoutId: `b4Q1koCoM`,
                            children: [
                              d(v.div, {
                                className: `framer-1xdlroh`,
                                "data-framer-name": `Wrapper`,
                                layoutDependency: N,
                                layoutId: `ysvB0jz4s`,
                                children: [
                                  l(w, {
                                    __fromCanvasComponent: !0,
                                    children: l(a, {
                                      children: l(v.h3, {
                                        className: `framer-styles-preset-3dejsl`,
                                        "data-styles-preset": `swlvDMe4s`,
                                        children: `Art Direction`,
                                      }),
                                    }),
                                    className: `framer-3xtiut`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `ahmWTQ_Nv`,
                                    style: { "--framer-paragraph-spacing": `0px` },
                                    text: y,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  d(v.div, {
                                    className: `framer-1puhvoj`,
                                    layoutDependency: N,
                                    layoutId: `F7uJfqgDE`,
                                    children: [
                                      l(v.div, {
                                        className: `framer-e5qn00`,
                                        "data-framer-name": `Line`,
                                        layoutDependency: N,
                                        layoutId: `jtOcFTTQ3`,
                                        style: {
                                          backgroundColor: `var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255))`,
                                          rotate: -180,
                                        },
                                        variants: {
                                          blkqSGih6: { rotate: -90 },
                                          hB3EWmawb: { rotate: -90 },
                                        },
                                      }),
                                      l(v.div, {
                                        className: `framer-3m4p57`,
                                        "data-framer-name": `Line`,
                                        layoutDependency: N,
                                        layoutId: `Ok1NHBXD7`,
                                        style: {
                                          backgroundColor: `var(--token-412736a6-764a-4748-80bf-a9c04ad63339, rgb(255, 255, 255))`,
                                          rotate: 0,
                                        },
                                        variants: {
                                          AfXM11d69: { rotate: 0 },
                                          blkqSGih6: { rotate: 180 },
                                          hB3EWmawb: { rotate: 180 },
                                        },
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              l(v.div, {
                                className: `framer-zi9f3y`,
                                "data-framer-name": `Paragraph`,
                                layoutDependency: N,
                                layoutId: `oxaPB_THx`,
                                style: { opacity: 1 },
                                variants: {
                                  AfXM11d69: { opacity: 1 },
                                  blkqSGih6: { opacity: 0 },
                                  hB3EWmawb: { opacity: 0 },
                                },
                                children: l(w, {
                                  __fromCanvasComponent: !0,
                                  children: l(a, {
                                    children: l(v.p, {
                                      className: `framer-styles-preset-no5nr2`,
                                      "data-styles-preset": `QtLJn_5pp`,
                                      children: `We dive into the essence of your brand, exploring your mission, values, and audience to develop a creative direction that resonates. It is all about imagining possibilities and setting a the foundation. Through collaborative sessions and research, we shape a concept that speaks to your brand’s uniqueness and potential, creating the groundwork for everything that follows.`,
                                    }),
                                  }),
                                  className: `framer-yx9agb`,
                                  fonts: [`Inter`],
                                  layoutDependency: N,
                                  layoutId: `gmb3ygOjR`,
                                  style: { "--framer-paragraph-spacing": `0px` },
                                  text: ee,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                        l(de, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: F(
                              (u?.y || 0) +
                                (0 + ((u?.height || 470) - 0 - ((u?.height || 470) - 0) * 1) / 2) +
                                0
                            ),
                            sizes: `max(${u?.width || `100vw`}, 1px)`,
                            ...ut(_),
                          },
                          className: `framer-anncrq`,
                          layoutDependency: N,
                          layoutId: `mO4Ums3wE`,
                          style: {
                            filter: `brightness(0.25)`,
                            scale: 1.05,
                            WebkitFilter: `brightness(0.25)`,
                          },
                          variants: {
                            blkqSGih6: {
                              filter: `brightness(0.8)`,
                              scale: 1,
                              WebkitFilter: `brightness(0.8)`,
                            },
                            hB3EWmawb: {
                              filter: `brightness(0.8)`,
                              scale: 1,
                              WebkitFilter: `brightness(0.8)`,
                            },
                          },
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-nOPDZ.framer-1lwe6oz, .framer-nOPDZ .framer-1lwe6oz { display: block; }`,
          `.framer-nOPDZ.framer-yac5jc { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 470px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 376px; }`,
          `.framer-nOPDZ .framer-1o0uuy4 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-nOPDZ .framer-r2qrc9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 100%; z-index: 3; }`,
          `.framer-nOPDZ .framer-11bvudc { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: 1px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-nOPDZ .framer-1xdlroh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-nOPDZ .framer-3xtiut { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-nOPDZ .framer-1puhvoj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 20px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 20px; }`,
          `.framer-nOPDZ .framer-e5qn00, .framer-nOPDZ .framer-3m4p57 { flex: none; height: 1px; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 1px / 2); width: 100%; z-index: 1; }`,
          `.framer-nOPDZ .framer-zi9f3y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-nOPDZ .framer-yx9agb { flex: 1 0 0px; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-nOPDZ .framer-anncrq { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-nOPDZ.framer-v-12351fn.framer-yac5jc, .framer-nOPDZ.framer-v-1f1ns9o.framer-yac5jc { cursor: pointer; }`,
          ...Re,
          ...Pe,
        ],
        `framer-nOPDZ`
      )),
      (U = H),
      (H.displayName = `Service Home Component`),
      (H.defaultProps = { height: 470, width: 376 }),
      S(H, {
        variant: {
          options: [`vdtAWloMU`, `hB3EWmawb`, `AfXM11d69`, `blkqSGih6`],
          optionTitles: [`Active`, `Inactive`, `Tablet / Mobile Open`, `Tablet / Mobile Closed`],
          title: `Variant`,
          type: z.Enum,
        },
        ywH7Qr9ap: { title: `Image`, type: z.ResponsiveImage },
        XrYPsN4sI: { defaultValue: `Art Direction`, title: `Title`, type: z.String },
        onXrYPsN4sIChange: { changes: `XrYPsN4sI`, type: z.ChangeHandler },
        uDBHG1ZOj: {
          defaultValue: `I provide creative leadership to ensure your brand’s visuals, photography, and campaigns align beautifully with your identity — guiding every detail for a cohesive, polished result.`,
          displayTextArea: !0,
          title: `Description`,
          type: z.String,
        },
        onuDBHG1ZOjChange: { changes: `uDBHG1ZOj`, type: z.ChangeHandler },
      }),
      ce(
        H,
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
          ...N(Le),
          ...N(Fe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function _t(e) {
  return c(
    (t, n) => (
      i(() => {
        let e = () => {
          let e = s.innerHeight * 0.01;
          document.documentElement.style.setProperty(`--vh`, `${e}px`);
        };
        return (e(), s.addEventListener(`resize`, e), () => s.removeEventListener(`resize`, e));
      }, []),
      l(e, { ref: n, ...t, style: { ...t.style, height: `calc(var(--vh, 1vh) * 100)` } })
    )
  );
}
var vt = e(() => {
    (r(), f(), m());
  }),
  yt,
  bt = e(() => {
    (f(),
      m(),
      x(),
      (yt = (e) =>
        c((t, n) => {
          let { scrollYProgress: r } = g(),
            i = 0.25,
            { style: a, ...o } = t,
            s = _(r, [0, i], [`blur(0px)`, `blur(15px)`]),
            c = _(r, [0, i], [1, 0.6]),
            u = { ...a, filter: s, scale: c };
          return l(e, { ref: n, ...o, style: u, as: v.div });
        })));
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
  W,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  G,
  K,
  q,
  J,
  Y,
  zt,
  Bt,
  Vt,
  Ht,
  X,
  Ut,
  Z,
  Q,
  Wt,
  Gt,
  Kt,
  qt,
  $,
  Jt,
  Yt;
e(() => {
  (f(),
    I(),
    x(),
    m(),
    rt(),
    gt(),
    Ce(),
    Ve(),
    Ue(),
    De(),
    vt(),
    bt(),
    We(),
    qe(),
    Ne(),
    Se(),
    ke(),
    Je(),
    (xt = T(v.div, { nodeId: `milq4wOzj`, override: yt, scopeId: `augiA20Il` })),
    (St = P(V)),
    (Ct = T(v.section, { nodeId: `ibi5vKnry`, override: _t, scopeId: `augiA20Il` })),
    (wt = P(B)),
    (Tt = P(He)),
    (Et = A(R)),
    (Dt = P(U)),
    (Ot = A(v.div)),
    (kt = P(Te)),
    (At = P(Oe)),
    (jt = {
      FM3tyFU3r: `(min-width: 810px) and (max-width: 1199.98px)`,
      Jj3Cf3FJp: `(max-width: 809.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (W = () => typeof document < `u`),
    (Mt = []),
    (Nt = `framer-ovl8m`),
    (Pt = {
      FM3tyFU3r: `framer-v-1x8zgo0`,
      Jj3Cf3FJp: `framer-v-afwud0`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (Ft = (e, t, n) => (e && t ? `position` : n)),
    (It = {
      filter: `blur(10px)`,
      opacity: 0.001,
      rotate: 0,
      scale: 0.95,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (Lt = { bounce: 0, delay: 0.1, duration: 1.8, type: `spring` }),
    (Rt = {
      effect: It,
      repeat: !1,
      startDelay: 0.8,
      tokenization: `element`,
      transition: Lt,
      trigger: `onMount`,
      type: `appear`,
    }),
    (G = {
      effect: It,
      startDelay: 0.2,
      tokenization: `word`,
      transition: Lt,
      trigger: `onInView`,
      type: `appear`,
    }),
    (K = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (q = {
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
    (J = { bounce: 0, delay: 0.2, duration: 1.4, type: `spring` }),
    (Y = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (zt = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (Bt = () => ({
      from: { alias: `hJOw1cxNG`, data: Ke, type: `Collection` },
      select: [
        { collection: `hJOw1cxNG`, name: `McxOXebVw`, type: `Identifier` },
        { collection: `hJOw1cxNG`, name: `zWbd1IZi3`, type: `Identifier` },
        { collection: `hJOw1cxNG`, name: `lTa0BBJJI`, type: `Identifier` },
        { collection: `hJOw1cxNG`, name: `Y3mPbtUk_`, type: `Identifier` },
        { collection: `hJOw1cxNG`, name: `c2FwDDNTL`, type: `Identifier` },
        { collection: `hJOw1cxNG`, name: `Ez5VCK3ej`, type: `Identifier` },
        { collection: `hJOw1cxNG`, name: `id`, type: `Identifier` },
      ],
      where: { collection: `hJOw1cxNG`, name: `KVVm16ZM6`, type: `Identifier` },
    })),
    (Vt = ({ query: e, pageSize: t, children: n }) => n(ye(e))),
    (Ht = () => ({
      from: { alias: `gSoRO2MbO`, data: Ge, type: `Collection` },
      select: [
        { collection: `gSoRO2MbO`, name: `dRTX5fiE3`, type: `Identifier` },
        { collection: `gSoRO2MbO`, name: `fvyoDlct9`, type: `Identifier` },
        { collection: `gSoRO2MbO`, name: `U7xKnjgKL`, type: `Identifier` },
        { collection: `gSoRO2MbO`, name: `Ew0DD0oLS`, type: `Identifier` },
        { collection: `gSoRO2MbO`, name: `id`, type: `Identifier` },
      ],
    })),
    (X = { opacity: 0.001, rotate: 0, scale: 0.95, skewX: 0, skewY: 0, x: 0, y: 10 }),
    (Ut = { bounce: 0, delay: 0.1, duration: 1.6, type: `spring` }),
    (Z = {
      effect: X,
      repeat: !1,
      startDelay: 0.1,
      threshold: 0,
      tokenization: `line`,
      transition: Ut,
      trigger: `onInView`,
      type: `appear`,
    }),
    (Q = {
      effect: X,
      repeat: !1,
      startDelay: 0.2,
      threshold: 0,
      tokenization: `line`,
      transition: Ut,
      trigger: `onInView`,
      type: `appear`,
    }),
    (Wt = { Desktop: `WQLkyLRf1`, Phone: `Jj3Cf3FJp`, Tablet: `FM3tyFU3r` }),
    (Gt = ({ value: e }) =>
      se()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Kt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Wt[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (qt = { component: Oe, variant: `t4e5r1qqd` }),
    ($ = D(
      c(function (e, r) {
        let i = n(null),
          o = r ?? i,
          s = h(),
          { activeLocale: c, setLocale: f } = re(),
          m = le(),
          { style: g, className: _, layoutId: ee, variant: x, ...S } = Kt(e);
        ge(t(() => Ye({}, c), [c]));
        let [T, D] = fe(x, jt, !1),
          O = k(Nt, xe, Me, Ie),
          A = u(ae)?.isLayoutTemplate,
          te = Ft(A, !!u(y)?.transition?.layout),
          N = () => (W() ? ![`FM3tyFU3r`, `Jj3Cf3FJp`].includes(T) : !0),
          P = M(`lwGJUZXPf`),
          I = _e(),
          ne = () => (W() ? T !== `Jj3Cf3FJp` : !0);
        C();
        let ie = () => !W() || T === `Jj3Cf3FJp`,
          se = M(`zwaV8XJhc`),
          ce = n(null),
          pe = M(`WemT6d0vc`),
          z = n(null);
        return (
          oe({ wrsxj9: qt }),
          l(ae.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Wt,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Pt,
            },
            children: d(b, {
              id: ee ?? s,
              children: [
                l(Gt, {
                  value: `html body { background: var(--token-0df385c8-c6c4-40bb-a008-e6f27b304ae0, rgb(15, 15, 15)); }`,
                }),
                d(v.div, {
                  ...S,
                  className: k(O, `framer-72rtr7`, _),
                  ref: o,
                  style: { ...g },
                  children: [
                    d(v.main, {
                      className: `framer-1krhkqh`,
                      "data-framer-name": `Main`,
                      layout: te,
                      children: [
                        d(Ct, {
                          className: `framer-jquibe`,
                          "data-framer-name": `Section - Hero`,
                          children: [
                            d(v.div, {
                              className: `framer-1r6wirc`,
                              "data-framer-cursor": `wrsxj9`,
                              "data-framer-name": `Container`,
                              children: [
                                l(de, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 624,
                                    intrinsicWidth: 900,
                                    loading: F((m?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 318.5),
                                    pixelHeight: 624,
                                    pixelWidth: 900,
                                    sizes: `351px`,
                                    src: `../../assets/images/yMZ6L4OR25cH13dH5EKFemetCeY.png?width=900&height=624`,
                                    srcSet: `../../assets/images/yMZ6L4OR25cH13dH5EKFemetCeY.png 512w,../../assets/images/yMZ6L4OR25cH13dH5EKFemetCeY.png?width=900&height=624 900w`,
                                  },
                                  className: `framer-1liz76j`,
                                }),
                                l(xt, {
                                  className: `framer-1giww2e`,
                                  "data-framer-name": `Title Wrapper`,
                                  children: l(w, {
                                    __fromCanvasComponent: !0,
                                    children: l(a, {
                                      children: l(`p`, {
                                        className: `framer-styles-preset-15hwgrk`,
                                        "data-styles-preset": `rbICbRVFi`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Product & Visual Designer`,
                                      }),
                                    }),
                                    className: `framer-1g09fev`,
                                    "data-framer-name": `Subtitle`,
                                    effect: Rt,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            N() &&
                              l(L, {
                                children: l(R, {
                                  className: `framer-16ve2or-container hidden-1x8zgo0 hidden-afwud0`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: `CLt6edQ_b`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  children: l(V, {
                                    animation: {
                                      in: {
                                        from: {
                                          blur: 10,
                                          is3D: `2D`,
                                          opacity: 0,
                                          rotate2D: 0,
                                          rotate3D: { x: 50, y: 0, z: 0 },
                                          scale: 0.8,
                                        },
                                        to: {
                                          blur: 0,
                                          is3D: `2D`,
                                          opacity: 1,
                                          rotate2D: 0,
                                          rotate3D: { x: 0, y: 0, z: 0 },
                                          scale: 1,
                                        },
                                        transition: {
                                          damping: 60,
                                          delay: 0,
                                          mass: 1,
                                          stiffness: 500,
                                          type: `spring`,
                                        },
                                      },
                                      out: {
                                        blur: 10,
                                        is3D: `2D`,
                                        opacity: 0,
                                        rotate2D: 0,
                                        rotate3D: { x: 0, y: 0, z: 0 },
                                        scale: 0.8,
                                        transition: {
                                          damping: 60,
                                          delay: 0,
                                          mass: 1,
                                          stiffness: 500,
                                          type: `spring`,
                                        },
                                      },
                                    },
                                    frequency: 10,
                                    height: `100%`,
                                    id: `CLt6edQ_b`,
                                    images: [
                                      `../../assets/images/NyGoQQOcGEF7wv78m0XTjF4.jpg`,
                                      `../../assets/images/0kjEAtCjXtSMZl9P3sX1YX9PYAk.png`,
                                      `../../assets/images/Q05pUxi4VxN2Gf4zuNe3T2Sc8.jpg`,
                                      `../../assets/images/4DbQyPY3l6n3ygkeXw7aiDheB8.jpg`,
                                      `../../assets/images/c4ZLVGNwGmUfeIMKICwP4Uha84E.jpg`,
                                      `../../assets/images/TolhNTh6ZBwiJR0FeSL05yUqmbQ.png`,
                                      `../../assets/images/yYoQO5vr00LH8d5eEDYV1vuVQ.jpg`,
                                      `../../assets/images/s0SfA7sCHO6ITZRAKYsS0lWY6A4.jpg`,
                                      `../../assets/images/jBwFft3mt4QubK0CdfiV1z0j0Y.jpg`,
                                    ],
                                    layoutId: `CLt6edQ_b`,
                                    perspective: { enabled: !1, value: 1200 },
                                    style: { fit: `fill`, height: 250, radius: 3, width: 200 },
                                    visibleFor: 0.7,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                          ],
                        }),
                        l(`section`, {
                          className: `framer-18a2rce`,
                          "data-border": !0,
                          "data-framer-name": `Section - Works`,
                          id: P,
                          ref: I(P),
                          children: l(`div`, {
                            className: `framer-iw9gzd`,
                            "data-framer-cursor": `wrsxj9`,
                            "data-framer-name": `Container`,
                            children: d(`div`, {
                              className: `framer-1f42i1m`,
                              "data-framer-name": `Wrapper`,
                              children: [
                                d(`div`, {
                                  className: `framer-on4zni`,
                                  "data-framer-name": `Wrapper`,
                                  children: [
                                    l(w, {
                                      __fromCanvasComponent: !0,
                                      children: l(a, {
                                        children: l(`h2`, {
                                          className: `framer-styles-preset-tajk5m`,
                                          "data-styles-preset": `rxHmVAwkI`,
                                          dir: `auto`,
                                          children: `Selected Works`,
                                        }),
                                      }),
                                      className: `framer-a9bobk`,
                                      effect: G,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    ne() &&
                                      l(E, {
                                        links: [
                                          {
                                            href: { webPageId: `IFvtpR9s0` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `IFvtpR9s0` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          l(L, {
                                            height: 27,
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1e3 +
                                              73 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              21,
                                            children: l(R, {
                                              className: `framer-ix1nvm-container hidden-afwud0`,
                                              nodeId: `GWNZlXpb4`,
                                              scopeId: `augiA20Il`,
                                              children: l(j, {
                                                breakpoint: T,
                                                overrides: { FM3tyFU3r: { gFmsDu1G9: e[1] } },
                                                children: l(B, {
                                                  gFmsDu1G9: e[0],
                                                  height: `100%`,
                                                  id: `GWNZlXpb4`,
                                                  jxKssWe7X: `See all works`,
                                                  layoutId: `GWNZlXpb4`,
                                                  variant: K(`xNGPb2vC9`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                  ],
                                }),
                                l(`div`, {
                                  className: `framer-y1i7w9`,
                                  children: l(ue, {
                                    children: l(Vt, {
                                      query: Bt(),
                                      children: (e, t, n) =>
                                        l(p, {
                                          children: e?.map(
                                            (
                                              {
                                                c2FwDDNTL: e,
                                                Ez5VCK3ej: t,
                                                id: n,
                                                lTa0BBJJI: r,
                                                McxOXebVw: i,
                                                Y3mPbtUk_: a,
                                                zWbd1IZi3: o,
                                              },
                                              s
                                            ) => (
                                              (o ??= ``),
                                              (r ??= ``),
                                              (a ??= ``),
                                              l(
                                                b,
                                                {
                                                  id: `hJOw1cxNG-${n}`,
                                                  children: l(ve.Provider, {
                                                    value: { Y3mPbtUk_: a },
                                                    children: l(E, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { Y3mPbtUk_: a },
                                                            webPageId: `VgfNK2SV3`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { Y3mPbtUk_: a },
                                                            webPageId: `VgfNK2SV3`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { Y3mPbtUk_: a },
                                                            webPageId: `VgfNK2SV3`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (n) =>
                                                        l(j, {
                                                          breakpoint: T,
                                                          overrides: {
                                                            Jj3Cf3FJp: {
                                                              width: `max(min(${m?.width || `100vw`}, 1920px) - 40px, 50px)`,
                                                            },
                                                          },
                                                          children: l(L, {
                                                            height: 532,
                                                            width: `max((min(${m?.width || `100vw`}, 1920px) - 100px) / 2, 50px)`,
                                                            y:
                                                              (m?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              1e3 +
                                                              73 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              68 +
                                                              0 +
                                                              0,
                                                            children: l(Et, {
                                                              __framer__animate: { transition: J },
                                                              __framer__animateOnce: !0,
                                                              __framer__enter: q,
                                                              __framer__styleAppearEffectEnabled:
                                                                !0,
                                                              __framer__threshold: 0.5,
                                                              __perspectiveFX: !1,
                                                              __targetOpacity: 1,
                                                              className: `framer-14lh8ud-container`,
                                                              "data-framer-cursor": `wrsxj9`,
                                                              nodeId: `TmSS3dRp4`,
                                                              rendersWithMotion: !0,
                                                              scopeId: `augiA20Il`,
                                                              children: l(j, {
                                                                breakpoint: T,
                                                                overrides: {
                                                                  FM3tyFU3r: {
                                                                    L6R7y2TaL: n[1],
                                                                    variant: K(`EzdL6j049`),
                                                                  },
                                                                  Jj3Cf3FJp: {
                                                                    L6R7y2TaL: n[2],
                                                                    variant: K(`EzdL6j049`),
                                                                  },
                                                                },
                                                                children: l(He, {
                                                                  dGaHSwr8K: Y(i),
                                                                  dwJRQb_7B: !0,
                                                                  height: `100%`,
                                                                  id: `TmSS3dRp4`,
                                                                  L6R7y2TaL: n[0],
                                                                  layoutId: `TmSS3dRp4`,
                                                                  o4DUUefPB: o,
                                                                  ORGbJbZ9r: e,
                                                                  quCsUw_5F: zt(e),
                                                                  S2S3oVbI8: r,
                                                                  style: { width: `100%` },
                                                                  variant: K(`A31E1w9iO`),
                                                                  width: `100%`,
                                                                  X9U_zUNVJ: Y(t),
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
                                ie() &&
                                  l(E, {
                                    links: [
                                      {
                                        href: { webPageId: `IFvtpR9s0` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `IFvtpR9s0` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      l(j, {
                                        breakpoint: T,
                                        overrides: {
                                          Jj3Cf3FJp: {
                                            height: 27,
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1e3 +
                                              73 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              680,
                                          },
                                        },
                                        children: l(L, {
                                          children: l(R, {
                                            className: `framer-bjawjp-container hidden-72rtr7 hidden-1x8zgo0`,
                                            nodeId: `hlI_RcuW9`,
                                            scopeId: `augiA20Il`,
                                            children: l(j, {
                                              breakpoint: T,
                                              overrides: { Jj3Cf3FJp: { gFmsDu1G9: e[1] } },
                                              children: l(B, {
                                                gFmsDu1G9: e[0],
                                                height: `100%`,
                                                id: `hlI_RcuW9`,
                                                jxKssWe7X: `See all works`,
                                                layoutId: `hlI_RcuW9`,
                                                variant: K(`xNGPb2vC9`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                              ],
                            }),
                          }),
                        }),
                        l(`section`, {
                          className: `framer-x8hrcy`,
                          "data-framer-name": `Section - Services`,
                          id: se,
                          ref: ce,
                          children: l(`div`, {
                            className: `framer-oj0a5r`,
                            "data-framer-cursor": `wrsxj9`,
                            "data-framer-name": `Container`,
                            children: d(`div`, {
                              className: `framer-1a0bb4g`,
                              "data-framer-name": `Wrapper`,
                              children: [
                                l(w, {
                                  __fromCanvasComponent: !0,
                                  children: l(a, {
                                    children: l(`h2`, {
                                      className: `framer-styles-preset-tajk5m`,
                                      "data-styles-preset": `rxHmVAwkI`,
                                      dir: `auto`,
                                      children: `Services`,
                                    }),
                                  }),
                                  className: `framer-q2zb23`,
                                  effect: G,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(`div`, {
                                  className: `framer-15hvayk`,
                                  children: l(ue, {
                                    children: l(Vt, {
                                      query: Ht(),
                                      children: (e, t, n) =>
                                        l(p, {
                                          children: e?.map(
                                            (
                                              {
                                                dRTX5fiE3: e,
                                                Ew0DD0oLS: t,
                                                fvyoDlct9: n,
                                                id: r,
                                                U7xKnjgKL: i,
                                              },
                                              a
                                            ) => (
                                              (n ??= ``),
                                              (i ??= ``),
                                              (t ??= ``),
                                              l(
                                                b,
                                                {
                                                  id: `gSoRO2MbO-${r}`,
                                                  children: l(ve.Provider, {
                                                    value: { Ew0DD0oLS: t },
                                                    children: l(j, {
                                                      breakpoint: T,
                                                      overrides: {
                                                        FM3tyFU3r: {
                                                          width: `max((min(${m?.width || `100vw`}, 1920px) - 100px) / 2, 50px)`,
                                                        },
                                                        Jj3Cf3FJp: {
                                                          width: `max(min(${m?.width || `100vw`}, 1920px) - 40px, 50px)`,
                                                          y:
                                                            (m?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            1853 +
                                                            80 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            68 +
                                                            0 +
                                                            0,
                                                        },
                                                      },
                                                      children: l(L, {
                                                        height: 1350,
                                                        width: `max((min(${m?.width || `100vw`}, 1920px) - 120px) / 3, 50px)`,
                                                        y:
                                                          (m?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1806 +
                                                          80 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          68 +
                                                          0 +
                                                          0,
                                                        children: l(Et, {
                                                          __framer__animate: { transition: J },
                                                          __framer__animateOnce: !0,
                                                          __framer__enter: q,
                                                          __framer__styleAppearEffectEnabled: !0,
                                                          __framer__threshold: 0.5,
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          className: `framer-13fgxkm-container`,
                                                          nodeId: `mEkN3oBh8`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `augiA20Il`,
                                                          children: l(j, {
                                                            breakpoint: T,
                                                            overrides: {
                                                              FM3tyFU3r: {
                                                                variant: K(`blkqSGih6`),
                                                              },
                                                              Jj3Cf3FJp: {
                                                                variant: K(`blkqSGih6`),
                                                              },
                                                            },
                                                            children: l(U, {
                                                              height: `100%`,
                                                              id: `mEkN3oBh8`,
                                                              layoutId: `mEkN3oBh8`,
                                                              style: {
                                                                height: `100%`,
                                                                width: `100%`,
                                                              },
                                                              uDBHG1ZOj: i,
                                                              variant: K(`hB3EWmawb`),
                                                              width: `100%`,
                                                              XrYPsN4sI: n,
                                                              ywH7Qr9ap: Y(e),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                },
                                                r
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
                        l(`section`, {
                          className: `framer-16moik4`,
                          "data-framer-name": `Section - About`,
                          id: pe,
                          ref: z,
                          children: l(`div`, {
                            className: `framer-1pvix0b`,
                            "data-framer-name": `Container`,
                            children: d(`div`, {
                              className: `framer-1hfswph`,
                              "data-framer-name": `Wrapper`,
                              children: [
                                d(`div`, {
                                  className: `framer-pflccx`,
                                  "data-framer-name": `Wrapper`,
                                  children: [
                                    l(w, {
                                      __fromCanvasComponent: !0,
                                      children: l(a, {
                                        children: l(`h2`, {
                                          className: `framer-styles-preset-tajk5m`,
                                          "data-styles-preset": `rxHmVAwkI`,
                                          dir: `auto`,
                                          children: `About me`,
                                        }),
                                      }),
                                      className: `framer-9hh60f`,
                                      effect: G,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    d(`div`, {
                                      className: `framer-1cvej1c`,
                                      "data-framer-name": `Text`,
                                      children: [
                                        l(w, {
                                          __fromCanvasComponent: !0,
                                          children: l(a, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-15hwgrk`,
                                              "data-styles-preset": `rbICbRVFi`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `What I do`,
                                            }),
                                          }),
                                          className: `framer-1xedilw`,
                                          effect: Z,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(w, {
                                          __fromCanvasComponent: !0,
                                          children: l(a, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-no5nr2`,
                                              "data-styles-preset": `QtLJn_5pp`,
                                              dir: `auto`,
                                              children: `I’m a multidisciplinary designer combining proficiency in 3D modeling and branding with a strong approach in storytelling and visual communication.`,
                                            }),
                                          }),
                                          className: `framer-x495ga`,
                                          effect: Q,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    d(`div`, {
                                      className: `framer-wa5l6e`,
                                      "data-framer-name": `Text`,
                                      children: [
                                        l(w, {
                                          __fromCanvasComponent: !0,
                                          children: l(a, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-15hwgrk`,
                                              "data-styles-preset": `rbICbRVFi`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `My background`,
                                            }),
                                          }),
                                          className: `framer-14vm5gu`,
                                          effect: Z,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(w, {
                                          __fromCanvasComponent: !0,
                                          children: l(a, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-no5nr2`,
                                              "data-styles-preset": `QtLJn_5pp`,
                                              dir: `auto`,
                                              children: `Graduated from University of Alberta, now as a designer based in Edmonton, I’ve been in professional design industry for 3+ years, working with startups, university, local restaurants, student groups.`,
                                            }),
                                          }),
                                          className: `framer-6nf7a7`,
                                          effect: Q,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    d(`div`, {
                                      className: `framer-1rke7po`,
                                      "data-framer-name": `Text`,
                                      children: [
                                        l(w, {
                                          __fromCanvasComponent: !0,
                                          children: l(a, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-15hwgrk`,
                                              "data-styles-preset": `rbICbRVFi`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `My approach`,
                                            }),
                                          }),
                                          className: `framer-q4hr06`,
                                          effect: Z,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(w, {
                                          __fromCanvasComponent: !0,
                                          children: l(a, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-no5nr2`,
                                              "data-styles-preset": `QtLJn_5pp`,
                                              dir: `auto`,
                                              children: `The less we see design through the lens of ownership, extraction, or financial worth, the more capable we become a designer that do good. `,
                                            }),
                                          }),
                                          className: `framer-1k2wsz8`,
                                          effect: Q,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    d(`div`, {
                                      className: `framer-1llfioz`,
                                      "data-framer-name": `Text`,
                                      children: [
                                        l(w, {
                                          __fromCanvasComponent: !0,
                                          children: l(a, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-15hwgrk`,
                                              "data-styles-preset": `rbICbRVFi`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `Career`,
                                            }),
                                          }),
                                          className: `framer-1w97e3y`,
                                          effect: Z,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        d(`div`, {
                                          className: `framer-pzkj8x`,
                                          "data-framer-name": `Wrapper`,
                                          children: [
                                            l(w, {
                                              __fromCanvasComponent: !0,
                                              children: l(a, {
                                                children: l(`p`, {
                                                  className: `framer-styles-preset-no5nr2`,
                                                  "data-styles-preset": `QtLJn_5pp`,
                                                  dir: `auto`,
                                                  children: `(2024 - 2025) iGEM Media Team Lead`,
                                                }),
                                              }),
                                              className: `framer-1reqv6m`,
                                              effect: Q,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            l(w, {
                                              __fromCanvasComponent: !0,
                                              children: l(a, {
                                                children: l(`p`, {
                                                  className: `framer-styles-preset-no5nr2`,
                                                  "data-styles-preset": `QtLJn_5pp`,
                                                  dir: `auto`,
                                                  children: `(2024 - 2025) Marketing Specialist at University of Alberta`,
                                                }),
                                              }),
                                              className: `framer-18mg5jx`,
                                              effect: Q,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            l(w, {
                                              __fromCanvasComponent: !0,
                                              children: l(a, {
                                                children: l(`p`, {
                                                  className: `framer-styles-preset-no5nr2`,
                                                  "data-styles-preset": `QtLJn_5pp`,
                                                  dir: `auto`,
                                                  children: `(2025 – 2026) Photographer at The Student Design Association`,
                                                }),
                                              }),
                                              className: `framer-clj3u9`,
                                              effect: Q,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            l(w, {
                                              __fromCanvasComponent: !0,
                                              children: l(a, {
                                                children: l(`p`, {
                                                  className: `framer-styles-preset-no5nr2`,
                                                  "data-styles-preset": `QtLJn_5pp`,
                                                  dir: `auto`,
                                                  children: `(2024 – now) Creative Specialist at OMAM Collected`,
                                                }),
                                              }),
                                              className: `framer-vw8m9n`,
                                              effect: Q,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l(Ot, {
                                  __framer__animate: { transition: J },
                                  __framer__animateOnce: !0,
                                  __framer__enter: q,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1k88xxa`,
                                  "data-framer-name": `Profile Picture`,
                                  children: l(j, {
                                    breakpoint: T,
                                    overrides: {
                                      FM3tyFU3r: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 3260,
                                          intrinsicWidth: 2321,
                                          loading: F(
                                            (m?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              4754 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 3260,
                                          pixelWidth: 2321,
                                          sizes: `max((min(${m?.width || `100vw`}, 1920px) - 120px) / 5, 1px)`,
                                          src: `../../assets/images/ZrUeKXQ4VLu3VZ9dIhInBFRjfE.jpg?width=2321&height=3260`,
                                          srcSet: `../../assets/images/ZrUeKXQ4VLu3VZ9dIhInBFRjfE.jpg 729w,../../assets/images/ZrUeKXQ4VLu3VZ9dIhInBFRjfE.jpg?scale-down-to=2048&width=2321&height=3260 1458w,../../assets/images/ZrUeKXQ4VLu3VZ9dIhInBFRjfE.jpg?width=2321&height=3260 2321w`,
                                        },
                                      },
                                      Jj3Cf3FJp: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 3260,
                                          intrinsicWidth: 2321,
                                          loading: F(
                                            (m?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              6171 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              1338 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 3260,
                                          pixelWidth: 2321,
                                          sizes: `350px`,
                                          src: `../../assets/images/ZrUeKXQ4VLu3VZ9dIhInBFRjfE.jpg?width=2321&height=3260`,
                                          srcSet: `../../assets/images/ZrUeKXQ4VLu3VZ9dIhInBFRjfE.jpg 729w,../../assets/images/ZrUeKXQ4VLu3VZ9dIhInBFRjfE.jpg?scale-down-to=2048&width=2321&height=3260 1458w,../../assets/images/ZrUeKXQ4VLu3VZ9dIhInBFRjfE.jpg?width=2321&height=3260 2321w`,
                                        },
                                      },
                                    },
                                    children: l(de, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3260,
                                        intrinsicWidth: 2321,
                                        loading: F(
                                          (m?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            3404 +
                                            80 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 3260,
                                        pixelWidth: 2321,
                                        sizes: `max((min(${m?.width || `100vw`}, 1920px) - 120px) / 5, 1px)`,
                                        src: `../../assets/images/ZrUeKXQ4VLu3VZ9dIhInBFRjfE.jpg?width=2321&height=3260`,
                                        srcSet: `../../assets/images/ZrUeKXQ4VLu3VZ9dIhInBFRjfE.jpg 729w,../../assets/images/ZrUeKXQ4VLu3VZ9dIhInBFRjfE.jpg?scale-down-to=2048&width=2321&height=3260 1458w,../../assets/images/ZrUeKXQ4VLu3VZ9dIhInBFRjfE.jpg?width=2321&height=3260 2321w`,
                                      },
                                      className: `framer-otq7qa`,
                                      fitImageDimension: `height`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    l(j, {
                      breakpoint: T,
                      overrides: {
                        FM3tyFU3r: { y: (m?.y || 0) + 0 + 5824 },
                        Jj3Cf3FJp: { y: (m?.y || 0) + 0 + 8019 },
                      },
                      children: l(L, {
                        height: 0,
                        y: (m?.y || 0) + 0 + 4474,
                        children: l(R, {
                          className: `framer-xy2h2y-container`,
                          layout: te,
                          nodeId: `udMnrm1xC`,
                          scopeId: `augiA20Il`,
                          children: l(Te, {
                            height: `100%`,
                            id: `udMnrm1xC`,
                            layoutId: `udMnrm1xC`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-ovl8m.framer-lux5qc, .framer-ovl8m .framer-lux5qc { display: block; }`,
        `.framer-ovl8m.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-0df385c8-c6c4-40bb-a008-e6f27b304ae0, #0f0f0f); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-ovl8m .framer-1krhkqh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ovl8m .framer-jquibe { align-content: center; align-items: center; background-color: var(--token-0df385c8-c6c4-40bb-a008-e6f27b304ae0, #0f0f0f); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-ovl8m .framer-1r6wirc { align-content: center; align-items: center; background-color: var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, #4a2315); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; max-width: 1920px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-ovl8m .framer-1liz76j { flex: none; height: 243px; position: relative; width: 351px; }`,
        `.framer-ovl8m .framer-1giww2e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; pointer-events: none; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ovl8m .framer-1g09fev { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ovl8m .framer-16ve2or-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 2; }`,
        `.framer-ovl8m .framer-18a2rce { --border-bottom-width: 0px; --border-color: var(--token-847bdcde-68af-4acc-bb45-37d83fa37c74, #1a1a1a); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, #4a2315); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 73px 0px 73px 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-ovl8m .framer-iw9gzd, .framer-ovl8m .framer-oj0a5r, .framer-ovl8m .framer-1pvix0b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1920px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-ovl8m .framer-1f42i1m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ovl8m .framer-on4zni { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ovl8m .framer-a9bobk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ovl8m .framer-ix1nvm-container, .framer-ovl8m .framer-bjawjp-container, .framer-ovl8m .framer-xy2h2y-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-ovl8m .framer-y1i7w9 { display: grid; flex: none; gap: 60px 20px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ovl8m .framer-14lh8ud-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-ovl8m .framer-x8hrcy, .framer-ovl8m .framer-16moik4 { align-content: center; align-items: center; background-color: var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, #4a2315); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 1920px; overflow: visible; padding: 80px 0px 80px 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-ovl8m .framer-1a0bb4g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ovl8m .framer-q2zb23, .framer-ovl8m .framer-9hh60f, .framer-ovl8m .framer-1reqv6m, .framer-ovl8m .framer-18mg5jx, .framer-ovl8m .framer-clj3u9, .framer-ovl8m .framer-vw8m9n { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ovl8m .framer-15hvayk { display: grid; flex: none; gap: 20px 20px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ovl8m .framer-13fgxkm-container { align-self: start; aspect-ratio: 0.8 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 450px); justify-self: start; position: relative; width: 100%; }`,
        `.framer-ovl8m .framer-1hfswph { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ovl8m .framer-pflccx { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 680px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ovl8m .framer-1cvej1c, .framer-ovl8m .framer-wa5l6e, .framer-ovl8m .framer-1rke7po, .framer-ovl8m .framer-1llfioz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ovl8m .framer-1xedilw, .framer-ovl8m .framer-14vm5gu, .framer-ovl8m .framer-q4hr06, .framer-ovl8m .framer-1w97e3y { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 0.5 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ovl8m .framer-x495ga, .framer-ovl8m .framer-6nf7a7, .framer-ovl8m .framer-1k2wsz8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-ovl8m .framer-pzkj8x { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ovl8m .framer-1k88xxa { align-content: flex-end; align-items: flex-end; display: flex; flex: 0.25 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ovl8m .framer-otq7qa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        ...we,
        ...Ae,
        ...Pe,
        `.framer-ovl8m[data-border="true"]::after, .framer-ovl8m [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-ovl8m.framer-72rtr7 { width: 810px; } .framer-ovl8m .framer-15hvayk { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-ovl8m .framer-13fgxkm-container { height: var(--framer-aspect-ratio-supported, 444px); }}`,
        `@media (max-width: 809.98px) { .framer-ovl8m.framer-72rtr7 { width: 390px; } .framer-ovl8m .framer-1r6wirc, .framer-ovl8m .framer-iw9gzd, .framer-ovl8m .framer-oj0a5r, .framer-ovl8m .framer-1pvix0b { padding: 0px 20px 0px 20px; } .framer-ovl8m .framer-on4zni { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-ovl8m .framer-a9bobk, .framer-ovl8m .framer-pflccx, .framer-ovl8m .framer-x495ga, .framer-ovl8m .framer-6nf7a7, .framer-ovl8m .framer-1k2wsz8, .framer-ovl8m .framer-pzkj8x, .framer-ovl8m .framer-1k88xxa { flex: none; width: 100%; } .framer-ovl8m .framer-y1i7w9, .framer-ovl8m .framer-15hvayk { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-ovl8m .framer-13fgxkm-container { height: var(--framer-aspect-ratio-supported, 250px); } .framer-ovl8m .framer-1hfswph { flex-direction: column; gap: 40px; justify-content: flex-start; width: 350px; } .framer-ovl8m .framer-1cvej1c, .framer-ovl8m .framer-wa5l6e, .framer-ovl8m .framer-1rke7po, .framer-ovl8m .framer-1llfioz { flex-direction: column; } .framer-ovl8m .framer-1xedilw, .framer-ovl8m .framer-14vm5gu, .framer-ovl8m .framer-q4hr06, .framer-ovl8m .framer-1w97e3y { flex: none; width: 50%; }}`,
      ],
      `framer-ovl8m`
    )),
    (Jt = $),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 4061.5, width: 1200 }),
    ce(
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
        ...St,
        ...wt,
        ...Tt,
        ...Dt,
        ...kt,
        ...At,
        ...N(Ee),
        ...N(je),
        ...N(Fe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = pe.get(Bt(), n),
          i = pe.get(Ht(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          O(B, {}, t),
          O(Te, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => O(He, {}, t)));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => O(U, {}, t)));
          })(),
        ]);
      },
    }),
    (Yt = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `4061.5`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `{"lwGJUZXPf":{"pattern":":lwGJUZXPf","name":"works"},"zwaV8XJhc":{"pattern":":zwaV8XJhc","name":"services"},"WemT6d0vc":{"pattern":":WemT6d0vc","name":"about"}}`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1200`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"FM3tyFU3r":{"layout":["fixed","auto"]},"Jj3Cf3FJp":{"layout":["fixed","auto"]}}}`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Yt as __FramerMetadata__, Jt as default, Mt as queryParamNames };
//# sourceMappingURL=l6d27d0Yzo3aZK6AY59tvnTmXonEizICRiCjNGRR0iA.n1sO3KQo.mjs.map
