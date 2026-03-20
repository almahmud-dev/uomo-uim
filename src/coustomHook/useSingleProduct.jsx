import { useQuery } from "@tanstack/react-query";

const useSingleProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await fetch(`/api/products/${id}`);
      return res.json();
    },
    enabled: !!id,
  });
};

export default useSingleProduct;