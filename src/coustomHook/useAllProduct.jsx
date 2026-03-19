import { useQuery } from "@tanstack/react-query";

const useAllProduct = (limit = 20, skip = 0, search = "", category = "") => {
  return useQuery({
    queryKey: ["allproduct", limit, skip, search, category],
    queryFn: async () => {
      let url = `/api/products?limit=${limit}&skip=${skip}`;
      if (search) url += `&q=${search}`;
      if (category) url += `&category=${category}`;
      const res = await fetch(url);
      return res.json();
    },
  });
};

export default useAllProduct;