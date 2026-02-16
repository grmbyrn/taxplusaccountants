import Contact from "@/components/Contact";
import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

type PostMeta = {
  title: string;
  date: string;
  slug: string;
};

function getPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDir);
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const { data } = matter(fs.readFileSync(filePath, "utf8"));
      return {
        title: data.title,
        date: data.date,
        slug: data.slug || file.replace(/\.(md|mdx)$/, ""),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function Blog() {
  const posts = getPosts();
  return (
    <main>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Blog
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Latest updates, tips, and insights from Tax Plus Accountants.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
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
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <span className="text-amber-600 font-medium">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
        <Contact />
      </section>
    </main>
  );
}
