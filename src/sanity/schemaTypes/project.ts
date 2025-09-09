import { defineField, defineType } from "sanity";
import { thumbnail } from "./types/thumbnail";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "orderRank",
      title: "Order Rank",
      type: "string",
      hidden: true, // required by the plugin, but hidden in Studio
    }),
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image_gallery",
      title: "Image Gallery",
      type: "array",
      of: [{ name: "image", title: "Image", type: "image" }],
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "thumbnail",
      description: "As seen on home page",
    }),
    defineField({
      name: "slug",
      title: "url",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
