/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
}

module.exports = nextConfig