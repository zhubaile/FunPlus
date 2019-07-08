import React from 'react';
import { getRouterData } from './utils/utils';
import { asideMenuConfig } from './menuConfig';

/* 错误的信息 */
const Empty = React.lazy(() => import('./pages/Exception/Empty'));
const Forbidden = React.lazy(() => import('./pages/Exception/Forbidden'));
const NotFound = React.lazy(() => import('./pages/Exception/NotFound'));
const ServerError = React.lazy(() => import('./pages/Exception/ServerError'));

// ========系统首页============ //
const routerConfig = [

  {
    path: '/backadmin/exception/500',
    component: ServerError,
  },
  {
    path: '/backadmin/exception/403',
    component: Forbidden,
  },
  {
    path: '/backadmin/exception/204',
    component: Empty,
  },
  {
    path: '/backadmin/exception/404',
    component: NotFound,
  },
  {
    path: '/backadmin/*',
    component: NotFound,
  },
];

const routerData = getRouterData(routerConfig, asideMenuConfig);

export { routerData };

