'use client';
import allIcons from "@/helper/iconProvider";
import allImages from "@/helper/imagesProvider";

import Link from 'next/link';
import React, { useEffect, useRef, useState } from "react";
import { navTabsData } from "@/helper/projectArrayObj";
import Images from "../common/Images";

const NavTabs = ({ unMount }) => {
  const { close } = allIcons;
  const { navtabImg } = allImages;
  const [activeTab, setActiveTab] = useState(0);
  const navtabRef = useRef(null);

  const currentData = navTabsData[activeTab];

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (navtabRef.current && !navtabRef.current.contains(event.target)) {
        unMount(null);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [unMount]);

  return (
    <div className="fixed inset-0 z-999 flex">
      {/* Left — image */}
      <div className="w-[50%]">
        <Images
          imgSrc={navtabImg}
          imgAlt="nav tab"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right — menu */}
      <div ref={navtabRef} className="w-[50%] bg-white flex flex-col relative">
        {/* Close — top right of entire screen */}
        <div className="absolute top-6 right-8">
          <span
            className="text-2xl cursor-pointer text-head "
            onClick={() => unMount(null)}
          >
            {close}
          </span>
        </div>

        {/* Tabs — WOMEN / MEN / KIDS */}
        <div className="flex gap-x-6.5 px-14 pt-6 mb-10">
          {navTabsData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`texts_14_medium tracking-wider px-5 py-2 transition-all duration-200  rounded-lg ${
                activeTab === index
                  ? "bg-head text-white"
                  : "text-head hover:bg-secondbg"
              }`}
            >
              {item.tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex gap-x-40 px-14 overflow-y-auto">
          {/* Categories */}
          <ul className="flex flex-col   min-w-55">
            {currentData.categories.map((cat) => (
              <li key={cat.id} className="relative">
                <Link
                  href={cat.link}
                  className={`text-xl/[56px]  font-medium text-head hover:opacity-60 transition-opacity ${
                    cat.isRed ? "text-red" : "text-head"
                  }`}
                >
                  {cat.name}
                </Link>
                {/* Active underline — long line */}
                {cat.isActive && (
                  <span className="absolute top-1/2 translate-[-50%] left-full w-[80%] h-0.5 bg-head" />
                )}
              </li>
            ))}
          </ul>

          {/* Sub Links */}
          <ul className="flex flex-col gap-y-4 mt-4.25">
            {currentData.subLinks.map((sub) => (
              <li key={sub.id}>
                <Link
                  href={sub.link}
                  className="texts_14_regular text-head relative  after:absolute after:content-[''] after:w-[0%] after:h-0.5 after:bg-head after:-bottom-1.25 after:left-0 hover:after:w-[60%]  after:duration-500 after:ease-in-out"
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavTabs;
