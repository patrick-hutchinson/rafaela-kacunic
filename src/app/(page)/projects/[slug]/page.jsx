import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/sanity/lib/api";
import Project from "./ProjectClient";

export default async function Page({ params }) {
  const { slug } = await params; // ✅ wait for params

  // const project = await getProject(slug);
  const projects = await getProjects();
  const index = projects.findIndex((p) => p.slug.current === slug);
  const project = projects[index];

  if (!project) return notFound();

  return <Project project={project} project_index={index + 1} />;
}
