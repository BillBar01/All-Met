import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/written-shit", destination: "/sports", permanent: true },
      { source: "/written-shit/:slug", destination: "/articles/:slug", permanent: true },
      { source: "/pro-sports", destination: "/sports?section=Pro+Sports", permanent: true },
      { source: "/high-school", destination: "/sports?section=High+School", permanent: true },
      { source: "/college", destination: "/sports?section=College", permanent: true },
      { source: "/technology", destination: "/business", permanent: true },
    ];
  },
};

export default nextConfig;
