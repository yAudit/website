import { useEffect, useState } from "react";
import SmartContracts from "../SC";
import ZK from "../ZK";
import GuestAuditor from "../GA";

const tabs = [
  {
    name: "Smart Contract Fellowship",
    href: "#smart-contract",
    current: false,
  },
  {
    name: "Zero Knowledge Fellowship",
    href: "#zero-knowledge",
    current: false,
  },
  { 
    name: "Guest Auditor Program", 
    href: "#guest-auditor", 
    current: true 
  },
];

const getTabFromHash = (hash: string) => {
  switch (hash) {
    case '#smart-contract':
      return "Smart Contract Fellowship";
    case '#zero-knowledge':
      return "Zero Knowledge Fellowship";
    case '#guest-auditor':
      return "Guest Auditor Program";
    default:
      return "Smart Contract Fellowship";
  }
};

export default function Summary() {
  const [currentTab, setCurrentTab] = useState("Smart Contract Fellowship");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Set initial tab based on hash
    const hash = window.location.hash;
    setCurrentTab(getTabFromHash(hash));
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentTab(getTabFromHash(hash));

      // Scroll to the "Choose your hard" heading
      setTimeout(() => {
        const element = document.getElementById('fellowship-tabs-section');
        if (element && hash) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Initial hash handling
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [isClient]);

  const handleTabClick = (tab: { name: any; href: any; current?: boolean; }) => {
    setCurrentTab(tab.name);
    if (typeof window !== 'undefined') {
      // Update URL hash without triggering a page reload
      window.history.pushState(null, '', tab.href);

      // Scroll to the "Choose your hard" heading
      const element = document.getElementById('fellowship-tabs-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="my-16" id="fellowship-tabs-section">
      <h2 className="text-3xl font-bold text-center mb-8">Choose your hard</h2>
      <div className="sm:block">
        <div className="border border-deepblue">
          <nav className="-mb-px grid grid-cols-3" aria-label="Tabs">
            {tabs.map((tab) => (
              <a 
                key={tab.name} 
                href={tab.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab);
                }}
                className="col-span-1"
              >
                <button
                  className={`w-full p-3 text-md hover:bg-deepblue hover:text-white duration-700 ${
                    tab.name === currentTab
                      ? "bg-deepblue bg-opacity-100 text-white"
                      : "text-deepblue"
                  }`}
                >
                  {tab.name}
                </button>
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="mt-16">
        <div id="smart-contract">
          {currentTab === "Smart Contract Fellowship" && <SmartContracts />}
        </div>
        <div id="zero-knowledge">
          {currentTab === "Zero Knowledge Fellowship" && <ZK />}
        </div>
        <div id="guest-auditor">
          {currentTab === "Guest Auditor Program" && <GuestAuditor />}
        </div>
      </div>
      <div className="my-16 flex flex-row gap-4 p-8 items-center border border-deepblue">
        <img alt="" src="./icons/bulb.svg" className="h-16" />
        <p className="text-deepblue text-sm">
          If you think our program is too advanced for you now, fear not, you
          can still join after going through an introductory program such as{" "}
          <a
            href="https://secureum.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline duration-700"
          >
            Secureum
          </a>
          . If you prefer to fly solo, you can bootstrap yourself & hunt for
          bounties on{" "}
          <a
            href="https://immunefi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline duration-700"
          >
            Immunefi
          </a>
          . Then, come back & apply, we would love to boost your progress to an
          advanced level.
        </p>
      </div>
    </div>
  );
}