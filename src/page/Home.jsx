'use client';
import dynamic from "next/dynamic";
import Banner from "@/component/layouts/home/Banner";
import Collection from "@/component/layouts/home/Collection";
import Products from "@/component/layouts/home/Products";
import Countdown from "@/component/layouts/home/Countdown";
import Feature from "@/component/layouts/home/Feature";
import LimitedEdition from "@/component/layouts/home/LimitedEdition";
import Uomo from "@/component/layouts/home/Uomo";
import Support from "@/component/layouts/home/Support";
import React, { useEffect, useState } from "react";

const NewsletterPopup = dynamic(() => import("@/component/common/Newsletterpopup"), {
  ssr: false,
});
const CookieConsent = dynamic(() => import("@/component/common/CookieConsent"), {
  ssr: false,
});

const Home = () => {
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
      <Banner />
      <Collection />
      <Products />
      <Countdown />
      <Feature />
      <LimitedEdition />
      <Uomo />
      <Support />
    </>
  );
};

export default Home;
