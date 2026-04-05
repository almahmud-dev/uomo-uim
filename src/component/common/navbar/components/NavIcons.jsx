"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import allIcons from "@/helper/iconProvider";
import useCartStore from "@/store/cartSlice";
import useAuthStore from "@/store/authSlice";
import Login from "@/component/auth/Login";
import Register from "@/component/auth/Register";
import AddToCart from "@/component/shopMain/addToCart/AddToCart";
import NavTabs from "@/component/navtabs/NavTabs";
import Container from "@/component/common/Container";
import Images from "@/component/common/Images";
import { quickLinks } from "@/helper/projectArrayObj";

const NavIcons = () => {
  const { navIconItems, close } = allIcons;
  const { cartItems, wishlistItems } = useCartStore();
  const { user } = useAuthStore();
  const router = useRouter();

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  const [open, setOpen] = useState(null);
  const [authTab, setAuthTab] = useState("login");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const timeoutRef = useRef(null);

  // ── Live search ──────────────────────────────────────────
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setSearching(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}&limit=6`
        );
        const data = await res.json();
        setResults(data.products || []);
      } catch {
        setResults([]);
      } finally {
        setSearching(false);
      }
    }, 400);
    return () => clearTimeout(timeoutRef.current);
  }, [query]);

  const handleClick = (item) => {
    if (item.name === "Account" && user) {
      router.push("/dashboard");
      return;
    }
    setOpen((prev) => (prev === item.id ? null : item.id));
  };

  const handleUnMount = (val) => setOpen(val);
  const stopProp = (e) => e.stopPropagation();

  const handleSearchClose = () => {
    setOpen(null);
    setQuery("");
    setResults([]);
  };

  return (
    <ul className="flex gap-x-7.5">
      {navIconItems.map((item) => {
        const isActive = item.id === open;

        // ---- Cart ----
        if (item.name === "Cart")
          return (
            <li key={item.id} onClick={() => handleClick(item)}>
              <Link href={item.link} className="relative text-[22px] text-head">
                <span className="absolute bg-third w-4.75 h-4.75 flex items-center justify-center text-xs font-medium text-white rounded-full -bottom-2.5 -right-2!">
                  {cartCount}
                </span>
                {item.icon}
              </Link>
              {isActive && (
                <div
                  className="absolute z-999 bg-[#22222258] h-screen w-full top-0 left-0"
                  onClick={stopProp}
                >
                  <div className="h-full absolute right-0">
                    <AddToCart unMount={handleUnMount} />
                  </div>
                </div>
              )}
            </li>
          );

        // ---- Wishlist ----
        if (item.name === "Wishlist")
          return (
            <li key={item.id}>
              <Link href={item.link} className="relative text-[22px] text-head">
                {wishlistCount > 0 && (
                  <span className="absolute bg-third w-4.75 h-4.75 flex items-center justify-center text-xs font-medium text-white rounded-full -bottom-2.5 -right-2!">
                    {wishlistCount}
                  </span>
                )}
                {wishlistCount > 0 ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  item.icon
                )}
              </Link>
            </li>
          );

        // ---- Search / Account / Mobile Menu ----
        return (
          <li key={item.id} onClick={() => handleClick(item)}>
            <Link href={item.link} className="text-[22px] text-head">
              {isActive && item.name === "Search" ? (
                <span className="text-[25px]">{close}</span>
              ) : (
                item.icon
              )}
            </Link>

            {/* ── Search Panel ── */}
            {isActive && item.name === "Search" && (
              <div
                className="pt-15.5 pb-18.25 absolute bg-white left-0 w-full shadow-[0_10px_25px_-10px_rgba(0,0,0,0.18)] top-full"
                onClick={stopProp}
              >
                <Container>
                  <p className="texts_14_medium text-second mb-7.25">
                    WHAT ARE YOU LOOKING FOR?
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && query.trim()) {
                          router.push(`/shop?search=${encodeURIComponent(query)}`);
                          handleSearchClose();
                        }
                      }}
                      className="w-full py-2.5 border-b-2 border-second text-head outline-none"
                      placeholder="SEARCH PRODUCTS"
                      autoFocus
                    />
                    <span
                      onClick={() => {
                        if (query.trim()) {
                          router.push(`/shop?search=${encodeURIComponent(query)}`);
                          handleSearchClose();
                        }
                      }}
                      className="absolute top-1/2 translate-y-[-65%] text-[22px] right-0 cursor-pointer"
                    >
                      {item.icon}
                    </span>
                  </div>

                  {/* Live Results */}
                  {query.trim() ? (
                    <div className="mt-6">
                      {searching ? (
                        <p className="texts_14_regular text-second">
                          Searching...
                        </p>
                      ) : results.length > 0 ? (
                        <>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {results.map((product) => (
                              <Link
                                key={product.id}
                                href={`/shop/${product.id}`}
                                onClick={handleSearchClose}
                                className="flex items-center gap-3 p-2 hover:bg-gray-50 transition-colors rounded"
                              >
                                <Images
                                  imgSrc={product.thumbnail}
                                  imgAlt={product.title}
                                  width={48}
                                  height={48}
                                  className="w-12 h-12 object-cover shrink-0"
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
                          </div>
                          {/* View All */}
                          <button
                            onClick={() => {
                              router.push(`/shop?search=${encodeURIComponent(query)}`);
                              handleSearchClose();
                            }}
                            className="mt-5 texts_13_medium text-head underline underline-offset-4 cursor-pointer"
                          >
                            View all results for &quot;{query}&quot;
                          </button>
                        </>
                      ) : (
                        <p className="texts_14_regular text-second">
                          No products found.
                        </p>
                      )}
                    </div>
                  ) : (
                    /* Quick Links */
                    <div className="pt-6.75">
                      <p className="texts_14_medium text-second">
                        {quickLinks.title}
                      </p>
                      <ul>
                        {quickLinks.links.map((link) => (
                          <li
                            key={link.id}
                            className="texts_14_regular text-head w-fit leading-8.75! relative after:absolute after:content-[''] after:w-[0%] after:h-0.5 after:bg-head after:bottom-1.25 after:left-0 hover:after:w-[50%] after:duration-500 after:ease-in-out"
                          >
                            <Link href={link.link}>{link.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Container>
              </div>
            )}

            {/* ── Account Login/Register Sidebar ── */}
            {isActive && item.name === "Account" && (
              <div
                className="absolute z-999 bg-head h-screen w-full top-0 left-0"
                onClick={stopProp}
              >
                <div className="h-full absolute right-0 flex flex-col">
                  <div className="flex bg-white border-b border-footer">
                    <button
                      onClick={() => setAuthTab("login")}
                      className={`flex-1 py-4 texts_14_medium tracking-widest transition-colors ${authTab === "login" ? "text-head border-b-2 border-head" : "text-second"}`}
                    >
                      LOGIN
                    </button>
                    <button
                      onClick={() => setAuthTab("register")}
                      className={`flex-1 py-4 texts_14_medium tracking-widest transition-colors ${authTab === "register" ? "text-head border-b-2 border-head" : "text-second"}`}
                    >
                      REGISTER
                    </button>
                  </div>
                  {authTab === "login" ? (
                    <Login unMount={handleUnMount} />
                  ) : (
                    <Register unMount={handleUnMount} />
                  )}
                </div>
              </div>
            )}

            {/* ── Mobile Menu Sidebar ── */}
            {isActive && item.name === "Mobile Menu" && (
              <div
                className="absolute z-999 bg-[#22222258] h-screen w-full top-0 left-0"
                onClick={stopProp}
              >
                <div className="h-full absolute right-0">
                  <NavTabs unMount={handleUnMount} />
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavIcons;