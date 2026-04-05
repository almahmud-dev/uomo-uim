import SingleBlog from "@/component/common/SingleBlog";

export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const res = await fetch(`https://dev.to/api/articles/${id}`, {
      next: { revalidate: 3600 },
    });
    const article = await res.json();
    return {
      title: article?.title || "Blog",
      description: article?.description || "Read this article on Uomo Journal",
      openGraph: {
        title: article?.title || "Blog",
        description: article?.description || "Read this article on Uomo Journal",
        images: article?.cover_image ? [{ url: article.cover_image }] : [],
      },
    };
  } catch {
    return { title: "Blog | Uomo" };
  }
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  return <SingleBlog id={id} />;
}
