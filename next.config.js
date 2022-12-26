/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["invitz-bucket.is3.cloudhost.id", "is3.cloudhost.id"],
  },
};

module.exports = nextConfig;
