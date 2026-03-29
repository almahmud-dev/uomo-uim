// ============================================================
// PagesDropdown.jsx
// Desktop Navbar এ "PAGES" hover করলে যে dropdown দেখায়।
//
// Auth Rule:
//   - Logged IN  → "Login / Register" লিংক লুকানো থাকে
//   - Logged OUT → সব লিংক দেখায়
// ============================================================

import Link from "next/link";
import useAuthStore from "@/store/authSlice";

const linkClass =
  "texts_14_regular text-head !leading-[35px] w-fit relative after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[5px] after:left-0 hover:after:w-[50%] after:duration-500 after:ease-in-out";

const PagesDropdown = ({ dropdownData }) => {
  const { user } = useAuthStore();

  return (
    <div className="shadow-[0_10px_25px_-10px_rgba(0,0,0,0.18)] bg-white absolute top-[102%] w-[260px] left-1/2 translate-x-[-28%] pt-[23px] pb-[17px] px-[30px]">
      <ul>
        {dropdownData?.map((item, index) => {
          // Logged in থাকলে "Login / Register" লিংক দেখাবে না
          if (user && item.link === "/login-register") return null;

          return (
            <li key={index} className={linkClass}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PagesDropdown;
