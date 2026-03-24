'use client';
import React from 'react';
import Image from 'next/image';

const about = "/assets/images/about/about.png";
const about2 = "/assets/images/about/about2.png";
const delivery = "/assets/images/about/delivery.png";
const brand1 = "/assets/images/about/mango.png";
const brand2 = "/assets/images/about/zara.png";
const brand3 = "/assets/images/about/reebok.png";
const brand4 = "/assets/images/about/asos.png";
const brand5 = "/assets/images/about/stradi.png";
const brand6 = "/assets/images/about/adi.png";
const brand7 = "/assets/images/about/bershka.png";
const shield = "/assets/images/about/shield.png";
const support = "/assets/images/about/support.png";

const features = [
  { title: "FAST AND FREE DELIVERY", desc: "Free delivery for all orders over $140" },
  { title: "MONEY BACK GUARANTEE", desc: "We return money within 30 days" },
  { title: "EVERY SECURE PAYMENT", desc: "Your payment information is safe" },
];

const brands = [
  { src: brand1, alt: "Mango" },
  { src: brand2, alt: "Zara" },
  { src: brand3, alt: "Reebok" },
  { src: brand4, alt: "ASOS" },
  { src: brand5, alt: "Stradivarius" },
  { src: brand6, alt: "Adidas" },
  { src: brand7, alt: "Bershka" },
];

const About = () => {
  return (
    <section className=" mt-32 lg:mt-38">
      <div className="max-w-352.5 mx-auto">
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-16 xl:mt-[90px] mb-10 sm:mb-12 lg:mb-16 xl:mb-[77px]">

          {/* Page Title */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 xl:ml-[242px] mb-5 sm:mb-6 lg:mb-7 xl:mb-8">
            <h1 className="head_35_bold text-2xl sm:text-3xl lg:text-[30px] xl:text-[35px]">ABOUT UOMO</h1>
          </div>

          {/* Hero Image */}
          <div className="w-full bg-[#d0d0d0] overflow-hidden">
            <img
              src={about}
              alt="About hero"
              className="w-full h-[180px] sm:h-[260px] md:h-[340px] lg:h-[420px] xl:h-auto object-cover"
            />
          </div>

          {/* Our Story */}
          <div className="max-w-[929px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 mt-6 sm:mt-8 lg:mt-10 xl:mt-[50px] mb-5 lg:mb-6 xl:mb-[29px]">
            <h2 className="head_26_medium text-xl sm:text-2xl lg:text-[24px] xl:text-[26px] mb-3 lg:mb-3.5 xl:mb-[15px]">
              OUR STORY
            </h2>
            <p className="texts_16_medium text-sm sm:text-base lg:text-[15px] xl:text-[16px] leading-7 mb-4 lg:mb-5 xl:mb-[20px] tracking-[0%]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="texts_14_regular text-sm leading-7 mb-5 lg:mb-6 xl:mb-[33px]">
              Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 xl:gap-[40px]">
              <div>
                <h3 className="texts_16_medium text-sm sm:text-base leading-[100%] mb-3 lg:mb-3.5 xl:mb-4">Our Mission</h3>
                <p className="texts_14_regular text-sm">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <h3 className="texts_16_medium text-sm sm:text-base leading-[100%] mb-3 lg:mb-3.5 xl:mb-4">Our Vision</h3>
                <p className="texts_14_regular text-sm">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          {/* Mid Section - Image + Company Text */}
          <div className="w-full max-w-[1170px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[45px] items-center mt-6 sm:mt-8 lg:mt-10 xl:mt-0 mb-8 sm:mb-10 lg:mb-16 xl:mb-25">

              {/* Mid Image */}
              <div className="w-full bg-[#d0d0d0] overflow-hidden relative rounded-sm">
                <img
                  src={about2}
                  alt="Fashion"
                  className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[440px] xl:h-full object-cover"
                />
                <div className="absolute top-[60px] left-[calc(50%-100px)] w-0 h-0 border-l-[100px] border-r-[100px] border-b-[170px] border-l-transparent border-r-transparent border-b-[rgba(180,180,180,0.7)]" />
                <div className="absolute w-[160px] h-[160px] rounded-full bg-[rgba(160,160,160,0.6)] top-[90px] left-[calc(50%-50px)]" />
              </div>

              {/* Company Text */}
              <div>
                <h3 className="text-[13px] sm:text-[15px] lg:text-[15px] xl:text-[16px] font-medium tracking-[0%] text-[rgb(118,118,118)] mb-3 lg:mb-3.5 xl:mb-[16px]">
                  THE COMPANY
                </h3>
                <p className="texts_14_regular text-sm leading-7 mb-4 sm:mb-5 lg:mb-7 xl:mb-[40px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras.
                </p>
                <p className="texts_14_regular text-sm leading-7">
                  Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-[144px] items-start mb-8 sm:mb-10 lg:mb-16 xl:mb-25">
              {features.map((feature, i) => ( 
                <div key={i} className="flex items-start gap-3 sm:gap-4 xl:gap-[18px]">
                  <div className="w-[38px] h-[38px] sm:w-[40px] sm:h-[40px] lg:w-[42px] lg:h-[42px] xl:w-[45px] xl:h-[45px] shrink-0 flex items-center justify-center">
                    <img src={delivery} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] text-[#141F46] font-medium tracking-[0%] block mb-[4px]">
                      {feature.title}
                    </p>
                    <span className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] text-[#767676] font-normal tracking-[0%]">
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
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-h-[22px] sm:max-h-[26px] md:max-h-[28px] lg:max-h-[30px] xl:max-h-none w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
