import {
  audits,
  formatDuration,
  sessionDate,
  sessions,
  shadowAudits,
  weekRange,
  weeks,
  type Session,
} from "../Data/program";

function SessionCard({ session }: { session: Session }) {
  const { recording } = session;
  return (
    <li className="flex flex-col border border-zinc-200">
      {recording ? (
        <video
          controls
          preload="none"
          poster={`/yborg/sessions/${session.id}.jpg`}
          src={recording.src}
          className="w-full aspect-video bg-black"
        />
      ) : (
        <div className="w-full aspect-video flex items-center justify-center bg-zinc-100 text-sm text-zinc-400">
          No recording
        </div>
      )}
      <div className="flex flex-col gap-2 p-4">
        <p className="font-mono text-xs text-zinc-400">
          {sessionDate(session)}
          {recording && ` · ${formatDuration(recording.durationSec)}`}
        </p>
        <h4 className="font-semibold">{session.title}</h4>
        <p className="text-sm text-deepblue">
          {session.speakers.join(", ")}
          {session.affiliation && (
            <span className="text-zinc-400"> · {session.affiliation}</span>
          )}
        </p>
        {session.summary && (
          <p className="text-sm text-zinc-500">{session.summary}</p>
        )}
        {session.notesUrl && (
          <a
            href={session.notesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-deepblue font-bold hover:underline"
          >
            Session notes ↗
          </a>
        )}
      </div>
    </li>
  );
}

function LinkCards({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: { name: string; detail: string; href?: string }[];
}) {
  return (
    <div className="mt-16">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-zinc-500 mt-1 mb-6">{description}</p>
      <ul className="grid grid-cols-2 sm:grid-cols-1 gap-4">
        {items.map((item) => (
          <li key={item.name}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full border border-deepblue p-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <p className="font-semibold text-gray-600">{item.name} ↗</p>
                <p className="text-sm font-semibold text-deepblue">{item.detail}</p>
              </a>
            ) : (
              <div className="h-full border border-zinc-300 p-4">
                <p className="font-semibold text-gray-600">{item.name}</p>
                <p className="text-sm font-semibold text-zinc-400">
                  {item.detail} · Report is private
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Resources() {
  return (
    <section id="resources" className="my-24 scroll-mt-8">
      <h2 className="lg:text-4xl md:text-3xl sm:text-3xl font-bold mb-4">
        Resources
      </h2>
      <p className="text-zinc-500 mb-12">
        Recordings of the sessions held during the fellowship.
      </p>

      {weeks.map((week) => {
        const weekSessions = sessions
          .filter((s) => s.week === week.number)
          .sort((a, b) => a.day - b.day);
        if (weekSessions.length === 0) return null;
        return (
          <div key={week.number} className="mt-16 first-of-type:mt-0">
            <h3 className="text-xl font-semibold">
              <span className="font-mono text-deepblue mr-3">W{week.number}</span>
              {week.theme}
            </h3>
            <p className="font-mono text-xs text-zinc-400 mt-1">
              {weekRange(week)}
            </p>
            <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
              {weekSessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </ul>
          </div>
        );
      })}

      <LinkCards
        title="Shadow audits"
        description="Past public contests, packaged with pinned sources and dependencies, used to calibrate and benchmark the fellows' tools."
        items={shadowAudits.map((a) => ({ name: a.name, detail: a.source, href: a.href }))}
      />

      <LinkCards
        title="Audits"
        description="Live audits carried out during the fellowship."
        items={audits.map((a) => ({ name: a.name, detail: a.date, href: a.href }))}
      />
    </section>
  );
}

export default Resources;
