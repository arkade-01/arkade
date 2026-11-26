import { getProject } from "@/data/projects";
import { getPost } from "@/data/journal";

export type PageKey = "work" | "about" | "services" | "journal" | "contact";

export type WinSpec =
  | { id: PageKey; kind: "page"; href: string }
  | { id: "project"; kind: "project"; slug: string; href: string }
  | { id: "post"; kind: "post"; slug: string; href: string };

export type Route = { windows: WinSpec[]; notFound: boolean };

export const PAGES: { key: PageKey; label: string; href: string }[] = [
  { key: "work", label: "Work", href: "/work" },
  { key: "about", label: "About me", href: "/about" },
  { key: "services", label: "Services", href: "/services" },
  { key: "journal", label: "Journal", href: "/journal" },
  { key: "contact", label: "Contact", href: "/contact" },
];

const isPage = (s: string): s is PageKey => PAGES.some((p) => p.key === s);

/** Turns a URL path into the stack of windows it should show (bottom first). */
export function parseRoute(pathname: string): Route {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return { windows: [], notFound: false };

  const [first, second, ...rest] = parts;
  if (!isPage(first) || rest.length > 0) return { windows: [], notFound: true };

  const base: WinSpec = { id: first, kind: "page", href: `/${first}` };
  if (!second) return { windows: [base], notFound: false };

  if (first === "work" && getProject(second)) {
    return {
      windows: [base, { id: "project", kind: "project", slug: second, href: `/work/${second}` }],
      notFound: false,
    };
  }
  if (first === "journal" && getPost(second)) {
    return {
      windows: [base, { id: "post", kind: "post", slug: second, href: `/journal/${second}` }],
      notFound: false,
    };
  }
  return { windows: [], notFound: true };
}
