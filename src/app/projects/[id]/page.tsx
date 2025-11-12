import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Zytronium`,
    description: project.description,
  };
}

export default async function Page({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#12102d] hover:bg-[#1a1640] border border-[#27234c] rounded-lg transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="bg-[#0a061d]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#27234c]">
          <h1 className="text-4xl font-bold text-[#e4be32] mb-4">{project.title}</h1>

          <div className="relative w-full h-96 mb-6 rounded-xl overflow-hidden">
            <Image
              src={project.image || `/api/placeholder/800/400`}
              alt={project.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-purple-600/20 border border-purple-600/50 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-300 text-lg mb-6">{project.description}</p>

          {project.fullDescription && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-3">About This Project</h2>
              <p className="text-gray-400">{project.fullDescription}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#12102d] hover:bg-[#1a1640] border border-[#27234c] rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </a>
            )}
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Play Store
              </a>
            )}
            {project.links.itch && (
              <a
                href={project.links.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Itch.io
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
