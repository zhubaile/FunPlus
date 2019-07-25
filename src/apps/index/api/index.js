import ajaxAmd from '@ajax';
// 以下为示例
// 菜单查询接口
export async function getMenu(params) {
  debugger;
  return ajaxAmd.post({
    url: 'menu/user',
    data: params,
  });
  // .then(({ status, data }) => {
  //   console.log(status);
  //   console.log(data);
  //   ;
  // });deviceGroup
}
// 设备管理列表
export async function devicelist(params) {
  return ajaxAmd.get({
    url: '/device/list',
    params,
  });
}
// 获取分组列表
export async function deviceGrouplist(params) {
  return ajaxAmd.get({
    url: '/deviceGroup/list',
    params,
  });
}
// 获取设备组内容
export async function deviceGroupaddparmas() {
  return ajaxAmd.get({
    url: '/deviceGroup/add/parmas',
  });
}
// 添加设备组接口
export async function deviceGroupadd(params) {
  return ajaxAmd.post({
    url: '/deviceGroup/add',
    data: params,
  });
}
// 获取添加设备参数
export async function deviceparams(params) {
  return ajaxAmd.get({
    url: '/device/params',
    params,
  });
}
// 添加设备
export async function device(params) {
  return ajaxAmd.post({
    // url: '/device/add',
    url: '/device',
    data: params,
  });
}
// 路由里面新规则的初始应用通道
export async function channelParams(params) {
  return ajaxAmd.get({
    url: '/channelParams',
    params,
  });
}
// 选择应用通道来获取设备组信息
export async function channeldeviceGroup(params) {
  return ajaxAmd.get({
    url: '/channel/deviceGroup',
    params,
  });
}
// 选择设备组获取其他信息
export async function deviceGroupruleParams(params) {
  return ajaxAmd.post({
    url: '/deviceGroup/ruleParams',
    data: params,
  });
}
// 获取应用直连渠道规则
export async function channel(params) {
  return ajaxAmd.get({
    url: '/channel',
    params,
  });
}
// 改变直连渠道的开关
export async function channelbindRule(params) {
  return ajaxAmd.post({
    url: '/channel/bindRule',
    data: params,
  });
}
// 获取路由规则列表
export async function routerRulelist(params) {
  return ajaxAmd.get({
    url: '/routerRule/list',
    params,
  });
}
// 路由规则
export async function routerRule(params) {
  return ajaxAmd.get({
    url: '/routerRule',
    params,
  });
}
// 创建新规则
export async function routerRuleadd(params) {
  return ajaxAmd.post({
    url: '/routerRule/add',
    data: params,
  });
}
// 编辑新规则
export async function routerRuledit(params) {
  return ajaxAmd.post({
    url: '/routerRule/edit',
    data: params,
  });
}
// 获取应用参数
export async function settingget(params) {
  return ajaxAmd.get({
    url: '/setting',
    params,
  });
}// 修改应用参数
export async function settingpost(params) {
  return ajaxAmd.post({
    url: '/setting',
    data: params,
  });
}

// 获取IP
export async function ObtainsettingwhiteIps(params) {
  return ajaxAmd.get({
    url: '/setting/whiteIps',
    params,
  });
}
// 添加IP
export async function addsettingwhiteIps(params) {
  return ajaxAmd.post({
    url: '/setting/whiteIps',
    data: params,
  });
}
// 删除IP
export async function deletesettingwhiteIps(params) {
  return ajaxAmd.delete({
    url: '/setting/whiteIps',
    params,
  });
}
// ip白名单开关
export async function addwhiteListSwitch(params) {
  return ajaxAmd.post({
    url: '/setting/whiteIps/changeStatus',
    data: params,
  });
}

export async function currentUser() {
  return ajaxAmd.post({
    url: 'getUserAccount',
  });
}
//  获取用户权限
export function functionUser() {
  return ajaxAmd.post({
    url: 'function/user',
  });
}

// 删除成员管理按钮
export function userDelete(params) {
  return ajaxAmd.post({
    url: '/userDelete',
    data: params,
  });
}
// 成员管理
export function searchUserList(params) {
  return ajaxAmd.post({
    url: '/searchUserList',
    data: params,
  });
}
// 添加成员
export function createUser(params) {
  return ajaxAmd.post({
    url: '/createUser',
    data: params,
  });
}

// 角色权限列表
export function roleList(params) {
  return ajaxAmd.get({
    url: '/roleList',
    params,
  });
}
// 添加角色权限
export function addRolePms(params) {
  return ajaxAmd.post({
    url: '/addRolePms',
    data: params,
  });
}

// 修改角色权限
export function changeRolePms(params) {
  return ajaxAmd.post({
    url: '/changeRolePms',
    data: params,
  });
}
// 删除角色权限
export function deleteRolePms(params) {
  return ajaxAmd.post({
    url: '/deleteRolePms',
    data: params,
  });
}

