import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ 
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during the build process
  },
};

export default nextConfig;
