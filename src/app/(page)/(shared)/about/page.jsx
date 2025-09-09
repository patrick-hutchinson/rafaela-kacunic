import { getAbout } from "@/sanity/lib/api";

import AboutClient from "./AboutClient";

export default async function About() {
  const about = await getAbout();

  return <AboutClient about={about} />;
}
