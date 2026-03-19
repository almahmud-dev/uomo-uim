'use client';
import FaqList from "../component/faq/FaqList";
import faqData from "../component/faq/faqData";

const PAGE_HEADING = "FREQUENTLY ASKED QUESTIONS";

const Faq = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-232.5 mx-auto px-6 pt-36 lg:pt-40 pb-13 lg:pb-25">

        {/* Heading — border nei */}
        <h1 className="head_35_bold text-head leading-[100%] mb-12">
          {PAGE_HEADING}
        </h1>
        {/* ↑ mb-12 = 48px gap heading theke Orders projonto */}

        {/* FAQ Sections */}
        <FaqList faqs={faqData} />

      </div>
    </div>
  );
};

export default Faq;