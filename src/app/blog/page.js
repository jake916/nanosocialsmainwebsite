import { Suspense } from "react";
import { getBlogPosts } from "@/sanity/fetch";
import BlogIndexClient from "./BlogIndexClient";

export const metadata = {
  title: "Nano Dispatches // Blog & Research",
  description:
    "Field notes, engineering teardowns, algorithmic transparency, and playbooks from the frontlines of verified creator commerce in Africa.",
};

async function BlogList() {
  const posts = await getBlogPosts();
  return <BlogIndexClient initialPosts={posts} />;
}

export default function BlogIndexPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0c0a0b] text-[#fed701] font-mono grid place-items-center">
          LOADING DISPATCHES...
        </div>
      }
    >
      <BlogList />
    </Suspense>
  );
}
