'use client';
import { useQuery } from "@tanstack/react-query";

const useAllProduct = () => {
  return useQuery({
    queryKey: ["allproduct"],
    queryFn: async () => {
      const res = await fetch("/api/products");
      return res.json();
    },
  });
};

export default useAllProduct;
