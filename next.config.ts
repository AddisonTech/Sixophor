import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A package.json in the user home dir above this repo confuses
  // workspace-root inference; pin the root to this project.
  turbopack: {
    root: __dirname,
  },
  // Keep the dev overlay out of screenshots
  devIndicators: false,
};

export default nextConfig;
