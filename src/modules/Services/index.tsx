import Residents from "./Residents";
import AuditTiers from "./AuditTiers";
import Fellows from "./Fellows";

// The pages under Services in the navbar: /services/smart-contract-audits,
// ZK Audits (the /zk page) and /services/boosted-audits. /services itself
// redirects to the first one (netlify.toml).
//
// grow: on a page shorter than the window, the content takes the extra height
// and the footer stays at the bottom. No top margin: the first block's my-16
// puts the title 64px under the navbar, as on the other pages.
const containerClass = "grow flex flex-col mx-6 mb-8 lg:mx-[20vw]";

export function SmartContractAudits() {
  return (
    <div className={containerClass}>
      <Residents />
      <AuditTiers />
    </div>
  );
}

export function BoostedAudits() {
  return (
    <div className={containerClass}>
      <Fellows />
    </div>
  );
}
