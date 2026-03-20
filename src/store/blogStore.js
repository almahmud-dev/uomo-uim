import { create } from "zustand";

const BASE_URL = "https://dev.to/api";
const PER_PAGE = 6;

const TAG_MAP = {
  all: "webdev",
  company: "productivity",
  fashion: "design",
  style: "css",
  trends: "javascript",
  beauty: "ux",
};

export const useBlogStore = create((set, get) => ({
  // ─── State ───────────────────────────────────────────────────────
  articles: [],
  activeTag: "all",
  page: 1,
  loading: false,
  hasMore: true,
  total: 100,

  // ✅ Cache: { "all_1": [...], "all_2": [...], "fashion_1": [...] }
  // key = `${tag}_${page}` — একবার load হলে আর API call হবে না
  cachedPages: {},

  selectedArticle: null,
  detailLoading: false,
  detailError: null,
  // ✅ Single article cache: { 123: {...}, 456: {...} }
  cachedArticles: {},

  TAGS: ["all", "company", "fashion", "style", "trends", "beauty"],

  // ─── Tag change ──────────────────────────────────────────────────
  setActiveTag: async (tag) => {
    if (get().activeTag === tag) return;

    // Cache এ কি আছে এই tag এর page 1?
    const cacheKey = `${tag}_1`;
    const cached = get().cachedPages[cacheKey];

    if (cached) {
      // ✅ Cache hit — API call নেই, instant!
      set({ activeTag: tag, articles: cached, page: 1, hasMore: cached.length === PER_PAGE });
      return;
    }

    // Cache miss — fetch করো
    set({ activeTag: tag, articles: [], page: 1, hasMore: true });
    await get().fetchArticles(1, tag);
  },

  // ─── Fetch with cache check ───────────────────────────────────────
  fetchArticles: async (pageNum, tag) => {
    const { loading, cachedPages } = get();
    if (loading) return;

    const cacheKey = `${tag}_${pageNum}`;

    // ✅ এই page আগে load হয়েছে?
    if (cachedPages[cacheKey]) {
      const cached = cachedPages[cacheKey];
      set((state) => ({
        articles: pageNum === 1 ? cached : [...state.articles, ...cached],
        page: pageNum,
        hasMore: cached.length === PER_PAGE,
      }));
      return; // API call নেই!
    }

    // Cache miss — API call করো
    set({ loading: true });
    try {
      const devTag = TAG_MAP[tag] || "webdev";
      const url = `${BASE_URL}/articles?tag=${devTag}&page=${pageNum}&per_page=${PER_PAGE}`;
      const res  = await fetch(url);
      if (!res.ok) throw new Error("API error");
      const data = await res.json();

      set((state) => ({
        // ✅ নতুন data cache এ রাখো
        cachedPages: { ...state.cachedPages, [cacheKey]: data },
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

  // ─── Show More ───────────────────────────────────────────────────
  loadMore: async () => {
    const { page, activeTag, hasMore, loading } = get();
    if (!hasMore || loading) return;
    await get().fetchArticles(page + 1, activeTag);
  },

  // ─── Single article fetch (cache-first) ─────────────────────────
  fetchArticleById: async (id) => {
    const { cachedArticles } = get();
    const numId = Number(id);

    // ✅ Already cached?
    if (cachedArticles[numId]) {
      set({ selectedArticle: cachedArticles[numId], detailLoading: false });
      return;
    }

    set({ detailLoading: true, detailError: null, selectedArticle: null });
    try {
      const res  = await fetch(`${BASE_URL}/articles/${id}`);
      if (!res.ok) throw new Error("Article not found");
      const data = await res.json();

      set((state) => ({
        // ✅ Article cache এ রাখো
        cachedArticles: { ...state.cachedArticles, [numId]: data },
        selectedArticle: data,
        detailLoading: false,
      }));
    } catch (err) {
      set({ detailError: err.message, detailLoading: false });
    }
  },

  clearSelectedArticle: () => set({ selectedArticle: null }),
}));
