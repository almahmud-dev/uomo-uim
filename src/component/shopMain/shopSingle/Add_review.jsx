'use client';
import Container from "@/component/common/Container";
import React from "react";

const Add_review = () => {
  return (
    <div className=" mt-7 lg:mt-13.5">
      <Container>
        <div className="">
          <h3 className="texts_18_medium text-head">
            Be the first to review “Message Cotton T-Shirt”
          </h3>
          <h4 className="texts_14_regular text-head py-3 lg:pb-7.5">
            Your email address will not be published. Required fields are marked
            *
          </h4>

          <div className="flex flex-col lg:flex-row lg:items-center gap-x-2 lg:mb-6.5">
            <span className="texts_14_regular text-head">Your rating *</span>
            <div className="flex  text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          <form className="space-y-3 lg:space-y-7.5">
            {/* Review Textarea */}
            <div className="textarea-container w-full">
            <textarea
              id="message"
              placeholder=" "
              className="textarea"
            ></textarea>
            <label htmlFor="message" className="textarea-label">
              Your Review
            </label>
          </div>

            {/* Floating Label Name Input */}
             <div className="input-container w-full">
            <input type="text" id="" placeholder=" " className="input" />
            <label className="label">Name *</label>
          </div>

            {/* Email Input */}
            <div className="input-container w-full">
            <input type="text" id="" placeholder=" " className="input" />
            <label className="label">Email address * </label>
          </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input type="checkbox" id="save-info" className="mt-1 w-4 h-4" />
              <label
                className="texts_14_regular text-second"
              >
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-head text-white px-10 lg:px-0 texts_14_medium h-12 lg:w-70 lg:h-15 cursor-pointer"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Add_review;
