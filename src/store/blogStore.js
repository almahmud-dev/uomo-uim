// src/store/blogStore.js

import { create } from "zustand";
import {
  fetchBlogList,
  fetchBlogById,
  BLOG_PER_PAGE,
  BLOG_TAGS,
} from "@/app/api/blog/blogApi"; //  api folder theke import

export const useBlogStore = create((set, get) => ({
  // ─── State ───────────────────────────────────────────────────────
  articles:        [],
  activeTag:       "all",
  page:            1,
  loading:         false,
  hasMore:         true,
  total:           100,
  cachedPages:     {},   // { "all_1": [...], "fashion_2": [...] }
  selectedArticle: null,
  detailLoading:   false,
  detailError:     null,
  cachedArticles:  {},   // { 123: {...}, 456: {...} }
  TAGS:            BLOG_TAGS,

  // ─── Tag change ──────────────────────────────────────────────────
  setActiveTag: async (tag) => {
    if (get().activeTag === tag) return;

    const cacheKey = `${tag}_1`;
    const cached   = get().cachedPages[cacheKey];

    if (cached) {
      // ✅ Cache hit — API call নেই
      set({
        activeTag: tag,
        articles:  cached,
        page:      1,
        hasMore:   cached.length === BLOG_PER_PAGE,
      });
      return;
    }

    set({ activeTag: tag, articles: [], page: 1, hasMore: true });
    await get().fetchArticles(1, tag);
  },

  // ─── Fetch articles (cache-first) ────────────────────────────────
  fetchArticles: async (pageNum, tag) => {
    const { loading, cachedPages } = get();
    if (loading) return;

    const cacheKey = `${tag}_${pageNum}`;

    if (cachedPages[cacheKey]) {
      // ✅ Cache hit
      const cached = cachedPages[cacheKey];
      set((state) => ({
        articles: pageNum === 1 ? cached : [...state.articles, ...cached],
        page:     pageNum,
        hasMore:  cached.length === BLOG_PER_PAGE,
      }));
      return;
    }

    // Cache miss — API call
    set({ loading: true });
    try {
      const data = await fetchBlogList(tag, pageNum); // ← blogApi এর function

      set((state) => ({
        cachedPages: { ...state.cachedPages, [cacheKey]: data },
        articles:    pageNum === 1 ? data : [...state.articles, ...data],
        page:        pageNum,
        hasMore:     data.length === BLOG_PER_PAGE,
        loading:     false,
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

  // ─── Single article (cache-first) ────────────────────────────────
  fetchArticleById: async (id) => {
    const { cachedArticles } = get();
    const numId = Number(id);

    if (cachedArticles[numId]) {
      // ✅ Cache hit
      set({ selectedArticle: cachedArticles[numId], detailLoading: false });
      return;
    }

    set({ detailLoading: true, detailError: null, selectedArticle: null });
    try {
      const data = await fetchBlogById(id); // ← blogApi এর function

      set((state) => ({
        cachedArticles:  { ...state.cachedArticles, [numId]: data },
        selectedArticle: data,
        detailLoading:   false,
      }));
    } catch (err) {
      set({ detailError: err.message, detailLoading: false });
    }
  },

  clearSelectedArticle: () => set({ selectedArticle: null }),
}));
