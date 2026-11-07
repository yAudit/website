"use client";

import { X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Reports", href: "https://reports.yaudit.dev/", external: true },
  { label: "Blog", href: "https://blog.yaudit.dev/", external: true },
  { label: "Research", href: "https://research.yaudit.dev/", external: true },
  { label: "Fellowships", href: "/fellowships" },
  { label: "yBorg", href: "/yborg" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
];

// The menu item for the current page. External items belong to other sites,
// which show their own section next to the logo.
function useActiveItem(): NavItem | undefined {
  const pathname = usePathname() ?? "";
  return NAV_ITEMS.find(
    (item) =>
      !item.external &&
      (pathname === item.href || pathname.startsWith(`${item.href}/`))
  );
}

function NavLink({
  item,
  className,
  onClick,
}: {
  item: NavItem;
  className: string;
  onClick?: () => void;
}) {
  return item.external ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {item.label}
    </a>
  ) : (
    <Link href={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  );
}

interface Props {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

// The site defines sm, md and lg as ranges (tailwind.config.ts), so a class
// that applies from 768px up needs both "md:" and "lg:".
export function Navbar({ menuOpen, setMenuOpen }: Props) {
  const activeItem = useActiveItem();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-950/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <Link
          href={"/"}
          className="flex items-center gap-3"
          aria-label={activeItem ? `yAudit ${activeItem.label}` : "yAudit"}
        >
          <img src="/logo.svg" className="h-9 w-auto" alt="yAudit" />
          {activeItem && (
            <span className="hidden border-l border-zinc-300 pl-3 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 md:inline lg:inline">
              {activeItem.label}
            </span>
          )}
        </Link>

        <div className="flex items-center">
          <nav className="hidden items-center text-sm font-medium lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                className={`px-5 py-3 decoration-deepblue decoration-2 underline-offset-8 transition hover:text-deepblue hover:underline ${
                  item === activeItem ? "text-deepblue" : "text-zinc-400"
                }`}
              />
            ))}
          </nav>

          <Link
            href={"/contact-us"}
            className="inline-flex items-center border border-deepblue bg-deepblue px-8 py-3 text-sm font-semibold text-white transition duration-700 hover:bg-white hover:text-deepblue lg:ml-3"
          >
            Contact
          </Link>

          <button
            className="ml-2 px-3 py-3 lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}

interface MobileProps {
  setMenuOpen: (menuOpen: boolean) => void;
}

export function MobileNavbar({ setMenuOpen }: MobileProps) {
  const activeItem = useActiveItem();
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      } else if (event.key === "Tab") {
        const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [setMenuOpen]);
  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-white"
    >
      <div className="pt-8 mx-auto flex flex-col p-8 gap-2">
        <button
          ref={closeRef}
          aria-label="Close menu"
          onClick={() => {
            setMenuOpen(false);
          }}
          className="text-deepblue"
        >
          <X style={{ fontSize: "2rem" }} size={32} />
        </button>

        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.label}
            item={item}
            onClick={() => setMenuOpen(false)}
            className={`block p-6 w-full text-center text-xl hover:text-deepblue hover:bg-deepblue hover:bg-opacity-5 duration-700 ${
              item === activeItem ? "text-deepblue" : "text-zinc-400"
            }`}
          />
        ))}

        <Link href={"/contact-us"}>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="p-6 w-full text-xl text-white bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700"
          >
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}
