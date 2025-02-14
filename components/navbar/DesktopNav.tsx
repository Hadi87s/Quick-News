"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./nav-link/NavLink";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex gap-x-4">
      <NavLink path="/">Home</NavLink>
      <NavLink path="/news">Add News</NavLink>
      <NavLink path="/admin">Admin</NavLink>
      <NavLink path="/login">Login</NavLink>
    </nav>
  );
};

export default DesktopNav;
