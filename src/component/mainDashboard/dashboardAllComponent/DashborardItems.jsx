'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { label: "MY ACCOUNT",      path: "/dashboard" },
  { label: "ORDERS",          path: "/dashboard/order" },
  { label: "DOWNLOADS",       path: "/dashboard/downloads" },
  { label: "ADDRESSES",       path: "/dashboard/address" },
  { label: "ACCOUNT DETAILS", path: "/dashboard/account-details" },
  { label: "WISHLIST",        path: "/dashboard/wishlist" },
  { label: "LOGOUT",          path: "/logout" },
];

const getHeading = (pathname) => {
  const matched = menuItems.find((item) => pathname === item.path);
  return matched ? matched.label : "My Account";
};

const DashborardItems = ({ onClose }) => {
  const pathname = usePathname();
  const heading = getHeading(pathname);

  return (
    <div className="shrink-0">
      <h2 className="font-bold text-[28px] lg:text-[35px] text-[rgb(34,34,34)] mb-6 lg:mb-9">
        {heading}
      </h2>
      <ul className="flex flex-col gap-2 lg:gap-3.5">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                href={item.path}
                onClick={onClose}
                className="block relative"
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "40px",
                  color: isActive ? "#C32929" : "#222",
                }}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#C32929]" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashborardItems;
