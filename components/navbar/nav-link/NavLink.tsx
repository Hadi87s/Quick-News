import { log } from "console";
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
  console.log(path);
  return (
    <Link
      className={` ${props.mobile ? "p-4 w-full border-b-2 " : ""}${
        path == props.path
          ? "text-gray-50 border-gray-50"
          : "text-gray-500 border-gray-500"
      }`}
      href={props.path}
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
