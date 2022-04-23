const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "docs",
  publicPath: "",
  pwa: {
    name: "落地之前",
    themeColor: "#e4e4e4",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "default",
    iconPaths: {
      faviconSVG: null,
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
      maskIcon: null,
      msTileImage: "img/icons/ms-icon-144x144.png",
    },
    manifestOptions: {
      orientation: "landscape",
    },
  },
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "落地之前",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
});
