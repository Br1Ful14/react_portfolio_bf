import React from "react";
import { NavBar } from "./NavBar";
import { Socials } from "./Socials";
import logoBigWhite from "../assets/img/logos/logoBigWhite.svg";
import glasses from "../assets/img/logos/glasses.svg"

export const Header = () => {
  return (
  <header className="h-20 bg-black items-center fixed top-0 w-full text-white z-10">
  <div className='container mx-auto h-full flex items-center justify-center lg:justify-between'>
    <span className="w-1/4 hidden md:block lg:block">{"<BrunoFulia />"}</span>
    <span className="w-1/4 sm:block md:hidden lg:hidden">{"<BF/>"}</span>
    {/* <img src={logoBigWhite} className="w-1/4 hidden md:block lg:block" /> */}
    {/* <img src={glasses} className="w-1/4 sm:block md:hidden lg:hidden" /> */}
    <NavBar />
    <Socials />
  </div>
</header>
  );
};
