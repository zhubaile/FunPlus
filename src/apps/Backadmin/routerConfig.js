import React from 'react';
import { getRouterData } from './utils/utils';
import { asideMenuConfig } from './menuConfig';

// 财会
// 实时数据-收入
const RealtimedataIncome = React.lazy(() => import('./pages/Realtimedata/RealtimedataIncome'));
// 实时数据-支出概况
const OutLay = React.lazy(() => import('./pages/Realtimedata/Expenditureprofile/OutLay'));
const PaymentReview = React.lazy(() => import('./pages/Realtimedata/Expenditureprofile/PaymentReview'));
// 对账
const ChannelReconciliation = React.lazy(() => import('./pages/Reconciliation/ChannelReconciliation')); // 渠道对账
const CustomSummary = React.lazy(() => import('./pages/Reconciliation/CustomSummary')); // 自定义汇总
/* 错误的信息 */
const Empty = React.lazy(() => import('./pages/Exception/Empty'));
const Forbidden = React.lazy(() => import('./pages/Exception/Forbidden'));
const NotFound = React.lazy(() => import('./pages/Exception/NotFound'));
const ServerError = React.lazy(() => import('./pages/Exception/ServerError'));

// ========系统首页============ //
const routerConfig = [
  {
    path: '/backadmin/realtimedata/realtimedataIncome',
    component: RealtimedataIncome,
  },
  {
    path: '/backadmin/Realtimedata/outLay',
    component: OutLay,
  },
  {
    path: '/backadmin/Realtimedata/paymentReview',
    component: PaymentReview,
  },
  {
    path: '/backadmin/reconciliation/channelReconciliation',
    component: ChannelReconciliation,
  },
  {
    path: '/backadmin/reconciliation/customSummary',
    component: CustomSummary,
  },

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

