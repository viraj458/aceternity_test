/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'aceternity.com'
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com'
          },
          {
            protocol: 'https',
            hostname: 'peerlist.io'
          },
        ],
      },
};

export default nextConfig;
