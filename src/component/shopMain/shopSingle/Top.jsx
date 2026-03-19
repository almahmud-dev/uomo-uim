'use client';
import Container from "@/component/common/Container";
import Images from "@/component/common/Images";
const sssOne = "/assets/images/sssOne.png";
const ssd = "/assets/images/ssd.png";
const zoomIcon = "/assets/images/zoomIcon.png";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { BsShare } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useState } from "react";

const Top = () => {
  let [count, setCount] = useState(3);
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handlePlus = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <div className="mt-[74px] mb-6  lg:mt-12.5 lg:mb-25">
      <Container>
        <div className="flex flex-col xl:flex-row gap-y-8 xl:gap-x-15">
          {/* Left Side: Images */}
          <div className="flex flex-col-reverse xl:flex-row gap-2.5 ">
            <div className="flex xl:flex-col gap-2.5 overflow-x-auto lg:overflow-visible ">
              <div className="min-w-[80px] xl:w-auto">
                <Images imgSrc={sssOne} />
              </div>
              <div className="min-w-[80px] xl:w-auto">
                <Images imgSrc={sssOne} />
              </div>
              <div className="min-w-[80px] xl:w-auto">
                <Images imgSrc={sssOne} />
              </div>
              <div className="min-w-[80px] xl:w-auto">
                <Images imgSrc={sssOne} />
              </div>
            </div>

            {/* Main Slider */}
            <div className="w-full xl:w-[570px] relative group">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".button-next-custom",
                  prevEl: ".button-prev-custom",
                }}
                spaceBetween={10}
                slidesPerView={1}
                className="w-full h-auto"
              >
                {[1, 2, 3].map((_, index) => (
                  <SwiperSlide
                    key={index}
                    className="relative flex justify-center items-center bg-[#F5F5F5]"
                  >
                    <Images
                      imgSrc={ssd}
                      className="w-full h-auto object-contain"
                    />
                    <Images
                      imgSrc={zoomIcon}
                      className="absolute bottom-4 right-4 lg:bottom-7.5 lg:right-7.5 h-6 w-6 cursor-pointer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Slider Arrows */}
              <div className="button-prev-custom absolute left-2 xl:left-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 p-2 xl:p-4 rounded-full shadow-sm">
                <GrFormPrevious size={20} />
              </div>
              <div className="button-next-custom absolute right-2 xl:right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 p-2 xl:p-4 rounded-full shadow-sm">
                <MdNavigateNext size={20} />
              </div>
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="text-start px-4 md:px-20 lg:px-0">
            <div className="hidden xl:flex justify-between items-center mb-10">
              <h4 className="texts_14_medium text-head">HOME / THE SHOP</h4>
              <div className="flex gap-x-6">
                <button className="flex items-center gap-x-1 texts_14_medium cursor-pointer text-head">
                  <GrFormPrevious /> PREV
                </button>
                <button className="flex items-center gap-x-1 texts_14_medium cursor-pointer text-head">
                  NEXT <MdNavigateNext />
                </button>
              </div>
            </div>

            <h3 className="text-xl xl:head_26_regular font-normal text-head">
              Lightweight Puffer Jacket With a Hood
            </h3>
            <h4 className="text-[22px] font-medium text-head mt-2">$449</h4>

            <p className="texts_14_regular text-head max-w-125 leading-6 pt-4 lg:pt-6.25">
              Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
              elementum gravida nec dui. Aenean aliquam varius ipsum, non
              ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
              aliquet magna posuere eget.
            </p>

            {/* Buttons Container */}
            <div className="flex items-center gap-x-2.5 lg:gap-x-5 my-6 lg:my-8">
              {/* Quantity Selector */}
              <div className="w-[100px] lg:w-[125px] h-12 lg:h-[60px] border border-[#e4e4e4] flex items-center justify-between px-3 lg:px-5 shrink-0">
                <button
                  onClick={handleMinus}
                  className="cursor-pointer text-xl text-[#767676] hover:text-black transition-colors"
                >
                  -
                </button>
                <span className="text-head font-medium">{count}</span>
                <button
                  onClick={handlePlus}
                  className="cursor-pointer text-xl text-[#767676] hover:text-black transition-colors"
                >
                  +
                </button>
              </div>
              <button className="h-12  lg:w-[280px] lg:h-[60px] bg-head text-white text-[12px] lg:texts_14_medium  tracking-widest cursor-pointer uppercase px-10 lg:px-0">
                ADD TO CART
              </button>
            </div>

            {/* Wishlist & Share */}
            <div className="flex gap-x-8 lg:pb-8">
              <button className="text-head text-[13px] font-medium flex items-center gap-x-2 uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-[80%] after:border-b-2 after:border-head">
                <FaRegHeart /> Add to wishlist
              </button>

              <button className="text-head text-[13px] font-medium flex items-center gap-x-2 uppercase ">
                <BsShare /> Share
              </button>
            </div>

            {/* Meta Info */}
            <div className="space-y-1 mt-8">
              <h5 className="texts_13_regular text-[#767676]">
                SKU: <span className="text-head">N/A</span>
              </h5>
              <h5 className="texts_13_regular text-[#767676]">
                Categories:{" "}
                <span className="text-head">
                  Casual & Urban Wear, Jackets, Men
                </span>
              </h5>
              <h5 className="texts_13_regular text-[#767676]">
                Tags:{" "}
                <span className="text-head">biker, black, bomber, leather</span>
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Top;
