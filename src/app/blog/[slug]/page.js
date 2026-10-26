import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getBlogPosts, getBlogPostBySlug } from "@/sanity/fetch";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function BlogPostContent({ paramsPromise }) {
  const { slug } = await paramsPromise;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}

export default function BlogPostPage({ params }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0c0a0b] text-[#fed701] font-mono grid place-items-center">
          LOADING DISPATCH...
        </div>
      }
    >
      <BlogPostContent paramsPromise={params} />
    </Suspense>
  );
}
