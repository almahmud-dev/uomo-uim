'use client';
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const NewsletterPopup = dynamic(() => import("@/component/common/Newsletterpopup"), {
  ssr: false,
});
const CookieConsent = dynamic(() => import("@/component/common/CookieConsent"), {
  ssr: false,
});

const ClientProviders = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const newsletterTimer = setTimeout(() => setShowNewsletter(true), 3000);
    const cookieTimer = setTimeout(() => setShowCookie(true), 10000);
    return () => {
      clearTimeout(newsletterTimer);
      clearTimeout(cookieTimer);
    };
  }, []);

  return (
    <>
      {showNewsletter && <NewsletterPopup />}
      {showCookie && <CookieConsent />}
    </>
  );
};

export default ClientProviders;