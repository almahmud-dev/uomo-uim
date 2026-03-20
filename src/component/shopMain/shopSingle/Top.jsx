"use client";
import Container from "@/component/common/Container";
import Images from "@/component/common/Images";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { BsShare } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useState } from "react";
import useSingleProduct from "@/coustomHook/useSingleProduct";
import useCartStore from "@/store/cartSlice";

const Top = ({ id }) => {
  const [count, setCount] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { data: product, isLoading } = useSingleProduct(id);
  const { addToCart } = useCartStore();

  const handleMinus = () => {
    if (count > 1) setCount(count - 1);
  };
  const handlePlus = () => {
    if (count < 10) setCount(count + 1);
  };

  // discount price calculate
  const discountedPrice =
    product?.discountPercentage > 0
      ? product.price - (product.price * product.discountPercentage) / 100
      : product?.price;

  // count onujayi total price
  const totalPrice = discountedPrice ? (discountedPrice * count).toFixed(2) : 0;

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({
      id: product.id,
      name: product.title,
      price: discountedPrice,
      image: product.thumbnail,
      category: product.category,
      quantity: count,
    });
    // popup dekhabe
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  };

  if (isLoading) {
    return (
      <div className="mt-12.5 mb-25">
        <Container>
          <div className="animate-pulse flex gap-15">
            <div className="bg-gray-200 h-125 w-142.5" />
            <div className="flex-1 flex flex-col gap-4">
              <div className="bg-gray-200 h-8 w-3/4" />
              <div className="bg-gray-200 h-6 w-1/4" />
              <div className="bg-gray-200 h-24 w-full" />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  const images = product?.images || [product?.thumbnail];

  return (
    <div className="pt-18.5 pb-6 lg:pt-12.5 lg:pb-25">
      {/* Add to Cart Popup */}
      {showPopup && (
        <div className="fixed top-24 right-6 z-9999 bg-head text-white px-6 py-4 shadow-lg flex items-center gap-3 transition-all duration-300">
          <Images
            imgSrc={product?.thumbnail}
            className="w-12 h-12 object-cover"
          />
          <div>
            <p className="texts_14_medium">{product?.title}</p>
            <p className="texts_13_regular">Added to cart ✓</p>
          </div>
        </div>
      )}

      <Container>
        <div className="flex flex-col xl:flex-row gap-y-8 xl:gap-x-15">
          {/* Left Side: Images */}
          <div className="flex flex-col-reverse xl:flex-row gap-2.5">
            <div className="flex xl:flex-col gap-2.5 overflow-x-auto lg:overflow-visible">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`min-w-20 xl:w-auto cursor-pointer border-2 ${activeImg === i ? "border-head" : "border-transparent"}`}
                  onClick={() => setActiveImg(i)}
                >
                  <Images imgSrc={img} className="w-20 h-20 object-cover" />
                </div>
              ))}
            </div>

            {/* Main Slider */}
            <div className="w-full xl:w-142.5 relative group">
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
                {images.map((img, index) => (
                  <SwiperSlide
                    key={index}
                    className="relative flex justify-center items-center bg-[#F5F5F5]"
                  >
                    <Images
                      imgSrc={img}
                      className="w-full h-auto object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
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
              <h4 className="texts_14_medium text-head">
                HOME / {product?.category?.toUpperCase()}
              </h4>
            </div>

            <h3 className="text-xl xl:head_26_regular font-normal text-head">
              {product?.title}
            </h3>

            {/* Price */}
            <div className="mt-2">
              {product?.discountPercentage > 0 ? (
                <div className="flex items-center gap-2">
                  <span className="line-through text-second text-[16px]">
                    ${product?.price}
                  </span>
                  <span className="text-[22px] font-medium text-head">
                    ${(discountedPrice * count).toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-[22px] font-medium text-head">
                  ${(product?.price * count).toFixed(2)}
                </span>
              )}
            </div>

            <p className="texts_14_regular text-head max-w-125 leading-6 pt-4 lg:pt-6.25">
              {product?.description}
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-x-2.5 lg:gap-x-5 my-6 lg:my-8">
              <div className="w-25 lg:w-31.25 h-12 lg:h-15 border border-footer flex items-center justify-between px-3 lg:px-5 shrink-0">
                <button
                  onClick={handleMinus}
                  className="cursor-pointer text-xl text-second hover:text-black transition-colors"
                >
                  -
                </button>
                <span className="text-head font-medium">{count}</span>
                <button
                  onClick={handlePlus}
                  className="cursor-pointer text-xl text-second hover:text-black transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="h-12 lg:w-70 lg:h-15 bg-head text-white text-[12px] lg:texts_14_medium tracking-widest cursor-pointer uppercase px-10 lg:px-0"
              >
                ADD TO CART
              </button>
            </div>

            {/* Wishlist & Share */}
            <div className="flex gap-x-8 lg:pb-8">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="text-head text-[13px] font-medium flex items-center gap-x-2 uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-[80%] after:border-b-2 after:border-head"
              >
                {isWishlisted ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
                {isWishlisted ? "WISHLISTED" : "Add to wishlist"}
              </button>
              <button className="text-head text-[13px] font-medium flex items-center gap-x-2 uppercase">
                <BsShare /> Share
              </button>
            </div>

            {/* Meta */}
            <div className="space-y-1 mt-8">
              <h5 className="texts_13_regular text-second">
                SKU: <span className="text-head">{product?.sku || "N/A"}</span>
              </h5>
              <h5 className="texts_13_regular text-second">
                Category: <span className="text-head">{product?.category}</span>
              </h5>
              <h5 className="texts_13_regular text-second">
                Brand:{" "}
                <span className="text-head">{product?.brand || "N/A"}</span>
              </h5>
              <h5 className="texts_13_regular text-second">
                Rating: <span className="text-head">⭐ {product?.rating}</span>
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Top;
