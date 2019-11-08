    const path = require('path')
      
      function resolve (dir) {
        return path.join(__dirname, dir)
      }
  


    module.exports = {
      runtimeCompiler: true,//运行时包含编译器的版本
      lintOnSave: false,//关闭ESlint编译
      configureWebpack: {// 当前配置需要写入该选项中
        resolve: {
          extensions: ['.js', '.vue', '.json'],
          alias: {
            'vue$': 'vue/dist/vue.esm.js', 
            '@': resolve('src'), // 设置文件查找路径，可简写文件查找路径
            'components': resolve('src/components'),
          }
        }
      }
    }
