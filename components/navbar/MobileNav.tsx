import Link from "next/link";
import React from "react";
import NavLink from "./nav-link/NavLink";

interface IProps {
  isMenuVisible: boolean;
}

const MobileNav = (props: IProps) => {
  return (
    <nav
      className={`${
        props.isMenuVisible
          ? "translate-x-0 opacity-1"
          : "translate-x-full opacity-0"
      } transition duration-100 md:hidden flex flex-col gap-x-4 fixed top-0 right-0 h-[100vh] w-[375px] bg-zinc-900/95 text-white p-4 pt-10 z-20 justify-center items-center gap-y-10`}
    >
      <NavLink path="/" mobile={true}>
        Home
      </NavLink>
      <NavLink path="/news" mobile={true}>
        Add News
      </NavLink>
      <NavLink path="/admin" mobile={true}>
        Admin
      </NavLink>
      <NavLink path="/login" mobile={true}>
        Login
      </NavLink>
    </nav>
  );
};

export default MobileNav;
