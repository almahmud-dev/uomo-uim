'use client';
import Button from "@/component/common/Button";
import Container from "@/component/common/Container";
import React from "react";
import Link from 'next/link';
import ReactCountdown, { zeroPad } from "react-countdown";

const Countdown = () => {
  return (
    <>
      <section className="lg:mt-25 mt-13">
        <div className="bg-[url('/assets/images/countdownBg.png')] lg:pt-52.25 pt-18.5 pb-9 lg:mx-15 bg-no-repeat bg-cover bg-center">
          <Container>
            <div className="lg:mb-30 mb-6.25">
              <div className="flex items-center gap-3.25">
                <div className="w-10 h-0.5 bg-second-red"></div>
                <p className="texts_14_medium text-second-red">
                  DEAL OF THE WEEK
                </p>
              </div>
              <h2 className="head_70_regular font-medium text-[30px] text-head pt-2.25 pb-2.75 w-44 lg:w-full ">
                <span className="head_70_bold font-bold text-[30px] text-head">Spring</span>{" "}
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
                    <span className="font-jost font-bold lg:text-base text-[14px] text-[#767676] leading-7.5">
                      SEC
                    </span>
                  </div>
                </div>
              )}
            />
            {/* Countdown Part End */}
          </Container>
        </div>
      </section>
    </>
  );
};

export default Countdown;
