import { defineField, defineType } from "sanity";

export const legal = defineType({
  name: "legal",
  title: "Legal",
  type: "document",
  fields: [
    defineField({
      name: "imprint",
      title: "Imprint",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "privacy_policy",
      title: "Privacy Policy",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Legal Info" }),
  },
});
