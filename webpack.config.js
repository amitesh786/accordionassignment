/**
 * we don't want to use config folder and webpack dev file
 */
// module.exports = require('./config/webpack.dev.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

module.exports = function () {
    return {
        entry: './src/main.ts',
        output: {
            path: __dirname + '/dist',
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader'
                },
                {
                    test: /\.css$/,
                    loaders: 'style-loader!css-loader'
                },
                { test: /\.ts$/, loader: '@ngtools/webpack' }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new CopyWebpackPlugin([
                { from: 'src/assets', to: 'assets' }
            ]),
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html',
                output: __dirname + '/dist',
                inject: 'head'
            }),

            new ScriptExtPlugin({
                defaultAttribute: 'defer'
            }),
            new AngularCompilerPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: './src/app/app.module#AppModule',
                sourceMap: true
            })

        ]
    };
}