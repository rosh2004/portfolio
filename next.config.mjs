
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
      }
    ] 
  }
};

export default nextConfig;
