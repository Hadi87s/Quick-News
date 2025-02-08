import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/news">Add News</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
