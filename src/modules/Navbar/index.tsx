"use client";

import { ArrowUpRight, ChevronDown, X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

type NavEntry = NavItem | NavGroup;

const NAV: NavEntry[] = [
  { label: "Services", href: "/services" },
  { label: "yAgent", href: "/yagent" },
  {
    label: "Programs",
    items: [
      { label: "Fellowships", href: "/fellowships" },
      { label: "yBorg", href: "/yborg" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Reports", href: "https://reports.yaudit.dev/", external: true },
      { label: "Blog", href: "https://blog.yaudit.dev/", external: true },
      { label: "Research", href: "https://research.yaudit.dev/", external: true },
    ],
  },
  { label: "Team", href: "/team" },
];

function isGroup(entry: NavEntry): entry is NavGroup {
  return "items" in entry;
}

const NAV_ITEMS: NavItem[] = NAV.flatMap((entry) =>
  isGroup(entry) ? entry.items : [entry]
);

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
      <ArrowUpRight
        aria-hidden="true"
        className="ml-1 inline h-[0.9em] w-[0.9em] align-[-0.1em]"
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <Link href={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  );
}

// A menu entry that opens a list of links. It opens on hover and on click;
// a keyboard click toggles it, and Escape or a click outside closes it.
function NavDropdown({
  group,
  activeItem,
}: {
  group: NavGroup;
  activeItem: NavItem | undefined;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const active = activeItem !== undefined && group.items.includes(activeItem);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus({ preventScroll: true });
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        // A pointer click keeps the list open after hover opened it.
        onClick={(event) => setOpen(event.detail === 0 ? !open : true)}
        className={`flex items-center gap-1 px-5 py-3 decoration-deepblue decoration-2 underline-offset-8 transition hover:text-deepblue hover:underline ${
          active || open ? "text-deepblue" : "text-zinc-400"
        }`}
      >
        {group.label}
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        // The padding lines the list up with the bottom of the header and
        // keeps the pointer inside the entry on its way down.
        <div id={listId} className="absolute left-0 top-full pt-2.5">
          <div className="min-w-[12rem] border border-zinc-950/10 bg-white py-2 shadow-lg">
            {group.items.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                onClick={() => setOpen(false)}
                className={`block whitespace-nowrap px-5 py-2.5 transition hover:bg-deepblue/5 hover:text-deepblue ${
                  item === activeItem ? "text-deepblue" : "text-zinc-500"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface Props {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

// The site defines sm, md and lg as ranges (tailwind.config.ts), so a class
// that applies from 768px up needs both "md:" and "lg:".
//
// The pages lay their content out with "mx-6 lg:mx-[20vw]". The header uses
// the same side margins, so the logo and Contact line up with the content.
// On narrower desktop widths 20vw leaves no room for the menu, so the margin
// shrinks there to what the menu needs (about 1000px), and never below 2rem.
export function Navbar({ menuOpen, setMenuOpen }: Props) {
  const activeItem = useActiveItem();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-950/10 bg-white/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6 lg:px-[max(2rem,min(20vw,calc((100vw_-_1000px)/2)))]">
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
            {NAV.map((entry) =>
              isGroup(entry) ? (
                <NavDropdown
                  key={entry.label}
                  group={entry}
                  activeItem={activeItem}
                />
              ) : (
                <NavLink
                  key={entry.label}
                  item={entry}
                  className={`px-5 py-3 decoration-deepblue decoration-2 underline-offset-8 transition hover:text-deepblue hover:underline ${
                    entry === activeItem ? "text-deepblue" : "text-zinc-400"
                  }`}
                />
              )
            )}
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
      // Returning focus to the sticky header must not scroll the page.
      previousFocus?.focus({ preventScroll: true });
    };
  }, [setMenuOpen]);

  const linkClass = (item: NavItem) =>
    `block px-6 py-4 w-full text-center text-xl hover:text-deepblue hover:bg-deepblue hover:bg-opacity-5 duration-700 ${
      item === activeItem ? "text-deepblue" : "text-zinc-400"
    }`;

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

        {/* On phones the groups are flattened into one plain list. */}
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.label}
            item={item}
            onClick={() => setMenuOpen(false)}
            className={linkClass(item)}
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
