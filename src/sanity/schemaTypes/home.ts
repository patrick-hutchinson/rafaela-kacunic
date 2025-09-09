import { defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [defineField({ name: "tagline", title: "Tagline", type: "string" })],
});
