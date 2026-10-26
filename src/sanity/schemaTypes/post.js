export const postType = {
  name: "post",
  title: "Blog Post / Dispatch",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "summary",
      title: "Summary / Excerpt",
      type: "text",
      rows: 3,
      description: "Brief summary shown on article preview cards.",
      validation: (rule) => rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Product & Algo", value: "Product & Algo" },
          { title: "Brand Strategy", value: "Brand Strategy" },
          { title: "Creator Culture", value: "Creator Culture" },
          { title: "Engineering", value: "Engineering" },
          { title: "Data & Reports", value: "Data & Reports" },
        ],
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: "e.g. '6 min read'",
      initialValue: "5 min read",
    },
    {
      name: "featured",
      title: "Featured Dispatch",
      type: "boolean",
      description: "Show in the top featured spotlight on /blog.",
      initialValue: false,
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "body",
      title: "Body Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2 (Section Heading)", value: "h2" },
            { title: "H3 (Subheading)", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        },
        {
          name: "callout",
          title: "Retro Callout Box",
          type: "object",
          fields: [
            { name: "speaker", title: "Speaker / Tag Label", type: "string", initialValue: "THE PROBLEM" },
            { name: "quote", title: "Callout Text", type: "text" },
          ],
        },
        {
          name: "codebox",
          title: "Terminal Code Snippet",
          type: "object",
          fields: [
            { name: "title", title: "Window Title", type: "string", initialValue: "config.cfg" },
            { name: "code", title: "Code", type: "text" },
          ],
        },
      ],
    },
  ],
};
