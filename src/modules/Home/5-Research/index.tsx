"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import AvatarCircles from "@/components/ui/avatar-circles";

interface Item {
  name: string;
  description: string;
  link?: string;
  avatars: { imageUrl: string; profileUrl: string }[];
}

let notifications = [
  {
    name: "From 0 to Bi(ge)nius: field extensions",
    description: "𝔽₂ and Beyond: A Gentle Guide to Field Extensions",
    link: "https://blog.yaudit.dev/binius-1-extension-fields",
    avatars: [
      {
        imageUrl:
          "https://avatars.githubusercontent.com/teddav",
        profileUrl: "https://github.com/teddav",
      }]
  },
  {
    name: "Reed-Solomon Codes: The Math Behind Error Correction and Zero-Knowledge Proofs",
    description: "From QR codes to ZK, discover how Reed-Solomon codes correct errors and secure digital communication",
    link: "https://blog.yaudit.dev/reed-solomon",
    avatars: [
      {
        imageUrl:
          "https://avatars.githubusercontent.com/teddav",
        profileUrl: "https://github.com/teddav",
      }]
  },
  {
    name: "FRI: Folding Polynomials and Catching Cheaters",
    description: "Folding and Merkle trees, understand the magic behind STARKs",
    link: "https://blog.yaudit.dev/fri",
    avatars: [
      {
        imageUrl:
          "https://avatars.githubusercontent.com/teddav",
        profileUrl: "https://github.com/teddav",
      }]
  },
    {
    name: "Sum-Check: The Backbone of ZK Proofs",
    description: "Compressing Computation One Bit at a Time",
    link: "https://blog.yaudit.dev/sumcheck",
    avatars: [
      {
        imageUrl:
          "https://avatars.githubusercontent.com/teddav",
        profileUrl: "https://github.com/teddav",
      }]
  },
  {
    name: "Security notes on ERC4337 and smart wallets",
    description: "An analysis of the security aspects of Account Abstraction",
    link: "https://blog.yaudit.dev/blogs/2024-09-09-security-notes-erc4337",
    avatars: [
      {
        imageUrl:
          "https://avatars.githubusercontent.com/romeroadrian",
        profileUrl: "https://twitter.com/adrianromero",
      },
    ],
  },
  {
    name: "When L2s Fall",
    description: "Newsflash - single points of failure can fail",
    link: "https://blog.yaudit.dev/blogs/2024-08-19-when-L2s-fall",
    avatars: [
      {
        imageUrl:
          "https://avatars.githubusercontent.com/engn33r",
        profileUrl: "https://twitter.com/bl4ckb1rd71",
      },
    ],
  },
  {
    name: "Are Inverse TWAP Prices Inaccurate",
    description: "Price Data is Hard - Part 1",
    link: "https://blog.yaudit.dev/blogs/2024-05-24-are-inverse-TWAP-prices-inaccurate",
    avatars: [
      {
        imageUrl:
          "https://avatars.githubusercontent.com/engn33r",
        profileUrl: "https://twitter.com/bl4ckb1rd71",
      },
    ],
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, link, avatars }: Item) => {
  return (
    <figure
      className={cn(
        "w-full min-h-fit cursor-pointer overflow-hidden p-4 mx-auto",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3 w-full">
        <div className="flex-shrink-0">
          <AvatarCircles avatarUrls={avatars} />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg truncate">{name}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60 truncate">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[275px] flex-col p-6 overflow-hidden w-full max-w-full",
        className
      )}
    >
      <AnimatedList delay={2000} className="w-full">
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

export default function Research() {
  return (
    <div className="h-full grid lg:grid-cols-2 my-12 sm:mx-6 md:mx-6 lg:mx-[20vw]">
      <div className="col-span-1 mr-10 sm:mr-0 sm:flex sm:flex-col w-full overflow-hidden">
        <h2 className="lg:text-4xl text-3xl font-bold sm:text-center">
          Research
        </h2>
        <AnimatedListDemo className="mt-8 md:hidden lg:hidden" />
        <p className="text-zinc-500 mb-8 sm:text-justify">
          <br />
          We dig, that&apos;s what we do - always.
          <br />
        </p>
        <a target="_blank" href="https://blog.yaudit.dev/">
          <button className="px-8 py-3 sm:w-full text-base text-white font-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700">
            Technical Blog Posts
          </button>
        </a>
      </div>
      <div className="lg:col-span-1">
        <AnimatedListDemo className="sm:hidden" />
      </div>
    </div>
  );
}
