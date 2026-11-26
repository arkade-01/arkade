import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

// /resume keeps its original look, outside the desktop.
export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <div className={`legacy ${montserrat.className}`}>{children}</div>;
}
