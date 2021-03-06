module.exports = {
  
  /* css: {
    
    extract:false,

    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss1/base.scss";
        `
      }
    }

  }, */

  // whether to use eslint-loader
  lintOnSave: true,

  devServer: {
    
    // open: process.platform === 'darwin',
    // host: '0.0.0.0',
    // disableHostCheck: true,
    port: 8080,
    open: true,
    // headers:{
    //   'Access-Control-Allow-Origin': '*',
    // },
    // disableHostCheck: true,
    // https: false,
    // hotOnly: false,
    // proxy: null, // string | Object
    // proxy: 'http://localhost:3000'
    proxy: {//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/user':{//axios访问 /api ==  target + /api  
        target:'http://www.xinfanyiluan.top:80',
        changeOrigin:true,//创建虚拟服务器
        // ws:true,//websocket代理
      },
      '/douban':{// axios 访问 /douban == target + '/douban'
        target:'https://api.douban.com',
        changeOrigin:true,
        pathRewrite:{//路径替换
          '^/douban':'',// axios 访问/douban/v2 == target + /v2
        }
      }
    }
    // before: app => {}
  }
}