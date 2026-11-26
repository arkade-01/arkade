import type { Metadata } from "next";
import OS from "@/components/os/OS";

export const metadata: Metadata = { title: "Not found" };

// Renders the desktop; OS sees an unknown URL and shows the error dialog.
export default function NotFound() {
  return <OS />;
}
