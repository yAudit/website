import Link from "next/link";

export default function Fellows() {
  return (
    <div className="my-16">
      {/* The title spans the whole width, as on Smart Contract Audits. */}
      <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-5xl md:text-3xl sm:text-3xl font-bold">
        Boosted Audits
      </h1>
      <div className="mt-8 lg:grid md:grid sm:flex grid-cols-2 gap-16 sm:flex-col justify-between">
        {/* From 768px up the image sits right of the text; phones skip it, so
            the page starts with the text. It keeps its own proportions: a
            fixed height with object-cover cut off its sides. */}
        <div className="sm:hidden lg:col-span-1 md:col-span-1 md:order-2 lg:order-2 self-center">
          <img
            alt="Boosted Audits"
            src="/team.webp"
            className="w-full h-auto"
          />
        </div>
        <div className="lg:col-span-1 md:col-span-1 flex flex-col">
          <p className="text-zinc-500 mb-4">
            Experience the power of collaborative security through our Boosted Audit program. By scheduling your audit during one of our intensive fellowships, you gain access to 50+ talented security researchers who work alongside our resident auditors to scrutinize every aspect of your codebase.
          </p>
          <p className="text-zinc-500 mb-4">
            Our fellowship programs attract top-tier talent from around the globe, including researchers from leading blockchain projects, academic institutions, and security firms. These fellows compete to identify vulnerabilities, earning recognition and prizes for their discoveries while providing you with unparalleled security coverage.
          </p>
          <p className="text-zinc-500 mb-8">
            This unique model combines the depth of expert analysis with the breadth of crowdsourced security review, ensuring comprehensive coverage at multiple security layers. Past boosted audits have uncovered critical issues that traditional audits missed, protecting millions in user funds.
          </p>
          <Link href={"/contact-us?service=boosted-audit"}>
            <button className="px-8 py-3 sm:w-full text-base text-white font-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700">
              Start your Audit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
