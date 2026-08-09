"use client";

import { core } from "../Data/core";
import Image from "next/image";

export function Template({
  title,
  members,
}: {
  title: string;
  members: {
    name: string;
    twitter: string;
    avatar?: string;
  }[];
}) {
  const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
  
  const handleLinkClick = () => {
    const url = new URL(window.location.href);
    url.hash = slug;
    window.history.pushState({}, '', url.toString());
  };
  
  return (
    <div className="my-24" id={slug}>
      <h1 className="text-4xl mb-12 sm:text-center group relative cursor-pointer" onClick={handleLinkClick}>
        {title}
        <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </h1>
      <ul
        role="list"
        className="grid lg:grid-cols-3 grid-cols-2 lg:gap-x-72 md:gap-x-32 gap-y-12"
      >
        {members.map((person) => (
          <li key={person.name}>
            <div className="flex flex-row sm:flex-col items-center gap-x-6">
              <img
                className="h-11 w-11 sm:h-9 sm:w-9 sm:mb-2 rounded-full items-center"
                src={person.avatar ? person.avatar : "members/resident.png"}
                alt={person.name}
              />
              <div>
                <h3
                  className={
                    `sm:text-xs font-semibold text-gray-900 ` +
                    (person.twitter.length > 0 && "hover:underline")
                  }
                >
                  {person.twitter.length > 0 ? (
                    <a href={person.twitter} target="_blank">
                      {person.name}
                    </a>
                  ) : (
                    person.name
                  )}
                </h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Core() {
  return (
    <>
      <Template title={"Core"} members={core} />
    </>
  );
}
