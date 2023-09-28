const banner = require('rollup-plugin-banner2')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      banner(() => '"use client";\n')
    )
    return config
  }
};