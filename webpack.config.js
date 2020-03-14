const webpack =  require('webpack');
const path = require('path');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'react-ui' + '.js',
        library: 'react-ui',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
              test: /\.css$/,
              use: [
                {
                  loader: "style-loader"
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false
                  }
                }
              ]
            },
          
        ]
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true, // remove this once you verify it removes the correct files
            verbose: true,
        })
    ]
}
