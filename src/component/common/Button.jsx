import React from "react";

const Button = ({ className, btnText }) => {
  return (
    <div
      className={`texts_14_medium text-head cursor-pointer inline-block duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400  ${className}`}
    >
      {btnText}
    </div>
  );
};

export default Button;
