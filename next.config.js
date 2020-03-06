const { ANALYZE, ASSET_HOST } = process.env

// for those who using CDN
const assetPrefix = ASSET_HOST || ''

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
})

const withImages = require('next-images')

module.exports = withImages(withMDX({
  assetPrefix,
  target: 'serverless',
  webpack: (config, { dev }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    return config
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
}))
