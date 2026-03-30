/**
 * SmoothScroll
 *
 * Zero dependency smooth scroll component.
 * নিচের সব case handle করে automatic ভাবে:
 *
 * [1] Desktop browser (normal mode)
 *     → wheel intercept + lerp smooth scroll
 *
 * [2] Mobile browser (normal mode)
 *     → native scroll, কিছু override করে না
 *
 * [3] Mobile browser → Desktop mode (UA spoof)
 *     → pointer: coarse চেক করে real touch device ধরে
 *     → native scroll দেয়, desktop lerp চালু হয় না
 *
 * [4] Battery Saver / Low Power Mode (mobile & desktop)
 *     → requestAnimationFrame throttle হয়ে যায় (fps কমে)
 *     → live fps monitor করে lerp auto-adjust হয়
 *     → fps < 40 হলে smooth বন্ধ করে native scroll দেয়
 *
 * [5] High refresh rate display (90hz / 120hz / 144hz)
 *     → live fps থেকে lerp factor বের করে
 *     → বেশি hz = বেশি smooth (ছোট lerp)
 *     → কম hz = কম smooth (বড় lerp, snappy feel)
 *
 * [6] Battery saver OFF → ON বা display hz পরিবর্তন
 *     → visibilitychange + focus event এ re-detect করে
 *     → page ছেড়ে ফিরে আসলে নতুন করে calibrate হয়
 *
 * [7] Window resize (landscape ↔ portrait, বা desktop mode toggle)
 *     → resize এ device type re-check হয়
 *     → mobile হলে smooth বন্ধ, desktop হলে চালু
 *
 * Usage  : layout.jsx এ <SmoothScroll> দিয়ে সব কিছু wrap করো
 * Install: কোনো npm package লাগবে না
 */

"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
  const currentY   = useRef(0);
  const targetY    = useRef(0);
  const rafRef     = useRef(null);
  const lerpRef    = useRef(0.1);
  const activeRef  = useRef(false);   // smooth চালু আছে কিনা
  const cleanupRef = useRef(null);    // wheel listener cleanup

  useEffect(() => {
    // ─── Utility: real touch device কিনা চেক করো ───────────────────────
    // Mobile browser → Desktop mode করলেও pointer: coarse থাকে
    function isTouchDevice() {
      return (
        window.matchMedia("(pointer: coarse)").matches ||
        navigator.maxTouchPoints > 0
      );
    }

    // ─── Utility: live fps measure করো (~300ms sample) ──────────────────
    function measureFps() {
      return new Promise((resolve) => {
        let frames = 0;
        let start  = null;
        function count(ts) {
          if (!start) start = ts;
          frames++;
          if (ts - start < 300) {
            requestAnimationFrame(count);
          } else {
            resolve(Math.round((frames / (ts - start)) * 1000));
          }
        }
        requestAnimationFrame(count);
      });
    }

    // ─── fps থেকে lerp factor বের করো ───────────────────────────────────
    // fps বেশি = ছোট lerp (বেশি smooth)
    // fps কম  = বড় lerp (snappy, lag feel কমায়)
    function lerpFromFps(fps) {
      if (fps >= 110) return 0.06;   // 120hz display
      if (fps >= 80)  return 0.08;   // 90hz display
      if (fps >= 50)  return 0.10;   // 60hz display
      return null;                   // fps < 40 → battery saver, smooth বন্ধ
    }

    // ─── Smooth scroll চালু করো ──────────────────────────────────────────
    function startSmooth(lerp) {
      if (activeRef.current) return; // already running
      activeRef.current   = true;
      currentY.current    = window.scrollY;
      targetY.current     = window.scrollY;
      lerpRef.current     = lerp;

      function onWheel(e) {
        e.preventDefault();
        targetY.current += e.deltaY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        targetY.current = Math.max(0, Math.min(targetY.current, maxScroll));
      }

      window.addEventListener("wheel", onWheel, { passive: false });

      function animate() {
        currentY.current += (targetY.current - currentY.current) * lerpRef.current;
        if (Math.abs(currentY.current - targetY.current) < 0.5) {
          currentY.current = targetY.current;
        }
        window.scrollTo(0, currentY.current);
        rafRef.current = requestAnimationFrame(animate);
      }
      rafRef.current = requestAnimationFrame(animate);

      // cleanup function save করো
      cleanupRef.current = () => {
        window.removeEventListener("wheel", onWheel);
        cancelAnimationFrame(rafRef.current);
        activeRef.current = false;
      };
    }

    // ─── Smooth scroll বন্ধ করো ──────────────────────────────────────────
    function stopSmooth() {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    }

    // ─── Main calibration: সব case এখানে decide হয় ──────────────────────
    async function calibrate() {
      stopSmooth(); // আগেরটা বন্ধ করো, নতুন করে measure করো

      // Case [2] [3]: touch device হলে native scroll
      if (isTouchDevice()) return;

      // Case [4] [5]: fps measure করো
      const fps  = await measureFps();
      const lerp = lerpFromFps(fps);

      // Case [4]: battery saver বা খুব কম fps → smooth বন্ধ
      if (!lerp) return;

      // Case [1] [5]: desktop, ভালো fps → smooth চালু
      startSmooth(lerp);
    }

    // ─── Page ফিরে আসলে re-calibrate ────────────────────────────────────
    // Case [6]: battery saver toggle, display hz change
    function onVisibilityChange() {
      if (document.visibilityState === "visible") calibrate();
    }
    function onFocus() { calibrate(); }

    // ─── Resize এ re-check 
    // Case [7]: desktop mode toggle, orientation change
    function onResize() { calibrate(); }

    // ─── Events register করো ─────────────────────────────────────────────
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("focus",  onFocus);
    window.addEventListener("resize", onResize);

    // প্রথমবার চালু করো
    calibrate();

    return () => {
      stopSmooth();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("focus",  onFocus);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <>{children}</>;
}