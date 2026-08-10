/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  trailingSlash: false,

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  images: {
    domains: [],
  },

  /* Один адрес у сайта: https://www.ricardo-demi.com
     Все остальные имена ведут на него, чтобы вес не размазывался. */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ricardo-demi-books.vercel.app" }],
        destination: "https://www.ricardo-demi.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "ricardo-demi.com" }],
        destination: "https://www.ricardo-demi.com/:path*",
        permanent: true,
      },
    ];
  },

  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
