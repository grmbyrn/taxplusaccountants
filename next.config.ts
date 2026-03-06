import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  // Add any other config options here
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "taxassistassets.ams3.cdn.digitaloceanspaces.com",
      },
    ],
  },
  redirects: async () => [
    {
      source: '/about',
      destination: '/#about',
      permanent: true,
    },
  ]
};

export default withMDX(nextConfig);
