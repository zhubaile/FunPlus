import React from 'react';
import { getRouterData } from './utils/utils';
import { asideMenuConfig } from './menuConfig';
// 这样有一个弊端 没有按需加载，后期可以引入按需加载
// import Home from '../Website/index';
// import User from './pages/user';
// import I18n from './pages/i18n';
// import Fail from './pages/Fail';
// const Dashboard = React.lazy(() => import('./pages/Dashboard'));
// const Charts = React.lazy(() => import('./pages/Charts'));  //基础图表
// const BasicCharts = React.lazy(() => import('./pages/BasicCharts'));  // 通用图表
const Terms = React.lazy(() => import('./pages/Terms'));
const Result = React.lazy(() => import('./pages/Result'));
const BasicList = React.lazy(() => import('./pages/BasicList'));
const ProjectList = React.lazy(() => import('./pages/ProjectList'));
const BasicTable = React.lazy(() => import('./pages/BasicTable'));
const GeneralTable = React.lazy(() => import('./pages/GeneralTable'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Fail = React.lazy(() => import('./pages/Fail'));
const Empty = React.lazy(() => import('./pages/Exception/Empty'));
const Forbidden = React.lazy(() => import('./pages/Exception/Forbidden'));
const NotFound = React.lazy(() => import('./pages/Exception/NotFound'));
const ServerError = React.lazy(() => import('./pages/Exception/ServerError'));


const UserData = React.lazy(() => import('./pages/UserData'));
const Setting = React.lazy(() => import('./pages/Setting'));
// const Pay = React.lazy(() => import('./pages/Pay'));
const Crossborder = React.lazy(() => import('./pages/Pay/Crossborder'));
const Enterprise = React.lazy(() => import('./pages/Pay/Enterprise'));
const Submerchants = React.lazy(() => import('./pages/Pay/Submerchants'));
const Accoounts = React.lazy(() => import('./pages/AccountInformation'));
// const Website = React.lazy(() => import('../Website/index'));
// const Login = React.lazy(() => import('../Login/index'));
// ========系统首页============ //
const routerConfig = [
  {
    path: '/setting', // 个人信息设置
    component: Setting,
  },
  {
    path: '/userdata', // 用户数据信息
    component: UserData,
  },
  {
    path: '/pay/crossborder', // 三个支付场景
    component: Crossborder,
  },
  {
    path: '/pay/enterprise',
    component: Enterprise,
  },
  {
    path: '/pay/submerchants',
    component: Submerchants,
  },
  {
    path: '/accounts', // 账户信息
    component: Accoounts,
  },
  {
    path: '/list/basic', // 列表页
    component: BasicList,
  },
  {
    path: '/list/general',
    component: ProjectList,
  },
  {
    path: '/result/success',
    component: Result,
  },
  {
    path: '/result/fail',
    component: Fail,
  },
  {
    path: '/table/general', // 表格页
    component: GeneralTable,
  },
  {
    path: '/table/basic',
    component: BasicTable,
  },
  {
    path: '/profile/basic',
    component: Profile,
  },
  {
    path: '/profile/general',
    component: Terms,
  },
  {
    path: '/exception/500',
    component: ServerError,
  },
  {
    path: '/exception/403',
    component: Forbidden,
  },
  {
    path: '/exception/204',
    component: Empty,
  },
  {
    path: '/exception/404',
    component: NotFound,
  },
];

const routerData = getRouterData(routerConfig, asideMenuConfig);

export { routerData };

