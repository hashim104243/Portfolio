import React from "react";
import { funfactList } from "../Data/FunFactList";
export default function FunFacts() {
  return (
    <section className="bg-[#25262F]" id="Fun Facts">
      <div className="bg-[#25262F]  font-sans pb-6  mt-0 container mx-auto 2xl:pl-[80px] 2xl:pr-[50px]">
        <div className=" pt-16 pl-5 pr-5 pb-5 sm:p-16 sm:pb-4 lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:space-y-[-50px] lg:space-x-[30px] ">
          <div className="lg:mb-14">
            <div className="text-[#80DB66] text-xl lg:text-2xl lg:tracking-[4px] lg:pt-3 lg:pb-3">
              Fun Facts
            </div>
            <div className="text-[#fff] text-[35px] sm:text-[42px] lg:text-6xl ">
              I Develop System that Works
            </div>
            <div className="text-[#a0a0bb] text-[18px] sm:text-[21px] lg:mt-8">
              Sed ut perspiciatis unde omnis iste natus kobita tumi sopno
              charini hoye khbor nio na sit volup sundori toma amar tumi nili
              mar tatem accusantium dolore.
            </div>
          </div>

          <div className=" grid gap-y-4 sm:grid sm:grid-cols-2 mt-16  sm:gap-x-4 md:gap-x-3 lg:gap-x-12 xl:gap-x-10 2xl:gap-x-5 ">
            {funfactList.map((items) => {
              return (
                <div
                  key={items.id}
                  className="  lg:w-[220px] 2xl:w-[300px]  xl:w-[270px] flex justify-center items-center gap-x-3 border-[1px] border-[#bcc7d3] rounded-lg p-7 lg:p-5         "
                >
                  <div className="text-[#80DB66] text-[62px] font-bold">
                    {items.value}
                  </div>
                  <div className="">
                    <div className="text-white text-xl">{items.topContent}</div>
                    <div className="text-white text-xl">
                      {items.bottomConteant}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// <div className="  lg:w-[220px] 2xl:w-[300px]  xl:w-[270px] flex justify-center items-center gap-x-3 border-[1px] border-[#bcc7d3] rounded-lg p-7 lg:p-5         ">
// <div className="text-[#80DB66] text-[62px] font-bold">12</div>
// <div className="">
//   <div className="text-white text-xl">Years of </div>
//   <div className="text-white text-xl"> Experience</div>
// </div>
// </div>

// <div className="   lg:w-[220px] xl:w-[270px] 2xl:w-[300px]  flex justify-center items-center gap-x-3 border-[1px] border-[#bcc7d3] rounded-lg p-7 lg:p-5       ">
// <div className="text-[#80DB66] text-[62px] font-bold">12</div>
// <div className="">
//   <div className="text-white text-xl">Years of </div>
//   <div className="text-white text-xl"> Experience</div>
// </div>
// </div>

// <div className="  lg:w-[220px] 2xl:w-[300px]  xl:w-[270px] flex justify-center items-center gap-x-3 border-[1px] border-[#bcc7d3] rounded-lg p-7 lg:p-5         ">
// <div className="text-[#80DB66] text-[62px] font-bold">12</div>
// <div className="">
//   <div className="text-white text-xl">Years of </div>
//   <div className="text-white text-xl"> Experience</div>
// </div>
// </div>

// <div className="   lg:w-[220px] xl:w-[270px] 2xl:w-[300px]  flex justify-center items-center gap-x-3 border-[1px] border-[#bcc7d3] rounded-lg p-7 lg:p-5         ">
// <div className="text-[#80DB66] text-[62px] font-bold">12</div>
// <div className="">
//   <div className="text-white text-xl">Years of </div>
//   <div className="text-white text-xl"> Experience</div>
// </div>
// </div>
