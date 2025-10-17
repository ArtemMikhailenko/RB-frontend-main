/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000', // your NestJS backend port
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  // Optional: if you'd like to proxy API during development, you can enable rewrites below
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: process.env.NEXT_PUBLIC_API_URL
  //         ? `${process.env.NEXT_PUBLIC_API_URL}/:path*`
  //         : 'http://localhost:3000/:path*',
  //     },
  //   ];
  // },
};

export default nextConfig;
