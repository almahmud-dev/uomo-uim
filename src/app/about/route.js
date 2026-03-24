export async function GET() {
  return Response.json({
    heroImage: "/assets/images/about/about.png",
    companyImage: "/assets/images/about/about2.png",

    brands: [
      { src: "/assets/images/about/mango.png",   alt: "Mango" },
      { src: "/assets/images/about/zara.png",    alt: "Zara" },
      { src: "/assets/images/about/reebok.png",  alt: "Reebok" },
      { src: "/assets/images/about/asos.png",    alt: "ASOS" },
      { src: "/assets/images/about/stradi.png",  alt: "Stradivarius" },
      { src: "/assets/images/about/adi.png",     alt: "Adidas" },
      { src: "/assets/images/about/bershka.png", alt: "Bershka" },
    ],
  });
}