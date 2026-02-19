"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type { PostMeta } from "@/app/blog/page";

interface BlogsProps {
    posts: PostMeta[]
}

export default function Blogs({posts}: BlogsProps){
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=""
        >
          <div className="max-w-8xl mx-auto py-12 sm:py-16">
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-white border border-slate-200 rounded-xl p-6 hover:bg-amber-50 transition-colors"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm mb-1">
                    {new Date(post.date).toISOString().slice(0, 10)}
                  </p>
                  <span className="text-amber-600 font-medium">Read more →</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>
    )
}