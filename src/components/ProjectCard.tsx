'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="bg-[#12102d] rounded-xl p-5 border border-[#27234c] hover:border-purple-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-600/20 cursor-pointer h-full flex flex-col">
        <div className="relative w-full h-48 mb-3 rounded-lg overflow-hidden">
          <Image
            src={project.image || `/api/placeholder/400/250`}
            alt={project.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <h3 className="text-xl font-bold text-[#e4be32] mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2" onClick={(e) => e.preventDefault()}>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}
