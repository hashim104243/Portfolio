import React from "react";
import { SlGraduation } from "react-icons/sl";
export default function Education() {
  return (
    <div className=" bg-[#EFFFF3] p-5 sm:p-14 md:p-17 lg:p-10 lg:flex lg:space-x-32   xl:space-x-28   2xl:space-x-28 font-sans  2xl:justify-center ">
      <div className="education-left  lg:w-[600px] text-[#2e2e37] ">
        <div className="text-[#80DB66] text-xl tracking-[2px]  md:tracking-[5px] md:text-2xl ">
          Education
        </div>
        <div className="text-[#2e2e37] text-[35px] font-bold pt-1 md:text-4xl ">
          My Education
        </div>
        <div className="text-[#4d4d5c] text-[20px] sm:text-[21px] pt-5 sm:pr-[30px] md:text-[22px]   ">
          Completed a Bachelor’s in Computer Science at Federal Urdu University
          (2019 - 2023). Developed strong skills in software development and
          algorithms, with a focus on problem-solving and innovative thinking,
          laying a solid foundation for my career in technology.
        </div>

        <div className="lg:mt-16">
          <div className="flex space-x-3 mt-6 sm:space-x-6  ">
            <div className="  bg-[#80DB66] pb-9 pl-3 pr-3 pt-3 h-12  rounded-[8px] mt-2 md:pl-4 md:pr-4 md:pt-3 md:pb-[52px] ">
              <SlGraduation className="text-white   text-2xl md:text-4xl " />
            </div>
            <div className="">
              <div className="text-#2e2e37 text-3xl font-medium text-[#2e2e37]">
                Bachelors in Computer Science
              </div>
              <div className="mt-2 mb-4">
                <span className=" text-xl font-medium text-[#2e2e37]">
                  Federal Urdu University
                </span>
                <span className="text-[#9b9db1] ">&nbsp;( 2019 - 2023 )</span>
              </div>
              <div className="text-[#4d4d5c] text-[19px] md:text-[21px]">
                Gained expertise in software development and algorithms, with a
                strong focus on problem-solving and innovation, during my
                academic journey.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="education-right mt-10 md:flex md:justify-center ">
        <img
          className="xl:h-[500px] xl:w-[500px]"
          src="education-img.jpg"
          alt="education Image"
        />
      </div>
    </div>
  );
}

// <div className="flex space-x-3 mt-6 sm:space-x-6 ">
// <div className="  bg-[#80DB66] pb-9 pl-3 pr-3 pt-3 h-12  rounded-[8px] mt-2 md:pl-4 md:pr-4 md:pt-3 md:pb-[52px] ">
//   <SlGraduation className="text-white   text-2xl md:text-4xl " />
// </div>
// <div>
//   <div className="text-[#2e2e37] text-3xl font-medium">
//     Bachelor in Computer Engineering
//   </div>
//   <div className="mt-2 mb-4">
//     <span className="text-[#2e2e37] text-xl font-medium">
//       Dhaka University
//     </span>
//     <span className="text-[#9b9db1] "> ( 2008 - 2011 )</span>
//   </div>
//   <div className="text-[#4d4d5c] text-[19px]  md:text-[21px]">
//     Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
//     veritatis et quasi architecto beatae vitae.
//   </div>
// </div>
// </div>

// <div className="flex space-x-3 mt-6 sm:space-x-6 ">
// <div className="  bg-[#80DB66] pb-9 pl-3 pr-3 pt-3 h-12  rounded-[8px] mt-2  md:pl-4 md:pr-4 md:pt-3 md:pb-[52px]">
//   <SlGraduation className="text-white   text-2xl md:text-4xl " />
// </div>
// <div>
//   <div className="text-#2e2e37 text-3xl font-medium">
//     Diploma in Graphic Design
//   </div>
//   <div className="mt-2 mb-4">
//     <span className="text-[#2e2e37] text-xl font-medium">
//       Bangla College
//     </span>
//     <span className="text-[#9b9db1] "> ( 2006 - 2008 )</span>
//   </div>
//   <div className="text-[#4D4D5C] text-[19px]  md:text-[21px] ">
//     Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
//     veritatis et quasi architecto beatae vitae.
//   </div>
// </div>
// </div>
