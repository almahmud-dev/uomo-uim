// ============================================================
// NavbarLg.jsx
// Desktop (lg+) Navbar er layout।
// On the left side Logo + Nav links, on the right side Icons।
// All logic in separate components:
//   ShopMegaMenu   → SHOP hover menu
//   PagesDropdown  → PAGES hover dropdown (login hide including)
//   NavIcons       → Account/Cart/Search icons (auth logic including)
// ============================================================

"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "@/component/common/Container";
import { navItems } from "@/helper/projectArrayObj";
import ShopMegaMenu from "./components/ShopMegaMenu";
import PagesDropdown from "./components/PagesDropdown";
import NavIcons from "./components/NavIcons";
import { CldImage } from "next-cloudinary";
const NavbarLg = () => {
  const [hoverItem, setHoverItem] = useState(null);

  return (
    <nav className="pt-7.25 pb-4.75 relative z-999!">
      <Container>
        <div className="flex justify-between items-center">
          {/* ---- Left: Logo + Nav links ---- */}
          <div className="flex items-center gap-x-14">
            <Link href="/">
              <CldImage
                src="navicon_is7dpu"
                alt="uomo-logo"
                width={400}
                height={800}
                className="w-27.75 h-6.75"
              />
            </Link>

            <ul className="flex gap-x-9.25">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoverItem(item.label)}
                  onMouseLeave={() => setHoverItem(null)}
                >
                  <Link
                    href={item.path}
                    className="texts_14_medium text-head relative after:absolute after:content-[''] after:w-[0%] after:h-[1.5px] after:bg-head after:bottom-4.75 after:left-0 hover:after:w-[60%] after:duration-500 after:ease-in-out pb-6"
                  >
                    {item.label}
                  </Link>

                  {/* SHOP mega menu */}
                  {item.label === "SHOP" &&
                    item.hasMegaMenu &&
                    hoverItem === "SHOP" && (
                      <ShopMegaMenu megaMenuData={item.megaMenuData} />
                    )}

                  {/* JOURNAL mega menu — inline (small, reuse nai) */}
                  {item.label === "JOURNAL" &&
                    item.hasMegaMenu &&
                    hoverItem === "JOURNAL" && (
                      <div className="shadow-[0_10px_25px_-10px_rgba(0,0,0,0.18)] bg-white absolute top-[102%] w-198.75 left-1/2 translate-x-[-36%] pt-10 pb-8 px-14.75 grid grid-cols-3">
                        {item.megaMenuData?.map((group, gIdx) => (
                          <div
                            key={gIdx}
                            className={
                              gIdx === 1
                                ? "flex justify-center"
                                : gIdx === 2
                                  ? "flex justify-end"
                                  : ""
                            }
                          >
                            <div>
                              <p className="texts_14_medium text-second pb-3">
                                {group.title}
                              </p>
                              <ul>
                                {group.links.map((link, lIdx) => (
                                  <li
                                    key={lIdx}
                                    className="texts_14_regular text-head leading-8.75! w-fit relative after:absolute after:content-[''] after:w-[0%] after:h-0.5 after:bg-head after:bottom-1.25 after:left-0 hover:after:w-[50%] after:duration-500 after:ease-in-out"
                                  >
                                    <Link href={link.link}>{link.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                  {/* PAGES dropdown */}
                  {item.label === "PAGES" &&
                    item.dropdownData &&
                    hoverItem === "PAGES" && (
                      <PagesDropdown dropdownData={item.dropdownData} />
                    )}
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Right: Icons (Search, Account, Wishlist, Cart) ---- */}
          <NavIcons />
        </div>
      </Container>
    </nav>
  );
};

export default NavbarLg;
