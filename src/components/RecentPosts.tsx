import Link from "next/link";

export default function RecentPosts({
  recentPosts,
}: {
  recentPosts: { title: string; date: string; slug: string }[];
}) {
  return (
    <aside className="hidden lg:block w-80 shrink-0">
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
        <ul className="space-y-3">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="text-slate-800 hover:text-amber-600 font-medium"
              >
                {post.title}
              </Link>
              <div className="text-xs text-slate-500">
                {new Date(post.date).toLocaleDateString()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
