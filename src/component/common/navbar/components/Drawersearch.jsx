"use client";
import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { GoSearch } from "react-icons/go";

const DrawerSearch = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = useCallback(() => {
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/shop?search=${encodeURIComponent(trimmed)}`);
    onClose();
  }, [query, router, onClose]);

  const handleKeyDown = useCallback(
    (e) => { if (e.key === "Enter") handleSearch(); },
    [handleSearch]
  );

  return (
    <div className="flex items-center gap-2.5 px-5 py-4 mb-3 border-b border-footer">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search products..."
        aria-label="Search products"
        className="flex-1 texts_14_regular text-head bg-transparent placeholder:text-second outline-none"
      />
      <button
        onClick={handleSearch}
        aria-label="Submit search"
        className="cursor-pointer shrink-0"
      >
        <GoSearch className="text-[18px] text-head" />
      </button>
    </div>
  );
};

DrawerSearch.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default DrawerSearch;