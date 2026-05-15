import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import AvatarCircles from "@/components/ui/avatar-circles";

// Blog data and components from your existing Research component
interface Item {
  name: string;
  description: string;
  link: string;
  avatars: { imageUrl: string; profileUrl: string }[];
}

let notifications = [
  {
    name: "From 0 to Bi(ge)nius: field extensions",
    description: "𝔽₂ and Beyond: A Gentle Guide to Field Extensions",
    link: "https://blog.yaudit.dev/binius-1-extension-fields",
    avatars: [
      {
        imageUrl: "https://avatars.githubusercontent.com/teddav",
        profileUrl: "https://github.com/teddav",
      }]
  },
  {
    name: "Reed-Solomon Codes: The Math Behind Error Correction and Zero-Knowledge Proofs",
    description: "From QR codes to ZK, discover how Reed-Solomon codes correct errors and secure digital communication",
    link: "https://blog.yaudit.dev/reed-solomon",
    avatars: [
      {
        imageUrl: "https://avatars.githubusercontent.com/teddav",
        profileUrl: "https://github.com/teddav",
      }]
  },
  {
    name: "FRI: Folding Polynomials and Catching Cheaters",
    description: "Folding and Merkle trees, understand the magic behind STARKs",
    link: "https://blog.yaudit.dev/fri",
    avatars: [
      {
        imageUrl: "https://avatars.githubusercontent.com/teddav",
        profileUrl: "https://github.com/teddav",
      }]
  },
  {
    name: "Sum-Check: The Backbone of ZK Proofs",
    description: "Compressing Computation One Bit at a Time",
    link: "https://blog.yaudit.dev/sumcheck",
    avatars: [
      {
        imageUrl: "https://avatars.githubusercontent.com/teddav",
        profileUrl: "https://github.com/teddav",
      }]
  },
  {
    name: "GKR: Sumcheck's best friend",
    description: "Verifying Computations Layer by Layer",
    link: "https://blog.yaudit.dev/gkr",
    avatars: [
      {
        imageUrl: "https://avatars.githubusercontent.com/teddav",
        profileUrl: "https://github.com/teddav",
      },
    ],
  },
  {
    name: "From a failing test to calling SEAL911",
    description: "A small detail influencing major cryptographic libraries",
    link: "https://blog.yaudit.dev/from-failing-test-to-calling-911",
    avatars: [
      {
        imageUrl: "https://avatars.githubusercontent.com/u/92337658?v=4",
        profileUrl: "https://github.com/obatirou",
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
        "border border-zinc-100 hover:-translate-y-1 transition-transform duration-300",
        "bg-white",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3 w-full">
        <div className="flex-shrink-0">
          <AvatarCircles avatarUrls={avatars} />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg truncate">
              <Link href={link} className="hover:underline">
                {name}
              </Link>
            </span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60 truncate">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[450px] flex-col p-6 overflow-hidden w-full max-w-full",
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

// Featured Research Highlight Component
function FeaturedResearchHighlight() {
  return (
    <div className="bg-gray-50 border border-zinc-200 cursor-pointer group overflow-hidden hover:-translate-y-1 transition-transform duration-300">
      {/* Hero Banner Image */}
      <div className="relative h-[20rem] overflow-hidden">
        
        <img 
          src="/mpc.png" 
          alt="Multi Party Computation Research" 
          className="w-full h-full object-cover opacity-85"
        />
        {/* Featured Badge Overlay */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {/* <span className="bg-white/90 text-deepblue px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
             Featured Research
          </span> */}
          <span className="bg-deepblue text-white px-3 py-1 text-sm font-medium">
            ⭐ Latest
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 text-center">
        {/* Main Content */}
        <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          MPC Research on  {' '}
          <span className="text-deepblue">
            Vole, Quicksilver
          </span>
        </h1>

        {/* CTA Section */}
        <div className="grid grid-cols-1 w-full">
          <a href="https://research.yaudit.dev/mpc" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center gap-2 px-6 py-3 text-base text-white font-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700 w-full">
              View Research
              {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

// Blog Section Component (adapted from your Research component)
function BlogSection() {
  return (
    <div className="h-full">
      <div className="w-full overflow-hidden">
        <h2 className="lg:text-4xl text-3xl font-bold text-center">
          Blogs
        </h2>
      </div>
      
      <div className="block">
        <AnimatedListDemo />
      </div>
    </div>
  );
}

export default function ResearchSection() {
  return (
    <div className="bg-zinc-50 border border-zinc-100">
      <div className="lg:my-12 p-12 lg:px-64">
        <div className="grid sm:grid-cols-1 grid-cols-2 gap-12 items-start">
          {/* Left Side - Featured Research Highlight */}
          <div>
            <FeaturedResearchHighlight />
          </div>
          
          {/* Right Side - Blog Section with AnimatedList */}
          <div>
            <BlogSection />
          </div>
        </div>
      </div>
    </div>
  );
}