import Header from "@/modules/Navbar/Header";
import HeroSection from "@/modules/Home/1-Hero-Section";
import Footer from "@/modules/Footer";
import Partners from "@/modules/Home/2-Clients";
import Feedback from "@/modules/Home/6-Feedback";
import Services from "@/modules/Home/3-Services";
import Fellowships from "@/modules/Home/4-Fellowships";
import Research from "@/modules/Home/5-Research";
import { AuditStats } from "@/modules/Home/7-Stats";

export default function Home() {
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      <Header />

      <HeroSection />

      <AuditStats />
      <Partners />
      <Feedback />

      <Services />
      <Research />
      <Fellowships />
      <Footer />
    </div>
  );
}
