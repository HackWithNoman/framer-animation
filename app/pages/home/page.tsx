import { About } from "~/components/home/About";
import { Contact } from "~/components/home/Contact";
import { Hero } from "~/components/home/Hero";
import { Projects } from "~/components/home/Projects";
import { Skills } from "~/components/home/Skills";

export function Welcome() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
