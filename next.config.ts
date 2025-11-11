/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Supabase public storage
      {
        protocol: "https",
        hostname: "slelguoygbfzlpylpxfs.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      // Unsplash images
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Placeholder images
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

module.exports = nextConfig;
