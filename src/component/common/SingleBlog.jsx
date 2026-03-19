'use client';
import React from "react";
import Container from "./Container";
import Images from "./Images";
const blogImg = "/assets/images/singleBlog.png";
const insideblogImg = "/assets/images/insideBlog.png";
import Link from 'next/link';
import { FiChevronLeft } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import Button from "./Button";

const SingleBlog = () => {
  return (
    <>
      <div className=" mt-[85px] py-[60px]  lg:pt-[85px] lg:pb-[110px]">
        <Container>
          <div className="lg:pl-60">
            <h2 className="head_35_bold text-head">
              5 Tips to Increase Your Online Sales
            </h2>
            <div className="flex gap-5 mb-8 lg:mb-10.75">
              <p className="texts_14_regular text-second">BY ADMIN</p>
              <p className="texts_14_regular text-second">APRIL 05, 2020</p>
              <p className="texts_14_regular text-second">TRENDS</p>
            </div>
          </div>
          <div className=" mb-6 lg:mb-12.5 h-[200px] w-full sm:h-full bg-red">
            <Images className={"object-cover h-full w-full"} imgSrc={blogImg} />
          </div>
          <div className="lg:pl-60">
            <p className="max-w-232.5 texts_14_regular text-head pb-15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
              massa est viverra interdum. Praesent auctor nulla morbi non
              posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt
              leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit
              sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit
              posuere lobortis consequat faucibus aliquam metus. Ornare
              consequat, vulputate sit maecenas mauris urna sed fringilla. Urna
              fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus.
              Facilisis quis vulputate sem gravida lacus, justo placerat.
            </p>
            <h5 className="texts_16_medium text-head">
              Sed do eiusmod tempor incididunt ut labore
            </h5>
            <p className="texts_14_regular text-head max-w-289.5">
              Saw wherein fruitful good days image them, midst, waters upon,
              saw. Seas lights seasons. Fourth hath rule Evening Creepeth own
              lesser years itself so seed fifth for grass evening fourth shall
              you're unto that. Had. Female replenish for yielding so saw all
              one to yielding grass you'll air sea it, open waters subdue, hath.
              Brought second Made. Be. Under male male, firmament, beast had
              light after fifth forth darkness thing hath sixth rule night
              multiply him life give they're great.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8.5">
              <div>
                <h3 className="texts_16_medium text-head mb-4">
                  Why choose product?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0"></span>
                    Creat by cotton fibric with soft and smooth
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0"></span>
                    Simple, Configurable (e.g. size, color, etc.), bundled
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0"></span>
                    Downloadable/Digital Products, Virtual Products
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="texts_16_medium text-head mb-4">
                  Sample Number List
                </h3>
                <ol className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="shrink-0 font-medium text-gray-600">
                      1
                    </span>
                    Create Store-specific attritbutes on the fly
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="shrink-0 font-medium text-gray-600">
                      2
                    </span>
                    Simple, Configurable (e.g. size, color, etc.), bundled
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="shrink-0 font-medium text-gray-600">
                      3
                    </span>
                    Downloadable/Digital Products, Virtual Products
                  </li>
                </ol>
              </div>
            </div>

            <p className="texts_14_regular text-head max-w-232.5 mb-7.5">
              She'd years darkness days. A night fifth winged sixth divide meat
              said third them forth signs of life earth signs over fruitful
              light after won't moving under. Thing yielding upon seed. Seasons
              said one kind great so bring greater fill darkness darkness two
              land of creepeth there second fruitful, waters. Make don't void
              years Gathering gathering divide fill.
            </p>
          </div>
          <div className="flex lg:px-30 gap-5 lg:gap-7.75 mb-8 lg:mb-[50px]">
            <div className="bg-red  min-h-[200px]">
              <Images
                imgSrc={insideblogImg}
                className={"h-full w-full object-cover"}
              />
            </div>
            <div className="bg-red  min-h-[200px]">
              <Images
                imgSrc={insideblogImg}
                className={"h-full w-full object-cover"}
              />
            </div>
          </div>
          <div className="lg:pl-60">
            <p className="texts_14_regular text-head max-w-232.5 mb-8 lg:mb-15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
              massa est viverra interdum. Praesent auctor nulla morbi non
              posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt
              leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit
              sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit
              posuere lobortis consequat faucibus aliquam metus. Ornare
              consequat, vulputate sit maecenas mauris urna sed fringilla. Urna
              fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus.
              Facilisis quis vulputate sem gravida lacus, justo placerat.
            </p>
            <p className="texts_14_regular text-head max-w-232.5 mb-12.5">
              She'd years darkness days. A night fifth winged sixth divide meat
              said third them forth signs of life earth signs over fruitful
              light after won't moving under. Thing yielding upon seed. Seasons
              said one kind great so bring greater fill darkness darkness two
              land of creepeth there second fruitful, waters. Make don't void
              years Gathering gathering divide fill.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5  lg:justify-center">
            <Link href={"/"}>
              {" "}
              <div className=" w-[220px] lg:w-auto pt-3.5 pb-3 pl-14.5 pr-12 bg-[#306199] inline-block cursor-pointer">
                <p className="texts_14_regular text-white ">
                  Share on Facebook
                </p>
              </div>
            </Link>
            <Link href={"/"}>
              {" "}
              <div className=" w-[220px] lg:w-auto pt-3.5 pb-3 pl-14.5 pr-12 bg-[#26C4F1] inline-block cursor-pointer">
                <p className="texts_14_regular text-white ">Share on Twitter</p>
              </div>
            </Link>
            <Link href={"/"}>
              {" "}
              <div className=" w-[220px] lg:w-auto pt-3.5 pb-3 pl-14.5 pr-12 bg-[#E82B2D] inline-block cursor-pointer">
                <p className="texts_14_regular text-white ">
                  Share on Pinterest
                </p>
              </div>
            </Link>
            <Link href={"/"}>
              {" "}
              <div className="  pt-3.5 pb-3 px-4.75 bg-head inline-block cursor-pointer">
                <p className="texts_14_regular text-white ">+</p>
              </div>
            </Link>
          </div>
          <div className="max-w-232.5 mx-auto px-4 mt-12.5">
            <div className=" flex  justify-between gap-2 lg:gap-0 items-start border-t border-b border-[#E4E4E4] pt-11.25 pb-10.5 mb-12.5">
              <div class="">
                <div className="flex items-center gap-1">
                  <FiChevronLeft />
                  <p class="texts_14_medium text-second ">PREVIOUS POST</p>
                </div>
                <p class="texts_14_regular text-head">
                  Given Set was without from god divide rule Hath
                </p>
              </div>
              <div class="">
                <div className="flex items-center gap-1 justify-end">
                  <FiChevronLeft />
                  <p class="texts_14_medium text-second ">PREVIOUS POST</p>
                </div>
                <p class="texts_14_regular text-head">
                  Tree earth fowl given moveth deep lesser After
                </p>
              </div>
            </div>

            <h2 className="texts_18_medium text-head mb-6.5">Reviews</h2>

            <div className="flex gap-7.5 mb-7.5 pb-6 border-b border-[#E4E4E4]   max-w-232.5">
              <div class="w-15 h-15 rounded-full bg-[#E4E4E4] shrink-0"></div>
              <div class="flex-1">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="texts_14_regular text-head">Janice Miller</p>
                    <p class="texts_14_regular text-second">April 06, 2020</p>
                  </div>
                  <div class="flex gap-1.25 text-[#EEBA36]">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                  </div>
                </div>
                <p class="texts_14_regular text-second max-w-210 mt-5 ">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est...
                </p>
              </div>
            </div>

            <div className="flex gap-7.5 mb-8 lg:mb-13.5 pb-6">
              <div className="w-15 h-15 rounded-full bg-[#E4E4E4] shrink-0"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="texts_14_regular text-head">Janice Miller</p>
                    <p className="texts_14_regular text-second">
                      April 06, 2020
                    </p>
                  </div>
                  <div className="flex gap-1.25 text-[#EEBA36]">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                  </div>
                </div>
                <p className="texts_14_regular text-second max-w-210 mt-5 ">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est...
                </p>
              </div>
            </div>

            <div>
              <h3 className="texts_18_medium text-head mb-1">
                Be the first to review "Message Cotton T-Shirt"
              </h3>
              <p className="texts_14_regular text-head mb-7.5">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <div className="flex items-center gap-4.5 mb-4">
                <label className="texts_14_regular text-head">
                  Your rating *
                </label>
                <div className="flex gap-1.25 text-[#EEBA36]">
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                </div>
              </div>

              <div className="space-y-7.5">
                <div className="textarea-container w-full">
                  <textarea
                    id="message"
                    placeholder=" "
                    className="textarea"
                  ></textarea>
                  <label htmlFor="message" className="textarea-label">
                    ADD REVIEW
                  </label>
                </div>

                <div className="input-container w-full">
                  <input type="text" id="" placeholder=" " className="input" />
                  <label className="label">Name *</label>
                </div>

                <div className="input-container w-full">
                  <input type="text" id="" placeholder=" " className="input" />
                  <label className="label">Email address * </label>
                </div>
              </div>
              <div className="flex items-center gap-2.75 mt-7.5">
                <input className="text-second" type="checkbox" />
                <p className="texts_14_regular text-second">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </p>
              </div>
              <Button
                className={
                  "pt-5.5 pb-3.5 pl-18.5 pr-19.25 texts_14_medium bg-head text-white mt-7.75"
                }
                btnText={"SUBMIT"}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SingleBlog;
