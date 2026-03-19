'use client';
import allImages from "@/helper/imagesProvider";
import { useState } from "react";
import Images from "./Images";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");

  const { rithik } = allImages;

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setIsOpen(false);
  };

  return (
   <div className="lg:block hidden">
     <div className="  fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-3 sm:px-6 md:px-8">
      <div className="relative flex flex-col md:flex-row w-full max-w-[calc(100vw-24px)] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[860px] xl:max-w-[900px] shadow-2xl">

        {/* Left — image panel */}
        <div className="hidden md:flex relative md:w-[260px] lg:w-[340px] xl:w-[400px] shrink-0 overflow-hidden md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px]">
          <Images
            imgSrc={rithik}
            imgAlt="newsletter"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right — content panel */}
        <div className="relative flex flex-col justify-center bg-white w-full flex-1
          px-5 py-10
          sm:px-8 sm:py-12
          md:px-8 md:py-10
          lg:px-10 lg:py-12
          xl:px-12 xl:py-14"
        >

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center text-head hover:opacity-50 transition-opacity"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Heading */}
          <h2 className="head_26_medium text-head">
            Sign Up to Our Newsletter
          </h2>

          {/* Description */}
          <p className="texts_14_regular text-second my-3 sm:my-4">
            Be the first to get the latest news about trends, promotions,
            and much more!
          </p>

          {/* Email form */}
          <div className="flex items-stretch border border-footer">
            <form onSubmit={handleSubmit} className="flex items-stretch w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 min-w-0 px-3 sm:px-4 py-3 sm:py-3.5 texts_14_regular text-head placeholder:text-second bg-transparent outline-none"
              />
              <button
                type="submit"
                className="px-3 sm:px-5 py-3 sm:py-3.5 text-head texts_13_regular tracking-widest hover:opacity-80 transition-opacity shrink-0 cursor-pointer"
              >
                JOIN
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
   </div>
  );
}