'use client';
import Container from "@/component/common/Container";
import Product from "@/component/common/Product";
import React from "react";
const product = "/assets/images/product.png";

const Trend_product = () => {
  return (
    <div className="mt-9.5 mb-25 hidden lg:block">
      <Container>
        <h3 className="head_26_regular text-head">
          RELATED <span className="head_26_bold ">PRODUCTS</span>
        </h3>
       <div className="mt-8.5 flex gap-x-7.5">
          <Product catagory={"Dresses"} imgSrc={product} itemName={"Cropped  Faux Leather Jacket"} itemPrice={"29"}/>
          <Product catagory={"Dresses"} imgSrc={product} itemName={"Calvin Shorts"} itemPrice={"62"}/>
          <Product catagory={"Dresses"} imgSrc={product} itemName={"Kirby T-Shirt"} itemPrice={"17"}/>
          <Product catagory={"Dresses"} imgSrc={product} itemName={"Cableknit Shawl"} itemPrice={"129"} discountPrice={"99"}/>
        </div>
      </Container>
    </div>
  );
};

export default Trend_product;
