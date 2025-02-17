import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com",], // here you can add more domains to allow images from external sources.
  },
};

export default nextConfig;
