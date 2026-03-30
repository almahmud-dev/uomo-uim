/**
 * SmoothScroll
 *
 * Zero dependency smooth scroll component.
 * Device refresh rate (hz) detect করে সেই অনুযায়ী scroll smooth করে।
 *
 * Mobile  → native scroll (কিছু override করে না)
 * Desktop → wheel event intercept + lerp animation
 *   60hz  → lerp 0.10  (smooth, snappy)
 *   90hz  → lerp 0.08  (very smooth)
 *   120hz → lerp 0.06  (ultra smooth)
 *
 * Usage: layout.jsx এ <SmoothScroll> দিয়ে wrap করো।
 * কোনো npm install লাগবে না।
 */

"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
  const currentY = useRef(0);
  const targetY = useRef(0);
  const rafRef = useRef(null);
  const lerpRef = useRef(0.1);

  useEffect(() => {
    // Device hz detect
    let frames = 0;
    let start = null;

    function detectHz(ts) {
      if (!start) start = ts;
      frames++;
      if (ts - start < 500) {
        requestAnimationFrame(detectHz);
      } else {
        const hz = Math.round((frames / (ts - start)) * 1000);
        const isMobile =
          window.innerWidth < 768 ||
          /Mobi|Android/i.test(navigator.userAgent);

        if (isMobile) {
          // Mobile এ কিছুই করবো না — native scroll চলবে
          lerpRef.current = null;
          return;
        }

        // Desktop: hz অনুযায়ী lerp factor
        if (hz >= 120) lerpRef.current = 0.06;
        else if (hz >= 90) lerpRef.current = 0.08;
        else lerpRef.current = 0.10;

        startSmooth();
      }
    }
    requestAnimationFrame(detectHz);

    function startSmooth() {
      currentY.current = window.scrollY;
      targetY.current = window.scrollY;

      // wheel event intercept করো
      function onWheel(e) {
        e.preventDefault();
        targetY.current += e.deltaY;
        // Page boundary
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        targetY.current = Math.max(0, Math.min(targetY.current, maxScroll));
      }

      window.addEventListener("wheel", onWheel, { passive: false });

      function animate() {
        const lerp = lerpRef.current;
        currentY.current += (targetY.current - currentY.current) * lerp;

        if (Math.abs(currentY.current - targetY.current) < 0.5) {
          currentY.current = targetY.current;
        }

        window.scrollTo(0, currentY.current);
        rafRef.current = requestAnimationFrame(animate);
      }

      rafRef.current = requestAnimationFrame(animate);

      return () => {
        window.removeEventListener("wheel", onWheel);
        cancelAnimationFrame(rafRef.current);
      };
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <>{children}</>;
}