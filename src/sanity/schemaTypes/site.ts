import { defineField, defineType } from "sanity";

export const site = defineType({
  name: "site",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "Site Description",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
