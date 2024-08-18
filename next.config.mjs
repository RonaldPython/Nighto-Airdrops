/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          port: '',
          pathname: '/demos/**',  // Adjusted the pathname to match the image path
        },
        
      ],
    },
  };
  
  export default nextConfig;
  