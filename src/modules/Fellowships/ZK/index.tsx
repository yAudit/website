import Link from "next/link";

function ZK() {
  return (
    <div>
      <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-bold mb-8">
        Zero Knowledge Fellowship
      </h1>

      <div className="grid grid-cols-2 sm:flex sm:flex-col gap-16 my-4">
        <div className="col-span-1 flex flex-col gap-8">
          <div className="border border-deepblue col-span-1 p-4 mt-4 hover:-translate-y-1 transition-transform duration-300">
            <p className="text-xl font-bold leading-10 text-gray-600">
              Previous ZK Cohorts
            </p>
            <Link href="/zBlock1">
              <p className="text-base font-semibold leading-8 text-deepblue hover:underline duration-700">
                zBlock1 (May 2023) ↗
              </p>
            </Link>
            <Link href="/zBlock2">
              <p className="text-base font-semibold leading-8 text-deepblue hover:underline duration-700">
                zBlock2 (Jan - May 2024) ↗
              </p>
            </Link>

            <p className="text-sm font-semibold leading-6 text-deepblue"></p>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-4">Highlights</h2>

            <ul className="list-disc list-inside">
              <li>
                The fellowship will include theory sessions, code overview
                sessions, retreat sessions with leading experts in the field,
                office hours with devs and/or our residents, and ad-hoc sessions
                self-organized by groups of fellows. There are usually also be
                some quizzes and puzzles throughout.
              </li>
              <br />
              <li>
                The fellowship leads up to an{" "}
                <span className="line-through">audit</span> security review
                report (eg{" "}
                <a
                  href="https://github.com/zBlock-1/RLN-audit-report"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-deepblue font-bold hover:underline duration-700"
                >
                  [1]
                </a>
                <a
                  href="https://github.com/zBlock-1/spartan-ecdsa-audit-report"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-deepblue font-bold hover:underline duration-700"
                >
                  [2]
                </a>
                <a
                  href="https://github.com/electisec/summa-audit-report/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-deepblue font-bold hover:underline duration-700"
                >
                  [3]
                </a>
                ) contributed to collaboratively by everyone involved: fellows,
                residents, and mentors.
              </li>
            </ul>
          </div>
          <p>
            You will be contacted once the next fellowship is starting up, no
            need to re-apply when it’s announced, just make sure you have
            received a confirmation email (otherwise you may have used an
            incorrect email)
          </p>
          <a href="https://tally.so/r/mRdG89" target="_blank" rel="noopener noreferrer">
            <button className="w-1/2 px-8 py-3 text-base text-white font-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700">
              Apply
            </button>
          </a>
        </div>
        <div className="col-span-1 m-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-deepblue col-span-1 p-4 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-xl font-semibold leading-6 text-gray-600">
                Duration
              </p>
              <p className="text-sm font-semibold leading-6 text-deepblue">
                1-3 months
              </p>
            </div>
            <div className="border border-deepblue col-span-1 p-4 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-xl font-semibold leading-6 text-gray-600">
                Time Commitment
              </p>
              <p className="text-sm font-semibold leading-6 text-deepblue">
                {">"} 20 hours/week
              </p>
            </div>
          </div>

          <p className="my-4">
            There is a requirement to{" "}
            <span className="text-deepblue font-bold">stake some ETH</span> to
            ensure engagement and participation from all fellows.
          </p>
          <div>
            <h2 className="font-semibold text-xl mb-4">Pre-requisites</h2>

            <ul className="list-disc list-inside text-zinc-500">
              <li>
                No prior ZK knowledge is required, but proof of work else where
                is.
              </li>
              <br />
              <li>
                You can review our previous fellowships:{" "}
                <Link
                  href={"/zBlock1"}
                  className="text-deepblue font-bold hover:underline duration-700"
                >
                  zBlock1
                </Link>{" "}
                and{" "}
                <Link
                  href={"/zBlock2"}
                  className="text-deepblue font-bold hover:underline duration-700"
                >
                  zBlock2
                </Link>{" "}
                to :
                <ul className="list-disc list-inside ml-8 mt-2">
                  <li>Get a sense of what the fellowship is like.</li>
                  <li>
                    Level up your understanding of ZK tailored to give aspiring
                    auditors the minimum viable theory to get to the code.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <p className="my-4">
            Before applying, please make sure you have read and understood the{" "}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-deepblue font-bold hover:underline duration-700"
            >
              general structure and guidelines of our programs
            </button>
            .
            <br />
            <br />
            If you have questions you want to ask before applying, you may
            contact at: zk AT electisec DOT com
          </p>

          {/* <img alt=""  src="/rust-window.svg" className="py-4 h-[32rem]" /> */}
        </div>
      </div>
    </div>
  );
}

export default ZK;
