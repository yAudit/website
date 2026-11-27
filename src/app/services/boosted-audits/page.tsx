import type { Metadata } from "next";
import Header from "@/modules/Navbar/Header";
import { BoostedAudits } from "@/modules/Services";
import Footer from "@/modules/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Boosted Audits",
  description:
    "Boosted audits by yAudit: schedule your audit during a fellowship and get 50+ security researchers reviewing your code alongside our resident auditors.",
  alternates: { canonical: "https://yaudit.dev/services/boosted-audits" },
};

export default function BoostedAuditsPage() {
  return (
    // min-h-screen with a growing content (modules/Services) keeps the footer
    // at the bottom of the window when the page is shorter than the screen.
    <div className="flex min-h-screen flex-col bg-white text-black w-full font-default">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Boosted Audits", path: "/services/boosted-audits" },
        ])}
      />
      <Header />
      <BoostedAudits />
      <Footer />
    </div>
  );
}
