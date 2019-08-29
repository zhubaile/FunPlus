const path = require('path');
const webpack = require('webpack');

const proxy = {};

/* proxy['/web/beta/v1.0/!**'] = {
  // 代理测试环境地址 如下，代理就是把请求本地的url接到配置好的url上。
  target: "http://192.168.1.121:3000",
  changeOrigin: true,
}; */
module.exports = {
  entry: {
    index: "./src/apps/index/index.js",
    login: "./src/apps/Login/index.js",
    website: "./src/apps/Website/index.js",
    backadmin: "./src/apps/Backadmin/index.js",
  },
  outputDir: 'build',
  vendor: false,
  alias: {
    "@indexApi": path.join(__dirname, './src/apps/index/api/index.js'),
    "@loginApi": path.join(__dirname, './src/apps/Login/api/index.js'),
    "@websiteApi": path.join(__dirname, './src/apps/Website/api/index.js'),
    "@indexStore": path.join(__dirname, './src/apps/index/store/combin.js'),
    "@ajax": path.join(__dirname, './src/assets/common/axios.js'),
    "@img": path.join(__dirname, './src/assets/img'),
  },
  define: {
    ASSETS_VERSION: JSON.stringify('0.0.1'),
  },
  proxy: {
    '/web/beta/v1.0/**': {
      // 通过 enable 字段快速开关代理配置
      enable: true,
      target: 'http://192.168.1.121:3000',
    },
  },
  devServer: {
    index: 'build/website.html',
    historyApiFallback: {
      index: 'build/website.html',
      disableDotRule: true,
      rewrites: [
        { from: /^\/$/, to: 'build/website.html' },
        { from: /^\/user/, to: 'build/login.html' }, // 登录界面
        { from: /^\/website/, to: 'build/website.html' }, // 官网界面
        { from: /^\/admin/, to: 'build/index.html' }, // 用户后台
        { from: /^\/backadmin/, to: 'build/backadmin.html' }, // 管理后台
      ],
    },
  },
  localization: false,
  plugins: [
    ['ice-plugin-fusion', {
      themePackage: '../src/assets/skin/',
    }],
    ['ice-plugin-moment-locales', {
      locales: ['zh-cn'],
    }],
  ],
};
