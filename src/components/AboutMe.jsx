import React from "react";

export default function AboutMe() {
  return (
    <section className="bg-[#EEF4FA]" id="About">
      <div className="bg-[#EEF4FA]   lg:h-[890px] lg:flex font-sans pb-[2px]   pt-16 container mx-auto  ">
        <div className="p-10 relative mx-auto flex justify-center lg:ml-8 container ">
          <div className="w-24 h-24 border-[#80DB66] border-4 absolute top-4 right-4 z-[0] md:right-28 lg:right-0 2xl:right-12 "></div>
          <img
            src="about-img.jpg"
            alt="person Image"
            className="relative z-10"
          />
          <div className="w-16 h-[76px] bg-[#80DB66] absolute top-28  left-0  sm:left-10  md:left-[105px] lg:left-0  z-20 2xl:left-12"></div>
          <div className="w-12 h-16 bg-[#80DB66] absolute  bottom-[4px] left-[235px] z-20 sm:left-[430px] md:left-[490px] lg:left-[350px]  2xl:left-[530px]   lg:bottom-[7px]  xl:bottom-[0px] 2xl:bottom-[9px] "></div>
        </div>

        <div className=" container lg:mt-[40px]  " id="home">
          <div className="sm:ml-[70px] lg:ml-[0px] ">
            <div className="text-[#80DB66] text-[16px] pl-4 sm:text-xl ">
              ABOUT ME
            </div>
            <div className="text-4xl text-[2e2e37] pl-4 font-bold sm:p-4 lg:text-5xl xl:text-6xl">
              I Develop System that Works
            </div>
            <div className="text-[#4d4d5c] text-[18px] pt-4 pl-4 pr-5 sm:text-[19px] xl:w-[37rem] ">
              I specialize in creating robust, efficient, and scalable systems
              that meet the needs of modern applications. As a frontend
              engineer, I bring innovative design and seamless user experiences
              to life, ensuring that every system I develop is not only
              functional but also user-friendly and visually appealing.
            </div>

            <hr className="border-[0.11 ] border-[#bcc7d3] pt-4 mt-4 pb-4 w-80 ml-[20px] sm:w-[480px]   md:w-[630px] lg:ml-[20px] lg:w-[90%]" />
          </div>

          <div className="sm:ml-[70px] lg:ml-[0px] xl:grid xl:grid-cols-2 xl:gap-x-0 xl:text-sm">
            <div className="flex text-xl p-1 space-x-24 items-center">
              <div className="ml-4 text-[#212529]  xl:text-sm ">Name</div>
              <div className=" text-[#4d4d5c]  xl:text-sm">Hashim Khan</div>
            </div>
            <div className="flex text-xl p-1 space-x-28 items-center">
              <div className="ml-4 text-[#212529]  xl:text-sm">Age</div>
              <div className=" text-[#4d4d5c]  xl:text-sm">23 Year</div>
            </div>
            <div className="flex text-xl p-1 space-x-[45px] items-center">
              <div className="ml-4 text-[#212529]  xl:text-sm">Occupation</div>
              <div
                className=" text-[#4d4d5c]  xl:text-sm 
              xl:pl-[17px]"
              >
                Software Dev
              </div>
            </div>
            <div className="flex text-xl p-1 space-x-[90px] items-center">
              <div className="ml-4 text-[#212529]  xl:text-sm">Phone</div>
              <div className=" text-[#4d4d5c]  xl:text-sm xl:pl-[10px]">
                03185746782
              </div>
            </div>
            <div className="flex text-xl p-1 space-x-[100px] items-center">
              <div className="ml-4 text-[#212529]  xl:text-sm">Email</div>
              <div className=" text-[#4d4d5c]  xl:text-sm">
                hashim104243@gmail.com
              </div>
            </div>
            <div className="flex text-xl p-1 space-x-[55px] items-center">
              <div className="ml-4 text-[#212529] xl:text-sm">Nationality</div>
              <div className=" text-[#4d4d5c] xl:text-sm   xl:pl-[22px]">
                Pakistani
              </div>
            </div>
            <hr className="border-[0.11 ] border-[#bcc7d3] mt-6 mb-6 w-80 ml-[20px] sm:w-[480px]   md:w-[630px] lg:ml-[20px] lg:w-[90%] xl:w-[590px]" />
          </div>

          <div className="sm:flex sm:justify-around  ">
            <div className="pl-4">
              <img src="signature.png" alt="signature Icon" />
            </div>
            <div className="pl-4 pt-8 xl:pt-0 xl:flex xl:justify-center xl:items-center xl:space-x-3">
              <div className="text-xl xl:text-[22px]"> Bruce Wayne </div>
              <div className="text-[#9b9db1] xl:text-[18px]">
                Software Architect, Google Inc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// https://thames-demo-nuxt.vercel.app/index-1
