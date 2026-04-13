"use client";
import allImages from "@/helper/imagesProvider";
import React, { useEffect, useState } from "react";

const ComingSoon = () => {
  const { notFoundPage } = allImages;

  const [timeLeft, setTimeLeft] = useState({
    days: "05",
    hours: "07",
    mins: "09",
    secs: "03",
  });
  const [email, setEmail] = useState("");

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 5);
    target.setHours(target.getHours() + 7);
    target.setMinutes(target.getMinutes() + 9);
    target.setSeconds(target.getSeconds() + 3);
    const pad = (n) => String(Math.floor(n)).padStart(2, "0");
    const interval = setInterval(() => {
      const diff = target - new Date();
      if (diff <= 0) return clearInterval(interval);
      setTimeLeft({
        days: pad(diff / 86400000),
        hours: pad((diff % 86400000) / 3600000),
        mins: pad((diff % 3600000) / 60000),
        secs: pad((diff % 60000) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: `url(${notFoundPage})` }}
    >
      <div className="flex flex-col  items-center justify-center w-full max-w-[771px] mx-auto">
        <h1 className="head_70_bold lg:!text-[100px] text-head text-center">
          COMING SOON
        </h1>

        <p className="texts_14_regular text-head text-center mt-5 pb-[clamp(24px,4vw,45px)] max-w-[505px] px-2">
          Sorry, we couldn't find the page you where looking for. We suggest
          that you return to home page.
        </p>

        {/* Countdown */}
        <div className="flex items-start mb-[clamp(28px,4vw,49px)] gap-x-[clamp(4px,2vw,8px)]">
          <TimeBlock value={timeLeft.days} label="Days" />
          <Colon />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <Colon />
          <TimeBlock value={timeLeft.mins} label="Mins" />
          <Colon />
          <TimeBlock value={timeLeft.secs} label="Sec" />
        </div>

        {/* Email Row */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-x-5 items-stretch sm:items-center w-full px-2 sm:px-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 p-[clamp(12px,2vw,18px)] w-full border border-footer rounded texts_14_regular text-second placeholder:text-second bg-white"
          />
          <button className="bg-head rounded py-[clamp(12px,2vw,20px)] px-[clamp(24px,4vw,61px)] text-white texts_13_regular font-semibold tracking-[1.5px] uppercase hover:bg-[#d6001c] transition-colors duration-200 flex-shrink-0 cursor-pointer w-full sm:w-auto">
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
};

const TimeBlock = ({ value, label }) => (
  <div className="flex flex-col items-center min-w-[clamp(48px,10vw,72px)]">
    <span className="head_26_regular text-head">{value}</span>

    <span className="texts_13_regular text-second uppercase mt-[6px]">
      {label}
    </span>
  </div>
);

const Colon = () => <span className="head_26_regular text-head">:</span>;

export default ComingSoon;
