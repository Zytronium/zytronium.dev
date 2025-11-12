import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // For development; remove in production if using Next.js Image Optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zytronium.dev',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
