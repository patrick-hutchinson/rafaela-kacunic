import { getProjects, getHome } from "@/sanity/lib/api";

import Home from "./HomeClient";

export default async function Page() {
  const [projects, home] = await Promise.all([getProjects(), getHome()]);

  return <Home projects={projects} home={home} />;
}
