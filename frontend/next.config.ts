import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // Change 'export' to 'standalone'
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;