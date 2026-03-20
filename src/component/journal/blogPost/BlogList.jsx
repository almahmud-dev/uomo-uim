'use client';
import Blog from "@/component/common/Blog";
import Container from "@/component/common/Container";
import React, { useEffect } from "react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import Button from "../../common/Button";
import { useBlogStore } from "@/store/blogStore"; // ← Zustand store

const BlogList = () => {
  const {
    articles,
    activeTag,
    loading,
    hasMore,
    total,
    TAGS,
    setActiveTag,
    fetchArticles,
    loadMore,
  } = useBlogStore();

  // প্রথমবার mount হলে data আনো (articles খালি থাকলে)
  useEffect(() => {
    if (articles.length === 0) {
      fetchArticles(1, activeTag);
    }
  }, []);

  const visibleItems = articles.length;
  const percentage   = Math.min((visibleItems / total) * 100, 100);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr)
      .toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })
      .toUpperCase();
  };

  return (
    <section className="py-12.5 lg:pt-22.5 pt-21.25 lg:pb-24.5">
      <Container>
        <h2 className="head_35_bold text-center md:text-start text-head pb-2.75">
          The Blog
        </h2>

        {/* ── Category Filter ── */}
        <div className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-10 pb-9 md:pb-12.5">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`texts_16_medium duration-500 relative cursor-pointer bg-transparent border-none
                after:content-[''] after:absolute after:bottom-0 after:left-0
                after:h-0.5 after:bg-head after:transition-all after:duration-400
                ${
                  activeTag === tag
                    ? "text-head after:w-[60%]"
                    : "text-gray-400 after:w-0 hover:text-head hover:after:w-[60%]"
                }`}
            >
              {tag.toUpperCase()}
            </button>
          ))}
        </div>

        {/* ── Skeleton Loader (প্রথমবার) ── */}
        {loading && articles.length === 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12.5 lg:gap-7.5 pb-12.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-video mb-5 rounded" />
                <div className="h-3 bg-gray-200 w-1/3 mb-3 rounded" />
                <div className="h-5 bg-gray-200 w-3/4 mb-3 rounded" />
                <div className="h-3 bg-gray-200 w-full mb-2 rounded" />
                <div className="h-3 bg-gray-200 w-2/3 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12.5 lg:gap-7.5 pb-12.5">
            {articles.map((article) => (
              <div key={article.id}>
                <Link href={`/elements/blog/${article.id}`}>
                  <Blog
                    imgSrc={
                      article.cover_image ||
                      article.social_image ||
                      "/assets/images/blogImg.png"
                    }
                    imgAlt={article.title}
                    author={`BY ${article.user?.name?.toUpperCase() || "ADMIN"}`}
                    date={formatDate(article.published_at)}
                    blogname={article.title}
                    blogdescription={article.description}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* ── Show More ── */}
        <div className="flex flex-col items-center w-full max-w-75 mx-auto uppercase">
          <p className="texts_14_medium text-black">
            Showing {visibleItems} of {total} Items
          </p>
          <Progress
            value={percentage}
            className="h-full w-full bg-[#E4E4E4] [&>div]:bg-black transition-all duration-500 items-center rounded-[10px]"
          />
          {hasMore && (
            <Button
              onClick={loadMore}
              disabled={loading}
              className="texts_14_medium text-black hover:after:w-15 pt-4.25 disabled:opacity-50"
              btnText={loading ? "LOADING..." : "SHOW MORE"}
            />
          )}
        </div>
      </Container>
    </section>
  );
};

export default BlogList;
