import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-secondary/20 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-foreground/40 text-sm">
        <p className="tracking-[1px] uppercase">
          © 2026 Zytronium |{' '}
          <a href="https://github.com/zytronium" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-lighter">
            GitHub
          </a>{' '}
          |{' '}
          <a href="https://www.youtube.com/@Zytron" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-lighter">
            YouTube
          </a>{' '}
          |{' '}
          <a href="https://discord.gg/nMXxW5xVM4" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-lighter">
            Discord
          </a>
        </p>
      </div>
    </footer>
  );
}

