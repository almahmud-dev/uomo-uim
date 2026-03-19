import allImages from "./imagesProvider";

//for images
const { addtocart } = allImages;

const navItems = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "SHOP",
    path: "/shop",
    hasMegaMenu: true,
    megaMenuData: [
      {
        title: "SHOP PAGES",
        links: [
          { name: "Default", link: "/shop" },
          { name: "Topbar", link: "/shop" },
          { name: "Collapse", link: "/shop" },
          { name: "Simple", link: "/shop" },
          { name: "Masonry", link: "/shop" },
        ],
      },
      {
        title: "PRODUCT PAGES",
        links: [
          { name: "Default", link: "/shop" },
          { name: "Images Left", link: "/shop" },
          { name: "Image Grid", link: "/shop" },
          { name: "Image Slider", link: "/shop" },
          { name: "Images Stacked", link: "/shop" },
        ],
      },
      {
        title: "OTHER PAGES",
        links: [
          { name: "Collection", link: "/collection" },
          { name: "LookBook", link: "/lookbook" },
          { name: "Categories Page", link: "/categories" },
          { name: "Shopping Cart", link: "/cart" },
          { name: "Wishlist", link: "/dashboard/wishlist" },
          { name: "Order Tracking", link: "/cart/order-tracking" },
          { name: "Checkout", link: "/cart/shoping-and-checkout" },
          { name: "Checkout — 2 Columns", link: "/cart/shoping-and-checkout" },
        ],
      },
      {
        title: "ELEMENTS",
        links: [
          { name: "Accordion", link: "/shop" },
          { name: "Pricing Table", link: "/shop" },
          { name: "Google Maps", link: "/shop" },
          { name: "Message Box", link: "/shop" },
          { name: "Progress Bars", link: "/shop" },
          { name: "Charts", link: "/shop" },
          { name: "Icon Box", link: "/shop" },
          { name: "Product Tabs", link: "/shop" },
          { name: "Products Grid", link: "/shop"},
          { name: "Tabs", link: "/shop" },
          { name: "Video Players", link: "/shop" },
          { name: "Team", link: "/shop" },
          { name: "Buttons", link: "/shop" },
          { name: "Testimonials", link: "/shop" },
          { name: "Social Icons", link: "/shop" },
          { name: "Blog Posts", link: "/elements/blog-posts" },
        ],
      },
    ],
  },
  {
    label: "COLLECTION",
    path: "/collection",
  },
  {
    label: "JOURNAL",
    path: "#",
    hasMegaMenu: true,
    megaMenuData: [
      {
        title: "BLOG STYLES",
        links: [
          { name: "Alternative", link: "/elements/blog-posts" },
          { name: "Small images", link: "/elements/blog-posts" },
          { name: "Blog chess", link: "/elements/blog-posts" },
          { name: "Masonry grid", link: "/elements/blog-posts" },
          { name: "Infinit scrolling", link: "/elements/blog-posts" },
          { name: "With background", link: "/elements/blog-posts" },
          { name: "Blog flat", link: "/elements/blog-posts"},
          { name: "Default flat", link: "/elements/blog-posts" },
          { name: "Blog mask", link: "/elements/blog-posts"},
        ],
      },
      {
        title: "SINGLE POST",
        links: [
          { name: "Standard Post", link: "/elements/blog-posts" },
          { name: "Image Post", link: "/elements/blog-posts"},
          { name: "Video Post", link: "/elements/blog-posts" },
          { name: "Audio Post", link: "/elements/blog-posts" },
          { name: "Gallery Post", link: "/elements/blog-posts" },
        ],
      },
      {
        title: "NAVIGATION",
        links: [
          { name: "Simple", link: "/elements/blog-posts" },
          { name: "Image Background", link: "/elements/blog-posts" },
        ],
      },
    ],
  },
  {
    label: "LOOKBOOK",
    path: "/lookbook",
  },
  {
    label: "PAGES",
    path: "#",
    hasDropdown: true,
    dropdownData: [
      { name: "About", link: "/about" },
      { name: "My Account", link: "/dashboard" },
      { name: "Login / Register", link: "/login-register" },
      { name: "Contact Us", link: "/contact" },
      { name: "Store Locator", link: "/store-locator" },
      { name: "FAQ", link: "/faq" },
      { name: "Coming Soon", link: "/coming-soon" },
      { name: "404", link: "/404" },
    ],
  },
];

