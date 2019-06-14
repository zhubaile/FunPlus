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
const Detailsofdeduction = React.lazy(() => import('./pages/Personal/Costcenter/Detailsofdeduction')); // 扣费明细
const Controloverinvoices = React.lazy(() => import('./pages/Personal/Controloverinvoices'));
const Applyforaticket = React.lazy(() => import('./pages/Personal/Controloverinvoices/Applyforaticket')); // 申请开票
const Operationlog = React.lazy(() => import('./pages/Personal/Operationlog'));
const Membermanagement = React.lazy(() => import('./pages/Personal/Membermanagement'));


const HelpCenteraddition = React.lazy(() => import('./pages/Personal/Accountinformation/HelpCenteraddition'));
const Accesstoinformationaddition = React.lazy(() => import('./pages/Personal/Accountinformation/Accesstoinformationaddition'));

const Customerservice = React.lazy(() => import('./pages/Backstageworkorder/Customerservice')); // 客服
const Allworkorders = React.lazy(() => import('./pages/Backstageworkorder/Allworkorders')); // 工单
const Workorderdetails = React.lazy(() => import('./pages/Backstageworkorder/Workorderdetails')); // 工单详情
const Submissionworkorder = React.lazy(() => import('./pages/Backstageworkorder/Submissionworkorder')); // 提交工单

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
const IpNamelist = React.lazy(() => import('./pages/Applicationsettings/IpNamelist')); // IP白名单
const Paymentchannel = React.lazy(() => import('./pages/Applicationsettings/Paymentchannel')); // 渠道支付
const Platformchannel = React.lazy(() => import('./pages/Applicationsettings/Platformchannel')); // 平台渠道
const Routingrules = React.lazy(() => import('./pages/Applicationsettings/Routingrules')); // 路由管理

const Devicemanagement = React.lazy(() => import('./pages/Devicemanagement/Devicemanagement')); // 设备管理
const Applicationmember = React.lazy(() => import('./pages/Privilegemanagement/Applicationmember')); // 权限管理-成员管理
// 辅助工具
// import aa from "./pages/Auxiliarytools/Requestlog";
const Webhooks = React.lazy(() => import('./pages/Auxiliarytools/Webhooks')); // 辅助工具-Webhooks
const Serversidecharge = React.lazy(() => import('./pages/Auxiliarytools/Serversidecharge')); // 辅助工具-服务端
const Payexperience = React.lazy(() => import('./pages/Auxiliarytools/Payexperience')); // 辅助工具-体验支付
const Requestlog = React.lazy(() => import('./pages/Auxiliarytools/Requestlog')); // 辅助工具-请求log查看
// ========系统首页============ //
const routerConfig = [
  {
    // path: '/admin/personal/accountinformation/:appid?', // 账户信息
    path: '/admin/personal/accountinformation',
    component: Accountinformation,
  },
  {
    path: '/admin/personal/enterprisecertification', // 企业认证
    component: Enterprisecertification,
  },
  {
    path: '/admin/personal/costcenter', // 费用中心
    component: Costcenter,
  },
  {
    path: '/admin/personal/detailsofdeduction', // 费用中心
    component: Detailsofdeduction,
  },
  {
    path: '/admin/personal/controloverinvoices', // 发票管理
    component: Controloverinvoices,
  },
  {
    path: '/admin/personal/applyforaticket', // 申请发票
    component: Applyforaticket,
  },
  {
    path: '/admin/personal/membermanagement', // 发票管理
    component: Membermanagement,
  },
  {
    path: '/admin/personal/operationlog', // 操作日志
    component: Operationlog,
  },
  {
    path: '/admin/personal/helpcenteraddition', // 运维帮助中心
    component: HelpCenteraddition,
  },
  {
    path: '/admin/personal/accesstoinformationaddition', // 查阅更多信息
    component: Accesstoinformationaddition,
  },
  {
    path: '/admin/backstageworkorder/Customerservice', // 客服
    component: Customerservice,
  },
  {
    path: '/admin/backstageworkorder/Allworkorders', // 全部工单
    component: Allworkorders,
  },
  {
    path: '/admin/backstageworkorder/Workorderdetails', // 工单详情
    component: Workorderdetails,
  },
  {
    path: '/admin/backstageworkorder/Submissionworkorder', // 工单详情
    component: Submissionworkorder,
  },
  {
    path: '/admin/income', // 收入
    component: Income,
  },
  {
    path: '/admin/expenditure/orderrefund',
    component: Orderrefund,
  },
  {
    path: '/admin/expenditure/batchrefund',
    component: Batchrefund,
  },
  {
    path: '/admin/expenditure/enterprisepaymentapi',
    component: Enterprisepaymentapi,
  },
  {
    path: '/admin/expenditure/businessPaymentBatch',
    component: BusinessPaymentBatch,
  },
  {
    path: '/admin/expenditure/auditofpayment',
    component: Auditofpayment,
  },
  {
    path: '/admin/reconciliation/selfsummarization',
    component: Selfsummarization,
  },
  {
    path: '/admin/reconciliation/channelreconciliation',
    component: Channelreconciliation,
  },
  {
    path: '/admin/reconciliation/errorTrading',
    component: ErrorTrading,
  },
  {
    path: '/admin/reconciliation/daysummary',
    component: Daysummary,
  },
  {
    path: '/admin/reconciliation/transactionreport',
    component: Transactionreport,
  },
  {
    path: '/admin/applicationsettings/applicationparameters',
    component: Applicationparameters,
  },
  {
    path: '/admin/applicationsettings/ipnamelist',
    component: IpNamelist,
  },
  {
    path: '/admin/applicationsettings/paymentchannel',
    component: Paymentchannel,
  },
  {
    path: '/admin/applicationsettings/platformchannel',
    component: Platformchannel,
  },
  {
    path: '/admin/applicationsettings/routingrules',
    component: Routingrules,
  },
  {
    path: '/admin/devicemanagement/devicemanagement', // 设备管理
    component: Devicemanagement,
  },
  {
    path: '/admin/privilegemanagement/applicationmember', // 权限管理-成员管理
    component: Applicationmember,
  },
  // 辅助工具
  {
    path: '/admin/auxiliarytools/webhooksr', // 辅助工具
    component: Webhooks,
  },
  {
    path: '/admin/auxiliarytools/serversidecharge', // 辅助工具
    component: Serversidecharge,
  },
  {
    path: '/admin/auxiliarytools/payexperience', // 辅助工具
    component: Payexperience,
  },
  {
    path: '/admin/auxiliarytools/requestlog', // 辅助工具
    component: Requestlog,
  },
  {
    path: '/admin/exception/500',
    component: ServerError,
  },
  {
    path: '/admin/exception/403',
    component: Forbidden,
  },
  {
    path: '/admin/exception/204',
    component: Empty,
  },
  {
    path: '/admin/exception/404',
    component: NotFound,
  },
  {
    path: '/admin/*',
    component: NotFound,
  },
];

const routerData = getRouterData(routerConfig, asideMenuConfig);

export { routerData };

