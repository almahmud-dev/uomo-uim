'use client';
import Container from "@/component/common/Container";
import React from "react";

const termsSections = [
  {
    id: 1,
    heading: "Your use of this is governed by these terms of use",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totem rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 2,
    heading: "Use of the content on this website",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totem rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 3,
    heading: "How long will It take to get my package",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totem rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 4,
    heading: "Will I receive the same product that see the picture",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totem rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 5,
    heading: "Limitation of liability",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totem rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 6,
    heading: "Governing Law & Jurisdiction",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totem rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];

const Terms = () => {
  return (
    <>
    <Container>
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-0 mb-15 mt-23.5 md:mb-35">
      <div className="w-full max-w-232.5">

        {/* Title */}
        <h1 className="text-xl sm:text-3xl lg:text-[32px] font-bold text-gray-900 uppercase tracking-wide mb-6 sm:mb-8 lg:mb-12">
          Terms & Conditions
        </h1>

        {/* Sections */}
        <div className="flex flex-col gap-5 sm:gap-6 md:gap-7.5 ">
          {termsSections.map((section) => (
            <div key={section.id}>
              <h2 className="text-sm sm:text-[15px] lg:text-[16px] font-medium text-[#222] mb-2 sm:mb-3 md:mb-4 ">
                {section.heading}
              </h2>
              <p className=" text-[12px] md:text-sm text-[#222] leading-5 sm:leading-6 md:leading-7.5">
                {section.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
    </Container>
    </>
  );
};

export default Terms;