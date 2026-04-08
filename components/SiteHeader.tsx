"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems: { href: string; label: string; match?: (path: string) => boolean }[] = [
  { href: "/", label: "Home", match: (p) => p === "/" },
  {
    href: "/campaign-projects",
    label: "Campaign Projects",
    match: (p) => p === "/campaign-projects" || p === "/free-people-spec",
  },
  {
    href: "/travel",
    label: "Travel",
    match: (p) =>
      p === "/travel" || p === "/morocco" || p === "/montreal" || p === "/barcelona",
  },
  { href: "/personal-essays", label: "Personal Essays", match: (p) => p === "/personal-essays" },
  { href: "/about", label: "About", match: (p) => p === "/about" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-logo" href="/">
          Yousra Ghassat
        </Link>
        <nav className="nav-main" aria-label="Primary">
          {navItems.map(({ href, label, match }) => {
            const isCurrent = match ? match(pathname) : pathname === href;
            return (
              <Link key={href} href={href} aria-current={isCurrent ? "page" : undefined}>
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
