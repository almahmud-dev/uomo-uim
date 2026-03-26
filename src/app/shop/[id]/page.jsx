import ShopSinglePg from "@/page/ShopSinglePg";

export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      next: { revalidate: 3600 },
    });
    const product = await res.json();
    return {
      title: product?.title || "Product",
      description: product?.description || "View product details",
      openGraph: {
        title: product?.title || "Product",
        description: product?.description || "View product details",
        images: product?.thumbnail ? [{ url: product.thumbnail }] : [],
      },
    };
  } catch {
    return { title: "Product | Uomo" };
  }
}

export default async function ShopSinglePage({ params }) {
  const { id } = await params;
  return <ShopSinglePg id={id} />;
}
