module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/common/common.sass"`
      },
      scss: {
        additionalData: '@import "@/styles/common/common.scss";'
      }
    }
  }
}