import Link from "next/link";
import React from "react";

const CatAside = () => {
  return (
    <aside className="basis-[30%] h-auto max-w-[300px] bg-zinc-800 text-zinc-100 p-4 rounded-lg shadow-xl">
      {/* Related News */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold border-b border-zinc-700 pb-2 mb-3">
          Related News
        </h2>
        <ul className="space-y-2.5">
          <li>
            <Link
              href="/news/article-1"
              className="hover:text-blue-300 transition-colors"
            >
              📰 High School Basketball Final Four Announced
            </Link>
          </li>
          <li>
            <Link
              href="/news/article-2"
              className="hover:text-blue-300 transition-colors"
            >
              🏈 Indiana Football: Roman Hemby Transfer
            </Link>
          </li>
        </ul>
      </div>

      {/* Trending News */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold border-b border-zinc-700 pb-2 mb-3">
          🔥 Trending News
        </h2>
        <ul className="space-y-2.5">
          <li>
            <Link
              href="/news/trending-1"
              className="hover:text-blue-300 transition-colors"
            >
              ⚡ SPHL: Quad City Storm This Week
            </Link>
          </li>
          <li>
            <Link
              href="/news/trending-2"
              className="hover:text-blue-300 transition-colors"
            >
              📊 Afghanistan vs South Africa Scorecard
            </Link>
          </li>
        </ul>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold border-b border-zinc-700 pb-2 mb-3">
          📂 Categories
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/categories/sports"
            className="px-3 py-1 bg-zinc-700 rounded-md hover:bg-blue-500 transition-colors text-sm"
          >
            Sports
          </Link>
          <Link
            href="/categories/politics"
            className="px-3 py-1 bg-zinc-700 rounded-md hover:bg-blue-500 transition-colors text-sm"
          >
            Politics
          </Link>
          <Link
            href="/categories/crime"
            className="px-3 py-1 bg-zinc-700 rounded-md hover:bg-blue-500 transition-colors text-sm"
          >
            Crime
          </Link>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold border-b border-zinc-700 pb-2 mb-3">
          📩 Stay Updated
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 rounded-md bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="mt-3 w-full bg-blue-600 hover:bg-blue-500 p-2 rounded-md transition-colors font-medium">
          Subscribe
        </button>
      </div>

      {/* Social Media */}
      <div>
        <h2 className="text-xl font-semibold border-b border-zinc-700 pb-2 mb-3">
          🔗 Follow Us
        </h2>
        <div className="flex gap-4">
          <Link
            href="https://twitter.com"
            target="_blank"
            className="hover:text-blue-300 transition-colors"
          >
            Twitter
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            className="hover:text-blue-300 transition-colors"
          >
            Facebook
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="hover:text-blue-300 transition-colors"
          >
            Instagram
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default CatAside;
