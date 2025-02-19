import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/news-list/sports/us">Sports US</Link>
        </li>
        <li>
          <Link href="/news-list/politics/us">Politics US</Link>
        </li>
        <li>
          <Link href="/news-list/crime/us">Crime US</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
