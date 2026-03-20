'use client';
import Blog from "@/component/common/Blog";
import Container from "@/component/common/Container";
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
const blogImg = "/assets/images/blogImg.png";
import { Progress } from "@/components/ui/progress";
import Button from "../../common/Button";

const BlogList = () => {
  const [visibleItems, setVisibleItems] = useState(36);
  const totalItems = 100;
  const percentage = (visibleItems / totalItems) * 100;

  const handleLoadMore = () => {
    if (visibleItems < totalItems) {
      setVisibleItems((prev) => Math.min(prev + 12, totalItems));
    }
  };

  const containerRef = useRef(null);
  useEffect(() => {
  if (containerRef.current) {
    import('mixitup').then((mixitup) => {
      mixitup.default(containerRef.current, {
        animation: {
          duration: 400,
        },
        selectors: {
          target: ".mix",
        },
      });
    });
  }
}, []);

  return (
    <section className=" py-12.5  lg:pt-22.5 pt-21.25 lg:pb-24.5">
      <Container>
        <h2 className="head_35_bold text-center md:text-start text-head pb-2.75 ">The Blog</h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-10 pb-9 md:pb-12.5">
          <Link href="#">
            <p
              data-filter=".all"
              className="texts_16_medium text-head hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
            >
              ALL
            </p>
          </Link>
          <Link href="#">
            <p
              data-filter=".company"
              className="texts_16_medium text-head hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
            >
              COMPANY
            </p>
          </Link>
          <Link href="#">
            <p
              data-filter=".fashion"
              className="texts_16_medium text-head hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
            >
              FASHION
            </p>
          </Link>
          <Link href="#">
            <p
              data-filter=".style"
              className="texts_16_medium text-head hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
            >
              STYLE
            </p>
          </Link>
          <Link href="#">
            <p
              data-filter=".trends"
              className="texts_16_medium text-head hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
            >
              TRENDS
            </p>
          </Link>
          <Link href="#">
            <p
              data-filter=".beauty"
              className="texts_16_medium text-head hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
            >
              BEAUTY
            </p>
          </Link>
        </div>
        <div
          ref={containerRef}
          className="grid  grid-cols-1 lg:grid-cols-2 gap-12.5 lg:gap-7.5 pb-12.5"
        >
          <div className="mix all company beauty">
            <Link href={"/elements/blog"}>
              <Blog
                imgSrc={blogImg}
                imgAlt={blogImg}
                author={"BY ADMIN"}
                date={"APRIL 05, 2020"}
                blogname={"Woman with good shoes is never be ugly place"}
                blogdescription={
                  "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."
                }
              />
            </Link>
          </div>
          <div className="mix all company style">
            <Link href={"/elements/blog"}>
              <Blog
                imgSrc={blogImg}
                imgAlt={blogImg}
                author={"BY ADMIN"}
                date={"APRIL 05, 2020"}
                blogname={"5 Tips to Increase Your Online Sales"}
                blogdescription={
                  "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."
                }
              />
            </Link>
          </div>
          <div className="mix all trends fashion">
            <Link href={"/elements/blog"}>
              <Blog
                imgSrc={blogImg}
                imgAlt={blogImg}
                author={"BY ADMIN"}
                date={"APRIL 05, 2020"}
                blogname={"Tree earth fowl given moveth deep lesser After"}
                blogdescription={
                  "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."
                }
              />
            </Link>
          </div>
          <div className="mix all style trends">
            <Link href={"/elements/blog"}>
              <Blog
                imgSrc={blogImg}
                imgAlt={blogImg}
                author={"BY ADMIN"}
                date={"APRIL 05, 2020"}
                blogname={"Given Set was without from god divide rule Hath"}
                blogdescription={
                  "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."
                }
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center  w-full max-w-75 mx-auto uppercase">
          <p className="texts_14_medium text-black">
            Showing {visibleItems} of {totalItems} Items
          </p>

          <Progress
            value={percentage}
            className="h-full w-full bg-[#E4E4E4] [&>div]:bg-black transition-all duration-500 items-center rounded-[10px]"
          />

          {visibleItems < totalItems && (
            <Link href="#">
              {" "}
              <Button
                onClick={handleLoadMore}
                className={
                  "texts_14_medium text-black hover:after:w-15 pt-4.25"
                }
                btnText={"SHOW MORE"}
              />
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
};

export default BlogList;
