import { getProject } from "@/sanity/lib/api";

import Project from "./ProjectClient";

export default async function Page({ params }) {
  const project = await getProject(params.slug);
  if (!project) return notFound();

  return <Project project={project} />;
}
