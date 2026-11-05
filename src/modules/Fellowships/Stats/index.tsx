import Image from "next/image";

function Stats() {
  return (
    <div className="pt-16 lg:grid lg:grid-cols-2 sm:flex sm:flex-col gap-4">
      <div className="lg:col-span-1 flex flex-col justify-center">
        <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-5xl md:text-3xl sm:text-3xl font-bold">
          Fellowship Programs
        </h1>
        <p className="text-zinc-500 mt-8">
          Our fellowships are a public good aiming to onboard top security
          talent to the Ethereum ecosystem. <br /><br /> Many of our alumni fellows from 9
          previous fellowships now occupying prominent positions in top projects
          and protocols, topping bounty and contest leaderboards, or leading a
          successful solo auditing careers.
        </p>
        <p className="text-zinc-500">
          <br />
          yAudit fellowships are <strong>
            not introductory programs
          </strong>{" "}
          to software auditing. They are trial-by-fire programs where you will
          audit pre-production or in-production codebases, and the stakes are
          very high.
        </p>
        <h2 className="font-semibold text-xl my-8">
          General structure and Guidelines
        </h2>
        <ul className="list-disc list-inside text-zinc-500">
          <li>
            You will be auditing alongside our residents, guest auditors, and
            mentors.
          </li>
          <br />
          <li>
            You will be expected to participate, add value to the discussions,
            and submit reports.
          </li>
          <br />
          <li>
            You will be expected to be fluent at setting up test environments,
            and running common tools.
          </li>
          <br />
          <li>
            You are not required to have experience in auditing in the Web3
            space, but you must be proficient in software engineering generally
            and have published proof of technical work. Please note that as the
            yAudit fellowship continues getting more popular, the competition
            to join our programs is increasing with each iteration.
          </li>
          <br />
          <li>
            <strong>Our fellowships are a public good</strong> and there is no
            fee to participate. However accepted fellows must stake a small
            amount of ETH which is returned to them upon successful completion
            of the fellowship.
          </li>
        </ul>
        <br /> <br />
      </div>
      <div className="lg:col-span-1 flex flex-col lg:justify-center">
        <img alt="" src="./illustrations/stats-pie.svg" className="lg:h-[40rem] md:h-[28rem]" />
        <p className="text-zinc-400 italic text-center lg:px-16">
          Audits conducted within our fellowship programs get a boost from extra
          eyes of our amazing fellows, uncovering hundreds of bugs in 9
          fellowships since 2021
        </p>
      </div>
    </div>
  );
}

export default Stats;
