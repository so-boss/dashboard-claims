module.exports = {
  //parser:"sugarss",
  plugins: [
    require('postcss-normalize')(),
    require('postcss-nested')(),
    require('postcss-preset-env')(),
    require('postcss-mixins')()
  ]
}