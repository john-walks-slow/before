const { defineConfig } = require("@vue/cli-service");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

let additionalResources = [];
const PUBLIC_RES_PATH = path.resolve("public");
function* walkSync(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}
for (const filePath of walkSync(PUBLIC_RES_PATH)) {
  // if (filePath.match(/\.(png|xml|html|ico|json|svg|ogg)$/)) {
  additionalResources.push({
    url: filePath
      .slice(filePath.indexOf(PUBLIC_RES_PATH) + PUBLIC_RES_PATH.length + 1)
      .replaceAll("\\", "/"),
    revision: crypto
      .createHash("sha256")
      .update(fs.readFileSync(filePath))
      .digest("hex"),
  });
  // }
}
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "docs",
  publicPath: "/",
  devServer: { historyApiFallback: true },
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
      icons: [
        {
          src: "./img/icons/android-icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./img/icons/android-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "./img/icons/android-icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./img/icons/android-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workboxOptions: {
      // additionalManifestEntries: additionalResources,
      // HACK devserver 在开发环境会自己返回一个空的 service-worker。绕开这个限制。
      swDest: "sw.js",
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 50000000,
      // include: [/\.(ttf|webp|ogg|json|ico|js)$/],
      runtimeCaching: [
        {
          urlPattern: /\/$/,
          handler: "NetworkFirst",
          options: {
            cacheName: "index",
          },
        },
      ],
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
