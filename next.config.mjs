
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/public/images/**',
      }
    ] 
  }
};

export default nextConfig;
