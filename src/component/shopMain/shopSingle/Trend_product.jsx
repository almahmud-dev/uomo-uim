"use client";
import Container from "@/component/common/Container";
import Product from "@/component/common/Product";
import useAllProduct from "@/customHook/useAllProduct";

const Trend_product = ({ category, currentId }) => {
  const { data, isLoading } = useAllProduct(8, 0, "", category);
  const products =
    data?.products?.filter((p) => p.id !== currentId).slice(0, 4) || [];
  // category na thakle render hobe na
  if (!category || isLoading) return null;

  if (products.length === 0) return null;

  return (
    <div className="mt-9.5 mb-25 hidden lg:block">
      <Container>
        <h3 className="head_26_regular text-head">
          RELATED <span className="head_26_bold">PRODUCTS</span>
        </h3>
        <div className="mt-8.5 flex gap-x-7.5">
          {products.map((p) => (
            <Product
              key={p.id}
              id={p.id}
              catagory={p.category}
              imgSrc={p.thumbnail}
              itemName={p.title}
              itemPrice={p.price}
              discountPrice={
                p.discountPercentage > 0
                  ? (p.price - (p.price * p.discountPercentage) / 100).toFixed(
                      2,
                    )
                  : null
              }
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Trend_product;
