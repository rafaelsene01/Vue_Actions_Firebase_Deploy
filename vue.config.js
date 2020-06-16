const EnvkeyWebpackPlugin = require("envkey-webpack-plugin");
const mode = process.env.NODE_ENV || "development";

module.exports = {
  pwa: {
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "service-worker.js"
    }
  },
  configureWebpack: {
    devtool: false,
    mode,
    performance: {
      hints: mode !== "production" ? "warning" : false
    },
    plugins: [
      new EnvkeyWebpackPlugin({
        permitted: ["NODE_ENV"],
        dotEnvFile: ".env"
      })
    ]
  },
  transpileDependencies: ["vuetify"]
};
