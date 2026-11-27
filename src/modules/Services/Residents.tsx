 
import Link from "next/link";

export default function Residents() {
  return (
    <>
      <div className="lg:grid md:grid sm:flex grid-cols-2 gap-16 sm:flex-col my-16 justify-between text-left">
        {/* From 768px up the image sits right of the text; phones skip it, so
            the page starts with the text. It keeps its own proportions: a
            fixed height with object-cover cut off its sides. */}
        <img
          alt="Smart Contract Audits"
          src="/fellowship.webp"
          className="sm:hidden lg:col-span-1 md:col-span-1 md:order-2 lg:order-2 self-center w-full h-auto"
        />
        <div className="lg:col-span-1 md:col-span-1 flex flex-col">
          <h2 className="lg:text-4xl text-3xl font-bold">
            Smart Contract Audits
          </h2>
          <p className="text-zinc-500 mb-4">
            <br />
            Our resident auditors are seasoned smart contract security experts. With a proven track record of securing over $2.1B in TVL and identifying 500+ critical vulnerabilities, our team brings deep technical knowledge and practical experience to every engagement.
          </p>
          <p className="text-zinc-500 mb-4">
            We conduct comprehensive code reviews covering architecture analysis, protocol design, and smart contract logic. Our audits include detailed reports with severity classifications, proof-of-concept exploits, and remediation recommendations.
          </p>
          <p className="text-zinc-500 mb-8">
            Whether you&apos;re building a DeFi protocol, a wallet, or onchain infrastructure, our auditors provide the expertise needed to identify vulnerabilities before deployment. Building with zero-knowledge proofs? See our{" "}
            <Link href="/zk" className="text-deepblue font-bold hover:underline">
              ZK audits
            </Link>
            .
          </p>
          <Link href={"/contact-us"}>
            <button className="px-8 py-3 sm:w-full text-base text-white font-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700">
              Start your Audit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
