'use client';
import Product from "@/component/common/Product";
import React, { useEffect, useRef } from "react";
import Link from 'next/link';
const product = "/assets/images/product.png";
import mixitup from "mixitup";
import Button from "@/component/common/Button";
import Container from "@/component/common/Container";

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      mixitup(containerRef.current, {
        animation: {
          duration: 400,
        },
        selectors: {
          target: ".mix",
        },
      });
    }
  }, []);
  return (
    <>
      <section className=" mt-9.5 md:mt-15 lg:mt-23.5">
        <Container>
          <div className="heading text-center">
            <h2 className="lg:head_35_regular font-medium text-[26px]  text-head">
              OUR TRENDY{" "}
              <span className="lg:head_35_bold font-bold text-[26px] text-head">
                PRODUCTS
              </span>
            </h2>
            <div className="flex flex-wrap justify-center items-center lg:gap-10 gap-4 mt-4 lg:mt-7.75">
              <Link href="#">
                <p
                  data-filter=".all"
                  className="lg:texts_16_medium text-[14px] text-second hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
                >
                  ALL
                </p>
              </Link>
              <Link href="#">
                <p
                  data-filter=".newArrivals"
                  className="lg:texts_16_medium text-[14px] text-second hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
                >
                  NEWARRIVALS
                </p>
              </Link>
              <Link href="#">
                <p
                  data-filter=".bestSeller"
                  className="lg:texts_16_medium text-[14px] text-second hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
                >
                  BEST SELLER
                </p>
              </Link>
              <Link href="#">
                <p
                  data-filter=".toprating"
                  className="lg:texts_16_medium text-[14px] text-second hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
                >
                  TOP RATING
                </p>
              </Link>
            </div>
          </div>
          <div
            ref={containerRef}
            className="mt-5.5 grid lg:grid-cols-4 grid-cols-2 justify-center  md:gap-7.5 gap-3.5 "
          >
            <div className="mix all newArrivals bestSeller">
              <Product
                imgSrc={product}
                imgAlt={product}
                catagory={"Dresses"}
                itemName={"Cropped Faux Leather Jacket"}
                itemPrice={"29"}
              />
            </div>
            <div className="mix all newArrivals bestSeller">
              <Product
                imgSrc={product}
                imgAlt={product}
                catagory={"Dresses"}
                itemName={"Calvin Shorts"}
                itemPrice={"62"}
              />
            </div>
            <div className="mix all  ">
              <Product
                imgSrc={product}
                imgAlt={product}
                catagory={"Dresses"}
                itemName={"CKirby T-Shirt"}
                itemPrice={"17"}
              />
            </div>
            <div className="mix all  toprating">
              <Product
                imgSrc={product}
                imgAlt={product}
                catagory={"Dresses"}
                itemName={"Cableknit Shawl"}
                itemPrice={"129"}
                discountPrice={"99"}
              />
            </div>
            <div className="mix all  ">
              <Product
                imgSrc={product}
                imgAlt={product}
                catagory={"Dresses"}
                itemName={"Cropped Faux Leather Jacket"}
                itemPrice={"29"}
              />
            </div>
            <div className="mix all newArrivals toprating">
              <Product
                imgSrc={product}
                imgAlt={product}
                catagory={"Dresses"}
                itemName={"Cropped Faux Leather Jacket"}
                itemPrice={"29"}
              />
            </div>
            <div className="mix all newArrivals ">
              <Product
                imgSrc={product}
                imgAlt={product}
                catagory={"Dresses"}
                itemName={"Cropped Faux Leather Jacket"}
                itemPrice={"29"}
              />
            </div>
            <div className="mix all  toprating">
              <Product
                imgSrc={product}
                imgAlt={product}
                catagory={"Dresses"}
                itemName={"Cropped Faux Leather Jacket"}
                itemPrice={"129"}
                discountPrice={"99"}
              />
            </div>
          </div>
          <div className="mt-10.5 text-center">
            <Button
              className={"hover:after:w-24"}
              btnText={"SEE ALL PRODUCT"}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Products;
