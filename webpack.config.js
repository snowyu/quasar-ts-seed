const argv = {
  mode: 'spa',
  theme: 'mat',
  debug: true
}

const QuasarConfig = require('quasar-cli/lib/quasar-config');
const QuasarGenerator = require('quasar-cli/lib/generator');
const quasarConfig = new QuasarConfig({
  theme: argv.theme,
  mode: argv.mode,
  target: argv.target,
  arch: argv.arch,
  bundler: argv.bundler,
  debug: argv.debug,
  // dev: true
})

module.exports = async function() {
  console.log('webpack config....')
  try {
    await quasarConfig.prepare()
  }
  catch (e) {
    console.log(e)
    warn(`⚠️ [FAIL] quasar.conf.js has JS errors`)
    process.exit(1)
  }
  quasarConfig.compile()
  const generator = new QuasarGenerator(quasarConfig)
  generator.prepare()
  const cfg = quasarConfig.getWebpackConfig()
  cfg.mode = 'development'
  // console.log(cfg)
  return cfg
}
