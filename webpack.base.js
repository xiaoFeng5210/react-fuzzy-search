const { resolve } = require('node:path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  resolve: {
    // 定义 import 引用时可省略的文件后缀名
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        // 编译处理 js 和 jsx 文件
        test: /(\.js(x?))|(\.ts(x?))$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/, // 只解析 src 目录下的文件
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      typescript: {
        configFile: resolve(__dirname, 'tsconfig.json'),
      },
    }),
  ],
}
