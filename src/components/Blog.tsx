import React from "react";

const Blog = () => (
  <section className="bg-gray-50 py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
          Take a look at our news and articles
        </h2>
        <button className="text-blue-600 font-semibold hover:text-blue-700 hidden md:flex items-center gap-2">
          Browse all posts
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <a href="#" className="group block bg-white rounded-xl overflow-hidden hover:shadow-xl transition">
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 aspect-[4/3]"></div>
          <div className="p-6">
            <div className="flex gap-3 text-sm text-gray-500 mb-3">
              <span>Business</span>
              <span>•</span>
              <span>Feb 8, 2024</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
              Introduction to accounting: basics for beginners
            </h3>
          </div>
        </a>
        <a href="#" className="group block bg-white rounded-xl overflow-hidden hover:shadow-xl transition">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 aspect-[4/3]"></div>
          <div className="p-6">
            <div className="flex gap-3 text-sm text-gray-500 mb-3">
              <span>Finance</span>
              <span>•</span>
              <span>Feb 8, 2024</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
              Updates to accounting standards for 2025
            </h3>
          </div>
        </a>
        <a href="#" className="group block bg-white rounded-xl overflow-hidden hover:shadow-xl transition">
          <div className="bg-gradient-to-br from-green-100 to-teal-100 aspect-[4/3]"></div>
          <div className="p-6">
            <div className="flex gap-3 text-sm text-gray-500 mb-3">
              <span>Management</span>
              <span>•</span>
              <span>Feb 8, 2024</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
              How to optimize your company&apos;s tax management
            </h3>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default Blog;
