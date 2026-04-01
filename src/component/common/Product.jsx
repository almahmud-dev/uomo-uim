"use client";
import React from "react";
import Images from "./Images";
import { FaHeart } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/cartSlice";
import useAuthStore, { useLoginModalStore } from "@/store/authSlice";

const Product = ({
  id,
  imgSrc,
  imgAlt,
  catagory,
  itemName,
  itemPrice,
  discountPrice,
}) => {
  const { addToCart, addToWishlist, removeFromWishlist, wishlistItems } =
    useCartStore();
  const { user } = useAuthStore();
  const { openLoginModal } = useLoginModalStore();
  const isLiked = wishlistItems.some((item) => item.id === id);
  const router = useRouter();

  // Add product to cart
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!user) {
      openLoginModal();
      return;
    } //aita jokhn login thakbe na
    addToCart({
      id,
      name: itemName,
      price: discountPrice ? Number(discountPrice) : Number(itemPrice),
      image: imgSrc,
      category: catagory,
      quantity: 1,
    });
  };

  // Toggle wishlist item
  const handleWishlist = (e) => {
    e.stopPropagation();
    if (!user) {
      openLoginModal();
      return;
    } //login jokhn thakbe na
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
        className="lg:w-82.5 w-full relative group cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 rounded-sm"
        onClick={() => router.push(`/shop/${id}`)}
      >
        <div className="relative overflow-hidden aspect-square bg-[#F5F5F5]">
          <Images
            className={"w-full h-full object-contain"}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
          />

          {/* Add to cart button — visible on hover */}
          <button
            onClick={handleAddToCart}
            className="texts_14_medium text-white bg-black w-full pt-4 pb-2.5 text-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500 whitespace-nowrap cursor-pointer tracking-widest"
          >
            ADD TO CART
          </button>
        </div>

        {/* Product details */}
        <div className="mt-3.5 p-3">
          <div className="flex justify-between items-center">
            <p className="texts_14_regular text-second">{catagory}</p>

            <div onClick={handleWishlist} className="cursor-pointer">
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
      </div>
    </>
  );
};

export default Product;
