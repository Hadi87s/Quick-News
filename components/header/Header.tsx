"use client";
import React, { useEffect, useState } from "react";
import DesktopNav from "../navbar/DesktopNav";
import { AlignJustify, X } from "lucide-react";
import MobileNav from "../navbar/MobileNav";

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    window.onclick = (e) => {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setMenuVisible(false);
    };
  }),
    [];
  return (
    <div className="flex justify-between items-center p-4 fixed top-2 w-[94vw] mx-auto z-30 bg-zinc-900/50 backdrop-blur-sm rounded-2xl ml-[3vw] border-2 border-zinc-50 shadow-md shadow-white/10">
      <h1>Quick News</h1>
      <DesktopNav />
      <AlignJustify
        onClick={(e) => {
          e.stopPropagation();
          setMenuVisible(!isMenuVisible);
        }}
        className={`${
          !isMenuVisible ? "block" : "hidden"
        } md:hidden z-30 cursor-pointer`}
      />
      <X
        className={`${
          isMenuVisible ? "block" : "hidden"
        } md:hidden z-30 cursor-pointer`}
      />
      <MobileNav isMenuVisible={isMenuVisible} />
    </div>
  );
};

export default Header;
