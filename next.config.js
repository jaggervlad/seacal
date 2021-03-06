const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
module.exports = withContentlayer()({
  swcMinify: true,
  reactStrictMode: true,

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/text-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
});
