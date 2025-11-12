import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Zytronium',
  description: 'Learn more about Zytronium, a passionate developer from Oklahoma.',
};

export default function AboutPage() {
  const skills = [
    'Python',
    'JavaScript',
    'TypeScript',
    'Kotlin',
    'C',
    'Rust',
    'Bash',
    'SQL',
    'HTML',
    'CSS',
    'TailwindCSS',
    'React',
    'Next.js',
    'Express.js',
    'Flask',
    'Firebase',
    'Discord.py',
    'CD/CI'
  ];

  return (
    <div className="pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#0a061d]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#27234c] mt-8">
          <h1 className="text-4xl font-bold mb-6">About Zytronium</h1>

          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="relative w-48 h-48 mx-auto md:mx-0 flex-shrink-0">
              <Image
                src="/images/zytronium_dev_logo_rounded.png"
                alt="Zytronium"
                fill
                className="rounded-[5rem] border-2 border-[#27234c]"
                unoptimized
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#e4be32] mb-4">Developer | Aerospace Enthusiast | Gamer</h2>
              <p className="text-gray-300 mb-4">
                I&apos;m a passionate developer from Oklahoma with a deep love for programming, aviation, space exploration,
                and gaming. My journey in software development started with a little bit of Roblox studio, which led me to
                learn mobile app development, and has since expanded into web development, Discord bots, and various
                experimental projects.
              </p>
              <p className="text-gray-300">
                I believe in learning by doing, which is why you&apos;ll find a diverse range of projects in my portfolio -
                from Android games to web applications, from serious tools to humorous experiments. Each project teaches
                me something new and helps me grow as a developer.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#e4be32] mb-4">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {skills.map((skill) => (
              <div key={skill} className="bg-[#12102d] px-4 py-2 rounded-lg border border-[#27234c] text-center">
                {skill}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#e4be32] mb-4">Interests</h2>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>Creating games and interactive experiences</li>
            <li>Space and astronomy</li>
            <li>Aviation and drones</li>
            <li>Full stack web development</li>
            <li>Science-fiction</li>
            <li>Science reality (me like science yes yes)</li>
            <li>New technology</li>
            <li>Building useful tools that solve real problems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}