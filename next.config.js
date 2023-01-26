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
  devtool: "hidden-source-map",
  plugins: [new DeleteSourceMapsPlugin()],
};
