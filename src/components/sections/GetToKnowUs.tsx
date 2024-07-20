import DoubleCircle from "@/components/icons/DoubleCircle";
import Section from "@/components/ui/Section";
import React from "react";
import GoalIcon from "../icons/GoalIcon";
import LampIcon from "../icons/LampIcon";

const GetToKnowUs = () => {
  return (
    <Section className="!pb-0 max-sm:mt-10">
      <div>
        <h1 className="flex gap-4 items-center text-3xl font-clashDisplay font-bold">
          <DoubleCircle />
          Get to know us
        </h1>
        <p className="font-clashDisplay font-normal text-quari-gray-500 my-10 max-w-4xl">
          At <b>QUARI Labs</b>, we lead blockchain technology advancements
          developing solutions that meet today’s demands and shape the future of
          digital transactions and decentralized applications
        </p>

        <div className="flex max-sm:flex-col items-center gap-4">
          <div className="font-clashDisplay bg-quari-gray-200 p-11 max-md:p-5 rounded-3xl h-max">
            <h2 className="flex items-center gap-4 text-2xl font-bold">
              <GoalIcon />
              Mission
            </h2>
            <p className="text-quari-gray-500 mt-5">
              To become a leading blockchain development lab, <br /> delivering
              innovative and impactful blockchain solutions.
            </p>
          </div>
          <div className="font-clashDisplay bg-quari-gray-200 p-11 max-md:p-5 rounded-3xl h-max">
            <h2 className="flex items-center gap-4 text-2xl font-bold">
              <LampIcon />
              Vision
            </h2>
            <p className="text-quari-gray-500 mt-5">
              To create high-demand blockchain dApps,
              <br /> infrastructure, driving growth and innovation in the
              blockchain space.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default GetToKnowUs;
