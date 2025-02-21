import CatAside from "@/components/category-aside/CatAside";
import React from "react";

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-x-3">
      <CatAside/>
      <div className="basis-[70%] ">{children}</div>
    </div>
  );
}
