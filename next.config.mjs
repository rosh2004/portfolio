
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
      }
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'utfs.io',
        pathname: '/f/**',
      },
      {
        protocol: 'https',
        hostname: '2ddyvmtgjt.ufs.sh',
        pathname: '/f/**',
      }
    ]
  }
};

export default nextConfig;
