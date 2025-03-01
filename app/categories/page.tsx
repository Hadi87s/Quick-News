import React from "react";
import CatLink from "@/components/category-link/CatLink";

const links = [
  {
    title: "Technology",
    href: "/news-list/technology/us",
  },
  {
    title: "Politics",
    href: "/news-list/politics/us",
  },
  {
    title: "Sports",
    href: "/news-list/sports/us",
  },
  {
    title: "Business",
    href: "/news-list/business/us",
  },
  {
    title: "Space",
    href: "/news-list/Space/us",
  },
  {
    title: "History",
    href: "/news-list/History/us",
  },
  {
    title: "Environment",
    href: "/news-list/Environment/us",
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
