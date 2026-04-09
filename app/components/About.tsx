export function About() {
  return (
    <section id="about" className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative z-10 flex justify-center">
              <div className="h-80 w-80 rounded-2xl border-4 border-blue-950 bg-yellow-300 shadow-[8px_8px_0px_0px_#0a0a0a]">
                <div className="flex h-full items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 z-0 rounded-2xl border-4 border-blue-950 bg-pink-400 p-4 shadow-[6px_6px_0px_0px_#0a0a0a]">
              <span className="text-2xl font-black uppercase text-blue-950">5+ Years</span>
              <br />
              <span className="text-sm font-bold text-blue-950">Experience</span>
            </div>
          </div>

          <div>
            <div className="inline-block rounded-xl border-4 border-blue-950 bg-yellow-300 px-4 py-2 shadow-[4px_4px_0px_0px_#0a0a0a]">
              <span className="text-lg font-black uppercase text-blue-950">About Me</span>
            </div>

            <h2 className="mt-6 text-4xl font-black uppercase text-blue-950 sm:text-5xl">
              Passionate About Building Great Products
            </h2>

            <div className="mt-6 space-y-4">
              <p className="font-medium text-blue-950">
                I'm a full-stack developer with 5+ years of experience building web applications. 
                I specialize in React, Node.js, and modern web technologies.
              </p>
              <p className="font-medium text-blue-950">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source, or sharing knowledge through technical writing.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Projects", value: "50+" },
                { label: "Clients", value: "30+" },
                { label: "Coffee", value: "∞" },
                { label: "Bugs Fixed", value: "1000+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border-4 border-blue-950 bg-white p-4 text-center shadow-[4px_4px_0px_0px_#0a0a0a]"
                >
                  <div className="text-2xl font-black text-blue-950">{stat.value}</div>
                  <div className="text-xs font-bold uppercase text-blue-950/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
