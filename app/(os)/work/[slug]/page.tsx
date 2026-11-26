import type { Metadata } from "next";
import { projects, getProject } from "@/data/projects";

// Unknown slugs 404 (the root not-found page shows the desktop error dialog).
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  return p ? { title: p.name, description: p.summary } : {};
}

export default function Page() {
  return null;
}
