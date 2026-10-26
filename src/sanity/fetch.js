import { client } from "./client";
import { isSanityConfigured } from "./env";
import {
  postsQuery,
  postBySlugQuery,
  homePageQuery,
  aboutPageQuery,
  brandsPageQuery,
  creatorsPageQuery,
  contactPageQuery,
  siteSettingsQuery,
} from "./queries";
import { BLOG_POSTS } from "@/data/blogPosts";
import { urlForImage } from "./image";

// Helper to normalize Sanity post to match our local post schema
function normalizeSanityPost(post) {
  if (!post) return null;
  return {
    slug: post.slug,
    title: post.title,
    summary: post.summary,
    category: post.category || "All Dispatches",
    publishedAt: post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "RECENT",
    readTime: post.readTime || "5 MIN READ",
    featured: Boolean(post.featured),
    coverImage: post.coverImage ? urlForImage(post.coverImage) : "/images/hero-dashboard.jpg",
    tags: Array.isArray(post.tags) ? post.tags : [],
    author: {
      name: post.author?.name || "Nano Research",
      role: post.author?.role || "Editorial Desk",
      avatar: post.author?.avatar ? urlForImage(post.author.avatar) : "/images/avatar_tech.jpg",
    },
    body: post.body,
  };
}

/**
 * Fetch all blog posts with fallback to local hardcoded posts
 */
export async function getBlogPosts() {
  if (!isSanityConfigured || !client) {
    return BLOG_POSTS;
  }

  try {
    const posts = await client.fetch(postsQuery);
    if (!posts || posts.length === 0) {
      return BLOG_POSTS;
    }
    return posts.map(normalizeSanityPost);
  } catch (error) {
    console.warn("Sanity fetch failed for blog posts, using fallback:", error.message);
    return BLOG_POSTS;
  }
}

/**
 * Fetch a single blog post by slug with fallback
 */
export async function getBlogPostBySlug(slug) {
  if (!isSanityConfigured || !client) {
    return BLOG_POSTS.find((p) => p.slug === slug) || null;
  }

  try {
    const post = await client.fetch(postBySlugQuery, { slug });
    if (!post) {
      return BLOG_POSTS.find((p) => p.slug === slug) || null;
    }
    return normalizeSanityPost(post);
  } catch (error) {
    console.warn(`Sanity fetch failed for slug "${slug}", using fallback:`, error.message);
    return BLOG_POSTS.find((p) => p.slug === slug) || null;
  }
}

/**
 * Fetch Home page settings
 */
export async function getHomePageData() {
  if (!isSanityConfigured || !client) {
    return null;
  }

  try {
    return await client.fetch(homePageQuery);
  } catch (error) {
    console.warn("Sanity fetch failed for home page:", error.message);
    return null;
  }
}

/**
 * Fetch About page settings
 */
export async function getAboutPageData() {
  if (!isSanityConfigured || !client) {
    return null;
  }

  try {
    return await client.fetch(aboutPageQuery);
  } catch (error) {
    console.warn("Sanity fetch failed for about page:", error.message);
    return null;
  }
}

/**
 * Fetch Brands page settings with fallback
 */
export async function getBrandsPageData() {
  if (!isSanityConfigured || !client) {
    return null;
  }

  try {
    return await client.fetch(brandsPageQuery);
  } catch (error) {
    console.warn("Sanity fetch failed for brands page:", error.message);
    return null;
  }
}

/**
 * Fetch Creators page settings with fallback
 */
export async function getCreatorsPageData() {
  if (!isSanityConfigured || !client) {
    return null;
  }

  try {
    return await client.fetch(creatorsPageQuery);
  } catch (error) {
    console.warn("Sanity fetch failed for creators page:", error.message);
    return null;
  }
}

/**
 * Fetch Contact page settings
 */
export async function getContactPageData() {
  if (!isSanityConfigured || !client) {
    return null;
  }

  try {
    return await client.fetch(contactPageQuery);
  } catch (error) {
    console.warn("Sanity fetch failed for contact page:", error.message);
    return null;
  }
}

/**
 * Fetch Site Settings with fallback
 */
export async function getSiteSettings() {
  if (!isSanityConfigured || !client) {
    return null;
  }

  try {
    return await client.fetch(siteSettingsQuery);
  } catch (error) {
    console.warn("Sanity fetch failed for site settings:", error.message);
    return null;
  }
}
