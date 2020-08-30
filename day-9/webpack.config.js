const mode = process.env.NODE_ENV === "production" ? "production" : "development"
const watch = mode !== "production"
module.exports = {
  mode,
  watch,
  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
}