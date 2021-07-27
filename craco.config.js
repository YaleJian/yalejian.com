const CracoLessPlugin = require('craco-less');
const path = require('path');
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const CracoVtkPlugin = require("craco-vtk")
module.exports = {
    webpack: {
        alias: {
            '@': pathResolve('src')
        },
        plugins: [
            // 打包分析
            // new BundleAnalyzerPlugin(),

            //打包进度
            new SimpleProgressWebpackPlugin()
        ],
        output: {
            filename: 'static/js/[name].js',
            chunkFilename: 'static/js/[name].chunk.js',
            publicPath: "https://homepage-1252187891.cos.ap-beijing.myqcloud.com/build"
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,

        },
        {
            //打包进度插件
            plugin: CracoVtkPlugin()
        }
    ],
};