"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import Container from "../Container";
import Images from "../Images";
import allIcons from "@/helper/iconProvider";
import allImages from "@/helper/imagesProvider";
import { navItems, navTabsData } from "@/helper/projectArrayObj";
import AddToCart from "@/component/shopMain/addToCart/AddToCart";
import useCartStore from "@/store/cartSlice";
const socialIcons = [
  { id: 1, icon: FaFacebookF, link: "https://www.facebook.com" },
  { id: 2, icon: FaTwitter, link: "https://www.twitter.com" },
  { id: 3, icon: FaInstagram, link: "https://www.instagram.com" },
  { id: 4, icon: FaYoutube, link: "https://www.youtube.com" },
  { id: 5, icon: FaPinterestP, link: "https://www.pinterest.com" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Shared UI pieces
// ─────────────────────────────────────────────────────────────────────────────

const DrawerHeader = ({ onClose, navLogo, cartBadge, onCartClick }) => (
  <div className="flex items-center justify-between px-5 py-4 border-b border-footer">
    <button onClick={onClose} className="text-[22px] text-head cursor-pointer">
      <IoMdClose />
    </button>
    <Images
      imgAlt="mobile-nav"
      imgSrc={navLogo}
      className="w-[111px] h-[27px]"
    />
    <button onClick={onCartClick} className="relative cursor-pointer pr-[10px]">
      <span className="text-[23px] text-head">
        <HiOutlineShoppingBag />
      </span>
      <span className="absolute bg-third w-[17px] h-[17px] flex items-center justify-center text-[10px] font-medium text-white rounded-full bottom-[-5px] right-[2px]">
        {cartBadge}
      </span>
    </button>
  </div>
);

const DrawerSearch = () => (
  <div className="flex items-center gap-[10px]  px-5 py-4 mb-3 border-b border-footer">
    <input
      type="text"
      placeholder="Search products..."
      className="flex-1 texts_14_regular text-head bg-transparent placeholder:text-second"
    />
    <GoSearch className="text-[18px] text-head" />
  </div>
);

const DrawerFooter = () => (
  <div className="px-5 pt-[29px] pb-5 border-t border-footer">
    <div className="flex items-center gap-[10px] mb-4 ">
      <FaRegUser className="text-[16px] text-head" />
      <span className="texts_14_medium  text-head tracking-[0.5px]">
        MY ACCOUNT
      </span>
    </div>
    <div className="flex items-center mb-[10px]">
      <span className="texts_14_regular text-second w-[80px] shrink-0">
        Language
      </span>
      <span className="texts_13_regular text-head flex items-center gap-1">
        United Kingdom | English <span className="text-[10px]">▼</span>
      </span>
    </div>
    <div className="flex items-center mb-4">
      <span className="texts_13_regular text-second w-[80px] shrink-0">
        Currency
      </span>
      <span className="texts_13_regular text-head flex items-center gap-1">
        $ USD <span className="text-[10px]">▼</span>
      </span>
    </div>
    <div className="flex items-center gap-8">
      {socialIcons.map((s) => (
        <Link
          key={s.id}
          href={s.link}
          className="text-[15px] text-head hover:text-second transition-colors"
        >
          <s.icon />
        </Link>
      ))}
    </div>
  </div>
);

// WOMEN / MEN / KIDS tab pills
const TabRow = ({ activeTab, onTabChange }) => (
  <div className="flex items-center px-5 gap-2 pt-6 pb-5 ">
    {navTabsData.map((tab) => (
      <button
        key={tab.id}
        onClick={() => onTabChange?.(tab.tab)}
        className={`texts_15_medium px-3 py-[5px] rounded-[4px] tracking-[0.5px] transition-colors cursor-pointer ${
          activeTab === tab.tab
            ? "bg-head text-white"
            : "text-head hover:bg-secondbg"
        }`}
      >
        {tab.tab}
      </button>
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// NavbarMobile
// ─────────────────────────────────────────────────────────────────────────────

const NavbarMobile = () => {
  const { navIconItems } = allIcons;
  const { navLogo } = allImages;
  // add to cart korle aita diye data dhorbe
const { cartItems } = useCartStore();
const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);
  const [panel, setPanel] = useState("main");
  const [isCartOpen, setIsCartOpen] = useState(false); // Cart state

  // SHOP state
  const [activeTab, setActiveTab] = useState(navTabsData[0].tab);
  const [activeCategory, setActiveCategory] = useState(null);

  // JOURNAL state
  const [activeMegaItem, setActiveMegaItem] = useState(null);

  // SIMPLE state
  const [activeSimpleNav, setActiveSimpleNav] = useState(null);

  const currentTabData = navTabsData.find((t) => t.tab === activeTab);

  // ── Panel position helper ──────────────────────────────────────────────────
  const pos = (target) => {
    if (panel === target) return "translate-x-0";

    const rightOf = {
      main: ["shop", "shopSub", "journal", "simple"],
      shop: ["shopSub"],
      shopSub: [],
      journal: [],
      simple: [],
    };

    if (rightOf[panel]?.includes(target)) return "translate-x-full";
    return "-translate-x-full";
  };

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleOpen = () => {
    setIsOpen(true);
    setPanel("main");
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setPanel("main");
      setActiveSimpleNav(null);
      setActiveCategory(null);
      setActiveMegaItem(null);
      setActiveTab(navTabsData[0].tab);
    }, 310);
  };

  // Cart handlers
  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const handleNavItemClick = (item) => {
    if (item.label === "SHOP") {
      setPanel("shop");
    } else if (item.hasMegaMenu && item.megaMenuData) {
      setActiveMegaItem(item);
      setPanel("journal");
    } else if (item.hasDropdown) {
      setActiveSimpleNav(item);
      setPanel("simple");
    }
    // direct route items (HOME, COLLECTION, LOOKBOOK) — handled by Link below
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setPanel("shopSub");
  };

  const handleBack = () => {
    if (panel === "shopSub") setPanel("shop");
    else if (panel === "shop" || panel === "journal" || panel === "simple")
      setPanel("main");
  };

  // ── Helper: is this item a direct link (no sub-panel needed)? ──────────────
  const isDirectLink = (item) =>
    !item.hasDropdown && !item.hasMegaMenu && item.path;

  return (
    <>
      {/* ── Top Nav Bar ────────────────────────────────────────────────── */}
      <nav className="py-[21px]">
        <Container>
          <div className="flex items-center justify-between">
            <button
              onClick={handleOpen}
              className="text-[28px] text-head cursor-pointer"
            >
              {navIconItems[4].icon}
            </button>
            <Images
              imgAlt="mobile-nav"
              imgSrc={navLogo}
              className="w-[111px] h-[27px]"
            />
            <button
              onClick={handleCartOpen}
              className="relative cursor-pointer pr-[10px]"
            >
              <span className="text-[26px] text-head">
                {navIconItems[3].icon}
              </span>
              <span className="absolute bg-third w-[18px] h-[18px] flex items-center justify-center text-[11px] font-medium text-white rounded-full bottom-[-6px] right-[2px]">
                {cartCount}
              </span>
            </button>
          </div>
        </Container>
      </nav>

      {/* ── Menu Drawer Backdrop ───────────────────────────────────────────────────── */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black/30 z-[998] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Menu Drawer ─────────────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 w-[280px] h-full bg-white z-[999] overflow-hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ════ PANEL 1 — MAIN NAV ════════════════════════════════════════ */}
        <div
          className={`absolute inset-0 flex flex-col transition-transform duration-300 ease-in-out ${pos("main")}`}
        >
          <DrawerHeader
            onClose={handleClose}
            navLogo={navLogo}
            cartBadge={navIconItems[3].badge}
            onCartClick={handleCartOpen}
          />
          <DrawerSearch />

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {navItems.map((item, idx) =>
              isDirectLink(item) ? (
                // ── Direct route: HOME, COLLECTION, LOOKBOOK ──
                <Link
                  key={idx}
                  href={item.path}
                  onClick={handleClose}
                  className="w-full flex items-center justify-between px-5 bg-transparent text-left"
                >
                  <span className="texts_16_medium leading-[55px] text-head tracking-[0.5px] relative after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[9px] after:left-0 hover:after:w-[60%] after:duration-500 after:ease-in-out">
                    {item.label}
                  </span>
                </Link>
              ) : (
                // ── Sub-panel items: SHOP, JOURNAL, PAGES ──
                <button
                  key={idx}
                  onClick={() => handleNavItemClick(item)}
                  className="w-full flex items-center justify-between px-5 bg-transparent cursor-pointer text-left"
                >
                  <span className="texts_16_medium leading-[55px] text-head tracking-[0.5px] relative after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[9px] after:left-0 hover:after:w-[60%] after:duration-500 after:ease-in-out">
                    {item.label}
                  </span>
                  <IoChevronForward className="text-[16px] text-head shrink-0" />
                </button>
              ),
            )}
          </div>

          <DrawerFooter />
        </div>

        {/* ════ PANEL 2 — SHOP (tabs + category list) ════════════════════ */}
        <div
          className={`absolute inset-0 flex flex-col transition-transform duration-300 ease-in-out ${pos("shop")}`}
        >
          <DrawerHeader
            onClose={handleClose}
            navLogo={navLogo}
            cartBadge={navIconItems[3].badge}
            onCartClick={handleCartOpen}
          />
          <DrawerSearch />
          <TabRow activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {currentTabData?.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat)}
                className="w-full flex items-center justify-between px-5 h-[45px] bg-transparent cursor-pointer text-left"
              >
                <span
                  className={`texts_14_medium relative after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[0px] after:left-0 hover:after:w-[60%] after:duration-500 after:ease-in-out tracking-[0.3px] ${
                    cat.isActive ? "font-medium" : ""
                  } ${cat.isRed ? "text-red" : "text-head"}`}
                >
                  {cat.name}
                </span>
                <IoChevronForward className="text-[14px] text-second shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* ════ PANEL 3 — SHOP SUB-LINKS ═════════════════════════════════ */}
        <div
          className={`absolute inset-0 flex flex-col transition-transform duration-300 ease-in-out ${pos("shopSub")}`}
        >
          <DrawerHeader
            onClose={handleClose}
            navLogo={navLogo}
            cartBadge={navIconItems[3].badge}
            onCartClick={handleCartOpen}
          />
          <DrawerSearch />
          <TabRow activeTab={activeTab} />

          <button
            onClick={handleBack}
            className="w-full flex items-center gap-2 px-5 h-[50px] bg-transparent cursor-pointer text-left"
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
                className="flex items-center px-5 h-[46px] texts_14_regular text-head"
              >
                <span className="relative after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[0px] after:left-0 hover:after:w-[60%] after:duration-500 after:ease-in-out">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ════ PANEL 4 — JOURNAL (grouped megaMenuData) ═════════════════ */}
        <div
          className={`absolute inset-0 flex flex-col transition-transform duration-300 ease-in-out ${pos("journal")}`}
        >
          <DrawerHeader
            onClose={handleClose}
            navLogo={navLogo}
            cartBadge={navIconItems[3].badge}
            onCartClick={handleCartOpen}
          />
          <DrawerSearch />

          <button
            onClick={handleBack}
            className="w-full flex items-center gap-2 px-5 h-[52px] pt-4 pb-2 border-b border-footer bg-transparent cursor-pointer text-left"
          >
            <IoChevronBack className="text-lg text-head shrink-0" />
            <span className="texts_16_medium leading-[45px] text-head tracking-[0.5px]">
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
                    className="flex items-center px-5 h-[44px] texts_13_regular"
                  >
                    <span className="relative after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[-2px] after:left-0 hover:after:w-[60%] after:duration-500 after:ease-in-out">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ════ PANEL 5 — SIMPLE DROPDOWN (PAGES etc.) ═══════════════════ */}
        <div
          className={`absolute inset-0 flex flex-col transition-transform duration-300 ease-in-out ${pos("simple")}`}
        >
          <DrawerHeader
            onClose={handleClose}
            navLogo={navLogo}
            cartBadge={navIconItems[3].badge}
            onCartClick={handleCartOpen}
          />
          <DrawerSearch />

          <button
            onClick={handleBack}
            className="w-full flex items-center gap-2 px-5 h-[52px] border-b border-footer bg-transparent cursor-pointer text-left"
          >
            <IoChevronBack className="text-[16px] text-head shrink-0" />
            <span className="texts_16_medium text-head leading-[45px] tracking-[0.5px]">
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
                <span className="relative leading-[45px] after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[7px] after:left-0 hover:after:w-[60%] after:duration-500 after:ease-in-out">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          <DrawerFooter />
        </div>
      </div>

      {/* ── Cart Backdrop ───────────────────────────────────────────────────── */}
      <div
        onClick={handleCartClose}
        className={`fixed inset-0 bg-black/30 z-[1000] transition-opacity duration-300 ${
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Cart Drawer (Right Side) ─────────────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-[1001] transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <AddToCart unMount={handleCartClose} />
      </div>
    </>
  );
};

export default NavbarMobile;
