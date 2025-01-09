import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/county-revenue-app',
  images: {
    unoptimized: true, // Disable Next.js image optimization for static exports
  },
};

export default nextConfig;
