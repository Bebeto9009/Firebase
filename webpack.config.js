const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    optimization: {
        minimize: true
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env'],
            }
        },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        publicPath: '/build/',
        compress: true,
        inline: true,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
};
