/**
 * Structured data definitions for yAudit.
 * @see https://schema.org for type documentation.
 */

const BASE_URL = "https://yaudit.dev";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "yAudit",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  description:
    "yAudit is focused on smart contracts and zero-knowledge security: auditing, research, and increasingly tooling.",
  foundingDate: "2021",
  email: "hello@yaudit.dev",
  sameAs: [
    "https://www.github.com/electisec",
    "https://www.x.com/yAuditDAO",
    "https://www.youtube.com/@electisec",
  ],
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "yAudit",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  description:
    "Smart contract and zero-knowledge security audits, boosted audits, consulting, research, and training.",
  areaServed: "Worldwide",
  serviceType: [
    "Smart Contract Security Audit",
    "Zero-Knowledge Security Audit",
    "Boosted Audit",
    "Security Consulting",
    "Security Research",
    "Security Training",
  ],
  audience: {
    "@type": "BusinessAudience",
    name: "DeFi and Web3 protocols",
  },
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does yAudit offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "yAudit offers smart contract security audits, zero-knowledge (ZK) security audits, boosted audits conducted during fellowship cohorts, security consulting, security research, and training programs.",
      },
    },
    {
      "@type": "Question",
      name: "What is a boosted audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A boosted audit is scheduled during one of yAudit's intensive fellowship cohorts, giving your protocol access to 50+ talented security researchers who work alongside resident auditors to scrutinize every aspect of your codebase.",
      },
    },
    {
      "@type": "Question",
      name: "How do I request an audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can request an audit by visiting the Contact Us page at yaudit.dev/contact-us and filling out the form, or by emailing hello@yaudit.dev directly.",
      },
    },
    {
      "@type": "Question",
      name: "What is the yAudit fellowship program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The yAudit fellowship program trains the next generation of smart contract and ZK security auditors through hands-on audit experience. Fellows audit alongside resident auditors and guest auditors, gaining real-world security experience.",
      },
    },
    {
      "@type": "Question",
      name: "How much TVL has yAudit secured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "yAudit has secured contracts holding billions in TVL and identified over 500 critical vulnerabilities across its audit engagements.",
      },
    },
  ],
};

type Crumb = { name: string; path: string };

/**
 * Generates BreadcrumbList JSON-LD for a given page.
 * Always starts with the homepage as the first crumb.
 */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.path}`,
    })),
  };
}
