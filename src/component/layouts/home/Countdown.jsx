"use client";
import Button from "@/component/common/Button";
import Container from "@/component/common/Container";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { zeroPad } from "react-countdown";

const ReactCountdown = dynamic(() => import("react-countdown"), { ssr: false });
const coundown = "/assets/images/countdown.png";

const Countdown = () => {
  return (
    <>
      <section className="bg-[#EBEBEB] lg:mt-25 mt-13">
        <div
          className="pt-10 lg:mx-15
          bg-no-repeat bg-cover bg-center"
        >
          <Container>
            {/* Main div */}
            <div className="flex items-center gap:20 lg:gap-50.5 h-full">

              {/* Text Div — max-w-[699px] */}
              <div className="max-w-174.75 w-full">
                <div className="pb-6.25 lg:pb-29.75">
                  <div className="flex items-center gap-3.25">
                    <div className="w-10 h-0.5 bg-second-red"></div>
                    <p className="texts_14_medium text-second-red">
                      DEAL OF THE WEEK
                    </p>
                  </div>
                  <h2 className="head_70_regular font-medium text-head pt-2.25 pb-2.75  uppercase">
                    <span className="head_70_bold font-bold text-head">
                      Spring
                    </span>{" "}
                    Collection
                  </h2>
                  <Link href={"/shop"}>
                    <Button className={"hover:after:w-12.5"} btnText={"SHOP NOW"} />
                  </Link>
                </div>

                {/* Countdown Part Start */}
                <ReactCountdown
                  date={new Date("2027-03-30T00:00:00")}
                  renderer={({ days, hours, minutes, seconds }) => (
                    <div className="flex gap-5">
                      <div>
                        <p className="font-jost font-normal lg:text-[30px] text-[18px] text-head leading-7.5">
                          {zeroPad(days)}
                        </p>
                        <span className="font-jost font-bold lg:text-base text-[14px] text-second leading-7.5">
                          DAYS
                        </span>
                      </div>
                      <div>
                        <span className="font-jost font-normal lg:text-[30px] text-[18px] text-head leading-7.5">
                          :
                        </span>
                      </div>
                      <div>
                        <p className="font-jost font-normal lg:text-[30px] text-[18px] text-head leading-7.5">
                          {zeroPad(hours)}
                        </p>
                        <span className="font-jost font-bold lg:text-base text-[14px] text-second leading-7.5">
                          HOURS
                        </span>
                      </div>
                      <div>
                        <span className="font-jost font-normal lg:text-[30px] text-[18px] text-head leading-7.5">
                          :
                        </span>
                      </div>
                      <div>
                        <p className="font-jost font-normal lg:text-[30px] text-[18px] text-head leading-7.5">
                          {zeroPad(minutes)}
                        </p>
                        <span className="font-jost font-bold lg:text-base text-[14px] text-second leading-7.5">
                          MINS
                        </span>
                      </div>
                      <div>
                        <span className="font-jost font-normal text-[30px] text-head leading-7.5">
                          :
                        </span>
                      </div>
                      <div>
                        <p className="font-jost font-normal lg:text-[30px] text-[18px] text-head leading-7.5">
                          {zeroPad(seconds)}
                        </p>
                        <span className="font-jost font-bold lg:text-base text-[14px] text-second leading-7.5">
                          SEC
                        </span>
                      </div>
                    </div>
                  )}
                />
                {/* Countdown Part End */}
              </div>

              {/* Image Div — w-[426px] */}
              <div className="hidden md:block w-106.5 min-w-106.5 h-full">
                <img
                  src={coundown}
                  alt="Spring Collection"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Countdown;