import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 sm:px-12 lg:px-20 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header: About Me */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-poppins">
            About Me
          </h2>
          <div className="w-full h-[1px] bg-[#243a60]"></div>
        </div>

        {/* Featured Callout Card directly matching Image 1's dark card with border accent */}
        <div className="relative rounded-xl bg-[#12233f]/90 border border-[#243a60] p-6 sm:p-8 shadow-xl overflow-hidden backdrop-blur-sm">
          {/* Subtle left accent bar like in Image 1 */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#334e77] rounded-l-xl"></div>

          <ul className="space-y-3 pl-2 sm:pl-4 text-base sm:text-lg text-[#cbd5e1] leading-relaxed font-poppins">
            <li className="flex items-start gap-3">
              <span className="text-[#ff4b5c] mt-1 font-bold select-none text-base">▹</span>
              <span>
                Backend Software Engineer specializing in <strong className="text-white font-medium">DSA</strong>, <strong className="text-white font-medium">high-concurrency systems</strong>, and <strong className="text-white font-medium">high-throughput services</strong>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ff4b5c] mt-1 font-bold select-none text-base">▹</span>
              <span>
                Building robust APIs and distributed systems with{' '}
                <strong className="text-white font-semibold underline decoration-[#ff4b5c]/70 underline-offset-4">
                  GoLang, Python, and JavaScript
                </strong>
                , with a strong focus on algorithms, advanced relational databases, system design, and asynchronous programming.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ff4b5c] mt-1 font-bold select-none text-base">▹</span>
              <span>
                Focused on clean, strongly typed code and reliable, production-grade engineering.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
