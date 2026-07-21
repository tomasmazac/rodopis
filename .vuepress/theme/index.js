const path = require('path')

module.exports = {
  extend: '@vuepress/theme-default',

  // Nahrazuje výchozí SearchBox z @vuepress/plugin-search vlastní verzí,
  // která v našeptávači zobrazuje i roky narození a úmrtí z frontmatteru.
  alias: {
    '@SearchBox': path.resolve(__dirname, 'components/SearchBox.vue')
  }
}
