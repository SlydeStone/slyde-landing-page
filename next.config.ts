import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // important for static export if you use <Image>
  },
};

export default nextConfig;
