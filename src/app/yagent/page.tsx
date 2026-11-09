import type { Metadata } from "next";
import Header from "@/modules/Navbar/Header";
import Intro from "@/modules/YAgent/Intro";
import HowItWorks from "@/modules/YAgent/HowItWorks";
import Footer from "@/modules/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "yAgent",
  description:
    "yAgent is yAudit's AI security agent, a powerful AI auditor built on top of Zero Cool. Its agents map a codebase, hunt for exploitable bugs and prove each one, and the yAudit team takes every lead further.",
  alternates: { canonical: "https://yaudit.dev/yagent" },
};

export default function YAgentPage() {
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      <Header />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "yAgent", path: "/yagent" },
        ])}
      />
      <div className="lg:mx-[20vw] mx-6 h-full relative">
        <Intro />
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
}
