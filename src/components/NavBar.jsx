import React from "react";
import { list } from "../Data/NavBarItems";
import { HiBars3 } from "react-icons/hi2";
export default function NavBar() {
  return (
    <nav className="  flex items-center p-2   justify-around 2xl:justify-around w-full  fixed top-0    bg-[#292522]  lg:pt-7 z-40 font-sans mx-auto 2xl:pl-[150px] 2xl:pr-[100px]">
      <div className="nav-right  ">
        <div className="flex justify-start  ">
          <img src="/logo.png" alt="logo" className="w-[120px] lg:w-52" />
        </div>
      </div>

      <div className="nav-left flex justify-center items-center text-white space-x-3 ml-2">
        <div className="list   text-white hidden  lg:block ">
          <ul className="flex space-x-9 text-2xl mr-7">
            {list.map((items) => {
              return (
                <li
                  key={items.id}
                  className="text-[19px] font-medium cursor-pointer hover:text-[#80DB66]"
                >
                  <a href={items.link}> {items.value}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="border border-solid border-[#80DB66] p-3 lg:w-40 lg:text-[16px] font-medium text-xs rounded hover:bg-[#80DB66] hover:text-white  cursor-pointer">
          <a href="Hashim Resume.pdf" download>
            DOWNLOAD CV
          </a>
        </button>
        <div className="text-2xl text-[#80DB66] md:text-3xl md:pl-[23px]   lg:hidden">
          <HiBars3 />
        </div>
      </div>
    </nav>
  );
}
