'use client';
import FaqItem from "./FaqItem";

const FaqList = ({ faqs }) => {
  return (
    <div className="space-y-10">
      {faqs.map((section) => (
        <div key={section.id}>
          {/* Category heading */}
          <h2 className="head_26_medium leading-[100%] mb-6">
            {section.category}
          </h2>
          {/* Items */}
          <div>
            {section.items.map((item) => (
              <FaqItem
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqList;