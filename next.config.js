/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  env: {
    RUNTIME: "storybook",
  },
  images: {
    deviceSizes: [384, 450, 640, 750, 828, 1080, 1200, 1400, 1600, 1920, 2048],
  },
};

module.exports = nextConfig;