// 发票列表
export function invoiceList(params) {
  return ajaxAmd.get({
    url: '/invoiceList',
    params,
  });
}
// 申请开票界面内容加载
export function invoiceDataInfo(params) {
  return ajaxAmd.get({
    url: '/invoiceDataInfo',
    params,
  });
}
// 申请开票
export function openInvoice(params) {
  return ajaxAmd.post({
    url: '/openInvoice',
    data: params,
  });
}
// 删除发票信息
export function invoiceDelete(params) {
  return ajaxAmd.post({
    url: '/invoiceDelete',
    data: params,
  });
}
// 修改发票
export function changeInvoiceInfo(params) {
  return ajaxAmd.post({
    url: '/changeInvoiceInfo',
    data: params,
  });
}
// 修改默认地址
export function changeDefaultValue(params) {
  return ajaxAmd.post({
    url: '/changeDefaultValue',
    data: params,
  });
}
/* // 填写邮寄地址
export function createMailAddress(params) {
  return ajaxAmd.post({
    url: '/createMailAddress',
    data: params,
  });
} */
// 修改邮寄地址
export function changeMailAddress(params) {
  return ajaxAmd.post({
    url: '/changeMailAddress',
    data: params,
  });
}
// 删除邮寄地址
export function mailAddressDelete(params) {
  return ajaxAmd.post({
    url: '/mailAddressDelete',
    data: params,
  });
}
// 申请退票
export function InvoiceOperation(params) {
  return ajaxAmd.post({
    url: '/InvoiceOperation',
    data: params,
  });
}
// 费用中心充值列表
export function rechargeList(params) {
  return ajaxAmd.get({
    url: '/rechargeList',
    params,
  });
}
// 充值
export function recharge(params) {
  return ajaxAmd.post({
    url: '/recharge',
    data: params,
  });
}
// 扣费明细
export function deductionList(params) {
  return ajaxAmd.post({
    url: '/deductionList',
    data: params,
  });
}
// 操作日志
export function loglist(params) {
  return ajaxAmd.post({
    url: '/loglist',
    data: params,
  });
}
// 收入
export function incomeList(params) {
  return ajaxAmd.post({
    url: '/incomeList',
    data: params,
  });
}
// 订单退款
export function refund(params) {
  return ajaxAmd.post({
    url: '/refund',
    data: params,
  });
}
// 订单退款列表
export function orderRefundList(params) {
  return ajaxAmd.post({
    url: '/orderRefundList',
    data: params,
  });
}
// 批量退款列表
export function batchRefundList(params) {
  return ajaxAmd.post({
    url: '/batchRefundList',
    data: params,
  });
}
// 企业付款列表
export function totransferList(params) {
  return ajaxAmd.post({
    url: '/totransferList',
    data: params,
  });
}
// 企业批量付款
export function batchTotransferList(params) {
  return ajaxAmd.post({
    url: '/batchTotransferList',
    data: params,
  });
}
// 出款审核列表
export function payOutExamineList(params) {
  return ajaxAmd.post({
    url: '/payOutExamineList',
    data: params,
  });
}
// 出款审核
export function payOutExamine(params) {
  return ajaxAmd.post({
    url: '/payOutExamine',
    data: params,
  });
}
// 用户工单查询
export function workOrderworkList(params) {
  return ajaxAmd.post({
    url: '/workOrder/workList',
    data: params,
  });
}
// 工单详情
export function workOrderworkDetails(params) {
  return ajaxAmd.post({
    url: '/workOrder/workDetails',
    data: params,
  });
}
// 提交工单
export function workOrderworkOrderInsert(params) {
  return ajaxAmd.post({
    url: '/workOrder/workOrderInsert',
    data: params,
  });
}
// 工单删除
export function workOrderdeleteWork(params) {
  return ajaxAmd.post({
    url: '/workOrder/deleteWork',
    data: params,
  });
}
// 工单评价
export function workOrderremainEvaluated(params) {
  return ajaxAmd.post({
    url: '/workOrder/remainEvaluated',
    data: params,
  });
}
// 客服回复
export function workOrdercustomerWork(params) {
  return ajaxAmd.post({
    url: '/workOrder/customerWork',
    data: params,
  });
}
// 结单接口
export function workOrderisStatement(params) {
  return ajaxAmd.post({
    url: '/workOrder/isStatement',
    data: params,
  });
}
// 企业认证初始数据
export function companydustyInfo(params) {
  return ajaxAmd.get({
    url: '/company/dustyInfo',
    params,
  });
}
// 企业认证数据提交
export function companycompanyInsert(params) {
  return ajaxAmd.post({
    url: '/company/companyInsert',
    data: params,
  });
}
// 账户信息
export function companyaccountInfo(params) {
  return ajaxAmd.get({
    url: '/company/accountInfo',
    params,
  });
}
// 对账 财务汇总
export function verifybillsummary(params) {
  return ajaxAmd.get({
    url: '/verifybill/summary',
    params,
  });
}
// 财务汇总 获取下拉框
export function verifybillparams(params) {
  return ajaxAmd.get({
    url: '/verifybill/params',
    params,
  });
}
// 图标
export function verifybill(params) {
  return ajaxAmd.get({
    url: '/verifybill',
    params,
  });
}
// 导出excle
export function exportExcel(params) {
  return ajaxAmd.get({
    url: '/exportExcel',
    params,
  });
}
// 会话记录
export function workOrdersessionList(params) {
  return ajaxAmd.get({
    url: '/workOrder/sessionList',
    params,
  });
}

// 客服聊天
export function workOrderserviceList(params) {
  return ajaxAmd.get({
    url: '/workOrder/serviceList',
    params,
  });
}
// 获取聊天记录
export function workOrderuserRecord(params) {
  return ajaxAmd.post({
    url: '/workOrder/userRecord',
    data: params,
  });
}
// 默认展示的聊天记录
export function workOrderuserRecordOne(params) {
  return ajaxAmd.post({
    url: '/workOrder/userRecordOne',
    data: params,
  });
}
