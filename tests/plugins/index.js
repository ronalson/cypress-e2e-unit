const { startDevServer } = require('@cypress/webpack-dev-server')
const webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = (on, config) => {
  on('dev-server:start', options =>
    startDevServer({
      options,
      webpackConfig
    })
  )

  return Object.assign({}, config, {
    fixturesFolder: 'tests/fixtures',
    supportFile: 'tests/support/index.js',
    screenshotsFolder: 'tests/screenshots',
    videosFolder: 'tests/videos',
    integrationFolder: 'tests/e2e/specs'
  })
}
