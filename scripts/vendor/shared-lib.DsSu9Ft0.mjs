import { t as e } from "./rolldown-runtime.CawJvvTp.mjs";
import {
  A as t,
  L as n,
  N as r,
  O as i,
  P as a,
  T as o,
  _ as s,
  c,
  f as l,
  j as u,
  k as d,
  l as f,
  o as p,
  s as m,
  w as h,
  y as g,
  z as _,
} from "./react.6snvU8bB.mjs";
import { S as v, a as y, r as b, t as x } from "./motion.CpAcN4_Y.mjs";
import {
  A as S,
  Dt as ee,
  Et as te,
  N as C,
  O as w,
  P as ne,
  V as T,
  X as E,
  a as re,
  k as ie,
  s as D,
  ut as ae,
  vt as oe,
} from "./framer.7e87VJV8.mjs";
var O,
  k,
  A,
  se = e(() => {
    (E(),
      ne.loadFonts([
        `GF;Cormorant Garamond-600italic`,
        `GF;Cormorant Garamond-700italic`,
        `GF;Cormorant Garamond-700italic`,
        `GF;Cormorant Garamond-600italic`,
      ]),
      (O = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Cormorant Garamond`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Cormorant Garamond`,
              url: `../../assets/fonts/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5LDfOitk9Ifu5UQ.woff2`,
              weight: `600`,
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
      (k = [
        `.framer-mwjYG .framer-styles-preset-15hwgrk:not(.rich-text-wrapper), .framer-mwjYG .framer-styles-preset-15hwgrk.rich-text-wrapper p { --framer-font-family: "Cormorant Garamond", "Cormorant Garamond Placeholder", serif; --framer-font-family-bold: "Cormorant Garamond", "Cormorant Garamond Placeholder", serif; --framer-font-family-bold-italic: "Cormorant Garamond", "Cormorant Garamond Placeholder", serif; --framer-font-family-italic: "Cormorant Garamond", "Cormorant Garamond Placeholder", serif; --framer-font-open-type-features: 'ss07' on; --framer-font-size: 20px; --framer-font-style: italic; --framer-font-style-bold: italic; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.02em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-e9b8e13d-0299-4ec2-941c-f0584dc194b0, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (A = `framer-mwjYG`));
  });
function j(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function ce(e, t, n) {
  return (1 - n) * e + n * t;
}
function le(e, t, n, r) {
  return ce(e, t, 1 - Math.exp(-n * r));
}
function ue(e, t) {
  return ((e % t) + t) % t;
}
function de(e, t) {
  let n;
  return function (...r) {
    let i = this;
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(i, r));
      }, t)));
  };
}
var M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  fe = e(() => {
    (n(),
      (M = `1.3.17-framer`),
      (N = class {
        isRunning = !1;
        value = 0;
        from = 0;
        to = 0;
        currentTime = 0;
        lerp;
        duration;
        easing;
        onUpdate;
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let n = j(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = le(this.value, this.to, this.lerp * 60, e)),
                Math.round(this.value) === this.to && ((this.value = this.to), (t = !0)))
              : ((this.value = this.to), (t = !0));
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (P = class {
        constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = de(this.resize, r)),
              this.wrapper instanceof Window
                ? _.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === _ &&
              this.debouncedResize &&
              _.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper instanceof Window
            ? ((this.width = _.innerWidth), (this.height = _.innerHeight))
            : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (F = class {
        events = {};
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e]?.(...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (I = 100 / 6),
      (L = { passive: !1 }),
      (R = class {
        constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          ((this.element = e),
            (this.options = t),
            _.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, L),
            this.element.addEventListener(`touchstart`, this.onTouchStart, L),
            this.element.addEventListener(`touchmove`, this.onTouchMove, L),
            this.element.addEventListener(`touchend`, this.onTouchEnd, L));
        }
        touchStart = { x: 0, y: 0 };
        lastDelta = { x: 0, y: 0 };
        window = { width: 0, height: 0 };
        emitter = new F();
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            _.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel, L),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, L),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, L),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, L));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
            r = -(t - this.touchStart.x) * this.options.touchMultiplier,
            i = -(n - this.touchStart.y) * this.options.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e,
            i = r === 1 ? I : r === 2 ? this.window.width : 1,
            a = r === 1 ? I : r === 2 ? this.window.height : 1;
          ((t *= i),
            (n *= a),
            (t *= this.options.wheelMultiplier),
            (n *= this.options.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          this.window = { width: _.innerWidth, height: _.innerHeight };
        };
      }),
      (z = (e) => Math.min(1, 1.001 - 2 ** (-10 * e))),
      (B = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        _rafId = null;
        isTouching;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new N();
        emitter = new F();
        dimensions;
        virtualScroll;
        constructor({
          wrapper: e = _,
          content: t = document.documentElement,
          eventsTarget: n = e,
          smoothWheel: r = !0,
          syncTouch: i = !1,
          syncTouchLerp: a = 0.075,
          touchInertiaExponent: o = 1.7,
          duration: s,
          easing: c,
          lerp: l = 0.1,
          infinite: u = !1,
          orientation: d = `vertical`,
          gestureOrientation: f = d === `horizontal` ? `both` : `vertical`,
          touchMultiplier: p = 1,
          wheelMultiplier: m = 1,
          autoResize: h = !0,
          prevent: g,
          virtualScroll: v,
          overscroll: y = !0,
          autoRaf: b = !1,
          anchors: x = !1,
          autoToggle: S = !1,
          allowNestedScroll: ee = !1,
          __experimental__naiveDimensions: te = !1,
          naiveDimensions: C = te,
          stopInertiaOnNavigate: w = !1,
        } = {}) {
          ((_.lenisVersion = M),
            (!e || e === document.documentElement) && (e = _),
            typeof s == `number` && typeof c != `function`
              ? (c = z)
              : typeof c == `function` && typeof s != `number` && (s = 1),
            (this.options = {
              wrapper: e,
              content: t,
              eventsTarget: n,
              smoothWheel: r,
              syncTouch: i,
              syncTouchLerp: a,
              touchInertiaExponent: o,
              duration: s,
              easing: c,
              lerp: l,
              infinite: u,
              gestureOrientation: f,
              orientation: d,
              touchMultiplier: p,
              wheelMultiplier: m,
              autoResize: h,
              prevent: g,
              virtualScroll: v,
              overscroll: y,
              autoRaf: b,
              anchors: x,
              autoToggle: S,
              allowNestedScroll: ee,
              naiveDimensions: C,
              stopInertiaOnNavigate: w,
            }),
            (this.dimensions = new P(e, t, { autoResize: h })),
            this.updateClassName(),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.addEventListener(`scrollend`, this.onScrollEnd, { capture: !0 }),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.addEventListener(`click`, this.onClick, !1),
            this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown, !1),
            (this.virtualScroll = new R(n, { touchMultiplier: p, wheelMultiplier: m })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll),
            this.options.autoToggle &&
              (this.checkOverflow(),
              this.rootElement.addEventListener(`transitionend`, this.onTransitionEnd, {
                passive: !0,
              })),
            this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.removeEventListener(`scrollend`, this.onScrollEnd, {
              capture: !0,
            }),
            this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown, !1),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.removeEventListener(`click`, this.onClick, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName(),
            this._rafId && cancelAnimationFrame(this._rafId));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        onScrollEnd = (e) => {
          e instanceof CustomEvent ||
            ((this.isScrolling === `smooth` || this.isScrolling === !1) && e.stopPropagation());
        };
        dispatchScrollendEvent = () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent(`scrollend`, {
              bubbles: this.options.wrapper === _,
              detail: { lenisScrollEnd: !0 },
            })
          );
        };
        get overflow() {
          let e = this.isHorizontal ? `overflow-x` : `overflow-y`;
          return getComputedStyle(this.rootElement)[e];
        }
        checkOverflow() {
          [`hidden`, `clip`].includes(this.overflow) ? this.internalStop() : this.internalStart();
        }
        onTransitionEnd = (e) => {
          e.propertyName.includes(`overflow`) && this.checkOverflow();
        };
        setScroll(e) {
          this.isHorizontal
            ? this.options.wrapper.scrollTo({ left: e, behavior: `instant` })
            : this.options.wrapper.scrollTo({ top: e, behavior: `instant` });
        }
        onClick = (e) => {
          let t = e
            .composedPath()
            .filter((e) => e instanceof HTMLAnchorElement && e.getAttribute(`href`));
          if (this.options.anchors) {
            let e = t.find((e) => e.getAttribute(`href`)?.includes(`#`));
            if (e) {
              let t = e.getAttribute(`href`);
              if (t) {
                let e =
                    typeof this.options.anchors == `object` && this.options.anchors
                      ? this.options.anchors
                      : void 0,
                  n = `#${t.split(`#`)[1]}`;
                this.scrollTo(n, e);
              }
            }
          }
          this.options.stopInertiaOnNavigate &&
            t.find((e) => e.host === _.location.host) &&
            this.reset();
        };
        onPointerDown = (e) => {
          e.button === 1 && this.reset();
        };
        onVirtualScroll = (e) => {
          if (
            typeof this.options.virtualScroll == `function` &&
            this.options.virtualScroll(e) === !1
          )
            return;
          let { deltaX: t, deltaY: n, event: r } = e;
          if (
            (this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }),
            r.ctrlKey || r.lenisStopPropagation)
          )
            return;
          let i = r.type.includes(`touch`),
            a = r.type.includes(`wheel`);
          this.isTouching = r.type === `touchstart` || r.type === `touchmove`;
          let o = t === 0 && n === 0;
          if (
            this.options.syncTouch &&
            i &&
            r.type === `touchstart` &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          let s =
            (this.options.gestureOrientation === `vertical` && n === 0) ||
            (this.options.gestureOrientation === `horizontal` && t === 0);
          if (o || s) return;
          let c = r.composedPath();
          c = c.slice(0, c.indexOf(this.rootElement));
          let l = this.options.prevent;
          if (
            c.find(
              (e) =>
                e instanceof HTMLElement &&
                ((typeof l == `function` && l?.(e)) ||
                  e.hasAttribute?.(`data-lenis-prevent`) ||
                  (i && e.hasAttribute?.(`data-lenis-prevent-touch`)) ||
                  (a && e.hasAttribute?.(`data-lenis-prevent-wheel`)) ||
                  (this.options.allowNestedScroll &&
                    this.checkNestedScroll(e, { deltaX: t, deltaY: n })))
            )
          )
            return;
          if (this.isStopped || this.isLocked) {
            r.cancelable && r.preventDefault();
            return;
          }
          if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a))) {
            ((this.isScrolling = `native`), this.animate.stop(), (r.lenisStopPropagation = !0));
            return;
          }
          let u = n;
          (this.options.gestureOrientation === `both`
            ? (u = Math.abs(n) > Math.abs(t) ? n : t)
            : this.options.gestureOrientation === `horizontal` && (u = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== _ &&
                this.limit > 0 &&
                ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && n > 0) ||
                  (this.animatedScroll === this.limit && n < 0)))) &&
              (r.lenisStopPropagation = !0),
            r.cancelable && r.preventDefault());
          let d = i && this.options.syncTouch,
            f = i && r.type === `touchend`;
          (f &&
            (u =
              Math.sign(this.velocity) *
              Math.abs(this.velocity) ** +this.options.touchInertiaExponent),
            this.scrollTo(this.targetScroll + u, {
              programmatic: !1,
              ...(d
                ? { lerp: f ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            }));
        };
        resize() {
          (this.dimensions.resize(),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            this.emit());
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        onNativeScroll = () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === `native`) {
            let e = this.animatedScroll;
            ((this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - e),
              (this.direction = Math.sign(this.animatedScroll - e)),
              this.isStopped || (this.isScrolling = `native`),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  ((this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit());
                }, 400)));
          }
        };
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          if (this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.removeProperty(`overflow`);
              return;
            }
            this.internalStart();
          }
        }
        internalStart() {
          this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
        }
        stop() {
          if (!this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.setProperty(`overflow`, `clip`);
              return;
            }
            this.internalStop();
          }
        }
        internalStop() {
          this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
        }
        raf = (e) => {
          let t = e - (this.time || e);
          ((this.time = e),
            this.animate.advance(t * 0.001),
            this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
        };
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            programmatic: i = !0,
            lerp: a = i ? this.options.lerp : void 0,
            duration: o = i ? this.options.duration : void 0,
            easing: s = i ? this.options.easing : void 0,
            onStart: c,
            onComplete: l,
            force: u = !1,
            userData: d,
          } = {}
        ) {
          if (!((this.isStopped || this.isLocked) && !u)) {
            if (typeof e == `string` && [`top`, `left`, `start`, `#`].includes(e)) e = 0;
            else if (typeof e == `string` && [`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? ((n = document.querySelector(e)),
                    n || (e === `#top` ? (e = 0) : console.warn(`Lenis: Target not found`, e)))
                  : e instanceof HTMLElement && e?.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== _) {
                  let e = this.rootElement.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (typeof e == `number`) {
              if (((e += t), (e = Math.round(e)), this.options.infinite)) {
                if (i) {
                  this.targetScroll = this.animatedScroll = this.scroll;
                  let t = e - this.animatedScroll;
                  t > this.limit / 2 ? (e -= this.limit) : t < -this.limit / 2 && (e += this.limit);
                }
              } else e = j(0, e, this.limit);
              if (e === this.targetScroll) {
                (c?.(this), l?.(this));
                return;
              }
              if (((this.userData = d ?? {}), n)) {
                ((this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  l?.(this),
                  (this.userData = {}),
                  requestAnimationFrame(() => {
                    this.dispatchScrollendEvent();
                  }));
                return;
              }
              (i || (this.targetScroll = e),
                typeof o == `number` && typeof s != `function`
                  ? (s = z)
                  : typeof s == `function` && typeof o != `number` && (o = 1),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: o,
                  easing: s,
                  lerp: a,
                  onStart: () => {
                    (r && (this.isLocked = !0), (this.isScrolling = `smooth`), c?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      i && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        l?.(this),
                        (this.userData = {}),
                        requestAnimationFrame(() => {
                          this.dispatchScrollendEvent();
                        }),
                        this.preventNextNativeScrollEvent()));
                  },
                }));
            }
          }
        }
        preventNextNativeScrollEvent() {
          ((this._preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              this._preventNextNativeScrollEvent = !1;
            }));
        }
        checkNestedScroll(e, { deltaX: t, deltaY: n }) {
          let r = Date.now(),
            i = (e._lenis ??= {}),
            a,
            o,
            s,
            c,
            l,
            u,
            d,
            f,
            p = this.options.gestureOrientation;
          if (r - (i.time ?? 0) > 2e3) {
            i.time = Date.now();
            let t = _.getComputedStyle(e);
            i.computedStyle = t;
            let n = t.overflowX,
              r = t.overflowY;
            if (
              ((a = [`auto`, `overlay`, `scroll`].includes(n)),
              (o = [`auto`, `overlay`, `scroll`].includes(r)),
              (i.hasOverflowX = a),
              (i.hasOverflowY = o),
              (!a && !o) || (p === `vertical` && !o) || (p === `horizontal` && !a))
            )
              return !1;
            ((l = e.scrollWidth),
              (u = e.scrollHeight),
              (d = e.clientWidth),
              (f = e.clientHeight),
              (s = l > d),
              (c = u > f),
              (i.isScrollableX = s),
              (i.isScrollableY = c),
              (i.scrollWidth = l),
              (i.scrollHeight = u),
              (i.clientWidth = d),
              (i.clientHeight = f));
          } else
            ((s = i.isScrollableX),
              (c = i.isScrollableY),
              (a = i.hasOverflowX),
              (o = i.hasOverflowY),
              (l = i.scrollWidth),
              (u = i.scrollHeight),
              (d = i.clientWidth),
              (f = i.clientHeight));
          if (
            (!a && !o) ||
            (!s && !c) ||
            (p === `vertical` && (!o || !c)) ||
            (p === `horizontal` && (!a || !s))
          )
            return !1;
          let m;
          if (p === `horizontal`) m = `x`;
          else if (p === `vertical`) m = `y`;
          else {
            let e = t !== 0,
              r = n !== 0;
            (e && a && s && (m = `x`), r && o && c && (m = `y`));
          }
          if (!m) return !1;
          let h, g, v, y, b;
          if (m === `x`) ((h = e.scrollLeft), (g = l - d), (v = t), (y = a), (b = s));
          else if (m === `y`) ((h = e.scrollTop), (g = u - f), (v = n), (y = o), (b = c));
          else return !1;
          return (v > 0 ? h < g : h > 0) && y && b;
        }
        get rootElement() {
          return this.options.wrapper === _ ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          let e = this.options.wrapper;
          return this.isHorizontal ? (e.scrollX ?? e.scrollLeft) : (e.scrollY ?? e.scrollTop);
        }
        get scroll() {
          return this.options.infinite ? ue(this.animatedScroll, this.limit) : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this._isScrolling;
        }
        set isScrolling(e) {
          this._isScrolling !== e && ((this._isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this._isStopped;
        }
        set isStopped(e) {
          this._isStopped !== e && ((this._isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this._isLocked;
        }
        set isLocked(e) {
          this._isLocked !== e && ((this._isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.options.autoToggle && (e += ` lenis-autoToggle`),
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function V(e, t) {
  let n;
  return function (...r) {
    let i = this;
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(i, r));
      }, t)));
  };
}
function H(e) {
  (getComputedStyle(e).position === `sticky` &&
    (e.style.setProperty(`position`, `static`), (e.dataset.sticky = `true`)),
    e.offsetParent && H(e.offsetParent));
}
function U(e) {
  (e?.dataset?.sticky === `true` && (e.style.removeProperty(`position`), delete e.dataset.sticky),
    e.offsetParent && U(e.offsetParent));
}
function W(e, t = 0) {
  let n = t + e.offsetTop;
  return e.offsetParent ? W(e.offsetParent, n) : n;
}
function G(e, t = 0) {
  let n = t + e.offsetLeft;
  return e.offsetParent ? G(e.offsetParent, n) : n;
}
function K(e, t = 0) {
  let n = t + e.scrollTop;
  return e.offsetParent ? K(e.offsetParent, n) : n + _.scrollY;
}
function q(e, t = 0) {
  let n = t + e.scrollLeft;
  return e.offsetParent ? q(e.offsetParent, n) : n + _.scrollX;
}
function J() {
  return pe++;
}
var Y,
  pe,
  me,
  he = e(() => {
    (n(),
      (Y = class {
        element;
        options;
        align;
        rect = {};
        wrapperResizeObserver;
        resizeObserver;
        debouncedWrapperResize;
        constructor(
          e,
          { align: t = [`start`], ignoreSticky: n = !0, ignoreTransform: r = !1 } = {}
        ) {
          ((this.element = e),
            (this.options = { align: t, ignoreSticky: n, ignoreTransform: r }),
            (this.align = [t].flat()),
            (this.debouncedWrapperResize = V(this.onWrapperResize, 500)),
            (this.wrapperResizeObserver = new ResizeObserver(this.debouncedWrapperResize)),
            this.wrapperResizeObserver.observe(document.body),
            this.onWrapperResize(),
            (this.resizeObserver = new ResizeObserver(this.onResize)),
            this.resizeObserver.observe(this.element),
            this.setRect({ width: this.element.offsetWidth, height: this.element.offsetHeight }));
        }
        destroy() {
          (this.wrapperResizeObserver.disconnect(), this.resizeObserver.disconnect());
        }
        setRect({ top: e, left: t, width: n, height: r, element: i } = {}) {
          ((e ??= this.rect.top),
            (t ??= this.rect.left),
            (n ??= this.rect.width),
            (r ??= this.rect.height),
            (i ??= this.rect.element),
            !(
              e === this.rect.top &&
              t === this.rect.left &&
              n === this.rect.width &&
              r === this.rect.height &&
              i === this.rect.element
            ) &&
              ((this.rect.top = e),
              (this.rect.y = e),
              (this.rect.width = n),
              (this.rect.height = r),
              (this.rect.left = t),
              (this.rect.x = t),
              (this.rect.bottom = e + r),
              (this.rect.right = t + n)));
        }
        onWrapperResize = () => {
          let e, t;
          if ((this.options.ignoreSticky && H(this.element), this.options.ignoreTransform))
            ((e = W(this.element)), (t = G(this.element)));
          else {
            let n = this.element.getBoundingClientRect();
            ((e = n.top + K(this.element)), (t = n.left + q(this.element)));
          }
          (this.options.ignoreSticky && U(this.element), this.setRect({ top: e, left: t }));
        };
        onResize = ([e]) => {
          if (!e?.borderBoxSize[0]) return;
          let t = e.borderBoxSize[0].inlineSize,
            n = e.borderBoxSize[0].blockSize;
          this.setRect({ width: t, height: n });
        };
      }),
      (pe = 0),
      (me = class {
        constructor(
          e,
          {
            type: t = `proximity`,
            lerp: n,
            easing: r,
            duration: i,
            distanceThreshold: a = `50%`,
            debounce: o = 500,
            onSnapStart: s,
            onSnapComplete: c,
          } = {}
        ) {
          ((this.lenis = e),
            (this.options = {
              type: t,
              lerp: n,
              easing: r,
              duration: i,
              distanceThreshold: a,
              debounce: o,
              onSnapStart: s,
              onSnapComplete: c,
            }),
            this.onWindowResize(),
            _.addEventListener(`resize`, this.onWindowResize, !1),
            (this.onSnapDebounced = V(this.onSnap, this.options.debounce)),
            this.lenis.on(`virtual-scroll`, this.onSnapDebounced));
        }
        options;
        elements = new Map();
        snaps = new Map();
        viewport = { width: _.innerWidth, height: _.innerHeight };
        isStopped = !1;
        onSnapDebounced;
        currentSnapIndex;
        destroy() {
          (this.lenis.off(`virtual-scroll`, this.onSnapDebounced),
            _.removeEventListener(`resize`, this.onWindowResize, !1),
            this.elements.forEach((e) => {
              e.destroy();
            }));
        }
        start() {
          this.isStopped = !1;
        }
        stop() {
          this.isStopped = !0;
        }
        add(e) {
          let t = J();
          return (this.snaps.set(t, { value: e }), () => this.snaps.delete(t));
        }
        addElement(e, t = {}) {
          let n = J();
          return (this.elements.set(n, new Y(e, t)), () => this.elements.delete(n));
        }
        addElements(e, t = {}) {
          let n = [...e].map((e) => this.addElement(e, t));
          return () => {
            n.forEach((e) => {
              e();
            });
          };
        }
        onWindowResize = () => {
          ((this.viewport.width = _.innerWidth), (this.viewport.height = _.innerHeight));
        };
        computeSnaps = () => {
          let { isHorizontal: e } = this.lenis,
            t = [...this.snaps.values()];
          return (
            this.elements.forEach(({ rect: n, align: r }) => {
              let i;
              r.forEach((r) => {
                (r === `start`
                  ? (i = n.top)
                  : r === `center`
                    ? (i = e
                        ? n.left + n.width / 2 - this.viewport.width / 2
                        : n.top + n.height / 2 - this.viewport.height / 2)
                    : r === `end` &&
                      (i = e
                        ? n.left + n.width - this.viewport.width
                        : n.top + n.height - this.viewport.height),
                  typeof i == `number` && t.push({ value: Math.ceil(i) }));
              });
            }),
            (t = t.sort((e, t) => Math.abs(e.value) - Math.abs(t.value))),
            t
          );
        };
        previous() {
          this.goTo((this.currentSnapIndex ?? 0) - 1);
        }
        next() {
          this.goTo((this.currentSnapIndex ?? 0) + 1);
        }
        goTo(e) {
          let t = this.computeSnaps();
          if (t.length === 0) return;
          this.currentSnapIndex = Math.max(0, Math.min(e, t.length - 1));
          let n = t[this.currentSnapIndex];
          n !== void 0 &&
            this.lenis.scrollTo(n.value, {
              duration: this.options.duration,
              easing: this.options.easing,
              lerp: this.options.lerp,
              lock: this.options.type === `lock`,
              userData: { initiator: `snap` },
              onStart: () => {
                this.options.onSnapStart?.({ index: this.currentSnapIndex, ...n });
              },
              onComplete: () => {
                this.options.onSnapComplete?.({ index: this.currentSnapIndex, ...n });
              },
            });
        }
        get distanceThreshold() {
          let e = 1 / 0;
          if (this.options.type === `mandatory`) return 1 / 0;
          let { isHorizontal: t } = this.lenis,
            n = t ? `width` : `height`;
          return (
            (e =
              typeof this.options.distanceThreshold == `string` &&
              this.options.distanceThreshold.endsWith(`%`)
                ? (Number(this.options.distanceThreshold.replace(`%`, ``)) / 100) * this.viewport[n]
                : typeof this.options.distanceThreshold == `number`
                  ? this.options.distanceThreshold
                  : this.viewport[n]),
            e
          );
        }
        onSnap = (e) => {
          if (
            this.isStopped ||
            e.event.type === `touchmove` ||
            (this.options.type === `lock` && this.lenis.userData?.initiator === `snap`)
          )
            return;
          let { scroll: t, isHorizontal: n } = this.lenis,
            r = n ? e.deltaX : e.deltaY;
          t = Math.ceil(this.lenis.scroll + r);
          let i = this.computeSnaps();
          if (i.length === 0) return;
          let a,
            o = i.findLastIndex(({ value: e }) => e < t),
            s = i.findIndex(({ value: e }) => e > t);
          if (this.options.type === `lock`) r > 0 ? (a = s) : r < 0 && (a = o);
          else {
            let e = i[o],
              n = e ? Math.abs(t - e.value) : 1 / 0,
              r = i[s];
            a = n < (r ? Math.abs(t - r.value) : 1 / 0) ? o : s;
          }
          if (a === void 0 || a === -1) return;
          a = Math.max(0, Math.min(a, i.length - 1));
          let c = i[a];
          Math.abs(t - c.value) <= this.distanceThreshold && this.goTo(a);
        };
        resize() {
          this.elements.forEach((e) => e.onWrapperResize());
        }
      }));
  });
function X({ smooth: e, infinite: t, orientation: n, intensity: a, children: s, snap: u }) {
  let p = i(),
    h = i(),
    g = i();
  return (
    r(() => {
      if (s && (!p.current || !h.current)) return;
      p.current &&
        h.current &&
        (n === `horizontal`
          ? p.current.style.setProperty(`overflowX`, `auto`)
          : p.current.style.setProperty(`overflowY`, `auto`));
      let r = new B({
        smoothWheel: e,
        infinite: t,
        orientation: n,
        gestureOrientation: n === `horizontal` ? `both` : `vertical`,
        autoRaf: !0,
        autoToggle: !0,
        anchors: !0,
        allowNestedScroll: !0,
        wrapper: p.current,
        content: h.current,
        syncTouch: !!t || n === `horizontal`,
      });
      g.current = r;
      let i;
      return (
        u &&
          u.snaps.length > 0 &&
          ((i = new me(r, { type: u.type, distanceThreshold: u.threshold + `%` })),
          u.snaps.forEach((e) => {
            if (!e.target?.current) return;
            let t = e.target.current.id;
            document.querySelectorAll(`#${t}`).forEach((t) => {
              i.addElement(t, { align: e.align });
            });
          })),
        (_.lenis = r),
        (_.lenisSnap = u),
        () => {
          (r && r.destroy(), i && i.destroy());
        }
      );
    }, [e, t, n, a, s, u]),
    r(() => {
      function e(e) {
        e
          .composedPath()
          .find(
            (e) =>
              e instanceof HTMLAnchorElement &&
              (e.getAttribute(`href`)?.startsWith(`./`) ||
                e.getAttribute(`href`)?.startsWith(`../`))
          ) &&
          g.current &&
          g.current.reset();
      }
      return (
        _.addEventListener(`click`, e),
        () => {
          _.removeEventListener(`click`, e);
        }
      );
    }, []),
    f(m, {
      children: [
        c(`link`, { href: `../../assets/misc/lenis.css`, rel: `stylesheet` }),
        s &&
          c(m, {
            children: c(`div`, {
              ref: p,
              style:
                n === `horizontal`
                  ? { overflowX: `auto`, width: `100%` }
                  : { overflowY: `auto`, height: `100%` },
              children: c(`div`, {
                ref: h,
                style: { width: `100%` },
                children: o.map(s, (e) =>
                  l(e) ? d(e, { style: { ...e.props.style, width: `100%` } }) : e
                ),
              }),
            }),
          }),
      ],
    })
  );
}
var ge = e(() => {
    (n(),
      p(),
      E(),
      fe(),
      he(),
      h(),
      (X.displayName = `Lenis`),
      S(X, {
        smooth: { type: D.Boolean, title: `Smooth`, defaultValue: !0 },
        intensity: {
          type: D.Number,
          title: `Intensity`,
          defaultValue: 12,
          step: 1,
          min: 1,
          max: 100,
          hidden(e) {
            return e.smooth === !1;
          },
          description: `This will be ignored on mobile.`,
        },
        infinite: {
          type: D.Boolean,
          title: `Infinite`,
          defaultValue: !1,
          hidden(e) {
            return e.smooth === !1;
          },
        },
        orientation: {
          type: D.Enum,
          defaultValue: `Vertical`,
          displaySegmentedControl: !0,
          options: [`vertical`, `horizontal`],
          optionTitles: [`Vertical`, `Horizontal`],
          hidden(e) {
            return e.smooth === !1;
          },
        },
        children: { type: D.ComponentInstance, title: `Content` },
        snap: {
          type: D.Object,
          optional: !0,
          description: `Cooked and served by [darkroom.engineering](https://darkroom.engineering).`,
          controls: {
            type: {
              type: D.Enum,
              defaultValue: `proximity`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              options: [`proximity`, `mandatory`, `lock`],
              optionTitles: [`Proximity`, `Mandatory`, `Lock`],
            },
            threshold: {
              type: D.Number,
              defaultValue: 50,
              min: 0,
              max: 100,
              unit: `%`,
              hidden: (e) => e.snap.type === `mandatory`,
            },
            snaps: {
              type: D.Array,
              control: {
                type: D.Object,
                controls: {
                  target: { title: `Target`, type: D.ScrollSectionRef },
                  align: {
                    type: D.Enum,
                    defaultValue: `center`,
                    displaySegmentedControl: !0,
                    segmentedControlDirection: `horizontal`,
                    options: [`start`, `center`, `end`],
                    optionIcons: [`align-top`, `align-middle`, `align-bottom`],
                  },
                },
              },
            },
          },
        },
      }));
  }),
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Z,
  Ce,
  Q,
  $,
  we = e(() => {
    (p(),
      E(),
      x(),
      h(),
      ge(),
      (_e = T(X)),
      (ve = `framer-NWq5N`),
      (ye = { EiDNqBa0C: `framer-v-1jj4ft` }),
      (be = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (xe = ({ value: e, children: n }) => {
        let r = t(y),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(y.Provider, { value: a, children: n });
      }),
      (Se = v.create(a)),
      (Z = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Ce = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = ee(
        s(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = g(),
            { activeLocale: o, setLocale: s } = oe();
          ae();
          let { style: l, className: u, layoutId: d, variant: f, ...p } = Z(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ee,
              setVariant: ne,
              variants: T,
            } = te({ defaultVariant: `EiDNqBa0C`, ref: r, variant: f, variantClassNames: ye }),
            E = Ce(e, T),
            ie = C(ve);
          return c(b, {
            id: d ?? a,
            children: c(Se, {
              animate: T,
              initial: !1,
              children: c(xe, {
                value: be,
                children: c(v.div, {
                  ...p,
                  ...y,
                  className: C(ie, `framer-1jj4ft`, u, h),
                  "data-framer-name": `Default`,
                  layoutDependency: E,
                  layoutId: `EiDNqBa0C`,
                  ref: r,
                  style: { ...l },
                  children: c(re, {
                    children: c(w, {
                      className: `framer-1338hi9-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: E,
                      layoutId: `fb5SMkLgh-container`,
                      nodeId: `fb5SMkLgh`,
                      rendersWithMotion: !0,
                      scopeId: `cm6C2mNqy`,
                      children: c(X, {
                        height: `100%`,
                        id: `fb5SMkLgh`,
                        infinite: !1,
                        intensity: 12,
                        layoutId: `fb5SMkLgh`,
                        orientation: `vertical`,
                        smooth: !0,
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
          `.framer-NWq5N.framer-o9y7vk, .framer-NWq5N .framer-o9y7vk { display: block; }`,
          `.framer-NWq5N.framer-1jj4ft { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-NWq5N .framer-1338hi9-container { flex: none; height: auto; position: relative; width: auto; }`,
        ],
        `framer-NWq5N`
      )),
      ($ = Q),
      (Q.displayName = `Smooth Scroll Component`),
      (Q.defaultProps = { height: 0, width: 0 }),
      ie(Q, [{ explicitInter: !0, fonts: [] }, ..._e], { supportsExplicitInterCodegen: !0 }));
  });
function Te(e, t) {
  return {
    description: `Joy Jia is an Edmonton-based industrial designer and visual communicator. Her work spanning furniture, branding, and information design. `,
    favicon: `https://framerusercontent.com/assets/9Qa5t6P10mRokjfYFMKCryRvXDM.png`,
    robots: `max-image-preview:large`,
    socialImage: `https://framerusercontent.com/assets/4bSi3zWRb7Lci1uNl5lrzdBJaxs.png`,
    title: `Joy Jia Design`,
  };
}
var Ee = e(() => {});
export { A as a, se as c, we as i, Te as n, k as o, $ as r, O as s, Ee as t };
//# sourceMappingURL=shared-lib.DsSu9Ft0.mjs.map
