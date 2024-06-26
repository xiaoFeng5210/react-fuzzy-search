const path = require('node:path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js') // 公共配置

const devConfig = {
  mode: 'development', // 开发模式
  entry: path.join(__dirname, 'demo/src/index.jsx'), // 入口，处理资源文件的依赖关系
  output: {
    path: path.join(__dirname, 'demo/src'),
    filename: 'dev.js',
  },
  module: {
    rules: [
      {
        test: /.s[ac]ss$/,
        exclude: /.min.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'global',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // 其他选项
                    },
                  ],
                ],
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /.min.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  plugins: [
  ],
  // 开发服务器设置
  devServer: {
    static: {
      directory: path.join(__dirname, 'demo/src'),
    },
    compress: true,
    host: '127.0.0.1',
    port: 8686, // 启动端口
    open: true, // 打开浏览器
  },
}
module.exports = merge(devConfig, baseConfig) // 合并配置
