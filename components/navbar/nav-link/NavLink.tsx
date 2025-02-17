import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface IProps {
  path: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavLink = (props: IProps) => {
  const path = usePathname();
  return (
    <Link
      className={` ${props.mobile ? "p-4 w-full border-b-2 " : ""}${
        path == props.path
          ? "text-zinc-50 border-zinc-50"
          : "text-zinc-500 border-zinc-500"
      } transition-colors duration-150 hover:text-zinc-50 hover:border-zinc-50`}
      href={props.path}
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
