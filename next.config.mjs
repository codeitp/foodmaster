/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // These will be available in the app
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  },
};

export default nextConfig;
