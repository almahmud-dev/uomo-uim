import ShopSinglePg from "@/page/ShopSinglePg";

export default async function ShopSinglePage({ params }) {
  const { id } = await params;
  return <ShopSinglePg id={id} />;
}