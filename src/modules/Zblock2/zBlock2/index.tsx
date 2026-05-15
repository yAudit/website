 
import Link from "next/link";
import {
  m1video,
  m1guestLectures,
  m1discussion,
  m1notes,
  m1exercises,
  m1report,
  m1bounties,
  m2bounties,
} from "../Data/zblock2";
import {
  m2discussion,
  m2guestLectures,
  m2video,
  m2notes,
  m2report,
} from "../Data/zblock2";
import { fellows, yacteam, summateam, guest } from "../Data/zblock2";
import {
  Discussion,
  VideoSection,
  Report,
  Quiz,
  Notes,
  Trophy,
} from "../utils";
import Image from "next/image";

function ZBlock2Modules() {
  return (
    <>
      <div className="mt-24">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 mt-28">
            <img alt="" src="/zblock/pse-summa-yac.svg" className="h-[24rem] " />
          </div>
          <div className="lg:col-span-3">
            <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-5xl md:text-3xl sm:text-3xl font-bold lg:mb-10">
              zBlock2
            </h1>
            <p className="text-gray-600 text-justify">
              From Jan 2024 to May 2024, we held our second zero-knowledge
              auditing fellowship centered around the PSE-Halo2 development
              framework and the KZG commitment scheme. Participants engaged in
              hands-on exercises, sync and async discussions, and technical
              sessions by devs, auditors, and distinguished guests.
              <br />
              <br />
              The focus of the audit in this cohort was the Summa Protocol
              developed at the{" "}
              <a
                href="https://pse.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deepblue font-bold hover:underline duration-700"
              >
                Privacy & Scaling Explorations
              </a>{" "}
              group of the EF. The{" "}
              <a
                href="https://summa.gitbook.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deepblue font-bold hover:underline duration-700"
              >
                Summa Protocol
              </a>{" "}
              is a blockchain-based solution for providing proof of solvency for
              financial entities, ensuring they have sufficient assets to cover
              their liabilities. It leverages cryptographic techniques with the
              aim to verify solvency transparently and securely, and without
              revealing sensitive personal financial data.
              <br />
              <br />
              This audit took 120 days to complete, covering two versions of the
              Summa protocol. During the cohort, fellows also developed new
              Halo2 tooling and enhanced the usability of existing tools by
              improving the documentation and code for projects like
              Polyexen-demo and Halo2-analyzer. At the end of the audit,
              exceptional fellows were awarded for their outstanding
              contributions and performance throughout the cohort.
            </p>
            <p className="mt-4 font-semibold">
              See also :{" "}
              <Link href={"/zBlock1"}>
                <button className="text-deepblue hover:underline duration-700">
                  zBlock1
                </button>
              </Link>
            </p>
          </div>
        </div>
        <h1
          className="text-4xl  font-bold text-center mt-20 mb-20"
          id="participants"
        >
          Participants
        </h1>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1 flex flex-col py-6 bg-zinc-50 border border-zinc-100">
            <img alt="" src="/logo.svg" className="h-8 mb-6" />
            <ul className="list-disc text-zinc-700 px-12">
              {yacteam.map((member) => {
                return (
                  <li key={member.name}>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline duration-700"
                    >
                      {member.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:col-span-2 flex flex-col p-4 px-12 bg-zinc-50 border border-zinc-100">
            <h4 className="text-xl py-4 text-center font-semibold mb-4">
              Fellows
            </h4>
            <div className="flex flex-row sm:flex-col justify-between">
              <ul className="list-disc text-zinc-700">
                {fellows.slice(0, 6).map((member) => {
                  return (
                    <li key={member.name}>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline duration-700"
                      >
                        {member.name}
                        {member.isResident ? "*" : ""}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <ul className="list-disc text-zinc-700">
                {fellows.slice(6, 12).map((member) => {
                  return (
                    <li key={member.name}>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline duration-700"
                      >
                        {member.name}
                        {member.isResident ? "*" : ""}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="text-center p-4 text-zinc-700"> * Top Fellows</p>
          </div>
          <div className="lg:col-span-1 flex flex-col p-6 px-12 bg-zinc-50 border border-zinc-100">
            <img alt="" src="/zblock/pse-summa.svg" className="h-10 mb-6" />
            <ul className="list-disc text-zinc-700">
              {summateam.map((member) => {
                return (
                  <li key={member.name}>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline duration-700"
                    >
                      {member.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:col-span-1 flex flex-col p-4 px-8 bg-zinc-50 border border-zinc-100">
            <h4 className="text-xl py-4 text-center font-semibold">
              Guest Speakers
            </h4>
            <ul className="list-disc text-zinc-700">
              {guest.map((member) => {
                return (
                  <li key={member.name}>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline duration-700"
                    >
                      {member.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center text-zinc-800 text-center mt-12">
          <h4 className="text-xl font-semibold">Supported by </h4>
          <img alt="" src="/zblock/ef.svg" className="h-16 inline-block" />
        </div>

        <h1 className="text-4xl font-bold text-center mt-20" id="module-1">
          Module 1
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-12 mt-12">
          <div className="col-span-1">
            <h1 id="session1" className="text-2xl font-bold">
              Sessions
            </h1>
            <VideoSection videoData={m1video} />
            <h1 className="text-2xl font-bold">Guest Lectures</h1>
            <VideoSection videoData={m1guestLectures} />
          </div>
          <div className="col-span-1">
            <h1 id="discussion1" className="text-2xl font-bold mb-4">
              Discussion
            </h1>
            <div className="flex flex-row gap-4 p-4 items-center bg-zinc-50 border border-zinc-100">
              <Discussion chat={m1discussion} />
            </div>
            <h1 className="text-2xl font-bold my-4">Supplementary Materials</h1>
            <div className="flex flex-col gap-6 p-4 items-start bg-zinc-50 border border-zinc-100">
              {m1notes.map((exercise) => {
                return <Notes notes={exercise} key={exercise.link} />;
              })}
              {m1bounties.map((item) => {
                return <Trophy trophy={item} key={item.link} />;
              })}
            </div>
            {/* <div className="flex flex-col gap-6 p-4 items-start bg-zinc-50 border border-zinc-100">
              
            </div> */}
            <h1 className="text-2xl font-bold my-4">Exercises</h1>
            <div className="flex flex-col gap-6 p-4 items-start bg-zinc-50 border border-zinc-100">
              {m1exercises.map((exercise) => {
                return <Quiz quiz={exercise} key={exercise.link} />;
              })}
            </div>
            <h1 className="text-2xl font-bold my-4">Audit Reports</h1>
            <div className="flex flex-row gap-4 p-4 items-center bg-zinc-50 border border-zinc-100">
              <Report report={m1report} />
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mt-20" id="module-2">
          Module 2
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-12 mt-12 mb-8">
          <div className="col-span-1">
            <h1 className="text-2xl font-bold">Sessions</h1>
            <VideoSection videoData={m2video} />
            <h1 className="text-2xl font-bold my-4">Supplementary Materials</h1>
            <div className="flex flex-col gap-6 p-4 items-start bg-zinc-50 border border-zinc-100">
              {m2notes.map((exercise) => {
                return <Notes notes={exercise} key={exercise.link} />;
              })}
              <Trophy trophy={m2bounties} />
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="text-2xl font-bold">Guest Lectures</h1>
            <VideoSection videoData={m2guestLectures} />
            <h1 id="discussion1" className="text-2xl font-bold mb-4">
              Discussion
            </h1>
            <div className="flex flex-row gap-4 p-4 items-center bg-zinc-50 border border-zinc-100">
              <Discussion chat={m2discussion} />
            </div>

            <h1 className="text-2xl font-bold my-4">Audit Reports</h1>
            <div className="flex flex-row gap-4 p-4 items-center bg-zinc-50 border border-zinc-100">
              <Report report={m2report} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZBlock2Modules;
