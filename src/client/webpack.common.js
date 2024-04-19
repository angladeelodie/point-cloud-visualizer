const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // path to your index.html file
        }),
    ],
    entry: './src/client/client.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.json/,
                type: 'asset/resource'
            },
            // CSS rules
            {
                test: /\\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            three: path.resolve('./node_modules/three')
        },
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../dist/client'),
    }
};

// test: /\.json/,