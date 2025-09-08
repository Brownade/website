import { createMDX } from "fumadocs-mdx/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  redirects() {
    return [
      {
        source: "/blogs/:path*.mdx",
        destination: "/blogs/:path*.md",
        permanent: true
      }
    ]
  },
  rewrites() {
    return [
      {
        source: "/blogs/:path*.md",
        destination: "/llm/:path*"
      }
    ]
  }
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
