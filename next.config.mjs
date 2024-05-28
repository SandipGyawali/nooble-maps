/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CREDENTIALS_KEY: process.env.CREDENTIALS_KEY,
  },
};

export default nextConfig;
