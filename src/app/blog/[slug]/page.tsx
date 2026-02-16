// import dynamic from 'next/dynamic';
import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import RecentPosts from "@/components/RecentPosts";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));
  // Get post meta for all posts
  const posts = files
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const { data } = matter(fs.readFileSync(filePath, "utf8"));
      return {
        title: data.title,
        date: data.date,
        slug: data.slug || file.replace(/\.md$/, ""),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const slugs = posts.map((p) => p.slug);
  const idx = slugs.indexOf(slug);
  if (idx === -1) notFound();
  const prev = idx > 0 ? slugs[idx - 1] : null;
  const next = idx < slugs.length - 1 ? slugs[idx + 1] : null;

  // Read and parse the markdown file
  const postPath = path.join(postsDir, `${slug}.md`);
  let source;
  try {
    source = fs.readFileSync(postPath, "utf8");
  } catch {
    notFound();
  }
  const { data, content } = matter(source);
  const html = marked(content);

  // Get five most recent posts (excluding current)
  const recentPosts = posts.filter((p) => p.slug !== slug).slice(0, 5);

  return (
    <main className="max-w-8xl mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
          <p className="text-slate-500 mb-8">
            {data.date ? new Date(data.date).toLocaleDateString() : null}
          </p>
          <article
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="flex justify-between border-t pt-8 mt-8">
            {prev ? (
              <Link
                href={`/blog/${prev}`}
                className="text-amber-600 hover:underline"
              >
                ← Previous Post
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/blog/${next}`}
                className="text-amber-600 hover:underline"
              >
                Next Post →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
        <RecentPosts recentPosts={recentPosts} />
      </div>
    </main>
  );
}
