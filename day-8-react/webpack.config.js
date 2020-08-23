module.exports = {
  mode: "development",
  watch: true,
  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
}