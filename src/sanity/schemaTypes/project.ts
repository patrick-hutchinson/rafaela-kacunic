import { defineField, defineType } from "sanity";
import { thumbnail } from "./types/thumbnail";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "orderRank",
      title: "Order Rank",
      type: "string",
      hidden: true, // required by the plugin, but hidden in Studio
    }),
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "thumbnail",
      description: "Displayed on the homepage. Please upload 9:16 only!",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "service", title: "Service", type: "string" }),
    defineField({ name: "client", title: "Client", type: "string" }),
    defineField({
      name: "imagegallery",
      title: "Image & Video Gallery",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "image", type: "image", hidden: ({ parent }) => !!parent?.video },
            { name: "video", type: "mux.video", hidden: ({ parent }) => !!parent?.image },
          ],
          preview: {
            select: {
              image: "image",
              video: "video",
            },
            prepare({ image, video }) {
              return {
                title: image ? "Image" : "Video",
                media: image || video,
              };
            },
          },
        },
      ],
      options: {
        layout: "grid",
      },
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
  preview: {
    select: {
      title: "name",
      media: "thumbnail.image", // if your thumbnail type contains an `image` field
    },
    prepare({ title, media }) {
      return {
        title: title || "Untitled Project",
        media,
      };
    },
  },
});
