import { shadowAudits } from "../Data/program";

function Intro() {
  return (
    <section className="pt-16 lg:grid lg:grid-cols-2 sm:flex sm:flex-col gap-4">
      <div className="lg:col-span-1 flex flex-col justify-center">
        <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-5xl md:text-3xl sm:text-3xl font-bold">
          yBorg
        </h1>

        <div className="flex flex-col gap-4 mt-8 text-zinc-500">
          <p>
            yBorg was a four-week yAudit fellowship about AI-assisted security.
            Each fellow built their own AI-powered security tooling, then put
            it to work on real targets: a group bug bounty hunt and live audits.
          </p>
          <p>
            Before touching live code, fellows calibrated and benchmarked their
            tools on shadow audits of past public contests (
            {shadowAudits.map((audit, i) => (
              <span key={audit.name}>
                {i > 0 && " and "}
                <a
                  href={audit.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-deepblue font-bold hover:underline"
                >
                  {audit.name}
                </a>
              </span>
            ))}
            ), where the known findings give a baseline to measure against.
          </p>
          <p>
            Along the way, guest speakers from teams such as Trail of Bits,
            OpenZeppelin and Flint Security shared how they use AI agents in
            their own audits and bug bounty hunting. Their sessions are
            collected below.
          </p>
        </div>
      </div>

      <div className="lg:col-span-1 flex flex-col lg:justify-center sm:mt-8 md:mt-8">
        <img
          alt=""
          src="/illustrations/yborg.svg"
          className="lg:h-[32rem] md:h-[24rem] sm:h-[18rem] mx-auto"
        />
      </div>
    </section>
  );
}

export default Intro;
