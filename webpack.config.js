const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development', // or 'production'
  entry: './myscript.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv(), // Load environment variables from a .env file
  ],
};


// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//   mode: 'development', // or 'production'
//   entry: './myscript.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env.API_URL': JSON.stringify(process.env.API_URL),
//     }),
//   ],
// };
