"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

const features = [
  {
    icon: "delivery_dm6pdq",
    title: "FAST AND FREE DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: "shield_fjfoco",
    title: "24/7 CUSTOMER SUPPORT",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: "support_sjgchb",
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];

const brands = [
  { src: "mango_dqndgm", alt: "Mango" },
  { src: "zara_quczmy", alt: "Zara" },
  { src: "reebok_xn5avh", alt: "Reebok" },
  { src: "asos_fe4gia", alt: "ASOS" },
  { src: "stradi_ksbemh", alt: "Stradivarius" },
  { src: "adi_ipsxxm", alt: "Adidas" },
  { src: "bershka_lg31ie", alt: "Bershka" },
];

const About = () => {
  return (
    <section className="mt-21.25 lg:mt-38">
      <div className="max-w-352.5 mx-auto">
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-16 xl:mt-22.5 mb-10 sm:mb-12 lg:mb-16 xl:mb-19.25">
          {/* Page Title */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 xl:ml-60.5 mb-5 sm:mb-6 lg:mb-7 xl:mb-8">
            <h1 className="head_35_bold text-2xl sm:text-3xl lg:text-[30px] xl:text-[35px]">
              ABOUT UOMO
            </h1>
          </div>

          {/* Hero Image */}
          <div className="w-full bg-[#d0d0d0] overflow-hidden">
            <CldImage
              src="about_skh2fp"
              alt="About hero"
              width={1400}
              height={600}
              quality="auto"
              format="auto"
              className="w-full h-45 sm:h-65 md:h-85 lg:h-105 xl:h-auto object-cover"
            />
          </div>

          {/* Our Story */}
          <div className="max-w-132.25 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 mt-6 sm:mt-8 lg:mt-10 xl:mt-12.5 mb-5 lg:mb-6 xl:mb-7.25">
            <h2 className="head_26_medium text-xl sm:text-2xl lg:text-[24px] xl:text-[26px] mb-3 lg:mb-3.5 xl:mb-3.75">
              OUR STORY
            </h2>
            <p className="texts_16_medium text-sm sm:text-base lg:text-[15px] xl:text-[16px] leading-7 mb-4 lg:mb-5 xl:mb-5 tracking-[0%]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="texts_14_regular text-sm leading-7 mb-5 lg:mb-6 xl:mb-8.25">
              Saw wherein fruitful good days image them, midst, waters upon,
              saw. Seas lights seasons. Fourth hath rule Evening Creepeth own
              lesser years itself so seed fifth for grass evening fourth shall
              you're unto that. Had. Female replenish for yielding so saw all
              one to yielding grass you'll air sea it, open waters subdue, hath.
              Brought second Made. Be. Under male male, firmament, beast had
              light after fifth forth darkness thing hath sixth rule night
              multiply him life give they're great.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 xl:gap-10">
              <div>
                <h3 className="texts_16_medium text-sm sm:text-base leading-[100%] mb-3 lg:mb-3.5 xl:mb-4">
                  Our Mission
                </h3>
                <p className="texts_14_regular text-sm">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
              <div>
                <h3 className="texts_16_medium text-sm sm:text-base leading-[100%] mb-3 lg:mb-3.5 xl:mb-4">
                  Our Vision
                </h3>
                <p className="texts_14_regular text-sm">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          {/* Mid Section - Image + Company Text */}
          <div className="w-full max-w-292.5 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-11.25 items-center mt-6 sm:mt-8 lg:mt-10 xl:mt-0 mb-8 sm:mb-10 lg:mb-16 xl:mb-25">
              {/* Mid Image */}
              <div className="w-full bg-[#d0d0d0] overflow-hidden relative rounded-sm">
                <CldImage
                  src="about2_zpajna"
                  alt="Fashion"
                  width={600}
                  height={700}
                  quality="auto"
                  format="auto"
                  className="w-full h-55 sm:h-75 md:h-95 lg:h-110 xl:h-full object-cover"
                />
                <div className="absolute top-15 left-[calc(50%-100px)] w-0 h-0 border-l-100 border-r-100 border-b-170 border-l-transparent border-r-transparent border-b-[rgba(180,180,180,0.7)]" />
                <div className="absolute w-40 h-40 rounded-full bg-[rgba(160,160,160,0.6)] top-22.5 left-[calc(50%-50px)]" />
              </div>

              {/* Company Text */}
              <div>
                <h3 className="text-[13px] sm:text-[15px] lg:text-[15px] xl:text-[16px] font-medium tracking-[0%] text-[rgb(118,118,118)] mb-3 lg:mb-3.5 xl:mb-4">
                  THE COMPANY
                </h3>
                <p className="texts_14_regular text-sm leading-7 mb-4 sm:mb-5 lg:mb-7 xl:mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  sapien dignissim a elementum. Sociis metus, hendrerit mauris
                  id in. Quis sit sit ultrices tincidunt euismod luctus diam.
                  Turpis sodales orci etiam phasellus lacus id leo. Amet turpis
                  nunc, nulla massa est viverra interdum. Praesent auctor nulla
                  morbi non posuere mattis. Arcu eu id maecenas cras.
                </p>
                <p className="texts_14_regular text-sm leading-7">
                  Nibh euismod donec elit posuere lobortis consequat faucibus
                  aliquam metus. Ornare consequat, vulputate sit maecenas mauris
                  urna sed fringilla. Urna fermentum iaculis pharetra, maecenas
                  dui nullam nullam rhoncus.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8 sm:gap-6 lg:gap-10 xl:gap-36 items-start mb-8 sm:mb-10 lg:mb-16 xl:mb-25">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4 xl:gap-4.5">
                  <div className="w-9.5 h-9.5 sm:w-10 sm:h-10 lg:w-10.5 lg:h-10.5 xl:w-11.25 xl:h-11.25 shrink-0 flex items-center justify-center">
                    <CldImage
                      src={feature.icon}
                      alt=""
                      width={45}
                      height={45}
                      quality="auto"
                      format="auto"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] text-[#141F46] font-medium tracking-[0%] block mb-1">
                      {feature.title}
                    </p>
                    <span className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] text-second font-normal tracking-[0%]">
                      {feature.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Logos */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 grid grid-cols-4 sm:grid-cols-7 gap-4 sm:gap-3 md:gap-5 lg:gap-6 xl:gap-0 xl:flex xl:items-center xl:justify-between">
            {brands.map((brand, i) => (
              <div key={i} className="flex items-center justify-center">
                <CldImage
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={40}
                  quality="auto"
                  format="auto"
                  className="max-h-5.5 sm:max-h-6.5 md:max-h-7 lg:max-h-7.5 xl:max-h-none w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;