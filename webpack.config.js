const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const IS_PRODUCTION = process.env.NODE_ENV === 'production'

const PATH_ENTRY = path.join(__dirname, 'src', 'index.tsx')
const PATH_TEMPLATE_ENTRY = path.join(__dirname, 'static', 'index.html')

const PATH_OUTPUT_FOLDER = path.join(__dirname, 'build')
const PATH_SOURCE_FOLDER = path.join(__dirname, 'src')
const PATH_STATIC_FOLDER = path.join(__dirname, 'static')

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
        extensions: ['.js', 'jsx', '.ts', '.tsx', 'css', '.scss'],
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
                include: PATH_SOURCE_FOLDER,
                use: 'ts-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                include: PATH_SOURCE_FOLDER,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/i,
                include: PATH_SOURCE_FOLDER,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                include: PATH_STATIC_FOLDER,
                type: 'asset'
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
        })
    ]
}