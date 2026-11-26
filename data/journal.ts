// Journal posts, newest first. Each post gets a page at /journal/[slug].
//
// Example:
// {
//   slug: "settlement-retries",
//   title: "Retrying settlements without paying twice",
//   date: "2026-12-01",
//   tag: "Payments",
//   summary: "Idempotency keys, and where they belong.",
//   body: ["First paragraph.", "Second paragraph."],
// },

export type Post = {
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  tag: string;
  summary: string;
  body: string[];
};

export const posts: Post[] = [];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
