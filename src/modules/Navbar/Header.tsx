"use client";

import { useState } from "react";
import { Navbar, MobileNavbar } from "@/modules/Navbar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return menuOpen ? (
    <MobileNavbar setMenuOpen={setMenuOpen} />
  ) : (
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  );
}
