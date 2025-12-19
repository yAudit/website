import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import GoogleAnalytics from "@/app/gtag";
import RebrandingBanner from "@/components/RebrandingBanner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className={""}>
        <RebrandingBanner />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://yaudit.dev"),
  title: "yAudit - ZK & Smart Contract Security Auditing",
  description:
    "yAudit is focused on smart contracts and zero-knowledge security: auditing, research, and increasingly tooling. We launched to help make DeFi more secure and have since then secured contracts holding billions in TVL.",
  applicationName: "yAudit",
  keywords: [
    "yAudit",
    "Zero Knowledge",
    "ZK Security",
    "Smart Contract Security",
    "Blockchain Security",
    "Ethereum Security",
    "Cryptography",
    "DeFi Security",
    "Security Audit",
    "Smart Contract Audit",
    "ZK Audit",
  ],
  authors: [{ name: "yAudit Team", url: "https://yaudit.dev/team" }],
  creator: "yAudit Team",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  alternates: {
    canonical: "https://yaudit.dev",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/icon.png", sizes: "1334x1334", type: "image/png" },
    ],
    apple: { url: "/icon.png", sizes: "1334x1334", type: "image/png" },
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://yaudit.dev",
    title: "yAudit - ZK & Smart Contract Security Auditing",
    description:
      "yAudit is focused on smart contracts and zero-knowledge security: auditing, research, and increasingly tooling. We launched to help make DeFi more secure and have since then secured contracts holding billions in TVL.",
    siteName: "yAudit",
    locale: "en_US",
    images: [
      {
        url: "/twitter.png",
        width: 2348,
        height: 1384,
        alt: "yAudit - ZK & Smart Contract Security",
        type: "image/png",
      },
      {
        url: "/icon.png",
        width: 1334,
        height: 1334,
        alt: "yAudit Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yauditdao",
    creator: "@yauditdao",
    title: "yAudit - ZK & Smart Contract Security Auditing",
    description:
      "yAudit is focused on smart contracts and zero-knowledge security: auditing, research, and increasingly tooling. We launched to help make DeFi more secure and have since then secured contracts holding billions in TVL.",
    images: {
      url: "/twitter.png",
      alt: "yAudit - ZK & Smart Contract Security",
    },
  },
};
