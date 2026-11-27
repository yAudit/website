import Link from "next/link";

export default function Residents() {
  return (
    <div className="my-16 text-left">
      {/* The title spans the whole width, so "Smart Contract Audits" stays on
          one line at the size of the other page titles. */}
      <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-5xl md:text-3xl sm:text-3xl font-bold">
        Smart Contract Audits
      </h1>
      <div className="mt-8 lg:grid md:grid sm:flex grid-cols-2 gap-16 sm:flex-col justify-between">
        {/* From 768px up the image sits right of the text; phones skip it, so
            the page starts with the text. It keeps its own proportions: a
            fixed height with object-cover cut off its sides. */}
        <img
          alt="Smart Contract Audits"
          src="/fellowship.webp"
          className="sm:hidden lg:col-span-1 md:col-span-1 md:order-2 lg:order-2 self-center w-full h-auto"
        />
        <div className="lg:col-span-1 md:col-span-1 flex flex-col">
          <p className="text-zinc-500 mb-4">
            Our resident auditors are seasoned smart contract security experts. With a proven track record of securing over $2.1B in TVL and identifying 500+ critical vulnerabilities, our team brings deep technical knowledge and practical experience to every engagement.
          </p>
          <p className="text-zinc-500 mb-4">
            We conduct comprehensive code reviews covering architecture analysis, protocol design, and smart contract logic. Our audits include detailed reports with severity classifications, proof-of-concept exploits, and remediation recommendations.
          </p>
          {/* No button here: each audit option below has its own. */}
          <p className="text-zinc-500">
            Whether you&apos;re building a DeFi protocol, a wallet, or onchain infrastructure, our auditors provide the expertise needed to identify vulnerabilities before deployment. Building with zero-knowledge proofs? See our{" "}
            <Link href="/zk" className="text-deepblue font-bold hover:underline">
              ZK audits
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
