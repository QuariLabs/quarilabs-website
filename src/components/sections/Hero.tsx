import QuariLabLogo from "@/components/icons/QuariLabLogo";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import Image from "next/image";
import Section from "@/components/ui/Section";

const Hero = () => {
  return (
    <div className="bg-quari-gray-200">
      <Section className="!pb-0 overflow-x-hidden">
        <QuariLabLogo />
        <div className="flex justify-between max-sm:flex max-sm:flex-col items-center max-sm:mt-10">
          <div>
            <h1 className="text-[2.5rem] max-sm:text-2xl font-clashDisplay font-bold max-w-xl leading-tight">
              Building Tomorrow&lsquo;s Blockchain Solutions,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-quari-orange-500 via-quari-orange-500 to-quari-orange-300">
                Today
              </span>
            </h1>
            <p className="font-light font-clashDisplay mt-3 max-sm:mt-5">
              Discover cutting-edge dApps and infra, setting new tech standards.
            </p>
            <div className="flex items-center gap-4 mt-6 max-sm:text-xs max-sm:flex-col max-sm:items-start">
              <a
                href="#projects"
                className="w-fit flex py-2 pl-5 pr-2 text-sm font-clashDisplay font-bold text-white items-center rounded-full gap-4 bg-gradient-to-r from-quari-orange-500 via-quari-orange-500 to-quari-orange-300"
              >
                Browse Projects
                <span className="bg-white rounded-full p-2">
                  <ArrowUpIcon className="stroke-black" />
                </span>
              </a>
              <a
                href="#footer"
                className="border border-black rounded-full flex gap-4 text-sm items-center py-2 pl-5 pr-2 font-clashDisplay font-bold"
              >
                Contact Us
                <span className="bg-black rounded-full p-2">
                  <ArrowUpIcon className="stroke-white" />
                </span>
              </a>
            </div>
          </div>

          <div className="relative h-[33.25rem] w-[35.9375rem] max-sm:-mr-56 max-sm:h-[20.625rem] max-sm:w-[21.625rem]">
            <Image
              src="/experiencing-vr-simulation-1.png"
              alt="vr simulation"
              fill
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
