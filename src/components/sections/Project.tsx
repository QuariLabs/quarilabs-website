import React from "react";
import Section from "../ui/Section";
import DoubleCircle from "../icons/DoubleCircle";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import Image from "next/image";

const Project = () => {
  return (
    <Section id="projects" className="max-sm:mt-10">
      <h1 className="flex gap-4 items-center text-3xl font-clashDisplay font-bold">
        <DoubleCircle />
        Projects
      </h1>
      <div className="bg-gradient-to-r from-[#181615] font-clashDisplay to-[#42403F] p-16 max-sm:p-10 rounded-[3rem] relative mt-10 text-white flex flex-col ga-4">
        <h2 className="text-2xl font-bold">Velix</h2>
        <p className="mt-4">
          Velix is a liquid staking as a service protocol on various ecosystems.
          <br />
          We offer tradable tokens for staked assets with a user-friendly
          interface
        </p>
        <a
          href="https://velix.io"
          target="_blank"
          className="w-fit mt-8 flex py-2 pl-5 pr-2 text-sm font-clashDisplay font-bold text-white items-center rounded-full gap-4 bg-gradient-to-r from-quari-orange-500 via-quari-orange-500 to-quari-orange-300"
        >
          Visite product
          <span className="bg-white rounded-full p-2">
            <ArrowUpIcon className="stroke-black" />
          </span>
        </a>
        <div className="absolute -top-20 max-sm:right-0 max-sm:top-80 -right-16 w-[38.1875rem] h-[32.25rem] max-sm:w-[22.8125rem] max-sm:h-[19.25rem]">
          <Image src="/velix-demo.png" fill alt="velix demo" />
        </div>
      </div>
    </Section>
  );
};

export default Project;
