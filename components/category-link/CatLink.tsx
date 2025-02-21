import Link from "next/link";
import React from "react";

interface IProps {
  href: string;
  title: string;
}
const CatLink = (props: IProps) => {
  return (
    <li className="p-4 bg-zinc-600 rounded-2xl hover:bg-zinc-400 hover:text-zinc-800 cursor-pointer transition duration-200">
      <Link href={props.href}>{props.title}</Link>
    </li>
  );
};

export default CatLink;
