"use client";
import OptionGroup from '@/app/news/optionGroup'
import { addArticle } from '@/controllers/news-actions';
import React, { useActionState } from 'react'

const ArticleForm = () => {
    const [state, ActionForm, pending] = useActionState(addArticle, {error: []});
  return (
    <form className="space-y-6" action={ActionForm}>
    <div className="space-y-2">
      <label htmlFor="a-title" className="block text-white/70 text-sm font-medium">
        News Title
      </label>
      <input
        id="a-title"
        type="text"
        maxLength={300}
        name="title"
        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.12] focus:border-indigo-500/50 rounded-lg text-white placeholder-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/20"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="a-image" className="block text-white/70 text-sm font-medium">
        News Image URL
      </label>
      <input
        id="a-image"
        type="text"
        name="image"
        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.12] focus:border-rose-500/50 rounded-lg text-white placeholder-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-rose-500/20"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="a-summary" className="block text-white/70 text-sm font-medium">
        News Summary
      </label>
      <input
        id="a-summary"
        type="text"
        name="summary"
        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.12] focus:border-violet-500/50 rounded-lg text-white placeholder-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/20"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="a-content" className="block text-white/70 text-sm font-medium">
        News Content
      </label>
      <textarea
        id="a-content"
        rows={4}
        name="content"
        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.12] focus:border-cyan-500/50 rounded-lg text-white placeholder-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-500/20 resize-y"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="a-date" className="block text-white/70 text-sm font-medium">
        News Date
      </label>
      <input
        id="a-date"
        type="date"
        name="date"
        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.12] focus:border-amber-500/50 rounded-lg text-white placeholder-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-amber-500/20"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="a-category" className="block text-white/70 text-sm font-medium">
        News Category
      </label>
      <select
        id="a-category"
        name="category"
        defaultValue="global"
        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.12] focus:border-slate-400/50 rounded-lg text-white outline-none transition-all duration-200 focus:ring-2 focus:ring-slate-500/20 appearance-none pr-10"
      >
        <OptionGroup group="Technology"/>
        <OptionGroup group="Politics"/>
        <OptionGroup group="Sports"/>
        <OptionGroup group="Business"/>
        <OptionGroup group="Space"/>
        <OptionGroup group="History"/>
        <OptionGroup group="Environment"/>
        
      </select>
    </div>
    <div className="hidden">
      <input type="hidden" name="author" value="Sarah Miller" />
      <input type="hidden" name="author_email" value="sarahmiller@example.com" />
    </div>
    <div className="pt-4">
      <button
        type="submit"
        disabled={pending}
        className="transition-all duration-300 w-full md:w-auto px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white font-medium rounded-lg  transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_20px_rgba(15,23,42,0.3)] hover:shadow-[0_6px_24px_rgba(15,23,42,0.4)]"
      >
        {pending? "Submitting..." : "Submit News"}
      </button>
    </div>
  </form>
  )
}

export default ArticleForm
