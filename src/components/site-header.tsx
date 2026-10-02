"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-white/50 bg-white/75 px-3 py-2 shadow-[0_10px_40px_rgb(18_18_18/0.08)] backdrop-blur-xl md:px-4">
        <Link href="/" className="pl-2 font-display text-2xl tracking-tight text-onyx" aria-label="BA, início">
          BA
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-mono text-[0.66rem] uppercase tracking-[0.18em] transition-colors",
                isActive(pathname, item.href) ? "text-royal" : "text-onyx/80 hover:text-onyx",
              )}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contactos#marcar"
            className="inline-flex h-10 items-center rounded-full bg-royal px-4 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_rgb(0_94_240/0.35)] transition hover:bg-royal/90"
          >
            Marcar
          </Link>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-10 rounded-full border-onyx/10 bg-white md:hidden"
            aria-expanded={open}
            aria-controls="menu-movel"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open ? (
          <nav
            id="menu-movel"
            className="absolute inset-x-0 top-[calc(100%+0.6rem)] rounded-3xl border border-onyx/10 bg-white/95 p-4 shadow-xl backdrop-blur-xl md:hidden"
            aria-label="Móvel"
          >
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-2xl px-3 py-3 font-mono text-xs uppercase tracking-[0.18em]",
                      isActive(pathname, item.href) ? "bg-alabaster text-royal" : "text-onyx",
                    )}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
