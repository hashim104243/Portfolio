import React from "react";
import { ServicesList } from "../Data/ServicesList";
export default function Services() {
  return (
    <section className="bg-[#25262F] " id="Services">
      <div className="bg-[#25262F] p-3 sm:p-16 font-sans container mx-auto ">
        <div className="flex flex-col items-center pt-12">
          <div className="text-[#80DB66] tracking-[2px] text-xl">Service</div>
          <div className="text-white font-medium text-4xl p-6">
            What I offer
          </div>
        </div>

        <div className="md:grid md:grid-cols-2  gap-x-[100px]   md:gap-y-[12px] pb-10   container 2xl:pl-[80px] 2xl:pr-[90px] md:ml-[-30px] lg:ml-[-40px] lg:gap-x-[100px] xl:gap-x-0  xl:ml-0 xl:gap-y-[0px] 2xl:gap-x-0">
          {ServicesList.map((items) => {
            return (
              <div
                className="bg-white rounded-[10px] p-7 mx-auto  mt-7 md:pb-[60px] md:pt-[60px] lg:p-8 lg:flex  2xl:ml-[22px]  md:w-[340px] lg:w-[480px]  xl:w-[550px] 2xl:w-[600px]"
                key={items.id}
              >
                <div className="p-3    lg:w-28 ">
                  <img
                    src={items.image}
                    alt={items.alt}
                    className="w-12 md:w-[73px]"
                  />
                </div>
                <div className="lg:w-52 flex-grow ">
                  <div className="font-medium text-[26px] sm:text-[28px] mt-3 mb-3 lg:w-[300px] lg:text-[30px]">
                    {items.title}
                  </div>
                  <div className="text-[19px] text-[#4d4d5c]   sm:text-[20px]    lg:text-[20px] flex-grow ">
                    {items.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
