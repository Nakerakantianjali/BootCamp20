const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  
  output: {
    path: path.resolve(__dirname, "public"),
          libraryExport: 'default',
    filename: "main.js",

  },
  target: "node",
  devServer : {
    port: "3000",
    contentBase: ["./public"],
    inline: true,
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
     

    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          
          {
          loader: "babel-loader",
        }],
      },
      
    ],
  },
}