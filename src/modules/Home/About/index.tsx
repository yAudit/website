export const About = () => {
  return (
    <div className="bg-white text-lg my-16">
      <h2 className="lg:text-4xl text-3xl font-bold">
        About the Team
      </h2>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 text-zinc-700  mt-8">
        <div className="col-span-1 text-base">
          <p className="">
            yAudit is focused on smart contracts and zero-knowledge security:{" "}
            <i className="font-semibold">
              auditing, research, and increasingly tooling.
            </i>
            <br />
            <br />
          </p>
          <p className="">
            Our core values are: <br />
          </p>
          <ul className="list-disc list-inside font-semibold">
            <li>Rigour</li>

            <li>Meritocracy</li>

            <li>Labour is Equity</li>

            <li>Public goods are good</li>
          </ul>
          <br />
          <p>
            We launched late 2021 to help make DeFi more secure and have since
            then secured contracts holding billions in TVL. <br /> <br />
          </p>
          <p>
            In 2024, we expanded to zero-knowledge security and research with :
            <br />
          </p>
          <ul className="list-disc list-inside font-semibold">
            <li>The SNARKification of the Ethereum protocol.</li>
            <li>
              The proliferation of ZK-powered networks, dApps, and cross-chain
              middleware.
            </li>
            <li>
              The increasing role of ZK in hardening Web2 with primitives such
              as zkEmail and MP-TLS ("zkTLS").
            </li>
          </ul>
          <br />
          {/* <p>
            In the past three years, we have <br />
            <br />
          </p> */}
          <p>
            Our expansion in ZK Security was accelerated by {" "}
            <a
              className="hover:underline font-bold duration-700 text-deepblue"
              href="https://x.com/electisec/status/1787559678026948811"
            >
              a grant from the Ethereum Foundation
            </a>{" "}
            for our 2nd incubation fellowship, for which we are grateful.
          </p>
        </div>
        <div className="lg:col-span-1 sm:hidden md:hidden">
          <img
            src="/team.jpeg"
            alt="Team"
            className="h-[26rem] mx-auto mt-6"
          />
        </div>
      </div>
    </div>
  );
};
