module.exports = {
  plugins: {
    // postcss-selector-namespace: 给所有css添加统一前缀，然后父项目添加命名空间
    'postcss-selector-namespace': {
      namespace(css) {
        if (css.includes('element-variables.scss')) return '';
        return '.salary-app-wrapper'
        // return '.account-app-wrapper'
      }
    },
  }
}
