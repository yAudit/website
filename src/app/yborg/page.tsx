import type { Metadata } from "next";
import Header from "@/modules/Navbar/Header";
import Intro from "@/modules/YBorg/Intro";
import Resources from "@/modules/YBorg/Resources";
import Footer from "@/modules/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "yBorg",
  description:
    "yBorg was a four-week yAudit fellowship where fellows built their own AI-assisted security tooling and used it for bug bounty hunting and live audits.",
  alternates: { canonical: "https://yaudit.dev/yborg" },
};

export default function YBorgPage() {
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      <Header />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Fellowships", path: "/fellowships" },
          { name: "yBorg", path: "/yborg" },
        ])}
      />
      <div className="lg:mx-[20vw] mx-6 h-full relative">
        <Intro />
        <Resources />
      </div>
      <Footer />
    </div>
  );
}
