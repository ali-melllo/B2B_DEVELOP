/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'], 
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840], 
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], 
    unoptimized: false,
  },
  trailingSlash: true,
  distDir: "out",
  // output: "export",
};

export default nextConfig;
