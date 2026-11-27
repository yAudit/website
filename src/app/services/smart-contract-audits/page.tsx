import type { Metadata } from "next";
import Header from "@/modules/Navbar/Header";
import { SmartContractAudits } from "@/modules/Services";
import Footer from "@/modules/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Smart Contract Audits",
  description:
    "Smart contract security audits by yAudit: Full Audit, Focused Audit, yAgent Review and Update Review.",
  alternates: { canonical: "https://yaudit.dev/services/smart-contract-audits" },
};

export default function SmartContractAuditsPage() {
  return (
    // min-h-screen with a growing content (modules/Services) keeps the footer
    // at the bottom of the window when the page is shorter than the screen.
    <div className="flex min-h-screen flex-col bg-white text-black w-full font-default">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Smart Contract Audits", path: "/services/smart-contract-audits" },
        ])}
      />
      <Header />
      <SmartContractAudits />
      <Footer />
    </div>
  );
}
