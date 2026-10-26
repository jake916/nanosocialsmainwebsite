export const brandsPageType = {
  name: "brandsPage",
  title: "For Brands Page Content",
  type: "document",
  fields: [
    {
      name: "heroHeadingWhite",
      title: "Hero Heading (White text)",
      type: "string",
      initialValue: "YOUR CAMPAIGN.",
    },
    {
      name: "heroHeadingYellow",
      title: "Hero Heading (Yellow text)",
      type: "string",
      initialValue: "OUR RAILS.",
    },
    {
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
      initialValue:
        "Everything you need to run creator campaigns on purpose: graded creators, briefs in their own voice, live numbers, automatic payouts. One platform, start to finish.",
    },
    {
      name: "pricingTiers",
      title: "Pricing Tiers (4 Cards)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Price / Value", type: "string" },
            { name: "note", title: "Note / Description", type: "string" },
            { name: "iconName", title: "Icon", type: "string", options: { list: ["speech-bubble", "target", "naira", "wallet"] } },
            { name: "tone", title: "Tone", type: "string", options: { list: ["default", "accent"] } },
          ],
        },
      ],
    },
    {
      name: "ladderNotes",
      title: "Grade Ladder G1–G5 Notes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "grade", title: "Grade Number (1-5)", type: "number" },
            { name: "note", title: "Description Note", type: "string" },
          ],
        },
      ],
    },
  ],
};
