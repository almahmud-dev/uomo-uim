'use client';
import Top from "@/component/shopMain/shopSingle/Top";
import Tabs_desc from "@/component/shopMain/shopSingle/Tabs_desc";
import React from "react";

const ShopSinglePg = ({ id }) => {
  return (
    <>
      <Top id={id} />
      <Tabs_desc />
    </>
  );
};

export default ShopSinglePg;