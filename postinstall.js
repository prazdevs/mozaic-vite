//? Hacky way to import tokens in all-settings properly without postcss config

const path = require('path')
const fs = require('fs')

const asp = 'node_modules/@mozaic-ds/styles/settings-tools/_all-settings.scss'

fs.writeFileSync(
  path.resolve(__dirname, asp),
  fs
    .readFileSync(path.resolve(__dirname, asp), {
      encoding: 'utf-8',
    })
    .replace(/_tokens.scss/i, '../../tokens/build/scss/tokens.scss')
)
