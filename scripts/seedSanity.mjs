import fs from "fs";
import path from "path";
import { createClient } from "@sanity/client";

// Read .env.local if present
try {
  const envLocalPath = path.resolve(process.cwd(), ".env.local");
  if (fs.existsSync(envLocalPath)) {
    const lines = fs.readFileSync(envLocalPath, "utf8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith("#")) {
        const [k, ...v] = trimmed.split("=");
        if (k && v.length) {
          process.env[k.trim()] = v.join("=").trim();
        }
      }
    }
  }
} catch (e) {
  // ignore
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "dowm3aef";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token =
  process.env.SANITY_API_WRITE_TOKEN ||
  process.env.SANITY_WRITE_TOKEN;

if (!token) {
  console.error("ERROR: SANITY_API_WRITE_TOKEN is required to run this script. Please set it in .env.local.");
  process.exit(1);
}

// Build portable text blocks helper
function toPortableText(blocks) {
  return blocks.map((b, idx) => {
    const key = `blk_${idx}_${Date.now()}`;
    if (b.type === "paragraph") {
      return {
        _key: key,
        _type: "block",
        style: "normal",
        children: [{ _key: `span_${key}`, _type: "span", text: b.text, marks: [] }],
      };
    }
    if (b.type === "heading") {
      return {
        _key: key,
        _type: "block",
        style: "h2",
        children: [{ _key: `span_${key}`, _type: "span", text: b.text, marks: [] }],
      };
    }
    if (b.type === "callout") {
      return {
        _key: key,
        _type: "block",
        style: "blockquote",
        children: [
          {
            _key: `span_${key}`,
            _type: "span",
            text: `[ ${b.speaker} ] “${b.quote}”`,
            marks: [],
          },
        ],
      };
    }
    if (b.type === "list") {
      return {
        _key: key,
        _type: "block",
        style: "normal",
        listItem: "bullet",
        level: 1,
        children: [{ _key: `span_${key}`, _type: "span", text: b.items.join(" | "), marks: [] }],
      };
    }
    return {
      _key: key,
      _type: "block",
      style: "normal",
      children: [{ _key: `span_${key}`, _type: "span", text: b.text || b.code || "", marks: [] }],
    };
  });
}

// 1. Authors
const authors = [
  {
    _id: "author-tobi-adebayo",
    _type: "author",
    name: "Tobi Adebayo",
    slug: { _type: "slug", current: "tobi-adebayo" },
    role: "Head of Infrastructure, Nano",
    bio: "Building programmatic escrow and attention velocity rails across Africa.",
  },
  {
    _id: "author-chidi-nwachukwu",
    _type: "author",
    name: "Chidi Nwachukwu",
    slug: { _type: "slug", current: "chidi-nwachukwu" },
    role: "Lead Machine Learning Engineer",
    bio: "Focuses on engagement pod detection and creator ranking models.",
  },
  {
    _id: "author-amara-okonkwo",
    _type: "author",
    name: "Amara Okonkwo",
    slug: { _type: "slug", current: "amara-okonkwo" },
    role: "Creative Director",
    bio: "Pioneering script-first workflows and organic creator copy.",
  },
  {
    _id: "author-femi-sowore",
    _type: "author",
    name: "Femi Sowore",
    slug: { _type: "slug", current: "femi-sowore" },
    role: "Operations & Clan Lead",
    bio: "Leading creator community, physical spaces, and physical Ninja studios in Lagos.",
  },
];

// 2. Categories
const categories = [
  {
    _id: "category-product-algo",
    _type: "category",
    title: "Product & Algo",
    description: "Teardowns of algorithmic distribution and telemetry models.",
  },
  {
    _id: "category-brand-strategy",
    _type: "category",
    title: "Brand Strategy",
    description: "Playbooks, briefs, and ROI guides for performance brand campaigns.",
  },
  {
    _id: "category-creator-culture",
    _type: "category",
    title: "Creator Culture",
    description: "Field dispatches and economic realities of Africa's digital creators.",
  },
];

// 3. Home Page Document
const homePage = {
  _id: "homePage",
  _type: "homePage",
  heroEyebrow: "COLLABORATION INFRASTRUCTURE FOR ATTENTION",
  heroTitleWhite: "OPEN A CAMPAIGN.",
  heroTitleYellow: "WATCH CREATORS RUN IT.",
  heroSubtitle:
    "Where brands put a real brief in front of real creators, see exactly what each one drives, and pay for what moves.",
  heroCtaText: "Open a campaign",
  proofCards: [
    {
      _key: "stat1",
      number: "500+",
      label: "GRADED CREATORS",
      subtext: "Vetted on past performance, not follower inflation.",
    },
    {
      _key: "stat2",
      number: "100%",
      label: "VERIFIED VIEWS",
      subtext: "Every impression and click tracked through dedicated links.",
    },
    {
      _key: "stat3",
      number: "₦0",
      label: "RETAINER WASTE",
      subtext: "Zero agency management markups or idle retainer overhead.",
    },
    {
      _key: "stat4",
      number: "4.8x",
      label: "AVERAGE RETURN",
      subtext: "Higher engagement velocity compared to single macro deals.",
    },
  ],
  shiftProblemTitle: "THE INFLUENCER MODEL IS BROKEN.",
  shiftProblemText:
    "Brands hand ₦5,000,000 to an agency. The agency hires two macro influencers with inflated follower counts. The posts get casual double taps, zero clicks, and no permanent search footprint.",
  shiftSolutionTitle: "NANO DISTRIBUTES ACROSS SYNCHRONIZED NANO CREATORS.",
  shiftSolutionText:
    "Instead of one macro creator, Nano activates 20 graded ninjas simultaneously. Each talks to an engaged niche, creates genuine search trails, and drives verified traffic on tracked links.",
  howItWorksSteps: [
    {
      _key: "s1",
      stepNumber: "01",
      title: "Open your brief",
      description: "Define your product, target audience, angle, and budget wave in 3 minutes.",
    },
    {
      _key: "s2",
      stepNumber: "02",
      title: "Algorithmic match",
      description: "Our system matches your brief with graded G1–G5 creators whose audience fits your niche.",
    },
    {
      _key: "s3",
      stepNumber: "03",
      title: "First Script review",
      description: "Creators receive voice-matched scripts and submit drafts for rapid approval.",
    },
    {
      _key: "s4",
      stepNumber: "04",
      title: "Synchronized drop",
      description: "Creators post across TikTok and Instagram, generating simultaneous attention velocity.",
    },
    {
      _key: "s5",
      stepNumber: "05",
      title: "Real-time telemetry & payouts",
      description: "Track live clicks, conversions, and reach. Programmatic escrow pays creators automatically.",
    },
  ],
  closingCtaHeadline: "READY TO RUN YOUR CAMPAIGN?",
  closingCtaSubtitle:
    "Put your brief in front of hundreds of verified creators today. Transparent pricing, verified reach, zero retainer waste.",
};

// 4. About Page Document
const aboutPage = {
  _id: "aboutPage",
  _type: "aboutPage",
  heroEyebrow: "ABOUT NANOSOCIALS // INFRASTRUCTURE FOR ATTENTION",
  heroTitle: "THE SYSTEM BEHIND SYNCHRONIZED REACH.",
  heroSubtitle:
    "Nanosocials is collaboration infrastructure designed to turn fragmented creator attention into coordinated, high-impact campaign distribution across Africa.",
  pillars: [
    {
      _key: "pil1",
      title: "Creator Collaboration",
      body: "We help brands activate relevant creators around a shared campaign brief, objective and message. Instead of managing disconnected collaborations, brands can coordinate creator participation around one goal.",
    },
    {
      _key: "pil2",
      title: "Synchronized Distribution",
      body: "We coordinate how campaign content is distributed across participating creators and their social channels, helping a brand's message travel beyond a single account.",
    },
    {
      _key: "pil3",
      title: "Attention Orchestration",
      body: "We bring structure to how creator participation and campaign distribution work together, helping brands make more deliberate use of audience attention.",
    },
    {
      _key: "pil4",
      title: "Campaign Performance",
      body: "We help brands evaluate campaign activity and performance so they can understand what happened, learn from the results and make better decisions about future campaigns.",
    },
  ],
  teamMembers: [
    {
      _key: "tm1",
      name: "Tobi Adebayo",
      role: "Head of Infrastructure",
      bio: "Protocol engineering, programmatic escrow, and algorithmic performance telemetry.",
      linkedin: "https://www.linkedin.com",
    },
    {
      _key: "tm2",
      name: "Amara Okonkwo",
      role: "Creative Director",
      bio: "Leading creator script-first workflows and brand alignment pipelines.",
      linkedin: "https://www.linkedin.com",
    },
    {
      _key: "tm3",
      name: "Chidi Nwachukwu",
      role: "Lead Machine Learning Engineer",
      bio: "Creator grading engine, fraud detection, and viral velocity algorithms.",
      linkedin: "https://www.linkedin.com",
    },
    {
      _key: "tm4",
      name: "Femi Sowore",
      role: "Clan & Community Director",
      bio: "Overseeing the Collaboratory studios and creator growth in Lagos.",
      linkedin: "https://www.linkedin.com",
    },
  ],
  faqs: [
    {
      _key: "faq1",
      question: "What is Nanosocials?",
      answer:
        "A platform brands use to run campaigns with many creators at once, manage the work in one place, and track how it performs. Creators are measured by real engagement, not follower count.",
    },
    {
      _key: "faq2",
      question: "Is Nano an influencer marketing agency?",
      answer:
        "No. An agency hands you one name and runs it for you. Nano is a platform: you run a campaign across many creators, each posting to the people who trust them, with the results laid out for you.",
    },
    {
      _key: "faq3",
      question: "How does Nano help brands?",
      answer:
        "It organises a creator campaign around one brief, gets many creators posting around the same time, and shows you how each one performed so your next campaign is smarter.",
    },
    {
      _key: "faq4",
      question: "Can creators earn through Nano?",
      answer:
        "Yes. Creators get matched with brand campaigns, deliver the agreed work, and get paid for it. Earnings depend on the campaign and the creator's grade, not on follower count.",
    },
    {
      _key: "faq5",
      question: "Do I need a big following to join as a creator?",
      answer:
        "No. Your grade is based on how much your audience responds to your work, not how many followers you have. A smaller, engaged audience can take you a long way.",
    },
    {
      _key: "faq6",
      question: "What does a campaign cost?",
      answer:
        "It depends on the campaign type and the number of creators. You always see the full scope and price in your quote before you commit.",
    },
    {
      _key: "faq7",
      question: "Can I use the content in my own ads?",
      answer:
        "Yes. All content created through Nano campaigns includes organic digital usage rights for paid ads and brand handles.",
    },
  ],
};

// 5. Brands Page Document
const brandsPage = {
  _id: "brandsPage",
  _type: "brandsPage",
  heroHeadingWhite: "WHAT A CAMPAIGN COSTS.",
  heroHeadingYellow: "BEFORE YOU OPEN IT.",
  heroSubtitle:
    "No opaque markups. Every naira goes to the creators moving your brief, with a flat platform fee on top. Pick your format and tier.",
  pricingTiers: [
    {
      _key: "pt1",
      tierName: "CONTENT CAMPAIGNS",
      price: "≈ ₦45,000",
      description:
        "Flat fee per creator. Built for conversation, creative variety, and authentic word-of-mouth resonance.",
    },
    {
      _key: "pt2",
      tierName: "TRAFFIC CAMPAIGNS",
      price: "₦25 – ₦50",
      description:
        "Per verified unique click. Transparent click attribution via trackable creator links.",
    },
    {
      _key: "pt3",
      tierName: "PLATFORM FEE",
      price: "20%",
      description:
        "Applied to total campaign spend. Covers creator grading, escrow, workflow tooling, and live reporting.",
    },
    {
      _key: "pt4",
      tierName: "COMMITMENT",
      price: "₦0",
      description:
        "No monthly agency retainers. No annual contracts. Pay only when you deploy a live campaign.",
    },
  ],
  ladderNotes:
    "Rates depend on creator tier (G1 to G5). Higher grades command stronger attention density and higher community pull.",
};

// 6. Creators Page Document
const creatorsPage = {
  _id: "creatorsPage",
  _type: "creatorsPage",
  heroHeadingWhite: "WHAT YOU EARN.",
  heroHeadingYellow: "HOW YOU LEVEL UP.",
  heroSubtitle:
    "We do not care how many followers you had three years ago. We pay for what you move now. Clear grades, transparent fees, same-day payouts.",
  fees: [
    {
      _key: "g1",
      grade: "G1",
      title: "Fresh Reach",
      fee: "₦30,000 / wave",
      description:
        "Emerging creators with high authenticity. Untapped, loyal audiences perfect for testing fresh angles.",
    },
    {
      _key: "g2",
      grade: "G2",
      title: "A Steady Response",
      fee: "₦45,000 / wave",
      description:
        "Consistent performers. Audiences reliably comment, ask questions, share, and verify product recommendations.",
    },
    {
      _key: "g3",
      grade: "G3",
      title: "Reliably Moves People",
      fee: "₦60,000 / wave",
      description:
        "Proven conversion velocity. High save and share ratios with active discussions in replies.",
    },
    {
      _key: "g4",
      grade: "G4",
      title: "Real Pull with Community",
      fee: "₦90,000 / wave",
      description:
        "Category authority. Niche leadership in tech, beauty, fashion, lifestyle, or finance.",
    },
    {
      _key: "g5",
      grade: "G5",
      title: "Top Tier Cultural Anchor",
      fee: "₦120,000 / wave",
      description:
        "Cultural engines. Exceptional retention, organic virality, and instant institutional credibility.",
    },
  ],
};

// 7. Contact Page Document
const contactPage = {
  _id: "contactPage",
  _type: "contactPage",
  heroEyebrow: "CONNECT WITH NANOSOCIALS",
  heroTitle: "Get in touch. Good campaigns deserve to travel.",
  heroSubtitle:
    "Whether you are launching a product drop, looking to activate 20 creators simultaneously, or wanting to join our 500 graded Ninjas — our campaign directors are ready.",
  email: "info@nanosocials.com",
  addressTitle: "HQ & Creator Studio",
  addressLocation: "Lagos, Nigeria",
  responseSla: "Under 4 hours (Mon-Sat, 8am-8pm WAT)",
};

// 8. Site Settings Document
const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  title: "Nanosocials",
  tagline: "Open a campaign. Watch creators run it.",
  contactEmail: "info@nanosocials.com",
  proofNumbers: "500+ Graded Creators • 100% Verified Reach • ₦0 Retainers",
};

