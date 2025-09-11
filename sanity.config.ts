"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { muxInput } from "sanity-plugin-mux-input";
import { structure } from "@/sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: [...schemaTypes],
  },
  plugins: [structureTool({ structure }), muxInput(), visionTool({ defaultApiVersion: apiVersion })],
});
