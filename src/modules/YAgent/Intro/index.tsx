function Intro() {
  return (
    <section className="pt-16 lg:grid lg:grid-cols-2 sm:flex sm:flex-col gap-4">
      <div className="lg:col-span-1 flex flex-col justify-center">
        <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-5xl md:text-3xl sm:text-3xl font-bold">
          yAgent
        </h1>

        <div className="flex flex-col gap-4 mt-8 text-zinc-500">
          <p>
            yAgent is yAudit&apos;s AI security agent: a powerful AI auditor
            built on top of{" "}
            <a
              href="https://zerocool.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-deepblue font-bold hover:underline"
            >
              Zero Cool
            </a>
            . It points Zero Cool&apos;s agents at a codebase and brings
            everything they find to the yAudit team.
          </p>
          <p>
            Zero Cool is a human + AI offensive security platform, built by
            security researchers for security researchers. Its agents map the whole system, search it for
            exploitable bugs, including the ones that hide between components,
            and back each bug with a working proof of concept.
          </p>
          <p>
            yAgent is one part of a human + AI loop. The agents surface leads
            and ideas, and our auditors verify them and use them to dig deeper
            and find more. Their new ideas go back to yAgent, and the loop
            continues.
          </p>
        </div>
      </div>

      <div className="lg:col-span-1 flex flex-col lg:justify-center sm:mt-8 md:mt-8">
        <img
          alt="yAudit x Zero Cool"
          src="/illustrations/yaudit-x-zerocool.svg"
          className="lg:h-[32rem] md:h-[24rem] sm:h-[18rem] mx-auto"
        />
      </div>
    </section>
  );
}

export default Intro;
