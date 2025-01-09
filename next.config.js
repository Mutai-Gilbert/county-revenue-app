/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/county-revenue-app',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/county-revenue-app/',
}

module.exports = nextConfig