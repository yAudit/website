import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientWord = styled.span`
  background: linear-gradient(360deg, #0055FF -16.67%, #0088FF 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

function HeroSection() {
  return (
    <div className="h-full relative sm:my-16 lg:mx-[20vw]">
      <div className="grid grid-cols-4 md:mx-6 sm:flex sm:flex-col sm:mx-6 sm:text-center">
        <div className="col-span-2 flex flex-col lg:py-8 lg:my-24 md:my-32">
            <h1 className="lg:leading-normal lg:text-6xl md:text-4xl sm:text-4xl font-bold">
            <span className="text-deepblue">Smart <br />  Contract</span> <br /> 
            <span className="text-deepblue">& ZK </span> Security
            </h1>
          <h2 className="text-left sm:text-center my-4 text-zinc-500">
            Audits - Research - Training - Consulting
          </h2>
          <div className="flex flex-row sm:flex-col gap-4 items-center justify-start sm:justify-center">
            <Link href={"/contact-us"}>
              <button className="px-16 py-3 text-md text-white text-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700">
                Get an Audit
              </button>
            </Link>
            <a href="https://quoteplz.com" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 text-deepblue font-bold border-2 border-deepblue hover:bg-deepblue hover:bg-opacity-5 transition-all duration-300">
                Get instant Quote
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-2 my-20 sm:hidden md:hidden">
          <Image src="/hero.png" alt="Hero" width={600} height={400} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
