import { useState } from "react";
import { Link } from "react-router";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-4 border-blue-950 bg-white">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="rounded-lg border-2 border-blue-950 bg-yellow-300 px-4 py-2 text-lg font-black uppercase text-blue-950 shadow-[3px_3px_0px_0px_#0a0a0a]"
          >
            Dev
          </Link>

          <div className="hidden md:flex md:items-center md:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-lg border-2 border-transparent px-4 py-2 text-sm font-bold text-blue-950 transition-all hover:border-blue-950 hover:bg-stone-100"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="ml-4 rounded-lg border-4 border-blue-950 bg-pink-400 px-4 py-2 text-sm font-black uppercase text-blue-950 shadow-[3px_3px_0px_0px_#0a0a0a]"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border-2 border-blue-950 bg-stone-100 p-2 md:hidden"
          >
            <svg
              className="h-6 w-6 text-blue-950"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t-4 border-blue-950 bg-stone-100 p-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg border-2 border-transparent px-4 py-3 text-base font-bold text-blue-950 hover:border-blue-950 hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-lg border-4 border-blue-950 bg-pink-400 px-4 py-3 text-center text-base font-black uppercase text-blue-950"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
