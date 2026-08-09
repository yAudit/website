import type { Metadata } from "next";
import Header from "@/modules/Navbar/Header";
import Sections from "@/modules/Services";
import Footer from "@/modules/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "yAudit services: smart contract and ZK security audits, boosted audits, due diligence, research, and training.",
  alternates: { canonical: "https://yaudit.dev/services" },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}
