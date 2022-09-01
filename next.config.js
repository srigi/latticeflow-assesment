/** @type {import('next').NextConfig} */
const { WEBSITE_NAME } = process.env;
process.env.NEXT_PUBLIC_WEBSITE_NAME = WEBSITE_NAME;

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
};

module.exports = nextConfig;
