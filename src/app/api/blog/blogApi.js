// src/app/api/blog/blogApi.js

const BASE_URL = "https://dev.to/api";
const PER_PAGE = 6;

// Tag → Dev.to tag mapping
const TAG_MAP = {
  all:     "webdev",
  company: "productivity",
  fashion: "design",
  style:   "css",
  trends:  "javascript",
  beauty:  "ux",
};

// ─── Blog List ────────────────────────────────────────────────────
export const fetchBlogList = async (tag = "all", page = 1) => {
  const devTag = TAG_MAP[tag] || "webdev";
  const url = `${BASE_URL}/articles?tag=${devTag}&page=${page}&per_page=${PER_PAGE}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch blog list: ${res.status}`);

  return res.json(); // array of articles
};

// ─── Single Article ───────────────────────────────────────────────
export const fetchBlogById = async (id) => {
  const res = await fetch(`${BASE_URL}/articles/${id}`);
  if (!res.ok) throw new Error(`Article not found: ${res.status}`);

  return res.json(); // single article object
};

// ─── Constants (store ও use করতে পারবে) ─────────────────────────
export const BLOG_PER_PAGE = PER_PAGE;
export const BLOG_TAGS = ["all", "company", "fashion", "style", "trends", "beauty"];