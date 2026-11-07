// Content mirrored from https://yborg.vercel.app/#resources
const VIDEOS = "https://m7qpbjeg3szyizge.public.blob.vercel-storage.com/videos";

export type Week = {
  number: number;
  starts: string;
};

export type Session = {
  id: string;
  week: number;
  day: number;
  title: string;
  speakers: string[];
  affiliation?: string;
  summary?: string;
  recording?: { src: string; durationSec: number };
  notesUrl?: string;
};

export const weeks: Week[] = [
  { number: 1, starts: "2026-09-28" },
  { number: 2, starts: "2026-10-05" },
  { number: 3, starts: "2026-10-12" },
  { number: 4, starts: "2026-10-19" },
];

export const sessions: Session[] = [
  {
    id: "w1d1",
    week: 1,
    day: 1,
    title: "Fellowship kickoff",
    speakers: ["yAudit team"],
    summary:
      "The goal, the mentors and the four-week plan: build your own AI-assisted security tooling, then use it for bug bounty hunting and live audits.",
    recording: {
      src: `${VIDEOS}/yborg-w1d1-kickoff-f9z1ofCsRHxM9cU0lDShddTXE5Zgdv.mp4`,
      durationSec: 3540,
    },
  },
  {
    id: "w1d2",
    week: 1,
    day: 2,
    title: "Audit flow exercise",
    speakers: ["0xFlint"],
    affiliation: "Flint Security",
    summary:
      "A worked audit of a simple lending protocol, from what the protocol is trying to do to where its collateral rules break.",
    recording: {
      src: `${VIDEOS}/yborg-w1d2-0xFlint-53rDn8ZWO6oM7KuNx2YWSWRWfB0SNc.mp4`,
      durationSec: 919,
    },
  },
  {
    id: "w1d3",
    week: 1,
    day: 3,
    title: "The framework trap",
    speakers: ["fucory"],
    affiliation: "Smithers",
    summary:
      "Which agent frameworks age out and which last. Build on the primitives, not the topology, and keep a human in the loop.",
    recording: {
      src: `${VIDEOS}/yborg-w1d3-fucory-7lj1w7zmW2v8PGsR8kUZpRBz1mkL8h.mp4`,
      durationSec: 4200,
    },
  },
  {
    id: "w1d4",
    week: 1,
    day: 4,
    title: "One audit, from first look to report",
    speakers: ["Andrew Anderson", "Josep"],
    affiliation: "Hob, OpenZeppelin",
    summary:
      "A full audit in one workspace: brief the agent, map the codebase, hunt in parallel, triage and prove a lead, then write the report.",
    recording: {
      src: `${VIDEOS}/yborg-w1d4-andrew-anderson-JcYMTJMGrbrzAizZYbDz7jcTU87gOF.mp4`,
      durationSec: 3751,
    },
  },
  {
    id: "w1d5",
    week: 1,
    day: 5,
    title: "Session with Ben Samuels",
    speakers: ["Ben Samuels"],
    affiliation: "Trail of Bits",
  },
  {
    id: "w2d2",
    week: 2,
    day: 2,
    title: "Session with 0xfirefist",
    speakers: ["0xfirefist"],
    affiliation: "Pashov Audit Group",
    summary:
      "Reading a protocol from its architecture diagram first, then looping agents over it and choosing the right model for each step.",
    recording: {
      src: `${VIDEOS}/yborg-w2d2-0xfirefist-vN1BpTdwVEujfoCtDcjDAH9JI4J2Iw.mp4`,
      durationSec: 2906,
    },
  },
  {
    id: "w3d1",
    week: 3,
    day: 1,
    title: "Setting yourself up for success in AI-assisted bug bounty hunting",
    speakers: ["Riptide"],
    affiliation: "GregoAI",
    summary:
      "The groundwork before an agent hunts a bounty: pin the scope, rebuild the deployed code, ship a PoC template and an out-of-scope cheat sheet, then pick a program on Sherlock.",
    recording: {
      src: `${VIDEOS}/yborg-w3d1-riptide.mp4`,
      durationSec: 5726,
    },
  },
  {
    id: "w3d2",
    week: 3,
    day: 2,
    title: "Thinking like an attacker",
    speakers: ["Dravee"],
    summary:
      "A tour of the attacker's search space: how to bound it, which invariants to enforce, where the money goes, and where to hunt for highs and crits.",
    recording: {
      src: `${VIDEOS}/yborg-w3d2-dravee-KAqNobuCBRvSFR2jiOmZKlJYbto8uO.mp4`,
      durationSec: 4492,
    },
    notesUrl: "https://thinking-like-an-attacker.netlify.app/",
  },
];

export const shadowAudits = [
  {
    name: "Beedle",
    source: "Cyfrin CodeHawks, July 2023",
    href: "https://github.com/yAudit/yborg-beedle-shadow-audit",
  },
  {
    name: "Mento V3",
    source: "Cantina competition",
    href: "https://github.com/yAudit/yborg-mento-v3-shadow-audit",
  },
];

export const audits: { name: string; date: string; href?: string }[] = [
  {
    name: "Lynxify LYNX LP Range Manager",
    date: "October 2026",
    href: "https://reports.yaudit.dev/2026-10-lynxify-lynx-lp-range-manager",
  },
  {
    name: "UFG Factory and Treasuries",
    date: "October 2026",
    href: "https://reports.yaudit.dev/2026-10-ufg-factory-and-treasuries",
  },
  // No href: the report is private.
  { name: "Cap Network v2", date: "October 2026" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_MS = 86_400_000;

function addDays(iso: string, days: number) {
  return new Date(Date.parse(iso) + days * DAY_MS).toISOString().slice(0, 10);
}

export function formatDate(iso: string) {
  const [, month, day] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}`;
}

export function weekRange(week: Week) {
  return `${formatDate(week.starts)} – ${formatDate(addDays(week.starts, 4))}`;
}

export function sessionDate(session: Session) {
  const week = weeks.find((w) => w.number === session.week)!;
  return formatDate(addDays(week.starts, session.day - 1));
}

export function formatDuration(seconds: number) {
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} min`;
  const rest = minutes % 60;
  return rest === 0 ? `${minutes / 60}h` : `${Math.floor(minutes / 60)}h ${rest}m`;
}
