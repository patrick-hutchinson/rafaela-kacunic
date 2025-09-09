import { getProject, getProjects } from "@/sanity/lib/api";

import Project from "./ProjectClient";

export default async function Page({ params }) {
  const project = await getProject(params.slug);

  const projects = await getProjects(); // all projects
  const index = projects.findIndex((p) => p.slug.current === params.slug);

  if (!project) return notFound();

  return <Project project={project} displayNumber={index + 1} />;
}
