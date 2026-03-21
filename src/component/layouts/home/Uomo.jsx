'use client';
import Container from "@/component/common/Container";
import Images from "@/component/common/Images";
import React from "react";
const image = "/assets/images/uomoImg.png";

const Uomo = () => {
  return (
    <>
      <section className="mt-12.5 lg:mt-20.25">
        <Container>
          <div className="">
            <h2 className="head_35_regular text-bold text-center">@UOMO</h2>
            <div className="mt-8.5 grid grid-cols-3 lg:grid-cols-6 gap-3.75 lg:gap-1.5">
              {[...new Array(12)].map((_, index) => {
                return (
                  <div key={index}>
                    <Images
                      imgSrc={image}
                      imgAlt={image}
                      className={"w-full rounded"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Uomo;
