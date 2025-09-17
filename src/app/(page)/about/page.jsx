import { getAbout } from "@/sanity/lib/api";

import AboutClient from "./AboutClient";

export const revalidate = 60; // seconds

export default async function About() {
  const about = await getAbout();

  return <AboutClient about={about} />;
}
