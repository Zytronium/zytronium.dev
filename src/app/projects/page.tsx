
'use client';

import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const fuzzySearch = (query: string, text: string): boolean => {
    const pattern = query.toLowerCase().split('').join('.*');
    const regex = new RegExp(pattern);
    return regex.test(text.toLowerCase());
  };

  const filteredProjects = projects.filter((project) => {
    if (!searchQuery) return true;
    return (
      fuzzySearch(searchQuery, project.title) ||
      fuzzySearch(searchQuery, project.description) ||
      project.tags.some((tag) => fuzzySearch(searchQuery, tag))
    );
  });

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8">My Projects</h1>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#12102d] border border-[#27234c] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No projects found matching your search.
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-[#12102d] border border-[#27234c] disabled:opacity-50 disabled:cursor-not-allowed hover:border-purple-600 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  currentPage === i + 1
                    ? 'bg-purple-600 border-purple-600'
                    : 'bg-[#12102d] border-[#27234c] hover:border-purple-600'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-[#12102d] border border-[#27234c] disabled:opacity-50 disabled:cursor-not-allowed hover:border-purple-600 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
