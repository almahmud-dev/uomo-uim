"use client";
import PropTypes from "prop-types";
import { navTabsData } from "@/helper/projectArrayObj";

const DrawerTabRow = ({ activeTab, onChange }) => {
  return (
    <div className="flex items-center px-5 gap-2 pt-6 pb-5">
      {navTabsData.map(({ id, tab }) => (
        <button
          key={id}
          onClick={() => onChange?.(tab)}
          aria-pressed={activeTab === tab}
          className={`texts_15_medium px-3 py-1.25 rounded-lg tracking-[0.5px] transition-colors cursor-pointer ${
            activeTab === tab
              ? "bg-head text-white"
              : "text-head hover:bg-secondbg"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

DrawerTabRow.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onChange:  PropTypes.func,
};

DrawerTabRow.defaultProps = {
  onChange: null,
};

export default DrawerTabRow;