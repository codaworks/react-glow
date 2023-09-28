const postcss = require('rollup-plugin-postcss')
const banner = require('rollup-plugin-banner2')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss(),
      banner(() => '"use client";\n')
    )
    return config
  }
};