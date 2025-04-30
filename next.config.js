/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Output in standalone mode for better compatibility with AWS Amplify
  output: 'standalone',
  // Disable static exports for authentication pages
  experimental: {
    // This ensures pages like login aren't statically generated
    workerThreads: false,
    cpus: 1
  }
};

module.exports = nextConfig; 