import type { Metadata } from "next";
import Header from "@/modules/Navbar/Header";
import ContactUs from "@/modules/Contact";
import Footer from "@/modules/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact yAudit to request a smart contract or zero-knowledge security audit for your protocol.",
  alternates: { canonical: "https://yaudit.dev/contact-us" },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "" }, { name: "Contact Us", path: "/contact-us" }])} />
      <Header />
      <ContactUs />
      <Footer />
    </div>
  );
}
