"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./nav-link/NavLink";
import { links } from "@/common/data";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex gap-x-4">
      {links.map((link, index) => (
        <NavLink path={link.path} key={index}>
          {link.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default DesktopNav;
