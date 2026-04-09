const skillCategories = [
  {
    name: "Frontend",
    color: "bg-blue-400",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    color: "bg-yellow-400",
    skills: ["Node.js", "Python", "PostgreSQL", "GraphQL"],
  },
  {
    name: "DevOps",
    color: "bg-green-400",
    skills: ["Docker", "AWS", "CI/CD", "Linux"],
  },
  {
    name: "Design",
    color: "bg-pink-400",
    skills: ["Figma", "Framer", "UI/UX", "Prototyping"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="text-center">
          <h2 className="text-5xl font-black tracking-tight text-blue-950 uppercase">
            Tech Stack
          </h2>
          <p className="mt-2 text-base font-medium text-blue-950">
            Tools I use to build things
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-xl border-4 border-blue-950 bg-white p-6 shadow-[6px_6px_0px_0px_#0a0a0a]"
            >
              <div
                className={`inline-block rounded-lg ${category.color} border-2 border-blue-950 px-4 py-1.5 text-sm font-black uppercase text-blue-950`}
              >
                {category.name}
              </div>

              <ul className="mt-6 space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 font-bold text-blue-950"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-950 bg-yellow-300 text-xs">
                      ✓
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
