export const siteSettingsType = {
  name: "siteSettings",
  title: "Site Global Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      initialValue: "Nanosocials",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "You run it. We built the rails.",
    },
    {
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      initialValue: "info@nanosocials.com",
    },
    {
      name: "proofNumbers",
      title: "Homepage Proof Band Numbers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Stat Value (e.g. 100%)", type: "string" },
            { name: "label", title: "Stat Label", type: "string" },
          ],
        },
      ],
    },
  ],
};
