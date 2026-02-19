import Contact from "@/components/Contact";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PageHero from "@/components/PageHero";
import Blogs from "@/components/Blogs";

export type PostMeta = {
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
      <section className="max-w-8xl mx-auto px-4 py-20">
        <PageHero
          heading="Blog"
          para="Latest updates, tips, and insights from Tax Plus Accountants."
          img="https://taxassistassets.ams3.cdn.digitaloceanspaces.com/client/2020/PageMenuDefault.jpg"
        />
        <Blogs posts={posts} />
        <Contact />
    </section>
  );
}
