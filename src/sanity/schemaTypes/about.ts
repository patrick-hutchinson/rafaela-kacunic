import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Platform", type: "string" },
            { name: "link", title: "url", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "badland",
      title: "Badland",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
