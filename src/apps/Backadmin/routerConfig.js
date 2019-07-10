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
const DaySummary = React.lazy(() => import('./pages/Reconciliation/DaySummary')); // 当日汇总
const TransactionReport = React.lazy(() => import('./pages/Reconciliation/TransactionReport')); // 交易报表
const ErrorTransaction = React.lazy(() => import('./pages/Reconciliation/ErrorTransaction')); // 差错交易
// 运营
// 应用管理
const ApplicationChannel = React.lazy(() => import('./pages/Applicationmanagement/Channelmanagement/ApplicationChannel')); // 应用渠道
const PlatformChannel = React.lazy(() => import('./pages/Applicationmanagement/Channelmanagement/PlatformChannel')); // 应用渠道

const EquipmentManagement = React.lazy(() => import('./pages/Applicationmanagement/Equipmentmanagement')); // 设备管理
// 路由规则概况
const RoutingRules = React.lazy(() => import('./pages/Applicationmanagement/Routingrulesoverview/RoutingRules')); // 路由规则（用户）
const PlatformRouting = React.lazy(() => import('./pages/Applicationmanagement/Routingrulesoverview/PlatformRouting')); // 平台路由覆盖
const Businessinformation = React.lazy(() => import('./pages/Businessinformation')); // 商户信息

const Rolemanagement = React.lazy(() => import('./pages/Teamauthority/Rolemanagement')); // 角色管理
const Membermanagement = React.lazy(() => import('./pages/Teamauthority/Membermanagement')); // 成员管理
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
    path: '/backadmin/reconciliation/daySummary',
    component: DaySummary,
  },
  {
    path: '/backadmin/reconciliation/transactionReport',
    component: TransactionReport,
  },
  {
    path: '/backadmin/reconciliation/errortransaction',
    component: ErrorTransaction,
  },
  {
    path: '/backadmin/applicationmanagement/applicationChannel',
    component: ApplicationChannel,
  },
  {
    path: '/backadmin/applicationmanagement/platformChannel',
    component: PlatformChannel,
  },
  {
    path: '/backadmin/applicationmanagement/equipmentManagement',
    component: EquipmentManagement,
  },
  {
    path: '/backadmin/Applicationmanagement/routingRules',
    component: RoutingRules,
  },
  {
    path: '/backadmin/Applicationmanagement/platformRouting',
    component: PlatformRouting,
  },
  {
    path: '/backadmin/businessinformation',
    component: Businessinformation,
  },
  {
    path: '/backadmin/Teamauthority/rolemanagement',
    component: Rolemanagement,
  },
  {
    path: '/backadmin/Teamauthority/membermanagement',
    component: Membermanagement,
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

