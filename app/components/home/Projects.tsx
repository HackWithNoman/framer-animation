const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack online store with payments, inventory, and analytics dashboard.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative workspace with drag-and-drop boards and team features.",
    tags: ["React", "Node.js", "Socket.io"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio with smooth animations and dark mode support.",
    tags: ["Tailwind CSS", "Framer"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="text-center">
          <h2 className="text-5xl font-black uppercase text-blue-950">
            Featured Projects
          </h2>
          <p className="mt-2 font-bold text-blue-950">
            Things I've built recently
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group rounded-xl border-4 border-blue-950 bg-white p-6 shadow-[6px_6px_0px_0px_#0a0a0a] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#0a0a0a]"
            >
              <div className="flex h-40 items-center justify-center rounded-lg bg-stone-100 border-2 border-blue-950">
                <span className="text-4xl">🚀</span>
              </div>

              <h3 className="mt-4 text-xl font-black uppercase text-blue-950">
                {project.title}
              </h3>
              <p className="mt-2 font-medium text-blue-950/70">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border-2 border-blue-950 bg-yellow-300 px-3 py-1 text-xs font-black uppercase text-blue-950"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded-lg border-4 border-blue-950 bg-white px-8 py-4 text-sm font-black uppercase text-blue-950 shadow-[4px_4px_0px_0px_#0a0a0a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a]"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
