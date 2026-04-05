"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa6";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { CldImage } from "next-cloudinary";
import Container from "@/component/common/Container";
import allIcons from "@/helper/iconProvider";
import { navItems, navTabsData } from "@/helper/projectArrayObj";
import AddToCart from "@/component/shopMain/addToCart/AddToCart";
import useCartStore from "@/store/cartSlice";
import useAuthStore from "@/store/authSlice";
import DrawerHeader from "./components/DrawerHeader";
import DrawerSearch from "./components/DrawerSearch";
import DrawerFooter from "./components/DrawerFooter";
import DrawerTabRow from "./components/DrawerTabRow";

const { navIconItems } = allIcons;

// ── Constants ──────────────────────────────────────────────
const DRAWER_CLOSE_DELAY = 310;

const PANEL_RIGHT_OF = {
  main: ["shop", "shopSub", "journal", "simple"],
  shop: ["shopSub"],
  shopSub: [],
  journal: [],
  simple: [],
};

const UNDERLINE =
  "relative after:absolute after:content-[''] after:w-[0%] after:h-0.5 after:bg-head after:left-0 hover:after:w-[60%] after:duration-500 after:ease-in-out";

// ── Pure helpers ───────────────────────────────────────────
const getPanelPosition = (current, target) => {
  if (current === target) return "translate-x-0";
  return PANEL_RIGHT_OF[current]?.includes(target)
    ? "translate-x-full"
    : "-translate-x-full";
};

