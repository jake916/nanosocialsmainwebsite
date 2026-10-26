import { defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "COLLABORATION INFRASTRUCTURE FOR ATTENTION",
    }),
    defineField({
      name: "heroTitleWhite",
      title: "Hero Title (White Part)",
      type: "string",
      initialValue: "OPEN A CAMPAIGN.",
    }),
    defineField({
      name: "heroTitleYellow",
      title: "Hero Title (Yellow Highlight)",
      type: "string",
      initialValue: "WATCH CREATORS RUN IT.",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
      initialValue:
        "Where brands put a real brief in front of real creators, see exactly what each one drives, and pay for what moves.",
    }),
    defineField({
      name: "heroCtaText",
      title: "Hero CTA Button Text",
      type: "string",
      initialValue: "Open a campaign",
    }),
    defineField({
      name: "proofCards",
      title: "Proof Band Stat Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", title: "Stat Number", type: "string" },
            { name: "label", title: "Label", type: "string" },
            { name: "subtext", title: "Subtext", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "shiftProblemTitle",
      title: "The Shift - Problem Headline",
      type: "string",
    }),
    defineField({
      name: "shiftProblemText",
      title: "The Shift - Problem Description",
      type: "text",
    }),
    defineField({
      name: "shiftSolutionTitle",
      title: "The Shift - Solution Headline",
      type: "string",
    }),
    defineField({
      name: "shiftSolutionText",
      title: "The Shift - Solution Description",
      type: "text",
    }),
    defineField({
      name: "howItWorksSteps",
      title: "How It Works Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "stepNumber", title: "Step Number (e.g. 01)", type: "string" },
            { name: "title", title: "Step Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "closingCtaHeadline",
      title: "Closing CTA Headline",
      type: "string",
      initialValue: "READY TO RUN YOUR CAMPAIGN?",
    }),
    defineField({
      name: "closingCtaSubtitle",
      title: "Closing CTA Subtitle",
      type: "text",
      initialValue:
        "Put your brief in front of hundreds of verified creators today. Transparent pricing, verified reach, zero retainer waste.",
    }),
  ],
});
