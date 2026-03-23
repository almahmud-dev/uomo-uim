'use client';
import React, { useState } from "react";
import Images from "./Images";
import { FaHeart } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/cartSlice";

const Product = ({
  id,
  imgSrc,
  imgAlt,
  catagory,
  itemName,
  itemPrice,
  discountPrice,
}) => {
  const { addToCart, addToWishlist, removeFromWishlist, wishlistItems } = useCartStore();
const isLiked = wishlistItems.some((item) => item.id === id);
  const router = useRouter();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log("Adding to cart:", id);
    addToCart({
      id,
      name: itemName,
      price: discountPrice ? Number(discountPrice) : Number(itemPrice),
      image: imgSrc,
      category: catagory,
      quantity: 1,
    });
  };
  const handleWishlist = (e) => {
  e.stopPropagation();
  if (isLiked) {
    removeFromWishlist(id);
  } else {
    addToWishlist({
      id,
      name: itemName,
      price: discountPrice ? Number(discountPrice) : Number(itemPrice),
      image: imgSrc,
      category: catagory,
    });
  }
};

  return (
    <>
      <div
        className="lg:w-82.5 w-full relative group cursor-pointer"
        onClick={() => router.push(`/shop/${id}`)}
      >
        <div className="relative overflow-hidden ">
          <Images className={"w-full object-cover"} imgSrc={imgSrc} imgAlt={imgAlt} />
          {/* Badge Start */}

          {/* Add To Cart Start */}
          <button
            onClick={handleAddToCart}
            className="texts_14_medium text-head bg-white  w-full pt-4 pb-2.5 text-center absolute  bottom-4 left-1/2 -translate-x-1/2 translate-y-[50%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500 whitespace-nowrap cursor-pointer"
          >
            ADD TO CART
          </button>
          {/* Add To Cart End*/}
        </div>

        {/* Product Description Start */}
        <div className="mt-3.5">
          <div className="flex justify-between items-center">
            <p className="texts_14_regular text-second">{catagory}</p>

            <div
              onClick={handleWishlist}
              className="cursor-pointer"
            >
              {isLiked ? (
                <FaHeart className="text-red cursor-pointer" size={20} />
              ) : (
                <FaHeart className="text-second cursor-pointer" size={20} />
              )}
            </div>
          </div>
          <p className="texts_16_regular text-head pt-0.5 line-clamp-2">
            {itemName}
          </p>
          <div className="flex gap-2 items-center">
            {discountPrice ? (
              <>
                <p className="texts_16_regular text-second line-through">
                  ${itemPrice}
                </p>
                <p className="texts_16_regular text-red font-bold">
                  ${discountPrice}
                </p>
              </>
            ) : (
              <p className="texts_16_regular text-head">${itemPrice}</p>
            )}
          </div>
        </div>
        {/* Product Description End */}
      </div>
    </>
  );
};

export default Product;