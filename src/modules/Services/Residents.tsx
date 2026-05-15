 
import Link from "next/link";

export default function Residents() {
  return (
    <>
      <div className="lg:grid md:grid sm:flex grid-cols-2 gap-16 sm:flex-col my-16 justify-between text-left">
        <img
          alt="ZK & Smart Contract Expertise"
          src="/fellowship.png"
          className="lg:col-span-1 md:col-span-1 justify-self-center lg:h-[24rem] md:h-[10rem] object-cover"
        />
        <div className="lg:col-span-1 md:col-span-1 flex flex-col">
          <h2 className="lg:text-4xl text-3xl font-bold ">
            ZK & Smart Contract
          </h2>
          <h2 className="lg:text-4xl text-3xl font-bold">
            Expertise
          </h2>
          <p className="text-zinc-500 mb-4">
            <br />
            Our resident auditors are seasoned security experts specializing in zero-knowledge cryptography and smart contract security. With a proven track record of securing over $2.1B in TVL and identifying 500+ critical vulnerabilities, our team brings deep technical knowledge and practical experience to every engagement.
          </p>
          <p className="text-zinc-500 mb-4">
            We conduct comprehensive code reviews covering architecture analysis, cryptographic implementations, and smart contract logic. Our audits include detailed reports with severity classifications, proof-of-concept exploits, and remediation recommendations.
          </p>
          <p className="text-zinc-500 mb-8">
            Whether you're building zkSNARKs, zkSTARKs, or complex DeFi protocols, our auditors provide the expertise needed to identify vulnerabilities before deployment.
          </p>
          <Link href={"/contact-us"}>
            <button className="px-8 py-3 sm:w-full text-base text-white font-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700">
              Get an Audit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
