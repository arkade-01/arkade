import type { Metadata } from "next";
import { posts, getPost } from "@/data/journal";

// Unknown slugs 404 (the root not-found page shows the desktop error dialog).
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default function Page() {
  return null;
}
