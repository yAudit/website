import type { Metadata } from "next";
import Header from "@/modules/Navbar/Header";
import Footer from "@/modules/Footer";
import ZBlock2Modules from "@/modules/Zblock2/zBlock2";

export const metadata: Metadata = {
  title: "zBlock 2",
  description:
    "Lectures, exercises, and reports from zBlock 2, the second block of yAudit's zero-knowledge fellowship program.",
  alternates: { canonical: "https://yaudit.dev/zBlock2" },
};

export default function ZblockPage() {
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      <Header />
      <div className="lg:mx-[20vw] mx-6">
        <ZBlock2Modules />
      </div>
      <Footer />
    </div>
  );
}
