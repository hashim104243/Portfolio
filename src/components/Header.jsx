import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
export default function Header() {
  return (
    <header className="bg-[#292522] h-[743px] lg:h-[625px] pt-[90px] font-sans  ">
      <div
        className="text-white flex flex-col justify-center items-center relative lg:flex-row lg:justify-between font-sans lg:pl-[30px] lg:pr-[0px]  container  mx-auto 2xl:pl-[220px] 2xl:pr-[150px]"
        id="home"
      >
        <div className="text-white flex flex-col justify-center items-center mt-9  lg:items-start  xl:ml-[150px] 2xl:ml-[60px]      ">
          <div
            className="text-[18px] tracking-[4px] text-[#84f565]
         lg:text-3xl  lg:ml-[85px] xl:ml-2"
          >
            Hello I’M
          </div>
          <div className="text-6xl   xl:ml-0 ml-20  lg:text-[7rem]  w-96 ">
            <span>Hashim</span> <span>Khan</span>
          </div>
          <div className=" text-center lg:flex lg:space-x-6 lg:items-center lg:mt-8 lg:ml-[85px] xl:ml-2">
            <div className="text-sm pt-6 pb-2 lg:pb-0 lg:pt-0 lg:text-xl ">
              A Passionate
            </div>
            <div className=" text-center text-[20px] text-[#80DB66] lg:text-3xl lg:mb-2 ">
              Software Engineer
            </div>
          </div>

          <div className="mt-8">
            <button className="text-white bg-[#80DB66] p-2 w-36 rounded lg:p-4 lg:w-40 lg:text-xl lg:ml-[85px] xl:ml-2">
              SAY Hello
            </button>
          </div>
        </div>

      <div className="   h-[323px] w-96 lg:w-[26rem] lg:h-[400px]  lg:mr-20   flex justify-center items-center xl:mr-[200px] lg:mt-[30px] sm:mt-[-50px] md:mt-[-50px]    2xl:mr-[60px]    ">
          <img
            className="lg:w-full lg:h-[100%]  h-[300px] lg:h-[476 px] "
            alt="person.png"
            src="person.png"
          />
        </div>
        <div className="hidden  md:block absolute   text-white w-16  space-y-3 md:top-[60px] md:right-[90px] lg:right-[30px] 2xl:right-[160px] container xl:right-[90px]  ">
          <div className="text-xl  lg:text-[18px] border flex justify-center items-center p-3  rounded hover:bg-[#80DB66] hover:text-white cursor-pointer">
            <a href="https://github.com/" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div className="text-xl lg:text-[18px] border flex justify-center items-center p-3  rounded hover:bg-[#80DB66] hover:text-white cursor-pointer">
            <a
              href="https://www.linkedin.com/in/muhammad-hashim-a46811279"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// <div className="text-xl border border-white flex justify-center items-center p-3 rounded hover:bg-[#80DB66] hover:text-white  cursor-pointer">
// <FaFacebookF />
// </div>
// <div className="text-xl lg:text-[18px] border flex justify-center items-center p-3  rounded hover:bg-[#80DB66] hover:text-white cursor-pointer">
// <FaYoutube />
// </div>
