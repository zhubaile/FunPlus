import React from 'react';
import { getRouterData } from './utils/utils';
import { asideMenuConfig } from './menuConfig';

/* 错误的信息 */
const Empty = React.lazy(() => import('./pages/Exception/Empty'));
const Forbidden = React.lazy(() => import('./pages/Exception/Forbidden'));
const NotFound = React.lazy(() => import('./pages/Exception/NotFound'));
const ServerError = React.lazy(() => import('./pages/Exception/ServerError'));

// 最新的 个人账户
const Accountinformation = React.lazy(() => import('./pages/Personal/Accountinformation'));
const Enterprisecertification = React.lazy(() => import('./pages/Personal/Enterprisecertification'));
const Costcenter = React.lazy(() => import('./pages/Personal/Costcenter'));
const Controloverinvoices = React.lazy(() => import('./pages/Personal/Controloverinvoices'));
const Operationlog = React.lazy(() => import('./pages/Personal/Operationlog'));

const HelpCenteraddition = React.lazy(() => import('./pages/Personal/Accountinformation/HelpCenteraddition'));
const Accesstoinformationaddition = React.lazy(() => import('./pages/Personal/Accountinformation/Accesstoinformationaddition'));
// 收入
const Income = React.lazy(() => import('./pages/Income'));
// 支出
const Orderrefund = React.lazy(() => import('./pages/Expenditure/Orderrefund')); // 订单退款
const Batchrefund = React.lazy(() => import('./pages/Expenditure/Batchrefund')); // 批量退款
const Enterprisepaymentapi = React.lazy(() => import('./pages/Expenditure/Enterprisepaymentapi')); // 企业付款api
const BusinessPaymentBatch = React.lazy(() => import('./pages/Expenditure/BusinessPaymentBatch')); //  企业付款批量
const Auditofpayment = React.lazy(() => import('./pages/Expenditure/Auditofpayment')); // 出款审核
// 对账
const Selfsummarization = React.lazy(() => import('./pages/Reconciliation/Selfsummarization')); // 自定汇总
const Channelreconciliation = React.lazy(() => import('./pages/Reconciliation/Channelreconciliation')); // 渠道对账功能
const ErrorTrading = React.lazy(() => import('./pages/Reconciliation/ErrorTrading')); // 差错交易
const Daysummary = React.lazy(() => import('./pages/Reconciliation/Daysummary')); // 当日汇总
const Transactionreport = React.lazy(() => import('./pages/Reconciliation/Transactionreport')); // 交易报表
// 应用设置
const Applicationparameters = React.lazy(() => import('./pages/Applicationsettings/Applicationparameters')); // 应用参数
const Paymentchannel = React.lazy(() => import('./pages/Applicationsettings/Paymentchannel')); // 应用参数
const Routingrules = React.lazy(() => import('./pages/Applicationsettings/Routingrules')); // 应用参数
// ========系统首页============ //
const routerConfig = [
  {
    path: '/personal/accountinformation', // 账户信息
    component: Accountinformation,
  },
  {
    path: '/personal/enterprisecertification', // 企业认证
    component: Enterprisecertification,
  },
  {
    path: '/personal/costcenter', // 费用中心
    component: Costcenter,
  },
  {
    path: '/personal/controloverinvoices', // 发票管理
    component: Controloverinvoices,
  },
  {
    path: '/personal/operationlog', // 操作日志
    component: Operationlog,
  },
  {
    path: '/personal/helpcenteraddition', // 运维帮助中心
    component: HelpCenteraddition,
  },
  {
    path: '/personal/accesstoinformationaddition', // 查阅更多信息
    component: Accesstoinformationaddition,
  },


  {
    path: '/income', // 收入
    component: Income,
  },
  {
    path: '/expenditure/orderrefund',
    component: Orderrefund,
  },
  {
    path: '/expenditure/batchrefund',
    component: Batchrefund,
  },
  {
    path: '/expenditure/enterprisepaymentapi',
    component: Enterprisepaymentapi,
  },
  {
    path: '/expenditure/businessPaymentBatch',
    component: BusinessPaymentBatch,
  },
  {
    path: '/expenditure/auditofpayment',
    component: Auditofpayment,
  },
  {
    path: '/reconciliation/selfsummarization',
    component: Selfsummarization,
  },
  {
    path: '/reconciliation/channelreconciliation',
    component: Channelreconciliation,
  },
  {
    path: '/reconciliation/errorTrading',
    component: ErrorTrading,
  },
  {
    path: '/reconciliation/daysummary',
    component: Daysummary,
  },
  {
    path: '/reconciliation/transactionreport',
    component: Transactionreport,
  },
  {
    path: '/applicationsettings/applicationparameters',
    component: Applicationparameters,
  },
  {
    path: '/applicationsettings/paymentchannel',
    component: Paymentchannel,
  },
  {
    path: '/applicationsettings/routingrules',
    component: Routingrules,
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

