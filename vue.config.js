module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    moment: {
      locales: ["ru", "en"]
    },
    autoRouting: {
      chunkNamePrefix: "page-"
    }
  }
};
