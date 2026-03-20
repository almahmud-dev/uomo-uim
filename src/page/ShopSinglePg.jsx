'use client';
import Top from "@/component/shopMain/shopSingle/Top";
import Tabs_desc from "@/component/shopMain/shopSingle/Tabs_desc";
import Trend_product from "@/component/shopMain/shopSingle/Trend_product";
import React from "react";

const ShopSinglePg = ({ id }) => {
  return (
    <>
      <Top id={id} />
      <Tabs_desc />
      <Trend_product />
    </>
  );
};

export default ShopSinglePg;