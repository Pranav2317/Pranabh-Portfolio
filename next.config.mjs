/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false, // Disable SWC to avoid binary issues temporarily
  images: {
    domains: ["assets.aceternity.com"],
  },
};

export default nextConfig;
