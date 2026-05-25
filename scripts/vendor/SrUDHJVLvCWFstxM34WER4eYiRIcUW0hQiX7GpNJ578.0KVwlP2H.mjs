import { t as e } from "./rolldown-runtime.TjgygFMs.mjs";
import {
  A as t,
  D as n,
  N as r,
  _ as i,
  c as a,
  k as o,
  l as s,
  o as c,
  w as l,
  y as ee,
} from "./react.DY0xf786.mjs";
import { S as u, a as d, r as f, t as p } from "./motion.BEaCLYSy.mjs";
import {
  D as m,
  Et as h,
  F as te,
  N as g,
  St as _,
  U as v,
  V as y,
  X as b,
  _t as ne,
  a as x,
  d as S,
  ft as re,
  ht as C,
  k as w,
  lt as ie,
  o as ae,
  pt as oe,
  vt as T,
} from "./framer.DMuD-Poq.mjs";
import { a as E, c as D, i as O, o as k, r as A, s as j } from "./shared-lib.Dqp23CCf.mjs";
import { i as M, n as N, r as P, t as se } from "./QtLJn_5pp.CiIbR03O.mjs";
import { i as F, n as ce, r as le, t as ue } from "./VwJ5pWYb7.DNwZne6r.mjs";
import { n as de, r as I } from "./d_JPOyUje.CAXfV2GK.mjs";
var L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    b(),
    p(),
    l(),
    O(),
    M(),
    D(),
    F(),
    de(),
    (L = y(A)),
    (R = {
      diy2TR5li: `(min-width: 1200px)`,
      UIWcm9xek: `(min-width: 810px) and (max-width: 1199.98px)`,
      W7PLCpDch: `(max-width: 809.98px)`,
    }),
    (z = []),
    (B = `framer-pBYmC`),
    (V = {
      diy2TR5li: `framer-v-1rfbscx`,
      UIWcm9xek: `framer-v-w5kvv1`,
      W7PLCpDch: `framer-v-w169go`,
    }),
    (H = (e, t, n) => (e && t ? `position` : n)),
    (U = {
      filter: `blur(10px)`,
      opacity: 0.001,
      rotate: 0,
      scale: 0.95,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (W = {
      effect: U,
      startDelay: 0.6,
      tokenization: `word`,
      transition: { bounce: 0, delay: 0.1, duration: 1.8, type: `spring` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (G = { bounce: 0, delay: 0.1, duration: 1.6, type: `spring` }),
    (K = {
      effect: U,
      repeat: !1,
      startDelay: 0.9,
      tokenization: `line`,
      transition: G,
      trigger: `onMount`,
      type: `appear`,
    }),
    (q = {
      effect: U,
      repeat: !1,
      startDelay: 1,
      tokenization: `line`,
      transition: G,
      trigger: `onMount`,
      type: `appear`,
    }),
    (J = { Desktop: `diy2TR5li`, Phone: `W7PLCpDch`, Tablet: `UIWcm9xek` }),
    (Y = ({ value: e }) =>
      C()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (X = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: J[r.variant] ?? r.variant ?? `diy2TR5li`,
    })),
    (Z = h(
      i(function (e, i) {
        let c = n(null),
          l = i ?? c,
          p = ee(),
          { activeLocale: h, setLocale: te } = ne(),
          v = ie(),
          { style: y, className: b, layoutId: C, variant: w, ...D } = X(e);
        T(t(() => I({}, h), [h]));
        let [O, k] = oe(w, R, !1),
          j = g(B, ue, E, se),
          M = o(S)?.isLayoutTemplate,
          N = H(M, !!o(d)?.transition?.layout),
          P = _(`E6oBQ0xfY`),
          F = n(null);
        return (
          re({}),
          a(S.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: J,
              primaryVariantId: `diy2TR5li`,
              variantClassNames: V,
            },
            children: s(f, {
              id: C ?? p,
              children: [
                a(Y, {
                  value: `html body { background: var(--token-0df385c8-c6c4-40bb-a008-e6f27b304ae0, rgb(15, 15, 15)); }`,
                }),
                s(u.div, {
                  ...D,
                  className: g(j, `framer-1rfbscx`, b),
                  ref: l,
                  style: { ...y },
                  children: [
                    a(u.main, {
                      className: `framer-1ggc07t`,
                      "data-framer-name": `Main`,
                      layout: N,
                      children: a(`section`, {
                        className: `framer-1jm1kho`,
                        "data-border": !0,
                        "data-framer-name": `Section - Contact`,
                        id: P,
                        ref: F,
                        children: a(`div`, {
                          className: `framer-1tpmofl`,
                          "data-framer-name": `Container`,
                          children: s(`div`, {
                            className: `framer-8nsifz`,
                            "data-framer-name": `Wrapper`,
                            children: [
                              a(m, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`h1`, {
                                    className: `framer-styles-preset-1aa1zhl`,
                                    "data-styles-preset": `VwJ5pWYb7`,
                                    dir: `auto`,
                                    children: `Course reflection`,
                                  }),
                                }),
                                className: `framer-hjzwg5`,
                                effect: W,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(`div`, {
                                className: `framer-zm9mj0`,
                                "data-framer-name": `Wrapper`,
                                children: [
                                  a(`div`, {
                                    className: `framer-o0ksz3`,
                                    "data-framer-name": `Wrapper`,
                                    children: s(`div`, {
                                      className: `framer-1o1tajy`,
                                      "data-framer-name": `Project 1`,
                                      children: [
                                        a(m, {
                                          __fromCanvasComponent: !0,
                                          children: a(r, {
                                            children: a(`p`, {
                                              className: `framer-styles-preset-15hwgrk`,
                                              "data-styles-preset": `rbICbRVFi`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: `Project 1`,
                                            }),
                                          }),
                                          className: `framer-1gifkmw`,
                                          effect: K,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(m, {
                                          __fromCanvasComponent: !0,
                                          children: s(r, {
                                            children: [
                                              a(`p`, {
                                                className: `framer-styles-preset-no5nr2`,
                                                "data-styles-preset": `QtLJn_5pp`,
                                                dir: `auto`,
                                                children: `If I could do this project again, I would challenge myself to design a logo that is more abstract and less wordmark based, even though the current wordmark somehow conveyed the blockiness of the wood. I felt I was too constrained by the typeface. I landed on that typeface too early that I've given up on exploring other options. Just in general, I think I could push myself a bit more. But at the same time, given the time frame we have, going in with the safer option offered me more time to make sure the logo guideline looks professional, as well as exploring different medium (ie. business card made of plywood). `,
                                              }),
                                              a(`p`, {
                                                className: `framer-styles-preset-no5nr2`,
                                                "data-styles-preset": `QtLJn_5pp`,
                                                dir: `auto`,
                                                children: `Being able to walk through what a branding process is like was a valuable skill to gain from this course. Though, I wish we could have had a side project alongside this one that focused on developing our own business cards instead, as designing for a conference or an organization versus an individual can be pretty different. Or having a class period dedicated to user-test and give each other critiques on each other's business card would be quite helpful and fun. I would also be interested in seeing what a pitch deck and a branding package would look like if we were pitching this to a real client.`,
                                              }),
                                            ],
                                          }),
                                          className: `framer-82xdcj`,
                                          effect: q,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  s(`div`, {
                                    className: `framer-nerpig`,
                                    "data-framer-name": `Project 2`,
                                    children: [
                                      a(m, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-15hwgrk`,
                                            "data-styles-preset": `rbICbRVFi`,
                                            dir: `auto`,
                                            style: { "--framer-text-color": `rgb(255, 255, 255)` },
                                            children: `Project 2`,
                                          }),
                                        }),
                                        className: `framer-xk2hih`,
                                        effect: K,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(m, {
                                        __fromCanvasComponent: !0,
                                        children: s(r, {
                                          children: [
                                            s(`p`, {
                                              className: `framer-styles-preset-no5nr2`,
                                              "data-styles-preset": `QtLJn_5pp`,
                                              dir: `auto`,
                                              children: [
                                                `For the whole project, my approach was to "think outside the box", as my target audience of the conference are also the creatives that constantly trying to break the rules and challenge themselves to create something different. That means putting `,
                                                a(`br`, {}),
                                                `a lot of thoughts in designing the details and the interactions, such as the user journey of opening a poster. I really tried to design from the user perspective. "What kinds of stickers would I like to put on my laptop as a woodworker? What kinds of posters and banners would I be happy to receive or be excited to see it on the street?" These questions helped me a lot with carrying the fun and the confusion of the woodworking experience `,
                                                a(`br`, {}),
                                                `to the copywriting. `,
                                              ],
                                            }),
                                            a(`p`, {
                                              className: `framer-styles-preset-no5nr2`,
                                              "data-styles-preset": `QtLJn_5pp`,
                                              dir: `auto`,
                                              children: `Compared to project 1, I felt like I pushed myself more in this project in terms of the attention to detail, the level of finishness, and the amount of fun I've had. Indeed photoshopping 10 figures for all the speakers wasn't the most exciting task to do, but its those repetitive tasks that made this conference booklet truly personal and one-of-a-kind. Instead of putting AI-generated faces and stories, researching on these talented woodworkers and designers also helped myself with knowing the stories behind each designs, and learning more about what it takes to get there, to be recognized and to be known.`,
                                            }),
                                          ],
                                        }),
                                        className: `framer-18upxd2`,
                                        effect: q,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  s(`div`, {
                                    className: `framer-1wffhqi`,
                                    "data-framer-name": `Project 3`,
                                    children: [
                                      a(m, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-15hwgrk`,
                                            "data-styles-preset": `rbICbRVFi`,
                                            dir: `auto`,
                                            style: { "--framer-text-color": `rgb(255, 255, 255)` },
                                            children: `Project 3`,
                                          }),
                                        }),
                                        className: `framer-1fre9or`,
                                        effect: K,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(m, {
                                        __fromCanvasComponent: !0,
                                        children: s(r, {
                                          children: [
                                            a(`p`, {
                                              className: `framer-styles-preset-no5nr2`,
                                              "data-styles-preset": `QtLJn_5pp`,
                                              dir: `auto`,
                                              children: `Being an artist means being creative at how you interpret yourself and how you present it in your work. I've always considered myself an individual who is good at drawing, but not quite an artist. So I asked an artist, who was my professor for Art 240 and 340, Riddhi Patel, whose thesis research was based on connecting music, dance movement and drawing. She said "line weight mimics a rhythm" and introduced me to John Cage, who compose different patterns through variety of materials and then compose music based on it. This process that John Cage goes through is basically what I consider, the reverse of project 3 to me.`,
                                            }),
                                            a(`p`, {
                                              className: `framer-styles-preset-no5nr2`,
                                              "data-styles-preset": `QtLJn_5pp`,
                                              dir: `auto`,
                                              children: `Listening, drawing, designing based on music is indeed a hard process for me but I felt more relieved after realizing that there isn't right or wrong. It's only about how I felt about the music. This sense of "controlled expressiveness" was something I've always been trying to get rid of since Riddhi's class. In art, it might not be a good thing, but in design, it is just the right amount of control that everything feels intentional. And I wanted this piece to feel designed and intentional instead of a complete art piece. We've gone too far to a point where there's nothing left, no land, no color, no light. `,
                                            }),
                                          ],
                                        }),
                                        className: `framer-nn6vd1`,
                                        effect: q,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              s(`div`, {
                                className: `framer-j9c39t`,
                                "data-framer-name": `Wrapper`,
                                children: [
                                  s(`div`, {
                                    className: `framer-f2f2xa`,
                                    "data-framer-name": `Project 1`,
                                    children: [
                                      a(m, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-15hwgrk`,
                                            "data-styles-preset": `rbICbRVFi`,
                                            dir: `auto`,
                                            style: { "--framer-text-color": `rgb(255, 255, 255)` },
                                            children: `Overall Course Reflection`,
                                          }),
                                        }),
                                        className: `framer-7c8ksc`,
                                        effect: K,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(m, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                          children: a(`p`, {
                                            className: `framer-styles-preset-no5nr2`,
                                            "data-styles-preset": `QtLJn_5pp`,
                                            dir: `auto`,
                                            children: `I can't emphasize how much I've grown with this course. From branding, which is heavily design based, to album cover, which I consider as a form of abstract art, the range of skills this course requires and the benefit I get in return is massive. Ending my university and the journey in Visual Communication Design with Des 494, I'm thankful that I was able to have these industry based projects that gave us just enough of design freedom to express ourselves before going into real world full of constraints set by clients. In this class, the constraints are set by ourselves. Therefore, we grow from it and we grow with it. `,
                                          }),
                                        }),
                                        className: `framer-1mjv06`,
                                        effect: q,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  a(`div`, {
                                    className: `framer-1tvg083`,
                                    "data-framer-name": `Project 1`,
                                    children: a(m, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: a(`p`, {
                                          className: `framer-styles-preset-15hwgrk`,
                                          "data-styles-preset": `rbICbRVFi`,
                                          dir: `auto`,
                                          style: { "--framer-text-color": `rgb(255, 255, 255)` },
                                          children: `.`,
                                        }),
                                      }),
                                      className: `framer-8u6k57`,
                                      effect: K,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  a(`div`, {
                                    className: `framer-bp1te4`,
                                    "data-framer-name": `Project 1`,
                                    children: a(m, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: a(`p`, {
                                          className: `framer-styles-preset-15hwgrk`,
                                          "data-styles-preset": `rbICbRVFi`,
                                          dir: `auto`,
                                          style: { "--framer-text-color": `rgb(255, 255, 255)` },
                                          children: `.`,
                                        }),
                                      }),
                                      className: `framer-160paq3`,
                                      effect: K,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    a(x, {
                      height: 0,
                      y: (v?.y || 0) + 0 + 1e3,
                      children: a(ae, {
                        className: `framer-1uayexx-container`,
                        layout: N,
                        nodeId: `lM2HwgyZy`,
                        scopeId: `d_JPOyUje`,
                        children: a(A, {
                          height: `100%`,
                          id: `lM2HwgyZy`,
                          layoutId: `lM2HwgyZy`,
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
        `.framer-pBYmC.framer-1056acr, .framer-pBYmC .framer-1056acr { display: block; }`,
        `.framer-pBYmC.framer-1rfbscx { align-content: center; align-items: center; background-color: var(--token-0df385c8-c6c4-40bb-a008-e6f27b304ae0, #0f0f0f); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1539px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-pBYmC .framer-1ggc07t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-pBYmC .framer-1jm1kho { --border-bottom-width: 0px; --border-color: var(--token-847bdcde-68af-4acc-bb45-37d83fa37c74, #1a1a1a); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-01af38a5-892c-4e56-83a0-3ae59f6451b9, #30180f); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; min-height: 100vh; overflow: visible; padding: 160px 0px 0px 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-pBYmC .framer-1tpmofl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1920px; overflow: visible; padding: 0px 40px 40px 40px; position: relative; width: 100%; }`,
        `.framer-pBYmC .framer-8nsifz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 658px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-pBYmC .framer-hjzwg5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 13%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-pBYmC .framer-zm9mj0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 11px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-pBYmC .framer-o0ksz3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-pBYmC .framer-1o1tajy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 90%; }`,
        `.framer-pBYmC .framer-1gifkmw, .framer-pBYmC .framer-xk2hih, .framer-pBYmC .framer-1fre9or { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-pBYmC .framer-82xdcj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-pBYmC .framer-nerpig, .framer-pBYmC .framer-1wffhqi { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-pBYmC .framer-18upxd2, .framer-pBYmC .framer-nn6vd1 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 90%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-pBYmC .framer-j9c39t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 43%; justify-content: flex-start; overflow: visible; padding: 208px 0px 208px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-pBYmC .framer-f2f2xa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: 114px; justify-content: flex-start; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 50px; width: 374px; z-index: 1; }`,
        `.framer-pBYmC .framer-7c8ksc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 16%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-pBYmC .framer-1mjv06 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 200%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-pBYmC .framer-1tvg083 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50px; transform: translateX(-50%); width: 373px; z-index: 1; }`,
        `.framer-pBYmC .framer-8u6k57, .framer-pBYmC .framer-160paq3 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-pBYmC .framer-bp1te4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 50px; width: 374px; z-index: 1; }`,
        `.framer-pBYmC .framer-1uayexx-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...ce,
        ...k,
        ...N,
        `.framer-pBYmC[data-border="true"]::after, .framer-pBYmC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-pBYmC.framer-1rfbscx { height: 1576px; width: 810px; } .framer-pBYmC .framer-zm9mj0, .framer-pBYmC .framer-j9c39t { flex-direction: column; } .framer-pBYmC .framer-o0ksz3, .framer-pBYmC .framer-nerpig, .framer-pBYmC .framer-1wffhqi { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-pBYmC.framer-1rfbscx { width: 390px; } .framer-pBYmC .framer-1tpmofl { flex-direction: column; gap: 40px; padding: 0px 20px 40px 20px; } .framer-pBYmC .framer-8nsifz, .framer-pBYmC .framer-o0ksz3, .framer-pBYmC .framer-nerpig, .framer-pBYmC .framer-1wffhqi { flex: none; width: 100%; } .framer-pBYmC .framer-zm9mj0, .framer-pBYmC .framer-j9c39t { flex-direction: column; }}`,
      ],
      `framer-pBYmC`
    )),
    (Q = Z),
    (Z.displayName = `Contact`),
    (Z.defaultProps = { height: 1413, width: 1200 }),
    w(
      Z,
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
        ...L,
        ...v(le),
        ...v(j),
        ...v(P),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Z.loader = { load: (e, t) => (t.locale, Promise.allSettled([te(A, {}, t)])) }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerd_JPOyUje`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerScrollSections: `{"E6oBQ0xfY":{"pattern":":E6oBQ0xfY","name":"contact"}}`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `1413`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"UIWcm9xek":{"layout":["fixed","fixed"]},"W7PLCpDch":{"layout":["fixed","fixed"]}}}`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1200`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, z as queryParamNames };
//# sourceMappingURL=SrUDHJVLvCWFstxM34WER4eYiRIcUW0hQiX7GpNJ578.0KVwlP2H.mjs.map
