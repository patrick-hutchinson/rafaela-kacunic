import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import type { StructureResolver } from "sanity/structure";

// Define singleton document IDs here
const singletons = ["home", "about", "legal"];

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      // Singleton Home document
      S.listItem().title("Home").child(
        S.document().schemaType("home").documentId("home") // ensures always the same document
      ),

      S.listItem().title("About").child(
        S.document().schemaType("about").documentId("about") // ensures always the same document
      ),

      S.listItem().title("Legal").child(
        S.document().schemaType("legal").documentId("legal") // ensures always the same document
      ),

      // Orderable Projects
      orderableDocumentListDeskItem({ type: "project", title: "Project", S, context }),

      // Everything else (exclude singleton types and project)
      ...S.documentTypeListItems().filter((listItem) => ![...singletons, "project"].includes(listItem.getId()!)),
    ]);
