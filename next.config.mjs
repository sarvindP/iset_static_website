/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
