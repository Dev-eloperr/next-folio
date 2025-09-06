// components/Nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import ScrollToFooterLink from "./ScrollToFooterLink";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about me" },
  { href: "/work", label: "work" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white drop-shadow-md">
      <nav className="mx-auto max-w-7xl px-4 h-[120px] flex items-center justify-between font-secondary">
        <div className="flex items-center gap-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={clsx(
                "px-6 py-2  rounded-[70px] transition-colors hover:opacity-80",
                "bg-[rgba(239,239,239,1)]",
                pathname === href && "border-[1px] border-b-black"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="font-semibold">Raashi Bhandari</Link>
        </div>
        <ScrollToFooterLink />
      </nav>
    </header>
  );
}