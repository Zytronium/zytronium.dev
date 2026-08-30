'use client';

import { useEffect, useState } from 'react';
import {
  Focus,
  portfolioPreferencesStorageKey,
  PortfolioPreferencesState,
} from '@/components/PortfolioPreferences';

type SkillCategory = Exclude<Focus, 'both'>;

interface Skill {
  name: string;
  category: SkillCategory;
}

const skills: Skill[] = [
  { name: 'Python', category: 'software' },
  { name: 'JavaScript', category: 'software' },
  { name: 'TypeScript', category: 'software' },
  { name: 'Kotlin', category: 'software' },
  { name: 'C', category: 'software' },
  { name: 'Rust', category: 'software' },
  { name: 'Bash', category: 'software' },
  { name: 'SQL', category: 'software' },
  { name: 'HTML', category: 'software' },
  { name: 'CSS', category: 'software' },
  { name: 'TailwindCSS', category: 'software' },
  { name: 'React', category: 'software' },
  { name: 'Next.js', category: 'software' },
  { name: 'Express.js', category: 'software' },
  { name: 'Flask', category: 'software' },
  { name: 'Firebase', category: 'software' },
  { name: 'Discord.py', category: 'software' },
  { name: 'CD/CI', category: 'software' },
  { name: 'Ethernet cable terminating', category: 'networking' },
  { name: 'Network troubleshooting (CLI)', category: 'networking' },
  { name: 'OSI & TCP/IP models', category: 'networking' },
  { name: 'IP Subnetting', category: 'networking' },
  { name: 'Ethernet & WiFi standards', category: 'networking' },
  { name: 'DNS & DHCP', category: 'networking' },
  { name: 'NAT & VPNs', category: 'networking' },
  { name: 'Switching & MAC addressing', category: 'networking' },
  { name: 'TCP/UDP & Ports', category: 'networking' },
  { name: 'WAN technologies', category: 'networking' },
  { name: 'Virtualization', category: 'networking' },
  { name: 'Cloud computing models', category: 'networking' },
];

export default function AboutSkills() {
  const [focus, setFocus] = useState<Focus>('both');

  useEffect(() => {
    const storedPreferences = window.localStorage.getItem(portfolioPreferencesStorageKey);
    if (!storedPreferences) return;

    try {
      const preferences = JSON.parse(storedPreferences) as Partial<PortfolioPreferencesState>;
      if (preferences.focus === 'networking' || preferences.focus === 'software' || preferences.focus === 'both') {
        const restoreFocus = window.setTimeout(() => setFocus(preferences.focus as Focus), 0);
        return () => window.clearTimeout(restoreFocus);
      }
    } catch {
      window.localStorage.removeItem(portfolioPreferencesStorageKey);
    }
  }, []);

  const visibleSkills = focus === 'both' ? skills : skills.filter((skill) => skill.category === focus);

  return (
    <>
      <h2 className="text-2xl font-bold text-primary mb-4">Skills, Technologies, and Expertise</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {visibleSkills.map((skill) => (
          <div key={skill.name} className="reference-card px-4 py-2 text-center">
            {skill.name}
          </div>
        ))}
      </div>
    </>
  );
}
