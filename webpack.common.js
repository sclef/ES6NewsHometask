const path = require('path');

module.exports = {
    entry: './src/js/Main.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, './public/js/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: __dirname + "/public",
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-syntax-dynamic-import"]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader', options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            }
        ]
    }
};