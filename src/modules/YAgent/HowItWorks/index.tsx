const STEPS = [
  {
    title: "Map",
    text: "The agents read the codebase and map the system: its components and how they interact.",
  },
  {
    title: "Hunt",
    text: "They search the map for exploitable bugs, including the ones that only show up when components interact.",
  },
  {
    title: "Prove",
    text: "Each lead comes with a working proof of concept, so it arrives with evidence rather than a guess.",
  },
  {
    title: "Triage",
    text: "The yAudit team reviews every lead, drops false positives and duplicates, confirms the impact and sets the severity.",
  },
];

function HowItWorks() {
  return (
    <section className="py-16">
      <h2 className="font-semibold lg:text-3xl md:text-2xl sm:text-2xl">
        How yAgent works
      </h2>

      <ol className="mt-8 grid gap-4 lg:grid-cols-2">
        {STEPS.map((step, i) => (
          <li key={step.title} className="border border-zinc-200 p-6">
            <span className="text-sm font-semibold text-deepblue">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-zinc-500">{step.text}</p>
          </li>
        ))}
      </ol>

      <p className="mt-12 text-zinc-500">
        We run yAgent on every review, twice: once at the start, on the code in
        scope, and once at the end, on the fixes, as part of the fix review.
        The yAudit team verifies every issue it reports before it goes into
        the report.
      </p>
    </section>
  );
}

export default HowItWorks;
