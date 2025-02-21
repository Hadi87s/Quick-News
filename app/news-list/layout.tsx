import React from "react";

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-x-3">
      <aside className="basis-[30%] h-auto max-w-[300px] bg-white text-black p-4">
        in here will be other links to other news, and I will implement them
        here later on.
      </aside>
      <div className="basis-[70%] ">{children}</div>
    </div>
  );
}
