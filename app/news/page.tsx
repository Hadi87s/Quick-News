import ArticleForm from "@/components/article-form/ArticleForm";
import React from "react";

const Page = () => {
    return (
      <>
        <div className="w-full max-w-3xl mx-auto px-6 py-12 rounded-2xl bg-[#030303]/90 border border-white/[0.08] backdrop-blur-sm shadow-[0_8px_32px_0_rgba(99,102,241,0.08)]">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white/90 to-slate-200">
            Add News Page
          </h1>
          <p className="text-white/40 mb-8 text-lg">Please fill all the required news data</p>
          <ArticleForm/>
        </div>
      </>
  );
};

export default Page;