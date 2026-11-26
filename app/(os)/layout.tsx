import OS from "@/components/os/OS";

// The desktop persists across these routes; each page only sets metadata.
// OS reads the URL and opens the matching windows.
export default function DesktopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OS />
      {children}
    </>
  );
}
