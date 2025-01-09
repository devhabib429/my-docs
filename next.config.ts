import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/blogs', // Replace with your GitHub repository name
  trailingSlash: true,
};

export default nextConfig;
