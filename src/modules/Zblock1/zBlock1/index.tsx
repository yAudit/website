 
import Link from "next/link";
import { m1video, m1exercises, m1notes, m1discussion } from "../Data/zblock1";
import {
  m2discussion,
  m2guestLectures,
  m2video,
  m2report,
} from "../Data/zblock1";
import {
  m3exercises,
  m3video,
  m3report,
  m3guestLectures,
} from "../Data/zblock1";
import { electiteam, fellows, pseteam, guest } from "../Data/zblock1";
import { Discussion, VideoSection, Report, Notes } from "../utils";
import Image from "next/image";

function ZBlock1Modules() {
  return (
    <>
      <div className="grid lg:grid-cols-5 gap-8 lg:mt-24">
        <div className="lg:col-span-2 mt-28">
          <img
            alt=""
            src="/zblock/pse-personae-yac.svg"
            className="h-[24rem] "
          />
        </div>
        <div className="lg:col-span-3">
          <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-5xl md:text-3xl sm:text-3xl font-bold lg:mb-10">
            zBlock1
          </h1>
          <p className="text-gray-600 text-justify">
            In June 2023, we conducted a Zero Knowledge Auditing cohort that
            kicked off with foundational concepts in complexity theory and Zero
            Knowledge Proofs (ZKPs). Participants engaged in hands-on exercises
            with Circom, a tool for creating ZKP circuits, to deepen their
            understanding.
            <br />
            <br />
            The cohort's first audit project was the Rate Limiting Nullifier
            (RLN) by the{" "}
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
              href="https://github.com/Rate-Limiting-Nullifier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-deepblue font-bold hover:underline duration-700"
            >
              Rate Limiting Nullifier
            </a>{" "}
            project is a zk-library/protocol designed to prevent spam in
            permissionless environments while preserving user anonymity. This
            audit took 15 days to complete.
            <br />
            <br />
            Following a retreat session, we proceeded to audit Spartan ECDSA's
            codebase, a library for proving and verifying ECDSA (secp256k1)
            signatures in zero-knowledge. This audit spanned 16 days. Both RLN
            and Spartan ECDSA utilized Circom circuits.
            <br />
            <br />
            During the cohort, fellows also developed new Circom tooling and
            enhanced the usability of existing tools by improving the
            documentation and code for projects like Picus and Ecne. At the end
            of the audit, outstanding fellows were awarded for their exceptional
            contributions and performance throughout the cohort.
          </p>
          <p className="mt-4 font-semibold">
            See also :{" "}
            <Link href={"/zBlock2"}>
              <button className="text-deepblue hover:underline duration-700">
                zBlock2
              </button>
            </Link>
          </p>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center mt-40 mb-20"
        id="participants"
      >
        Participants
      </h1>
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-1 flex flex-col py-6 bg-zinc-50 border border-zinc-100">
          <img alt="" src="/logo.svg" className="h-8 mb-6" />
          <ul className="list-disc text-zinc-700 px-12">
            {electiteam.map((member) => {
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
              {fellows.slice(0, 7).map((member) => {
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
              {fellows.slice(7, 14).map((member) => {
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
        <div className="lg:col-span-1 flex flex-col p-6 bg-zinc-50 border border-zinc-100">
          <img alt="" src="/zblock/pse-0xparc.svg" className="h-14 mx-4 mb-6" />
          <ul className="list-disc text-zinc-700 px-8">
            {pseteam.map((member) => {
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
      <h1 className="text-4xl font-bold text-center mt-20" id="module-1">
        Module 1
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-12 mt-12">
        <div className="col-span-1">
          <h1 id="session1" className="text-2xl font-bold">
            Sessions
          </h1>
          <VideoSection videoData={m1video} />
          <h1 id="discussion1" className="text-2xl font-bold mb-4">
            Discussion
          </h1>
          <div className="flex flex-row gap-4 p-4 items-center bg-zinc-50 border border-zinc-100">
            <Discussion chat={m1discussion} />
          </div>
        </div>
        <div className="col-span-1">
          <h1 id="materials1" className="text-2xl font-bold mt-8 mb-4">
            Supplementary Materials
          </h1>
          <div className="flex flex-row gap-4 p-4 items-center bg-zinc-50 border border-zinc-100">
            <Notes notes={m1notes} />
          </div>
          <h1 id="exercise1" className="text-2xl font-bold my-4">
            Exercises
          </h1>
          <div className="flex flex-col  gap-6 p-6 bg-zinc-50 border border-zinc-100">
            {m1exercises.map((exercise) => {
              return (
                <div
                  className="flex flex-row gap-4 items-center"
                  key={exercise.link}
                >
                  <img alt="" src="/icons/exercise.svg" className="h-[2rem]" />
                  <a
                    href={exercise.link}
                    className="hover:underline font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exercise.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mt-20" id="module-2">
        Module 2
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-12 mt-12">
        <div className="col-span-1">
          <h1 className="text-2xl font-bold">Sessions</h1>
          <VideoSection videoData={m2video} />
          <h1 id="discussion1" className="text-2xl font-bold mb-4">
            Discussion
          </h1>
          <div className="flex flex-row gap-4 p-4 items-center bg-zinc-50 border border-zinc-100">
            <Discussion chat={m2discussion} />
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="text-2xl font-bold">Guest Lectures</h1>
          <VideoSection videoData={m2guestLectures} />

          <h1 className="text-2xl font-bold my-4">Audit Reports</h1>
          <div className="flex flex-row gap-4 p-4 items-center bg-zinc-50 border border-zinc-100">
            <Report report={m2report} />
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mt-20" id="module-3">
        Module 3
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-12 mt-12">
        <div className="col-span-1">
          <h1 className="text-2xl font-bold">Sessions</h1>
          <VideoSection videoData={m3video} />
          <h1 className="text-2xl font-bold">Guest Lectures</h1>
          <VideoSection videoData={m3guestLectures} />
        </div>
        <div className="col-span-1">
          <h1 id="discussion1" className="text-2xl font-bold mb-4">
            Discussion
          </h1>
          <div className="flex flex-row gap-4 p-4 items-center  bg-zinc-50 border border-zinc-100">
            <Discussion chat={m2discussion} />
          </div>
          <h1 id="exercise1" className="text-2xl font-bold my-4">
            Exercises
          </h1>
          <div className="flex flex-col  gap-6 p-6  bg-zinc-50 border border-zinc-100">
            {m3exercises.map((exercise) => {
              return (
                <div
                  className="flex flex-row gap-4 items-center"
                  key={exercise.link}
                >
                  <img alt="" src="/icons/exercise.svg" className="h-[2rem]" />
                  <a
                    href={exercise.link}
                    className="hover:underline font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exercise.title}
                  </a>
                </div>
              );
            })}
          </div>

          <h1 className="text-2xl font-bold my-4">Audit Reports</h1>
          <div className="flex flex-row gap-4 p-4 items-center  bg-zinc-50 border border-zinc-100">
            <Report report={m3report} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ZBlock1Modules;
