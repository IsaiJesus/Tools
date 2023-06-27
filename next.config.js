/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
};
