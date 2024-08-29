import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#DEF5EF]">
      <div className="bg-[#DEF5EF] sm:flex sm:flex-wrap sm:space-x-0 sm:p-7   lg:justify-between lg:items-center   md:justify-center font-sanbs pb-8 container mx-auto  sm:pl-[60px] lg:pl-[35px] lg:pr-[40px] xl:pl-[50px] xl:pr-[90px] 2xl:pl-[100px] 2xl:pr-[170px] ">
        <div className="sm:order-1 lg:mt-4  ">
          <div className="">
            <img className="p-4" alt="logo Icon" src="logo-dark. footer.png" />
            <p className="p-5 text-[18px] sm:text-[18px] ">
              All rights reserved <span className="font-bold">Codeefly</span> ©
              2024
            </p>
          </div>
        </div>
        <div className="sm:order-3 lg:order-2    ">
          <div className="p-5 text-2xl    ">News Letter</div>
          <div className="p-2 ml-5 mt-2 border border-solid border-black rounded w-80 md:w-[480px]  relative sm:w-[470px]   lg:w-[260px] ">
            <input
              type="text"
              className="w-[100%]  bg-[#F4FAF9] h-8"
              readOnly
              placeholder="submit your email"
              border
            />
            <div className="absolute top-2 right-2  text-3xl text-[#80DB66] ">
              <MdOutlineEmail />
            </div>
          </div>
        </div>
        <div className="sm:order-2   lg:order-3  ">
          <div className="p-5 sm:pl-0   text-2xl ">Follow Me</div>
          <div className="flex sm:ml-0  ml-5 space-x-2  ">
            <div className="text-xl text-white bg-[#1877f2] rounded-full p-3 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="text-xl text-white bg-[#1877f2] rounded-full p-3 cursor-pointer ">
              <FaTwitter />
            </div>
            <div className="text-xl text-white bg-[#1877f2] rounded-full p-3 cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="text-xl text-white bg-[#1877f2] rounded-full p-3 cursor-pointer">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
