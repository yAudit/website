 
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";

const features = [
  {
    name: "Smart Contract Audits",
    description: "Get your smart contracts audited by our top-tier resident auditors. From DeFi protocols to wallets and infrastructure - we tackle it all",
    href: "/services/smart-contract-audits",
    cta: "Learn more",
    className: "",
    background: (
      <>
        <img
          alt=""
          src="/fellowship.webp"
          className="h-[10rem] mx-auto transition-all ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)] group-hover:scale-105"
        />{" "}
      </>
    ),
  },
  {
    name: "ZK Audits",
    description:
      "Get your zero-knowledge circuits and cryptographic implementations audited by our ZK specialists.",
    href: "/zk",
    cta: "Learn more",
    className: "",
    background: (
      <>
        <img
          alt=""
          src="/dd.webp"
          className="h-[12rem] mx-auto transition-all ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)] group-hover:scale-105"
        />
      </>
    ),
  },
  {
    name: "Boosted Audits",
    description:
      "Get 50 additional eyes on your codebase by scheduling your audit during our highly competitive fellowships",
    href: "/services/boosted-audits",
    cta: "Learn more",
    className: "",
    background: (
      <>
        <img
          alt=""
          src="/team.webp"
          className="h-[12rem] mx-auto transition-all  ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
        />
      </>
    ),
  },
];

export default function Services() {
  return (
    <div className="h-full flex flex-col my-16 sm:mx-6 md:mx-6 lg:mx-[20vw] ">
      <h2 className="lg:text-4xl text-3xl font-bold mb-8 sm:text-center">
        Services
      </h2>
      {/* At least the grid's usual 22rem per card, taller when three columns
          leave a description no room. */}
      <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(22rem,auto)]">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
