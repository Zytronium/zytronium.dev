'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProjects = projects.slice(0, 6);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const project = featuredProjects[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-96 rounded-2xl overflow-hidden bg-[#12102d] border border-[#27234c]">
        <div className="relative w-full h-full">
          <Image
            src={project.image || `/api/placeholder/800/400`}
            alt={project.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-3xl font-bold text-[#e4be32] mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
            <Link
              href={`/projects/${project.id}`}
              className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="flex justify-center mt-4 space-x-2">
        {featuredProjects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-purple-600 w-8' : 'bg-gray-600 w-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
