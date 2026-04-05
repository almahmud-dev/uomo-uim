"use client";
import PropTypes from "prop-types";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const SOCIAL_LINKS = [
  { id: 1, icon: FaFacebookF,  href: "https://www.facebook.com",  label: "Facebook"  },
  { id: 2, icon: FaTwitter,    href: "https://www.twitter.com",   label: "Twitter"   },
  { id: 3, icon: FaInstagram,  href: "https://www.instagram.com", label: "Instagram" },
  { id: 4, icon: FaYoutube,    href: "https://www.youtube.com",   label: "YouTube"   },
  { id: 5, icon: FaPinterestP, href: "https://www.pinterest.com", label: "Pinterest" },
];

const DrawerFooter = ({ user, onLogout, onLoginClick }) => {
  return (
    <div className="px-5 pt-7.25 pb-5 border-t border-footer">
      {/* Auth */}
      {user ? (
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-secondbg border border-footer flex items-center justify-center shrink-0">
              <span className="text-sm font-medium text-head">
                {(user.displayName || user.email)?.[0]?.toUpperCase()}
              </span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="texts_14_medium text-head tracking-[0.3px] truncate">
                {user.displayName || "My Account"}
              </span>
              <span className="text-[12px] text-second truncate">{user.email}</span>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="w-full bg-head text-white text-[13px] font-medium tracking-widest py-2.5 hover:bg-[#DB4444] transition-colors"
          >
            LOGOUT
          </button>
        </div>
      ) : (
        <button
          onClick={onLoginClick}
          className="flex items-center gap-2.5 mb-4 cursor-pointer"
        >
          <FaRegUser className="text-[16px] text-head" />
          <span className="texts_14_medium text-head tracking-[0.5px]">LOGIN</span>
        </button>
      )}

      {/* Region */}
      <div className="flex items-center mb-2.5">
        <span className="texts_14_regular text-second w-20 shrink-0">Language</span>
        <span className="texts_13_regular text-head flex items-center gap-1">
          United Kingdom | English <span className="text-[10px]">▼</span>
        </span>
      </div>
      <div className="flex items-center mb-4">
        <span className="texts_13_regular text-second w-20 shrink-0">Currency</span>
        <span className="texts_13_regular text-head flex items-center gap-1">
          $ USD <span className="text-[10px]">▼</span>
        </span>
      </div>

      {/* Social */}
      <div className="flex items-center gap-8">
        {SOCIAL_LINKS.map(({ id, icon: Icon, href, label }) => (
          <Link
            key={id}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-head hover:text-second transition-colors"
          >
            <Icon />
          </Link>
        ))}
      </div>
    </div>
  );
};

DrawerFooter.propTypes = {
  user:         PropTypes.object,
  onLogout:     PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired,
};

DrawerFooter.defaultProps = {
  user: null,
};

export default DrawerFooter;