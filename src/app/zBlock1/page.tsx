import type { Metadata } from "next";
import Header from "@/modules/Navbar/Header";
import Footer from "@/modules/Footer";
import ZBlock1Modules from "@/modules/Zblock1/zBlock1";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "zBlock 1",
  description:
    "Lectures, exercises, and reports from zBlock 1, the first block of yAudit's zero-knowledge fellowship program.",
  alternates: { canonical: "https://yaudit.dev/zBlock1" },
};

export default function ZblockPage() {
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      <Header />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "" }, { name: "Fellowships", path: "/fellowships" }, { name: "zBlock 1", path: "/zBlock1" }])} />
      <div className="lg:mx-[20vw] mx-6">
        <ZBlock1Modules />
      </div>
      <Footer />
    </div>
  );
}
