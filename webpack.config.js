const path = require('path');

module.exports = {
    context: path.join(__dirname, '/src'),

    entry: {
        javascript: './js/index'
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/'
    },

    devServer: {
        historyApiFallback: true
    },

    resolve: {
        alias: {
            react: path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            },
            {
                test: /\.(s*)css$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles SCSS to CSS
                }]
            }
        ],
    }
};
