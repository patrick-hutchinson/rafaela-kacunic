import { getLegal } from "@/sanity/lib/api";
import LegalClient from "./LegalClient";

export default async function Legal() {
  const legal = await getLegal();

  return <LegalClient legal={legal} />;
}
