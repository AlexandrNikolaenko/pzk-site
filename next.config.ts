import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tempfile.aiquickdraw.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
