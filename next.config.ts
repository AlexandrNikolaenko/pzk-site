import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: isDev ? '/pzk-site/' : undefined,
  basePath: isDev ? '/pzk-site' : undefined,
};

export default nextConfig;
