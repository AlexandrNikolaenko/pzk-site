import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: '/pzk-site/',
  basePath: '/pzk-site',
  images: {unoptimized: true},
};

export default nextConfig;
