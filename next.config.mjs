/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iameonline.com',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
