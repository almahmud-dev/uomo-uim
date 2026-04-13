"use client";
import React from "react";
import Container from "../common/Container";
import { IoSearchOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Store_location = () => {
  return (
    <div className="mt-20 lg:my-[96px] pt-[55px]">
      <Container>
        <h3 className="text-2xl font-bold lg:head_35_bold text-head uppercase">
          Store Locator
        </h3>
        <div className="mt-3 lg:mt-12.5 flex flex-col  xl:flex-row lg:px-0 lg:gap-x-2.5">
          <div className="">
            <div className="lg:w-[468px] pb-8.25 border-b border-[#E4E4E4]">
              <div className="p-5 border border-[#E4E4E4] flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Enter your country or city"
                  className="texts_14_regular text-second w-full lg:w-117"
                />
                <IoSearchOutline />
              </div>
              <h5 className="texts_18_medium text-head pt-7.5">
                Store in London
              </h5>
              <p className="texts_14_regular text-head pt-2.75">
                1418 River Drive, Suite 35 Cottonhall, CA 9622
              </p>
              <p className="texts_14_regular text-head">United States</p>
              <p className="texts_14_regular text-head">+1 246-345-0695</p>
              <p className="texts_14_regular text-head">
                10 am - 10 pm EST, 7 days a week
              </p>
              <h5 className="text-[13px] font-medium text-head uppercase pt-5 relative after:absolute after:bottom-0 after:left-0 after:contant-[''] after:bg-head after:w-17 after:h-0.5 hover:after:w-25.75 duration-300">
                SEE ON THE MAP
              </h5>
            </div>
            <div className="lg:w-[468px] pb-8.25 border-b border-[#E4E4E4]">
              <h5 className="texts_18_medium text-head pt-7.5">
                Store in Istanbul
              </h5>
              <p className="texts_14_regular text-head pt-2.75">
                1418 River Drive, Suite 35 Cottonhall, CA 9622
              </p>
              <p className="texts_14_regular text-head">United States</p>
              <p className="texts_14_regular text-head">+1 246-345-0695</p>
              <p className="texts_14_regular text-head">
                10 am - 10 pm EST, 7 days a week
              </p>
              <h5 className="text-[13px] font-medium text-head uppercase pt-5 relative after:absolute after:bottom-0 after:left-0 after:contant-[''] after:bg-head after:w-[68px] after:h-[2px] hover:after:w-[103px] duration-300">
                SEE ON THE MAP
              </h5>
            </div>
            <div className="w-full lg:w-[468px]">
              <h5 className="texts_18_medium text-head pt-7.5">
                Store in New York
              </h5>
              <p className="texts_14_regular text-head pt-2.75">
                1418 River Drive, Suite 35 Cottonhall, CA 9622
              </p>
              <p className="texts_14_regular text-head">United States</p>
              <p className="texts_14_regular text-head">+1 246-345-0695</p>
              <p className="texts_14_regular text-head">
                10 am - 10 pm EST, 7 days a week
              </p>
              <h5 className="text-[13px] font-medium text-head uppercase pt-5 relative after:absolute after:bottom-0 after:left-0 after:contant-[''] after:bg-head after:w-[68px] after:h-[2px] hover:after:w-[103px] duration-300">
                SEE ON THE MAP
              </h5>
            </div>
          </div>
          <div className="relative mt-8 xl:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3652.1434556075847!2d90.38051569046019!3d23.742263248988838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1773303535456!5m2!1sen!2sbd"
              className="lg:w-[930px] w-full lg:h-[752px] h-[300px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div
              className=" mt-4 
              md:absolute md:mt-0   
              md:top-1/2 md:left-[50px] lg:left-[166px] 
              md:-translate-y-1/2 
              w-full md:w-[400px]    
              py-[27px] px-[31px] 
              bg-white 
              shadow-[0_0_25px_0_rgba(34,34,34,0.05)] 
              rounded-sm
              z-10"
            >
              <h5 className="texts_18_medium text-head flex  justify-between">
                Store in Istanbul <IoClose />
              </h5>
              <p className="texts_14_regular text-head pt-2.75">
                1418 River Drive, Suite 35 Cottonhall, CA 9622
              </p>
              <p className="texts_14_regular text-head">United States</p>
              <p className="texts_14_regular text-head">+1 246-345-0695</p>
              <p className="texts_14_regular text-head">
                10 am - 10 pm EST, 7 days a week
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Store_location;
