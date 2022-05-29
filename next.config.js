/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/:path*", // Proxy to Backend
      },
    ];
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
