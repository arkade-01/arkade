import type { Metadata, Viewport } from "next";
import { Courier_Prime, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixel = Pixelify_Sans({ subsets: ["latin"], weight: ["700"], variable: "--font-pixel" });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-courier" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arkade.lol"),
  title: {
    default: "Arkade | Backend Engineer — APIs, Real-time Systems & Payments",
    template: "%s | arkade",
  },
  description:
    "Backend engineer in Lagos. APIs, real-time bots and payment rails for teams that need it shipped. NestJS, Python and on-chain integrations.",
};

export const viewport: Viewport = {
  themeColor: "#5a3d28",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${pixel.variable} ${courier.variable}`}>
      <body>{children}</body>
    </html>
  );
}
