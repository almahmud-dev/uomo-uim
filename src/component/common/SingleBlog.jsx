"use client";
import React, { useEffect } from "react";
import Container from "./Container";
import Images from "./Images";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import Button from "./Button";
import { useBlogStore } from "@/store/blogStore"; // ← Zustand store
import { useParams } from "next/navigation";

const SingleBlog = () => {
  const { id } = useParams();

  const {
    selectedArticle,
    detailLoading,
    detailError,
    fetchArticleById,
    clearSelectedArticle,
  } = useBlogStore();

  useEffect(() => {
    if (id) fetchArticleById(id);
    return () => clearSelectedArticle(); // unmount এ clean করো
  }, [id]);

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

  // ── Loading ──
  if (detailLoading) {
    return (
      <div className="mt-[85px] py-[60px] lg:pt-[85px] lg:pb-[110px]">
        <Container>
          <div className="lg:pl-60 animate-pulse">
            <div className="h-8 bg-gray-200 w-2/3 mb-4 rounded" />
            <div className="h-3 bg-gray-200 w-1/3 mb-10 rounded" />
          </div>
          <div className="h-64 bg-gray-200 w-full mb-10 rounded" />
          <div className="lg:pl-60 space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-3 bg-gray-200 rounded w-full" />
            ))}
          </div>
        </Container>
      </div>
    );
  }

  // ── Error ──
  if (detailError || !selectedArticle) {
    return (
      <div className="mt-[85px] py-[60px] text-center">
        <p className="text-gray-500">Article not found.</p>
        <Link
          href="/elements/blog-posts"
          className="text-sm underline mt-4 inline-block"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const article = selectedArticle;

  return (
    <div className="mt-[85px] py-[60px] lg:pt-[85px] lg:pb-[110px]">
      <Container>
        {/* ── Title & Meta ── */}
        <div className="lg:pl-60">
          <h2 className="head_35_bold text-head">{article.title}</h2>
          <div className="flex gap-5 mb-8 lg:mb-10.75">
            <p className="texts_14_regular text-second">
              BY {article.user?.name?.toUpperCase() || "ADMIN"}
            </p>
            <p className="texts_14_regular text-second">
              {formatDate(article.published_at)}
            </p>
            <p className="texts_14_regular text-second">
              {article.tag_list?.[0]?.toUpperCase() || "TRENDS"}
            </p>
          </div>
        </div>

        {/* ── Cover Image ── */}
        {(article.cover_image || article.social_image) && (
          <div className="mb-6 lg:mb-12.5 h-[200px] w-full sm:h-full">
            <Images
              className="object-cover h-full w-full"
              imgSrc={article.cover_image || article.social_image}
            />
          </div>
        )}

        {/* ── Body ── */}
        <div className="lg:pl-60">
          <p className="max-w-232.5 texts_14_regular text-head pb-15">
            {article.description}
          </p>

          {article.body_html && (
            <div
              className="prose max-w-232.5 texts_14_regular text-head pb-15"
              dangerouslySetInnerHTML={{ __html: article.body_html }}
            />
          )}

          <p className="texts_14_regular text-head max-w-232.5 mb-12.5">
            {article.readable_publish_date} · {article.reading_time_minutes} min
            read
          </p>
        </div>

        {/* ── Share Buttons ── */}
        <div className="flex flex-wrap gap-2.5 lg:justify-center">
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${article.url}`}
            target="_blank"
          >
            <div className="w-[220px] lg:w-auto pt-3.5 pb-3 pl-14.5 pr-12 bg-[#306199] inline-block cursor-pointer">
              <p className="texts_14_regular text-white">Share on Facebook</p>
            </div>
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?url=${article.url}&text=${article.title}`}
            target="_blank"
          >
            <div className="w-[220px] lg:w-auto pt-3.5 pb-3 pl-14.5 pr-12 bg-[#26C4F1] inline-block cursor-pointer">
              <p className="texts_14_regular text-white">Share on Twitter</p>
            </div>
          </Link>
          <Link
            href={`https://pinterest.com/pin/create/button/?url=${article.url}`}
            target="_blank"
          >
            <div className="w-[220px] lg:w-auto pt-3.5 pb-3 pl-14.5 pr-12 bg-[#E82B2D] inline-block cursor-pointer">
              <p className="texts_14_regular text-white">Share on Pinterest</p>
            </div>
          </Link>
          <div className="pt-3.5 pb-3 px-4.75 bg-head inline-block cursor-pointer">
            <p className="texts_14_regular text-white">+</p>
          </div>
        </div>

        {/* ── Prev / Next ── */}
        <div className="max-w-232.5 mx-auto px-4 mt-12.5">
          <div className="flex justify-between gap-2 lg:gap-0 items-start border-t border-b border-[#E4E4E4] pt-11.25 pb-10.5 mb-12.5">
            <div>
              <div className="flex items-center gap-1">
                <FiChevronLeft />
                <p className="texts_14_medium text-second">PREVIOUS POST</p>
              </div>
              <p className="texts_14_regular text-head">
                {article.tag_list?.[1] || "Related Article"}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1 justify-end">
                <FiChevronLeft />
                <p className="texts_14_medium text-second">NEXT POST</p>
              </div>
              <p className="texts_14_regular text-head">
                {article.tag_list?.[2] || "Related Article"}
              </p>
            </div>
          </div>

          {/* ── Reviews ── */}
          <h2 className="texts_18_medium text-head mb-6.5">Reviews</h2>
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex gap-7.5 mb-7.5 pb-6 border-b border-[#E4E4E4] max-w-232.5"
            >
              <div className="w-15 h-15 rounded-full bg-[#E4E4E4] shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="texts_14_regular text-head">Janice Miller</p>
                    <p className="texts_14_regular text-second">
                      April 06, 2020
                    </p>
                  </div>
                  <div className="flex gap-1.25 text-[#EEBA36]">
                    {[...Array(5)].map((_, j) => (
                      <IoStar key={j} />
                    ))}
                  </div>
                </div>
                <p className="texts_14_regular text-second max-w-210 mt-5">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est...
                </p>
              </div>
            </div>
          ))}

          {/* ── Review Form ── */}
          <div>
            <h3 className="texts_18_medium text-head mb-1">
              Be the first to review &quot;{article.title}&quot;
            </h3>
            <p className="texts_14_regular text-head mb-7.5">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div className="flex items-center gap-4.5 mb-4">
              <label className="texts_14_regular text-head">
                Your rating *
              </label>
              <div className="flex gap-1.25 text-[#EEBA36]">
                {[...Array(5)].map((_, j) => (
                  <IoStar key={j} size={13} />
                ))}
              </div>
            </div>
            <div className="space-y-7.5">
              <div className="textarea-container w-full">
                <textarea id="message" placeholder=" " className="textarea" />
                <label htmlFor="message" className="textarea-label">
                  ADD REVIEW
                </label>
              </div>
              <div className="input-container w-full">
                <input type="text" placeholder=" " className="input" />
                <label className="label">Name *</label>
              </div>
              <div className="input-container w-full">
                <input type="text" placeholder=" " className="input" />
                <label className="label">Email address *</label>
              </div>
            </div>
            <div className="flex items-center gap-2.75 mt-7.5">
              <input className="text-second" type="checkbox" />
              <p className="texts_14_regular text-second">
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </div>
            <Button
              className="pt-5.5 pb-3.5 pl-18.5 pr-19.25 texts_14_medium bg-head text-white mt-7.75"
              btnText="SUBMIT"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleBlog;
