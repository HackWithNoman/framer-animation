const posts = [
  {
    title: "Building Modern Web Apps with Next.js 14",
    excerpt: "A deep dive into server components, streaming, and the new App Router patterns that are changing how we build React apps.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    tags: ["Next.js", "React"],
  },
  {
    title: "Why I Switched from Tailwind to CSS Modules",
    excerpt: "After two years with Tailwind, here's why I decided to go back to CSS Modules and what I learned along the way.",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    tags: ["CSS", "Opinion"],
  },
  {
    title: "The Complete Guide to TypeScript Generics",
    excerpt: "Master generics from basics to advanced patterns. Learn how to write reusable, type-safe code that scales.",
    date: "Dec 5, 2024",
    readTime: "12 min read",
    tags: ["TypeScript", "Tutorial"],
  },
  {
    title: "My VS Code Setup for Maximum Productivity",
    excerpt: "Extensions, themes, keybindings, and settings that help me ship code faster every day.",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    tags: ["Tools", "Productivity"],
  },
];

export function Blog() {
  return (
    <section className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="text-center">
          <div className="inline-block rounded-xl border-4 border-blue-950 bg-yellow-300 px-4 py-2 shadow-[4px_4px_0px_0px_#0a0a0a]">
            <span className="text-lg font-black uppercase text-blue-950">Blog</span>
          </div>

          <h1 className="mt-6 text-5xl font-black uppercase text-blue-950">
            Latest Articles
          </h1>
          <p className="mt-2 font-bold text-blue-950">
            Thoughts on web development and technology
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {posts.map((post, index) => (
            <a
              key={post.title}
              href="#"
              className={`group rounded-xl border-4 border-blue-950 bg-white p-6 shadow-[6px_6px_0px_0px_#0a0a0a] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#0a0a0a] ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border-2 border-blue-950 bg-yellow-300 px-3 py-1 text-xs font-black uppercase text-blue-950"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-sm font-bold text-blue-950/60">
                  {post.date} · {post.readTime}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-black uppercase text-blue-950 group-hover:text-indigo-600">
                {post.title}
              </h2>

              <p className="mt-2 font-medium text-blue-950/80">
                {post.excerpt}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 font-black uppercase text-blue-950">
                Read More
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded-lg border-4 border-blue-950 bg-white px-8 py-4 text-sm font-black uppercase text-blue-950 shadow-[4px_4px_0px_0px_#0a0a0a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a]"
          >
            View All Posts →
          </a>
        </div>
      </div>
    </section>
  );
}
