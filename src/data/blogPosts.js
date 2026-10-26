export const BLOG_POSTS = [
  {
    slug: "why-vanity-metrics-die",
    title: "Why Vanity Metrics Die: The Mathematics of Moving People",
    summary:
      "Why paying creators by raw follower count is financial malpractice in 2026, and how the industry is finally shifting to verified performance velocity.",
    publishedAt: "Oct 24, 2026",
    readTime: "6 min read",
    category: "Product & Algo",
    featured: true,
    coverImage: "/images/hero-dashboard.jpg",
    author: {
      name: "Tobi Adebayo",
      role: "Head of Infrastructure, Nano",
      avatar: "/images/avatar_tech.jpg",
    },
    tags: ["Metrics", "Algorithms", "ROI", "Creator Economy"],
    tableOfContents: [
      { id: "the-follower-illusion", title: "The Follower Illusion" },
      { id: "what-moving-people-means", title: "What 'Moving People' Actually Means" },
      { id: "the-four-signals", title: "The 4 Hard Signals That Matter" },
      { id: "the-new-standard", title: "The New Payout Standard" },
    ],
    content: [
      {
        type: "paragraph",
        text: "For ten years, influencer marketing operated on a single, fundamentally broken assumption: that the number of people who clicked 'Follow' three years ago has any correlation to how many people care about what that person posts today.",
      },
      {
        type: "callout",
        speaker: "THE PROBLEM",
        quote:
          "Brands were paying for potential reach on accounts where 85% of followers never saw the post, and 90% of impressions were passive, disinterested thumbs flicking past in milliseconds.",
      },
      {
        type: "heading",
        id: "the-follower-illusion",
        text: "The Follower Illusion",
      },
      {
        type: "paragraph",
        text: "Platform recommendation feeds broke follower graphs permanently. In 2026, TikTok, Instagram Reels, and YouTube Shorts prioritize content resonance over social graphs. An account with 1.2M followers can easily post a video that caps out at 4,000 views, while a sharp creator with 8,000 followers can generate 450,000 hyper-engaged views in 48 hours.",
      },
      {
        type: "paragraph",
        text: "Yet legacy talent agencies still price talent by the follower tier: Nano, Micro, Macro, Mega. It is an arbitrary tiering system created for the convenience of agency slide decks, not brand balance sheets.",
      },
      {
        type: "heading",
        id: "what-moving-people-means",
        text: "What 'Moving People' Actually Means",
      },
      {
        type: "paragraph",
        text: "At Nano, our core metric is attention velocity. We don't ask: 'How many accounts follow you?' We ask: 'When you speak, do people stop, stay, argue, verify, share, and act?'",
      },
      {
        type: "codebox",
        title: "attention_velocity_calc.cfg",
        code: `// Attention Velocity Index (AVI)
AVI = (0.35 * RetentionRate) + 
      (0.30 * CommentVelocity) + 
      (0.20 * SharePerView) + 
      (0.15 * ClicksToConversion) - 
      (FollowerCountWeight = 0.05);`,
      },
      {
        type: "heading",
        id: "the-four-signals",
        text: "The 4 Hard Signals That Matter",
      },
      {
        type: "paragraph",
        text: "When a creator connects their handle to the Nano protocol, our grading system analyzes their past 30 days across four verifiable telemetry vectors:",
      },
      {
        type: "list",
        items: [
          "Watch-Through Retention: Did viewers watch past second 3, and what percentage stayed till the call to action?",
          "Comment Depth: Are comments real human discourse, questions, and reactions, or robotic bot emojis?",
          "Share Velocity: Did the audience send this post to friends via DMs and group chats?",
          "Downstream Click Intent: When a tracking link is activated, do real unique sessions land on the brand rail?",
        ],
      },
      {
        type: "heading",
        id: "the-new-standard",
        text: "The New Payout Standard",
      },
      {
        type: "paragraph",
        text: "This is why G1 to G5 exists. G1 is fresh, hungry creators with high signal-to-noise ratios. G5 is verified cultural engines whose content consistently commands audience loyalty. Brands get guaranteed performance rails; creators get paid what their talent actually generates.",
      },
    ],
  },
  {
    slug: "inside-the-g1-g5-algorithm",
    title: "Inside the G1–G5 Algorithm: How Nano Grades Attention",
    summary:
      "An open-box look into our scoring engine: how watch time, comment depth, community velocity, and share ratios dictate creator grades.",
    publishedAt: "Oct 20, 2026",
    readTime: "8 min read",
    category: "Product & Algo",
    featured: false,
    coverImage: "/images/art-shift.png",
    author: {
      name: "Chidi Nwachukwu",
      role: "Lead Machine Learning Engineer",
      avatar: "/images/avatar_tech.jpg",
    },
    tags: ["Engineering", "Algorithm", "Grades", "Transparency"],
    tableOfContents: [
      { id: "why-open-box", title: "Why We Open the Black Box" },
      { id: "the-tier-breakdown", title: "The Five Tiers (G1 to G5)" },
      { id: "the-anti-cheat-rails", title: "Anti-Engagement Pod Detection" },
      { id: "how-creators-level-up", title: "How Creators Level Up" },
    ],
    content: [
      {
        type: "paragraph",
        text: "In traditional talent agencies, creator rates are negotiated in back rooms based on personal relationships, gut feelings, and who shouted loudest. We believe creator pricing should be as transparent and predictable as cloud computing pricing.",
      },
      {
        type: "heading",
        id: "why-open-box",
        text: "Why We Open the Black Box",
      },
      {
        type: "paragraph",
        text: "Algorithms shouldn't be mystical judge-and-jury systems. When creators know exactly what moves their grade from G2 to G3, they focus on creative craft and genuine audience relationships rather than gaming follower growth hacks.",
      },
      {
        type: "heading",
        id: "the-tier-breakdown",
        text: "The Five Tiers (G1 to G5)",
      },
      {
        type: "paragraph",
        text: "Each grade corresponds to a statistical bracket of audience pull and verified engagement density:",
      },
      {
        type: "list",
        items: [
          "Grade 1 (Fresh Reach • ₦30,000/wave): Emerging creators with high authenticity. Untapped audiences, perfect for testing niche verticals.",
          "Grade 2 (A Steady Response • ₦45,000/wave): Consistent performers. Community reliably comments, questions, and replies.",
          "Grade 3 (Reliably Moves People • ₦60,000/wave): Creators with proven conversion leverage. High save and share ratios.",
          "Grade 4 (Real Pull with Community • ₦90,000/wave): Category leaders. High authority in tech, lifestyle, finance, or beauty.",
          "Grade 5 (Top Tier • ₦120,000/wave): Cultural anchors. Exceptional retention, organic virality, and instant brand credibility.",
        ],
      },
      {
        type: "heading",
        id: "the-anti-cheat-rails",
        text: "Anti-Engagement Pod Detection",
      },
      {
        type: "paragraph",
        text: "Nano's telemetry immediately filters out engagement pods, bot comment clusters, and inorganic traffic spikes. If 30 comments arrive within 12 seconds from accounts created in the same subnet, our anomaly filter zeroes out their weight.",
      },
      {
        type: "callout",
        speaker: "THE ENGINE RULE",
        quote:
          "Gaming followers is cheap. Gaming watch-through completion, multi-turn comment discussions, and authenticated clicks is statistically impossible.",
      },
      {
        type: "heading",
        id: "how-creators-level-up",
        text: "How Creators Level Up",
      },
      {
        type: "paragraph",
        text: "Grades are recalculated on every campaign cycle. When a G2 creator executes three consecutive briefs with retention numbers in the 90th percentile, their profile automatically promotes to G3 with an instant 33% fee increase.",
      },
    ],
  },
  {
    slug: "the-death-of-influencer-briefs",
    title: "The Death of the Static Brief: Why Script-First Campaigns Win",
    summary:
      "When creators talk like corporate press releases, audiences scroll past. How automated voice matching generates 3.4x higher comment retention.",
    publishedAt: "Oct 16, 2026",
    readTime: "5 min read",
    category: "Brand Strategy",
    featured: false,
    coverImage: "/images/art-discoverability.png",
    author: {
      name: "Amara Okonkwo",
      role: "Creative Director",
      avatar: "/images/avatar_beauty.jpg",
    },
    tags: ["Briefs", "Copywriting", "UGC", "Conversion"],
    tableOfContents: [
      { id: "the-robotic-ad-crisis", title: "The Robotic Ad Crisis" },
      { id: "what-voice-matching-does", title: "What Automated Voice Matching Does" },
      { id: "the-first-script-concept", title: "The 'First Script' Workflow" },
    ],
    content: [
      {
        type: "paragraph",
        text: "You know the feeling: you are watching a creator you love talk about their morning routine, and suddenly their posture stiffens, their eyes flick to a teleprompter, and they read: 'I am so excited to announce my partnership with Brand X, the premier cloud-native solution for financial wellness.'",
      },
      {
        type: "paragraph",
        text: "Instant scroll. The audience's trust evaporates in 1.4 seconds. The brand wasted money, and the creator lost credibility.",
      },
      {
        type: "heading",
        id: "the-robotic-ad-crisis",
        text: "The Robotic Ad Crisis",
      },
      {
        type: "paragraph",
        text: "Legacy marketing teams write briefs for billboard print ads, then try to force creators to read them verbatim. But creator content is conversation, not broadcast. The moment you strip away the creator's colloquialisms, humor, and speech patterns, the audience detects an intrusion.",
      },
      {
        type: "heading",
        id: "what-voice-matching-does",
        text: "What Automated Voice Matching Does",
      },
      {
        type: "paragraph",
        text: "When a brand opens a campaign on Nano, they don't send a 14-page PDF brief. They enter their core product benefit, compliance boundaries, and CTA. Our engine reads the creator's past natural conversations and generates a 'First Script' drafted directly in their authentic vernacular.",
      },
      {
        type: "callout",
        speaker: "NANO WORKFLOW",
        quote:
          "The creator receives a script that already feels like how they talk with their friends. They tweak it, make it theirs, and shoot. Zero awkward corporate speak.",
      },
      {
        type: "heading",
        id: "the-first-script-concept",
        text: "The 'First Script' Workflow",
      },
      {
        type: "paragraph",
        text: "Across our first 240 brand waves, campaigns utilizing the First Script pipeline averaged 3.4x higher comment retention and 2.8x higher link-click conversion than traditional copy-paste briefs.",
      },
    ],
  },
  {
    slug: "creator-economy-lagos-2026",
    title: "Dispatch from Lagos: The New Rail for Africa's Digital Creators",
    summary:
      "Nigeria's creators move more cultural attention than anywhere on earth, yet monetized less than 4% of it. Here is how that changes.",
    publishedAt: "Oct 11, 2026",
    readTime: "7 min read",
    category: "Creator Culture",
    featured: false,
    coverImage: "/images/ninja-studio.jpg",
    author: {
      name: "Femi Sowore",
      role: "Operations & Clan Lead",
      avatar: "/images/avatar_lifestyle.jpg",
    },
    tags: ["Nigeria", "Lagos", "Culture", "Fintech"],
    tableOfContents: [
      { id: "the-attention-paradox", title: "The Attention Paradox" },
      { id: "broken-payment-rails", title: "Broken Payment Rails" },
      { id: "building-the-clan", title: "Building the Clan, Not a Queue" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Walk down Admiralty Way in Lekki, through Yaba, or around Ikeja, and you will see the most creative content generation engine on planet earth. Nigerian skits, tech breakdowns, street interviews, and fashion reels dictate global viral trends on TikTok and Instagram.",
      },
      {
        type: "paragraph",
        text: "Yet despite commanding billions of monthly impressions, the vast majority of creators were stuck chasing unpaid agency invoices, 90-day retainer delays, or barter trade deals for free sunglasses.",
      },
      {
        type: "heading",
        id: "the-attention-paradox",
        text: "The Attention Paradox",
      },
      {
        type: "paragraph",
        text: "Africa's creator economy was starved not of talent or attention, but of payment rails and objective trust infrastructure. Brands were terrified of paying upfront due to ghosting; creators were terrified of delivering without payment due to breach of contract.",
      },
      {
        type: "heading",
        id: "broken-payment-rails",
        text: "Broken Payment Rails",
      },
      {
        type: "paragraph",
        text: "Nano solves this with programmatic escrow. When a brand opens a wave, campaign funds are locked in escrow. When the creator's post goes live and verifies telemetry criteria, payouts trigger automatically into their bank account within 60 seconds.",
      },
      {
        type: "callout",
        speaker: "THE PROMISE",
        quote:
          "No begging account managers for payment. No 90-day invoice delays. You deliver the work, the rail verifies, you get paid immediately.",
      },
      {
        type: "heading",
        id: "building-the-clan",
        text: "Building the Clan, Not a Queue",
      },
      {
        type: "paragraph",
        text: "Beyond software, creators need community and infrastructure. Our Collaboratory spaces and monthly Ninja Nights give creators real physical rooms with 24/7 power, fiber internet, studio lighting, and peer collaboration. We are building the backbone for the next generation of creative businesses.",
      },
    ],
  },
  {
    slug: "traffic-vs-content-playbook",
    title: "Content for Conversation vs Traffic for Clicks: The Brand Playbook",
    summary:
      "Should your brand run a cultural wave or an intent-driven click pool? A tactical breakdown of when to deploy which engine.",
    publishedAt: "Oct 05, 2026",
    readTime: "6 min read",
    category: "Brand Strategy",
    featured: false,
    coverImage: "/images/discoverability-trail.jpg",
    author: {
      name: "Tobi Adebayo",
      role: "Head of Infrastructure, Nano",
      avatar: "/images/avatar_tech.jpg",
    },
    tags: ["Strategy", "Performance", "Media Planning", "ROI"],
    tableOfContents: [
      { id: "two-engines", title: "Two Distinct Attention Engines" },
      { id: "when-to-use-content", title: "When to Run Content Waves" },
      { id: "when-to-use-traffic", title: "When to Run Traffic Campaigns" },
      { id: "hybrid-deployment", title: "The Hybrid Dual-Rail Approach" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Most marketing teams treat creator partnerships as a monolithic tactic: 'Let's hire five creators and see what happens.' But paying a creator to talk about your brand is fundamentally different from incentivizing creators to drive high-intent transactional clicks.",
      },
      {
        type: "heading",
        id: "two-engines",
        text: "Two Distinct Attention Engines",
      },
      {
        type: "paragraph",
        text: "On Nano, we split campaign architecture into two purpose-built engines: Content Waves (built for conversation, trust, and community velocity) and Traffic Campaigns (built for direct clicks, app installs, and landing page sessions).",
      },
      {
        type: "heading",
        id: "when-to-use-content",
        text: "When to Run Content Waves",
      },
      {
        type: "paragraph",
        text: "Run Content Waves when you are launching a new product, repositioning brand perception, or building organic word-of-mouth momentum. The goal is deep comment discussions, saves, and cultural resonance. Payouts are predictable and set upfront based on creator grade (≈₦45,000 average per wave).",
      },
      {
        type: "heading",
        id: "when-to-use-traffic",
        text: "When to Run Traffic Campaigns",
      },
      {
        type: "paragraph",
        text: "Run Traffic Campaigns when you have an optimized landing page, signup funnel, or promo code and want measurable performance. Creators receive verified click attribution, earning ₦25 to ₦50 per verified unique session. You only pay for verified traffic delivered.",
      },
      {
        type: "callout",
        speaker: "THE SECRET WEAPON",
        quote:
          "Attach a traffic click pool directly onto a content wave. Creators who generate conversation also earn bounty bonuses when their audience clicks through. Both objectives aligned on a single rail.",
      },
      {
        type: "heading",
        id: "hybrid-deployment",
        text: "The Hybrid Dual-Rail Approach",
      },
      {
        type: "paragraph",
        text: "Our most successful brands run hybrid waves: 10 graded creators deploy authentic videos during the prep window, while an associated ₦250,000 traffic pool rewards the creators whose audiences take immediate action.",
      },
    ],
  },
];
