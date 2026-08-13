import type { Metadata } from "next";
import Header from "@/modules/Navbar/Header";
import Footer from "@/modules/Footer";
import ZKPage from "@/modules/ZK";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "ZK Security",
  description:
    "yAudit zero-knowledge security services: ZK circuit audits, cryptography research, and ZK tooling.",
  alternates: { canonical: "https://yaudit.dev/zk" },
};

export default function ZPage() {
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "" }, { name: "ZK Security", path: "/zk" }])} />
      <Header />
      <ZKPage />
      <Footer />
    </div>
  );
}
