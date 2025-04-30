/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Completely disable static generation
  output: 'standalone',
  // Disable all static optimization for authentication-related issues
  experimental: {
    workerThreads: false,
    cpus: 1
  }
};

module.exports = nextConfig; 