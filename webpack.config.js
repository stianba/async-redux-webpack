module.exports = {
  entry: "./js/app.js",
  output: {
    publicPath: 'http://localhost:8080/',
    filename: "build/bundle.js",
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: /scss/,
        exclude: /node_modules/,
        loaders: [
          "style",
          "css",
          "autoprefixer?browsers=last 3 versions",
          "sass?outputStyle=expanded"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel?presets[]=stage-0,presets[]=react,presets[]=es2015"],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ],
  },
};
