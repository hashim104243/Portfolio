import React from "react";
export default function HeaderSkillsSection() {
  return (
    <div
      className="bg-[#E2ECF6] h-auto flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-x-6 pb-14   items-center lg:flex-row lg:p-10 lg:pt-24 lg:pb-24 lg:ml-[0px]  lg:justify-center lg:space-x-8 2xl:space-x-10   font-sans  lg:flex-nowrap lg:gap-x-0 "
      id="Works"
    >
      <div className="bg-white w-80 h-[320px] mt-14  rounded-xl [10px] pt-10 pl-12 pr-[40px]  text-left sm:w-[390px] lg:w-[250px] lg:pl-[22px] lg:pr-4 lg:pt-5 lg:h-[310px] lg:mt-[-50px] xl:w-[280px]  xl:h-[365px] xl:pt-10 xl:pl-11 md:w-[350px] ">
        <div>
          <img
            src="intro-ft-icon1.png"
            alt="Dedication Icon"
            className="w-10  pb-5 pt-4    xl:w-20 "
          />
        </div>
        <div className="text-2xl font-medium pb-3 text-[#2e2e37]   xl:text-[23px]">
          Dedication
        </div>
        <div className="text-xl text-[#4d4d5c] ">
          Committed to continuous learning and excellence in all aspects of
          computer science
        </div>
      </div>
      <div className="bg-white w-80 h-[320px] mt-[30px]  rounded-[10px] pt-10 pl-12 pr-12  text-left sm:w-[390px]  lg:w-[250px] lg:pl-[22px] lg:pr-5 lg:pt-5 lg:h-[310px] xl:w-[280px]  xl:h-[365px] xl:pt-10 xl:pl-11  md:w-[350px] ">
        <div>
          <img
            src="intro-ft-icon2.png"
            alt="Technology icon"
            className="w-10  pb-5 pt-4     xl:w-20"
          />
        </div>
        <div className="text-2xl font-medium  pb-3 text-[#2e2e37] xl:text-[23px]">
          Smart Work
        </div>
        <div className="text-xl text-[#4d4d5c] ">
          Leveraging strategic problem-solving and efficient coding practices
          for optimal results.
        </div>
      </div>

      <div className="bg-white w-80 h-[320px] mt-[30px] rounded-xl [10px] pt-10 pl-12 pr-[40px]  text-left sm:w-[390px] lg:w-[250px] lg:pl-[22px] lg:pr-5 lg:pt-5 lg:h-[310px] lg:mt-[-50px] xl:w-[280px]  xl:h-[365px] xl:pt-10 xl:pl-11  md:w-[350px]">
        <div>
          <img
            src="intro-ft-icon3.png"
            alt="Collaboration icon "
            className="w-10  pb-5 pt-4    xl:w-[55px] "
          />
        </div>
        <div className="text-2xl font-medium pb-3 text-[#2e2e37]   xl:text-[23px]">
          Collaboration
        </div>
        <div className="text-xl text-[#4d4d5c] ">
          Effective team player, working seamlessly with others to achieve
          shared goals.
        </div>
      </div>
      <div className="bg-white w-80 h-[320px] mt-[30px]  rounded-[10px] pt-10 pl-12 pr-12  text-left sm:w-[390px]  lg:w-[250px] lg:pl-[22px] lg:pr-5 lg:pt-5 lg:h-[310px] xl:w-[280px]  xl:h-[365px] xl:pt-10 xl:pl-11  md:w-[350px] ">
        <div>
          <img
            src="intro-ft-icon4.png"
            alt="Technology icon"
            className="w-10  pb-5 pt-4     xl:w-20"
          />
        </div>
        <div className="text-2xl font-medium  pb-3 text-[#2e2e37] xl:text-[23px]">
          Technology
        </div>
        <div className="text-xl text-[#4d4d5c] ">
          Proficient in cutting-edge technologies, driving innovation and
          efficiency in software development.
        </div>
      </div>
    </div>
  );
}
// HeaderSkillsSection
// bg color #E2ECF6
// gedaing size 24px 400
// content 18px 400
// const isLgOrGreater = window.innerWidth >= 1024;
