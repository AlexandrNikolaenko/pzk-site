import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: isProd ? '/pzk-site/' : undefined,
  basePath: isProd ? '/pzk-site' : undefined,
};

export default nextConfig;
