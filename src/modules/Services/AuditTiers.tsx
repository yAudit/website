import Link from "next/link";

// The four audit products of YDP-28. No prices here: they are quoted per
// project. The cards use the same style as the steps on the yAgent page.
// Each card's button opens the contact form with its service selected
// (service = the value in modules/Contact), so the request arrives tagged.
const TIERS = [
  {
    name: "Full Audit",
    service: "full-audit",
    cta: "Book a Full Audit",
    summary: "A manual review of your whole codebase, with yAgent before and after.",
    points: [
      "Two auditors review the full scope by hand.",
      "yAgent scans the code first, so the review can focus on logic and economics.",
      "yAgent runs again on your fixes, as part of the fix review.",
    ],
    deliverable: "Full security audit report.",
  },
  {
    name: "Focused Audit",
    service: "focused-audit",
    cta: "Scope a Focused Audit",
    summary: "yAgent on the whole codebase, and a manual review of the flows that matter most.",
    points: [
      "We agree on the critical flows with you: the manual review covers them and the code they depend on.",
      "yAgent scans the whole codebase, and our auditors triage what it finds.",
      "Fix review included for the critical flows.",
    ],
    deliverable: "Security report, with the reviewed scope stated on the cover.",
  },
  {
    name: "yAgent Review",
    service: "yagent-review",
    cta: "Get a yAgent Review",
    summary: "A yAgent scan with every finding checked by our auditors, without a manual review.",
    points: [
      "Our auditors triage the results: duplicates merged, false positives removed, severities set.",
      "Proof of concept for High and Critical findings.",
      "Fully credited toward a Full or Focused Audit booked within 60 days.",
    ],
    deliverable: "Report of the triaged yAgent findings.",
  },
  {
    name: "Update Review",
    service: "update-review",
    cta: "Request an Update Review",
    summary: "One auditor on a small update to your code.",
    points: [
      "Best for small changes, ideally to code we have already audited.",
      "One auditor, from one to three days.",
      "A yAgent scan of the update can be added.",
    ],
    deliverable: "Findings shared with your team, without a report.",
  },
];

export default function AuditTiers() {
  return (
    <section className="mb-16 text-left">
      <h2 className="lg:text-4xl text-3xl font-bold">Audit options</h2>
      <p className="mt-4 text-zinc-500">
        Four ways to review your code, all built around{" "}
        <Link href="/yagent" className="text-deepblue font-bold hover:underline">
          yAgent
        </Link>
        , our AI security agent, and checked by our auditors.
      </p>

      {/* Each card spans three rows of the list's grid (subgrid): the
          description, the deliverable and the button. Cards side by side share
          those rows, so their deliverable lines and buttons line up even when
          one deliverable takes two lines. */}
      <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {TIERS.map((tier, i) => (
          <li
            key={tier.name}
            className="row-span-3 grid grid-rows-subgrid gap-0 border border-zinc-200 p-6"
          >
            <div>
              <span className="text-sm font-semibold text-deepblue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{tier.name}</h3>
              <p className="mt-3 text-zinc-500">{tier.summary}</p>
              <ul className="mt-4 flex flex-col gap-2 text-zinc-500">
                {tier.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-deepblue" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 border-t border-zinc-200 pt-4 text-sm">
              <span className="font-semibold text-black">Deliverable: </span>
              <span className="text-zinc-500">{tier.deliverable}</span>
            </p>
            {/* Outlined: the filled button is left to the section below. */}
            <Link
              href={`/contact-us?service=${tier.service}`}
              className="mt-6 block w-full self-end border border-deepblue px-6 py-3 text-center font-bold text-deepblue transition-colors duration-700 hover:bg-deepblue hover:text-white"
            >
              {tier.cta}
            </Link>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-col gap-6 border border-zinc-100 bg-zinc-50 p-8 md:flex-row md:items-center md:justify-between lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Not sure which one fits your code?</h3>
          <p className="mt-2 text-zinc-500">
            Send us your repo or a short scope, and we&apos;ll quote it and tell you which option
            makes sense.
          </p>
        </div>
        <Link
          href="/contact-us?service=not-sure"
          className="shrink-0 border border-deepblue bg-deepblue px-8 py-3 text-center font-bold text-white transition-colors duration-700 hover:bg-white hover:text-deepblue"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
