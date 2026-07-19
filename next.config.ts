import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A package.json in the user home dir above this repo confuses
  // workspace-root inference; pin the root to this project.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
