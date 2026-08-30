import React, { Fragment } from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import AboutSkills from '@/components/AboutSkills';

export const metadata: Metadata = {
  title: 'About - Zytronium',
  description: 'Learn more about Zytronium, a web developer and IT network technician from Oklahoma.',
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <div className="content-wrap max-w-4xl">
        <div className="reference-panel p-8 mt-8">
          <p className="eyebrow">About / The person behind the projects</p>
          <h1 className="text-4xl font-bold mb-6 mt-2">About Zytronium</h1>

          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="relative w-48 h-48 mx-auto md:mx-0 shrink-0">
              <Image
                src="/images/zytronium_dev_logo_rounded.png"
                alt="Zytronium"
                fill
                className="rounded-[5.5rem] border-2 border-[#27234c]"
                unoptimized
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary mb-4">Developer | Aerospace Enthusiast | Gamer</h2>
              <p className="text-gray-300 mb-4">
                I&apos;m a passionate developer from Oklahoma with a deep love for programming, networking, aviation,
                space exploration, and gaming. My journey in software development started with a little bit of Roblox
                studio, which led me to learn mobile app development, and has since expanded into web development,
                Discord bots, and various experimental projects.
              </p>
              <p className="text-gray-300 mb-4">
                When AI took over the job market for programmers and I was unable to find a job, I decided to dive into
                the IT networking world. I&apos;m now taking a class in Enterprise Networking Technologies and will
                graduate in December 2026.
              </p>
              <p className="text-gray-300 mb-4">
                On the side, I&apos;ve also gotten my FAA part 107 remote pilot certification, which means I&apos;m
                legally allowed to fly drones commercially. While I haven&apos;t been able to get any jobs doing this, I
                have been flying remote-controlled model airplanes for fun. I also looked into becoming a real pilot,
                but that didn&apos;t work out due to a medical condition I discovered I have.
              </p>
              <p className="text-gray-300">
                I believe in learning by doing, which is why you&apos;ll find a diverse range of projects in my portfolio -
                from Android games to web applications, from serious tools to humorous experiments. Each project teaches
                me something new and helps me grow as a developer.
              </p>
            </div>
          </div>

          <AboutSkills />

          <h2 className="text-2xl font-bold text-primary mb-4">Interests</h2>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>Creating games and interactive experiences</li>
            <li>Space and astronomy</li>
            <li>Aviation and drones</li>
            <li>Full stack web development</li>
            <li>IT networking</li>
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
