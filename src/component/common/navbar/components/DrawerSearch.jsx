"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import Images from "@/component/common/Images";

const DrawerSearch = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const timeoutRef = useRef(null);

  // ── Live search with debounce ──
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}&limit=5`
        );
        const data = await res.json();
        setResults(data.products || []);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timeoutRef.current);
  }, [query]);

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

  const handleProductClick = useCallback(() => {
    setQuery("");
    setResults([]);
    onClose();
  }, [onClose]);

  return (
    <div className="px-5 py-4 mb-3 border-b border-footer relative">
      {/* Search Input */}
      <div className="flex items-center gap-2.5">
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

      {/* Dropdown Results */}
      {query.trim() && (
        <div className="absolute left-0 right-0 top-full bg-white shadow-lg z-50 border-t border-footer max-h-80 overflow-y-auto">
          {loading ? (
            <div className="px-5 py-4 texts_13_regular text-second">
              Searching...
            </div>
          ) : results.length > 0 ? (
            <>
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.id}`}
                  onClick={handleProductClick}
                  className="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 transition-colors"
                >
                  <Images
                    imgSrc={product.thumbnail}
                    imgAlt={product.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover shrink-0"
                  />
                  <div className="flex flex-col overflow-hidden">
                    <span className="texts_13_medium text-head truncate">
                      {product.title}
                    </span>
                    <span className="text-[12px] text-second">
                      ${product.price}
                    </span>
                  </div>
                </Link>
              ))}
              {/* View All */}
              <button
                onClick={handleSearch}
                className="w-full px-5 py-3 text-left texts_13_medium text-head hover:bg-gray-50 border-t border-footer transition-colors"
              >
                View all results for "{query}"
              </button>
            </>
          ) : (
            <div className="px-5 py-4 texts_13_regular text-second">
              No products found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

DrawerSearch.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default DrawerSearch;