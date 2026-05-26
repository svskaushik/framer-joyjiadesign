import { t as e } from "./rolldown-runtime.CawJvvTp.mjs";
import {
  A as t,
  C as n,
  D as r,
  F as i,
  I as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  T as p,
  _ as m,
  a as h,
  b as g,
  c as _,
  d as v,
  f as y,
  g as b,
  h as x,
  i as S,
  j as C,
  k as w,
  l as T,
  m as ee,
  o as E,
  s as D,
  u as te,
  v as O,
  w as ne,
  x as k,
  y as re,
  z as A,
} from "./react.6snvU8bB.mjs";
import {
  $ as ie,
  A as ae,
  B as oe,
  C as se,
  D as ce,
  E as le,
  F as ue,
  G as de,
  H as fe,
  I as pe,
  J as me,
  K as he,
  L as ge,
  M as _e,
  O as ve,
  P as j,
  Q as M,
  R as ye,
  S as be,
  T as N,
  U as xe,
  V as Se,
  W as Ce,
  X as P,
  Y as F,
  Z as we,
  _ as Te,
  a as Ee,
  b as De,
  c as Oe,
  d as ke,
  et as Ae,
  f as je,
  g as Me,
  h as Ne,
  i as Pe,
  j as Fe,
  k as Ie,
  l as Le,
  m as Re,
  n as ze,
  o as Be,
  p as Ve,
  q as He,
  r as Ue,
  s as We,
  tt as Ge,
  u as Ke,
  v as qe,
  w as Je,
  x as Ye,
  y as Xe,
  z as Ze,
} from "./motion.CpAcN4_Y.mjs";
function Qe(e) {
  return typeof e == `function`;
}
function $e(e) {
  return typeof e == `boolean`;
}
function I(e) {
  return typeof e == `string`;
}
function L(e) {
  return Number.isFinite(e);
}
function et(e) {
  return Array.isArray(e);
}
function R(e) {
  return typeof e == `object` && !!e && !et(e);
}
function tt(e) {
  for (let t in e) return !1;
  return !0;
}
function nt(e) {
  return e === void 0;
}
function rt(e) {
  return e === null;
}
function it(e) {
  return e == null;
}
function at(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function ot(e) {
  return R(e) && Qe(e.return);
}
function st(e) {
  return R(e) && Qe(e.then);
}
function ct(e) {
  return e instanceof Promise;
}
function lt(e) {
  return `url('${ut(e)}')`;
}
function ut(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function dt(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function ft() {
  if (!Rh) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = import(n)
      .then((t) => (Gh.set(e, t), t))
      .catch((t) => {
        throw (Gh.delete(e), console.warn(`Failed to import lazy module: ${n}`, t), t);
      });
    (r.catch(Lh), Gh.set(e, r));
  }
}
function pt(e) {
  return typeof e == `object` && !!e && !y(e) && qh in e;
}
function mt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function ht(e, t = `default`, n) {
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !Gh.has(n)) return;
      let e = Gh.get(n);
      ct(e) ? s(() => e) : (i = mt(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = mt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    l = !1,
    u = m(function (t, r) {
      if (
        (c(() => {
          l = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && Kh !== void 0 && Kh.add(n), !i)) throw s(e);
      return _(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (o(), s(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function gt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function _t(e) {
  return e === null || !(Yh in e) ? !1 : typeof e.equals == `function`;
}
function vt(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function yt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!vt(e[r], t[r])) return !1;
  return !0;
}
function bt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Et(e[r], t[r], !0)) return !1;
  return !0;
}
function xt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!vt(r, t.get(n))) return !1;
  return !0;
}
function St(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Et(r, t.get(n), !0)) return !1;
  return !0;
}
function Ct(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function wt(e, t) {
  let n = Jh(e);
  if (n.length !== Jh(t).length) return !1;
  for (let r of n)
    if (!gt(t, r) || (!(r === `_owner` && gt(e, `$$typeof`) && e.$$typeof) && !vt(e[r], t[r])))
      return !1;
  return !0;
}
function Tt(e, t) {
  let n = Jh(e);
  if (n.length !== Jh(t).length) return !1;
  for (let r of n)
    if (!gt(t, r) || (!(r === `_owner` && gt(e, `$$typeof`) && e.$$typeof) && !Et(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Et(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? bt(e, t) : yt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? St(e, t) : xt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return Ct(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? _t(e) && _t(t)
        ? e.equals(t)
        : n
          ? Tt(e, t)
          : wt(e, t)
      : !1;
}
function Dt(e, t, n = !0) {
  try {
    return Et(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Ot(e) {
  return k.useCallback((t) => e[t], [e]);
}
function kt({ api: e, children: t }) {
  return _(Xh.Provider, { value: e, children: t });
}
function At() {
  return k.useContext(Xh);
}
function jt({ routes: e, children: t }) {
  let n = Ot(e),
    r = C(() => ({ getRoute: n }), [n]);
  return _(Xh.Provider, { value: r, children: t });
}
function Mt() {
  let e = At(),
    n = t(Zh),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = r ? e.getRoute?.(r) : void 0;
  return C(() => {
    if (!(!r || !a)) return { ...a, id: r, pathVariables: i };
  }, [r, i, a]);
}
function Nt() {
  let e = Mt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Pt(e) {
  let t = Mt(),
    n = k.useRef(t);
  Dt(n.current, t) || !t || ((n.current = t), e(t));
}
function Ft(e) {
  let t = At();
  if (e) return t.getRoute?.(e);
}
function It(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Lt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Rt(e, t) {
  let n = Mt(),
    r = Ft(t) ?? n;
  return k.useMemo(() => (r ? It(r, e) : e), [e, r]);
}
function zt() {
  return Mt()?.pathVariables;
}
function z(e, ...t) {
  if (e) return;
  let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function B(e, t) {
  throw t instanceof Error
    ? t
    : t === void 0
      ? Error(e ? `Unexpected value: ${e}` : `Application entered invalid state`)
      : Error(String(t));
}
function Bt(e) {
  return Object(e) !== e;
}
function Vt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === og
  );
}
function Ht(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Ut(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Wt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Ut(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Gt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Kt(e) {
  return sg.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function qt(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  let t = +e;
  return !(t >= 2 ** 32 - 1 || t < 0);
}
function Jt(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !qt(t[n]); n--);
  return ((t.length = n + 1), t);
}
function Yt(e) {
  let t = new DataView(e),
    n = ``;
  for (let r = 0; r < e.byteLength; r++) n += String.fromCharCode(t.getUint8(r));
  return Qt(n);
}
function Xt(e) {
  let t = Zt(e),
    n = new ArrayBuffer(t.length),
    r = new DataView(n);
  for (let e = 0; e < n.byteLength; e++) r.setUint8(e, t.charCodeAt(e));
  return n;
}
function Zt(e) {
  e.length % 4 == 0 && (e = e.replace(/==?$/, ``));
  let t = ``,
    n = 0,
    r = 0;
  for (let i = 0; i < e.length; i++)
    ((n <<= 6),
      (n |= cg.indexOf(e[i])),
      (r += 6),
      r === 24 &&
        ((t += String.fromCharCode((n & 16711680) >> 16)),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255)),
        (n = r = 0)));
  return (
    r === 12
      ? ((n >>= 4), (t += String.fromCharCode(n)))
      : r === 18 &&
        ((n >>= 2),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255))),
    t
  );
}
function Qt(e) {
  let t = ``;
  for (let n = 0; n < e.length; n += 3) {
    let r = [void 0, void 0, void 0, void 0];
    ((r[0] = e.charCodeAt(n) >> 2),
      (r[1] = (e.charCodeAt(n) & 3) << 4),
      e.length > n + 1 &&
        ((r[1] |= e.charCodeAt(n + 1) >> 4), (r[2] = (e.charCodeAt(n + 1) & 15) << 2)),
      e.length > n + 2 && ((r[2] |= e.charCodeAt(n + 2) >> 6), (r[3] = e.charCodeAt(n + 2) & 63)));
    for (let e = 0; e < r.length; e++) r[e] === void 0 ? (t += `=`) : (t += cg[r[e]]);
  }
  return t;
}
function $t(e, t) {
  return en(JSON.parse(e), t);
}
function en(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === lg) return;
    if (e === dg) return NaN;
    if (e === fg) return 1 / 0;
    if (e === pg) return -1 / 0;
    if (e === mg) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`:
            let c = Object(s[1]);
            if (Object.hasOwn(c, `__proto__`))
              throw Error("Cannot parse an object with a `__proto__` property");
            r[e] = c;
            break;
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let l = Object.create(null);
            r[e] = l;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              l[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = new t(a(s[1]));
            r[e] = s[2] === void 0 ? i : i.subarray(s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            r[e] = Xt(t);
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`:
            r[e] = new URL(s[1]);
            break;
          case `URLSearchParams`:
            r[e] = new URLSearchParams(s[1]);
            break;
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === hg) {
        let t = s[1];
        if (!Number.isInteger(t) || t < 0) throw Error(`Invalid input`);
        let n = Array(t);
        r[e] = n;
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!Number.isInteger(r) || r < 0 || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== ug && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function tn(e, t) {
  let n = [],
    r = new Map(),
    i = [];
  if (t) for (let e of Object.getOwnPropertyNames(t)) i.push({ key: e, fn: t[e] });
  let a = [],
    o = 0;
  function s(t) {
    if (t === void 0) return lg;
    if (Number.isNaN(t)) return dg;
    if (t === 1 / 0) return fg;
    if (t === -1 / 0) return pg;
    if (t === 0 && 1 / t < 0) return mg;
    if (r.has(t)) return r.get(t);
    let c = o++;
    r.set(t, c);
    for (let { key: e, fn: r } of i) {
      let i = r(t);
      if (i) return ((n[c] = `["${e}",${s(i)}]`), c);
    }
    if (typeof t == `function`) throw new ag(`Cannot stringify a function`, a, t, e);
    let l = ``;
    if (Bt(t)) l = nn(t);
    else {
      let n = Ht(t);
      switch (n) {
        case `Number`:
        case `String`:
        case `Boolean`:
          l = `["Object",${nn(t)}]`;
          break;
        case `BigInt`:
          l = `["BigInt",${t}]`;
          break;
        case `Date`:
          l = `["Date","${isNaN(t.getDate()) ? `` : t.toISOString()}"]`;
          break;
        case `URL`:
          l = `["URL",${Wt(t.toString())}]`;
          break;
        case `URLSearchParams`:
          l = `["URLSearchParams",${Wt(t.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = t;
          l = i ? `["RegExp",${Wt(r)},"${i}"]` : `["RegExp",${Wt(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          l = `[`;
          for (let n = 0; n < t.length; n += 1)
            if ((n > 0 && (l += `,`), Object.hasOwn(t, n)))
              (a.push(`[${n}]`), (l += s(t[n])), a.pop());
            else if (e) l += ug;
            else {
              let n = Jt(t),
                r = n.length,
                i = String(t.length).length;
              if ((t.length - r) * 3 > 4 + i + r * (i + 1)) {
                l = `[` + hg + `,` + t.length;
                for (let e = 0; e < n.length; e++) {
                  let r = n[e];
                  (a.push(`[${r}]`), (l += `,` + r + `,` + s(t[r])), a.pop());
                }
                break;
              } else ((e = !0), (l += ug));
            }
          l += `]`;
          break;
        }
        case `Set`:
          l = `["Set"`;
          for (let e of t) l += `,${s(e)}`;
          l += `]`;
          break;
        case `Map`:
          l = `["Map"`;
          for (let [e, n] of t)
            (a.push(`.get(${Bt(e) ? nn(e) : `...`})`), (l += `,${s(e)},${s(n)}`), a.pop());
          l += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          let e = t;
          l = `["` + n + `",` + s(e.buffer);
          let r = t.byteOffset,
            i = r + t.byteLength;
          if (r > 0 || i !== e.buffer.byteLength) {
            let e = /(\d+)/.exec(n)[1] / 8;
            l += `,${r / e},${i / e}`;
          }
          l += `]`;
          break;
        }
        case `ArrayBuffer`:
          l = `["ArrayBuffer","${Yt(t)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          l = `["${n}",${Wt(t.toString())}]`;
          break;
        default:
          if (!Vt(t)) throw new ag(`Cannot stringify arbitrary non-POJOs`, a, t, e);
          if (Gt(t).length > 0) throw new ag(`Cannot stringify POJOs with symbolic keys`, a, t, e);
          if (Object.getPrototypeOf(t) === null) {
            l = `["null"`;
            for (let n of Object.keys(t)) {
              if (n === `__proto__`)
                throw new ag(`Cannot stringify objects with __proto__ keys`, a, t, e);
              (a.push(Kt(n)), (l += `,${Wt(n)},${s(t[n])}`), a.pop());
            }
            l += `]`;
          } else {
            l = `{`;
            let n = !1;
            for (let r of Object.keys(t)) {
              if (r === `__proto__`)
                throw new ag(`Cannot stringify objects with __proto__ keys`, a, t, e);
              (n && (l += `,`), (n = !0), a.push(Kt(r)), (l += `${Wt(r)}:${s(t[r])}`), a.pop());
            }
            l += `}`;
          }
      }
    }
    return ((n[c] = l), c);
  }
  let c = s(e);
  return c < 0 ? `${c}` : `[${n.join(`,`)}]`;
}
function nn(e) {
  let t = typeof e;
  return t === `string`
    ? Wt(e)
    : e instanceof String
      ? Wt(e.toString())
      : e === void 0
        ? lg.toString()
        : e === 0 && 1 / e < 0
          ? mg.toString()
          : t === `bigint`
            ? `["BigInt","${e}"]`
            : String(e);
}
function rn(e, t, n = `lazy`) {
  switch ((K.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function an(e) {
  return I(e) && (e === `` || _g.test(e));
}
function on() {
  return { [vg.QueryCache]: new Map(), [vg.CollectionUtilsCache]: new Map() };
}
function sn() {
  if (!Rh) return;
  if (yg !== void 0) return yg;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      yg = $t(e.text) ?? on();
    } catch (e) {
      ((yg = on()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      Vh(() => {
        (e?.remove(), (e = null));
      }),
      yg
    );
  }
}
function cn(e, t) {
  if (
    (console.warn(
      dt(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    rn(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function ln(e, t) {
  let n = sn();
  return n ? n[e].has(t) : !1;
}
function un(e, t) {
  let n = sn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function dn(e) {
  return e?.id ?? ng;
}
function fn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function pn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Cg.has(n)) return Cg.get(n);
    let r = new Tg(n, t);
    return (Cg.set(n, r), r);
  };
}
function mn({ children: e, collectionUtils: t }) {
  let n = C(() => ({ get: pn(t) }), [t]);
  return _(wg.Provider, { value: n, children: e });
}
function hn() {
  return t(wg);
}
function gn() {
  for (let e of Og) e();
  Og.clear();
}
function _n(e) {
  return new Promise((t) => {
    if ((Og.add(t), document.hidden)) {
      gn();
      return;
    }
    (document.addEventListener(`visibilitychange`, gn),
      document.addEventListener(`pagehide`, gn),
      Ne.read(() => {
        yn(e).then(() => {
          (Og.delete(t), !e?.signal?.aborted && t());
        });
      }));
  });
}
function vn(e) {
  return new Promise((t) => {
    (setTimeout(t, 100),
      Ne.read(
        () => {
          yn(e).then(t);
        },
        !1,
        !0
      ));
  });
}
function yn(e) {
  let t = e?.priority;
  return Eg || Dg
    ? t === `background`
      ? new Promise((e) => {
          setTimeout(e, 1);
        })
      : Eg
        ? K.scheduler.yield(e).catch(Lh)
        : K.scheduler.postTask(() => {}, e).catch(Lh)
    : t === `user-blocking`
      ? Promise.resolve()
      : new Promise((e) => {
          setTimeout(e, t === `background` ? 1 : 0);
        });
}
function bn(e) {
  let { continueAfter: t, ensureContinueBeforeUnload: n, ...r } = e ?? {};
  return n ? _n(r) : t === `paint` ? vn(r) : yn(r);
}
function xn() {
  let e = hn(),
    { autobahnNavigation: t } = tg(),
    { getRoute: n } = At();
  return s(
    (r, i, a = !0, o = !0) => {
      if (!r || !n) return;
      let s = n(r),
        { pathVariables: c, locale: l } = i;
      return Cn(s, { routeId: r, pathVariables: c, locale: l, collectionUtils: e }, a, o && t);
    },
    [n, e, t]
  );
}
function Sn(e, t = !0) {
  let n = xn();
  c(() => {
    if (!(!t || !kg)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Cn(e, t, n = !0, r = !0) {
  if (!kg || !e) return;
  let i = e.page;
  if (!(!i || !pt(i))) {
    n && (await bn());
    try {
      let e = await i.preload();
      r && t && e && (await wn(e, t));
    } catch {}
  }
}
async function wn(e, t) {
  let n = e.loader;
  if (!n?.load) return;
  let r = {
    signal: t.signal ?? new AbortController().signal,
    pathVariables: t.pathVariables ?? {},
    routeId: t.routeId,
    locale: t.locale,
    collectionUtils: t.collectionUtils,
  };
  try {
    await n.load({}, r);
  } catch {}
}
function Tn(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = En(e),
    [r, i] = En(t),
    a = Dn(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function En(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Dn(e, t) {
  if (e === t || ((e = `/` + On(e)), (t = `/` + On(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Mg(e, 1 + s);
    if (n !== Mg(t, 1 + s)) break;
    n === jg && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Mg(t, 1 + s) === jg) return Pg(t, 1 + s + 1);
      if (s === 0) return Pg(t, 1 + s);
    } else r > a && (Mg(e, 1 + s) === jg ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Mg(e, s) === jg) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Pg(t, 1 + o)}`;
}
function On(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Mg(e, o);
    else if (Lg(a)) break;
    else a = jg;
    if (Lg(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Mg(t, t.length - 1) !== Ag || Mg(t, t.length - 2) !== Ag) {
            if (t.length > 2) {
              let e = Ng(t, Ig);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = Pg(t, 0, e)), (n = t.length - 1 - Ng(t, Ig))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          Fg && ((t += t.length > 0 ? `${Ig}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${Ig}${Pg(e, r + 1, o)}`) : (t = Pg(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Ag && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function kn(e, t) {
  return e.replace(zg, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function An(e, t = !1) {
  let n = ``;
  if (A !== void 0)
    if (t) n = A.location.search;
    else {
      let e = A.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? A.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? jn(n, e) : e;
}
function jn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Bg && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Mn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(zg)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !I(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = ct(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = ct(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = ct(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
async function Nn({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await Mn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (t.slug && (u.path = `/` + t.slug + u.path), o && u.path && (u.path = An(u.path, !0)), u);
}
function Pn(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || A.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function Fn({ children: e, value: t }) {
  return _(Vg.Provider, { value: t, children: e });
}
function In() {
  return k.useContext(Vg);
}
function Ln(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function Rn(e) {
  let t = Hg,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Ug; ) ((n = e.next(t)), r.push(n.value), (t += Hg));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Hg }
  );
}
function zn(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Bn(e) {
  let { innerWidth: t, innerHeight: n } = A,
    [r, i] = zn(e.x),
    [a, o] = zn(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function Vn(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function Hn(e) {
  return e ? Gg[e] : void 0;
}
function Un(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (Wn(t)) {
    let { easing: e, duration: n } = Rn(
      ce({ keyframes: [0, 1], ...Gn(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = Hn(n?.mask?.type),
    o = Vn(n, `start`, e, a),
    s = Vn({ ...Kg, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function Wn(e) {
  return e.type === `spring`;
}
function Gn(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function Kn({ exit: e = Jg, enter: t }) {
  let n = document.createElement(`style`);
  n.id = qg;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += Un(`exit`, e)),
    (r += Un(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function qn() {
  Vh(() => {
    Ne.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(qg);
      e && document.head.removeChild(e);
    });
  });
}
function Jn() {
  return !!document.startViewTransition;
}
function Yn(e) {
  return new Promise((t) => {
    Ne.render(() => {
      (performance.mark(`framer-vt-style`), Kn(e), t());
    });
  });
}
async function Xn(e, t, n) {
  if (!Jn()) {
    e();
    return;
  }
  if ((await Yn(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(Yg),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), qn());
      })
      .catch(Yg),
    r
  );
}
function Zn() {
  let e = In(),
    t = l(void 0);
  return (
    c(() => {
      t.current &&= (t.current(), void 0);
    }),
    s(
      (n, r, i, a) => {
        let o = Ln(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return Xn(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function Qn(e, t) {
  Vh(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function $n(e, t, n, r = f) {
  r(() => {
    let t = async (e) => (await bn({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function er(e) {
  let t = l(void 0);
  return (
    $n(
      () => {
        t.current &&= (t.current(), void 0);
      },
      void 0,
      { priority: `user-blocking` }
    ),
    s(
      (n) => {
        let r = new Promise((e) => {
          t.current = e;
        });
        if (!e) return { promise: r, measureDetail: n, ignore: null };
        let i = `${e}-start`,
          a = `${e}-end`,
          o = !1;
        return (
          performance.mark(i),
          r
            .finally(() => {
              o || (performance.mark(a), performance.measure(e, { start: i, end: a, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: r,
            measureDetail: n,
            ignore: () => {
              ((o = !0), t.current?.(), (t.current = void 0));
            },
          }
        );
      },
      [e]
    )
  );
}
async function tr(
  e,
  t,
  {
    currentRoutePath: n,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: c,
    siteCanonicalURL: l,
  },
  u = !1
) {
  let { path: d } = t;
  if (!d) return;
  let f = cr(t, {
      currentRoutePath: n,
      currentRoutePathLocalized: r,
      currentPathVariables: i,
      hash: a,
      pathVariables: o,
      preserveQueryParams: c,
      siteCanonicalURL: l,
      localeId: s,
    }),
    p = n !== void 0 && n === d,
    m = nr(A.history.state) ? A.history.state : void 0,
    h = p ? m?.queryParamBackAnchorSearch : void 0;
  try {
    return await ir(
      { routeId: e, hash: a, pathVariables: o, localeId: s, queryParamBackAnchorSearch: h },
      f,
      u
    );
  } catch {}
}
function nr(e) {
  return R(e) && I(e.routeId);
}
function rr(e, t, n = !1) {
  (performance.mark(`framer-history-replace`),
    t && Qn(t, A.location.href),
    (n ? A.history.__proto__.replaceState : A.history.replaceState).call(A.history, e, ``, t));
}
async function ir(e, t, n = !1) {
  if ((performance.mark(`framer-history-push`), Qn(t, A.location.href), !n)) {
    A.history.pushState(e, ``, t);
    return;
  }
  let r = !1,
    i;
  (Qg &&
    ((i = () => {
      if (((r = !0), $g)) return;
      let e = `Popstate called after intercept(). Please report this to the Framer team.`;
      (console.error(e), rn(`published_site_load_recoverable_error`, { message: e }));
    }),
    A.addEventListener(`popstate`, i, { once: !0 })),
    $g && Qg
      ? A.history.__proto__.pushState.call(A.history, e, ``, t)
      : A.history.pushState(e, ``, t),
    Qg &&
      queueMicrotask(() => {
        r || ((Qg = !1), A.removeEventListener(`popstate`, i));
      }));
}
function ar({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r }) {
  f(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = R(A.history.state) ? A.history.state : {},
      a = A.location.hash ? A.location.hash.slice(1) : void 0;
    rr({ ...i, routeId: t, hash: a, pathVariables: n, localeId: r }, void 0, !0);
  }, []);
}
function or(e, t) {
  let n = Zn(),
    r = er(`framer-route-change`),
    i = l(void 0),
    a = s(
      async ({ state: a }) => {
        if (
          (A.navigation?.transition && A.navigation?.transition?.navigationType !== `traverse`) ||
          !R(a)
        )
          return;
        let { routeId: o, hash: s, pathVariables: c, localeId: l } = a;
        if (!I(o)) return;
        let u = r({ popstate: !0 }),
          d = Lt();
        u.promise.finally(d);
        let f = await n(e.current, o, () => {
            t(
              o,
              I(l) ? l : void 0,
              I(s) ? s : void 0,
              A.location.pathname + A.location.search + A.location.hash,
              R(c) ? c : void 0,
              !0,
              u,
              !1
            );
          }),
          p = A.navigation?.transition;
        (await (f?.updateCallbackDone ?? Promise.resolve())
          .then(i.current?.resolve)
          .catch(i.current?.reject),
          await u.promise);
        try {
          await p?.finished;
        } catch (e) {
          console.warn(`Popstate transition failed`, e);
        }
        (Zg(), Qn(A.location.href));
      },
      [e, r, t, n]
    ),
    o = s((e) => {
      e.navigationType !== `traverse` ||
        !e.canIntercept ||
        e.intercept({
          async handler() {
            (await new Promise((e, t) => {
              i.current = { resolve: e, reject: t };
            }),
              (i.current = void 0));
          },
          scroll: `after-transition`,
        });
    }, []);
  c(
    () => (
      A.addEventListener(`popstate`, a),
      e_ && A.navigation.addEventListener(`navigate`, o),
      () => {
        (A.removeEventListener(`popstate`, a),
          e_ && A.navigation.removeEventListener(`navigate`, o));
      }
    ),
    [a, o]
  );
}
function sr(e, t, n) {
  let r = It(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(zg, (e, t) => i[t] ?? e);
}
function cr(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
  }
) {
  let f = sr(i, e, o);
  if (l) return f ?? ``;
  let p = t ?? `/`;
  (n && d && (p = n[d] ?? p), r && (p = p.replace(zg, (e, t) => String(r[t] || e))));
  let m = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (m = m.replace(zg, (e, t) => String(a[t] || e)));
  let h = !!(p === m && f),
    g = !h && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && p !== m;
  if (s)
    if (Rg.has(p) && A !== void 0) {
      let e = Pn(u);
      m = Tn(A.location.pathname, e + m);
    } else m = Tn(p, m);
  let _ = h || g;
  return ((c || _) && (m = An(m, _)), f && (m = `${m}#${f}`), m);
}
async function lr(e, t, n) {
  if (!e.path || !t) return !1;
  let r = `${n.slug ? `/${n.slug}` : ``}${kn(e.path, t)}`;
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((A.location.href = A.location.origin + r), !0)
    : !1;
}
function ur() {
  let e = hn();
  return s((t) => dr({ ...t, collectionUtils: e }), [e]);
}
async function dr(e) {
  let t = await Nn(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!I(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await lr(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function fr() {
  let e = l(Promise.resolve()),
    t = l(),
    n = s((n) => {
      if (n.navigationType === `traverse` || !n.canIntercept) return;
      let r = t.current;
      (r?.signal.addEventListener(`abort`, () => {
        r.abort(`user aborted`);
      }),
        n.intercept({ handler: () => e.current }));
    }, []);
  return s(
    (r, i, a) => {
      if (!e_) {
        i();
        return;
      }
      ((e.current = r),
        (t.current = a),
        A.navigation.addEventListener(`navigate`, n),
        i(!0),
        r.finally(() => {
          A.navigation.removeEventListener(`navigate`, n);
        }));
    },
    [n]
  );
}
function pr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`; ) t++;
  for (; n > t && e[n - 1] === `-`; ) n--;
  return e.slice(t, n);
}
function mr(e) {
  return pr(e.trim().toLowerCase().replace(t_, `-`));
}
function hr({ children: e, value: t }) {
  return _(r_.Provider, { value: t, children: e });
}
function gr() {
  return t(r_);
}
function _r(e, t) {
  let n = i(() => ({ inputs: t, result: e() }))[0],
    r = l(!0),
    a = l(n),
    o =
      r.current || (t && a.current.inputs && Dt(t, a.current.inputs, !1))
        ? a.current
        : { inputs: t, result: e() };
  return (
    c(() => {
      ((r.current = !1), (a.current = o));
    }, [o]),
    o.result
  );
}
function vr(e, t) {
  return _r(() => e, t);
}
function yr() {
  return k.useContext(o_);
}
function br() {
  return A.location.search;
}
function xr() {
  return ``;
}
function Sr(e) {
  return (
    c_.add(e),
    A.addEventListener(`popstate`, e),
    () => {
      (c_.delete(e), A.removeEventListener(`popstate`, e));
    }
  );
}
function Cr() {
  for (let e of c_) e();
}
function wr({ children: e }) {
  let t = gr() === `preview`,
    [n, a] = i(``),
    o = r(g(Sr, br, xr));
  At();
  let c = t ? n : o,
    l = s(
      async (e) => {
        if (t) {
          O(() => {
            a((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        await bn({ continueAfter: `paint` });
        let n = A.history.state,
          r = new URL(A.location.href),
          i = e(r.searchParams).toString();
        r.search = i;
        let o = n?.queryParamBackAnchorSearch,
          s = A.location.search.slice(1),
          c = o === void 0 && i !== s,
          l = o !== void 0 && i === o,
          u = { ...n, queryParamBackAnchorSearch: l ? void 0 : (o ?? (c ? s : void 0)) },
          d = r.toString();
        (c || l ? await ir(u, d) : rr(u, d), Cr());
      },
      [t]
    ),
    u = _r(() => ({ urlSearchParams: new URLSearchParams(c), replaceSearchParams: l }), [c, l]);
  return _(l_.Provider, { value: u, children: e });
}
function Tr({ parameterName: e }) {
  let n = l(e),
    { urlSearchParams: r, replaceSearchParams: i } = t(l_);
  return [
    C(() => r.getAll(n.current), [r]),
    s(
      async (e) => {
        et(e) &&
          (await i((t) => {
            let r = n.current,
              i = new URLSearchParams(),
              a = !1;
            for (let [n, o] of t.entries()) {
              if (n !== r) {
                i.append(n, o);
                continue;
              }
              if (!a) {
                a = !0;
                for (let t of e) I(t) && i.append(r, t);
              }
            }
            if (!a) for (let t of e) I(t) && i.append(r, t);
            return i;
          }));
      },
      [i]
    ),
  ];
}
function Er({ initialValue: e, parameterName: t, optional: n }) {
  let r = l(n ? void 0 : I(e) ? e : ``),
    [i, a] = Tr({ parameterName: t });
  return [
    C(() => (i.length === 0 ? r.current : (i[0] ?? ``)), [i]),
    s(
      async (e) => {
        if (e === r.current) return a(Qh);
        if (I(e)) return a([e]);
      },
      [a]
    ),
  ];
}
function Dr({ collectionId: e, initialValue: t, parameterName: n, optional: r }) {
  let i = hn(),
    a = yr().activeLocale ?? void 0,
    o = l(r ? void 0 : t),
    [c, u] = Er({ initialValue: void 0, parameterName: n, optional: !0 });
  return [
    C(() => (I(c) ? kr(Or(i, e).getRecordIdBySlug(c, a)) : o.current), [i, e, a, c]),
    s(
      async (t) => {
        if (nt(t)) return u(void 0);
        let n = await Or(i, e).getSlugByRecordId(t, a);
        I(n) && (await u(n));
      },
      [i, e, a, u]
    ),
  ];
}
function Or(e, t) {
  let n = e?.get(t);
  return (z(n, `CollectionUtilsCache not found for collectionId:`, t), n);
}
function kr(e) {
  if (ct(e)) throw e;
  return e;
}
function Ar(e) {
  return u_ in e && e[u_] === 1;
}
function jr() {
  if (!d_) return;
  ((p_ = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  d_.forEach((n) => t.addEventListener(n, f_, e));
}
function Mr() {
  return (
    c(() => {
      if (!p_ || !d_) return;
      let e = { capture: !0 },
        t = document.body;
      (d_.forEach((n) => t.removeEventListener(n, f_, e)),
        (d_ = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function Nr(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function Pr(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function Fr() {
  ((N_ = new M_()), N_.render.markStart());
}
function Ir() {
  (n(() => {
    N_?.useInsertionEffects.markRouterStart();
  }, []),
    f(() => {
      N_?.useLayoutEffects.markRouterStart();
    }, []),
    c(() => {
      N_?.useEffects.markRouterStart();
    }, []));
}
function Lr() {
  (n(() => {
    (N_?.render.markEnd(), N_?.useInsertionEffects.markStart());
  }, []),
    f(() => {
      if ((N_?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        P_ = !0;
        return;
      }
      Ne.read(() => {
        (N_?.browserRendering.requestAnimationFrame.markStart(),
          N_?.unattributedHydrationOverhead.measure());
      });
    }, []),
    c(() => {
      (N_?.useEffects.markStart(),
        N_?.browserRendering.hasStarted ||
          (N_?.mutationEffects.measure(), N_?.useEffects.markAreSynchronous()));
    }, []));
}
function Rr() {
  (n(() => {
    N_?.useInsertionEffects.markEnd();
  }, []),
    f(() => {
      (N_?.useLayoutEffects.markEnd(),
        !(P_ || document.visibilityState !== `visible`) &&
          Ne.read(() => {
            (N_?.browserRendering.requestAnimationFrame.markEnd(),
              bn().then(() => {
                N_?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    c(() => {
      N_?.useEffects.markEnd();
    }, []));
}
function zr() {
  return (Lr(), null);
}
function Br() {
  return (Rr(), null);
}
function Vr(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return k.isValidElement(e) ? k.cloneElement(e, n) : _(e, { ...n });
}
function Hr() {
  return R_;
}
function Ur(e) {
  if (z_?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      z(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Kr(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          z(t, `localizedPath must be defined`);
          let i = Kr(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    for (let e in ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e), n)) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    z_ = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: z_.pathRoutes,
    paths: z_.paths,
    pathRoutesLocalized: z_.pathRoutesLocalized,
    pathsLocalized: z_.pathsLocalized,
  };
}
function Wr(e, t, n = !0, r = Hr()) {
  return Gr(e, t, r, n);
}
function Gr(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Ur(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = qr(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = qr(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = qr(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = qr(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Kr(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function qr(e, t) {
  let n = [],
    r = Jr(t).replace(zg, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Jr(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Yr() {
  if (`PerformanceServerTiming` in A) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function Xr(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n;
  if (!e[i]) return;
  let { abTestingParentId: a, ...o } = r,
    s = e[i].elements || r.elements ? { ...e[i].elements, ...r.elements } : void 0;
  e[i] = { ...o, elements: s, abTestingVariantId: n, abTestId: t };
}
function Zr(e, t) {
  for (let [n, r] of t) Xr(e, n, r);
}
function Qr(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function $r(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    { abTestingParentId: r, ...i } = e[t],
    a = e[n]?.elements || i.elements ? { ...e[n]?.elements, ...i.elements } : void 0;
  e[n] = { ...i, elements: a, abTestingVariantId: t };
}
function ei(e, t) {
  if (A === void 0) return t;
  let n = t;
  if (t) {
    $r(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Zr(e, Yr()), Qr(e), n);
}
function ti(e) {
  (c(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    n(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function ni(e, ...t) {
  B_.has(e) || (B_.add(e), console.warn(e, ...t));
}
function ri(e, t, n) {
  ni(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function V(e) {
  return (
    typeof e == `object` &&
    !!e &&
    H_ in e &&
    e[H_] instanceof Function &&
    U_ in e &&
    e[U_] instanceof Function
  );
}
function ii(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = q(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function ai(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function oi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function si(e) {
  return Math.round(e * 2) / 2;
}
function ci(e, t) {
  return { x: e, y: t };
}
function li(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function ui(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function di(e) {
  let t = fi(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function fi(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function pi(e, t, n) {
  return (
    (K_.rgb_r = e / 255),
    (K_.rgb_g = t / 255),
    (K_.rgb_b = n / 255),
    K_.rgbToHsluv(),
    { h: K_.hsluv_h, s: K_.hsluv_s, l: K_.hsluv_l }
  );
}
function mi(e, t, n, r = 1) {
  return (
    (K_.hsluv_h = e),
    (K_.hsluv_s = t),
    (K_.hsluv_l = n),
    K_.hsluvToRgb(),
    { r: K_.rgb_r * 255, g: K_.rgb_g * 255, b: K_.rgb_b * 255, a: r }
  );
}
function hi(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function gi(e, t, n) {
  return {
    r: ui(e) ? Ci(e, 255) * 255 : 0,
    g: ui(t) ? Ci(t, 255) * 255 : 0,
    b: ui(n) ? Ci(n, 255) * 255 : 0,
  };
}
function _i(e, t, n, r) {
  let i = [
    Ei(Math.round(e).toString(16)),
    Ei(Math.round(t).toString(16)),
    Ei(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function vi(e, t, n) {
  let r,
    i,
    a = Ci(e, 255),
    o = Ci(t, 255),
    s = Ci(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function yi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function bi(e, t, n) {
  let r, i, a;
  if (((e = Ci(e, 360)), (t = Ci(t * 100, 100)), (n = Ci(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = yi(s, o, e + 1 / 3)), (i = yi(s, o, e)), (a = yi(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function xi(e, t, n) {
  ((e = Ci(e, 255)), (t = Ci(t, 255)), (n = Ci(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function Si(e, t, n) {
  ((e = Ci(e, 360) * 6), (t = Ci(t * 100, 100)), (n = Ci(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function Ci(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    wi(e) && (e = `100%`);
    let t = Ti(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function wi(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Ti(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Ei(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function Di(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = G_[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = q_.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = q_.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = q_.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: di(r[2] ?? ``), l: di(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = q_.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: di(r[2] ?? ``),
              l: di(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = q_.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: di(r[2] ?? ``), v: di(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = q_.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: di(r[2] ?? ``),
                  v: di(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = q_.hex8.exec(t))
                ? {
                    r: Oi(r[1] ?? ``),
                    g: Oi(r[2] ?? ``),
                    b: Oi(r[3] ?? ``),
                    a: ki(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = q_.hex6.exec(t))
                  ? {
                      r: Oi(r[1] ?? ``),
                      g: Oi(r[2] ?? ``),
                      b: Oi(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = q_.hex4.exec(t))
                    ? {
                        r: Oi(`${r[1]}${r[1]}`),
                        g: Oi(`${r[2]}${r[2]}`),
                        b: Oi(`${r[3]}${r[3]}`),
                        a: ki(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = q_.hex3.exec(t))
                      ? {
                          r: Oi(`${r[1]}${r[1]}`),
                          g: Oi(`${r[2]}${r[2]}`),
                          b: Oi(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function Oi(e) {
  return parseInt(e, 16);
}
function ki(e) {
  return Oi(e) / 255;
}
function Ai(e) {
  let t = J_.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function ji(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Mi({ r: e, g: t, b: n, a: r }) {
  return { r: ji(e), g: ji(t), b: ji(n), a: r };
}
function Ni(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Pi({ r: e, g: t, b: n, a: r }) {
  return { r: Ni(e), g: Ni(t), b: Ni(n), a: r };
}
function Fi({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Ii(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Li({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Ii(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Ri(e) {
  return Q_(Z_(e));
}
function zi(e) {
  return X_(Y_(e));
}
function Bi(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Ui({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Vi(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Ui(e)
              : Wi(e)),
    i
  );
}
function Vi(e) {
  let t = Di(e);
  if (t) return t.format === `hsl` ? Wi(t) : t.format === `hsv` ? Hi(t) : Ui(t);
}
function Hi(e) {
  let t = Si(e.h, e.s, e.v);
  return { ...vi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Gi(e.a) };
}
function Ui(e) {
  let t = gi(e.r, e.g, e.b);
  return { ...vi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Gi(e.a) };
}
function Wi(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = ui(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = ui(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = fi(e.s)),
    (r = ui(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = fi(e.l)),
    (i = bi(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Gi(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Ki({ children: e }) {
  if (t(fv).top) return _(D, { children: e });
  let n = l({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = l({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = l(new Set()).current,
    a = l({
      getLayoutId: s(({ id: e, name: t, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = t ? `byName` : `byId`,
          s = n.current[o][e];
        if (s) return s;
        let c = t || e;
        if (!a && !i.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
          return (
            n.current.count[o][c] === void 0 &&
              ((n.current.count[o][c] = 0), (n.current.byLayoutId[c] = c), (r.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            z(!!c, `duplicatedId must be defined`);
            let u = n.current[o][c],
              d = n.current.byLastId[c];
            if (d && !l) {
              let e = n.current.byLayoutId[d],
                r = !e || e === t;
              d && !i.has(d) && (!t || r) && (l = [d, c]);
            }
            let f = u ? n.current.byLayoutId[u] : void 0,
              p = !f || f === t;
            if (u && !i.has(u) && (!t || p))
              return ((r.current[o][e] = u), (r.current.byLastId[c] = u), i.add(u), u);
          }
        let u = n.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (r.current.byId[e] = u), u);
        if (l) {
          let [t, n] = l;
          return ((r.current[o][e] = t), (r.current.byLastId[n] = t), i.add(t), t);
        }
        let d = n.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (r.current.byId[e] = d), d);
        let f = a?.[0],
          p = t || f || e,
          { layoutId: m, value: h } = qi(p, (n.current.count[o][p] ?? -1) + 1, i);
        if (((n.current.count[o][p] = h), (r.current[o][e] = m), a?.length && !t)) {
          let e = a[a.length - 1];
          if ((e && (r.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
            }
        }
        return ((r.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: s(() => {
        ((n.current = {
          byId: { ...n.current.byId, ...r.current.byId },
          byLastId: { ...n.current.byLastId, ...r.current.byLastId },
          byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
          byName: { ...n.current.byName, ...r.current.byName },
          byLastName: { ...n.current.byLastName, ...r.current.byLastName },
          byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
          count: { ...n.current.count, byName: {} },
        }),
          (r.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return _(fv.Provider, { value: a, children: e });
}
function qi(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Ji({ enabled: e = !0, ...n }) {
  let r = t(fv),
    i = C(() => ({ ...r, enabled: e }), [e]);
  return _(fv.Provider, { ...n, value: i });
}
function Yi(e) {
  let t = l(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Xi(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Zi(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return T(`div`, {
    style: mv,
    children: [
      _(`div`, { className: `text`, style: gv, children: r }),
      i && _(`div`, { className: `text`, style: _v, children: i }),
    ],
  });
}
function Zi(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function H(e) {
  return Number.isFinite(e);
}
function Qi(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function $i(e) {
  return typeof e != `string` && typeof e != `number`;
}
function ea(e) {
  return e != null && typeof e != `boolean` && !Qi(e);
}
function ta(e) {
  return e * (Math.PI / 180);
}
function na(e) {
  return nt(e) ? !1 : e === 2 || e === 5;
}
function ra(e) {
  return !(!ea(e) || !$i(e));
}
function ia(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function aa(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return oa(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function oa(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      B(e, `unknown constraint key`);
  }
}
function sa(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(aa(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(aa(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function ca(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(aa(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(aa(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function la(e, t, n, r, i) {
  let a = ca(H(e) ? e : Cv, n, r, i),
    o = sa(H(t) ? t : wv, n, r, i);
  return (
    H(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (H(n.left) && H(n.right)
        ? (o = a / n.aspectRatio)
        : (H(n.top) && H(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function ua(e, t) {
  return !H(e) || !H(t) ? null : e + t;
}
function da(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function fa(e) {
  return !e._constraints || da(e) ? !1 : e._constraints.enabled;
}
function pa(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    H(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    H(n) && H(r) ? { width: n, height: r } : null
  );
}
function ma(e) {
  let t = pa(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return H(n) && H(r) ? { x: n, y: r, ...t } : null;
}
function ha(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!fa(e) || r) return ma(e);
  let i = ga(e),
    a = _a(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Sv.toRect(i, o, null, n, null);
}
function ga(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = xv.quickfix({
      left: H(t),
      right: H(n),
      top: H(r),
      bottom: H(i),
      widthType: ia(c),
      heightType: ia(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function _a(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function va() {
  return k.useContext(Tv).parentSize;
}
function ya(e) {
  return typeof e == `object`;
}
function ba(e) {
  return ya(e) ? e.width : e;
}
function xa(e) {
  return ya(e) ? e.height : e;
}
function Sa(e, t) {
  return _(Ev, { parentSize: t, children: e });
}
function Ca(e) {
  return ha(e, va(), !0);
}
function wa({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Ta() {
  return d === void 0 ? void 0 : d;
}
function Ea() {
  return A === void 0 ? void 0 : A;
}
function Da() {
  let e = Ta();
  return e ? Ov.test(e.platform) : !1;
}
function Oa() {
  let e = Ta();
  return e
    ? kv.test(e.platform)
      ? !0
      : Av.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function ka() {
  return Da() || Oa();
}
function Aa() {
  let e = Ta();
  return e ? jv.test(e.userAgent) : !1;
}
function ja() {
  let e = Ta();
  return e ? Mv.test(e.userAgent) && Nv.test(e.vendor) && !Aa() : !1;
}
function Ma() {
  let e = Ta();
  return e ? Pv.test(e.userAgent) && Fv.test(e.vendor) : !1;
}
function Na() {
  let e = Ta();
  return e ? Iv.test(e.userAgent) : !1;
}
function Pa() {
  return typeof document == `object`;
}
function Fa() {
  let e = Ta();
  return e ? Lv.test(e.userAgent) : !1;
}
function Ia() {
  return !1;
}
function La() {
  let e = Ea(),
    t = Ta();
  return !e || !t ? !1 : `ontouchstart` in e || t.maxTouchPoints > 0;
}
function Ra() {
  let e = Ta();
  return e && Rv.test(e.userAgent) ? `tablet` : e && zv.test(e.userAgent) ? `phone` : `desktop`;
}
function za() {
  return Ra() === `desktop`;
}
function Ba(e) {
  return ka() ? e.metaKey : e.ctrlKey;
}
function Va(e, t, n = Vv) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!Hv) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Hv = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = Hv;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Ha() {
  if (Yv !== void 0) return Yv;
  let e = document.createElement(`div`);
  (Object.assign(e.style, {
    position: `absolute`,
    display: `flex`,
    flexDirection: `column`,
    rowGap: `1px`,
  }),
    e.appendChild(document.createElement(`div`)),
    e.appendChild(document.createElement(`div`)),
    document.body.appendChild(e));
  let t = e.scrollHeight === 1;
  return (e.parentNode && e.parentNode.removeChild(e), (Yv = t), t);
}
function Ua() {
  Zv || ((Zv = !0), !Ha() && document.body.classList.add(Xv));
}
function Wa(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? ty.variable(e) : e === `` ? `""` : e;
}
function Ga(e, t) {
  return ty.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Ka(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function qa() {
  return Y.current() === Y.preview ? Jy : qy;
}
function Ja(e) {
  return Kv(e, qa, `framer-lib-combinedCSSRules`);
}
function Ya(e) {
  return R(e) || Qe(e);
}
function Xa(e) {
  return !!e && Yy in e && e[Yy] === !0;
}
function Za(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return I(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return nt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return L(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = R(e.defaultValue) ? e.defaultValue : {};
        return (R(e.controls) && Qa(t, e.controls), t);
      }
      case `array`:
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Qa(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!nt(i) || Xa(r)) continue;
    let a = Za(r);
    nt(a) || (e[n] = a);
  }
}
function $a(e) {
  if (R(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function eo(e, t) {
  Ya(e) && Qa($a(e), t);
}
function to(e, t) {
  (Object.assign(e, { propertyControls: t }), eo(e, t));
}
function no(e) {
  return e.propertyControls;
}
function ro() {
  let e = Y.current();
  return e === Y.canvas || e === Y.export;
}
function io() {
  let [e] = i(() => ro());
  return e;
}
function ao(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function oo(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of ob) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function so(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function co(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < sb) continue;
    let n = so(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${so(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function lo(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of ab) {
    let n = so(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function uo(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = lo(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: co(n, t, oo(t.pixelWidth, t.pixelHeight)) };
}
function fo() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: lt(rb.imagePlaceholderSvg),
  };
}
function po(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function mo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function ho(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...ib,
    objectPosition: mo(e.positionX, e.positionY),
    objectFit: po(e.fit),
  };
}
function go(e) {
  let t = k.useRef(e ? `auto` : `async`),
    n = s((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = s(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = s(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function _o({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = rb.useImageSource(e, t, n),
    s = ho(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = go(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : uo(e.nodeFixedSize, e, o);
  return _(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function vo({ image: e, containerSize: t, nodeId: n }) {
  let r = k.useRef(null),
    i = rb.useImageElement(e, t, n),
    a = ho(e);
  return (
    k.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    _(`div`, { ref: r, style: { display: `contents`, ...ib } })
  );
}
function yo({ nodeId: e, image: t, containerSize: n }) {
  let r = k.useRef(null),
    i = rb.useImageSource(t, n, e);
  return (
    k.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = ho(t);
      rb.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    _(`div`, { ref: r, style: { display: `contents`, ...ib } })
  );
}
function bo({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (I(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = L(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = si(e * (t.pixelWidth / 2)),
        s = rb.useImageSource(t, n);
      ((r = {
        ...cb,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: mo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        Y.current() === Y.canvas
          ? rb.canRenderOptimizedCanvasImage(rb.useImageSource(t))
            ? _(yo, { image: t, ...n })
            : _(vo, { image: t, ...n })
          : _(_o, { image: t, avoidAsyncDecoding: Y.current() === Y.export, ...n });
  let o = a ? cb : (r ?? { ...cb, ...fo() });
  return i
    ? _(be.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : _(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function xo(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function So(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...ib,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), _(be.div, { style: n }))
    : (xo(e, n, !1), _(be.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Co(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function wo(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !ub.isImageObject(t)) return;
  let r = null;
  if (((r = I(n) ? { alt: ``, src: n } : q.get(t, null)), ub.isImageObject(r))) return Co(r, e);
}
function To(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Eo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? be[e] : be.div;
}
function Do(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` ? !0 : void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` ? !0 : void 0));
}
function Oo(e) {
  let t = {};
  return (!e || !db || Y.current() !== Y.canvas || Do(t, e), t);
}
function ko(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Ao(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = k.Children.map(t, (e) =>
        k.isValidElement(e) ? k.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function jo(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function Mo(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = t(fv);
  return C(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function No() {
  let [e, t] = k.useState(0);
  return k.useCallback(() => t((e) => e + 1), []);
}
function Po(e) {
  let t = No();
  c(() => {
    let n = e?.current;
    if (n)
      return (
        hb?.observeElementWithCallback(e.current, t),
        () => {
          hb?.unobserve(n);
        }
      );
  }, [e, t]);
}
function Fo(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(gb)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Io)
    .map(Lo);
}
function Io(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Lo(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(Io);
  return t ? Lo(t) : e;
}
function Ro(e, n, r = () => [], i = {}) {
  let { id: a, visible: o, _needsMeasure: s } = e,
    { skipHook: c = !1 } = i,
    l = t(pb),
    u = Y.current() === Y.canvas;
  fb(() => {
    !u ||
      l ||
      c ||
      (n.current && a && o && s && rb.queueMeasureRequest(ko(a), n.current, r(n.current)));
  });
}
function zo(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && rb.queueMeasureRequest(ko(t.id), t, Fo(t));
}
function Bo(e) {
  e.willChange = `transform`;
  let t = Y.current() === Y.canvas;
  yb && t && (e.translateZ = _b);
}
function Vo(e) {
  ((e.willChange = `transform`), Ho(e, !0));
}
function Ho(e, t) {
  let n = Y.current() === Y.canvas;
  if (!yb || !n) return;
  let r = (I(e.transform) && e.transform) || ``;
  t ? r.includes(vb) || (e.transform = r + vb) : (e.transform = r.replace(vb, ``));
}
function Uo(e, t, n, r = !0) {
  if (!e) return;
  let i = Xy(e.style),
    a = n || i[t],
    o = () => {
      Wo(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Wo(e) {
  return I(e) || L(e) || rt(e);
}
function Go(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Ko(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Go(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function qo(e, t) {
  let n = [e, t];
  return Cb.test(e) ? e : Ko(1e3, wb, n, () => Sb.multiplyAlpha(e, t));
}
function Jo(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: qo(e.value, t) }))
  );
}
function Yo(e, t) {
  let n = 0;
  return (
    Jo(e, t).forEach((e) => {
      n ^= xb(e.value) ^ e.position;
    }),
    n
  );
}
function Xo(e) {
  return e && Tb.every((t) => t in e);
}
function Zo(e) {
  return e && Eb.every((t) => t in e);
}
function Qo({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || tv(t)
      ? (n.backgroundColor = t)
      : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e))
    : e &&
      ((e = q.get(e, null)),
      typeof e == `string` || tv(e)
        ? (n.background = e)
        : Ob.isLinearGradient(e)
          ? (n.background = Ob.toCSS(e))
          : Ab.isRadialGradient(e)
            ? (n.background = Ab.toCSS(e))
            : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e)));
}
function U(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function $o(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function es(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function ts(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    De(n)
      ? (t.cornerShape = ae(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    U(e, `size`, t),
    U(e, `width`, t),
    U(e, `height`, t),
    U(e, `minWidth`, t),
    U(e, `minHeight`, t),
    U(e, `top`, t),
    U(e, `right`, t),
    U(e, `bottom`, t),
    U(e, `left`, t),
    U(e, `position`, t),
    U(e, `overflow`, t),
    U(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && U(e, `border`, t),
    U(e, `borderRadius`, t),
    U(e, `radius`, t, `borderRadius`),
    U(e, `color`, t),
    U(e, `shadow`, t, `boxShadow`),
    U(e, `x`, t),
    U(e, `y`, t),
    U(e, `z`, t),
    U(e, `rotate`, t),
    U(e, `rotateX`, t),
    U(e, `rotateY`, t),
    U(e, `rotateZ`, t),
    U(e, `scale`, t),
    U(e, `scaleX`, t),
    U(e, `scaleY`, t),
    U(e, `skew`, t),
    U(e, `skewX`, t),
    U(e, `skewY`, t),
    U(e, `originX`, t),
    U(e, `originY`, t),
    U(e, `originZ`, t),
    Qo(e, t),
    t
  );
}
function ns(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Xy(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function rs(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (Mb.has(t)) return `pointer`;
}
function is(e) {
  return as(e) ? !0 : e.style ? !!as(e.style) : !1;
}
function as(e) {
  return Nb in e && (e[Nb] === `scroll` || e[Nb] === `auto`);
}
function os(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = N(e.minWidth),
    h = N(e.minHeight),
    g = N(e.maxWidth),
    _ = N(e.maxHeight);
  return {
    top: N(n),
    left: N(t),
    bottom: N(r),
    right: N(i),
    width: N(a),
    height: N(o),
    size: N(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function ss(e) {
  let n = t(pb),
    { style: r, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = os(e),
    c = Ca(s),
    l = {
      display: `block`,
      flex: r?.flex ?? `0 0 auto`,
      userSelect: Y.current() === Y.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !ns(e) && !e.__fromCanvasComponent && !is(e),
    d = e.style ? !(`pointerEvents` in e.style) : !0;
  u && d && (l.pointerEvents = `none`);
  let f = k.Children.count(e.children) > 0 &&
      k.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = ts(e);
  (o === void 0 && !a && ($o(p) || (l.width = Pb.width), es(p) || (l.height = Pb.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let m = {};
  (fa(s) &&
    c &&
    !wa(e) &&
    (m = { left: c.x, top: c.y, width: c.width, height: c.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, i, p, m, r),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    bb.applyWillChange(e, l, !0));
  let h = l;
  l.transform || (h = { x: 0, y: 0, ...l });
  let g = ro();
  return (
    e.positionSticky
      ? (!g || rb.isOnPageCanvas || n) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = rb.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, c]
  );
}
function cs(e) {
  let t = {};
  for (let n in e)
    (Ye(n) || Qy(n)) && !Fb.has(n)
      ? (t[n] = Xy(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Xy(e)[n] != `boolean` && !e.transition && (t.transition = Xy(e)[n]));
  return t;
}
function ls(e) {
  return `data-framer-name` in e;
}
function us(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function ds(e) {
  return _(be.div, { layoutId: Rb, style: Vb, children: e.children });
}
function fs(e, t) {
  Qe(e) ? e(t) : ps(e) && (e.current = t);
}
function ps(e) {
  return R(e) && `current` in e;
}
function ms() {
  let e = Yi(() => new Set()),
    t = Yi(() => new Map());
  return Yi(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function hs(e) {
  let t = l(null),
    n = ms();
  return Yi(() => (ps(e) ? n(e) : Qe(e) ? n(t, e) : n(t)));
}
function gs(e, t, n) {
  let r = l(),
    i = l();
  (_r(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function _s(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Hb({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function vs(e, n, r) {
  let i = Yi(() => `${r.rootMargin}`),
    a = t(Ub),
    { enabled: o, root: s, rootMargin: c, threshold: l } = r;
  gs(
    e,
    (e) => {
      if (o && e !== null) return _s(a, i, e, s, n, c, l);
    },
    [o, n, s, c, l]
  );
}
function ys(e, t, n) {
  let r = k.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  Wb(
    e,
    k.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = xs(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: Gb, rootMargin: s, enabled: i ?? !0 }
  );
}
function bs(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, K.innerHeight);
}
function xs({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && bs(t, e) >= r;
}
function Ss() {
  return t(Yb);
}
function Cs() {
  return new Map();
}
function ws() {
  return Yi(Cs);
}
function Ts(e, n = []) {
  let { register: r, deregister: i } = t(Xb);
  c(() => {
    if (e) return (r(e), () => i(e));
  }, [r, i, ...n]);
}
function Es(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Ds(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (H(t.originX) && (r.originX = t.originX),
      H(t.originY) && (r.originY = t.originY),
      H(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (H(n.originX) && (r.originX = n.originX),
      H(n.originY) && (r.originY = n.originY),
      H(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Os(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function ks(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return nx.PushLeft;
    case `left`:
      return nx.PushRight;
    case `bottom`:
      return nx.PushUp;
    case `top`:
      return nx.PushDown;
  }
}
function As(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return nx.OverlayLeft;
    case `left`:
      return nx.OverlayRight;
    case `bottom`:
      return nx.OverlayUp;
    case `top`:
      return nx.OverlayDown;
  }
}
function js(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return nx.FlipLeft;
    case `left`:
      return nx.FlipRight;
    case `bottom`:
      return nx.FlipUp;
    case `top`:
      return nx.FlipDown;
  }
}
function Ms(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return Ps(e, t.transition, t.component);
    case `removeOverlay`:
      return Fs(e);
    case `add`:
      return Is(e, t.key, t.transition, t.component);
    case `remove`:
      return zs(e);
    case `update`:
      return Ns(e, t.key, t.component);
    case `back`:
      return Ls(e);
    case `forward`:
      return Rs(e);
    default:
      return;
  }
}
function Ns(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function Ps(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function Fs(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function Is(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i && i.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? Ws(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = Hs(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = Bs(e, t, c),
    p = Us(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function Ls(e) {
  let t = { ...e.containers },
    n = zs(e);
  if (n) return ((n.containers = t), n);
}
function Rs(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Is(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function zs(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (z(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Vs(e, r, n),
    u = Us(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function Bs(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function Vs(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function Hs(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Us(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Gs(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function Ws(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1
        ? !0
        : !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Gs(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Ks(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Ks(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Ks(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Ks(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Ks(e, t, n) {
  let r = {},
    i = {};
  return (
    ix.forEach((e) => {
      ((r[e] = $b[e]), (i[e] = { ...n, from: $b[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Xy($b)[a]}%` : Xy($b)[a];
        ((Xy(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function qs(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Js({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function Ys({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : cx;
}
function Xs({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function Zs(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Qs(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else if (e < n) {
    let t = r[e + 1];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  }
}
function $s(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function ec(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function tc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t && t.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t && t.transition) return t.transition.enter;
    }
}
function nc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t && t.transition.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t && t.transition.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return cx;
}
function rc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function ic(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function ac(e) {
  return k.Children.map(e.component, (t) => {
    if (!ea(t) || !$i(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? R(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      k.cloneElement(t, n)
    );
  });
}
function oc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function sc(e) {
  let t = Ze(),
    n = j();
  return _(sx, { ...e, resetProjection: t, skipLayoutAnimation: n, children: e.children });
}
function cc(e, t = null) {
  let n;
  if (
    (t instanceof HTMLElement && (n = t),
    !n && e.target instanceof HTMLElement && (n = e.target),
    !n)
  )
    return { x: e.pageX, y: e.pageY };
  if (typeof K.webkitConvertPointFromPageToNode == `function`) {
    let t = new K.WebKitPoint(e.pageX, e.pageY);
    return ((t = K.webkitConvertPointFromPageToNode(n, t)), { x: t.x, y: t.y });
  }
  let r = n.getBoundingClientRect(),
    i = parseFloat(n.style.width),
    a = parseFloat(n.style.height),
    o = { x: i ? i / r.width : 1, y: a ? a / r.height : 1 };
  return {
    x: o.x * (e.pageX - r.left - n.clientLeft + n.scrollLeft),
    y: o.y * (e.pageY - r.top - n.clientTop + n.scrollTop),
  };
}
function lc(e) {
  var t;
  let n =
    ((t = class extends k.Component {
      constructor() {
        (super(...arguments),
          M(this, `shouldCancelTap`, !1),
          M(this, `activeEventListeners`, new Map()),
          M(this, `hasFramerEventListener`, !1),
          M(this, `component`, k.createRef()));
      }
      get element() {
        return this.component.current && this.component.current.element;
      }
      componentDidMount() {
        this.addEventListeners();
      }
      componentDidUpdate(e) {
        this.addEventListeners(e);
      }
      componentWillUnmount() {
        this.removeEventListeners();
      }
      addEventListeners(e) {
        this.element && !this.hasFramerEventListener
          ? (this.element.addEventListener(`FramerEvent`, ({ detail: e }) => {
              let t = e.type,
                n = e.event;
              this.handleEvent(t, n);
            }),
            mx.forEach((e) => this.addHoverEvent(e)),
            (this.hasFramerEventListener = !0))
          : this.element && e
            ? mx.forEach((t) => this.checkHoverEvent(t, e))
            : this.element || (this.hasFramerEventListener = !1);
      }
      removeEventListeners() {
        mx.forEach((e) => this.removeHoverEvent(e));
      }
      addHoverEvent(e) {
        let t = this.props[e];
        if (this.element && t) {
          let n = (e) => {
            t(new dx(e));
          };
          this.activeEventListeners.set(e, n);
          let r = px[e];
          this.element.addEventListener(r, n);
        }
      }
      removeHoverEvent(e) {
        let t = this.activeEventListeners.get(e);
        if (this.element && t) {
          let n = px[e];
          (this.element.removeEventListener(n, t), this.activeEventListeners.delete(e));
        }
      }
      checkHoverEvent(e, t) {
        t[e] !== this.props[e] && (this.removeHoverEvent(e), this.addHoverEvent(e));
      }
      handleEvent(e, t) {
        let n = hx[e];
        n &&
          n.forEach((e) => {
            let n = this.props[e],
              r = this.shouldCancelTap && gx.has(e);
            n && !r && n(t);
          });
      }
      render() {
        return _(fx.Consumer, {
          children: (t) => (
            (this.shouldCancelTap = t.dragging),
            _(e, { ...this.props, ref: this.component })
          ),
        });
      }
    }),
    M(t, `defaultProps`, Object.assign({}, e.defaultProps)),
    t);
  return ((0, ux.default)(n, e), n);
}
function uc(e, t) {
  !e.blendingMode || e.blendingMode === `normal` || (t.mixBlendMode = e.blendingMode);
}
function dc(e) {
  return Sx in e;
}
function fc(e, t) {
  if (!dc(e)) return;
  let n = q.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function pc(e, t) {
  e.overflow && (t.overflow = e.overflow);
}
function mc(e) {
  return Cx in e;
}
function hc(e) {
  let t = Number(e);
  return typeof e == `string` && Number.isNaN(t)
    ? e
    : (V(e) && (t = q.getNumber(e)), t ? `${t}px` : `0`);
}
function gc(e) {
  return e && e !== `0`;
}
function _c(e, t) {
  if (!mc(e)) return;
  let { radius: n } = e;
  if (typeof n == `string` || V(n) || H(n)) {
    let e = hc(n);
    gc(e) &&
      (t.borderTopLeftRadius =
        t.borderTopRightRadius =
        t.borderBottomRightRadius =
        t.borderBottomLeftRadius =
          e);
  } else if (n) {
    let e = hc(n.topLeft),
      r = hc(n.topRight),
      i = hc(n.bottomRight),
      a = hc(n.bottomLeft);
    (gc(e) || gc(r) || gc(i) || gc(a)) &&
      ((t.borderTopLeftRadius = e),
      (t.borderTopRightRadius = r),
      (t.borderBottomRightRadius = i),
      (t.borderBottomLeftRadius = a));
  }
}
function vc(e, t) {
  let { color: n } = e;
  typeof n == `string`
    ? (t.color = n)
    : J.isColorObject(n) && (t.color = n.initialValue || J.toRgbString(n));
}
function yc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function bc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function xc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => Tx.toCSS(e)).join(`, `);
  n && (t.boxShadow = n);
}
function Sc(e, t) {
  let n = [];
  (H(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    H(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    H(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    H(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    H(e.invert) && n.push(`invert(${e.invert / 100})`),
    H(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    H(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    H(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...yc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Cc(e, t) {
  H(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function wc(e, t) {
  (Cc(e, t), Sc(e, t));
}
function Tc(e, t, n = !1) {
  (Qo(e, t), _c(e, t), wc(e, t), uc(e, t), pc(e, t), fc(e, t), vc(e, t), n ? bc(e, t) : xc(e, t));
}
function Ec(e, t) {
  return (typeof t == `string` && (t = parseFloat(t)), H(t) ? t : Ex(e));
}
function Dc(e, t, n) {
  let r = n,
    i = typeof t.x == `number` ? `${t.x}px` : t.x,
    a = typeof t.y == `number` ? `${t.y}px` : t.y,
    o = Ex(e.z),
    s = Ex(e.scaleZ),
    c = Ex(e.originZ),
    l = Ec(e.rotationZ, N(r.rotateZ)),
    u = Ec(e.rotationX, N(r.rotateX)),
    d = Ec(e.rotationY, N(r.rotateY)),
    f = Ex(e.scale),
    p = Ex(e.scaleX),
    m = Ex(e.scaleY),
    h = Ex(e.skew),
    g = Ex(e.skewX),
    _ = Ex(e.skewY),
    v = Ec(e.rotation, N(r.rotate));
  uv.target === Y.export || o !== 0 || s !== 1 || c !== 0 || l !== 0 || u !== 0 || d !== 0
    ? (n.transform = `
            ${`translate3d(${i}, ${a}, ${o}px)`}
            scale3d(${p * f}, ${m * f}, ${s})
            skew(${h}deg,${h}deg)
            skewX(${g}deg)
            skewY(${_}deg)
            translateZ(${c}px)
            rotateX(${u}deg)
            rotateY(${d}deg)
            rotateZ(${(v + l).toFixed(4)}deg)
            translateZ(${-c}px)`)
    : (n.transform = `
            ${`translate(${i}, ${a})`}
            scale(${p * f}, ${m * f})
            skew(${h}deg,${h}deg)
            skewX(${g}deg)
            skewY(${_}deg)
            rotate(${v.toFixed(4)}deg)`);
  let y = `${Ex(e.originX) * 100}% ${Ex(e.originY) * 100}%`;
  ((n.transformOrigin = y), (n.WebkitTransformOrigin = y));
}
function Oc(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `100% 100%`;
    default:
      return `cover`;
  }
}
function kc(e, t) {
  let n = wo(e);
  n &&
    ((t.backgroundImage = `url("${n.src}")`),
    (t.backgroundSize = Oc(n.fit)),
    (t.backgroundRepeat = `no-repeat`),
    (t.backgroundPosition = `center`));
}
function Ac(e) {
  return H(e) ? `${e}px` : e;
}
function jc(e, t, n) {
  if (t[n] !== void 0) {
    let r = q.get(t[n], void 0);
    Xy(e)[n] = Ac(r);
  }
}
function Mc(e) {
  return _(`div`, {
    style: Object.assign(
      {},
      {
        height: `100%`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        fontFamily: `Helvetica`,
      },
      e.style || {}
    ),
    children: e.children,
  });
}
function Nc(e) {
  for (let t in e) if (V(e[t])) return !0;
  for (let t of kx) if (e.hasOwnProperty(t)) return !1;
  for (let t of Ax) if (e.hasOwnProperty(t)) return !0;
  return !1;
}
function Pc(e, t) {
  let n,
    r = (...r) => {
      (K.clearTimeout(n), (n = K.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      K.clearTimeout(n);
    }),
    r
  );
}
function Fc(e, t = 2) {
  let n = 0;
  if (typeof e == `number`) n = e;
  else if (typeof e == `string`) n = parseFloat(e);
  else return;
  if (Number.isInteger(n)) return n;
  let r = 1;
  for (; t-- > 0; ) r *= 10;
  return (n < 0 && (r *= -1), Math.round(n * r) / r);
}
function Ic(e) {
  if (e === `none`) return null;
  let t = e
      .trim()
      .split(/\s+/)
      .map((e) => Fc(e)),
    [n, r, i, a] = t;
  switch (t.length) {
    case 1:
      return H(n) ? { top: n, right: n, bottom: n, left: n } : null;
    case 2:
      return !H(n) || !H(r) ? null : { top: n, right: r, bottom: n, left: r };
    case 3:
      return !H(n) || !H(r) || !H(i) ? null : { top: n, right: r, bottom: i, left: r };
    case 4:
      return !H(n) || !H(r) || !H(i) || !H(a) ? null : { top: n, right: r, bottom: i, left: a };
    default:
      return null;
  }
}
function Lc(...e) {
  return e.filter(Boolean).join(` `);
}
function Rc() {
  let e = k.useContext(Fx);
  return !Number.isNaN(e.update);
}
function zc(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = Bc(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function Bc(e) {
  if (e.startsWith(Lx)) return e.substr(Rx);
}
function Vc(e, t, n) {
  let r = p.map(e, (e) => (y(e) ? w(e, t) : e));
  return n ? r : _(D, { children: r });
}
function Hc(e) {
  let t = Yi(() => Uc(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Uc(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Wc(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Wc(t)));
    },
    r = !1;
  function i(i, a) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      p.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      p.map(i, (e) => {
        if (y(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Qe(a) ? a(e.props) : a;
          return w(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let a = function (e, t) {
    return _(D, { children: i(e, t) });
  };
  return (
    (a.cloneAsArray = i),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: a,
    }
  );
}
function Wc(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (fs(n, e), fs(t, e));
  };
}
function Gc(e, t, n, r, i, a, o, s) {
  let c = k.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !k.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !Yc(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = Jc([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = Jc([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = e.join(`+`),
      d = _(
        Bx.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = qc(e, a, r);
    (f.length
      ? (z(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = _(
          `div`,
          { className: `${Vx} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : z(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    z(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, _(`div`, { className: Hx }, `property-overrides-separator`)]
  );
}
function Kc(e) {
  return e.split(`-`)[2];
}
function qc(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${Kc(a)}`);
  }
  return r;
}
function Jc(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Yc(e, t) {
  for (let n of Object.keys(t)) if (!Dt(e[n], t[n], !0)) return !0;
  return !1;
}
function Xc(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Zc(e) {
  return k.forwardRef(({ optimized: t, ...n }, r) => {
    let i = k.useContext(zx),
      a = k.useContext(Bx)?.variants,
      o = n[Zx];
    o && !Pa() && Yx.setAll(o, a, t ? n : null, i);
    let s = $x(n);
    return _(e, { ref: r, ...n, ...s });
  });
}
function Qc(e) {
  return I(e) || Array.isArray(e);
}
function $c(e) {
  return e in nS;
}
function el(e, t) {
  let n = Yi(() => ({ values: tS(t ? e : void 0) }));
  return (
    k.useEffect(() => {
      if (!t)
        for (let e of eS) {
          let t = nS[e];
          nt(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function tl(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: a,
    loopPauseOffscreen: o,
  },
  u
) {
  let d = ye(),
    f = Yi(tS),
    p = l(!1),
    m = oS(),
    h = l(null),
    g = s(async () => {
      if (!a) return;
      let e = n || void 0,
        t = p.current && r === `mirror`,
        i = t ? nS : a,
        o = t ? a : nS;
      return (
        (p.current = !p.current),
        (h.current = Promise.all(
          eS.map((t) => {
            if (!(d && t !== `opacity`))
              return (
                f[t].jump(o[t] ?? nS[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    a = i[t] ?? o[t];
                  typeof a == `number` && je(f[t], a, r);
                })
              );
          })
        )),
        h.current
      );
    }, [a, r, n, d]),
    [_, v] = i(!1),
    y = l(!1),
    b = s(async () => {
      !e || !y.current || (await g(), await m(t ?? 0), b());
    }, [g, m, e, t]),
    x = s(() => {
      y.current || ((y.current = !0), O(() => v(!0)), b());
    }, [b]),
    S = s((e = !0) => {
      (eS.forEach((e) => {
        f[e].stop();
      }),
        eS.forEach((e) => {
          f[e].set(nS[e]);
        }),
        (p.current = !1),
        e && ((y.current = !1), O(() => v(!1))));
    }, []),
    w = e && a,
    T = s(() => {
      document.hidden ? S(!1) : y.current && ((y.current = !1), x());
    }, [x, S]);
  (c(() => {
    if (w)
      return (
        document.addEventListener(`visibilitychange`, T),
        () => {
          document.removeEventListener(`visibilitychange`, T);
        }
      );
  }, [w, T]),
    c(() => {
      (w && o) || (w ? x() : S());
    }, [x, S, o, w]),
    c(() => () => S(), [S]));
  let ee = l(!1),
    E = s(async () => {
      h.current && (await h.current, !ee.current && S());
    }, [S]);
  Wb(
    u,
    s(
      (e) => {
        e.isIntersecting ? ((ee.current = !0), x()) : ((ee.current = !1), E());
      },
      [x, E]
    ),
    { enabled: w && o }
  );
  let D = _ || !o;
  return C(() => ({ values: f, style: w && D ? rS : iS }), [w, D]);
}
function nl(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function rl(e, n, r) {
  let { speed: i = 100, offset: a = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e,
    c = k.useRef(null),
    l = ye(),
    u = k.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : nl(e, c.current, i, a, o)),
      [i, a, o]
    ),
    { scrollY: d } = oe(),
    f = fe(d, u),
    p = pe(o && c.current === null ? `hidden` : r),
    m = pe(0),
    h = t(Ub);
  return (
    gs(
      n,
      (e) => {
        if (e === null || !s) return;
        let t = _s(h, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            Ne.update(() => {
              (f.set(u(d.get())), o && p.set(r ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s]
    ),
    Pt(() => {
      s && f.set(0);
    }),
    { values: { y: l || !s ? m : f }, style: s ? { ...rS, visibility: p } : iS }
  );
}
function il(e) {
  return typeof e == `object` && !!e;
}
function al(e) {
  if (il(e)) return e?.transition;
}
function ol(e, t, n, r, i, a) {
  let o = al(e);
  return Promise.all(
    eS.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = il(e) ? (e?.[s] ?? nS[s]) : nS[s];
          if ((De(u) && (u = u.get()), !L(u))) return c();
          let d = xe.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (I(i) && !l?.hasAnimated && K.MotionHandoffAnimation) {
            let e = K.MotionHandoffAnimation(i, s, Ne);
            e && (f = e);
          }
          a ? l.set(u) : je(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function sl(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  u
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = ge(),
    g = l({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = Yi(() => {
      let e = d ?? c;
      if (!R(e)) return { values: tS() };
      let t = {};
      for (let n in e) {
        let r = R(e) ? e[n] : void 0;
        L(r) && (t[n] = r);
      }
      return { values: tS(t) };
    });
  gs(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = xe.get(e);
      if (n)
        for (let e in (Object.assign(g.current, { hasMounted: !0 }), _.values)) {
          if (!$c(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, L(t) ? t : nS[e]);
        }
    },
    [f]
  );
  let v = ye();
  gs(o, (e) => {
    if (!s) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            ol(f, _, v, o, u).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              ol(p, _, v, o, u)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    Dt(f, t) ||
      !f ||
      (Object.assign(g.current, { lastAnimate: f }),
      ol(f, _, v, o, u, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = s && f;
  return C(() => ({ values: _.values, style: y ? rS : iS }), [y]);
}
function cl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; ) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function ll(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = cl(o.current, document.documentElement) - lS - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function ul(e, t = 0) {
  return e < t ? `up` : `down`;
}
function dl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Nt();
  k.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return le((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = ul(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < uS) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function fl(e, t, n) {
  let r = ll(e, t),
    i = [...fS],
    a = r[0];
  if (!L(a)) return pS;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!L(e)) return pS;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function pl(e) {
  return {
    x: e?.x ?? nS.x,
    y: e?.y ?? nS.y,
    scale: e?.scale ?? nS.scale,
    opacity: e?.opacity ?? nS.opacity,
    transformPerspective: e?.transformPerspective ?? nS.transformPerspective,
    rotate: e?.rotate ?? nS.rotate,
    rotateX: e?.rotateX ?? nS.rotateX,
    rotateY: e?.rotateY ?? nS.rotateY,
    skewX: e?.skewX ?? nS.skewX,
    skewY: e?.skewY ?? nS.skewY,
    transition: e?.transition ?? void 0,
  };
}
function ml({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return k.useMemo(
    () => ({
      initial: r ?? pl({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? pl({ opacity: t }),
      exit: i ?? pl(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function hl(e, t) {
  let n = ye(),
    r = ml(e),
    i = e.styleAppearEffectEnabled,
    a = el(i ? r.initial : r.animate, i),
    o = k.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Nt(),
    c = k.useRef(),
    l = k.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = xe.get(t.current);
      c.current = Promise.all(
        eS.map((e) => {
          s && a.values[e].set(r.initial[e] ?? nS[e]);
          let t = o[e] ?? nS[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (L(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && je(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    u = e.animateOnce && o.current.lastAppearState === !0;
  ys(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && l(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !u,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let d = e.targets && i && !e.scrollDirection;
  return (
    k.useEffect(() => {
      if (!d) return;
      let t = { initial: !0 },
        n = `initial`;
      return le((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = fl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = Ie(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = Xy(r)[u];
        d && l(d);
      });
    }, [s, d]),
    dl(e.scrollDirection, (e) => void l(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Pt(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of eS) a.values[e].set(r.initial?.[e] ?? nS[e]);
    }),
    C(() => ({ values: a.values, style: i ? rS : iS }), [i])
  );
}
function gl(e, t) {
  let n = k.useRef({});
  k.useEffect(() => {
    if (t !== void 0)
      for (let r of Jh(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Ve({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), Ne.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function _l(e, t) {
  let n = gS();
  return {
    inputRange: ll(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of eS) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function vl(e) {
  let t = gS();
  for (let { target: n } of e) for (let e of eS) t[e]?.push(n[e]);
  return t;
}
function yl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = ye(),
    s = el(hS(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = Nt();
  return (
    f(() => {
      if (!(c || !l))
        return le((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = _l(n, i * t.containerLength);
          if (r.length !== 0)
            for (let e of eS)
              (o && e !== `opacity`) ||
                (r.length === a[e].length &&
                  a[e][0] !== void 0 &&
                  s.values[e].set(Ie(t.current, r, a[e])));
        });
    }, [o, l, i, n, c]),
    gs(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = vl(n);
        return le(
          (e, { y: t }) => {
            for (let e of eS)
              (o && e !== `opacity`) ||
                (_S.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  s.values[e].set(Ie(t.progress, _S, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    gl(s.values, r),
    Pt(() => {
      if (c) return;
      let e = hS(n, o);
      for (let t of eS) s.values[t].set(e?.[t] ?? nS[t]);
    }),
    k.useMemo(() => ({ values: s.values, style: t ? rS : iS }), [t])
  );
}
function bl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function xl(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Bc(n);
    if (r) {
      for (let i of yS)
        if (vS[i]?.has(r)) {
          t[i][r] = Xy(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Xy(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = bl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = bl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Sl(e) {
  return R(e) && SS in e;
}
function Cl(e, t) {
  if (!e || !R(e)) return t;
  for (let n in e) {
    let r = e[n];
    !De(r) || !$c(n) || (L(r.get()) && t[n].push(r));
  }
}
function wl(e) {
  return I(e) || Array.isArray(e);
}
function Tl({ presets: e, children: t }) {
  let n = l(e);
  return (
    Dt(e, n.current, !1) || (n.current = e),
    _(wS.Provider, { value: n.current, children: t })
  );
}
function El({ componentIdentifier: e, children: n }) {
  return n(t(wS)[e] ?? {});
}
function Dl() {
  return k.useContext(TS);
}
function Ol(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function kl() {
  if (A === void 0 || OS)
    return _(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw AS;
}
function Al({ children: e }) {
  return t(MS) ? _(D, { children: e }) : _(ee, { fallback: jS, children: e });
}
function jl() {
  return _(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Ml(e, t) {
  if (!Rh || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  rn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Nl(...e) {
  console.error(...e);
}
function Pl() {
  return Y.current() !== Y.canvas;
}
function Fl({ getErrorMessage: e, fallback: t, children: n }) {
  return Pl()
    ? _(Il, { fallback: t, children: _(PS, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Il({ children: e, fallback: t = NS }) {
  return A === void 0 ? _(ee, { fallback: t, children: e }) : _(Al, { children: e });
}
function Ll() {
  return k.useContext(IS);
}
function Rl() {
  let e = Ll();
  return k.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0; ) t = t.parent;
    return t;
  }, [e]);
}
function zl({ children: e, scopeId: t, nodeId: n }) {
  let r = Ll(),
    i = k.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return _(IS.Provider, { value: i, children: e });
}
function Bl(e, t) {
  return `${LS}${e}:${t}`;
}
function Vl(e, t) {
  return Ul(`component`, e, t);
}
function Hl(e, t) {
  return Ul(`override`, e, t);
}
function Ul(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Bl(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function Wl(e, t, n, r, i, a) {
  let o = Kl(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function Gl(e, t, n, r) {
  return Kl(e, t, n, r);
}
function Kl(e, t, n, r) {
  return !!(nt(n) || (n === 1 && r && e === t));
}
function ql(e, t, n, r, i, a) {
  let o = Ll(),
    { disableCustomCode: s } = tg();
  return nt(t) || nt(n)
    ? _(FS, { children: e })
    : s && r
      ? _(`div`, {
          style: {
            padding: `12px 16px`,
            borderWidth: 1,
            borderRadius: 6,
            borderStyle: `solid`,
            borderColor: `rgba(149, 149, 149, 0.15)`,
            backgroundColor: `rgba(149, 149, 149, 0.1)`,
            fontSize: 12,
            color: `#a5a5a5`,
          },
          children: `Code component disabled`,
        })
      : (Wl(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
          (e = _(Fl, { getErrorMessage: Vl.bind(null, t, n), fallback: null, children: e })),
        i && (e = _(zl, { scopeId: t, nodeId: n, children: e })),
        e);
}
function Jl(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function Yl(e) {
  return !(!e || e.placement || e.alignment);
}
function Xl(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      B(e);
  }
}
function Zl(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${Xl(t)}, -100%`;
    case `right`:
      return `0%, ${Xl(t)}`;
    case `bottom`:
      return `${Xl(t)}, 0%`;
    case `left`:
      return `-100%, ${Xl(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Ql(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(KS)) {
      let e = n.getAttribute(KS);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function $l(e) {
  let { registerCursors: n } = t(BS),
    r = Yi(() => e),
    i = re();
  f(() => n(r, i), [n, i]);
}
function eu(e) {
  return !!(e && typeof e == `object` && JS in e);
}
function tu(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function nu() {
  return Y.current() === Y.canvas;
}
function ru(e) {
  return e === void 0 ? !1 : !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function iu(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function au(e, t, n, r) {
  if (I(e)) {
    let i = ru(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = Wr(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function ou(e) {
  return I(e) && e.startsWith(`data:${tC}`);
}
function su(e) {
  if (ou(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(tC.length),
        r = t.searchParams,
        i = r.has(ZS) ? r.get(ZS) : void 0,
        a,
        o = r.get(QS),
        s = r.get($S),
        c = r.get(eC);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function cu(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = su(e);
    if (!n || !n.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function lu(e) {
  if (!ou(e)) return e;
  let t = su(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: uu(i) };
}
function uu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function du({ children: e }) {
  return _(nC.Provider, { value: void 0, children: e });
}
function fu(e, n, r, i, a, o) {
  let c = t(nC),
    l = Rl(),
    u = C(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: l }), [n, r, l]),
    d = At(),
    f = Mt(),
    { locales: m } = yr(),
    h = C(() => {
      let e = eu(i) ? i : lu(i);
      if (e) return au(e, d, f, m);
    }, [f, i, d, m]),
    g = !!(!nu() && c?.nodeId && u.nodeId),
    v = s(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), Ba(e))) {
            hu(a.href, ``, `_blank`);
            return;
          }
          h ? a.navigate?.() : hu(a.href, a.rel, a.target);
        }
      },
      [a, h]
    ),
    y = s(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), hu(a.href, ``, `_blank`));
      },
      [a]
    ),
    b = s(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          h ? a.navigate?.() : hu(a.href, a.rel, a.target));
      },
      [a, h]
    );
  gs(
    o,
    (e) => {
      e !== null && g && (e.dataset.hydrated = `true`);
    },
    [g]
  );
  let x = e;
  return (
    g &&
      (p.forEach(e, (e) => {
        mu(e) &&
          (z(
            pu(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          z(
            pu(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          XS.collectNestedLink(c, u));
      }),
      (x = p.map(e, (e) => {
        if (!mu(e)) return e;
        let t = gu(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: v,
            onAuxClick: y,
            onKeyDown: b,
            as: r.as && gu(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return te(t, { ...i, ref: a }, n);
      }))),
    _(nC.Provider, { value: u, children: x })
  );
}
function pu(e) {
  return !nt(e?.nodeId);
}
function mu(e) {
  return y(e) && (gu(e.type) !== e.type || gu(e.props.as) !== e.props.as);
}
function hu(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function gu(e) {
  return e === `a` ? `span` : Xe(e) && Fe(e) === `a` ? be.span : e;
}
function _u(e) {
  e &&
    Ne.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      Ne.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(rC, r)),
          i && t.forEach((e) => e.style.setProperty(iC, i)));
      });
    });
}
function vu(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${rC});
    background-color: var(${iC});
}`,
  ];
}
function yu({ triggerId: e, children: t }) {
  return (
    k.useLayoutEffect(() => {
      e && _u(e);
    }, [e]),
    t
  );
}
function bu({ component: e, props: n }) {
  let r = t(zx),
    i = te(e, n);
  if ((`variant` in n && n.variant != null) || !r) return i;
  let { activeVariantId: a, humanReadableVariantMap: o } = r;
  if (!a || !o) return i;
  let s = {};
  for (let [e, t] of Object.entries(o)) s[t] = { variant: e };
  return _(Wx, { overrides: s, breakpoint: a, children: i });
}
function xu(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : xu(e.parentElement, t)
      : null;
}
function Su({ children: e }) {
  return _(Al, { children: e });
}
function Cu(e) {
  return m(function (t, n) {
    return _(Su, { children: _(e, { ...t, ref: n }) });
  });
}
function wu(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Eu(e, t, o, s, a, c, l, i, r);
}
function Tu(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && ru(t))
    try {
      let [i, a] = t.split(`#`, 2);
      z(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      z(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = Wr(e.routes, o, void 0, r),
        u = e.getRoute(s);
      if (u)
        return {
          routeId: s,
          route: u,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, c),
          locale: l ? r?.find(({ id: e }) => e === l) : void 0,
        };
    } catch {}
}
function Eu(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = cr(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Du() {
  let e = t(uC),
    n = Mt()?.pathVariables;
  return e || n;
}
function Ou(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(lC)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function ku() {
  let e = d.connection || d.mozConnection || d.webkitConnection || {},
    t = d.deviceMemory && d.deviceMemory > pC,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? mC : hC));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: fC }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = vC.get(n);
    if (!a?.size || _C.has(n)) return;
    (++s, _C.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), gC.delete(t));
    for (let e of a) (o.unobserve(e), gC.delete(e));
    (a.clear(), vC.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = gC.get(e);
      if (!n || _C.has(n.id)) {
        (o.unobserve(e), gC.delete(e));
        continue;
      }
      let r = n.id,
        a = vC.get(r),
        l = vC.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : vC.set(r, new Set([e])), setTimeout(c, dC, n, e));
      } else (a && a.delete(e), l <= 1 && vC.delete(r));
    }
  }
  return (e, t, n) => {
    if (!_C.has(n))
      return (
        gC.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (gC.delete(e), o.unobserve(e));
        }
      );
  };
}
function Au(e, t) {
  let n = ru(e),
    r = {
      href: e === `` || iu(e, n) ? e : `https://${e}`,
      target: ju(t?.openInNewTab, n),
      rel: n ? void 0 : Mu(`noopener`, t?.rel),
    };
  return (
    t?.preserveParams && ((r.href = An(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function ju(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Mu(e, t) {
  if (e && !t) return e;
  if (!e && t) return t;
  if (e && t) return `${e} ${t}`;
}
function Nu(e, t) {
  console.warn(
    dt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Pu(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Nu(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return ct(i) ? i.catch(Nu) : i;
  } catch (e) {
    Nu(e);
  }
}
function Fu(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Pu(o, r, n);
      ct(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Iu() {
  let e = hn();
  return s((t, n, r, i = []) => Fu(t, n, r, e, i), [e]);
}
function Lu({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = hn();
  return s(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = eu(r) ? r : lu(r);
      if (!eu(c))
        return rn(
          `published_site_click`,
          {
            ...s,
            href: o ? Ru(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (I(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (ct(n) ? await n : n) ?? null;
        }
      }
      return rn(
        `published_site_click`,
        {
          ...s,
          href: o ? Ru(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function Ru(e) {
  try {
    let t = new URL(e, K.document.baseURI);
    return t.origin === K.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function zu(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Bu(e, t, n) {
  return async (r) => {
    let i = Ba(r),
      a = xu(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await bn({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function Vu(e, t, n, r, i, a, o, s) {
  if (!n) return Au(e, r);
  let c = Tu(t, e, s, o);
  if (!c) return Au(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Au(e, r);
  let m = cr(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !zh,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = ju(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => zu(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: Bu(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && Ou(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function Hu(e, t, n) {
  let r = Uu(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Qe(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Qe(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Uu(e, t) {
  let n = R(e) ? e : void 0,
    r = n && !tt(n),
    i = t && !tt(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Wu(e, t, n) {
  if (!(t && Oa())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: Gu } : { ...i, onTap: r }) : e;
}
function Gu(e) {
  let t = xu(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Ku(e, t, n, r, i, a) {
  let o = eu(e) ? e : lu(e);
  if (!eu(o)) return I(e) ? Au(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (ct(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash),
    v = cr(m, {
      currentRoutePath: s?.path,
      currentRoutePathLocalized: s?.pathLocalized,
      currentPathVariables: t.currentPathVariables,
      hash: l,
      pathVariables: g,
      hashVariables: _,
      relative: !1,
      preserveQueryParams: t.preserveQueryParams,
      onlyHash: r,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: i?.id,
    });
  return r ? v : (i?.slug ? `/${i.slug}` : ``) + v;
}
function qu({ EditorBar: e, fast: n = !1 }) {
  let r = tg(),
    i = t(xC),
    a = g(Hh, n ? wC : TC, Wh),
    o = C(() => {
      let e = {},
        t;
      for (t in r)
        r.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = r[t]);
      return e;
    }, [r]);
  return !e || !i || !a
    ? null
    : _(CC, { children: _(ee, { children: _(e, { framerSiteId: i, features: o }) }) });
}
function Ju({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = l(),
    a = l(),
    o = l(t),
    s = l(null);
  ((o.current = t),
    c(() => {
      e && ((r.current ??= new Set()), r.current.add(e), a.current?.(e));
    }, [e]));
  let [u] = i(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        o.current ? Xu(o.current, o.current.currentRouteId, o.current.currentPathVariables) : ``,
      resolveRoute: (e) => (o.current ? Xu(o.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        a.current = e;
      },
      sendTrackingEvent: async (e) => {
        o.current && Yu(o.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: s,
  }));
  return _(EC.Provider, { value: u, children: n });
}
async function Yu(e, t) {
  if (!an(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    rn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Xu(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? kn(r.path, n) : r.path;
}
function Zu({ children: e, loadSnippetsModule: t }) {
  return _(LC.Provider, { value: t, children: e });
}
function Qu() {
  return k.useContext(LC);
}
function $u(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function ed(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (z(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (z(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      B(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await td(a.createContextualFragment(e), r, i));
}
async function td(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = nd(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await td(r, e, null)));
  }
}
function nd(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return rd(r, t, n);
}
function rd(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function id(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = NC), (n = PC));
      break;
    case `bodyEnd`:
      ((t = FC), (n = IC));
      break;
    case `headStart`:
      ((t = kC), (n = AC));
      break;
    case `headEnd`:
      ((t = jC), (n = MC));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function ad(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = $u(e),
    s = t.nextSibling;
  for (; s && s !== n; ) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function od(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = id(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = ad(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((sd(t, o), s)) {
      await ed(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = $u(e.id),
      u = `${c}
${e.code}
${l}`,
      d = ld(e.id, n, r, i);
    d ? await ed(u, d, `afterend`) : await ed(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function sd(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t; ) {
    let e = n.nextSibling;
    (cd(n) && n.remove(), (n = e));
  }
}
function cd(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function ld(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = ad(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function ud() {
  let e = Qu();
  return s(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(DC),
        o = a && a.dataset[OC] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await od(t, n, r);
      }
    },
    [e]
  );
}
function dd(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function fd() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((RC = e.timeZone), (zC = e.locale));
}
function pd() {
  let [e, t] = k.useState(0);
  return [e, k.useCallback(() => t((e) => e + 1), [])];
}
function md(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    bd(r, t);
    return;
  }
  n || A.scrollTo(0, 0);
}
function hd(e) {
  let t = l([]);
  return (
    f(() => {
      t.current?.length && (t.current.forEach((e) => e()), (t.current = []));
    }, [e]),
    s((e) => {
      t.current.push(e);
    }, [])
  );
}
function gd(e) {
  if (!e) return Lh;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function _d() {
  let e = fr(),
    t = l(void 0);
  return s(
    async (n, r, i, a = !0) => {
      let o = i !== void 0;
      t.current?.abort();
      let s = a ? new AbortController() : void 0;
      t.current = s;
      let c = s?.signal,
        l = Lt(c);
      if ((r.promise.finally(l), !o)) return ((t.current = void 0), n(c), r.promise);
      n(c);
      let u;
      if (
        (e(
          new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(Lh),
          i,
          s
        ),
        await r.promise,
        c?.aborted)
      )
        return;
      let d = A.navigation?.transition;
      u();
      try {
        await d?.finished;
      } catch (e) {
        console.error(`Navigation transition failed`, e);
      }
      c?.aborted || Zg();
    },
    [e]
  );
}
function vd({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: a,
  routes: o,
  initialLocaleId: d,
  initialCollectionItemId: p,
  locales: m = Qh,
  preserveQueryParams: h = !1,
  LayoutTemplate: g,
  EditorBar: v,
  siteCanonicalURL: y,
  adaptLayoutToTextDirection: b,
}) {
  (Ir(), ar({ disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: d }));
  let x = Zn(),
    [S, w] = pd(),
    ee = hd(S),
    E = _d(),
    D = er(`framer-route-change`),
    { synchronousNavigationOnDesktop: te } = tg(),
    ne = C(() => (!te || !za() ? O : (e) => e()), [te]),
    k = ud(),
    re = l(!0),
    ie = l(),
    ae = l(r),
    oe = l(n),
    se = l(d),
    ce = se.current,
    le = C(() => m.find(({ id: e }) => (ce ? e === ce : e === ng)) ?? null, [ce, m]),
    ue = le?.textDirection ?? `ltr`,
    de = b ? ue : `ltr`;
  f(() => {
    b && document.documentElement.setAttribute(`dir`, ue);
  }, [ue, b]);
  let fe = ur(),
    pe = C(
      () => ({
        activeLocale: le,
        locales: m,
        setLocale: async (e) => {
          let t = D({ localized: !0 });
          await bn({ priority: `user-blocking`, continueAfter: `paint` });
          let n;
          I(e) ? (n = e) : R(e) && (n = e.id);
          let r = m.find(({ id: e }) => e === ng),
            i = m.find(({ id: e }) => e === n);
          if (!i) return;
          let a = ae.current,
            s = o[a];
          if (s)
            try {
              let e = await fe({
                currentLocale: le,
                nextLocale: i,
                route: s,
                routeId: a,
                defaultLocale: r,
                pathVariables: oe.current,
                preserveQueryParams: h,
              });
              if (!e) return;
              let n = nr(A.history.state) ? A.history.state.paginationInfo : void 0,
                o = e.path;
              ((re.current = !1),
                (oe.current = e.pathVariables),
                (se.current = i.id),
                E(
                  () => {
                    x(a, a, () => ne(w));
                  },
                  t,
                  async (t = !1) => {
                    if (o)
                      return ir(
                        {
                          routeId: a,
                          pathVariables: e.pathVariables,
                          localeId: i.id,
                          paginationInfo: n,
                        },
                        o,
                        t
                      );
                  },
                  !1
                ));
            } catch {}
        },
      }),
      [le, w, m, h, o, E, x, D, ne, fe]
    ),
    me = s(
      (e, t, n, r, i, a, o, s = !1, c) => {
        re.current = !1;
        let l = ae.current;
        if (
          ((ae.current = e),
          (oe.current = i),
          (se.current = t),
          (ie.current = r),
          ee(() => {
            md(n, s, a);
          }),
          a)
        ) {
          ne(w);
          return;
        }
        E(
          (t) => {
            x(l, e, () => ne(w), t);
          },
          o,
          c,
          !0
        );
      },
      [w, ee, E, x, ne]
    );
  or(ae, me);
  let he = s(
      async (e, n, r, i, a) => {
        let s = o[e],
          c = pt(s?.page) ? s.page.getStatus() : void 0,
          l = c?.hasRendered,
          u = D({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          d = gd(a);
        if (
          (bn({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await bn({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = s?.path ?? `/`;
          for (let n of t.matchAll(zg)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = It(s, n),
          p = oe.current,
          m = se.current;
        if (dd({ routeId: ae.current, pathVariables: p }, { routeId: e, pathVariables: r })) {
          u.ignore?.();
          let a = o[e];
          (A.history.state?.hash !== n &&
            !t &&
            a &&
            (d(),
            await tr(e, a, {
              currentRoutePath: a.path,
              currentPathVariables: p,
              pathVariables: r,
              hash: n,
              localeId: m,
              preserveQueryParams: h,
              siteCanonicalURL: y,
              currentRoutePathLocalized: a.pathLocalized,
            })),
            md(f, i, !1));
          return;
        }
        if (!s) return;
        let g = o[ae.current];
        me(
          e,
          m,
          f,
          Pn(y) +
            cr(s, {
              currentRoutePath: g?.path,
              currentRoutePathLocalized: g?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: m,
              preserveQueryParams: h,
              siteCanonicalURL: y,
              relative: !1,
            }),
          r,
          !1,
          u,
          i,
          t
            ? void 0
            : async (t = !1) => (
                d(),
                tr(
                  e,
                  s,
                  {
                    currentRoutePath: g?.path,
                    currentPathVariables: p,
                    currentRoutePathLocalized: g?.pathLocalized,
                    hash: n,
                    pathVariables: r,
                    localeId: m,
                    preserveQueryParams: h,
                    siteCanonicalURL: y,
                  },
                  t
                )
              )
        );
      },
      [o, me, t, h, y, D]
    ),
    ge = Ot(o),
    _e = ae.current,
    ve = ie.current,
    j = oe.current,
    M = o[_e],
    ye = M?.path,
    be = BC(M, _e, ve, j, le, p),
    N = re.current;
  c(() => {
    k(_e, j ?? {}, pe.activeLocale, N);
  }, [k, _e, j, pe, N]);
  let xe = C(
    () => ({
      navigate: he,
      getRoute: ge,
      currentRouteId: _e,
      currentPathVariables: j,
      routes: o,
      collectionUtils: a,
      preserveQueryParams: h,
      pageviewEventData: be,
      siteCanonicalURL: y,
      isInitialNavigation: N,
    }),
    [he, ge, _e, j, o, a, h, y, be, N]
  );
  if (!M) throw Error(`Router cannot find route for ${_e}`);
  let Se = !le || !M.includedLocales || M.includedLocales.includes(le.id),
    Ce = ye && j ? kn(ye, j) : ye,
    P = String(ce) + Ce,
    F = Yi(() => ({ ...e, display: `contents` }));
  return _(kt, {
    api: xe,
    children: _(o_.Provider, {
      value: pe,
      children: _(s_.Provider, {
        value: de,
        children: _(WS, {
          children: _(wr, {
            children: T(Ju, {
              currentRoutePath: Ce,
              routerAPI: xe,
              children: [
                v && _(qu, { EditorBar: v, fast: !0 }),
                _(kS, {
                  children: T(Al, {
                    children: [
                      T(L_, {
                        notFoundPage: i,
                        defaultPageStyle: e,
                        forceUpdateKey: S,
                        children: [
                          _(F_.Start, {}),
                          _(yd, {
                            LayoutTemplate: g,
                            webPageId: M?.abTestingVariantId ?? _e,
                            style: e,
                            children: (t) =>
                              _(u, { children: Se ? Vr(M.page, t ? F : e) : i && Vr(i, e) }, P),
                          }),
                        ],
                      }),
                      v && _(qu, { EditorBar: v }),
                      _(Mr, {}),
                      _(F_.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function yd({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? _(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function bd(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function xd(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function Sd(e) {
  return typeof e == `object` && !!e;
}
function Cd(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Sd(r)) return;
    r = r[e];
  }
  return r;
}
function wd(e) {
  return `${e.credentials}:${e.url}`;
}
function Td(e) {
  return I(e) && !Number.isNaN(Number(e));
}
function Ed(e, t) {
  switch (e) {
    case `string`:
      return I(t) || L(t);
    case `color`:
      return I(t);
    case `boolean`:
      return $e(t);
    case `number`:
      return L(t) || Td(t);
    case `link`:
    case `image`:
      return I(t) && iu(t, !1);
    default:
      return !1;
  }
}
function Dd(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = Cd(e.data, t.resultKeyPath);
  if (nt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Ed(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Od(e, t) {
  if (Y.current() === Y.canvas) return !1;
  let n = Math.max(t * 1e3, HC);
  return Date.now() >= e + n;
}
function kd(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    routes: s,
    collectionUtils: c,
    notFoundPage: l,
    isReducedMotion: u = !1,
    skipAnimations: d = !1,
    includeDataObserver: f = !1,
    localeId: p,
    locales: m,
    preserveQueryParams: h,
    EditorBar: g,
    defaultPageStyle: v,
    disableHistory: y,
    LayoutTemplate: b,
    siteCanonicalURL: x,
    adaptLayoutToTextDirection: S,
    loadSnippetsModule: C,
    initialCollectionItemId: w,
  } = e;
  return (
    k.useEffect(() => {
      n || lv.start();
    }, []),
    n
      ? _(hr, {
          value: r ?? `preview`,
          children: _(Pe, {
            reducedMotion: d ? `always` : u ? `user` : `never`,
            skipAnimations: d,
            children: _(mn, {
              collectionUtils: c,
              children: _(ew, {
                children: _(xC.Provider, {
                  value: a,
                  children: _(Zu, {
                    loadSnippetsModule: C,
                    children: _(vd, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialLocaleId: p,
                      initialCollectionItemId: w,
                      routes: s,
                      collectionUtils: c,
                      notFoundPage: l,
                      locales: m,
                      defaultPageStyle: v ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: h,
                      EditorBar: g,
                      disableHistory: y,
                      LayoutTemplate: b,
                      siteCanonicalURL: x,
                      adaptLayoutToTextDirection: S,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : _(f ? Ix : k.Fragment, {
          children: _(jt, {
            routes: s,
            children: _(lx, { children: k.isValidElement(t) ? t : k.createElement(t, { key: i }) }),
          }),
        })
  );
}
function Ad(e) {
  return {
    trace(...t) {
      return rb.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return rb.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return rb.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return rb.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return rb.getLogger(e)?.error(...t);
    },
    get enabled() {
      return rb.getLogger(e) !== void 0;
    },
  };
}
function jd(e) {
  let t = e.next();
  return (z(t.done, `Generator must not yield`), t.value);
}
async function Md(e, t = e.next()) {
  for (; !t.done; ) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function Nd(e) {
  let t = e.next();
  return t.done ? t.value : Md(e, t);
}
function* W(e) {
  let t = {},
    n = Object.keys(e),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (ot(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            Md(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function* Pd(e) {
  let t = [],
    n = e.keys(),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (ot(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            Md(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function Fd(e) {
  return Rd(e) || Vd(e);
}
function Id(e) {
  return et(e) && e.every(R);
}
function Ld(e) {
  return R(e) && Qe(e.read) && Qe(e.preload);
}
function Rd(e) {
  return Id(e) || Ld(e);
}
function zd(e) {
  return R(e) && R(e.schema);
}
function Bd(e) {
  return R(e) && R(e.collectionByLocaleId);
}
function Vd(e) {
  return zd(e) || Bd(e);
}
function Hd(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = vf(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Ud(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => Z.cast(e, t.definition)) };
  }
  return null;
}
function Wd(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Gd(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Kd(e) {
  return Gd(e)?.value ?? !1;
}
function qd(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Jd(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Yd(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Xd(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return at(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Zd(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Qd(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function $d(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function ef(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function tf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function nf(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function rf(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function af(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function of(e) {
  return af(e)?.value ?? null;
}
function sf(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = vf(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function cf(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = Z.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function lf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function uf(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function df(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function ff(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function pf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function mf(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function hf(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function gf(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function _f(e) {
  return gf(e)?.value ?? null;
}
function vf(e, t, n) {
  if (rt(e) || rt(t)) return (z(e === t), 0);
  switch (e.type) {
    case `array`:
      return (z(e.type === t.type), Hd(e, t, n));
    case `boolean`:
      return (z(e.type === t.type), Wd(e, t));
    case `color`:
      return (z(e.type === t.type), qd(e, t));
    case `date`:
      return (z(e.type === t.type), Yd(e, t));
    case `enum`:
      return (z(e.type === t.type), Zd(e, t));
    case `file`:
      return (z(e.type === t.type), $d(e, t));
    case `link`:
      return (z(e.type === t.type), tf(e, t));
    case `number`:
      return (z(e.type === t.type), rf(e, t));
    case `object`:
      return (z(e.type === t.type), sf(e, t, n));
    case `responsiveimage`:
      return (z(e.type === t.type), lf(e, t));
    case `richtext`:
      return (z(e.type === t.type), df(e, t));
    case `vectorsetitem`:
      return (z(e.type === t.type), pf(e, t));
    case `string`:
      return (z(e.type === t.type), hf(e, t, n));
    default:
      B(e);
  }
}
async function yf(e, t) {
  return Ld(e) ? (await e.preload(t), e.read(t)) : e;
}
function bf(e) {
  return e.includes(ow);
}
function xf(e) {
  if (!Vd(e) || !e.id) return;
  let t = iw.get(e.id);
  if (!t) return (iw.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Sf(e) {
  let t = xf(e);
  if (t) return t;
  let n = aw.get(e);
  if (n) return n;
  let r = `${ow}${Math.random().toString(16).slice(2)}`;
  return (aw.set(e, r), r);
}
function Cf(e, t) {
  if (Rd(e)) {
    let n = Sf(e) + (t?.id ?? ng),
      r = sw.get(n);
    if (r) return r;
    let i = new rw(e, t);
    return (sw.set(n, i), i);
  }
  if (zd(e)) return e;
  if (Bd(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  B(e, `Unsupported collection type`);
}
function wf() {
  return 25;
}
function Tf() {
  return 12500;
}
function Ef(e) {
  return e;
}
function Df(e) {
  return e;
}
function Of(e) {
  return R(e) && Qe(e.getHash);
}
function G(e, ...t) {
  return Df(
    `${e}(${t.map((e) => (z(!(e instanceof gw), `Pass CollectionMetadata.id instead`), z(!(e instanceof yw), `Pass FieldMetadata.id instead`), z(!(e instanceof _w), `Pass IndexMetadata.id instead`), z(!(e instanceof fw), `Pass RelationalNode.group.id instead`), z(!(e instanceof lw), `Pass Group.id instead`), Of(e) ? e.getHash() : JSON.stringify(e))).join(`, `)})`
  );
}
function kf(e, t) {
  return { collectionId: Sf(e), pointer: t };
}
function Af(e) {
  return R(e) && I(e.collectionId);
}
function jf(e, t) {
  return { collectionId: Sf(e), pointer: t };
}
function Mf(e) {
  return R(e) && I(e.collectionId);
}
function Nf(e, t) {
  let n = new Map();
  function r(e) {
    if (R(e))
      if (e.type === `Collection` && Fd(e.data)) {
        let r = Cf(e.data, t),
          i = Sf(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (et(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Pf(e) {
  return e;
}
function Ff(e) {
  return e;
}
function If(e) {
  return e;
}
function Lf(e) {
  return Array(e).fill({ type: `All` });
}
function Rf(e, ...t) {
  if (e) return;
  let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function zf(e) {
  let t = new Set();
  if (!e) return t;
  Rf(e.type === `array`, `ScalarIntersection expects an array, got:`, e.type);
  for (let n of e.value)
    n &&
      (Rf(
        n.type === `string`,
        `ScalarIntersection expects an array of strings, got an array with:`,
        n.type
      ),
      t.add(n.value));
  return t;
}
function Bf(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Vf(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Hf(e) {
  return `${e.functionName}(${e.arguments.map((e) => qf(e)).join(`, `)})`;
}
function Uf(e) {
  let t = `CASE`;
  e.value && (t += ` ${qf(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${qf(n.when)} THEN ${qf(n.then)}`;
  return (e.else && (t += ` ELSE ${qf(e.else)}`), (t += ` END`), t);
}
function Wf(e) {
  let t = qf(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Gf(e) {
  let t = qf(e.left),
    n = qf(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Kf(e) {
  return `CAST(${qf(e.value)} as ${e.dataType})`;
}
function qf(e) {
  switch (e.type) {
    case `Identifier`:
      return Bf(e);
    case `LiteralValue`:
      return Vf(e);
    case `FunctionCall`:
      return Hf(e);
    case `Case`:
      return Uf(e);
    case `UnaryOperation`:
      return Wf(e);
    case `BinaryOperation`:
      return Gf(e);
    case `TypeCast`:
      return Kf(e);
    case `Select`:
      return `${Qf(e)}`;
    default:
      B(e);
  }
}
function Jf(e) {
  return zd(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Yf(e) {
  let t = `${Xf(e.left)} LEFT JOIN ${Xf(e.right)}`;
  return (e.constraint && (t += ` ON ${qf(e.constraint)}`), t);
}
function Xf(e) {
  switch (e.type) {
    case `Collection`:
      return Jf(e);
    case `LeftJoin`:
      return Yf(e);
    default:
      B(e);
  }
}
function Zf(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Qf(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = qf(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Xf(e.from)}`),
    e.where && (t += ` WHERE ${qf(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${qf(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${qf(e.limit)}`),
    e.offset && (t += ` OFFSET ${qf(e.offset)}`),
    Zf(t)
  );
}
function $f(e) {
  return R(e) && e.type === `Collection`;
}
function ep(e, t) {
  return $f(t) && Fd(t.data) ? Sf(t.data) : t;
}
function tp(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, ep) + n;
}
function np(e) {
  let { activeLocale: t } = yr();
  return AT.get(e, t).use();
}
function rp(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(nt(e) || R(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function ip(e) {
  let t = l(e);
  return (
    n(() => {
      t.current = e;
    }, [e]),
    vr((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function ap(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function op() {
  return new Set();
}
function sp(e) {
  let t = Yi(op),
    n = Yi(op);
  return (
    Ts(() => () => ap(n, t)),
    c(() => () => ap(n, t), []),
    c(() => {
      ap(n, t);
    }, [e]),
    l({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function cp(e, t, n) {
  return k.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function lp(e) {
  for (let [t, n] of Object.entries(e)) if (K.matchMedia(n).matches) return t;
}
function up(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && K.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function dp(e, n, r = !0) {
  let i = t(ox),
    a = io(),
    o = l(!a && Pa() ? (lp(n) ?? e) : e),
    u = l(r && i ? e : o.current),
    d = No(),
    f = ue(),
    p = s(
      (e) => {
        if (e !== o.current || e !== u.current) {
          let t = function () {
            ((o.current = u.current = e),
              O(() => {
                d();
              }));
          };
          a
            ? t()
            : f(() => {
                t();
              });
        }
      },
      [f, d, a]
    );
  return (
    fb(() => {
      a && p(e);
    }, [e, a, p]),
    fb(() => {
      !r || i !== !0 || p(o.current);
    }, []),
    c(() => {
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = K.matchMedia(r),
          i = (e) => {
            e.matches && p(t);
          };
        (fp(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => pp(e, t));
    }, [n, p]),
    [o.current, u.current]
  );
}
function fp(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function pp(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function mp(e) {
  setTimeout(e, 1);
}
function hp(e) {
  let t = new Set(),
    n = up(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (gp(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (Bh ? K.requestIdleCallback : mp)(() => {
    document.querySelector(jT)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (gp(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    _p(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function gp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function _p(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function vp() {
  let e = Mt(),
    { activeLocale: t } = yr(),
    n = C(
      () =>
        cr(e, {
          currentRoutePath: e?.path,
          currentRoutePathLocalized: e?.pathLocalized,
          currentPathVariables: e?.pathVariables,
          preserveQueryParams: !1,
          relative: !1,
          siteCanonicalURL: void 0,
          localeId: t?.id,
        }),
      [e, t?.id]
    );
  return k.useCallback(
    (e) => {
      if (!e) return;
      let t = `${n}-${e}`,
        r = MT.get(t);
      if (r) return r;
      let i = x();
      return (MT.set(t, i), i);
    },
    [n]
  );
}
function yp(e, t) {
  e !== !1 &&
    Ne.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function bp({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, r] = k.useState(!1),
    i = k.useCallback(
      async (t) => {
        (await bn({ priority: `user-blocking`, continueAfter: `paint` }), O(() => r(t)), yp(e, t));
      },
      [e]
    );
  return (
    k.useEffect(
      () => () => {
        bn({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          yp(e, !1);
        });
      },
      [e]
    ),
    k.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), i(!1));
      };
      return (K.addEventListener(`keydown`, e), () => K.removeEventListener(`keydown`, e));
    }, [t, i]),
    [n, i]
  );
}
function xp(e) {
  return R(e) && NT in e && e.page !== void 0;
}
function Sp(e, t) {
  return `${e}-${t}`;
}
function Cp(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (z(r !== void 0, `nextVariant should be defined`), r);
}
function wp(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Tp(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Ep(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Dp(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Op() {
  let e = l(),
    t = l(),
    n = s(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    c(
      () => () => {
        n();
      },
      [n]
    ),
    s(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function kp() {
  let e = l(),
    n = l(!1),
    r = l(),
    i = t(Ub);
  return (
    c(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    s(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = _s(i, `undefined`, a.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function Ap(e) {
  let t = Op(),
    n = kp();
  return s(
    (r, i = !1) => {
      if (zh) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function jp() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (IT = () => {
        (e(), (t = void 0));
      }));
  });
}
function Mp(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (FT = jp()));
}
function Np() {
  (performance.mark(`click-received-listener`), (FT = void 0), IT?.(), (IT = void 0));
}
function Pp(e = !1) {
  c(() => {
    e &&
      (document.addEventListener(`pointerup`, Mp, !0),
      document.__proto__.addEventListener.call(document, `click`, Np, !0));
  }, [e]);
}
function Fp({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: c,
}) {
  let u = No(),
    d = nu(),
    f = Yi(() => new Set(i)),
    { yieldOnTap: p } = tg();
  Pp(p);
  let m = Ap(c),
    h = l({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Dp(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    g = s((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = Dp(e, a, f),
        s = Tp(i?.[o], t, n, !1, r);
      return [o, s ? Sp(o, s) : void 0];
    }, []),
    _ = s(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let c = p && h.current.isPressedHasUpdated;
        (c &&
          FT &&
          (performance.mark(`wait-for-tap-start`),
          await FT,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await bn({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: _,
        } = h.current;
        if (l || f || d || _) {
          O(u);
          return;
        }
        m(() => O(u), i);
      },
      [g, u, m, p]
    ),
    v = s(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        (e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = h.current;
        ((h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_]
    ),
    y = s(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current;
        _(i, a, n, e === PT ? Cp(r || [], i || n) : e, t, !0);
      },
      [_]
    ),
    b = s(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), m(() => O(u), !0));
    }, [u, m]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: ee,
      isPressed: E,
      isError: D,
      loadedBaseVariant: te,
    } = h.current,
    ne = cp(h.current.baseVariant, h.current.gestureVariant, a);
  return C(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !D && !d && !!t && !te[x],
      r = n ? Sp(x, `loading`) : S;
    r && e.push(r);
    let i = T?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: wp(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: ne,
        gestureHandlers: a,
        classNames: Lc(Ep(x, o), Tp(i, ee, E, n, D)),
      }
    );
  }, [x, S, ee, E, te, ne, y, w, T, v, b, o]);
}
function Ip(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!Pl()) return r(e);
  let a = Lp(e, r),
    o = !1;
  function s(r, s) {
    let { disableCustomCode: c } = tg(),
      l = Ll();
    if (c) return _(e, { ...r, ref: s });
    if (Gl(t, l?.scopeId, l?.level, i ?? !1))
      return a.status === `success`
        ? _(n_.Provider, {
            value: n,
            children: _(Fl, {
              getErrorMessage: Hl.bind(null, t, n),
              fallback: _(e, { ...r, ref: s }),
              children: _(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Nl(a.error), Nl(Hl(t, n)), Ml(a.error), !0)), _(e, { ...r, ref: s }));
    if (a.status === `success`)
      return _(n_.Provider, { value: n, children: _(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return k.forwardRef(s);
}
function Lp(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function Rp(e, t, n) {
  let r = [],
    i = ll(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!L(e)) return zT;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return L(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : zT;
}
function zp(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function Bp(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${KT[e]}` : `${KT[e]} ${n}`;
}
function Vp() {
  return A === void 0 ? {} : JT || ((JT = Hp()), JT);
}
function Hp() {
  let e = A.location,
    t = A?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = A.top.location.origin), (t = A.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (n && n !== e.origin) throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function Up(e) {
  return e.key + e.extension;
}
function Wp(e) {
  return `${Vp().userContent}/assets/${e}`;
}
function Gp(e) {
  return Wp(Up(e));
}
function Kp(e, t) {
  return t ? `${e} ${YT}` : e;
}
function qp(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return Kp(e.name, e.isVariable);
  }
}
function Jp(e) {
  return !!(e && Array.isArray(e));
}
function Yp(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    Zp(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function Xp(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function Zp(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function Qp(e) {
  return QT[$p(e)];
}
function $p(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function em(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function tm(e, t) {
  return { ...nm(e, t), ...rm(e, t) };
}
function nm(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function rm(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function im(e) {
  return !!e.variationAxes;
}
function am(e) {
  return om(e) || sm(e);
}
function om(e) {
  return e.startsWith(tE);
}
function sm(e) {
  return e.startsWith(eE);
}
function cm(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function lm(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? YT : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function um({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = Yp(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function dm(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: im(e), selector: e.selector };
}
function fm(e) {
  let t = e.fonts.map((e) => dm(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = dm(n);
    if (!e) continue;
    let r = tm(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function pm(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
async function mm(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-3SZHWBC6.VSPAkxlP.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-B2QLD7YB.xC4tDdEz.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function hm(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-3FCAKCAC.sfHHHMd3.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-4THNDPMZ.0IHvgYps.mjs`)).default;
    case `framer`:
      return (await import(`./framer-font-45AI7UCZ.Q5wQiZul.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function gm(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(_m);
}
function _m(e) {
  return rE.includes(e);
}
function vm(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = gm(e)[0];
  return n && t[n];
}
function ym(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function bm(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
async function xm(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = `${r}-${c}-${s}-${i}`;
  if (!yE.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: I(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), Sm(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < _E) return xm(e, t, n + 1);
          throw new vE(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    yE.set(l, d);
  }
  await yE.get(l);
}
async function Sm(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!bE.has(r)) {
    let i = new hE.default(e, { style: t, weight: n }).load(null, gE);
    bE.set(r, i);
  }
  try {
    await bE.get(r);
  } catch {
    throw new vE(
      `Failed to check if font is ready (${gE}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function Cm(e) {
  try {
    if (e === `framer`) return wm(SE) ? SE : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./google-GXDJLGJB.hw8JfvME.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-O22OBJ3D.BxsOeuHc.mjs`)).default;
          default:
            B(e);
        }
      })();
      return wm(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function wm(e) {
  return R(e) && Object.values(e).every(Em);
}
function Tm(e) {
  return R(e) && I(e.tag);
}
function Em(e) {
  return Array.isArray(e) && e.every(Tm);
}
function Dm(e, t) {
  c(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (A.addEventListener(`keyup`, n), () => A.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function Om(e, t, n, r) {
  let i = A.innerHeight - r,
    a = Math.min(A.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function km(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new A.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function Am() {
  return document.getElementById(sC) ?? document.getElementById(oC) ?? document.body;
}
function jm(e, t) {
  return L(e) ? e : (t ?? 0);
}
function Mm(e) {
  return jm(e?.paddingTop, e?.padding) + jm(e?.paddingBottom, e?.padding);
}
function Nm(e) {
  return jm(e?.paddingLeft, e?.padding) + jm(e?.paddingRight, e?.padding);
}
function Pm(e, t) {
  if (!e || !t || !t.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Nm(e)}px)`,
      srcSet: uo(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Fm(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in TE)) continue;
    let n = TE[t],
      r = e[t];
    if (!(!L(n) || !L(r)) && n !== r) return !0;
  }
  return !1;
}
function Im(e) {
  let t = xe.get(e.current);
  if (!t) return !1;
  if (Fm(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Fm(e.latestValues)) return !0;
  return !1;
}
function Lm(e) {
  return m(function ({ lightbox: n, lightboxClassName: r, onClick: a, ...o }, d) {
    let f = t(Ee),
      p = t(LT),
      m = !!p,
      h = l(null),
      g = d ?? h,
      v = l(),
      y = C(() => Pm(n, o.background), [n, o.background]),
      [b, x] = i(!1),
      [w, ee] = i(),
      E = s(() => {
        if (n) {
          if (b) {
            O(() => {
              x(!0);
            });
            return;
          }
          Ne.read(() => {
            if (!g.current) return;
            let e = getComputedStyle(g.current),
              t =
                g.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(g.current, `::after`)
                  : void 0,
              r = g.current.offsetWidth ?? 1,
              i = g.current.offsetHeight ?? 1,
              a = Im(g) || m ? { duration: 0 } : n.transition;
            O(() => {
              (ee({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: t?.borderTopWidth,
                borderRight: t?.borderRightWidth,
                borderBottom: t?.borderBottomWidth,
                borderLeft: t?.borderLeftWidth,
                borderStyle: t?.borderStyle,
                borderColor: t?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                x(!0),
                p?.stop());
            });
          });
        }
      }, [n, b, g, p?.stop, m]),
      te = w?.aspectRatio ?? 1,
      ne = ip(() => {
        if (!n || !y || !y.src) return;
        let e = v.current?.[y.src];
        if (e) return e;
        let t = Om(te, n.maxWidth, Nm(n), Mm(n)),
          r = km(y, { width: t, height: t * te });
        return ((v.current = { [y.src]: r }), r);
      }),
      k = s(
        async (e) => {
          (a?.(e), !(b || !n || !y) && (await ne(), E()));
        },
        [a, E, b, y, n, ne]
      ),
      A = s((e) => {
        (e?.stopPropagation(),
          O(() => {
            x(!1);
          }));
      }, []);
    (Dm(b, A),
      c(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            ne();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = g.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, ne),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, ne));
          }
        );
      }, [ne, g, n]));
    let ie = re(),
      ae = w?.transition ?? o.transition ?? f.transition,
      oe = w?.borderRadius,
      se = w?.imageRendering,
      ce = w?.filter,
      le = w?.borderTop,
      ue = w?.borderRight,
      de = w?.borderBottom,
      fe = w?.borderLeft,
      pe = w?.borderStyle,
      me = w?.borderColor,
      he = !!(le || ue || de || fe || pe || me),
      ge = he
        ? {
            "--border-top-width": le,
            "--border-right-width": ue,
            "--border-bottom-width": de,
            "--border-left-width": fe,
            "--border-style": pe,
            "--border-color": me,
          }
        : void 0,
      _e = { [KS]: o.id },
      ve = jm(n?.paddingTop, n?.padding),
      j = jm(n?.paddingBottom, n?.padding),
      M = jm(n?.paddingLeft, n?.padding),
      ye = jm(n?.paddingRight, n?.padding),
      N = w?.borderRadius ? { ...o.style, borderRadius: w.borderRadius } : o.style,
      xe = b ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      Se = m && b ? void 0 : (o.layoutId ?? (n ? ie : void 0));
    return T(D, {
      children: [
        _(e, {
          ...o,
          style: N,
          onClick: k,
          layoutId: Se,
          ref: g,
          layoutDependency: xe,
          transition: ae,
        }),
        _(ze, {
          onExitComplete: () => {
            O(() => {
              (ee(void 0), p?.start());
            });
          },
          children:
            b &&
            n &&
            y &&
            _(
              u,
              {
                children: S(
                  T(D, {
                    children: [
                      _(be.div, {
                        ..._e,
                        className: r,
                        onClick: A,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: ae,
                        initial: EE,
                        animate: DE,
                        exit: EE,
                      }),
                      _(be.div, {
                        ..._e,
                        className: r,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${ve}px ${ye}px ${j}px ${M}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: _(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: te,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: _(be.div, {
                            layoutId: Se,
                            transition: ae,
                            onClick: E,
                            className: `framer-lightbox-container`,
                            "data-border": he,
                            style: {
                              aspectRatio: te,
                              borderRadius: oe,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: se,
                              filter: ce,
                              ...ge,
                            },
                            children: _(bo, { image: y, alt: y.alt, draggable: o.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Am()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Rm(e, t) {
  return AE && !t
    ? Document.parseHTMLUnsafe(e)
    : ((kE ??= new DOMParser()), kE.parseFromString(e, t ?? `text/html`));
}
function zm(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Bm(e, t, n, r) {
  return e.replace(jE, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = su(u.replace(/&amp;/gu, `&`));
    if (!d || !d.target) return e;
    let f = t(d.target);
    if (!xp(f) || !xp(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = It(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = lu(u);
    if (!_ || I(_)) return e;
    Ou(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(lC, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Tn(m, v)), i + o + `"${zm(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Vm(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Hm(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Um(e, t, n) {
  let r = l([]);
  Vm(r.current, e) ||
    ((r.current = e),
    wE.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || Y.current() !== Y.canvas || (e > 0 && zo(n.current));
    }));
}
function Wm() {
  return { current: null };
}
async function Gm(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, `current`, {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function Km(e) {
  return e in FE;
}
function qm(e, t) {
  let n = {};
  for (let r in e) {
    if (!Km(r)) continue;
    let i = e[r],
      a = FE[r];
    nt(i) || nt(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Jm(e, t = `character`, n, r, i) {
  if (r) {
    let t = Wm();
    return (n.add(t), _(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return T(
          u,
          {
            children: [
              _(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(IE)?.map((e, t) => {
                  let r = Wm();
                  return (n.add(r), _(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = Wm();
        return (
          n.add(o),
          T(
            u,
            { children: [_(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    case `element`:
    default:
      return e;
  }
}
function Ym(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      B(t);
  }
}
function Xm(e) {
  let t = [];
  return (
    L(e.x) && t.push(`translateX(${e.x}px)`),
    L(e.y) && t.push(`translateY(${e.y}px)`),
    L(e.scale) && t.push(`scale(${e.scale})`),
    L(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    L(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    L(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    L(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    L(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Zm(e, t, n, r) {
  if (!n || !n.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Xm(n.effect),
              };
        case `line`:
        case `word`:
        case `character`:
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Xm(n.effect),
              };
      }
    default:
      B(i);
  }
}
function Qm(e, t, n) {
  let r = Yi(() => new Set()),
    i = ro(),
    a = n || !i,
    o = ye(),
    s = l({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let u = e?.trigger ?? `onMount`,
    d = e?.target,
    f = e?.threshold;
  c(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            eh(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          B(t);
      }
    }
    switch (u) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? Me(n, e, { amount: f ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = d?.ref?.current;
        return t
          ? Me(t, e, {
              amount: f ?? 0,
              root: document,
              margin: d?.offset ? `${d.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        B(u);
    }
  }, [a, r, n, t, d, f, u]);
  let p = !!e,
    m = e ? Ym(e) : void 0;
  return C(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !p)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = Zm(a, n || $m(e, t, i), s.current.effect, o);
        return {
          text: (e) => Jm(e, m, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Wm();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            eh(m, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            B(t);
        }
      },
    }),
    [a, p, r, n, m]
  );
}
function $m(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function eh(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = qm(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await th(n, u);
      if (
        e === null ||
        (je(e, l, { ...r, restDelta: 0.001, delay: ve(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        je(e, o ? { opacity: t.opacity } : t, {
          ...r,
          restDelta: 0.001,
          delay: ve(r?.delay ?? 0, { startDelay: i }),
        });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Gm(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (Ne.read(() => {
          ((e = nh(n)),
            e.length !== 0 &&
              Ne.update(() => {
                let t = e.map((e, t) =>
                  je(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          je(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      B(e);
  }
}
async function th(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Gm(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function nh(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function rh(e) {
  let t = {};
  for (let n in e) (Ye(n) || Qy(n)) && (t[n] = e[n]);
  return t;
}
function ih(e) {
  return e.type === u;
}
function ah(e) {
  return e.type === `br`;
}
function oh(e, t, n, r, i = {}, a, o = ih(e) ? -1 : 0) {
  let s = p.toArray(e.props.children);
  nt(n) || (s = s.slice(0, 1));
  let c = !0;
  s = s.map((e) => {
    if (((!y(e) || !ah(e)) && (c = !1), y(e))) return oh(e, t, n, r, i, a, o + 1);
    let s = nt(n) ? e : n;
    return I(s) && a ? a.text(s) : s;
  });
  let { "data-preset-tag": l, ...u } = e.props;
  if (I(e.type) || Xe(e.type)) {
    let n = Fe(e.type) || e.type,
      d = l || n,
      f = I(d) ? t?.[d] : void 0;
    ((u.className = Lc(`framer-text`, u.className, f)),
      a && o === 0 && !c && Object.assign(u, a.props(u.style)));
    let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      m = t?.anchor;
    if (p && m) {
      let e = sh(s, i);
      u.id = e;
      let t = Lc(`framer-text`, m),
        n = _(`a`, { href: `#${e}`, className: t, children: s });
      ((u.style = { ...(u.style ?? {}), scrollMarginTop: r }), (s = [n]));
    }
  }
  return w(e, u, ...s);
}
function sh(e, t) {
  let n = mr(e.map(ch).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function ch(e) {
  return I(e) || L(e)
    ? e.toString()
    : y(e)
      ? ch(e.props.children)
      : Array.isArray(e)
        ? e.map(ch).join(``)
        : ``;
}
function lh(e) {
  try {
    let t = Rm(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function uh(e, t) {
  fh(e, dh(t));
}
function dh(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function fh(e, t) {
  (ph(e, t),
    Array.from(e.children).forEach((e) => {
      fh(e, t);
    }));
}
function ph(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function mh(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (YE[t[2]] || 1));
}
function hh(e) {
  let t = mh(e.getAttribute(`width`)),
    n = mh(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function gh(e) {
  return e > XE ? `lazy` : void 0;
}
function _h(e, t, n) {
  let r = xh(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function vh(e) {
  return e ? (e.fonts ?? Hr()) : Hr();
}
function yh(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : xh(e);
}
function bh(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : xh(e);
}
function xh(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Sh(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Ch) })
      : t.fonts.push(Ch(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Sh(e) {
  return ZE in e;
}
function Ch(e) {
  let t = wh(e) || Th(e) ? e : Eh(e);
  return Th(t) ? t : Dh(t);
}
function wh(e) {
  return `source` in e;
}
function Th(e) {
  return `cssFamilyName` in e;
}
function Eh(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Dh(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${YT}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Oh(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function kh(e) {
  return e.loader;
}
function Ah(e, t, n) {
  let r = kh(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var jh,
  Mh,
  Nh,
  Ph,
  Fh,
  Ih,
  Lh,
  Rh,
  zh,
  Bh,
  Vh,
  Hh,
  Uh,
  Wh,
  Gh,
  Kh,
  qh,
  Jh,
  Yh,
  Xh,
  Zh,
  Qh,
  $h,
  eg,
  tg,
  ng,
  rg,
  ig,
  ag,
  og,
  sg,
  cg,
  lg,
  ug,
  dg,
  fg,
  pg,
  mg,
  hg,
  K,
  gg,
  _g,
  vg,
  yg,
  bg,
  xg,
  Sg,
  Cg,
  wg,
  Tg,
  Eg,
  Dg,
  Og,
  kg,
  Ag,
  jg,
  Mg,
  Ng,
  Pg,
  Fg,
  Ig,
  Lg,
  Rg,
  zg,
  Bg,
  Vg,
  Hg,
  Ug,
  Wg,
  Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
  Zg,
  Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  q,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  J,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  Y,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  X,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  Z,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  Q,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  $,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE = e(() => {
    (o(),
    //! Credit to Astro | MIT License
    /**
     * @license Emotion v11.0.0
     * MIT License
     *
     * Copyright (c) Emotion team and other contributors
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */
    /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
      Te(),
      Ge(),
      ne(),
      E(),
      h(),
      (jh = Ce({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
          (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Hsluv = void 0));
          var t = class e {
            constructor() {
              ((this.hex = `#000000`),
                (this.rgb_r = 0),
                (this.rgb_g = 0),
                (this.rgb_b = 0),
                (this.xyz_x = 0),
                (this.xyz_y = 0),
                (this.xyz_z = 0),
                (this.luv_l = 0),
                (this.luv_u = 0),
                (this.luv_v = 0),
                (this.lch_l = 0),
                (this.lch_c = 0),
                (this.lch_h = 0),
                (this.hsluv_h = 0),
                (this.hsluv_s = 0),
                (this.hsluv_l = 0),
                (this.hpluv_h = 0),
                (this.hpluv_p = 0),
                (this.hpluv_l = 0),
                (this.r0s = 0),
                (this.r0i = 0),
                (this.r1s = 0),
                (this.r1i = 0),
                (this.g0s = 0),
                (this.g0i = 0),
                (this.g1s = 0),
                (this.g1i = 0),
                (this.b0s = 0),
                (this.b0i = 0),
                (this.b1s = 0),
                (this.b1i = 0));
            }
            static fromLinear(e) {
              return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
            }
            static toLinear(e) {
              return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
            }
            static yToL(t) {
              return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
            }
            static lToY(t) {
              return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
            }
            static rgbChannelToHex(t) {
              let n = Math.round(t * 255),
                r = n % 16,
                i = ((n - r) / 16) | 0;
              return e.hexChars.charAt(i) + e.hexChars.charAt(r);
            }
            static hexToRgbChannel(t, n) {
              let r = e.hexChars.indexOf(t.charAt(n)),
                i = e.hexChars.indexOf(t.charAt(n + 1));
              return (r * 16 + i) / 255;
            }
            static distanceFromOriginAngle(e, t, n) {
              let r = t / (Math.sin(n) - e * Math.cos(n));
              return r < 0 ? 1 / 0 : r;
            }
            static distanceFromOrigin(e, t) {
              return Math.abs(t) / Math.sqrt(e ** 2 + 1);
            }
            static min6(e, t, n, r, i, a) {
              return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
            }
            rgbToHex() {
              ((this.hex = `#`),
                (this.hex += e.rgbChannelToHex(this.rgb_r)),
                (this.hex += e.rgbChannelToHex(this.rgb_g)),
                (this.hex += e.rgbChannelToHex(this.rgb_b)));
            }
            hexToRgb() {
              ((this.hex = this.hex.toLowerCase()),
                (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
                (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
                (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
            }
            xyzToRgb() {
              ((this.rgb_r = e.fromLinear(
                e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
              )),
                (this.rgb_g = e.fromLinear(
                  e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
                )),
                (this.rgb_b = e.fromLinear(
                  e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
                )));
            }
            rgbToXyz() {
              let t = e.toLinear(this.rgb_r),
                n = e.toLinear(this.rgb_g),
                r = e.toLinear(this.rgb_b);
              ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
                (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
                (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
            }
            xyzToLuv() {
              let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
                n = 4 * this.xyz_x,
                r = 9 * this.xyz_y;
              (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
                (this.luv_l = e.yToL(this.xyz_y)),
                this.luv_l === 0
                  ? ((this.luv_u = 0), (this.luv_v = 0))
                  : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                    (this.luv_v = 13 * this.luv_l * (r - e.refV))));
            }
            luvToXyz() {
              if (this.luv_l === 0) {
                ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
                return;
              }
              let t = this.luv_u / (13 * this.luv_l) + e.refU,
                n = this.luv_v / (13 * this.luv_l) + e.refV;
              ((this.xyz_y = e.lToY(this.luv_l)),
                (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
                (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
            }
            luvToLch() {
              ((this.lch_l = this.luv_l),
                (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
                this.lch_c < 1e-8
                  ? (this.lch_h = 0)
                  : ((this.lch_h = (Math.atan2(this.luv_v, this.luv_u) * 180) / Math.PI),
                    this.lch_h < 0 && (this.lch_h = 360 + this.lch_h)));
            }
            lchToLuv() {
              let e = (this.lch_h / 180) * Math.PI;
              ((this.luv_l = this.lch_l),
                (this.luv_u = Math.cos(e) * this.lch_c),
                (this.luv_v = Math.sin(e) * this.lch_c));
            }
            calculateBoundingLines(t) {
              let n = (t + 16) ** 3 / 1560896,
                r = n > e.epsilon ? n : t / e.kappa,
                i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
                a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
                o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
                s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
                c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
                l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
                u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
                d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
                f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
              ((this.r0s = i / o),
                (this.r0i = (a * t) / o),
                (this.r1s = i / (o + 126452)),
                (this.r1i = ((a - 769860) * t) / (o + 126452)),
                (this.g0s = s / l),
                (this.g0i = (c * t) / l),
                (this.g1s = s / (l + 126452)),
                (this.g1i = ((c - 769860) * t) / (l + 126452)),
                (this.b0s = u / f),
                (this.b0i = (d * t) / f),
                (this.b1s = u / (f + 126452)),
                (this.b1i = ((d - 769860) * t) / (f + 126452)));
            }
            calcMaxChromaHpluv() {
              let t = e.distanceFromOrigin(this.r0s, this.r0i),
                n = e.distanceFromOrigin(this.r1s, this.r1i),
                r = e.distanceFromOrigin(this.g0s, this.g0i),
                i = e.distanceFromOrigin(this.g1s, this.g1i),
                a = e.distanceFromOrigin(this.b0s, this.b0i),
                o = e.distanceFromOrigin(this.b1s, this.b1i);
              return e.min6(t, n, r, i, a, o);
            }
            calcMaxChromaHsluv(t) {
              let n = (t / 360) * Math.PI * 2,
                r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
                i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
                a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
                o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
                s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
                c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
              return e.min6(r, i, a, o, s, c);
            }
            hsluvToLch() {
              (this.hsluv_l > 99.9999999
                ? ((this.lch_l = 100), (this.lch_c = 0))
                : this.hsluv_l < 1e-8
                  ? ((this.lch_l = 0), (this.lch_c = 0))
                  : ((this.lch_l = this.hsluv_l),
                    this.calculateBoundingLines(this.hsluv_l),
                    (this.lch_c = (this.calcMaxChromaHsluv(this.hsluv_h) / 100) * this.hsluv_s)),
                (this.lch_h = this.hsluv_h));
            }
            lchToHsluv() {
              if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHsluv(this.lch_h);
                ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
              }
              this.hsluv_h = this.lch_h;
            }
            hpluvToLch() {
              (this.hpluv_l > 99.9999999
                ? ((this.lch_l = 100), (this.lch_c = 0))
                : this.hpluv_l < 1e-8
                  ? ((this.lch_l = 0), (this.lch_c = 0))
                  : ((this.lch_l = this.hpluv_l),
                    this.calculateBoundingLines(this.hpluv_l),
                    (this.lch_c = (this.calcMaxChromaHpluv() / 100) * this.hpluv_p)),
                (this.lch_h = this.hpluv_h));
            }
            lchToHpluv() {
              if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHpluv();
                ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
              }
              this.hpluv_h = this.lch_h;
            }
            hsluvToRgb() {
              (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hpluvToRgb() {
              (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hsluvToHex() {
              (this.hsluvToRgb(), this.rgbToHex());
            }
            hpluvToHex() {
              (this.hpluvToRgb(), this.rgbToHex());
            }
            rgbToHsluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHsluv());
            }
            rgbToHpluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHpluv());
            }
            hexToHsluv() {
              (this.hexToRgb(), this.rgbToHsluv());
            }
            hexToHpluv() {
              (this.hexToRgb(), this.rgbToHpluv());
            }
          };
          ((e.Hsluv = t),
            (t.hexChars = `0123456789abcdef`),
            (t.refY = 1),
            (t.refU = 0.19783000664283),
            (t.refV = 0.46831999493879),
            (t.kappa = 903.2962962),
            (t.epsilon = 0.0088564516),
            (t.m_r0 = 3.240969941904521),
            (t.m_r1 = -1.537383177570093),
            (t.m_r2 = -0.498610760293),
            (t.m_g0 = -0.96924363628087),
            (t.m_g1 = 1.87596750150772),
            (t.m_g2 = 0.041555057407175),
            (t.m_b0 = 0.055630079696993),
            (t.m_b1 = -0.20397695888897),
            (t.m_b2 = 1.056971514242878));
        },
      })),
      (Mh = Ce({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (Nh = Ce({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (Ph = Ce({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = Nh();
        },
      })),
      (Fh = Ce({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = Ph(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (Ih = Ce({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function s(e, t, n) {
              ((t ||= {}),
                (n ||= A),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function f(e) {
              return (
                l === null &&
                  (p(e) && /Apple/.test(A.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        A.navigator.userAgent
                      )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function p(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function m(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (p(a.context) && !f(a.context)) {
                  var h = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(m(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    g = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([g, h]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (_ != -1 && v != -1) || (_ != -1 && y != -1) || (v != -1 && y != -1)) &&
                        ((t = _ != v && _ != y && v != y) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              A.navigator.userAgent
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((_ == b && v == b && y == b) ||
                              (_ == x && v == x && y == x) ||
                              (_ == S && v == S && y == S)))),
                        (t = !t)),
                        t &&
                          (C.parentNode !== null && C.parentNode.removeChild(C),
                          clearTimeout(l),
                          e(a)));
                    }
                    function f() {
                      if (new Date().getTime() - d >= u)
                        (C.parentNode !== null && C.parentNode.removeChild(C),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((_ = p.g.offsetWidth),
                          (v = h.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          n()),
                          (l = setTimeout(f, 50)));
                      }
                    }
                    var p = new r(s),
                      h = new r(s),
                      g = new r(s),
                      _ = -1,
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = document.createElement(`div`);
                    ((C.dir = `ltr`),
                      i(p, m(a, `sans-serif`)),
                      i(h, m(a, `serif`)),
                      i(g, m(a, `monospace`)),
                      C.appendChild(p.g),
                      C.appendChild(h.g),
                      C.appendChild(g.g),
                      a.context.document.body.appendChild(C),
                      (b = p.g.offsetWidth),
                      (x = h.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      f(),
                      o(p, function (e) {
                        ((_ = e), n());
                      }),
                      i(p, m(a, `"` + a.family + `",sans-serif`)),
                      o(h, function (e) {
                        ((v = e), n());
                      }),
                      i(h, m(a, `"` + a.family + `",serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, m(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = s)
                : ((A.FontFaceObserver = s),
                  (A.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      })),
      (Lh = () => {}),
      (Rh = A !== void 0),
      (zh = (() =>
        Rh &&
        (d.webdriver ||
          /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(d.userAgent)))()),
      (Bh = Rh && typeof A.requestIdleCallback == `function`),
      (Vh = (() => (Bh ? A.requestIdleCallback : setTimeout))()),
      (Hh = () => () => {}),
      (Uh = () => !0),
      (Wh = () => !1),
      (Gh = new Map()),
      (Kh = Rh ? void 0 : new Set()),
      (qh = `preload`),
      (Jh = Object.keys),
      (Yh = `equals`),
      (Xh = (() => k.createContext({}))()),
      (Zh = (() => k.createContext({}))()),
      (Qh = []),
      ($h = k.createContext(void 0)),
      ($h.displayName = `LibraryFeaturesContext`),
      (eg = (() => $h.Provider)()),
      (tg = () => k.useContext($h) ?? {}),
      (ng = `default`),
      (rg = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (ig = class e {
        constructor(e, t) {
          ((this.resolver = e),
            (this.cacheHash = t),
            M(this, `promiseState`, rg.Pending),
            M(this, `preloadPromise`),
            M(this, `value`),
            M(this, `reason`),
            M(this, `read`, () => {
              if (this.promiseState === rg.Fulfilled) return this.value;
              throw this.promiseState === rg.Rejected
                ? this.reason
                : Error(`Need to call preload() before read()`);
            }));
        }
        static is(t) {
          return t instanceof e;
        }
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === rg.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === rg.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== rg.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Kh !== void 0 && Kh.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = rg.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = rg.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Gh.has(this.cacheHash) ? Gh.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!ct(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (ag = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (og = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (sg = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (cg = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),
      (lg = -1),
      (ug = -2),
      (dg = -3),
      (fg = -4),
      (pg = -5),
      (mg = -6),
      (hg = -7),
      (K = Rh
        ? A
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            scheduler: void 0,
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (gg = 2),
      (_g = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (vg = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (bg = class {
        constructor() {
          (M(this, `payload`, on()), M(this, `isEmpty`, !0));
        }
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return tn(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (xg = (() => (Rh ? void 0 : new bg()))()),
      (Sg = (() => vg.CollectionUtilsCache)()),
      (Cg = new WeakMap()),
      (wg = a(void 0)),
      (Tg = class {
        constructor(e, t) {
          ((this.collectionId = t),
            M(this, `module`),
            M(this, `cacheMap`, new Map()),
            (this.module = new ig(async () => {
              try {
                let t = await e();
                return (z(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(dt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = dn(n),
            i = fn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (xg !== void 0) {
              if (ct(e)) return e.then((e) => (xg.set(Sg, i, e), e));
              xg.set(Sg, i, e);
            }
            return e;
          }
          if (ln(Sg, i)) {
            let e = un(Sg, i);
            return (this.cacheMap.set(i, new ig(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = ct(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(dt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (xg !== void 0 && xg.set(Sg, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new ig(() =>
            s
              .then((e) => (xg !== void 0 && xg.set(Sg, i, e), e))
              .catch((e) => {
                console.error(dt(`Failed to call CollectionUtils method.`, e));
              })
          );
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
      }),
      (Eg = (() => K.scheduler && `yield` in K.scheduler)()),
      (Dg = (() => K.scheduler && `postTask` in K.scheduler)()),
      (Og = new Set()),
      (kg = !zh),
      (Ag = 46),
      (jg = 47),
      (Mg = (e, t) => e.charCodeAt(t)),
      (Ng = (e, t) => e.lastIndexOf(t)),
      (Pg = (e, t, n) => e.slice(t, n)),
      (Fg = !1),
      (Ig = `/`),
      (Lg = (e) => e === jg),
      (Rg = new Set([`/404.html`, `/404`, `/404/`])),
      (zg = RegExp(`:([a-z]\\w*)`, `gi`)),
      (Bg = `framer_variant`),
      (Vg = k.createContext({ global: void 0, routes: {} })),
      (Hg = 10),
      (Ug = 1e4),
      (Wg = (e) => `--view-transition-${e}`),
      (Gg = {
        circle: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = Bn(e);
            return t === `start`
              ? `clip-path: circle(0 at ${n}px ${r}px);`
              : `clip-path: circle(${Math.hypot(Math.max(n, A.innerWidth - n), Math.max(r, A.innerHeight - r))}px at ${n}px ${r}px);`;
          },
        },
        conic: {
          makeKeyframe: (e, t, n) => {
            let r = 0;
            return (
              ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
                (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
                (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
                (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
                (r = (e.sweepAngle / 360) * 100),
              `${Wg(`conic-offset`)}: ${r}%;`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Wg(`conic-offset`)})`,
              r =
                (t === `exit` && e.angularDirection === `clockwise`) ||
                (t === `enter` && e.angularDirection === `counter-clockwise`),
              i = r ? `transparent` : `black`,
              a = r ? `black` : `transparent`,
              o = `conic-gradient(from `;
            return (
              (o += `${e.angle}deg at ${e.x} ${e.y}, `),
              (o += `${i} 0%, ${i} ${n}, `),
              (o += `${a} ${n}, ${a} 100%)`),
              `mask-image: ${o}; -webkit-mask-image: ${o};`
            );
          },
          makePropertyRules: () => `
        @property ${Wg(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
        },
        inset: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = Bn(e),
              i = A.innerHeight - r,
              a = A.innerWidth - n;
            return t === `start`
              ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);`
              : `clip-path: inset(0 round 0);`;
          },
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = zn(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${Wg(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Wg(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Wg(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = (t === `start` && n === `exit`) || (t === `end` && n === `enter`) ? 1 : 0;
            return `${Wg(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Wg(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Wg(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (Kg = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (qg = `view-transition-styles`),
      (Jg = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (Yg = () => {}),
      (Zg = () => {
        (Xg ||
          ((Xg = document.createElement(`div`)),
          Xg.setAttribute(`aria-live`, `assertive`),
          Xg.setAttribute(`aria-atomic`, `true`),
          (Xg.style.position = `absolute`),
          (Xg.style.transform = `scale(0)`),
          document.body.append(Xg)),
          setTimeout(() => {
            Xg.textContent = document.title;
          }, 60));
      }),
      (Qg = !0),
      ($g = (() => {
        if (d === void 0) return !1;
        let e = d.userAgent,
          t = e.indexOf(`Chrome/`),
          n = +e.slice(t + 7, e.indexOf(`.`, t));
        return n > 101 && n < 128;
      })()),
      (e_ = (() => Rh && typeof A.navigation?.back == `function`)()),
      (t_ = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (n_ = k.createContext(null)),
      (r_ = (() => {
        let e = a(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (i_ = async () => {}),
      (a_ = { activeLocale: null, locales: [], setLocale: i_ }),
      (o_ = (() => {
        let e = k.createContext(a_);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (s_ = (() => {
        let e = k.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (c_ = new Set()),
      (l_ = (() => {
        let e = a({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (u_ = `__f_replay`),
      (d_ =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (f_ = (e) => {
        e.target?.closest?.(`#main`) &&
          (Ar(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (p_ = !1),
      (A_ = [Nr]),
      (k_ = [Nr]),
      (O_ = [Nr]),
      (D_ = [Nr]),
      (E_ = [Nr]),
      (T_ = [Nr]),
      (w_ = [Nr]),
      (C_ = [Nr]),
      (S_ = [Nr]),
      (x_ = [Nr]),
      (b_ = [Nr]),
      (y_ = [Nr]),
      (v_ = [Nr]),
      (__ = [Nr]),
      (g_ = [Nr]),
      (h_ = [Nr]),
      (m_ = [Nr]),
      (M_ = class {
        constructor() {
          (ie(j_, 5, this),
            M(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            M(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            M(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            M(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            M(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            M(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            M(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            Pr(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            Pr(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            Pr(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            Pr(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            Pr(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            Pr(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            Pr(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          Pr(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          Pr(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (j_ = He(null)),
      de(j_, 1, `markRenderStart`, A_, M_),
      de(j_, 1, `markRenderEnd`, k_, M_),
      de(j_, 1, `markUseInsertionEffectsStart`, O_, M_),
      de(j_, 1, `markUseInsertionEffectRouterStart`, D_, M_),
      de(j_, 1, `markUseInsertionEffectsEnd`, E_, M_),
      de(j_, 1, `markUseLayoutEffectsStart`, T_, M_),
      de(j_, 1, `markRouterUseLayoutEffectStart`, w_, M_),
      de(j_, 1, `markUseLayoutEffectsEnd`, C_, M_),
      de(j_, 1, `markUseEffectsStart`, S_, M_),
      de(j_, 1, `markUseEffectsRouterStart`, x_, M_),
      de(j_, 1, `markUseEffectsAreSynchronous`, b_, M_),
      de(j_, 1, `markUseEffectsEnd`, y_, M_),
      de(j_, 1, `markRafStart`, v_, M_),
      de(j_, 1, `markRafEnd`, __, M_),
      de(j_, 1, `markLayoutStylePaintEnd`, g_, M_),
      de(j_, 1, `measureMutationEffects`, h_, M_),
      de(j_, 1, `measureUnattributedHydrationOverhead`, m_, M_),
      he(j_, M_),
      (P_ = !1),
      (F_ = { Start: zr, End: Br }),
      (I_ = class extends Error {}),
      (L_ = class extends v {
        constructor(e) {
          (super(e), (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.forceUpdateKey !== t.forceUpdateKey) {
            let n = { forceUpdateKey: e.forceUpdateKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof I_)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Vr(e, t);
        }
      }),
      (R_ = Object.freeze([])),
      (B_ = new Set()),
      (V_ = class {
        constructor() {
          (M(this, `observers`, new Set()), M(this, `transactions`, {}));
        }
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (q = (() => {
        function e(e) {
          return (
            ri(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            V(e) ? e : new W_(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : V(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              V(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (H_ = `onUpdate`),
      (U_ = `finishTransaction`),
      (W_ = class {
        constructor(e) {
          ((this.value = e), M(this, `observers`, new V_()));
        }
        static interpolationFor(e, t) {
          if (V(e)) return ii(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (V(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: oi(e.x, t.x), y: oi(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((ci ||= {})),
      (G_ = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (K_ = new ((() => jh().Hsluv)())()),
      (q_ = (() => {
        let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
          t =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
          n =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`;
        return {
          rgb: RegExp(`rgb` + t),
          rgba: RegExp(`rgba` + n),
          hsl: RegExp(`hsl` + t),
          hsla: RegExp(`hsla` + n),
          hsv: RegExp(`hsv` + t),
          hsva: RegExp(`hsva` + n),
          hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
          hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
          hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
          hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        };
      })()),
      (J_ =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Y_ = (e) => {
        let { r: t, g: n, b: r, a: i } = Mi(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (X_ = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Pi({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Z_ = (e) => {
        let { r: t, g: n, b: r, a: i } = Mi(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (Q_ = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Pi({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      ($_ = class e {
        constructor(e) {
          (M(this, `format`, `p3`),
            M(this, `r`),
            M(this, `g`),
            M(this, `b`),
            M(this, `a`),
            (this.r = e.r ?? 0),
            (this.g = e.g ?? 0),
            (this.b = e.b ?? 0),
            (this.a = e.a ?? 1));
        }
        hsv() {
          return Fi(this);
        }
        rgb() {
          return zi(this);
        }
        hsl() {
          return vi(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Li(t));
            case `srgb`:
              return new e(Ri(Li(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Ri({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = J(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = Ai(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!I(t) || !J.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (ev = new Map()),
      (J = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = ev.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (ev.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Bi(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => (typeof e == `string` ? Di(e) !== !1 : !1)),
          (e.isColorObject = (e) =>
            R(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => _i(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => (typeof e == `string` ? $_.isP3String(e) : !1)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...pi(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = xi(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = xi(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = _i(e.r, e.g, e.b, !0);
            for (let e of Object.keys(G_)) if (G_[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: li(i, [0, 1], [t.r, r.r], a),
                g: li(i, [0, 1], [t.g, r.g], a),
                b: li(i, [0, 1], [t.b, r.b], a),
                a: li(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: li(i, [0, 1], [u, u + f], a),
                s: li(i, [0, 1], [c.s, l.s], a),
                l: li(i, [0, 1], [c.l, l.l], a),
                a: li(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(mi(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => vi(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        let r = qe([0, 255], [0, 1]);
        function i(e) {
          e = r(e);
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: r, b: a } = e.toRgb(t);
            return 0.2126 * i(n) + 0.7152 * i(r) + 0.0722 * i(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (tv = (e) => e instanceof We),
      (nv = (() => Mh().EventEmitter)()),
      (rv = class {
        constructor() {
          M(this, `_emitter`, new nv());
        }
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (iv = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (av = (() => K.requestAnimationFrame || iv)()),
      (ov = (e) => av(e)),
      (sv = (() => 1 / 60)()),
      (cv = class extends rv {
        constructor(e = !1) {
          (super(),
            M(this, `_started`, !1),
            M(this, `_frame`, 0),
            M(this, `_frameTasks`, []),
            M(this, `tick`, () => {
              this._started &&
                (ov(this.tick),
                this.emit(`update`, this._frame, sv),
                this.emit(`render`, this._frame, sv),
                this._processFrameTasks(),
                this._frame++);
            }),
            e && this.start());
        }
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          sv = e;
        }
        static get TimeStep() {
          return sv;
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), ov(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * sv;
        }
      }),
      (lv = new cv()),
      (uv = {
        target: K.location.origin === `https://screenshot.framer.invalid` ? `EXPORT` : `PREVIEW`,
        zoom: 1,
      }),
      (Y = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => uv.target,
        hasRestrictions: () => {
          let e = uv.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (dv = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      ke({
        borderTopWidth: dv(`y`),
        borderLeftWidth: dv(`x`),
        borderRightWidth: dv(`x`),
        borderBottomWidth: dv(`y`),
      }),
      (fv = k.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (pv = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (mv = (() => ({
        ...pv,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }))()),
      (hv = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (gv = (() => ({ ...hv, fontWeight: 500 }))()),
      (_v = (() => ({
        ...hv,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }))()),
      (vv = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = ta(ci.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(ci(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => ci.distance(e.a, e.b)),
          e
        );
      })()),
      (X = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => X.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: ai(e.x, t),
          y: ai(e.y, t),
          width: ai(e.width, t),
          height: ai(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: X.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: X.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: ci.distance(t, n), height: ci.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(X.minX)), y: Math.min(...e.map(X.minY)) },
            n = { x: Math.max(...e.map(X.maxX)), y: Math.max(...e.map(X.maxY)) };
          return X.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: X.minX(e), y: X.minY(e) },
          { x: X.minX(e), y: X.maxY(e) },
          { x: X.maxX(e), y: X.minY(e) },
          { x: X.maxX(e), y: X.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < X.minX(e) ||
            t.x > X.maxX(e) ||
            t.y < X.minY(e) ||
            t.y > X.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of X.points(t)) if (!X.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= X.maxX(e) || X.maxX(t) <= e.x || t.y >= X.maxY(e) || X.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = X.maxX(e),
            r = X.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = X.maxY(e),
            r = X.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => X.intersects(t, e)) === void 0,
        isEqual: (e, t) => X.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > X.maxX(e) && (n = t.x - X.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > X.maxY(e) && (r = t.y - X.maxY(e)),
            ci.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: X.minX(e), y: X.minY(e) },
            r = { x: X.minX(t), y: X.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = X.minX(e),
            r = X.minY(e),
            i = X.maxX(e),
            a = X.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = X.cornerPoints(e);
          return [vv(t, n), vv(n, r), vv(r, i), vv(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  B(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              B(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  B(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              B(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = vv(t, X.center(e)),
            r = X.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && vv.intersection(n, t, !0)) {
              let n = yv[e];
              return (z(n, `Invalid edge name`, yv), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          z(r, `Rect array is empty`);
          let i = X.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            z(o);
            let s = X.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (yv = [`top`, `right`, `bottom`, `left`]),
      (bv = {
        left: null,
        right: null,
        top: null,
        bottom: null,
        centerX: `50%`,
        centerY: `50%`,
        aspectRatio: null,
        parentSize: null,
        width: 100,
        height: 100,
      }),
      (xv = {
        quickfix: (e) => (
          (na(e.widthType) || na(e.heightType)) && (e.aspectRatio = null),
          H(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || na(e.widthType) || H(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || na(e.heightType) || H(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Sv = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = xv.quickfix({
              left: H(t) || V(t),
              right: H(n) || V(n),
              top: H(r) || V(r),
              bottom: H(i) || V(i),
              widthType: ia(a),
              heightType: ia(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = q.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = q.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? q.getNumber(t) : null,
              right: d.right ? q.getNumber(n) : null,
              top: d.top ? q.getNumber(r) : null,
              bottom: d.bottom ? q.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? q.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? q.getNumber(t?.sizing.height) : null,
            c = ua(e.left, e.right);
          if (o && H(c)) i = o - c;
          else if (n && na(e.widthType)) i = n.width;
          else if (H(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                B(e.widthType);
            }
          let l = ua(e.top, e.bottom);
          if (s && H(l)) a = s - l;
          else if (n && na(e.heightType)) a = n.height;
          else if (H(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                B(e.heightType);
            }
          return la(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Sv.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? q.getNumber(l.width) : null,
            d = l ? q.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? X.pixelAligned(f) : f;
        },
      }),
      (Cv = 200),
      (wv = 200),
      (Tv = k.createContext({ parentSize: 0 })),
      (Ev = (e) => {
        let t = va(),
          { parentSize: n, children: r } = e,
          i = k.useMemo(() => ({ parentSize: n }), [ba(n), xa(n)]);
        return t === 1
          ? r
            ? _(D, { children: r })
            : null
          : _(Tv.Provider, { value: i, children: r });
      }),
      (Dv = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(Dv || {})),
      (Ov = /Mac/u),
      (kv = /iPhone|iPod|iPad/iu),
      (Av = /MacIntel/iu),
      (jv = /Edg\//u),
      (Mv = /Chrome/u),
      (Nv = /Google Inc/u),
      (Pv = /Safari/u),
      (Fv = /Apple Computer/u),
      (Iv = /Firefox\/\d+\.\d+$/u),
      (Lv = /FramerX/u),
      (Rv = /tablet|iPad|Nexus 9/iu),
      (zv = /mobi/iu),
      (Bv = k.createContext(void 0)),
      (Vv = new Set()),
      (Uv = `style[data-framer-css-ssr-minified]`),
      (Wv = (() => {
        if (!Pa()) return new Set();
        let e = document.querySelector(Uv)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (Gv = `data-framer-css-ssr`),
      (Kv = (e, t, r) =>
        k.forwardRef((i, a) => {
          let { sheet: o, cache: s } = k.useContext(Bv) ?? {},
            c = r;
          if (!Pa()) {
            Qe(t) && (t = t(Y.current(), i));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Jv.add(e, c);
          }
          return (
            n(() => {
              (c && Wv.has(c)) ||
                (Qe(t)
                  ? t(Y.current(), i)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Va(e, o, s));
            }, []),
            _(e, { ...i, ref: a })
          );
        })),
      (qv = class {
        constructor() {
          (M(this, `styles`, new Set()), M(this, `componentIds`, new Set()));
        }
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (Jv = new qv()),
      (Xv = `flexbox-gap-not-supported`),
      (Zv = !1),
      (Qv = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      ($v = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))($v || {})),
      (ey = $v),
      (ty = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (z(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Wa(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            z(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${ey.BorderTopWidth}${ey.BorderRightWidth}${ey.BorderBottomWidth}${ey.BorderLeftWidth}`,
      (ny = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (ry = { display: `inline-block` }),
      (iy = { display: `block` }),
      (ay = (() => [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${ny.display};
            flex-direction: ${ny.flexDirection};
            justify-content: ${ny.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${Ga([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Ga([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Ga([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${ry.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${Ga([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Ga([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ga([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ga([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Ga([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Ga([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Ga([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Ga([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Ga([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${Ga([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ga([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Ga([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${Ga([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ga([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${Ga([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ga([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ga([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${Ga([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ga([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${iy.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 10),
        ol.framer-text > li.framer-text:nth-last-child(n + 10) ~ li {
            padding-inline-start: 3ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 100),
        ol.framer-text > li.framer-text:nth-last-child(n + 100) ~ li {
            padding-inline-start: 4ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000) ~ li {
            padding-inline-start: 5ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 10000),
        ol.framer-text > li.framer-text:nth-last-child(n + 10000) ~ li {
            padding-inline-start: 6ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 100000),
        ol.framer-text > li.framer-text:nth-last-child(n + 100000) ~ li {
            padding-inline-start: 7ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000) ~ li {
            padding-inline-start: 8ch;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            vertical-align: top;
        }
    `,
        `
        ${Ka(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ])()),
      (oy = `--text-truncation-display-inline-for-safari-16`),
      (sy = `--text-truncation-display-none-for-safari-16`),
      (cy = `--text-truncation-line-break-for-safari-16`),
      (ly = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (uy = `(background: -webkit-named-image(i))`),
      (dy = `(contain-intrinsic-size: inherit)`),
      (fy = (() => [
        `@supports ${uy} and (not ${dy}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${ly.join(`, `)} { display: var(${oy}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${ly.map((e) => `${e}::after`).join(`, `)} { content: var(${cy}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${sy}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${oy}, ${ry.display}) }
    }`,
      ])()),
      (py = [`[data-framer-component-type] { position: absolute; }`]),
      (my = [
        `[data-framer-component-type="Text"] { cursor: inherit; }`,
        `[data-framer-component-text-autosized] * { white-space: pre; }`,
        `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
        `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
        `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
        `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
        `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
        `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
        `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
        `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
      ]),
      (hy = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`),
      (gy = (() => [
        `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
        `.${Xv} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
      ])()),
      (_y = (() => `
.${Xv} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)()),
      (vy = (() => `
.${Xv}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Xv}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)()),
      (yy = (() => `
.${Xv}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Xv}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)()),
      (by = (() => [hy, _y, ...gy, vy, yy])()),
      (xy = [
        `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
      ]),
      (Sy = [
        `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
        `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
      ]),
      (Cy = [
        `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
        `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
        `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
      ]),
      (wy = [
        `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
      ]),
      (Ty = [
        `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
      ]),
      (Ey = [
        `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
      ]),
      (Dy = [
        `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
      ]),
      (Oy = [
        `[data-framer-cursor="pointer"] { cursor: pointer; }`,
        `[data-framer-cursor="grab"] { cursor: grab; }`,
        `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
      ]),
      (ky = [
        `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
        `[data-framer-generated] * { pointer-events: unset }`,
      ]),
      (Ay = [
        `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
      ]),
      (jy = [
        `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
        `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
        `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
      ]),
      (My = `--framer-will-change-override`),
      (Ny = `--framer-will-change-effect-override`),
      (Py = `--framer-will-change-filter-override`),
      (Fy = `(background: -webkit-named-image(i))`),
      (Iy = `(grid-template-rows: subgrid)`),
      (Ly = `(position-area: top right)`),
      (Ry = (e) =>
        e
          ? [
              `body { ${My}: none; }`,
              `@supports ${Fy} and (not ${Iy}) { body { ${My}: transform; } }`,
            ]
          : [`body { ${My}: none; ${Ny}: none; }`]),
      (zy = (e) =>
        e
          ? [`body { ${Py}: none; }`, `@supports ${Fy} and (not ${Ly}) { body { ${Py}: filter; } }`]
          : [`body { ${Py}: none; }`]),
      (By = (e) => (e ? ky : [])),
      (Vy = [`.svgContainer svg { display: block; }`]),
      (Hy = `--overflow-clip-fallback`),
      (Uy = (() => [
        `@supports (not (overflow: clip)) {
        :root { ${Hy}: hidden; }
    }`,
      ])()),
      (Wy = `--one-if-corner-shape-supported`),
      (Gy = (() => [`@supports (corner-shape: superellipse(2)) { :root { ${Wy}: 1 } }`])()),
      (Ky = (e) => [
        ...Ry(e),
        ...zy(e),
        ...py,
        ...my,
        ...ay,
        ...Qv,
        ...by,
        ...xy,
        ...Sy,
        ...Cy,
        ...Ty,
        ...wy,
        ...Ey,
        ...Oy,
        ...By(e),
        ...Vy,
        ...Ay,
        ...jy,
        ...Uy,
        ...Dy,
        ...fy,
        ...Gy,
      ]),
      (qy = Ky(!1)),
      (Jy = Ky(!0)),
      (Yy = `optional`),
      (Xy = (e) => e),
      (Zy =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Qy = ao(
        (e) =>
          Zy.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      ($y = (e) => () => {
        ni(e);
      }),
      (eb = () => () => {}),
      (tb = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = rb.useImageSource(e, t, n);
          return C(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (nb = !1),
      (rb = new Proxy(tb, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? eb()
              : $y(
                  nb
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (ib = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (ab = [1, 2, 2.2]),
      (ob = [512, 1024, 2048, 4096]),
      (sb = 512),
      (cb = (() => ({ position: `absolute`, ...ib, top: 0, right: 0, bottom: 0, left: 0 }))()),
      (lb = `src`),
      (ub = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && lb in e;
        },
      }),
      (db = ja()),
      (fb = typeof document < `u` ? f : c),
      (pb = k.createContext(!1)),
      (mb = class {
        constructor() {
          (M(this, `sharedResizeObserver`),
            M(this, `callbacks`, new WeakMap()),
            (this.sharedResizeObserver = new ResizeObserver(
              this.updateResizedElements.bind(this)
            )));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (hb = (() => (Pa() ? new mb() : void 0))()),
      (gb = `data-framer-size-compatibility-wrapper`),
      (_b = `0.000001px`),
      (vb = (() => ` translateZ(${_b})`)()),
      (yb = (() => Fa() || Ma() || Ia())()),
      (bb = (() => {
        class e extends v {
          constructor() {
            (super(...arguments),
              M(this, `layerElement`, null),
              M(this, `setLayerElement`, (e) => {
                this.layerElement = e;
              }));
          }
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? Bo(t) : Vo(t));
          }
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Dt(this.props, e);
          }
          componentDidUpdate(e) {
            Xy(this.props).clip &&
              Xy(this.props).radius === 0 &&
              Xy(e).radius !== 0 &&
              Uo(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return (M(e, `defaultProps`, {}), e);
      })()),
      (xb = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (Sb = {
        hueRotate: (e, t) => J.toHslString(J.hueRotate(J(e), t)),
        setAlpha: (e, t) => J.toRgbString(J.alpha(J(e), t)),
        getAlpha: (e) => {
          let t = Di(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => J.toRgbString(J.multiplyAlpha(J(e), t)),
        toHexValue: (e) => J.toHex(J(e)).toUpperCase(),
        toHex: (e) => J.toHexString(J(e)).toUpperCase(),
        toRgb: (e) => J.toRgb(J(e)),
        toRgbString: (e) => J.toRgbString(J(e)),
        toHSV: (e) => J.toHsv(J(e)),
        toHSL: (e) => J.toHsl(J(e)),
        toHslString: (e) => J.toHslString(J(e)),
        toHsvString: (e) => J.toHsvString(J(e)),
        hsvToHSLString: (e) => J.toHslString(J(hi(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => J.toHex(J(hi(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => J.toHexString(J(hi(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => J.toRgbString(J(hi(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => hi(e.h, e.s, e.v),
        rgbaToString: (e) => J.toRgbString(J(e)),
        rgbToHexValue: (e) => J.toHex(J(e)),
        rgbToHexString: (e) => J.toHexString(J(e)),
        hslToString: (e) => J.toHslString(J(e)),
        hslToRgbString: (e) => J.toRgbString(J(e)),
        toColorPickerSquare: (e) => J.toRgbString(J({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => J(e).isValid !== !1,
        equals: (e, t) =>
          J.isP3String(e) || J.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = J(e)),
              typeof t == `string` && (t = J(t)),
              J.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = J(e);
          return t.a === 1 ? J.toHexString(t) : J.toRgbString(t);
        },
        toFormatString: (e) => (J.isP3String(e) ? e : J.toRgbString(J(e))),
      }),
      (Cb = /var\(.+\)/u),
      (wb = new Map()),
      (Tb = [`stops`]),
      (Eb = [`start`, `end`]),
      (Db = [`angle`, `alpha`]),
      (Ob = {
        isLinearGradient: (e) => R(e) && Db.every((t) => t in e) && (Zo(e) || Xo(e)),
        hash: (e) => e.angle ^ Yo(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Jo(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (kb = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (Ab = {
        isRadialGradient: (e) => R(e) && kb.every((t) => t in e) && (Zo(e) || Xo(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Yo(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Jo(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (jb = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (Mb = (() => new Set([...jb, ...jb.map((e) => `${e}Capture`)]))()),
      (Nb = `overflow`),
      (Pb = { x: 0, y: 0, width: 200, height: 200 }),
      (Fb = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (Ib = m(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: u } = Ao(e),
          d = cs(c),
          f = Mo(e),
          p = rs(e),
          m = l(null),
          h = n ?? m,
          g = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": p,
            "data-framer-highlight": p === `pointer` ? !0 : void 0,
            "data-layoutid": f,
            "data-framer-offset-parent-id": Xy(e)[`data-framer-offset-parent-id`],
          };
        !ls(e) && r && (Xy(g)[`data-framer-name`] = r);
        let [v, y] = ss(c),
          b = os(c),
          x = wa(b);
        (i && !(y && !x && fa(b))
          ? ((d.transformTemplate ||= jo(i)), Object.assign(g, Oo(i)))
          : (d.transformTemplate ||= void 0),
          Ro(e, h));
        let S = wo(e),
          C = us(c, b, y, t(pb)),
          w = Sa(
            T(D, {
              children: [
                S
                  ? _(bo, {
                      alt: e.alt ?? ``,
                      image: S,
                      containerSize: y ?? void 0,
                      nodeId: e.id && ko(e.id),
                      layoutId: f,
                    })
                  : null,
                u,
                _(So, { ...o, border: a, layoutId: f }),
              ],
            }),
            C
          ),
          ee = Eo(e.as),
          E = To(S);
        return (
          e.fitImageDimension &&
            E &&
            ((v[e.fitImageDimension] = `auto`), (v.aspectRatio = E.width / E.height)),
          T(ee, { ...g, ...d, layoutId: f, style: v, ref: h, children: [w, s] })
        );
      })),
      (Lb = Ja(
        m(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? _(Ib, { ...e, ref: t }) : null;
        })
      )),
      (Rb = `__LAYOUT_TREE_ROOT`),
      (zb = k.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (Bb = class extends v {
        constructor() {
          (super(...arguments),
            M(this, `shouldAnimate`, !1),
            M(this, `transition`),
            M(this, `lead`),
            M(this, `follow`),
            M(this, `scheduledPromotion`, !1),
            M(this, `scheduledDidUpdate`, !1),
            M(this, `scheduleProjectionDidUpdate`, () => {
              this.scheduledDidUpdate = !0;
            }),
            M(this, `schedulePromoteTree`, (e, t, n) => {
              ((this.follow = this.lead),
                (this.shouldAnimate = n),
                (this.lead = e),
                (this.transition = t),
                (this.scheduledPromotion = !0));
            }),
            M(this, `initLead`, (e, t) => {
              ((this.follow = this.lead),
                (this.lead = e),
                this.follow && t && (this.follow.layoutMaybeMutated = !0));
            }),
            M(this, `sharedLayoutContext`, {
              schedulePromoteTree: this.schedulePromoteTree,
              scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
              initLead: this.initLead,
            }));
        }
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === Rb && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        render() {
          return _(zb.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (Vb = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Hb = class {
        constructor(e) {
          (M(this, `sharedIntersectionObserver`),
            M(this, `callbacks`, new WeakMap()),
            (this.sharedIntersectionObserver = new IntersectionObserver(
              this.intersectionObserverCallback.bind(this),
              e
            )));
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (Ub = a(new Map())),
      (Wb = typeof IntersectionObserver > `u` ? Lh : vs),
      (Gb = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (Kb = k.createContext(null)),
      (qb = class extends v {
        constructor() {
          (super(...arguments),
            M(this, `layoutMaybeMutated`, !1),
            M(this, `projectionNodes`, new Map()),
            M(this, `rootProjectionNode`),
            M(this, `isExiting`),
            M(
              this,
              `shouldPreserveFollowOpacity`,
              (e) => e.options.layoutId === Rb && !this.props.isExiting
            ),
            M(this, `switchLayoutGroupContext`, {
              register: (e) => this.addChild(e),
              deregister: (e) => this.removeChild(e),
              transition:
                this.props.isLead !== void 0 && this.props.animatesLayout
                  ? this.props.transition
                  : void 0,
              shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
            }));
        }
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return _(Le.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (Jb = (e) => {
        let t = k.useContext(zb);
        return _(qb, { ...e, sharedLayoutContext: t });
      }),
      (Yb = k.createContext(!0)),
      (Xb = a({ register: () => {}, deregister: () => {} })),
      (Zb = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = ws(),
          i = l({
            register: s(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: s(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          c(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, Qe(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          _(Xb.Provider, { value: i, children: n })
        );
      }),
      (Qb = k.memo(function ({
        isLayeredContainer: e,
        isCurrent: n,
        isPrevious: r,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: u,
        onTapBackdrop: d,
        backfaceVisible: f,
        exitBackfaceVisible: p,
        animation: m,
        exitAnimation: h,
        instant: g,
        initialProps: v,
        exitProps: y,
        position: b = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: x,
        index: S,
        areMagicMotionLayersPresent: C,
        id: w,
        isInitial: ee,
      }) {
        let E = _e(),
          D = t(Oe),
          { persistLayoutIdCache: te } = t(fv),
          O = l({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Ds({}, v, o),
          }),
          ne = l(null),
          k = D !== null && !D.isPresent;
        (n && O.current.wasCurrent === void 0 && te(),
          c(() => {
            if (e || !E) return;
            if (k) {
              O.current = { ...O.current, wasBeingRemoved: k };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = O.current,
              a = (n && !i) || (!k && O.current.wasBeingRemoved && n),
              s = r && !t,
              c = Ds(O.current.origins, v, o),
              l = O.current.wasReset;
            (a || s
              ? (E.stop(), E.start({ zIndex: S, ...c, ...o }), (l = !1))
              : l === !1 && (E.stop(), E.set({ zIndex: S, ...$b, opacity: 0 }), (l = !0)),
              (O.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, k]));
        let re = g ? { type: !1 } : `velocity` in m ? { ...m, velocity: 0 } : m,
          A = g ? { type: !1 } : h || m,
          ie = { ...b };
        ((ie.left === void 0 || ie.right === void 0) && (ie.width = `auto`),
          (ie.top === void 0 || ie.bottom === void 0) && (ie.height = `auto`));
        let ae = (Os(o) || Os(v)) && (e || n || r) ? 1200 : void 0,
          oe = { ...$b, ...O.current.origins },
          se = e
            ? {
                initial: { ...oe, ...v },
                animate: { ...oe, ...o, transition: re },
                exit: { ...oe, ...y, transition: m },
              }
            : { animate: E, exit: { ...oe, ...y, transition: A } },
          ce = !(k || C === !1),
          le = !!n && ce,
          ue = n && ee;
        return T(Lb, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || k || (n && x) ? S : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: ae,
          },
          children: [
            e &&
              _(Lb, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: m,
                initial: { opacity: g && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: u || `transparent`,
                onTap: k ? void 0 : d,
              }),
            _(Lb, {
              ...ie,
              ...se,
              transition: {
                default: re,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: k ? p : f,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: { pointerEvents: void 0, opacity: ue || e || (n && x) ? 1 : 0 },
              "data-is-present": ce ? void 0 : !1,
              ref: ne,
              children: _(Kb.Provider, {
                value: ne,
                children: _(Yb.Provider, {
                  value: le,
                  children: _(Zb, {
                    isCurrent: le,
                    isOverlayed: i,
                    children: _(Jb, {
                      isLead: n,
                      animatesLayout: !!x,
                      transition: re,
                      isExiting: !ce,
                      isOverlayed: i,
                      id: w,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, Es)),
      ($b = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (ex = class {
        constructor() {
          (M(this, `warning`, () => {
            ni(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
          }),
            M(this, `goBack`, () => this.warning()),
            M(this, `instant`, () => this.warning()),
            M(this, `fade`, () => this.warning()),
            M(this, `push`, () => this.warning()),
            M(this, `modal`, () => this.warning()),
            M(this, `overlay`, () => this.warning()),
            M(this, `flip`, () => this.warning()),
            M(this, `customTransition`, () => this.warning()),
            M(this, `magicMotion`, () => this.warning()));
        }
      }),
      (tx = a(new ex())),
      (nx = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (rx = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (ix = Jh($b)),
      (ax = k.createContext(void 0)),
      (ox = k.createContext(void 0)),
      (sx = (() => {
        var e, t, n, r, i, a, o;
        return (
          (t = class extends v {
            constructor(t) {
              (super(t),
                me(this, n),
                me(this, e, null),
                M(this, `state`, rx()),
                me(this, a, (e) => {
                  if (!this.props.enabled && this.state.history.length > 0) return;
                  let t = Ms(this.state, e);
                  if (!t) return;
                  let { skipLayoutAnimation: n } = this.props,
                    r = t.history[t.current],
                    i =
                      (e.type === `add` && e.transition.withMagicMotion) ||
                      (e.type === `forward` && r?.transition.withMagicMotion) ||
                      (e.type === `remove` && !!t.previousTransition),
                    a = () => {
                      (this.setState(t), r?.key && this.context?.(r.key));
                    };
                  n && !i ? n(a) : a();
                }),
                M(this, `goBack`, () => {
                  if (!P(this, n, i).call(this))
                    return (
                      we(this, e, globalThis.event?.timeStamp || null),
                      this.state.currentOverlay === -1
                        ? F(this, a).call(this, { type: `remove` })
                        : F(this, a).call(this, { type: `removeOverlay` })
                    );
                }));
              let r = this.props.children;
              if (!r || !ea(r) || !$i(r)) return;
              let o = { ...nx.Instant },
                s = {
                  type: `add`,
                  key: r.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                  transition: o,
                  component: r,
                },
                c = Ms(this.state, s);
              c && (this.state = c);
            }
            componentDidMount() {
              let e = this.state.history[this.state.current];
              e && this.context?.(e.key);
            }
            UNSAFE_componentWillReceiveProps(e) {
              let t = e.children;
              if (!ea(t) || !$i(t)) return;
              let r = t.key?.toString();
              r &&
                (this.state.history.length === 0
                  ? P(this, n, o).call(this, t, nx.Instant)
                  : F(this, a).call(this, { type: `update`, key: r, component: t }));
            }
            componentWillUnmount() {
              this.props.resetProjection?.();
            }
            instant(e) {
              P(this, n, o).call(this, e, nx.Instant, void 0);
            }
            fade(e, t) {
              P(this, n, o).call(this, e, nx.Fade, t);
            }
            push(e, t) {
              P(this, n, o).call(this, e, ks(t), t);
            }
            modal(e, t) {
              P(this, n, o).call(this, e, nx.Modal, t);
            }
            overlay(e, t) {
              P(this, n, o).call(this, e, As(t), t);
            }
            flip(e, t) {
              P(this, n, o).call(this, e, js(t), t);
            }
            magicMotion(e, t) {
              P(this, n, o).call(this, e, nx.MagicMotion, t);
            }
            customTransition(e, t) {
              P(this, n, o).call(this, e, t);
            }
            render() {
              let e = P(this, n, r).call(this, { overCurrentContext: !1 }),
                t = P(this, n, r).call(this, { overCurrentContext: !0 }),
                i = qs(t),
                a = t.current > -1,
                o = this.state.history.length === 1,
                s = [];
              for (let [t, n] of Object.entries(this.state.containers)) {
                let r = this.state.containerIndex[t];
                z(r !== void 0, `Container's index must be registered`);
                let i = this.state.containerVisualIndex[t];
                z(i !== void 0, `Container's visual index must be registered`);
                let c = this.state.containerIsRemoved[t],
                  l = this.state.history[r],
                  u = this.state.transitionForContainer[t],
                  d = r === this.state.current,
                  f = r === this.state.previous,
                  p = d ? !1 : c,
                  m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
                s.push(
                  _(
                    Qb,
                    {
                      id: t,
                      index: i,
                      isInitial: o,
                      isCurrent: d,
                      isPrevious: f,
                      isOverlayed: a,
                      visible: d || f,
                      position: l?.transition?.position,
                      instant: rc(r, e),
                      transitionProps: u,
                      animation: nc(r, e),
                      backfaceVisible: ec(r, e),
                      exitAnimation: l?.transition?.animation,
                      exitBackfaceVisible: l?.transition?.backfaceVisible,
                      exitProps: l?.transition?.enter,
                      withMagicMotion: m,
                      areMagicMotionLayersPresent: p ? !1 : void 0,
                      children: _(ds, {
                        children: ac({ component: n, transition: l?.transition }),
                      }),
                    },
                    t
                  )
                );
              }
              let c = this.state.overlayStack.map((e, n) =>
                _(
                  Qb,
                  {
                    isLayeredContainer: !0,
                    isCurrent: n === this.state.currentOverlay,
                    position: e.transition.position,
                    initialProps: $s(n, t),
                    transitionProps: tc(n, t),
                    instant: rc(n, t, !0),
                    animation: nc(n, t),
                    exitProps: e.transition.enter,
                    visible: ic(n, t),
                    backdropColor: Zs(e.transition),
                    backfaceVisible: Qs(n, t),
                    onTapBackdrop: oc(e.transition, this.goBack),
                    index: this.state.current + 1 + n,
                    children: ac({ component: e.component, transition: e.transition }),
                  },
                  e.key
                )
              );
              return _(Lb, {
                "data-framer-component-type": `NavigationRoot`,
                top: 0,
                left: 0,
                width: `100%`,
                height: `100%`,
                position: `relative`,
                style: {
                  overflow: `hidden`,
                  backgroundColor: `unset`,
                  pointerEvents: void 0,
                  ...this.props.style,
                },
                children: _(tx.Provider, {
                  value: this,
                  children: T(ox.Provider, {
                    value: o,
                    children: [
                      _(Qb, {
                        isLayeredContainer: !0,
                        position: void 0,
                        initialProps: {},
                        instant: !1,
                        transitionProps: Js(i),
                        animation: Ys(i),
                        backfaceVisible: Xs(i),
                        visible: !0,
                        backdropColor: void 0,
                        onTapBackdrop: void 0,
                        index: 0,
                        children: _(Ki, {
                          children: _(Bb, {
                            children: _(ze, { presenceAffectsLayout: !1, children: s }),
                          }),
                        }),
                      }),
                      _(ze, { children: c }),
                    ],
                  }),
                }),
              });
            }
          }),
          (e = new WeakMap()),
          (n = new WeakSet()),
          (r = function (e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }),
          (i = function () {
            return globalThis.event ? F(this, e) === globalThis.event.timeStamp : !1;
          }),
          (a = new WeakMap()),
          (o = function (t, r, o) {
            if (
              P(this, n, i).call(this) ||
              (we(this, e, globalThis.event?.timeStamp || null), !t || !ea(t) || !$i(t))
            )
              return;
            let s = { ...r, ...o };
            if (s.overCurrentContext)
              return F(this, a).call(this, { type: `addOverlay`, transition: s, component: t });
            let c = t.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            F(this, a).call(this, { type: `add`, key: c, transition: s, component: t });
          }),
          M(t, `defaultProps`, { enabled: !0 }),
          M(t, `contextType`, ax),
          t
        );
      })()),
      (cx = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (lx = Ja(sc)),
      Ae(Fh(), 1),
      (ux = Ae(Fh(), 1)),
      (dx = class e {
        constructor(t, n) {
          ((this.originalEvent = t),
            (this.session = n),
            M(this, `time`, Date.now()),
            M(this, `loopTime`, lv.time),
            M(this, `point`),
            M(this, `devicePoint`),
            M(this, `target`),
            M(this, `delta`));
          let r = (n && n.startEvent && n.startEvent.target) || t.target,
            i = e.eventLikeFromOriginalEvent(t);
          ((this.point = cc(i, r)),
            (this.devicePoint = cc(i, n && n.originElement ? n.originElement : document.body)),
            (this.target = t.target || null));
          let a = n && n.lastEvent;
          t instanceof WheelEvent
            ? (this.delta = { x: t.deltaX, y: t.deltaY })
            : a && this.devicePoint && a.devicePoint
              ? (this.delta = ci.subtract(this.devicePoint, a.devicePoint))
              : (this.delta = { x: 0, y: 0 });
        }
        static eventLikeFromOriginalEvent(e) {
          if (`touches` in e) {
            let t = e.touches;
            (!t || !t.length) &&
              e.changedTouches &&
              e.changedTouches.length &&
              (t = e.changedTouches);
            let n = t[0];
            return !t || !n
              ? { pageX: 0, pageY: 0, target: null }
              : {
                  pageX: n.clientX || n.screenX || n.pageX,
                  pageY: n.clientY || n.screenY || n.pageY,
                  target: e.target,
                };
          }
          return e;
        }
        velocity(e) {
          return this.session ? this.session.velocity(e) : { x: 0, y: 0 };
        }
        get offset() {
          return this.session ? this.session.offset(this) : { x: 0, y: 0 };
        }
        get isLeftMouseClick() {
          if (!La())
            return `button` in this.originalEvent &&
              `buttons` in this.originalEvent &&
              `ctrlKey` in this.originalEvent
              ? (this.originalEvent.button === 0 || this.originalEvent.buttons === 1) &&
                  !this.originalEvent.ctrlKey
              : !1;
        }
      }),
      Ae(Fh(), 1),
      (fx = k.createContext({ dragging: !1 })),
      (px = { onMouseEnter: `mouseenter`, onMouseLeave: `mouseleave` }),
      (mx = Object.keys(px)),
      (hx = {
        panstart: [`onPanStart`],
        pan: [`onPan`],
        panend: [`onPanEnd`],
        tapstart: [`onTapStart`, `onMouseDown`],
        tap: [`onTap`, `onClick`],
        tapend: [`onTapEnd`, `onMouseUp`],
        mousewheelstart: [`onMouseWheelStart`],
        mousewheel: [`onMouseWheel`],
        mousewheelend: [`onMouseWheelEnd`],
      }),
      (gx = new Set([`tapstart`, `tap`, `tapend`])),
      (_x = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (vx = Symbol(`private`)),
      (yx = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [vx]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new V_(),
                reset() {
                  for (let t in i)
                    if (_x(i, t)) {
                      let n = _x(e, t) ? Xy(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, xx);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[vx].reset()),
          (e.addObserver = (e, t) => e[vx].observers.add(t)),
          e
        );
      })()),
      (bx = class {
        constructor() {
          (M(this, `set`, (e, t, n, r) => {
            if (t === vx) return !1;
            let i = e[vx],
              a,
              o;
            if (
              (V(n) ? ((a = n), (o = a.get())) : (o = n),
              i.makeAnimatables &&
                typeof n != `function` &&
                typeof n != `object` &&
                !a &&
                (a = q(n)),
              i.observeAnimatables && a)
            ) {
              let e = i.transactions;
              a.onUpdate({
                update: (t, n) => {
                  (n && e.add(n), i.observers.notify({ value: r }, n));
                },
                finish: (t) => {
                  e.delete(t) && i.observers.finishTransaction(t);
                },
              });
            }
            let s = !1,
              c = !0,
              l = Xy(e)[t];
            if (l !== void 0) {
              V(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Xy(e)[t] = o));
              let n = typeof o == `object` && !!o;
              ((Array.isArray(o) || n) && (c = !0), (s = !0));
            } else (a && (n = a), (s = Reflect.set(e, t, n)));
            return (c && i.observers.notify({ value: r }), s);
          }),
            M(this, `get`, (e, t, n) => {
              if (t === vx) return Xy(e)[t];
              let r = Reflect.get(e, t, n);
              return typeof r == `function` ? r.bind(n) : r;
            }));
        }
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[vx].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(vx);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== vx) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (xx = new bx()),
      (Sx = `opacity`),
      (Cx = `radius`),
      (wx = [`x`, `y`, `color`, `inset`, `blur`, `spread`]),
      (Tx = {
        is: (e) => e && wx.every((t) => t in e),
        toCSS: (e) =>
          `${e.inset ? `inset ` : ``}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`,
      }),
      (Ex = (() => q.getNumber)()),
      (Dx = {
        z: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
      }),
      (Ox = (() => {
        let e = class e extends bb {
          constructor() {
            (super(...arguments),
              M(this, `element`, null),
              M(this, `imageDidChange`, !1),
              M(this, `state`, { size: null }),
              M(this, `updateStyle`, () => {
                this.element && Object.assign(this.element.style, this.getStyle());
              }),
              M(this, `setElement`, (e) => {
                ((this.element = e), this.setLayerElement(e));
              }),
              M(this, `propsObserver`),
              M(this, `propsObserverCancel`),
              M(this, `sizeObserver`),
              M(this, `sizeObserverCancel`),
              M(this, `onPropsChange`, (t) => {
                let n = e.rect(q.objectToValues(t.value));
                (this.state.size &&
                  V(this.state.size.width) &&
                  V(t.value.width) &&
                  this.state.size.width.set(n.width),
                  this.state.size &&
                    V(this.state.size.height) &&
                    V(t.value.height) &&
                    this.state.size.height.set(n.height),
                  this.updateStyle());
              }),
              M(this, `onSizeChange`, () => {
                this.updateStyle();
              }));
          }
          static rect(e) {
            let t = Sv.fromProperties(e),
              n = e.parentSize
                ? { sizing: e.parentSize, positioning: e.parentSize, viewport: null }
                : null;
            return Sv.toRect(t, n, null, !0);
          }
          get rect() {
            return e.rect(this.props);
          }
          static getDerivedStateFromProps(t, n) {
            let r = e.updatedSize(t, n),
              { target: i } = uv;
            return t.background && ub.isImageObject(t.background) && t.background.src
              ? { size: r }
              : n.size &&
                  (i === Y.preview || (n.size.width === r.width && n.size.height === r.height))
                ? null
                : { size: r };
          }
          static updatedSize(t, n) {
            let r = e.rect(t),
              i = n.size,
              a = { width: r.width, height: r.height },
              { target: o } = uv;
            return (
              i
                ? V(i.width) && V(i.height)
                  ? (i.width.set(a.width), i.height.set(a.height))
                  : (i = a)
                : (i = o === Y.preview ? yx(a, !0) : a),
              i
            );
          }
          getStyle() {
            let e = this.rect,
              t = {
                display: `block`,
                position: `absolute`,
                width: `${e.width}px`,
                height: `${e.height}px`,
                pointerEvents: void 0,
                userSelect: `none`,
              },
              n = q.get(this.props.left, void 0),
              r = q.get(this.props.top, void 0);
            Object.assign(t, this.props._initialStyle);
            let i = this.context.parentSize !== 1,
              a = q.get(this.props.perspective, void 0);
            ((t.perspective = a), (t.WebkitPerspective = a));
            let o,
              s = q.get(this.props.backfaceVisible, void 0);
            (s === !0 ? (o = `visible`) : s === !1 && (o = `hidden`),
              (t.backfaceVisibility = o),
              (t.WebkitBackfaceVisibility = o));
            let c = q.get(this.props.preserve3d, void 0);
            if (
              (c === !0
                ? (t.transformStyle = `preserve-3d`)
                : c === !1 && (t.transformStyle = `flat`),
              !i)
            ) {
              (jc(t, this.props, `right`), jc(t, this.props, `bottom`));
              let e = Ac(q.get(this.props.width, void 0)),
                i = Ac(q.get(this.props.height, void 0));
              (typeof n == `string` &&
                n.endsWith(`%`) &&
                this.props.right === null &&
                ((n = `calc(${n} - calc(${e}} / 2))`), (t.width = e)),
                typeof r == `string` &&
                  r.endsWith(`%`) &&
                  this.props.bottom === null &&
                  ((r = `calc(${r} - calc(${i} / 2))`), (t.height = i)),
                r !== void 0 && t.bottom !== void 0
                  ? ((t.height = void 0), (r = Ac(q.get(this.props.top, void 0))))
                  : (t.height = i),
                n !== void 0 && t.right !== void 0
                  ? ((t.width = void 0), (n = Ac(q.get(this.props.left, void 0))))
                  : (t.width = e));
            }
            let l = { ...e };
            return (
              n !== void 0 && (l.x = n),
              r !== void 0 && (l.y = r),
              Dc(this.props, l, t),
              Tc(this.props, t),
              kc(this.props, t),
              bb.applyWillChange(this.props, t, !1),
              this.props.style && Object.assign(t, this.props.style),
              t
            );
          }
          componentDidMount() {
            let { target: e } = uv;
            e === Y.preview &&
              ((this.propsObserver = yx(this.props, !0)),
              (this.propsObserverCancel = yx.addObserver(this.propsObserver, this.onPropsChange)),
              this.props.parentSize &&
                V(this.props.parentSize.width) &&
                V(this.props.parentSize.height) &&
                ((this.sizeObserver = yx(this.props.parentSize, !0)),
                (this.sizeObserverCancel = yx.addObserver(this.sizeObserver, this.onSizeChange))));
          }
          componentDidUpdate() {
            let { target: e } = uv;
            (this.propsObserverCancel && this.propsObserverCancel(),
              this.sizeObserverCancel && this.sizeObserverCancel(),
              e === Y.preview &&
                ((this.propsObserver = yx(this.props, !0)),
                (this.propsObserverCancel = yx.addObserver(this.propsObserver, this.onPropsChange)),
                this.props.parentSize &&
                  V(this.props.parentSize.width) &&
                  V(this.props.parentSize.height) &&
                  ((this.sizeObserver = yx(this.props.parentSize, !0)),
                  (this.sizeObserverCancel = yx.addObserver(
                    this.sizeObserver,
                    this.onSizeChange
                  )))));
          }
          componentWillUnmount() {
            (this.propsObserverCancel && this.propsObserverCancel(),
              (this.propsObserverCancel = void 0),
              this.sizeObserverCancel && this.sizeObserverCancel(),
              (this.sizeObserverCancel = void 0));
          }
          render() {
            let { visible: e, id: t, className: n } = this.props;
            if (!e) return null;
            let r = this.getStyle(),
              i = this.rect,
              a = { width: i.width, height: i.height };
            return T(`div`, {
              id: t,
              style: r,
              ref: this.setElement,
              className: n,
              children: [
                _(Ev, { parentSize: a, children: this.layoutChildren() }),
                _(So, { ...this.props }),
              ],
            });
          }
          layoutChildren() {
            let e = this.props._forwardedOverrides,
              t = k.Children.map(this.props.children, (t) =>
                ra(t)
                  ? k.cloneElement(t, { parentSize: this.state.size, _forwardedOverrides: e })
                  : e && t
                    ? k.cloneElement(t, { _forwardedOverrides: e })
                    : t
              );
            return (
              t && t.length === 1 && typeof t[0] == `string` && (t = [_(Mc, { children: t }, `0`)]),
              t
            );
          }
        };
        (M(e, `supportsConstraints`, !0),
          M(e, `defaultFrameSpecificProps`, {
            ...bv,
            ...Dx,
            opacity: 1,
            background: J(`rgba(0, 170, 255, 0.3)`),
            visible: !0,
            borderWidth: 0,
            borderColor: `#222`,
            borderStyle: `solid`,
          }),
          M(e, `defaultProps`, { ...bb.defaultProps, ...e.defaultFrameSpecificProps }));
        let t = e;
        return ((t.contextType = Tv), t);
      })()),
      (kx =
        `_border._constraints.animate.initial.variants.transition.inherit.center.initial.transformTemplate.animate.variants.transition.onUpdate.onAnimationComplete.onPanSessionStart.onTapCancel.whileTap.whileHover.onHoverStart.onHoverEnd.drag.dragDirectionLock.dragPropagation.dragConstraints.dragElastic.dragMomentum.dragTransition.onDragStart.onDragEnd.onDrag.onDirectionLock.onDragTransitionEnd.x.y.rotate.rotateX.rotateY.rotateZ.position.border.borderRadius.cornerShape.shadow.size`.split(
          `.`
        )),
      (Ax = [
        `autoSize`,
        `aspectRatio`,
        `borderWidth`,
        `borderStyle`,
        `borderColor`,
        `centerX`,
        `centerY`,
      ]),
      (jx = lc(Ox)),
      (Mx = (() => {
        let e = m(function (e, t) {
          let n = va();
          if (Nc(e)) {
            let t = e.parentSize || _a(n);
            return _(jx, { ...e, parentSize: t });
          }
          return _(Lb, { ...e, ref: t });
        });
        return ((e.displayName = `Frame`), e);
      })()),
      (Nx = (() => {
        function e(t = {}) {
          let n = yx(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => yx.resetObject(e));
          }),
          (e.addObserver = (e, t) => yx.addObserver(e, t)),
          e
        );
      })()),
      (Px = { update: 0 }),
      (Fx = k.createContext({ update: NaN })),
      (Ix = class extends v {
        constructor() {
          (super(...arguments),
            M(this, `observers`, []),
            M(this, `state`, Px),
            M(this, `taskAdded`, !1),
            M(this, `frameTask`, () => {
              (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
            }),
            M(this, `observer`, () => {
              this.taskAdded || ((this.taskAdded = !0), lv.addFrameTask(this.frameTask));
            }));
        }
        componentWillUnmount() {
          (this.observers.map((e) => e()), Nx.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            Nx._stores.forEach((e) => {
              let t = Nx.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            _(Fx.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Ae(Fh(), 1),
      (Lx = `__framer__`),
      (Rx = (() => Lx.length)()),
      (zx = k.createContext(void 0)),
      (Bx = k.createContext(void 0)),
      (Vx = `ssr-variant`),
      (Hx = `ssr-variant-group-separator`),
      (Ux = k.forwardRef(function (e, t) {
        let n = Hc(t),
          r = k.useContext(Bx),
          i = k.useSyncExternalStore(Hh, Wh, Uh),
          a = Yi(() => (i ? (Pa() ? 1 : 2) : 0)),
          o = k.useContext(zx);
        return _r(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, Xc(t, c, i));
            case 1:
              return Gc(i, s, c, u, l, d, n, t);
            case 2:
              return Gc(i, s, c, u, l, d, Vc, void 0);
            default:
              B(a);
          }
        }, [o, r, n, e]);
      })),
      (Wx = (() => Kv(Ux, `.${Vx} { display: contents }`, `PropertyOverrides`))()),
      (Gx = `default`),
      (Kx = new Set([Gx])),
      (Jx = class {
        constructor() {
          (M(this, `entries`, new Map()), me(this, qx, {}));
        }
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (z(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (z(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = Gx, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Gx;
          let n = F(this, qx)[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (F(this, qx)[e] = Kc(r)) : Gx;
        }
        setAll(e, t = Kx, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Qe(n.transformTemplate) ? n.transformTemplate?.({}, Xx) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: R(a) ? a : void 0,
              animate: R(o) ? o : void 0,
              transformTemplate: I(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (qx = new WeakMap()),
      (Yx = new Jx()),
      (Xx = `__Appear_Animation_Transform__`),
      (Zx = `data-framer-appear-id`),
      (Qx = `data-framer-appear-animation`),
      ($x = (e) => {
        if (ro())
          return {
            animate: Qc(e.animate) ? e.animate : void 0,
            initial: Qc(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (eS = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (tS = (e) => ({
        x: se(e?.x ?? 0),
        y: se(e?.y ?? 0),
        opacity: se(e?.opacity ?? 1),
        scale: se(e?.scale ?? 1),
        rotate: se(e?.rotate ?? 0),
        rotateX: se(e?.rotateX ?? 0),
        rotateY: se(e?.rotateY ?? 0),
        skewX: se(e?.skewX ?? 0),
        skewY: se(e?.skewY ?? 0),
        transformPerspective: se(e?.transformPerspective ?? 0),
      })),
      (nS = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (rS = { willChange: `transform` }),
      Object.freeze(rS),
      (iS = {}),
      Object.freeze(iS),
      (aS = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (oS = () => {
        let e = l();
        return (
          c(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (sS = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (cS = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (lS = 1),
      (uS = 4),
      (dS = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (fS = [`animate`, `animate`]),
      (pS = { inputRange: [], outputRange: [] }),
      (mS = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (hS = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (gS = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (_S = [0, 1]),
      (vS = { parallax: sS, styleAppear: dS, styleTransform: mS, loop: aS, presence: cS }),
      (yS = Jh(vS)),
      (bS = (e) => e.reduce((e, t) => (e += t), 0)),
      (xS = (e) => e.reduce((e, t) => (e *= t), 1)),
      (SS = `current`),
      (CS = (e) =>
        k.forwardRef((t, n) => {
          if (t.__withFX)
            return _(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = $x(t);
          if (r) return _(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: f = !1,
            } = xl(t),
            p = hs(n),
            { values: m, style: h } = sl(s, p, f, t.style, t[Je]),
            { values: g, style: v } = rl(i, p, t.style?.visibility),
            { values: y, style: b } = yl(o, p),
            { values: x, style: S } = hl(a, p),
            { values: C, style: w } = tl(c, p),
            T = k.useMemo(() => {
              let e = new We(u ?? 1);
              return {
                scale: [x.scale, C.scale, m.scale, y.scale],
                opacity: [x.opacity, C.opacity, m.opacity, e, y.opacity],
                x: [x.x, C.x, m.x, y.x],
                y: [x.y, C.y, g.y, m.y, y.y],
                rotate: [x.rotate, C.rotate, m.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, m.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, m.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, m.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, m.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [u, y, g, x, C, m]);
          Cl(t.style, T);
          let ee = fe(T.scale, xS),
            E = fe(T.opacity, xS),
            D = fe(T.x, bS),
            te = fe(T.y, bS),
            O = fe(T.rotate, bS),
            ne = fe(T.rotateX, bS),
            re = fe(T.rotateY, bS),
            A = fe(T.skewX, bS),
            ie = fe(T.skewY, bS),
            ae = fe(T.transformPerspective, bS),
            { drag: oe, dragConstraints: se } = l;
          Po(oe && Sl(se) ? se : void 0);
          let ce = {
            opacity: E,
            scale: ee,
            x: D,
            y: te,
            rotate: O,
            rotateX: ne,
            rotateY: re,
            skewX: A,
            skewY: ie,
          };
          nt(d) && (ce.transformPerspective = ae);
          let le = wl(t.animate) ? t.animate : void 0,
            ue = wl(t.initial) ? t.initial : void 0,
            de = wl(t.exit) ? t.exit : void 0,
            pe = f && !s.presenceInitial ? { initial: ue, animate: le, exit: de } : {};
          return _(e, {
            ...l,
            ...pe,
            __withFX: !0,
            style: { ...t.style, ...v, ...b, ...w, ...ce, ...S, ...h },
            values: m,
            ref: p,
          });
        })),
      (wS = a({})),
      (TS = k.createContext({})),
      (ES = k.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = k.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Hc(a);
        return _(TS.Provider, { value: o, children: s(r, i) });
      })),
      (DS = (e) =>
        k.forwardRef((t, n) =>
          _(e, { layoutId: Mo(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (OS = !1),
      (kS = class extends v {
        constructor() {
          (super(...arguments), M(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Ol(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              dt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          rn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Ol(e)) throw e;
          return ((OS = !0), this.props.children);
        }
      }),
      (AS = (() => (A === void 0 ? null : new Promise(() => {})))()),
      (jS = _(kl, {})),
      (MS = a(!1)),
      (MS.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (NS = _(jl, {})),
      (PS = class extends v {
        constructor() {
          (super(...arguments), M(this, `state`, { hasError: !1 }));
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Nl(this.props.getErrorMessage(), t?.componentStack), Ml(e, t));
        }
        render() {
          let { children: e, fallback: t = NS } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (FS = class extends v {
        constructor() {
          (super(...arguments), M(this, `state`, { hasError: !1 }));
        }
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Ml(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (IS = (() => k.createContext(void 0))()),
      (LS = `code-crash:`),
      (RS = DS(
        k.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = Yi(() => (t ? `${t}-container` : void 0)),
            d = Eo(n),
            f = ql(
              k.Children.map(e, (e) =>
                k.isValidElement(e) ? k.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return _(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: _(pb.Provider, {
              value: !0,
              children: _(n_.Provider, {
                value: i ?? null,
                children: _(Ji, {
                  enabled: !1,
                  children: _(Ue, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (zS = k.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = ql(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Eo(f);
          return _(n_.Provider, {
            value: a ?? null,
            children: _(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return _(n_.Provider, {
            value: a ?? null,
            children: _(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (BS = a({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (VS = `framer-cursor-none`),
      (HS = `framer-pointer-events-none`),
      (US = b(function ({ children: e }) {
        let t = Yi(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = Jl(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = ye();
        return T(BS.Provider, { value: t, children: [e, !n && _(qS, {})] });
      })),
      (WS = (() =>
        Kv(
          US,
          [
            `.${VS}, .${VS} * { cursor: none !important; }`,
            `.${HS}, .${HS} * { pointer-events: none !important; }`,
          ],
          `framer-lib-cursors-host`
        ))()),
      (GS = (() => ({ position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }))()),
      (KS = `data-framer-portal-id`),
      (qS = b(function () {
        let { onRegisterCursors: e } = t(BS),
          [n, r] = i(!1),
          a = pe(0),
          o = pe(0),
          u = pe(0),
          d = l(null),
          p = l({ cursors: {}, cursorHash: void 0 }),
          m = No();
        (f(() => {
          let e = K.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? O(() => r(!1)) : r(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || r(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          c(() => {
            if (!n) return;
            let e = 0,
              t = 0;
            function r() {
              (a.set(e), o.set(t), je(u, 1, { type: `tween`, duration: 0.2 }));
            }
            let i = () => {
              if (tt(p.current.cursors)) return;
              let n = Ql(e, t);
              n !== p.current.cursorHash && ((p.current.cursorHash = n), Ne.update(() => m()));
            };
            function s(n) {
              if (n.pointerType === `touch`) {
                Re(i);
                return;
              }
              (Ne.read(i, !0), (e = n.clientX), (t = n.clientY), Ne.update(r));
            }
            function c(e) {
              if (e.target === d.current || !d.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              Ne.update(() => {
                d.current?.dispatchEvent(t);
              });
            }
            return (
              K.addEventListener(`pointermove`, s),
              document.addEventListener(`pointerdown`, c),
              document.addEventListener(`pointerup`, c),
              Ne.read(i, !0),
              () => {
                (K.removeEventListener(`pointermove`, s),
                  document.removeEventListener(`pointerdown`, c),
                  document.removeEventListener(`pointerup`, c),
                  Re(i));
              }
            );
          }, [u, a, o, m, n]),
          c(() => {
            if (!n) return;
            function e() {
              je(u, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              K.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), K.removeEventListener(`blur`, e));
              }
            );
          }, [u, n]),
          f(() => {
            function t(e) {
              ((p.current.cursors = e),
                (p.current.cursorHash = tt(e) ? null : Ql(a.get(), o.get())),
                m());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(VS, !1));
            };
          }, [a, o, e, m]));
        let { cursors: h, cursorHash: g } = p.current,
          v = g ? h[g] : null,
          y = Yl(v);
        f(() => {
          n && document.body.classList.toggle(VS, y);
        }, [y, n]);
        let b = v?.component,
          x = v?.transition ?? { duration: 0 },
          S = x.duration === void 0 ? x : { ...x, duration: x.duration * 1e3 },
          C = Se(a, S),
          w = Se(o, S),
          T = fe(() => C.get() + (v?.offset?.x ?? 0)),
          E = fe(() => w.get() + (v?.offset?.y ?? 0)),
          D = v?.alignment,
          te = v?.placement,
          ne = s((e, t) => `translate(${Zl(te, D)}) ${t}`, [D, te]);
        return !n || !v || !b
          ? null
          : _(ee, {
              children: _(b, {
                transformTemplate: ne,
                style: { ...GS, x: T, y: E, opacity: u },
                globalTapTarget: !0,
                variant: v?.variant,
                ref: d,
                className: HS,
              }),
            });
      })),
      (JS = `webPageId`),
      (YS = class {
        constructor() {
          (M(this, `collectedLinks`, new Map()), M(this, `nestingInfo`, new Map()));
        }
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            z(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (z(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Rh && !Ia()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(tu(e), e), this.collectedLinks.set(tu(t), t));
          let n = this.nestingInfo.get(tu(e)) ?? new Set();
          (n.add(tu(t)), this.nestingInfo.set(tu(e), n));
        }
      }),
      (XS = new YS()),
      (ZS = `element`),
      (QS = `collection`),
      ($S = `collectionItemId`),
      (eC = `pathVariables`),
      (tC = `framer/page-link,`),
      (nC = a(void 0)),
      (rC = `--text-selection-color`),
      (iC = `--text-selection-background-color`),
      (aC = (() => Kv(yu, (e, t) => vu(t?.triggerId), `InjectSelectionStyle`))()),
      (oC = `overlay`),
      (sC = `template-overlay`),
      (cC = class extends v {
        constructor() {
          (super(...arguments),
            M(this, `state`, { error: void 0 }),
            M(this, `message`, `Made UI non-interactive due to an error.`),
            M(this, `messageFatal`, `Fatal error.`));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((A.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(dt(zh ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          rn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (zh && document.getElementById(`main`)?.innerHTML) || ``;
          return _(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${dt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (lC = /:([a-z]\w*)/gi),
      (uC = a(void 0)),
      (dC = 500),
      (fC = 0.9),
      (pC = 1.7),
      (mC = 4),
      (hC = 1 / 0),
      (gC = new WeakMap()),
      (_C = new Set()),
      (vC = new Map()),
      (yC = !kg || typeof IntersectionObserver > `u` ? null : ku()),
      (bC = Cu(
        m(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...u
          },
          d
        ) {
          let f = At(),
            p = Mt(),
            m = Du(),
            { activeLocale: h, locales: g } = yr(),
            _ = Iu(),
            v = xn(),
            b = nu(),
            x = Lu({ nodeId: s, clickTrackingId: i, router: f, href: t, activeLocale: h }),
            S = C(() => {
              if (!t) return {};
              let e = eu(t) ? t : lu(t);
              if (!e) return {};
              if (I(e))
                return Vu(
                  e,
                  f,
                  p,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  v,
                  h?.id,
                  g,
                  m
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = _(i, s, h);
              if (ct(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: y,
                  locale: b,
                } = wu(f, p, e, h, c, m),
                S = ju(n, !0),
                C = S === `_blank`,
                w = { pathVariables: y, locale: b },
                T = (e) => zu(f, l, () => v(l, w, !1, !C), d, y, r, e);
              return {
                href: u,
                target: S,
                onClick: Bu(u, x, T),
                "data-framer-page-link-current": (p && Ou(p, e, m)) || void 0,
                navigate: T,
                preload: () => v(l, w, !0, !C),
                _routeId: l,
                _pathVariables: y,
                _locale: b,
              };
            }, [t, f, h, m, n, p, r, x, a, g, o, _, v]),
            w = hs(y(e) && `ref` in e ? e.ref : void 0),
            { navigate: T, preload: ee, _routeId: E, _pathVariables: D, _locale: te, ...O } = S;
          gs(
            w,
            (e) => {
              if (!(e === null || !E || !ee || b))
                return yC?.(e, ee, `${E}:${te?.id}:${JSON.stringify(D)}`);
            },
            [ee, E, D, te]
          );
          let ne = !!T;
          return fu(
            Hc(d).cloneAsArray(e, (e) => Hu(e, { ...u, ...Wu(O, l, ne) }, w)),
            c,
            s,
            t,
            S,
            w
          );
        })
      )),
      (xC = k.createContext(void 0)),
      (SC = `__framer_force_showing_editorbar_since`),
      (CC = class extends v {
        constructor() {
          (super(...arguments), M(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (wC = () => {
        try {
          return !!localStorage[SC];
        } catch {
          return !1;
        }
      }),
      (TC = () => !wC()),
      (EC = (() => {
        let e = a(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (DC = `main`),
      (OC = `framerGeneratedPage`),
      (kC = `<!-- Start of headStart -->`),
      (AC = `<!-- End of headStart -->`),
      (jC = `<!-- Start of headEnd -->`),
      (MC = `<!-- End of headEnd -->`),
      (NC = `<!-- Start of bodyStart -->`),
      (PC = `<!-- End of bodyStart -->`),
      (FC = `<!-- Start of bodyEnd -->`),
      (IC = `<!-- End of bodyEnd -->`),
      (LC = (() => k.createContext(void 0))()),
      (RC = null),
      (zC = null),
      Vh(fd),
      (BC = (e, n, r, i, a, o) => {
        let s = t(xC),
          u = l(),
          d = hn(),
          f = l(!0);
        return (
          c(() => {
            function t() {
              (!RC || !zC) && fd();
              let t = r ? new URL(K.location.origin + r) : K.location,
                c = {
                  version: gg,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: RC,
                  locale: zC,
                },
                l = f.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = l ?? null;
                    if (l === void 0) {
                      let n = e.collectionId && d?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && I(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (ct(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (u.current = t()),
                n = e instanceof Promise ? await e : e;
              ((u.current = n),
                f.current ? (f.current = !1) : rn(`published_site_pageview`, n, `eager`));
            })();
            let c = async (e) => {
              if (e.persisted) {
                let e = (u.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((u.current = n), rn(`published_site_pageview`, n, `eager`));
              }
            };
            return (
              A.addEventListener(`pageshow`, c),
              () => {
                A.removeEventListener(`pageshow`, c);
              }
            );
          }, [e, n, r, i, a, s, d, o]),
          u
        );
      }),
      (VC = { status: `loading`, data: void 0 }),
      (HC = 5e3),
      (UC = () => {}),
      (XC = class e {
        constructor() {
          (M(this, `responseValues`, new Map()),
            me(this, WC, new Map()),
            me(this, GC, new Set()),
            me(this, KC, new Map()),
            me(this, qC, new Map()),
            me(this, JC, new Map()),
            me(this, YC, new Map()),
            M(
              this,
              `persistCache`,
              Pc(() => {
                let t = {};
                for (let [e, n] of this.responseValues) {
                  if (!n || n.status !== `success`) continue;
                  let r = F(this, KC).get(e);
                  if (!r || r === 0) continue;
                  let i = F(this, qC).get(e);
                  i && ((i && Od(i, r)) || (t[e] = [i, r, n.data]));
                }
                try {
                  localStorage.setItem(e.cacheKey, JSON.stringify(t));
                } catch {}
              }, 500)
            ));
        }
        unmount() {
          for (let [e, t] of F(this, YC)) (clearInterval(t), F(this, YC).delete(e));
        }
        stopQueryRefetching(e) {
          let t = wd(e),
            n = F(this, YC).get(t);
          n && (clearInterval(n), F(this, YC).delete(t));
        }
        startQueryRefetching(e) {
          let t = wd(e),
            n = F(this, YC).get(t),
            r = F(this, KC).get(t);
          if (n || !r) return;
          let i = K.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = F(this, qC).get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          F(this, YC).set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Od(r, i) ||
                (F(this, qC).set(e, r),
                F(this, KC).set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = F(this, WC).get(e);
          if (n) for (let e of n) e();
        }
        async prefetch(e) {
          if (!Pa() || !iu(e.url, !1)) return;
          let t = wd(e);
          (F(this, GC).add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = F(this, WC).get(t);
          for (let e of r ?? []) e();
          let i = Dd(n, e);
          return (e.resultOutputType === `image` && I(i) && (await xd(i).catch(UC)), i);
        }
        async fetchWithCache(e) {
          if (!Pa()) return;
          let t = wd(e),
            n = F(this, JC).get(t);
          if (n) return n;
          let r = F(this, qC).get(t),
            i = r && Od(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, VC);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                F(this, qC).set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            F(this, JC).set(t, a),
            a.finally(() => {
              F(this, JC).delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !F(this, GC).has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!iu(r, !1)) return UC;
          let a = wd(e),
            o = F(this, KC).get(a);
          ((!o || i < o) && F(this, KC).set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = F(this, WC).get(a) ?? new Set();
          return (
            s.add(t),
            F(this, WC).set(a, s),
            () => {
              let n = F(this, WC).get(a);
              n &&
                (n.delete(t),
                n.size === 0 && F(this, WC).delete(a),
                F(this, WC).size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (WC = new WeakMap()),
      (GC = new WeakMap()),
      (KC = new WeakMap()),
      (qC = new WeakMap()),
      (JC = new WeakMap()),
      (YC = new WeakMap()),
      M(XC, `cacheKey`, `framer-fetch-client-cache`),
      (ZC = XC),
      (QC = a(void 0)),
      ($C = a(!0)),
      (ew = ({ children: e, client: t }) => {
        let [n] = i(() => t ?? new ZC()),
          [r, a] = i(!0);
        return (
          c(
            () => (
              n.hydrateCache(),
              O(() => {
                a(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          _($C.Provider, { value: r, children: _(QC.Provider, { value: n, children: e }) })
        );
      }),
      (Be.WillChange = Ke),
      (tw = Cu(
        m(function ({ links: e, children: t, ...n }, r) {
          let i = At(),
            { activeLocale: a } = yr(),
            o = Hc(r),
            s = Iu(),
            c = [],
            l = e.map((e) => {
              if (e)
                return I(e)
                  ? Ku(e, i, void 0, void 0, a)
                  : Ku(e.href, i, e.implicitPathVariables, e.refKey, a, (e, t) => s(e, t, a, c));
            });
          if (c.length > 0) throw Promise.allSettled(c);
          return o(t(l), n);
        })
      )),
      (Z = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Ud(e, t);
            case `boolean`:
              return Gd(e);
            case `color`:
              return Jd(e);
            case `date`:
              return Xd(e);
            case `enum`:
              return Qd(e);
            case `file`:
              return ef(e);
            case `link`:
              return nf(e);
            case `number`:
              return af(e);
            case `object`:
              return cf(e, t);
            case `responsiveimage`:
              return uf(e);
            case `richtext`:
              return ff(e);
            case `string`:
              return gf(e);
            case `vectorsetitem`:
              return mf(e);
            case `unknown`:
              return e;
            default:
              B(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return $e(e)
            ? { type: `boolean`, value: e }
            : at(e)
              ? { type: `date`, value: e.toISOString() }
              : L(e)
                ? { type: `number`, value: e }
                : I(e)
                  ? { type: `string`, value: e }
                  : et(e)
                    ? { type: `array`, value: e.map(Z.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type ? vf(e, t, n) === 0 : !1;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type ? vf(e, t, n) < 0 : !1;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type ? vf(e, t, n) <= 0 : !1;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type ? vf(e, t, n) > 0 : !1;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type ? vf(e, t, n) >= 0 : !1;
        },
        in(e, t, n) {
          return t?.type === `array` ? t.value.some((t) => Z.equal(t, e, n)) : !1;
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Z.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = _f(e),
            i = _f(t);
          return rt(r) || rt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = _f(e),
            i = _f(t);
          return rt(r) || rt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = _f(e),
            i = _f(t);
          return rt(r) || rt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(Z.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return I(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              B(e);
          }
        },
      }),
      (nw = { type: `unknown`, isNullable: !0 }),
      (rw = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t), M(this, `schema`), M(this, `indexes`, []));
          let n = no(e);
          z(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (z(n !== `array`, `Array properties are not supported`),
              z(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (it(i)) continue;
            let a = this.schema[t];
            if (!nt(a)) {
              if ((z(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await yf(this.collection, this.locale))[t]?.[n];
          return ig.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems() {
          return (await yf(this.collection, this.locale)).map((e, t) => {
            let n = String(t);
            return this.getDatabaseItem(e, n);
          });
        }
        async resolveItems(e) {
          let t = await yf(this.collection, this.locale);
          return e.map((e) => {
            let n = t[Number(e)];
            return (z(n, `Can't find collection item`), this.getDatabaseItem(n, e));
          });
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (iw = new Map()),
      (aw = new WeakMap()),
      (ow = `$r_`),
      (sw = new Map()),
      (cw = 1e3),
      (Q = class e {
        constructor(e) {
          this.network = e;
        }
        static estimate(t, n) {
          let r = wf(),
            i = Tf();
          return new e(t * r + n / i);
        }
        static max(t, n) {
          return new e(Math.max(t.network, n.network));
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : e.network > t.network ? 1 : 0;
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (lw = class {
        constructor(e, t) {
          ((this.id = e),
            (this.relational = t),
            M(this, `nodes`, []),
            M(this, `winners`, new Map()));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new uw();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          z(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (uw = class {
        constructor() {
          (M(this, `node`), M(this, `cost`, new Q(1 / 0)), M(this, `nodes`, []));
        }
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (dw = class {
        constructor(e) {
          this.isSynchronous = e;
        }
      }),
      (fw = class extends dw {
        constructor() {
          (super(...arguments), M(this, `group`));
        }
        getGroup() {
          return (z(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (z(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return jd(this.evaluate(void 0));
        }
        evaluateAsync() {
          return Md(this.evaluate(void 0));
        }
      }),
      (pw = class {
        constructor(e, t, n = {}) {
          ((this.options = n),
            M(this, `collections`),
            M(this, `richTextCache`, new WeakMap()),
            M(this, `vectorSetItemCache`, new WeakMap()),
            (this.collections = Nf(e, t)));
        }
        *resolveArrayValue(e) {
          return yield* Pd(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* W(t);
        }
        loadRichTextValue(e) {
          let t = e.value;
          z(Af(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          z(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = this.options.richTextMode === `raw` ? t.pointer : n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return st(t) ? yield t : t;
        }
        loadVectorSetItemValue(e) {
          let t = e.value;
          z(Mf(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (z(n, `Can't find collection for vector set item pointer`),
            z(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return st(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (mw = `index`),
      (hw = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), G(this.name, ...e));
        }
      }),
      (gw = class {
        constructor(e, t, n) {
          ((this.id = e),
            (this.name = t),
            (this.data = n),
            M(this, `indexes`, new vw()),
            M(this, `fields`, new $()));
        }
      }),
      (_w = class {
        constructor(e, t, n, r, i, a) {
          for (let o in ((this.id = e),
          (this.data = t),
          (this.collection = n),
          (this.lookupNodes = r),
          (this.constraint = i),
          (this.ordering = a),
          M(this, `resolvedFields`, new $()),
          t.schema))
            for (let e of n.fields) e.name === o && this.resolvedFields.add(e);
        }
      }),
      (vw = class extends hw {
        constructor() {
          (super(...arguments), M(this, `name`, `Indexes`));
        }
      }),
      (yw = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        getValue(e) {
          z(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          switch (t?.type) {
            case `richtext`:
              return (
                z(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: kf(this.collection.data, t.value) }
              );
            case `vectorsetitem`:
              return (
                z(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: jf(this.collection.data, t.value) }
              );
          }
          return t ?? null;
        }
      }),
      ($ = class extends hw {
        constructor() {
          (super(...arguments), M(this, `name`, `Fields`));
        }
      }),
      (bw = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        getHash() {
          return G(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (xw = class {
        constructor(e) {
          (M(this, `fields`, []), e && this.merge(e));
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return G(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e ? !0 : this.length === e.length ? this.getHash() === e.getHash() : !1;
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== mw) return !1;
          return !0;
        }
      }),
      (Sw = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        getHash() {
          return G(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 ? !0 : e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0
            ? !0
            : e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (Cw = class e {
        constructor(e) {
          ((this.parent = e), M(this, `node`), M(this, `ordering`), M(this, `fields`, []));
        }
        takeNode() {
          let e = this.node;
          return (z(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (z(!this.node, `Node already set`), (this.node = e));
        }
        setOrdering(e) {
          this.ordering = e;
        }
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.addField(t);
        }
        resolveField(e, t) {
          let n = [];
          for (let r of this.fields) r.name === e && ((t && r.collectionName !== t) || n.push(r));
          if (n.length === 1) return n[0];
          if (n.length > 1) throw Error(`Ambiguous fields`);
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fields.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new xw();
        }
        getRequiredResolvedFields() {
          let e = new $();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new Sw(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          z(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (z(e, `Field must exist`), e.field);
        }
      }),
      (ww = class {
        constructor() {
          (M(this, `pointers`, new Map()), M(this, `values`, new Map()));
        }
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (Tw = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          return new e(t, this.tuples.map(n));
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (Ew = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        getHash() {
          return G(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (Dw = class e extends fw {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new $();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new $();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new Sw(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Q(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Q.max(i, n);
          }
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(
            this.inputGroup.getOptimized(n),
            this.projections.map((e) => new Ew(e.input.getOptimized(), e.field)),
            this.passthrough
          );
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Pd(
              n.tuples.map((t) =>
                Pd(
                  this.projections.map((n) => W({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new ww();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            z(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (Ow = { type: 0 }),
      (kw = class extends dw {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        evaluateSync() {
          return jd(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Md(this.evaluate(void 0, void 0));
        }
      }),
      (Aw = { type: 0 }),
      (jw = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        getHash() {
          return G(`CaseCondition`, this.when, this.then);
        }
      }),
      (Mw = class e extends kw {
        constructor(e, t, n) {
          let r = new $(),
            i = new $(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n),
            M(this, `definition`, { type: `unknown`, isNullable: !0 }));
        }
        getHash() {
          return G(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new jw(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* W({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Pd(
              this.conditions.map((n) =>
                W({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Z.equal(n, e, Aw)) return t;
          } else for (let { when: e, then: t } of r) if (Kd(e)) return t;
          return i;
        }
      }),
      (Nw = class {
        constructor(e, t, n) {
          ((this.normalizer = e),
            (this.query = t),
            (this.locale = n),
            M(this, `collectionId`, 0),
            M(this, `indexId`, 0),
            M(this, `fieldId`, 0),
            M(this, `subqueries`, []));
        }
        build() {
          let e = new Cw();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new $(),
            o;
          if (t.orderBy) {
            o = new xw();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (nt(t)) continue;
                a.add(t.field);
                let r = new bw(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new yw(If(this.fieldId++), void 0, t.definition, void 0),
                  a = new Ew(t, r);
                i.push(a);
                let s = new bw(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new $(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (nt(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              z(n.alias, `Subqueries should have an alias`);
              let r = If(this.fieldId++),
                a = n.alias,
                s = new yw(r, a, t.definition, void 0),
                c = new Ew(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              B(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Cf(t.data, this.locale),
            i = t.alias,
            a = new gw(Pf(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new yw(If(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.fields.add(r));
          }
          {
            let e = new yw(If(this.fieldId++), mw, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: mw, collectionName: i });
            let t = new xw(),
              r = new bw(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new xw(),
              o = new _w(Ff(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new xw(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              B(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              B(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(nw, null);
        }
        buildLiteralValue(e) {
          let t = Z.parse(e.value);
          return this.normalizer.newScalarConstant(nw, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (z(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                z(n, `Missing argument`),
                z(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                z(n, `Missing argument`),
                z(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              B(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new Pw(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new Pw(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new jw(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              B(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              B(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (Pw = class {
        constructor(e) {
          ((this.inScope = e),
            M(this, `referencedFields`, new $()),
            M(this, `referencedOuterFields`, new $()));
        }
      }),
      (Fw = class e extends fw {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new Sw(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.predicate.getOptimized());
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Pd(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Kd(n[t] ?? null));
        }
      }),
      (Iw = class e extends fw {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        getHash() {
          return G(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return Q.estimate(1, e ? 100 * cw : 50 * cw);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection;
          return new Tw(
            this.getOutputFields(),
            (yield e.data.lookupItems(this.query)).map((n) => {
              let r = new ww();
              for (let i of e.resolvedFields) {
                let e = i.getValue(n);
                (r.addPointer(t, n.pointer), r.addValue(i, e));
              }
              return r;
            })
          );
        }
      }),
      (Lw = class e extends fw {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            M(this, `leftGroup`),
            M(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new Sw(new xw(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t);
          return new e(r, this.rightGroup.getOptimized(i));
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (Rw = class e extends fw {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        getHash() {
          return G(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return Q.estimate(1, 200 * cw);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields();
          return new Tw(
            t,
            (yield e.data.scanItems()).map((n) => {
              let r = new ww();
              for (let i of t) {
                let t = i.getValue(n);
                (r.addPointer(e, n.pointer), r.addValue(i, t));
              }
              return r;
            })
          );
        }
      }),
      (zw = class e extends fw {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            M(this, `leftGroup`),
            M(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new Sw(new xw(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t);
          return new e(r, this.rightGroup.getOptimized(i));
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (Bw = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Kd(n) && Kd(r) };
        }
      }),
      (Vw = class extends kw {
        constructor(e, t) {
          let n = new $(),
            r = new $();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        getHash() {
          return G(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (Hw = { type: 0 }),
      (Uw = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.contains(n, r, Hw) };
        }
      }),
      (Ww = { type: 0 }),
      (Gw = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.endsWith(n, r, Ww) };
        }
      }),
      (Kw = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.equal(n, r, Ow) };
        }
      }),
      (qw = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThan(n, r, Ow) };
        }
      }),
      (Jw = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThanOrEqual(n, r, Ow) };
        }
      }),
      (Yw = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThan(n, r, Ow) };
        }
      }),
      (Xw = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThanOrEqual(n, r, Ow) };
        }
      }),
      (Zw = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.equal(n, r, Ow) };
        }
      }),
      (Qw = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Kd(n) || Kd(r) };
        }
      }),
      ($w = { type: 0 }),
      (eT = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.startsWith(n, r, $w) };
        }
      }),
      (tT = class {
        constructor(e) {
          ((this.normalizer = e), M(this, `memo`), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof Fw) {
            if (e.predicate instanceof Bw) {
              let n = new Lw(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof Qw) {
              let n = new zw(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof Rw)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new Iw(n, Lf(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof Fw) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof Rw)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof Kw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Vw &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Lf(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new Iw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Zw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Vw &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Lf(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new Iw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Yw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Vw &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Lf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new Iw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Xw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Vw &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Lf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new Iw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof qw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Vw &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Lf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new Iw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Jw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Vw &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Lf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new Iw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Uw &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof Vw &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Lf(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new Iw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof eT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof Vw &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Lf(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new Iw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Gw &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof Vw &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Lf(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new Iw(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (nT = class {
        constructor(e) {
          this.outputFields = e;
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (rT = class {
        constructor() {
          (M(this, `nodes`, new Map()), M(this, `groups`, []));
        }
        addGroup(e) {
          let t = new lw(Ef(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new nT(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            z(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (iT = class e extends fw {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            M(this, `leftGroup`),
            M(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new $();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new $(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new Sw(new xw(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t);
          return new e(r, this.rightGroup.getOptimized(i), this.constraint.getOptimized());
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new Tw(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new ww();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof Kw) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new Tw(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new ww();
              (n.merge(i),
                n.merge(a),
                Kd(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (aT = class e extends fw {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new Sw(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.limit.getOptimized(), this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* W({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = of(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (oT = class e extends fw {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new Sw(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.offset.getOptimized(), this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* W({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = of(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (sT = class e extends kw {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            M(this, `inputGroup`),
            M(this, `definition`),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return G(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new $(),
            t = Object.values(this.namedFields);
          for (let n of t) nt(n.collection) || e.add(n);
          return new Sw(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps();
          return new e(
            this.inputGroup.getOptimized(t),
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new ww();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (cT = class e extends kw {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            z(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return G(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized(), this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return Z.cast(n, this.definition);
        }
      }),
      (lT = class e extends kw {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            M(this, `inputGroup`),
            M(this, `definition`),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return G(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new $();
          return (nt(this.field.collection) || e.add(this.field), new Sw(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps();
          return new e(
            this.inputGroup.getOptimized(t),
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new ww();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (uT = { type: 0 }),
      (dT = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.in(n, r, uT) };
        }
      }),
      (fT = { type: 1 }),
      (pT = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            M(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Z.indexOf(n, r, fT) };
        }
      }),
      (mT = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, {
              type: `array`,
              definition: { type: `string`, isNullable: !1 },
              isNullable: !1,
            }));
        }
        getHash() {
          return G(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = zf(n),
            a = zf(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (hT = class e extends kw {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            M(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized());
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: Z.length(n) };
        }
      }),
      (gT = class e extends kw {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized());
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Kd(yield* this.input.evaluate(e, t)) };
        }
      }),
      (_T = { type: 0 }),
      (vT = class e extends kw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.in(n, r, _T) };
        }
      }),
      (yT = class extends kw {
        constructor(e, t) {
          z(e.name !== mw, `Invalid field name`);
          let n = new $(),
            r = new $();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            M(this, `definition`),
            (this.definition = e.definition));
        }
        getHash() {
          return G(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (z(e, `Context must exist`), e.getValue(this.field))
            : (z(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (bT = class {
        constructor(e) {
          this.memo = e;
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new Rw(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new Iw(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new iT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof Vw && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof iT && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new Fw(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new Dw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof Dw &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new aT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new oT(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof Vw) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new yT(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new Vw(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof gT)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof Kw) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof Zw) return this.newScalarEquals(e.left, e.right);
          if (e instanceof Yw) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof Xw) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof qw) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof Jw) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof Bw) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof Qw) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new gT(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof Vw && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof Vw && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof Vw && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof Vw && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new Bw(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof Vw && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof Vw && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof Vw && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof Vw && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new Qw(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof yT;
          if (t instanceof yT && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Kw(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof yT;
          if (t instanceof yT && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Zw(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof yT;
          if (t instanceof yT && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Yw(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof yT;
          if (t instanceof yT && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Xw(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof yT;
          if (t instanceof yT && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new qw(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof yT;
          if (t instanceof yT && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Jw(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new dT(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new vT(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new jw(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new Mw(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new Uw(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new eT(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new Gw(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new hT(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new pT(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new sT(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new lT(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new mT(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new cT(e, t);
          return this.finishScalar(n);
        }
      }),
      (xT = class extends fw {}),
      (ST = class e extends xT {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new $();
          return new Sw(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * cw).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          z(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Set();
          for (let e of this.fields)
            (z(e.collection, `Collection required to resolve field`), n.add(e.collection));
          for (let e of t.tuples)
            for (let t of this.fields) {
              let n = e.getValue(t);
              n?.type === `richtext`
                ? this.resolver.preloadRichTextValue(n)
                : n?.type === `vectorsetitem` && this.resolver.preloadVectorSetItemValue(n);
            }
          let r = yield Promise.all(
            Array.from(n).map(async (e) => {
              let n = [];
              for (let r of t.tuples) {
                let t = r.getPointer(e);
                t && n.push(t);
              }
              let r = await e.data.resolveItems(n);
              return (z(r.length === n.length, `Invalid number of items`), [e, r]);
            })
          );
          return t.map(t.fields, (e) => {
            let t = new ww();
            t.merge(e);
            for (let [n, i] of r) {
              let r = e.getPointer(n);
              if (!r) continue;
              let a = i.shift();
              (z(a, `Item not found`), z(a.pointer === r, `Pointer mismatch`));
              for (let e of n.fields) {
                let n = e.getValue(a);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (CT = { type: 0 }),
      (wT = class e extends xT {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== mw && (nt(e.collection) || t.add(e));
          return new Sw(new xw(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === mw) {
                let r = n.collection;
                z(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                z(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                z(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Z.equal(a, o, CT)) {
                if (rt(a) || Z.lessThan(a, o, CT)) return i ? -1 : 1;
                if (rt(o) || Z.greaterThan(a, o, CT)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (TT = class {
        constructor(e, t, n) {
          ((this.query = e),
            (this.locale = t),
            (this.resolver = n),
            M(this, `memo`, new rT()),
            M(this, `normalizer`, new bT(this.memo)),
            M(this, `explorer`, new tT(this.normalizer)));
        }
        optimize() {
          let e = new Nw(this.normalizer, this.query, this.locale).build(),
            t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (z(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new ST(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new wT(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (ET = Ad(`query-engine`)),
      (DT = class {
        async evalQuery(e, t, n, r = {}) {
          ET.enabled &&
            ET.debug(`Query:
${Qf(e)}`);
          let i = new pw(e, t, r),
            [a, o] = new TT(e, t, i).optimize(),
            s = await a.evaluateAsync(),
            c = Object.entries(o),
            l = [],
            u = Nd(
              Pd(
                s.tuples.map((e) => {
                  let t = {},
                    r = {};
                  for (let [a, o] of c) {
                    let s = e.getValue(o);
                    ((t[a] = i.resolveValue(s)), n && (r[a] = s));
                  }
                  return (n && l.push(r), W(t));
                })
              )
            );
          return n ? [ct(u) ? await u : u, l] : u;
        }
        async serializeableQuery(e, t) {
          return this.evalQuery(e, t, !0);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n) {
          let r = new pw(t, n);
          return Nd(
            Pd(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let i = e[n];
                  t[n] = r.resolveValue(i);
                }
                return W(t);
              })
            )
          );
        }
      }),
      (OT = (() => vg.QueryCache)()),
      (kT = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e),
            (this.maxSize = t),
            M(this, `cache`, new Map()),
            M(this, `serializedCache`, xg === void 0 ? void 0 : new Map()));
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.state !== `pending` && (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t) {
          let n = tp(e, t),
            r = this.cache.get(n);
          if (r) {
            if (
              (this.cache.delete(n),
              this.cache.set(n, r),
              xg !== void 0 && this.serializedCache !== void 0 && !bf(n) && r.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(n);
              e !== void 0 && xg.set(OT, n, e);
            }
            return r;
          }
          let i = new ig(() => {
            let r = bf(n),
              i = r ? void 0 : un(OT, n);
            if (i)
              try {
                return this.queryEngine.resolveSerializableQueryResult(i, e, t);
              } catch (e) {
                cn(e, n);
              }
            return xg !== void 0 && !r
              ? this.queryEngine
                  .serializeableQuery(e, t)
                  .then(([e, t]) => (this.serializedCache?.set(n, t), xg.set(OT, n, t), e))
              : this.queryEngine.query(e, t);
          });
          return (this.cache.set(n, i), this.prune(), i);
        }
      }),
      (AT = new kT(new DT())),
      (jT = `style[data-framer-breakpoint-css]`),
      (MT = new Map()),
      (NT = `page`),
      (PT = Symbol(`cycle`)),
      (LT = (() => {
        let e = a(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (RT = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (zT = { inputRange: [], outputRange: [] }),
      (BT = (e) =>
        k.forwardRef((t, n) => {
          if (Y.current() === Y.canvas) return _(e, { ...t, ref: n });
          let [r, i] = zc(t, RT),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: c,
              variantAppearEffectEnabled: l,
              targets: u,
              exitTarget: d,
              scrollDirection: f,
            } = r,
            [p, m] = k.useState(o),
            h = k.useRef(!1),
            g = hs(n);
          ys(
            g,
            (e) => {
              r.targets ||
                r.scrollDirection ||
                (s && h.current === !0) ||
                (h.current !== e &&
                  ((h.current = e),
                  k.startTransition(() => {
                    m(e ? a : o);
                  })));
            },
            { enabled: l, animateOnce: s, threshold: { y: c } }
          );
          let v = Nt(),
            y = k.useRef(v);
          return (
            k.useEffect(() => {
              if (f || !u) return;
              y.current !== v && ((y.current = v), k.startTransition(() => m(o)));
              let e = {},
                t;
              return le((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = Rp(u, (c ?? 0) * r.containerLength, d);
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(Ie(r.current, i, a));
                if (s && e[o]) return;
                e[o] = !0;
                let l = u[o]?.target ?? void 0;
                l !== t &&
                  ((t = l),
                  k.startTransition(() => {
                    m(l);
                  }));
              });
            }, [v, s, c, u, t.variant, f, d]),
            dl(f, (e) => k.startTransition(() => m(e)), { enabled: l, repeat: !s }),
            Pt(() => {
              if (!l) return;
              let e = !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;
              k.startTransition(() => m(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? _(e, { ...i, variant: p ?? t.variant, ref: g })
              : _(e, { ...i })
          );
        })),
      (VT = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        "SF Pro Display Condensed": {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        "SF Pro Text Condensed": {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (HT = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (UT = VT),
      (WT = `System Default`),
      (GT = class {
        constructor() {
          (M(this, `name`, `local`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()),
            M(this, `fontAliasBySelector`, new Map()),
            M(this, `fontAliases`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(UT)) {
            let n = UT[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(HT)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: WT, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = Bp(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (KT = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (qT = class extends Map {
        constructor() {
          (super(...arguments), M(this, `_hash`, 0));
        }
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (YT = `Variable`),
      (XT = `BI;`),
      (ZT = class {
        constructor() {
          (M(this, `name`, `builtIn`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()),
            M(this, `assetByKey`, new Map()));
        }
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = Gp(n),
              u = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: Jp(a),
                variationAxes: Yp(o),
                category: e.font.fontCategory,
                weight: Qp(c),
                style: em(c),
                cssFamilyName: Kp(r, s),
              };
            (i.fonts.push(u), this.assetByKey.set(n.key, n), t.push(u));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = Qp(e.variant),
                r = Qp(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          return { weight: QT[$p(e)], style: em(e) };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          z(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Jp(t)
            ? t?.map((e) => {
                if (Xp(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${XT}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(XT)) return null;
          let [t, n] = e.split(XT);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (QT = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      ($T = Ad(`custom-font-source`)),
      (eE = `CUSTOM;`),
      (tE = `CUSTOMV2;`),
      (nE = class e {
        constructor() {
          (M(this, `name`, `custom`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()),
            M(this, `assetsByKey`, new Map()));
        }
        deprecatedImportFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = [];
          for (let r of t) {
            if (!this.isValidCustomFontAsset(r)) continue;
            let t = r.properties?.font.variationAxes,
              i = Array.isArray(t),
              a = lm(r.properties),
              o = this.createFontFamily(a),
              s = r.properties?.font.openTypeData,
              c = i ? `variable` : this.inferVariantName(a),
              l = Gp(r),
              u = e.createLegacySelector(a),
              { family: d, variant: f } = um(r.properties.font),
              p = e.createSelector(d, f),
              m = {
                assetKey: r.key,
                family: o,
                selector: u,
                variant: c,
                file: l,
                hasOpenTypeFeatures: Jp(s),
                variationAxes: Yp(t),
                owner: pm(r),
                cssFamilyName: e.cssFontFamilyFromSelector(u),
                alternativeSelectors: {
                  [p]: { variant: f, cssFamilyName: e.cssFontFamilyFromSelector(p) },
                },
              };
            (o.fonts.push(m), this.assetsByKey.set(r.key, r), n.push(...o.fonts));
          }
          return n;
        }
        importFonts(t, n) {
          if (!n) return this.deprecatedImportFonts(t);
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let r = {};
          for (let n of t) {
            if (!this.isValidCustomFontAsset(n)) continue;
            let { family: t, variant: i, weight: a, style: o } = um(n.properties.font),
              s = n.properties.font.variationAxes,
              c = Array.isArray(s),
              l = n.properties.font.openTypeData,
              u = Gp(n),
              d = pm(n),
              f = lm(n.properties),
              p = e.createLegacySelector(f),
              m = this.createFontFamily(t),
              h = e.createSelector(m.name, i),
              g = {
                assetKey: n.key,
                family: m,
                selector: h,
                variant: i,
                weight: a,
                style: o,
                file: u,
                hasOpenTypeFeatures: Jp(l),
                variationAxes: Yp(s),
                owner: d,
                alternativeSelectors: {
                  [p]: {
                    variant: c ? `variable` : this.inferVariantName(f),
                    cssFamilyName: e.cssFontFamilyFromSelector(p),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(h),
              },
              _ = cm(m.fonts, g);
            if (_?.projectDuplicate) g.owner === `project` && ((m.fonts[_.index] = g), (r[h] = g));
            else if (_) {
              $T.debug(`Duplicate font found for:`, g, `with existing font:`, _.existingFont);
              let e = _.existingFont,
                t = g.file?.endsWith(`.woff2`) ?? !1,
                n = e.file?.endsWith(`.woff2`) ?? !1;
              t && !n && ((m.fonts[_.index] = g), (r[h] = g));
            } else (m.fonts.push(g), (r[h] = g));
            this.assetsByKey.set(n.key, n);
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && fm(e);
          return Object.values(r);
        }
        static createSelector(e, t) {
          return `${tE}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${eE}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            z(am(e), `Selector must be a custom font selector`),
            sm(e) ? e.slice(eE.length) : e.slice(tE.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          z(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Jp(t)
            ? t?.map((e) => {
                if (Xp(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (rE = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (iE = `FS;`),
      (aE = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (oE = Object.keys(aE)),
      (sE = (() => RegExp(`^(?:${[...oE, `italic`, `variable`].join(`|`)})`, `u`))()),
      (cE = class e {
        constructor() {
          (M(this, `name`, `fontshare`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = oE.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && aE[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(iE)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(iE, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${iE}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${iE}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await mm(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!sE.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = tm(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: vm(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: Kp(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await hm(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (lE = `Inter`),
      (uE = `FR;`),
      (dE = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (fE = class e {
        constructor() {
          (M(this, `name`, `framer`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(uE) && !e.startsWith(lE)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && dE[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${uE}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await hm(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (pE = `GF;`),
      (mE = class e {
        constructor() {
          (M(this, `name`, `google`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(pE)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(pE, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${pE}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${pE}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let i = await mm(`google`),
            a = [],
            o = bm(t, (e) => e.family),
            s = bm(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(zp),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (zp(e) ? tm(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: ym(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: Kp(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await hm(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (hE = Ae(Ih(), 1)),
      (gE = 5e3),
      (_E = 3),
      (vE = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (yE = new Map()),
      (bE = new Map()),
      (xE = (e, t) => xm(e, t)),
      (SE = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (CE = class {
        constructor() {
          (M(this, `enabled`, !1),
            M(this, `bySelector`, new qT()),
            M(this, `loadedSelectors`, new Set()),
            M(this, `getGoogleFontsListPromise`),
            M(this, `getFontshareFontsListPromise`),
            M(this, `getBuiltInFontsListPromise`),
            M(
              this,
              `customFontsImportPromise`,
              new Promise((e) => {
                this.resolveCustomFontsImportPromise = e;
              })
            ),
            M(this, `local`),
            M(this, `google`),
            M(this, `fontshare`),
            M(this, `builtIn`),
            M(this, `framer`),
            M(this, `custom`),
            M(this, `bySelectorValuesCache`),
            M(this, `testing`, { addFont: this.addFont.bind(this) }),
            (this.local = new GT()),
            (this.google = new mE()),
            (this.fontshare = new cE()),
            (this.framer = new fE()),
            (this.custom = new nE()),
            (this.builtIn = new ZT()),
            this.importLocalFonts());
        }
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await rb.fetchGoogleFontsList(),
                n = await Cm(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = rb.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await Cm(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = rb.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = Cm(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e, t) {
          this.bySelector.forEach((e, t) => {
            am(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e, t);
          for (let e of n) this.addFont(e);
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = mE.parseVariant(n.variant);
            if (zp(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: qp(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = cE.parseVariant(r.variant);
            if (zp(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: qp(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = ZT.parseVariant(i.variant);
            if (zp(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: qp(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return fE.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = im(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((Ia() || (await Sm(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await xE({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`:
              return t.file
                ? (await xE({ family: n, url: t.file, weight: t.weight, style: t.style }, document),
                  this.loadedSelectors.add(e),
                  1)
                : Promise.reject(`Unable to load font: ${e}`);
            default:
              B(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(iE)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                ni(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(pE)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  ni(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(XT)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  ni(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(am) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  ni(`Failed to load custom fonts:`, e);
                })
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !wE.loadedSelectors.has(e));
          n.length !== 0 &&
            (await wE.loadWebFontsFromSelectors(n),
            n.every((e) => wE.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (z(e, `Can’t find Inter font`), e);
        }
      }),
      (wE = new CE()),
      (TE = (() => ({
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }))()),
      (EE = { opacity: 0 }),
      (DE = { opacity: 1 }),
      (OE = Lm(
        k.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: a,
              draggable: o,
              fitImageDimension: s,
              style: c,
              ...l
            } = e,
            u = { ...c },
            d = C(() => To(n), [n]),
            [f, p] = i();
          k.useLayoutEffect(() => {
            if (!n?.src || !s || d) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                p({ width: e.naturalWidth, height: e.naturalHeight });
            }),
              (e.src = n.src));
          }, [n?.src, s, d]);
          let m = d ?? f;
          return (
            s && m && ((u[s] = `auto`), (u.aspectRatio = m.width / m.height)),
            n && delete u.background,
            T(Eo(e.as), {
              ...l,
              style: u,
              ref: t,
              draggable: o,
              children: [n && _(bo, { image: n, alt: a, draggable: o }), r],
            })
          );
        })
      )),
      (AE = (() =>
        !Na() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`)()),
      (jE =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (ME = `{{ text-placeholder }}`),
      (NE = `rich-text-wrapper`),
      (PE = Ja(
        m(function (e, n) {
          let {
              id: r,
              name: i,
              html: a,
              htmlFromDesign: o,
              text: s,
              textFromDesign: u,
              fonts: d = [],
              width: f,
              height: p,
              left: m,
              right: h,
              top: g,
              bottom: v,
              center: y,
              className: b,
              stylesPresetsClassName: x,
              visible: S = !0,
              opacity: w,
              rotation: T = 0,
              verticalAlignment: ee = `top`,
              isEditable: E = !1,
              environment: D = Y.current,
              withExternalLayout: te = !1,
              positionSticky: O,
              positionStickyTop: ne,
              positionStickyRight: k,
              positionStickyBottom: re,
              positionStickyLeft: A,
              __htmlStructure: ie,
              __fromCanvasComponent: ae = !1,
              _forwardedOverrideId: oe,
              _forwardedOverrides: se,
              _usesDOMRect: ce,
              children: le,
              ...ue
            } = e,
            de = va(),
            fe = Mo(e),
            pe = l(null),
            me = n ?? pe,
            { navigate: he, getRoute: ge } = At(),
            _e = Mt();
          (Sn(e.preload ?? []), Ro(e, me));
          let ve = t(pb),
            j = nu(),
            M = s,
            ye = oe ?? r;
          if (ye && se) {
            let e = se[ye];
            typeof e == `string` && (M = e);
          }
          let N = ``;
          if (M) {
            let e = zm(M);
            N = ie ? ie.replace(ME, e) : `<p>${e}</p>`;
          } else if (a) N = a;
          else if (u) {
            let e = zm(u);
            N = ie ? ie.replace(ME, e) : `<p>${e}</p>`;
          } else o && (N = o);
          let xe = Du(),
            Se = C(() => (j || !ge || !_e ? N : Bm(N, ge, _e, xe)), [N, ge, _e, xe]);
          if (
            (c(() => {
              let e = me.current;
              if (e === null) return;
              function t(e) {
                let t = xu(e.target, me.current);
                Ba(e) ||
                  !he ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (cu(he, t, xe) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [he, xe]),
            Um(d, ae, me),
            !S)
          )
            return null;
          let Ce = E && D() === Y.canvas,
            P = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Hm(ee),
              opacity: Ce ? 0 : w,
              flexShrink: 0,
            },
            F = Y.hasRestrictions(),
            we = ha(e, de || 0, !1),
            Te = ce && (f === `auto` || p === `auto`),
            Ee =
              e.transformTemplate || !we || !F || ae || Te
                ? (e.transformTemplate ?? jo(y))
                : void 0;
          if (!te) {
            if (we && F && !Te) {
              let e = q.getNumber(T).toFixed(4);
              ((P.transform = `translate(${we.x}px, ${we.y}px) rotate(${e}deg)`),
                (P.width = we.width),
                (P.minWidth = we.width),
                (P.height = we.height));
            } else
              ((P.left = m),
                (P.right = h),
                (P.top = g),
                (P.bottom = v),
                (P.width = f),
                (P.height = p),
                (P.rotate = T));
            O
              ? (!j || ve) &&
                ((P.position = `sticky`),
                (P.willChange = `transform`),
                (P.top = ne),
                (P.right = k),
                (P.bottom = re),
                (P.left = A))
              : j && (e.positionFixed || e.positionAbsolute) && (P.position = `absolute`);
          }
          return (
            wc(e, P),
            bc(e, P),
            Object.assign(P, e.style),
            _(be.div, {
              id: r,
              ref: me,
              ...ue,
              style: P,
              layoutId: fe,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": y,
              className: Lc(b, x, NE),
              transformTemplate: Ee,
              dangerouslySetInnerHTML: { __html: Se },
            })
          );
        })
      )),
      (FE = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (IE = (() =>
        RegExp(
          `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
          `gu`
        ))()),
      (LE = m(function (e, t) {
        return _(`svg`, { ...e, ref: t, children: e.children });
      })),
      (RE = be.create(LE)),
      (zE = m(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return _(RE, {
          ...r,
          ref: i,
          viewBox: t,
          children: _(be.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (BE = []),
      (VE = `RichTextContainer`),
      (HE = m(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: c,
            bottom: u,
            center: d,
            children: f,
            environment: p = Y.current,
            fonts: m = BE,
            height: h,
            isEditable: g = !1,
            left: v,
            name: y,
            opacity: b,
            positionSticky: x,
            positionStickyBottom: S,
            positionStickyLeft: w,
            positionStickyRight: T,
            positionStickyTop: ee,
            right: E,
            rotation: D = 0,
            style: te,
            _initialStyle: O,
            stylesPresetsClassNames: ne,
            text: k,
            top: re,
            verticalAlignment: A = `top`,
            visible: ie = !0,
            width: ae,
            withExternalLayout: oe = !1,
            viewBox: se,
            viewBoxScale: ce = 1,
            effect: le,
            ...ue
          } = e,
          de = va(),
          fe = p() === Y.canvas,
          pe = t(pb),
          me = Mo(e),
          he = l(null),
          ge = n ?? he;
        (Ro(e, ge), Um(m, r, ge));
        let _e = Qm(le, ge),
          ve = C(() => {
            if (f) return oh(f, ne, k, s, void 0, _e.getTokenizer());
          }, [f, ne, k, s, _e]);
        if (!ie) return null;
        let j = { opacity: g && fe ? 0 : b },
          M = Hm(A);
        M !== ny.justifyContent && (j.justifyContent = M);
        let ye = {},
          be = Y.hasRestrictions(),
          N = ha(e, de || 0, !1),
          xe = o && (ae === `auto` || h === `auto`),
          Se =
            e.transformTemplate || !N || !be || r || xe ? (e.transformTemplate ?? jo(d)) : void 0;
        (oe ||
          (N && be && !xe
            ? ((ye.x = N.x + (L(te?.x) ? te.x : 0)),
              (ye.y = N.y + (L(te?.y) ? te.y : 0)),
              (ye.left = 0),
              (ye.top = 0),
              (j.rotate = q.getNumber(D)),
              (j.width = N.width),
              (j.minWidth = N.width),
              (j.height = N.height))
            : ((j.left = v),
              (j.right = E),
              (j.top = re),
              (j.bottom = u),
              (j.width = ae),
              (j.height = h),
              (j.rotate = D)),
          x
            ? (!fe || pe) &&
              ((j.position = `sticky`),
              (j.willChange = `transform`),
              (j.top = ee),
              (j.right = T),
              (j.bottom = S),
              (j.left = w))
            : fe && (e.positionFixed || e.positionAbsolute) && (j.position = `absolute`)),
          wc(e, j),
          bc(e, j),
          Object.assign(j, O, te, ye),
          me && (ue.layout = `preserve-aspect`));
        let Ce = Eo(e.as),
          P = ue[`data-framer-name`] ?? y,
          F = fe ? rh(Xy(ue)) : ue;
        return I(e.viewBox)
          ? e.as === void 0
            ? _(zE, {
                ...F,
                ref: ge,
                style: j,
                layoutId: me,
                viewBox: se,
                viewBoxScale: ce,
                transformTemplate: Se,
                "data-framer-name": P,
                "data-framer-component-type": VE,
                children: ve,
              })
            : _(Ce, {
                ...F,
                ref: ge,
                style: j,
                layoutId: me,
                transformTemplate: Se,
                "data-framer-name": P,
                "data-framer-component-type": VE,
                children: _(zE, {
                  viewBox: se,
                  viewBoxScale: ce,
                  style: { width: `100%`, height: `100%` },
                  children: ve,
                }),
              })
          : _(Ce, {
              ...F,
              ref: ge,
              style: j,
              layoutId: me,
              transformTemplate: Se,
              "data-framer-name": P,
              "data-framer-component-type": VE,
              children: ve,
            });
      })),
      (UE = Ja(
        m(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (I(a)) {
            !r.stylesPresetsClassName &&
              R(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [I(t) ? `html` : `htmlFromDesign`]: a };
            return _(PE, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && I(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return _(HE, { ...r, ref: i, children: y(a) ? a : void 0 });
        })
      )),
      (WE = Pa()),
      (GE = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
      }),
      (KE = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (qE = class {
        constructor() {
          (M(this, `entries`, new Map()), M(this, `vectorSetItems`, new Map()));
        }
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(xb(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = lh(e);
            (s &&
              (t && uh(s, n),
              (s.id = n),
              (o = hh(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          WE && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = KE),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          WE && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new GE(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !WE) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        WE && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${KE}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t) => e.push(t.svg)),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (JE = new qE()),
      (YE = (() => ({
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }))()),
      (XE = 1e3),
      (ZE = `explicitInter`),
      (We.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = se(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
export {
  Kh as $,
  to as A,
  Zc as At,
  Gv as B,
  DT as C,
  Rt as Ct,
  UE as D,
  Kv as Dt,
  tw as E,
  Fp as Et,
  Ah as F,
  no as G,
  bh as H,
  Qx as I,
  Wr as J,
  rp as K,
  Yx as L,
  Jv as M,
  BT as Mt,
  Lc as N,
  bn as Nt,
  zS as O,
  Ip as Ot,
  wE as P,
  ht as Q,
  Zx as R,
  Wx as S,
  np as St,
  du as T,
  vp as Tt,
  yh as U,
  vh as V,
  gh as W,
  QE as X,
  ft as Y,
  Ua as Z,
  bC as _,
  io as _t,
  ES as a,
  hp as at,
  kd as b,
  Rc as bt,
  Nx as c,
  sp as ct,
  zx as d,
  zt as dt,
  Fr as et,
  cC as f,
  Mt as ft,
  eg as g,
  nu as gt,
  ig as h,
  Ss as ht,
  Tl as i,
  AT as it,
  Jy as j,
  Oh as jt,
  _h as k,
  CS as kt,
  Xi as l,
  Dr as lt,
  aC as m,
  dp as mt,
  Su as n,
  Ic as nt,
  RS as o,
  JE as ot,
  OE as p,
  $l as pt,
  xg as q,
  El as r,
  ei as rt,
  Dv as s,
  jr as st,
  bu as t,
  XS as tt,
  Mx as u,
  Dl as ut,
  I_ as v,
  yr as vt,
  Y as w,
  At as wt,
  uC as x,
  bp as xt,
  Fn as y,
  ti as yt,
  Xx as z,
};
//# sourceMappingURL=framer.7e87VJV8.mjs.map
