import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a092d] border-t border-[#27234c] py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>
          © 2025 Zytronium |{' '}
          <a href="https://github.com/zytronium" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            GitHub
          </a>{' '}
          |{' '}
          <a href="https://www.youtube.com/@Zytron" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            YouTube
          </a>{' '}
          |{' '}
          <a href="https://discord.gg/nMXxW5xVM4" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            Discord
          </a>
        </p>
      </div>
    </footer>
  );
}

