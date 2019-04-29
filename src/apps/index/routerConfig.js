import React from 'react';
import { getRouterData } from './utils/utils';
import { asideMenuConfig } from './menuConfig';
// 这样有一个弊端 没有按需加载，后期可以引入按需加载
//  import Home from './pages/home';
// import User from './pages/user';
// import I18n from './pages/i18n';
// import Fail from './pages/Fail';

const Home = React.lazy(() => import('./pages/UserData'));
const User = React.lazy(() => import('./pages/user'));
const Setting = React.lazy(() => import('./pages/Setting'));
// ========系统首页============ //
const routerConfig = [
  // 系统首页
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/setting',
    component: Setting,
  },
];

const routerData = getRouterData(routerConfig, asideMenuConfig);

export { routerData };

