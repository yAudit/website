import type { Metadata } from "next";
import Header from "@/modules/Navbar/Header";
import Stats from "@/modules/Fellowships/Stats";
import Footer from "@/modules/Footer";
import Summary from "@/modules/Fellowships/Mid";

export const metadata: Metadata = {
  title: "Fellowships",
  description:
    "yAudit fellowship programs train the next generation of smart contract and ZK security auditors through hands-on audit experience.",
  alternates: { canonical: "https://yaudit.dev/fellowships" },
};

export default function FellowshipsPage() {
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      <Header />
      <div className="lg:mx-[20vw] mx-6 h-full relative">
        <Stats />
        <Summary />
      </div>
      <Footer />
    </div>
  );
}
