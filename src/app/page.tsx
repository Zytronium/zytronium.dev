'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProjectCarousel from '@/components/ProjectCarousel';
import { projects } from '@/lib/projects';
import ContactSection from "@/components/ContactSection";
import PortfolioPreferences, {
  Audience,
  Focus,
  portfolioPreferencesStorageKey,
  PortfolioPreferencesState,
} from '@/components/PortfolioPreferences';
import { networkingProjectIds } from '@/lib/projects';

const externalSites = [
  { name: 'Dev Blog', url: 'https://blog.zytronium.dev', favicon: 'https://blog.zytronium.dev/icon.png', color: 'header-button-cyan' },
  { name: 'Satire Dev Blog', url: 'https://satire.zytronium.dev', favicon: 'https://satire.zytronium.dev/icon.svg', color: 'header-button-magenta' },
  { name: 'Webworks', url: 'https://webworks.zytronium.dev', favicon: 'https://webworks.zytronium.dev/icon.png', color: 'header-button-purple' },
];

export default function HomePage() {
  const [audience, setAudience] = useState<Audience>('visitor');
  const [focus, setFocus] = useState<Focus>('both');
  const preferencesLoaded = useRef(false);

  useEffect(() => {
    const storedPreferences = window.localStorage.getItem(portfolioPreferencesStorageKey);
    if (storedPreferences) {
      try {
        const preferences = JSON.parse(storedPreferences) as Partial<PortfolioPreferencesState>;
        const storedAudience = preferences.audience;
        const storedFocus = preferences.focus;
        const restorePreferences = window.setTimeout(() => {
          if (storedAudience === 'employer' || storedAudience === 'visitor') setAudience(storedAudience);
          if (storedFocus === 'networking' || storedFocus === 'software' || storedFocus === 'both') setFocus(storedFocus);
          preferencesLoaded.current = true;
        }, 0);
        return () => window.clearTimeout(restorePreferences);
      } catch {
        window.localStorage.removeItem(portfolioPreferencesStorageKey);
      }
    }
    preferencesLoaded.current = true;
  }, []);

  useEffect(() => {
    if (!preferencesLoaded.current) return;
    window.localStorage.setItem(portfolioPreferencesStorageKey, JSON.stringify({ audience, focus }));
  }, [audience, focus]);
  const visibleProjects = useMemo(() => {
    if (focus === 'both') return projects;
    return projects.filter((project) => focus === 'networking'
      ? networkingProjectIds.has(project.id)
      : !networkingProjectIds.has(project.id));
  }, [focus]);

  return (
    <div className="page-shell">
      <div className="content-wrap">
        <header className="hero-section reference-hero">
          <p className="eyebrow">Zytronium / Developer portfolio</p>
          <h1>Hello, <del>world</del> <span>Universe!</span></h1>
          <div className="hero-rule" />
        </header>

        <PortfolioPreferences audience={audience} focus={focus} onAudienceChange={setAudience} onFocusChange={setFocus} />

        <section id="about" className="intro-section">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image
              src="/images/zytronium_dev_logo_rounded.png"
              alt="Zytronium Profile Picture"
              fill
              className="rounded-[5.5rem] border-2 border-[#27234c]"
              unoptimized
            />
          </div>
          <div className="section-heading"><p className="eyebrow">01 / About</p><h2>About Zytronium</h2></div>
          <p className="body-copy max-w-3xl mx-auto mb-6">
            Welcome to my personal developer website! I&apos;m Zytronium, a
            passionate developer from Oklahoma who loves
            programming, space, and gaming. This site serves as a home base for my
            projects, experiments, and
            developer identity.
          </p>
          <Link
            href="/about"
            className="button button-primary"
          >
            Learn More About Me
          </Link>
        </section>

        {focus !== 'networking' && (
          <section id="showcase" className="projects-section">
            <div className="section-heading"><p className="eyebrow">02 / Selected work</p><h2>Featured projects</h2><p>{focus === 'both' ? 'A cross-section of experiments, products, and systems.' : 'Applications, games, and tools built from idea to implementation.'}</p></div>
            <ProjectCarousel projects={visibleProjects} />
            <div className="text-center mt-8">
              <Link
                href="/projects"
                className="button button-secondary"
              >
                View All Projects
              </Link>
            </div>
          </section>
        )}

        <section className="external-sites-section" aria-labelledby="external-sites-title">
          <div className="section-heading">
            <p className="eyebrow">03 / Around the web</p>
            <h2 id="external-sites-title">More from Zytronium</h2>
            <p>Explore my dev blog, satire writing, and web development services.</p>
          </div>
          <div className="external-sites-grid">
            {externalSites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`external-site-button ${site.color}`}
              >
                <Image src={site.favicon} alt="" width={40} height={40} className="external-site-favicon" />
                <span>{site.name}</span>
              </a>
            ))}
          </div>
        </section>

        {audience === 'employer' && <ContactSection />}
      </div>
    </div>
  );
}
