const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ReactRefreshTypeScript = require('react-refresh-typescript')

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

const PATH_ENTRY = path.join(__dirname, 'src', 'index.tsx')
const PATH_TEMPLATE_ENTRY = path.join(__dirname, 'static', 'index.html')
const PATH_OUTPUT_FOLDER = path.join(__dirname, 'build')

module.exports = {
    mode: IS_PRODUCTION ? 'production' : 'development',
    devtool: IS_PRODUCTION ? undefined : 'source-map',
    entry: PATH_ENTRY,
    output: {
        path: PATH_OUTPUT_FOLDER,
        filename: '[name].[fullhash:8].js',
        chunkFilename: '[name].[chunkhash:8].js',
        publicPath: 'auto'
    },
    resolve: {
        extensions: ['.js', 'jsx', '.ts', '.tsx', '.css', '.scss', '.sass'],
        fallback: { process: false }
    },
    devServer: {
        hot: true,
        open: true,
        compress: true,
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            getCustomTransformers: () => ({
                                before: [!IS_PRODUCTION && ReactRefreshTypeScript()].filter(Boolean)
                            }),
                            transpileOnly: !IS_PRODUCTION
                        }
                    }
                ]
            },
            {
                test: /\.s?[ca]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|webp|ico)$/i,
                type: 'asset'
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ["@svgr/webpack"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: PATH_TEMPLATE_ENTRY,
            filename: 'index.html?[fullhash:8]'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash:8].css',
            chunkFilename: '[name].[chunkhash:8].css'
        }),
        !IS_PRODUCTION && new ReactRefreshWebpackPlugin()
    ].filter(Boolean)
}