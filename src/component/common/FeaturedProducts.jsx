'use client';
import React from "react";
import Images from "./Images";
import Button from "./Button";

const FeaturedProducts = ({imgSrc,imgAlt,price,category}) => {
  return (
    <>
      <div className="relative group overflow-hidden  hover:bg-red">
        <Images imgSrc={imgSrc} imgAlt={imgAlt} className={"w-full object-cover"}/>
        {/* <div className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-0 bg-red/80 group-hover:h-full transition-all duration-500 ease-in-out"></div>
        <div className=" absolute bottom-10 left-10">
          <p className="texts_14_regular text-head group-hover:text-white transition-color duration-500">{price}</p>
          <h3 className="head_26_medium text-head  group-hover:text-white transition-color duration-500 pb-1.25">
            {category}
          </h3>
          <Button className={"hover:after:w-12.5 group-hover:after:bg-white group-hover:text-white transition-color duration-500"} btnText={"SHOP NOW"} />
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
