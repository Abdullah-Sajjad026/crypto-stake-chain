"use client";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import ASSETS from "../assets";

const Header = () => {
  // A header that becomes fixed to the top of the screen when the user scrolls past it.
  // Transparent glassed effect with a shadow.
  return (
    <header
      className="fixed top-0 left-0 right-0 z-10 shadow-md py-2 
    bg-white bg-opacity-40 backdrop-filter backdrop-blur-md backdrop-saturate-150 transition-all duration-300 ease-in-out"
    >
      <div className="container flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <Image src={ASSETS.logo1x} alt="Logo" width={50} height={50} />
          <span>
            100K <br /> Stake
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="hidden lg:inline">
            <NavBar />
          </div>
          <span className="lg:hidden">
            <MenuIcon className="cursor-pointer hover:scale-105 transition-transform ease-in duration-75" />
          </span>
          <Button>Connect</Button>
        </div>
      </div>
    </header>
  );
};

const NavBar = () => {
  // home, pools, supporting networks & staking assets, team, referral, analytics, swap, audit, faq

  // A nav component using tailwind classes, nextjs link component with above links in array looping
  // that shows links in flex row while above lg endpoint and in column with consistent spacing on below screens

  return <nav></nav>;
};

export default Header;
