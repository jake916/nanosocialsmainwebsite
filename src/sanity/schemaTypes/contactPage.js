import { defineField, defineType } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "CONNECT WITH NANOSOCIALS",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "Get in touch. Good campaigns deserve to travel.",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
      initialValue:
        "Whether you are launching a product drop, looking to activate 20 creators simultaneously, or wanting to join our 500 graded Ninjas — our campaign directors are ready.",
    }),
    defineField({
      name: "email",
      title: "General Inquiries Email",
      type: "string",
      initialValue: "info@nanosocials.com",
    }),
    defineField({
      name: "addressTitle",
      title: "HQ Title",
      type: "string",
      initialValue: "HQ & Creator Studio",
    }),
    defineField({
      name: "addressLocation",
      title: "Location",
      type: "string",
      initialValue: "Lagos, Nigeria",
    }),
    defineField({
      name: "responseSla",
      title: "Response SLA",
      type: "string",
      initialValue: "Under 4 hours (Mon-Sat, 8am-8pm WAT)",
    }),
  ],
});
