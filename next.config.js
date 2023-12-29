/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**.amazonaws.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  // images: {
  //   domains: ['http://nyb-basket.s3-website-eu-north-1.amazonaws.com'],
  // },
};

module.exports = nextConfig;
