'use client';
import React from "react";
import Container from "./Container";
import { footerData } from "@/helper/projectArrayObj";
import allIcons from "@/helper/iconProvider";
import { RiArrowUpSLine } from "react-icons/ri";
import Link from 'next/link';
import { CldImage } from "next-cloudinary";
const Footer = () => {
  const { socialIcons } = allIcons;

  return (
    <footer className="bg-footer ">
      <Container>
        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1  lg:grid-cols-7 lg:gap-x-5 gap-y-12.5 py-12.5 lg:pt-25 lg:pb-22">
          {/* ── COL 1-2 : Brand info ── */}
          <div className="col-span-2  lg:flex-col md:flex md:justify-between md:items-start ">
            {/* Logo */}
            <CldImage
              src="navicon_is7dpu"
              alt="footerlogo"
              width={400}
              height={800}
              className={`h-6.25 w-27.75 object-contain object-left`}
            />

            <div className=" py-7 md:py-0 lg:pt-11 lg:pb-11.75">
              {/* Address */}
              <div>
                <p className="texts_14_regular text-head ">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622
                </p>
                <p className="texts_14_regular text-head  ">United States</p>
              </div>

              <div className="mt-4">
                {/* Contact */}
                <a
                  href="mailto:sale@uomo.com"
                  className="texts_14_medium text-head "
                >
                  sale@uomo.com
                </a>
                <a
                  href="tel:+12463450695"
                  className="texts_14_medium text-head   block  "
                >
                  +1 246-345-0695
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-x-9">
              {socialIcons.map(({ id, icon: Icon, link, name }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="text-second hover:text-head transition-colors duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── COL 3-5 : Nav columns (COMPANY, SHOP, HELP) ── */}
          <div className="col-span-3 grid grid-cols-2 gap-8.5 sm:gap-0 sm:grid-cols-3">
            {footerData.columns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col ">
                {/* Column Title */}
                <h4
                  className="texts_18_medium   text-head  mb-2.5 lg:mb-6.75"
                  style={{ fontWeight: 600, letterSpacing: "0.08em" }}
                >
                  {col.title}
                </h4>

                {/* Links */}
                <ul className="flex flex-col">
                  {col.links.map((item) => (
                    <li key={item.id} className="relative group w-fit">
                      <Link
                        href={item.link}
                        className={`texts_14_regular text-head leading-10!`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── COL 6-7 : Subscribe ── */}
          <div className="col-span-2 flex flex-col">
            {/* Title */}
            <h4
              className="texts_18_medium text-head mb-6.75"
              style={{ fontWeight: 600, letterSpacing: "0.08em" }}
            >
              SUBSCRIBE
            </h4>

            <div className="md:flex md:gap-x-8  lg:block">
              {/* Subtitle */}
              <p className="texts_14_regular text-head  mb-3.75 max-w-67.6">
                Be the first to get the latest news about trends, promotions,
                and much more!
              </p>

              {/* Email Input */}
              <div className="flex items-stretch border border-[#CFCDCD] bg-white mb-10.25">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5.25 pt-4.25 pb-3.5 texts_14_regular text-head placeholder:text-second bg-transparent"
                />

                <button
                  className="pr-3  texts_13_regular text-head  border-[#CFCDCD] cursor-pointer"
                  style={{ fontWeight: 600, letterSpacing: "0.08em" }}
                >
                  {" "}
                  JOIN
                </button>
              </div>
            </div>

            {/* Secure Payments */}
            <p
              className="texts_14_regular text-head mb-2.75"
              style={{ fontWeight: 500 }}
            >
              Secure payments
            </p>
            <CldImage
              src="footer-payment_azt5oh"
              alt="Payment methods"
              width={500}
              height={800}
              className="h-auto w-auto max-w-full object-contain object-left cursor-pointer"
            />
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className=" sm:flex  space-y-4    sm:space-y-0 sm:items-center sm:justify-between py-[28px] md:pt-[34px] lg:pb-[28px]  border-t border-[#CFCDCD]">
          {/* Copyright */}
          <p className="texts_13_regular text-head">©2020 Uomo</p>

          {/* Language & Currency */}
          <div className="sm:flex sm:items-center  space-y-4 sm:space-y-0 gap-[48px]">
            {/* Language */}
            <div className="flex items-center gap-[10px]">
              <span className="texts_13_regular text-second">Language</span>
              <button className="flex items-center gap-[4px] texts_13_regular text-head hover:text-second transition-colors duration-200">
                United Kingdom | English
                <RiArrowUpSLine size={15} />
              </button>
            </div>

            {/* Currency */}
            <div className="flex items-center gap-[10px]">
              <span className="texts_13_regular text-second">Currency</span>
              <button className="flex items-center gap-[4px] texts_13_regular text-head hover:text-second transition-colors duration-200">
                $ USD
                <RiArrowUpSLine size={15} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
