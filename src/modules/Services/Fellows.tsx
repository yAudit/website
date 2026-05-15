import Link from "next/link";
import Image from "next/image";

export default function Fellows() {
  return (
    <>
      <div className="lg:grid md:grid sm:flex grid-cols-2 gap-16 sm:flex-col my-16 justify-between">
        <div className="lg:col-span-1 md:col-span-1 ">
          <img
            alt="Boosted Audits"
            src="/team.jpeg"
            className="lg:h-[26rem] md:h-[16rem] justify-self-center object-cover"
          />
        </div>
        <div className="lg:col-span-1 md:col-span-1 flex flex-col">
          <h2 className="lg:text-4xl text-3xl font-bold">
            Boosted Audits
          </h2>
          <p className="text-zinc-500 mb-4">
            <br />
            Experience the power of collaborative security through our Boosted Audit program. By scheduling your audit during one of our intensive fellowships, you gain access to 50+ talented security researchers who work alongside our resident auditors to scrutinize every aspect of your codebase.
          </p>
          <p className="text-zinc-500 mb-4">
            Our fellowship programs attract top-tier talent from around the globe, including researchers from leading blockchain projects, academic institutions, and security firms. These fellows compete to identify vulnerabilities, earning recognition and prizes for their discoveries while providing you with unparalleled security coverage.
          </p>
          <p className="text-zinc-500 mb-8">
            This unique model combines the depth of expert analysis with the breadth of crowdsourced security review, ensuring comprehensive coverage at multiple security layers. Past boosted audits have uncovered critical issues that traditional audits missed, protecting millions in user funds.
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
