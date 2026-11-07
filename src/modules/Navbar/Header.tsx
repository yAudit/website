"use client";

import { useState } from "react";
import { Navbar, MobileNavbar } from "@/modules/Navbar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <MobileNavbar setMenuOpen={setMenuOpen} />}
    </>
  );
}
