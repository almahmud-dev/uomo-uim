import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  total: 0,
  loading: false,

  fetchProducts: async ({ limit = 12, skip = 0, q = "", category = "" } = {}) => {
    set({ loading: true });

    const params = new URLSearchParams({ limit, skip });
    if (q) params.set("q", q);
    if (category) params.set("category", category);

    const res = await fetch(`/api/products?${params}`);
    const data = await res.json();

    set({
      products: data.products,
      total: data.total,
      loading: false,
    });
  },
}));