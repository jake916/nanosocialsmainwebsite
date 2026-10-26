export const creatorsPageType = {
  name: "creatorsPage",
  title: "For Creators Page Content",
  type: "document",
  fields: [
    {
      name: "heroHeadingWhite",
      title: "Hero Heading (White text)",
      type: "string",
      initialValue: "YOU WERE NEVER",
    },
    {
      name: "heroHeadingYellow",
      title: "Hero Heading (Yellow text)",
      type: "string",
      initialValue: "TOO SMALL.",
    },
    {
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
      initialValue:
        "Nano does not care how many followers you have. We care how you move people. Get chosen for your craft, get real brand work, get paid.",
    },
    {
      name: "fees",
      title: "Payout Ladder (G1 to G5)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "grade", title: "Grade (1-5)", type: "number" },
            { name: "fee", title: "Payout Fee", type: "string" },
            { name: "tone", title: "Tone", type: "string", options: { list: ["default", "accent"] } },
          ],
        },
      ],
    },
  ],
};
