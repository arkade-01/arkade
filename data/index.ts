import { linkedin, github, x } from "@/public/images";

// Used by the /resume page navbar.
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const navSocials = [
  { name: "git", img: github, path: "https://github.com/arkade-01" },
  { name: "x", img: x, path: "https://x.com/01_arkade" },
  { name: "linkedin", img: linkedin, path: "https://www.linkedin.com/in/Noahbiliamin15" },
];

export * from "./projects";
export * from "./journal";
export * from "./site";
