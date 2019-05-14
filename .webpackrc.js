const path = require('path');
const webpack = require('webpack');
let proxy = {};
proxy['/web/beta/v1.0/uploadPhoto'] = {
  // 代理测试环境地址 如下
  target: "http://192.168.1.105:3000",
  changeOrigin: true,
};
// http://192.168.1.105:3000/web/beta/v1.0/uploadPhoto
module.exports = {
  // 如果需要代理请解开下面注释   regex e("abc")
  devServer: {
    proxy: proxy,
    historyApiFallback: {
      index: 'build/index.html',
      rewrites:[
        { from: /\/index.html$/, to:'build/index.html' },
        { from: /\/website.html$/, to:'build/website.html' },  // 匹配已website.html结束的字符，匹配成功跳转到website.html
        { from: /\/login.html$/, to:'build/login.html' },
        { from: /^\/website/, to:'build/website.html' },     // 匹配已website开头的字符，匹配成功跳转到website.html
        /*{ from: /(?=website)/, to:'build/website.html' },
        { from: /(?=login)/, to:'build/login.html' },*/
        { from: /^\/user/, to:'build/login.html' }
      ],
    }
  },
  resolve: {
    // webpack 别名配置
    alias: {
      "@indexApi": path.join(__dirname, './src/apps/index/api/index.js'),
      "@loginApi": path.join(__dirname, './src/apps/Login/api/index.js'),
      "@websiteApi": path.join(__dirname, './src/apps/Website/api/index.js'),
      "@indexStore": path.join(__dirname, './src/apps/index/store/combin.js'),
      "@ajax": path.join(__dirname, './src/assets/common/axios.js')
    }
  },
  plugins: []
};