// 9. Blog Dispatches (5 Posts)
import { BLOG_POSTS } from "../src/data/blogPosts.js";

const posts = BLOG_POSTS.map((p, idx) => {
  let authorId = "author-tobi-adebayo";
  if (p.author?.name?.includes("Chidi")) authorId = "author-chidi-nwachukwu";
  if (p.author?.name?.includes("Amara")) authorId = "author-amara-okonkwo";
  if (p.author?.name?.includes("Femi")) authorId = "author-femi-sowore";

  let categoryTitle = p.category || "Product & Algo";

  return {
    _id: `post-${p.slug}`,
    _type: "post",
    title: p.title,
    slug: { _type: "slug", current: p.slug },
    summary: p.summary,
    category: categoryTitle,
    publishedAt: new Date(Date.now() - idx * 86400000 * 3).toISOString(),
    readTime: p.readTime,
    featured: Boolean(p.featured),
    tags: p.tags || [],
    author: {
      _type: "reference",
      _ref: authorId,
    },
    body: toPortableText(p.content || []),
  };
});

// All documents combined
export const allDocuments = [
  ...authors,
  ...categories,
  homePage,
  aboutPage,
  brandsPage,
  creatorsPage,
  contactPage,
  siteSettings,
  ...posts,
];

// Write NDJSON file
const ndjsonContent = allDocuments.map((doc) => JSON.stringify(doc)).join("\n");
const ndjsonPath = path.resolve(process.cwd(), "sanity-seed-data.ndjson");
fs.writeFileSync(ndjsonPath, ndjsonContent, "utf8");
console.log(`✅ Generated ${allDocuments.length} documents into ${ndjsonPath}`);

// If token provided, seed automatically via Sanity client
if (token) {
  console.log(`🚀 Seeding directly to Sanity project "${projectId}", dataset "${dataset}"...`);
  const client = createClient({
    projectId,
    dataset,
    token,
    apiVersion: "2024-01-01",
    useCdn: false,
  });

  const tx = client.transaction();
  for (const doc of allDocuments) {
    tx.createOrReplace(doc);
  }
  tx.commit()
    .then((res) => {
      console.log(`🎉 SUCCESS! Seeded ${allDocuments.length} documents into Sanity Studio.`);
      process.exit(0);
    })
    .catch((err) => {
      console.error("❌ Failed to seed via Sanity token:", err.message);
      process.exit(1);
    });
} else {
  console.log("ℹ️ No SANITY_API_WRITE_TOKEN found in environment.");
  console.log("To import now:");
  console.log("  1. Add SANITY_API_WRITE_TOKEN=your_token to .env.local and run: npm run seed");
  console.log("  OR");
  console.log("  2. In your terminal run: npx sanity login, then: npx sanity dataset import sanity-seed-data.ndjson production --replace");
}
