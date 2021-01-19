module.exports = {
  // options...
  devServer: {
    proxy: {
      "^/v1": {
        target: "https://staging.api.scalapay.com",
        changeOrigin: true
      },
      "^/v2": {
        target: "https://staging.api.scalapay.com",
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/variables.scss";@import "@/styles/mixins.scss";@import "@/styles/grid.scss";`
      }
    }
  }
};
