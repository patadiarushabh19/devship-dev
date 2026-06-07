/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Compass, BookOpen, Clock, Calendar, ArrowLeft, ArrowRight, CornerDownRight, CheckCircle2 } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { BlogPost, PageId } from '../types';

interface BlogProps {
  setCurrentTab: (tab: PageId) => void;
}

export default function Blog({ setCurrentTab }: BlogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Cost Optimization', 'Engineering Strategy', 'Cloud Migration'];

  // Filter posts based on search input and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const searchString = `${post.title} ${post.excerpt} ${post.category} ${post.content}`.toLowerCase();
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getExcerptMarkdown = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('###')) {
        return (
          <h4 key={index} className="text-sm font-sans font-bold text-[#F8F8FF] mt-6 mb-2 tracking-tight">
            {paragraph.replace('###', '').trim()}
          </h4>
        );
      }
      if (paragraph.startsWith('*')) {
        return (
          <ul key={index} className="list-disc pl-5 my-3 space-y-1.5 text-xs text-[#8888A0] leading-relaxed">
            {paragraph.split('\n').filter(line => line.trim().startsWith('*')).map((line, lIdx) => (
              <li key={lIdx}>{line.replace('*', '').trim()}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index} className="text-xs md:text-sm text-[#8888A0] leading-relaxed mb-4">
          {paragraph.trim()}
        </p>
      );
    });
  };

  return (
    <div className="space-y-16 pb-20">
      
      <AnimatePresence mode="wait">
        {!activePost ? (
          
          /* VIEW 1: INDEX POSTS LIST */
          <motion.div
            key="blog-index"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-12"
          >
            {/* Title */}
            <div className="text-center max-w-2xl mx-auto space-y-3 pt-12">
              <span className="text-xs font-mono text-[#4F6EF7] uppercase tracking-widest font-semibold block">High Signal Operational Log</span>
              <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#F8F8FF] tracking-tight">Technical DevOps Insights</h1>
              <p className="text-sm text-[#8888A0]">
                Zero fluff. No marketing summaries. Deep technical posts mapping math, server configs, and cloud optimization rules for engineered startups.
              </p>
            </div>

            {/* Filters & Search */}
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between border-b border-[#1E1E2E] pb-6">
              
              {/* Category Links */}
              <div className="flex flex-wrap items-center gap-1.5 order-2 md:order-1">
                {categories.map(cat => (
                  <button
                    id={`blog-cat-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-[11px] font-mono rounded transition-all ${
                      selectedCategory === cat 
                        ? 'bg-[#4F6EF7]/10 text-[#4F6EF7] border border-[#4F6EF7]/40 font-semibold' 
                        : 'bg-[#111118] text-[#8888A0] border border-[#1E1E2E] hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search form */}
              <div className="relative w-full md:w-80 order-1 md:order-2">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  id="blog-search-input"
                  type="text"
                  placeholder="Query configuration errors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#111118] border border-[#1E1E2E] rounded-md pl-10 pr-4 py-2.5 text-xs text-[#F8F8FF] focus:border-[#4F6EF7] outline-none placeholder-zinc-600"
                />
              </div>

            </div>

            {/* List entries */}
            <div className="max-w-5xl mx-auto px-4">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-20 border border-dashed border-[#1E1E2E] rounded-xl class font-mono text-[#8888A0]">
                  No matching log configurations found for "{searchQuery}".
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => {
                    return (
                      <article 
                        key={post.id}
                        onClick={() => {
                          setActivePost(post);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-[#111118] border border-[#1E1E2E] rounded-xl overflow-hidden hover:border-zinc-750 transition-all flex flex-col justify-between cursor-pointer group"
                      >
                        <div className="p-5 space-y-4">
                          <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block font-bold">
                            {post.category}
                          </span>
                          <div className="space-y-1">
                            <h2 className="text-sm font-sans font-bold text-[#F8F8FF] tracking-tight group-hover:text-indigo-400 transition-colors leading-snug">
                              {post.title}
                            </h2>
                            <p className="text-[11px] text-[#8888A0] leading-snug">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>

                        {/* Footer author card block */}
                        <div className="p-5 pt-0 mt-auto border-t border-[#1E1E2E] flex items-center justify-between pt-3 text-[10px] font-mono text-[#8888A0]">
                          <div className="flex items-center space-x-2">
                            <img 
                              src={post.author.avatar} 
                              alt={post.author.name} 
                              className="w-5.5 h-5.5 rounded-full bg-zinc-800 object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <span className="text-[9.5px] font-medium text-[#F8F8FF]">{post.author.name.split(' ')[0]}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3 text-[#4F6EF7]" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          
          /* VIEW 2: SINGLE ACTIVE POST READING */
          <motion.div
            key="blog-details"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-3xl mx-auto px-4 space-y-8"
          >
            {/* Back tracking CTA */}
            <button
              id="btn-back-to-blog"
              onClick={() => setActivePost(null)}
              className="text-xs font-mono text-[#8888A0] hover:text-[#F8F8FF] flex items-center space-x-1.5 pb-2 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#4F6EF7]" />
              <span>Back to log archives</span>
            </button>

            {/* Header info info */}
            <div className="space-y-4 border-b border-[#1E1E2E] pb-6">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block font-bold">
                {activePost.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-sans font-extrabold text-[#F8F8FF] leading-snug tracking-tight">
                {activePost.title}
              </h1>

              {/* Author alignment */}
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8888A0] pt-2">
                <div className="flex items-center space-x-3">
                  <img 
                    src={activePost.author.avatar} 
                    alt={activePost.author.name} 
                    className="w-8 h-8 rounded-full border border-[#1E1E2E] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-[#F8F8FF] font-sans font-semibold block leading-tight">{activePost.author.name}</span>
                    <span className="text-[10px] text-zinc-500 leading-none">{activePost.author.role}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activePost.publishedAt}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-[#4F6EF7]" />
                    <span>{activePost.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main parsed content block */}
            <div className="prose prose-invert max-w-none text-[#8888A0]">
              {getExcerptMarkdown(activePost.content)}
            </div>

            {/* Read Next / Back banner */}
            <div className="border-t border-[#1E1E2E] pt-8.5 mt-10 flex items-center justify-between">
              <button
                onClick={() => setActivePost(null)}
                className="bg-[#1E1E2E] hover:bg-[#252538] text-white text-xs font-semibold px-4 py-2 rounded-lg border border-[#1E1E2E] transition-colors cursor-pointer"
              >
                All Articles
              </button>

              <button
                onClick={() => {
                  const s = document.getElementById('scheduler-section');
                  if (s) {
                    s.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setCurrentTab('contact');
                  }
                }}
                className="bg-[#4F6EF7] hover:bg-[#4d69eb] text-white text-xs font-semibold px-5 py-2 rounded-lg inline-flex items-center space-x-1.5 shadow-md shadow-indigo-600/10 cursor-pointer"
              >
                <span>Request Cloud Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
