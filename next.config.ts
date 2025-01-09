import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/county-revenue-app',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/county-revenue-app/',
};

export default nextConfig;
