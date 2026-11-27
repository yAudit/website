import { shadowAudits } from "../Data/program";

function Intro() {
  return (
    <section className="pt-16 lg:grid lg:grid-cols-2 sm:flex sm:flex-col gap-4">
      {/* The text starts at the top, so the title sits at the same height as
          on every other page. */}
      <div className="lg:col-span-1 flex flex-col">
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

      {/* Side by side (lg), the image fills the whole height of the title and
          the text, keeping its proportions: as large as it can be without
          leaving empty space under the text. On narrower screens it follows
          the text. */}
      <div className="lg:col-span-1 lg:relative flex flex-col sm:mt-8 md:mt-8 lg:mt-0">
        <img
          alt=""
          src="/illustrations/yborg.svg"
          className="mx-auto md:h-[24rem] sm:h-[18rem] lg:absolute lg:inset-0 lg:h-full lg:w-full lg:object-contain"
        />
      </div>
    </section>
  );
}

export default Intro;
