import CatAside from "@/components/category-aside/CatAside";
import React from "react";

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="block md:flex gap-x-4 p-2 justify-evenly">
      <CatAside />
      <div className="basis-[70%]">{children}</div>
    </div>
  );
}
