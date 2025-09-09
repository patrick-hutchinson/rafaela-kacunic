import { client } from "./client";
import { projectsQuery, projectQuery, homeQuery, aboutQuery, legalQuery } from "./queries";

export async function getProjects() {
  return client.fetch(projectsQuery);
}
export async function getProject(slug) {
  const project = await client.fetch(projectQuery, { slug });
  return project;
}
export async function getHome(slug) {
  return client.fetch(homeQuery, { slug });
}
export async function getAbout(slug) {
  return client.fetch(aboutQuery, { slug });
}
export async function getLegal(slug) {
  return client.fetch(legalQuery, { slug });
}
