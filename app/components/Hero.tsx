export function Hero() {
  return (
    <section className="bg-stone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="max-w-2xl">
          <div className="inline-block rounded-xl border-4 border-blue-950 bg-yellow-300 px-6 py-3 shadow-[6px_6px_0px_0px_#0a0a0a]">
            <span className="text-sm font-black uppercase text-blue-950">
              Full-Stack Developer
            </span>
          </div>

          <h1 className="mt-8 text-6xl font-black tracking-tight uppercase text-blue-950 sm:text-7xl">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-yellow-300">
              Developer
            </span>
          </h1>

          <p className="mt-6 text-lg font-medium text-blue-950">
            I build exceptional digital experiences with clean, maintainable code.
            Focused on performance and user-centric design.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg border-4 border-blue-950 bg-white px-6 py-3 text-sm font-black uppercase text-blue-950 shadow-[4px_4px_0px_0px_#0a0a0a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border-4 border-blue-950 bg-pink-400 px-6 py-3 text-sm font-black uppercase text-blue-950 shadow-[4px_4px_0px_0px_#0a0a0a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a]"
            >
              Contact Me →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
