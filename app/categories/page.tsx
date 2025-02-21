import React from "react";
import Link from "next/link";
import CatLink from "@/components/category-link/CatLink";

const links = [
  {
    title: "Sports US",
    href: "/news-list/sports/us",
  },
  {
    title: "Politics US",
    href: "/news-list/politics/us",
  },
  {
    title: "Crime US",
    href: "/news-list/crime/us",
  },
];

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-[85vh]">
      <ul className="flex gap-x-5 p-2 text-sm md:text-xl lg:text-2xl">
        {links.map((link, index) => (
          <CatLink key={index} href={link.href} title={link.title} />
        ))}
      </ul>
    </div>
  );
};

export default Page;
