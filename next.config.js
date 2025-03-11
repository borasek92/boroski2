/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['placeholder.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'placehold.co',
          pathname: '**',
        },
      ],
    },
    experimental: {
      // Włączenie eksperymentalnych funkcji Next.js, jeśli są potrzebne
      // serverActions: true,
    },
  }
  
  module.exports = nextConfig;