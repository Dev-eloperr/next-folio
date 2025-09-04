// components/Nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import ScrollToFooterButton from "./ScrollToFooterButton";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/work", label: "work" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">Raashi Bhandari</Link>
        <div className="flex items-center gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={clsx(
                "text-sm hover:underline",
                pathname === href && "font-medium underline"
              )}
            >
              {label}
            </Link>
          ))}
          <ScrollToFooterButton />
        </div>
      </nav>
    </header>
  );
}