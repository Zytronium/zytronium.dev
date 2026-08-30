import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // For development; remove in production if using Next.js Image Optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zytronium.dev',
      },
      {
        protocol: 'https',
        hostname: 'blog.zytronium.dev',
      },
      {
        protocol: 'https',
        hostname: 'satire.zytronium.dev',
      },
      {
        protocol: 'https',
        hostname: 'webworks.zytronium.dev',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
