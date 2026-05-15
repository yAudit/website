import Image from "next/image";
import Link from "next/link";

export default function DueDiligence() {
  return (
    <>
      <div className="lg:grid md:grid sm:flex grid-cols-2 gap-16 sm:flex-col my-16 justify-between text-left">
        <div className="lg:col-span-1 md:col-span-1">
          <img alt="Consulting" src="/dd.png" className="h-[26rem] justify-self-center object-cover" />
        </div>
        <div className="lg:col-span-1 md:col-span-1 flex flex-col">
          <h2 className="lg:text-4xl text-3xl font-bold">
            Consulting
          </h2>
          <p className="text-zinc-500 mb-4">
            <br />
            Beyond traditional audits, we offer comprehensive consulting services for blockchain projects at any stage of development. Our team provides strategic guidance on security architecture, protocol design, cryptographic implementations, and best practices for building secure decentralized systems.
          </p>
          <p className="text-zinc-500 mb-4">
            Our due diligence services include in-depth analysis of project architecture, algorithm correctness verification, threat modeling, and risk assessment. We evaluate the technical foundations of protocols, identifying potential weaknesses in design before they become code-level vulnerabilities.
          </p>
          <p className="text-zinc-500 mb-8">
            Whether you're building a new ZK proof system, designing a novel consensus mechanism, or integrating complex cryptographic primitives, our consultants bring the expertise to validate your approach. We work closely with your team to ensure security is built in from the ground up, not bolted on as an afterthought.
          </p>
          <Link href={"/contact-us"}>
            <button className="px-8 py-3 sm:w-full text-base text-white font-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700">
              Enquire
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