// ──────────────────────────────────────────────────────────
const NavbarMobile = () => {
  const { cartItems, wishlistItems } = useCartStore();
  const { user, clearUser } = useAuthStore();
  const router = useRouter();
  const drawerRef = useRef(null);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  const [isOpen, setIsOpen] = useState(false);
  const [panel, setPanel] = useState("main");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(navTabsData[0].tab);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeMegaItem, setActiveMegaItem] = useState(null);
  const [activeSimpleNav, setActiveSimpleNav] = useState(null);

  const currentTabData = navTabsData.find((t) => t.tab === activeTab);

  // ── Panel class ───────────────────────────────────────────
  const panelClass = (name) =>
    `absolute inset-0 flex flex-col transition-transform duration-300 ease-in-out ${getPanelPosition(panel, name)}`;

  // ── Handlers ──────────────────────────────────────────────
  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setPanel("main");
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setPanel("main");
      setActiveTab(navTabsData[0].tab);
      setActiveCategory(null);
      setActiveMegaItem(null);
      setActiveSimpleNav(null);
    }, DRAWER_CLOSE_DELAY);
  }, []);

  const handleBack = useCallback(() => {
    if (panel === "shopSub") setPanel("shop");
    else if (["shop", "journal", "simple"].includes(panel)) setPanel("main");
  }, [panel]);

  const handleNavItemClick = useCallback((item) => {
    if (item.label === "SHOP") {
      setPanel("shop");
    } else if (item.hasMegaMenu) {
      setActiveMegaItem(item);
      setPanel("journal");
    } else if (item.hasDropdown) {
      setActiveSimpleNav(item);
      setPanel("simple");
    }
  }, []);

  const handleLogout = useCallback(async () => {
    await signOut(auth);
    clearUser();
    handleClose();
    router.push("/");
  }, [clearUser, handleClose, router]);

  const handleLoginClick = useCallback(() => {
    handleClose();
    router.push("/login-register");
  }, [handleClose, router]);

  const isDirectLink = (item) =>
    !item.hasDropdown && !item.hasMegaMenu && item.path;

  // ── Escape key ────────────────────────────────────────────
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isCartOpen) setIsCartOpen(false);
        else if (isOpen) handleClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, isCartOpen, handleClose]);

  // ── Focus trap ────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;

    const focusable = drawerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trapFocus = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", trapFocus);
    first?.focus();
    return () => document.removeEventListener("keydown", trapFocus);
  }, [isOpen, panel]);

  // ── Scroll lock ───────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = isOpen || isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isCartOpen]);

  // ── Shared props ──────────────────────────────────────────
  const headerProps = {
    onClose: handleClose,
    onCartOpen: () => setIsCartOpen(true),
    cartCount,
  };

  const footerProps = {
    user,
    onLogout: handleLogout,
    onLoginClick: handleLoginClick,
  };

  return (
    <>
      {/* ── Top Bar ── */}
      <nav className="py-5.25">
        <Container>
          <div className="flex items-center justify-between">
            <button
              onClick={handleOpen}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              className="text-[28px] text-head cursor-pointer"
            >
              {navIconItems[4].icon}
            </button>

            <CldImage
              src="navicon_is7dpu"
              alt="Uomo logo"
              width={400}
              height={800}
              className="w-27.75 h-6.75"
            />

            <div className="flex items-center gap-4">
              <Link
                href="/dashboard/wishlist"
                aria-label={`Wishlist (${wishlistCount} items)`}
                className="relative text-[22px] text-head pr-2.5"
              >
                {wishlistCount > 0 ? (
                  <FaHeart className="text-red-500 text-[22px]" />
                ) : (
                  navIconItems[2].icon
                )}
                {wishlistCount > 0 && (
                  <span className="absolute bg-third w-4.5 h-4.5 flex items-center justify-center text-[11px] font-medium text-white rounded-full -bottom-1.5 right-0.5">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsCartOpen(true)}
                aria-label={`Open cart (${cartCount} items)`}
                className="relative cursor-pointer pr-2.5"
              >
                <span className="text-[26px] text-head">
                  {navIconItems[3].icon}
                </span>
                {cartCount > 0 && (
                  <span className="absolute bg-third w-4.5 h-4.5 flex items-center justify-center text-[11px] font-medium text-white rounded-full -bottom-1.5 right-0.5">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* ── Drawer Backdrop ── */}
      <div
        onClick={handleClose}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/30 z-998 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Drawer ── */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 left-0 w-70 h-full bg-white z-999 overflow-hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Panel 1 — Main */}
        <div className={panelClass("main")}>
          <DrawerHeader {...headerProps} />
          <DrawerSearch onClose={handleClose} />
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {navItems.map((item) =>
              isDirectLink(item) ? (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={handleClose}
                  className="w-full flex items-center px-5 bg-transparent text-left"
                >
                  <span
                    className={`texts_16_medium leading-13.75 text-head tracking-[0.5px] ${UNDERLINE} after:bottom-2.25`}
                  >
                    {item.label}
                  </span>
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavItemClick(item)}
                  className="w-full flex items-center justify-between px-5 bg-transparent cursor-pointer text-left"
                >
                  <span
                    className={`texts_16_medium leading-13.75 text-head tracking-[0.5px] ${UNDERLINE} after:bottom-2.25`}
                  >
                    {item.label}
                  </span>
                  <IoChevronForward className="text-[16px] text-head shrink-0" />
                </button>
              ),
            )}
          </div>
          <DrawerFooter {...footerProps} />
        </div>

        {/* Panel 2 — SHOP */}
        <div className={panelClass("shop")}>
          <DrawerHeader {...headerProps} />
          <DrawerSearch onClose={handleClose} />
          <DrawerTabRow activeTab={activeTab} onChange={setActiveTab} />
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {currentTabData?.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat);
                  setPanel("shopSub");
                }}
                className="w-full flex items-center justify-between px-5 h-11.25 bg-transparent cursor-pointer text-left"
              >
                <span
                  className={`texts_14_medium tracking-[0.3px] ${UNDERLINE} after:bottom-0 ${cat.isRed ? "text-red" : "text-head"}`}
                >
                  {cat.name}
                </span>
                <IoChevronForward className="text-[14px] text-second shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Panel 3 — SHOP Sub */}
        <div className={panelClass("shopSub")}>
          <DrawerHeader {...headerProps} />
          <DrawerSearch onClose={handleClose} />
          <DrawerTabRow activeTab={activeTab} />
          <button
            onClick={handleBack}
            className="w-full flex items-center gap-2 px-5 h-12.5 bg-transparent cursor-pointer text-left"
          >
            <IoChevronBack className="text-[15px] text-head shrink-0" />
            <span className="texts_14_medium text-head tracking-[0.5px]">
              {activeCategory?.name}
            </span>
          </button>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {currentTabData?.subLinks?.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                onClick={handleClose}
                className="flex items-center px-5 h-11.5 texts_14_regular text-head"
              >
                <span className={`${UNDERLINE} after:bottom-0`}>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Panel 4 — JOURNAL */}
        <div className={panelClass("journal")}>
          <DrawerHeader {...headerProps} />
          <DrawerSearch onClose={handleClose} />
          <button
            onClick={handleBack}
            className="w-full flex items-center gap-2 px-5 h-13 pt-4 pb-2 border-b border-footer bg-transparent cursor-pointer text-left"
          >
            <IoChevronBack className="text-lg text-head shrink-0" />
            <span className="texts_16_medium leading-11.25 text-head tracking-[0.5px]">
              {activeMegaItem?.label}
            </span>
          </button>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {activeMegaItem?.megaMenuData?.map((group, gIdx) => (
              <div key={gIdx}>
                <div className="px-5 pt-4 pb-2">
                  <span className="texts_14_medium text-head tracking-[0.8px]">
                    {group.title}
                  </span>
                </div>
                {group.links.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    href={link.link}
                    onClick={handleClose}
                    className="flex items-center px-5 h-11 texts_13_regular"
                  >
                    <span className={`${UNDERLINE} after:bottom-0.5`}>
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Panel 5 — PAGES */}
        <div className={panelClass("simple")}>
          <DrawerHeader {...headerProps} />
          <DrawerSearch onClose={handleClose} />
          <button
            onClick={handleBack}
            className="w-full flex items-center gap-2 px-5 h-13 border-b border-footer bg-transparent cursor-pointer text-left"
          >
            <IoChevronBack className="text-[16px] text-head shrink-0" />
            <span className="texts_16_medium text-head leading-11.25 tracking-[0.5px]">
              {activeSimpleNav?.label}
            </span>
          </button>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {activeSimpleNav?.dropdownData?.map((link, idx) => (
              <Link
                key={idx}
                href={link.link}
                onClick={handleClose}
                className="flex items-center px-5 texts_14_regular text-head"
              >
                <span
                  className={`leading-11.25 ${UNDERLINE} after:bottom-1.75`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
          <DrawerFooter {...footerProps} />
        </div>
      </div>

      {/* ── Cart Backdrop ── */}
      <div
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/30 z-1000 transition-opacity duration-300 ${
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Cart Drawer ── */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-1001 transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <AddToCart unMount={() => setIsCartOpen(false)} />
      </div>
    </>
  );
};

export default NavbarMobile;