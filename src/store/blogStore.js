import { create } from "zustand";

const BASE_URL = "https://dev.to/api";
const PER_PAGE = 6;

// Tag → Dev.to tag mapping
const TAG_MAP = {
  all: "webdev",
  company: "productivity",
  fashion: "design",
  style: "css",
  trends: "javascript",
  beauty: "ux",
};

export const useBlogStore = create((set, get) => ({
  // ─── State ───────────────────────────────────────────
  articles: [],
  activeTag: "all",
  page: 1,
  loading: false,
  hasMore: true,
  total: 100,
  selectedArticle: null, // single blog detail
  detailLoading: false,
  detailError: null,

  TAGS: ["all", "company", "fashion", "style", "trends", "beauty"],

  // ─── Actions ─────────────────────────────────────────

  // Tag filter change kore reset kore new data anbe
  setActiveTag: async (tag) => {
    // ekoi tag bar bar click korle kichu e hobe na
    if (get().activeTag === tag) return;

    set({ activeTag: tag, articles: [], page: 1, hasMore: true });
    await get().fetchArticles(1, tag);
  },

  // Blog list fetch
  fetchArticles: async (pageNum, tag) => {
    const { loading } = get();
    if (loading) return;

    set({ loading: true });

    try {
      const devTag = TAG_MAP[tag] || "webdev";
      const url = `${BASE_URL}/articles?tag=${devTag}&page=${pageNum}&per_page=${PER_PAGE}`;
      const res = await fetch(url);

      if (!res.ok) throw new Error("API error");

      const data = await res.json();

      set((state) => ({
        articles: pageNum === 1 ? data : [...state.articles, ...data],
        page: pageNum,
        hasMore: data.length === PER_PAGE,
        loading: false,
      }));
    } catch (err) {
      console.error("Blog fetch error:", err);
      set({ loading: false });
    }
  },

  // Show More button
  loadMore: async () => {
    const { page, activeTag, hasMore, loading } = get();
    if (!hasMore || loading) return;
    await get().fetchArticles(page + 1, activeTag);
  },

  // Single article fetch (detail page)
  fetchArticleById: async (id) => {
    // Already loaded? Skip re-fetch
    const { selectedArticle } = get();
    if (selectedArticle?.id === Number(id)) return;

    set({ detailLoading: true, detailError: null, selectedArticle: null });

    try {
      const res = await fetch(`${BASE_URL}/articles/${id}`);
      if (!res.ok) throw new Error("Article not found");
      const data = await res.json();
      set({ selectedArticle: data, detailLoading: false });
    } catch (err) {
      set({ detailError: err.message, detailLoading: false });
    }
  },

  // Detail page theke ber hole clear korar jonno:
  clearSelectedArticle: () => set({ selectedArticle: null }),
}));
