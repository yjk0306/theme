// const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')
const path = require('path')
// const ThemeColorReplacer = require('webpack-theme-color-replacer')

module.exports = {
  configureWebpack: {
    plugins: [
      // new SkeletonPlugin({
      //   pathname: path.resolve(__dirname, './shell'), // 用来存储 shell 文件的地址
      //   staticDir: path.resolve(__dirname, './dist'), // 最好和 `output.path` 相同
      //   routes: ['/','/list','/new'], // 将需要生成骨架屏的路由添加到数组中
      // })
    ],
  },
  css: {
    loaderOptions: {
      // 依次导入的公用的scss变量，公用的scss混入，共用的默认样式
      sass: {
        prependData: `
          @import "~@/scss/register.scss";
        `
      }
    }
  },
  chainWebpack: config => {   // 解决vue-cli3脚手架创建的项目压缩html 干掉<!-- shell -->导致骨架屏不生效
    // if (process.env.NODE_ENV !== 'development') {
    //   config.plugin('html').tap(opts => {
    //     opts[0].minify.removeComments = false
    //     return opts
    //   })
    // }

    // 自定义换肤
		// config.plugin('webpack-theme-color-replacer')
    // .use(ThemeColorReplacer)
    // .tap(options => {
    //   options[0] = {
    //     fileName: 'css/theme-colors-[contenthash:8].css',
    //     matchColors: [ '#409eff', '#efefef'], //自定义颜色 
    //     // changeSelector: forElementUI.changeSelector,
    //     isJsUgly: process.env.NODE_ENV !== 'development'
    //   }
    //   return options
    // })
  },
};