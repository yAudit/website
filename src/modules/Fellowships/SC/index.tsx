import Image from "next/image";

function SmartContracts() {
  return (
    <div>
      <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-bold mb-4">
        Smart Contract Fellowship
      </h1>

      <div className="grid grid-cols-2 sm:flex sm:flex-col gap-16 my-4">
        <div className="col-span-1 flex flex-col gap-8">
          <div>
            <h2 className="font-semibold text-xl my-4">
              A typical week in the fellowship program
            </h2>

            <ul className="list-disc list-inside text-zinc-500">
              <li>
                The auditing sprint starts on Monday with an overview session
                delivered by one of our resident auditors, a guest auditor, or
                the codebase author.
              </li>
              <br />
              <li>
                During the week, async discussion take place between fellows,
                mentors, guest auditors, residents, and codebase devs.
              </li>
              <br />
              <li>
                Fellows work in groups during the week. Groups may meet during
                the week over calls.
              </li>
              <br />
              <li>
                At the end of the week (or second week for larger codebases),
                fellows present their findings and receive feedback from our
                residents, mentors, and codebase authors.
              </li>
              <br />
              <li>
                The auditing sprint ends with a retreat session where we invite
                a prominent guest for a lecture or AMA with the fellows.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-1 m-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-deepblue col-span-1 p-4 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-xl font-semibold leading-6 text-gray-600">
                Duration
              </p>
              <p className="text-sm font-semibold leading-6 text-deepblue">
                4-6 weeks
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
          <p>
            Before applying, please make sure you have read and understood the{" "}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-deepblue font-bold hover:underline duration-700 mb-4"
            >
              general structure and guidelines of our programs
            </button>
            .
          </p>
          <a href="https://tally.so/r/nG9o6e" target="_blank" rel="noopener noreferrer">
            <button className="w-1/2 px-8 py-3 text-base text-white font-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SmartContracts;
