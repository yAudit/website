import type { Metadata } from "next";
import Header from "@/modules/Navbar/Header";
import Sections from "@/modules/Services";
import Footer from "@/modules/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "yAudit services: smart contract and ZK security audits, boosted audits, due diligence, research, and training.",
  alternates: { canonical: "https://yaudit.dev/services" },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "" }, { name: "Services", path: "/services" }])} />
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}
