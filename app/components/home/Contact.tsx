import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-block rounded-xl border-4 border-blue-950 bg-yellow-300 px-4 py-2 shadow-[4px_4px_0px_0px_#0a0a0a]">
              <span className="text-lg font-black uppercase text-blue-950">Get In Touch</span>
            </div>

            <h2 className="mt-6 text-4xl font-black uppercase text-blue-950 sm:text-5xl">
              Let's Work Together
            </h2>

            <p className="mt-4 font-medium text-blue-950">
              Have a project in mind? I'd love to hear about it. Send me a message 
              and let's create something amazing together.
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-black uppercase text-blue-950">Follow Me</h3>
              <div className="mt-4 flex gap-4">
                <a
                  href="#"
                  className="flex h-14 w-14 items-center justify-center rounded-xl border-4 border-blue-950 bg-white shadow-[4px_4px_0px_0px_#0a0a0a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a]"
                >
                  <svg className="h-6 w-6 text-blue-950" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-14 w-14 items-center justify-center rounded-xl border-4 border-blue-950 bg-white shadow-[4px_4px_0px_0px_#0a0a0a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a]"
                >
                  <svg className="h-6 w-6 text-blue-950" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-14 w-14 items-center justify-center rounded-xl border-4 border-blue-950 bg-white shadow-[4px_4px_0px_0px_#0a0a0a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a]"
                >
                  <svg className="h-6 w-6 text-blue-950" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block font-bold uppercase text-blue-950">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border-4 border-blue-950 bg-white px-4 py-3 font-medium text-blue-950 placeholder-blue-950/50 shadow-[4px_4px_0px_0px_#0a0a0a] focus:outline-none focus:ring-0"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-bold uppercase text-blue-950">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border-4 border-blue-950 bg-white px-4 py-3 font-medium text-blue-950 placeholder-blue-950/50 shadow-[4px_4px_0px_0px_#0a0a0a] focus:outline-none focus:ring-0"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-bold uppercase text-blue-950">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full rounded-xl border-4 border-blue-950 bg-white px-4 py-3 font-medium text-blue-950 placeholder-blue-950/50 shadow-[4px_4px_0px_0px_#0a0a0a] focus:outline-none focus:ring-0 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl border-4 border-blue-950 bg-pink-400 px-8 py-4 text-lg font-black uppercase text-blue-950 shadow-[4px_4px_0px_0px_#0a0a0a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
