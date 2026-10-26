import { defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "ABOUT NANOSOCIALS // INFRASTRUCTURE FOR ATTENTION",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "THE SYSTEM BEHIND SYNCHRONIZED REACH.",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
      initialValue:
        "Nanosocials is collaboration infrastructure designed to turn fragmented creator attention into coordinated, high-impact campaign distribution across Africa.",
    }),
    defineField({
      name: "pillars",
      title: "Core Pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Pillar Title", type: "string" },
            { name: "body", title: "Description", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Full Name", type: "string" },
            { name: "role", title: "Role", type: "string" },
            { name: "bio", title: "Bio", type: "text" },
            { name: "linkedin", title: "LinkedIn URL", type: "url" },
          ],
        },
      ],
    }),
    defineField({
      name: "faqs",
      title: "Frequently Asked Questions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text" },
          ],
        },
      ],
    }),
  ],
});
