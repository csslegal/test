const path = require("path");
const { DeleteSourceMapsPlugin } = require("webpack-delete-sourcemaps-plugin");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new DeleteSourceMapsPlugin({ isServer, keepServerSourcemaps: true })
    );
    return config;
  },
};
