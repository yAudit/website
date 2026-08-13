import type { Metadata } from "next";
import Header from "@/modules/Navbar/Header";
import Footer from "../../modules/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
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

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the yAudit team: core members, residents, fellows, and alumni specializing in smart contract and zero-knowledge security.",
  alternates: { canonical: "https://yaudit.dev/team" },
};

export default function MembersPage() {
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      <Header />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "" }, { name: "Team", path: "/team" }])} />
      <div className="lg:mx-[20vw] mx-6 h-full relative">
        <About />
        <SmartContractResident />
        <ZKResident />
        <Core />
        <ResidentAlumni />
        <AlumniCore />
        <h2
          className="text-4xl mb-8 sm:text-center group relative"
          id="fellows"
        >
          <a href="#fellows" className="cursor-pointer">
            Fellows
            <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </h2>
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
