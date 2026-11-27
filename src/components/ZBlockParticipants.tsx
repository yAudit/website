// The "Participants" section of the zBlock pages: the teams and the guest
// speakers in three equal cards, then the fellows across the full width.
// Every card has a header of the same height, so the lists start level.

interface Member {
  name: string;
  github: string;
  /** Top fellows get an asterisk. */
  isResident?: boolean;
}

export interface ParticipantGroup {
  title: string;
  /** Shown instead of the title, e.g. the team's logo. */
  logo?: string;
  members: Member[];
}

function GroupHeader({ title, logo }: { title: string; logo?: string }) {
  return (
    <div className="mb-4 flex h-14 items-center justify-center">
      {logo ? (
        <img alt={title} src={logo} className="h-10 w-auto max-w-full" />
      ) : (
        <h3 className="text-xl font-semibold">{title}</h3>
      )}
    </div>
  );
}

function MemberItem({ member }: { member: Member }) {
  return (
    <li className="break-inside-avoid">
      <a
        href={member.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {member.name}
        {member.isResident ? "*" : ""}
      </a>
    </li>
  );
}

const cardClass = "flex flex-col border border-zinc-100 bg-zinc-50 p-6";

export default function ZBlockParticipants({
  groups,
  fellows,
}: {
  groups: ParticipantGroup[];
  fellows: Member[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title} className={cardClass}>
            <GroupHeader title={group.title} logo={group.logo} />
            <ul className="flex list-disc flex-col gap-1 pl-5 text-zinc-700">
              {group.members.map((member) => (
                <MemberItem key={member.name} member={member} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={cardClass}>
        <GroupHeader title="Fellows" />
        {/* Padding rather than a margin between names, so the first name of
            each column lines up with the others. */}
        <ul className="list-disc gap-x-8 pl-5 text-zinc-700 [&>li]:pb-1 md:columns-2 lg:columns-3">
          {fellows.map((member) => (
            <MemberItem key={member.name} member={member} />
          ))}
        </ul>
        {fellows.some((member) => member.isResident) && (
          <p className="mt-4 text-sm text-zinc-500">* Top Fellows</p>
        )}
      </div>
    </div>
  );
}
