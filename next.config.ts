import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/county-revenue-app",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
