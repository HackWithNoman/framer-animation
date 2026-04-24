import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="cta" className="bg-blue-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black tracking-tight uppercase text-yellow-300 sm:text-5xl"
          >
            Let's Build Something Great
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg font-medium text-stone-100"
          >
            Ready to bring your ideas to life? I'm always open to new opportunities,
            collaborations, and exciting projects. Let's create something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="rounded-lg border-4 border-yellow-300 bg-yellow-300 px-8 py-4 text-sm font-black uppercase text-blue-950 shadow-[6px_6px_0px_0px_#0a0a0a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#0a0a0a]"
            >
              Start a Project
            </a>
            <a
              href="#"
              className="rounded-lg border-4 border-stone-100 bg-transparent px-8 py-4 text-sm font-black uppercase text-stone-100 shadow-[6px_6px_0px_0px_#0a0a0a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#0a0a0a]"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}