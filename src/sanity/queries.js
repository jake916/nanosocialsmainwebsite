import { groq } from "next-sanity";

// All blog posts ordered by publish date
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    category,
    publishedAt,
    readTime,
    featured,
    tags,
    coverImage,
    author-> {
      name,
      role,
      "avatar": image
    }
  }
`;

// Single post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    category,
    publishedAt,
    readTime,
    featured,
    tags,
    coverImage,
    author-> {
      name,
      role,
      "avatar": image
    },
    body
  }
`;

// All slugs for static paths
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

// Home page data
export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    heroEyebrow,
    heroTitleWhite,
    heroTitleYellow,
    heroSubtitle,
    heroCtaText,
    proofCards,
    shiftProblemTitle,
    shiftProblemText,
    shiftSolutionTitle,
    shiftSolutionText,
    howItWorksSteps,
    closingCtaHeadline,
    closingCtaSubtitle
  }
`;

// About page data
export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    pillars,
    teamMembers,
    faqs
  }
`;

// Brands page data
export const brandsPageQuery = groq`
  *[_type == "brandsPage"][0] {
    heroHeadingWhite,
    heroHeadingYellow,
    heroSubtitle,
    pricingTiers,
    ladderNotes
  }
`;

// Creators page data
export const creatorsPageQuery = groq`
  *[_type == "creatorsPage"][0] {
    heroHeadingWhite,
    heroHeadingYellow,
    heroSubtitle,
    fees
  }
`;

// Contact page data
export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    email,
    addressTitle,
    addressLocation,
    responseSla
  }
`;

// Site settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    tagline,
    contactEmail,
    proofNumbers
  }
`;
