import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // The resume used to be served from /resume.pdf. Keep links that were
      // shared before the rename working.
      {
        source: "/resume.pdf",
        destination: "/jadenwatson.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
