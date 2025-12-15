import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProjectCarousel from '@/components/ProjectCarousel';
import { projects } from '@/lib/projects';
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16 mt-8">
          <h1 className="text-5xl font-bold mb-4">
            Hello, <span className="line-through">World</span> Universe!
          </h1>
        </header>

        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Zytronium</h2>
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image
              src="/images/zytronium_dev_logo_rounded.png"
              alt="Zytronium Profile Picture"
              fill
              className="rounded-[5rem] border-2 border-[#27234c]"
              unoptimized
            />
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            Welcome to my personal developer website! I&apos;m Zytronium, a
            passionate developer from Oklahoma who loves
            programming, space, and gaming. This site serves as a home base for my
            projects, experiments, and
            developer identity.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            Learn More About Me
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <ProjectCarousel projects={projects} />
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-[#12102d] hover:bg-[#1a1640] border border-[#27234c] rounded-lg transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </section>

        <ContactSection />
      </div>
    </div>
  );
}
