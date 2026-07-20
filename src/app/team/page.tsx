"use client";

import { useState } from "react";
import { Navbar, MobileNavbar } from "@/modules/Navbar";
import Footer from "../../modules/Footer";
import Core from "../../modules/Members/1-Core";
import {
  SmartContractResident,
  ResidentAlumni,
  AlumniCore,
  ZKResident,
} from "../../modules/Members/2-Residents";
import {
  Block1,
  Block2,
  Block3,
  Block4,
  Block5,
  Block6,
  Block7,
  ZBlock1,
  ZBlock2,
} from "../../modules/Members/3-Fellows";
import { About } from "@/modules/Home/About";

export default function MembersPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      {menuOpen ? (
        <MobileNavbar setMenuOpen={setMenuOpen} />
      ) : (
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
      <div className="lg:mx-[20vw] mx-6 h-full relative">
        <About />
        <SmartContractResident />
        <ZKResident />
        <Core />
        <ResidentAlumni />
        <AlumniCore />
        <h1
          className="text-4xl mb-8 sm:text-center group relative cursor-pointer" 
          id="fellows"
          onClick={() => {
            const url = new URL(window.location.href);
            url.hash = 'fellows';
            window.history.pushState({}, '', url.toString());
          }}
        >
          Fellows
          <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </h1>
        <ZBlock2 />
        <ZBlock1 />
        <Block7 />
        <Block6 />
        <Block5 />
        <Block4 />
        <Block3 />
        <Block2 />
        <Block1 />
      </div>
      <Footer />
    </div>
  );
}
