const path = require('path');
const webpack = require('webpack');
let proxy = {};
proxy['/api/v1/**'] = {
  // 代理测试环境地址 如下
  target: "http://yapi.test.io/mock/8",
  changeOrigin: true,
};

module.exports = {
  // 如果需要代理请解开下面注释
  // devServer: {
  //   proxy: proxy,
  // },
  resolve: {
    // webpack 别名配置
    alias: {
      "@indexApi": path.join(__dirname, './src/apps/index/api/index.js'),
      "@indexStore": path.join(__dirname, './src/apps/index/store/combin.js'),
      "@ajax": path.join(__dirname, './src/assets/common/axios.js')
    }
  },
  plugins: []
};
