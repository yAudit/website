import Residents from "./Residents";
import AuditTiers from "./AuditTiers";
import Fellows from "./Fellows";

// The pages under Services in the navbar: /services/smart-contract-audits,
// ZK Audits (the /zk page) and /services/boosted-audits. /services itself
// redirects to the first one (netlify.toml).
//
// grow: on a page shorter than the window, the content takes the extra height
// and the footer stays at the bottom.
const containerClass = "grow flex flex-col m-3 my-8 lg:mx-[20vw]";

export function SmartContractAudits() {
  return (
    <div className={containerClass}>
      <h1 className="sr-only">Smart Contract Audits</h1>
      <Residents />
      <AuditTiers />
    </div>
  );
}

export function BoostedAudits() {
  return (
    <div className={containerClass}>
      <h1 className="sr-only">Boosted Audits</h1>
      <Fellows />
    </div>
  );
}
