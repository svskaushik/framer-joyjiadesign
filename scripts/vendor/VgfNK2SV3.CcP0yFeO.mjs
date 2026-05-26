import { t as e } from "./rolldown-runtime.CawJvvTp.mjs";
import { C as t, K as n, X as r } from "./framer.7e87VJV8.mjs";
import { n as i, t as a } from "./shared-lib.DsSu9Ft0.mjs";
import { i as o, r as s } from "./nOXL0BeXe.C_sRkJqx.mjs";
function c(e, t) {
  let n = e?.zWbd1IZi3;
  return {
    breakpoints: [
      { hash: `lfyh07`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1r9o0gx`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `5ytgp5`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: { De5IIlWjK: `next`, Qn3rsdpUH: `hero`, SPQGxZW6t: `details` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-X5Fl4`,
    title: `${n === void 0 ? `{{zWbd1IZi3}}` : d(n)} - JORGE`,
    viewport: `width=device-width`,
  };
}
async function l(e, r) {
  let i = new t(),
    a = {
      from: { alias: `VgfNK2SV3`, data: o, type: `Collection` },
      select: [{ collection: `VgfNK2SV3`, name: `zWbd1IZi3`, type: `Identifier` }],
      where: n(e, `VgfNK2SV3`),
    },
    s = await i.query(a, r);
  if (s.length === 0) throw Error(`No data matches pathVariables`);
  let l = s[0];
  return c(l, r);
}
async function u(e, n) {
  let r = new t(),
    i = {
      from: { alias: `VgfNK2SV3`, data: o, type: `Collection` },
      select: [{ collection: `VgfNK2SV3`, name: `zWbd1IZi3`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `VgfNK2SV3`, name: t, type: `Identifier` });
  return (await r.query(i, n)).map((t) => ({
    metadata: c(t, n),
    pathVariables: Object.fromEntries(e.map((e) => [e, t[e]])),
  }));
}
var d,
  f,
  p,
  m = e(() => {
    (r(),
      s(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = 1),
      (p = {
        exports: {
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { c as a, m as i, u as n, f as o, l as r, p as t };
//# sourceMappingURL=VgfNK2SV3.CcP0yFeO.mjs.map
