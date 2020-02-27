const {
  override,
  overrideDevServer,
  fixBabelImports,
  addWebpackAlias,
  adjustStyleLoaders,
  useEslintRc
} = require('customize-cra')
const Merge = require('webpack-merge')
const path = require('path')

const resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

// 端口
process.env.PORT = 9500

const defaultOptions = {
  libraryDirectory: 'es',
  style: true
}

const addImport = (libraryName, options = defaultOptions) =>
  fixBabelImports(libraryName, {
    libraryName,
    ...options
  })

const addCustomize = () => config => {
  // 生产环境
  if (process.env.NODE_ENV === 'production') {
    // 关闭sourceMap
    config.devtool = false
  }
  return config
}

const devServerConfig = () => config => (
  Merge(config, {
    // 服务开启gzip
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  })
)

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': resolve('src'),
      _V: resolve('src/views'),
      _ITF: resolve('src/interface'),
      _API: resolve('src/api')
    }),
    addImport('lodash', {
      libraryDirectory: ''
    }),
    // useEslintRc(),
    adjustStyleLoaders((rule) => {
      // scss rule
      if (rule.test.toString().includes('scss')) {
        rule.use.push({
          loader: require.resolve('sass-resources-loader'),
          options: {
            resources: './src/assets/css/base.scss'
          }
        })
      }
    }),
    addCustomize()
  ),
  devServer: overrideDevServer(
    devServerConfig()
  )
}
