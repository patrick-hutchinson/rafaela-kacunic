import { getProjects, getHome, getAbout } from "@/sanity/lib/api";

import Home from "./HomeClient";

export default async function Page() {
  const [projects, home, about] = await Promise.all([getProjects(), getHome(), getAbout()]);

  return <Home projects={projects} home={home} about={about} />;
}
