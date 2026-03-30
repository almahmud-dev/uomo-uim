// ============================================================
// NavIcons.jsx
// Desktop Navbar the right side icons:
// Search, Account, Wishlist, Cart, Mobile Menu।
//
// Account icon er Auth Rule:
//   - Logged IN  → click করলে সরাসরি /dashboard এ যাবে
//   - Logged OUT → click করলে Login/Register sidebar খুলবে
//
// Wishlist: item থাকলে filled red heart + badge
// Cart: click করলে cart sidebar বের হয়
// ============================================================

"use client";
import { useState } from "react";
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

  const handleClick = (item) => {
    // Account: logged in হলে dashboard এ পাঠাও
    if (item.name === "Account" && user) {
      router.push("/dashboard");
      return;
    }
    setOpen((prev) => (prev === item.id ? null : item.id));
  };

  const handleUnMount = (val) => setOpen(val);
  const stopProp = (e) => e.stopPropagation();

  return (
    <ul className="flex gap-x-[30px]">
      {navIconItems.map((item) => {
        const isActive = item.id === open;

        // ---- Cart ----
        if (item.name === "Cart")
          return (
            <li key={item.id} onClick={() => handleClick(item)}>
              <Link href={item.link} className="relative text-[22px] text-head">
                <span className="absolute bg-third w-[19px] h-[19px] flex items-center justify-center text-xs font-medium text-white rounded-full bottom-[-10px] !right-[-8px]">
                  {cartCount}
                </span>
                {item.icon}
              </Link>
              {isActive && (
                <div
                  className="absolute z-[999] bg-[#22222258] h-screen w-full top-0 left-0"
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
                  <span className="absolute bg-third w-[19px] h-[19px] flex items-center justify-center text-xs font-medium text-white rounded-full bottom-[-10px] !right-[-8px]">
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
            {/* Search panel */}
            {isActive && item.name === "Search" && (
              <div
                className="pt-[62px] pb-[73px] absolute bg-white left-0 w-full shadow-[0_10px_25px_-10px_rgba(0,0,0,0.18)] top-[100%]"
                onClick={stopProp}
              >
                <Container>
                  <p className="texts_14_medium text-second mb-[29px]">
                    WHAT ARE YOU LOOKING FOR?
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full py-[10px] border-b-2 border-second text-head"
                      placeholder="SEARCH PRODUCTS"
                    />
                    <span className="absolute top-1/2 translate-y-[-65%] text-[22px] right-0 cursor-pointer">
                      {item.icon}
                    </span>
                  </div>
                  <div className="pt-[27px]">
                    <p className="texts_14_medium text-second">
                      {quickLinks.title}
                    </p>
                    <ul>
                      {quickLinks.links.map((link) => (
                        <li
                          key={link.id}
                          className="texts_14_regular text-head w-fit !leading-[35px] relative after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[5px] after:left-0 hover:after:w-[50%] after:duration-500 after:ease-in-out"
                        >
                          <Link href={link.link}>{link.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Container>
              </div>
            )}
            {/* Account Login/Register sidebar — শুধু logged out হলে দেখাবে */}
            {isActive && item.name === "Account" && (
              <div
                className="absolute z-[999] bg-[#22222258] h-screen w-full top-0 left-0"
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
            {/* Mobile menu sidebar */}z
            {isActive && item.name === "Mobile Menu" && (
              <div
                className="absolute z-[999] bg-[#22222258] h-screen w-full top-0 left-0"
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
