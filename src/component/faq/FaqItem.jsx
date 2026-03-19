'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { HiMiniMinusSmall } from "react-icons/hi2";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-5 lg:pb-7.25">
      {/* Question row */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left cursor-pointer"
      >
        <span className="texts_16_medium text-head">
          {question}
        </span>

        {/* Icon smooth transition */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="ml-4 shrink-0 text-gray-700"
          style={{ display: "inline-flex" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="minus"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <HiMiniMinusSmall size={18} />
              </motion.span>
            ) : (
              <motion.span
                key="plus"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <FiPlus size={18} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.span>
      </button>

      {/* Border and question nice */}
      <div
        style={{
          borderBottom: isOpen ? "3px solid #111111" : "1px solid #E4E4E4",
          transition: "border 0.3s ease",
        }}
      />

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="pt-7.5 pb-12 text-[14px] text-head leading-7.5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;