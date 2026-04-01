// ============================================================
// ShopMegaMenu.jsx
// Desktop Navbar এ "SHOP" hover korle je boro mega menu
// dekhabe. Categories columns + right side featured image
// ============================================================

import Link from "next/link";
import Images from "@/component/common/Images";
import Container from "@/component/common/Container";
import Button from "@/component/common/Button";

const NavDownImg = "/assets/images/nav-dropImage.png";

const linkClass =
  "texts_14_regular text-head leading-8.75! w-fit relative after:absolute after:content-[''] after:w-[0%] after:h-0.5 after:bg-head after:bottom-1.25 after:left-0 hover:after:w-[50%] after:duration-500 after:ease-in-out";

const ShopMegaMenu = ({ megaMenuData }) => {
  return (
    <div className="bg-white absolute w-full top-full shadow-[0_10px_25px_-10px_rgba(0,0,0,0.18)] left-0">
      <Container>
        <div className="border-t border-footer pt-10 pb-11 grid grid-cols-12">
          {/* ---- Left: Category columns ---- */}
          <div className="col-span-9 grid grid-cols-6">
            {/* Column 1: first 2 groups */}
            <div>
              {[0, 1].map((i) => (
                <div key={i} className={i === 1 ? "mt-7.25" : ""}>
                  <p className="texts_14_medium text-second pb-3">
                    {megaMenuData[i]?.title}
                  </p>
                  <ul>
                    {megaMenuData[i]?.links.map((link, idx) => (
                      <li key={idx} className={linkClass}>
                        <Link href={link.link}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column 2: 3rd group */}
            <div className="col-span-2 flex justify-center">
              <div>
                <p className="texts_14_medium text-second pb-3">
                  {megaMenuData[2]?.title}
                </p>
                <ul>
                  {megaMenuData[2]?.links.map((link, idx) => (
                    <li key={idx} className={linkClass}>
                      <Link href={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3: 4th group (2 sub-columns) */}
            <div className="col-span-3 grid grid-cols-2">
              <div className="flex justify-center">
                <div>
                  <p className="texts_14_medium text-second pb-3">
                    {megaMenuData[3]?.title}
                  </p>
                  <ul>
                    {megaMenuData[3]?.links.slice(0, 12).map((link, idx) => (
                      <li key={idx} className={linkClass}>
                        <Link href={link.link}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="ml-10 mt-10.25">
                <ul>
                  {megaMenuData[3]?.links.slice(12).map((link, idx) => (
                    <li key={idx} className={linkClass}>
                      <Link href={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ---- Right: Featured image ---- */}
          <div className="col-span-3 relative">
            <Images
              imgAlt="navdropDownImage"
              imgSrc={NavDownImg}
              className="w-102.5 h-112.5 object-cover"
            />
            <div className="absolute bottom-7.5 left-7.5">
              <h4 className="text-[28px] font-medium text-head">
                NEW <br /> HORIZONS
              </h4>
              <Button
                btnText="SHOP NOW"
                className="mt-0.5 relative after:absolute after:content-[''] after:w-[40%] after:h-0.5 after:bg-head after:-bottom-px after:left-0 hover:after:w-full after:duration-500 after:ease-in-out"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopMegaMenu;