const quickLinks = {
  title: "QUICKLINKS",
  links: [
    { id: 1, name: "New Arrivals", link: "/new-arrivals" },
    { id: 2, name: "Dresses", link: "/dresses" },
    { id: 3, name: "Accessories", link: "/accessories" },
    { id: 4, name: "Footwear", link: "/footwear" },
    { id: 5, name: "Sweatshirt", link: "/sweatshirt" },
  ],
};

const cartItems = [
  {
    id: 1,
    name: "Zessi Dresses",
    color: "Yellow",
    size: "L",
    quantity: 4,
    price: 99,
    image: addtocart,
  },
  {
    id: 2,
    name: "Kirby T-Shirt",
    color: "Yellow",
    size: "L",
    quantity: 4,
    price: 99,
    image: addtocart,
  },
  {
    id: 3,
    name: "Cableknit Shawl",
    color: "Yellow",
    size: "L",
    quantity: 4,
    price: 99,
    image: addtocart,
  },
];

const navTabsData = [
  {
    id: 1,
    tab: "WOMEN",
    categories: [
      { id: 1, name: "WOMEN", link: "/shop", isActive: true },
      { id: 2, name: "MAN", link: "/shop" },
      { id: 3, name: "KIDS", link: "/shop" },
      { id: 4, name: "HOME", link: "/shop" },
      { id: 5, name: "COLLECTION", link: "/shop" },
      { id: 6, name: "SALE UP TO 50% OFF", link: "/shop", isRed: true },
      { id: 7, name: "NEW", link: "/shop" },
      { id: 8, name: "SHOES", link: "/shop" },
      { id: 9, name: "ACCESSORIES", link: "/shop" },
      { id: 10, name: "JOIN LIFE", link: "/shop" },
      { id: 11, name: "#UOMOSTYLE", link: "/shop" },
    ],
    subLinks: [
      { id: 1, name: "New", link: "/shop" },
      { id: 2, name: "Best Sellers", link: "/shop" },
      { id: 3, name: "Collaborations®", link: "/shop" },
      { id: 4, name: "Sets", link: "/shop" },
      { id: 5, name: "Denim", link: "/shop" },
      { id: 6, name: "Jackets & Coats", link: "/shop" },
      { id: 7, name: "Overshirts", link: "/shop" },
      { id: 8, name: "Trousers", link: "/shop" },
      { id: 9, name: "Jeans", link: "/shop" },
      { id: 10, name: "Dresses", link: "/shop" },
      { id: 11, name: "Sweatshirts and Hoodies", link: "/shop" },
      { id: 12, name: "T-shirts & Tops", link: "/shop" },
      { id: 13, name: "Shirts & Blouses", link: "/shop" },
      { id: 14, name: "Shorts and Bermudas", link: "/shop" },
      { id: 15, name: "Shoes", link: "/shop" },
      { id: 16, name: "Accessories", link: "/shop" },
      { id: 17, name: "Bags", link: "/shop" },
      { id: 18, name: "Gift Card", link: "/shop" },
    ],
  },
  {
    id: 2,
    tab: "MEN",
    categories: [
      { id: 1, name: "MEN", link: "/shop", isActive: true },
      { id: 2, name: "WOMEN", link: "/shop" },
      { id: 3, name: "KIDS", link: "/shop" },
      { id: 4, name: "HOME", link: "/shop" },
      { id: 5, name: "COLLECTION", link: "/shop" },
      { id: 6, name: "SALE UP TO 50% OFF", link: "/shop", isRed: true },
      { id: 7, name: "NEW", link: "/shop" },
      { id: 8, name: "SHOES", link: "/shop" },
      { id: 9, name: "ACCESSORIES", link: "/shop" },
      { id: 10, name: "JOIN LIFE", link: "/shop" },
      { id: 11, name: "#UOMOSTYLE", link: "/shop" },
    ],
    subLinks: [
      { id: 1, name: "New", link: "/shop" },
      { id: 2, name: "Best Sellers", link: "/shop" },
      { id: 3, name: "Collaborations®", link: "/shop" },
      { id: 4, name: "Sets", link: "/shop" },
      { id: 5, name: "Denim", link: "/shop" },
      { id: 6, name: "Jackets & Coats", link: "/shop" },
      { id: 7, name: "Overshirts", link: "/shop" },
      { id: 8, name: "Trousers", link: "/shop" },
      { id: 9, name: "Jeans", link: "/shop" },
      { id: 10, name: "T-shirts & Tops", link: "/shop" },
      { id: 11, name: "Shirts & Blouses", link: "/shop" },
      { id: 12, name: "Shorts and Bermudas", link: "/shop" },
      { id: 13, name: "Shoes", link: "/shop" },
      { id: 14, name: "Accessories", link: "/shop" },
      { id: 15, name: "Bags", link: "/shop" },
      { id: 16, name: "Gift Card", link: "/shop" },
    ],
  },
  {
    id: 3,
    tab: "KIDS",
    categories: [
      { id: 1, name: "KIDS", link: "/shop", isActive: true },
      { id: 2, name: "WOMEN", link: "/shop" },
      { id: 3, name: "MEN", link: "/shop" },
      { id: 4, name: "HOME", link: "/shop" },
      { id: 5, name: "COLLECTION", link: "/shop" },
      { id: 6, name: "SALE UP TO 50% OFF", link: "/shop", isRed: true },
      { id: 7, name: "NEW", link: "/shop" },
      { id: 8, name: "SHOES", link: "/shop" },
      { id: 9, name: "ACCESSORIES", link: "/shop" },
      { id: 10, name: "JOIN LIFE", link: "/shop" },
      { id: 11, name: "#UOMOSTYLE", link: "/shop" },
    ],
    subLinks: [
      { id: 1, name: "New", link: "/shop" },
      { id: 2, name: "Best Sellers", link: "/shop" },
      { id: 3, name: "Sets", link: "/shop" },
      { id: 4, name: "Jackets & Coats", link: "/shop" },
      { id: 5, name: "Trousers", link: "/shop" },
      { id: 6, name: "Jeans", link: "/shop" },
      { id: 7, name: "Dresses", link: "/shop" },
      { id: 8, name: "Sweatshirts and Hoodies", link: "/shop" },
      { id: 9, name: "T-shirts & Tops", link: "/shop" },
      { id: 10, name: "Shoes", link: "/shop" },
      { id: 11, name: "Accessories", link: "/shop" },
      { id: 12, name: "Gift Card", link: "/shop" },
    ],
  },
];

