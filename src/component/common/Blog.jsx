'use client';
import React from "react";
import Images from "./Images";
import Button from "./Button";
import Link from 'next/link';

const Blog = ({ imgSrc, imgAlt, author, date, blogname, blogdescription }) => {
  return (
    <>
      
        <div className="cursor-pointer">
          <Images imgSrc={imgSrc} imgAlt={imgAlt} />
          <div className="pt-5">
            <div className="flex gap-6.25">
              <p className="texts_14_regular text-second">{author}</p>
              <p className="texts_14_regular text-second">{date}</p>
            </div>
            <h3 className="head_26_regular text-head pt-1 pb-5">{blogname}</h3>
            <p className="texts_14_regular text-head max-w-172.5 pb-2.5">
              {blogdescription}
            </p>

            <Button
              className={"hover:after:w-24"}
              btnText={"CONTINUE READING"}
            />
          </div>
        </div>
    </>
  );
};

export default Blog;
