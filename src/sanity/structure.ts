import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import type { StructureResolver } from "sanity/structure";

// Define singleton document IDs here
const singletons = ["home", "about", "legal"];

// Add other types you want to hide from Desk here
const hiddenTypes = [...singletons, "project", "mux.videoAsset"];

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      // Singleton Home document
      S.listItem().title("Home").child(S.document().schemaType("home").documentId("home")),

      S.listItem().title("About").child(S.document().schemaType("about").documentId("about")),

      S.listItem().title("Legal").child(S.document().schemaType("legal").documentId("legal")),

      // Orderable Projects
      orderableDocumentListDeskItem({
        type: "project",
        title: "Projects",
        S,
        context,
      }),

      // Everything else (exclude hidden types)
      ...S.documentTypeListItems().filter((listItem) => !hiddenTypes.includes(listItem.getId()!)),
    ]);
