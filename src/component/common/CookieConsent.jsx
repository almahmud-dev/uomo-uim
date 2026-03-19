'use client';
import React, { useState } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-3 z-50 w-[calc(100%-24px)] bg-head rounded p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] sm:w-75 sm:bottom-6 sm:right-6 sm:p-6">
      {/* Text */}
      <p className="texts_14_regular text-white/90 mb-4 sm:mb-5">
        In order to provide you a personalized shopping experience, our site
        uses cookies. By continuing to use this site, you are agreeing to our{" "}
        <button
          onClick={() => {}}
          className="texts_14_regular text-white underline underline-offset-2 cursor-pointer hover:text-white/70 transition-colors duration-200"
        >
          cookie policy.
        </button>
      </p>

      {/* Accept Button */}
      <button
        onClick={() => setVisible(false)}
        className="w-full bg-second/30 hover:bg-second/50 transition-colors duration-200 rounded py-3 sm:py-3.5 texts_13_regular text-white font-semibold tracking-[2px] uppercase cursor-pointer"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;