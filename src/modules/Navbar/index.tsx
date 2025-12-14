/* eslint-disable @next/next/no-img-element */

import { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Props {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

function Button({ text }: { text: string }) {
  return (
    <button className="px-5 py-3 text-sm text-zinc-400 hover:text-deepblue hover:bg-white hover:bg-opacity-5 duration-700">
      {text}
    </button>
  );
}

export function Navbar({ menuOpen, setMenuOpen }: Props) {
  return (
    <div className="w-full flex h-18 items-center justify-between top-0 py-6">
      <div className="flex flex-row text-deepblue items-center text-xl lg:ml-[19vw] ml-4">
        <Link href={"/"}>
          <img alt="" src="/logo.svg" className="h-10" />
        </Link>
      </div>
      <button
        className="px-8 py-3 lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuOutlined />
      </button>
      <div className="flex flex-row items-center sm:hidden md:hidden lg:mr-[18vw]">
        <a href="https://reports.yaudit.dev/">
          <Button text={"Reports"} />
        </a>
        <a href="https://blog.yaudit.dev/">
          <Button text={"Blog"} />
        </a>
        <a href="https://research.yaudit.dev/">
          <Button text={"Research"} />
        </a>
        <Link href={"/fellowships"}>
          <Button text={"Fellowships"} />
        </Link>
        <Link href={"/services"}>
          <Button text={"Services"} />
        </Link>
        <Link href={"/team"}>
          <Button text={"Team"} />
        </Link>
        {/* <Link href={"/zBlock2"}>
          <Button text={"zBlock2"} />
        </Link> */}
        <Link href={"/contact-us"}>
          <button className="px-8 py-3 text-md text-white text-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}

interface MobileProps {
  setMenuOpen: (menuOpen: boolean) => void;
}

export function MobileNavbar({ setMenuOpen }: MobileProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        true &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef, setMenuOpen]);
  return (
    <div className="w-full h-full z-40 duration-700" ref={inputRef}>
      <div className="pt-8 mx-auto flex flex-col p-8 gap-2">
        <button
          onClick={() => {
            setMenuOpen(false);
          }}
          className="text-deepblue"
        >
          <CloseCircleOutlined style={{ fontSize: "2rem" }} />
        </button>

        <a href="https://reports.yaudit.dev/">
          <button className="p-6 w-full text-xl text-zinc-400 hover:text-deepblue hover:bg-deepblue hover:bg-opacity-5 duration-700">
            Reports
          </button>
        </a>
        <a href="https://blog.yaudit.dev/">
          <button className="p-6 w-full text-xl text-zinc-400 hover:text-deepblue hover:bg-deepblue hover:bg-opacity-5 duration-700">
            Blog
          </button>
        </a>
        <a href="https://research.yaudit.dev/">
          <button className="p-6 w-full text-xl text-zinc-400 hover:text-deepblue hover:bg-deepblue hover:bg-opacity-5 duration-700">
            Research
          </button>
        </a>

        <Link href={"/fellowships"}>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="p-6 w-full text-xl text-zinc-400 hover:text-deepblue hover:bg-deepblue hover:bg-opacity-5 duration-700"
          >
            Fellowships
          </button>
        </Link>
        <Link href={"/services"}>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="p-6 w-full text-xl text-zinc-400 hover:text-deepblue hover:bg-white hover:bg-opacity-5 duration-700"
          >
            Services
          </button>
        </Link>
        <Link href={"/team"}>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="p-6 w-full text-xl text-zinc-400 hover:text-deepblue hover:bg-white hover:bg-opacity-5 duration-700"
          >
            Team
          </button>
        </Link>

        <Link href={"/contact-us"}>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="p-6 w-full text-xl text-white bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700"
          >
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}
