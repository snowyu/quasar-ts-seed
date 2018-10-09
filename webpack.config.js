const argv = {
  mode: 'spa',
  theme: 'mat',
  debug: true
}

const QuasarConfig = require('quasar-cli/lib/quasar-config');
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
  try {
    await quasarConfig.prepare()
  }
  catch (e) {
    console.log(e)
    warn(`⚠️ [FAIL] quasar.conf.js has JS errors`)
    process.exit(1)
  }
  quasarConfig.compile()
  const cfg = quasarConfig.getWebpackConfig()
  cfg.mode = 'development'
  // cfg.resolve = Object.assign({
  //   'vue$': 'vue/dist/vue.esm.js',
  //   '@': path.resolve(__dirname, 'src')
  // }, cfg.resolve)
  // console.log(cfg)
  return cfg
}