const footerData = {
  columns: [
    {
      title: "COMPANY",
      links: [
        { id: 1, name: "About Us", link: "/about" },
        { id: 2, name: "Careers", link: "#" },
        { id: 3, name: "Affiliates", link: "#" },
        { id: 4, name: "Blog", link: "/elements/blog-posts" },
        { id: 5, name: "Contact Us", link: "/contact" },
      ],
    },
    {
      title: "SHOP",
      links: [
        { id: 1, name: "New Arrivals", link: "/shop" },
        { id: 2, name: "Accessories", link: "/shop" },
        { id: 3, name: "Men", link: "/shop" },
        { id: 4, name: "Women", link: "/shop"},
        { id: 5, name: "Shop All", link: "/shop" },
      ],
    },
    {
      title: "HELP",
      links: [
        { id: 1, name: "Customer Service", link: "/contact" },
        { id: 2, name: "My Account", link: "/dashboard", isItalic: true },
        { id: 3, name: "Find a Store", link: "/store-locator" },
        { id: 4, name: "Legal & Privacy", link: "/elements/terms" },
        { id: 5, name: "Contact", link: "/contact" },
        { id: 6, name: "Gift Card", link: "#" },
      ],
    },
  ],
};

const shopList1 = [
  { id: 1, title: "#STAYHOME", value: "stayhome" },
  { id: 2, title: "NEW IN", value: "new-in" },
  { id: 3, title: "JACKETS", value: "jackets" },
  { id: 4, title: "HOODIES", value: "hoodies", active: true },
  { id: 5, title: "MEN", value: "men" },
  { id: 6, title: "WOMEN", value: "women" },
  { id: 7, title: "TROUSERS", value: "trousers" },
  { id: 8, title: "ACCESSORIES", value: "accessories" },
  { id: 9, title: "SHOES", value: "shoes" },
];

export { navItems, quickLinks, cartItems, navTabsData, footerData, shopList1 };
