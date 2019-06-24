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
// 获取分组列表
/* export async function deviceGrouplist(params) {
  return ajaxAmd.get({
    url: '/deviceGroup/list',
    params,
  });
} */
const deviceGrouplist = (params) =>{
  return ajaxAmd.get({
    url: '/deviceGroup/list',
    params,
  });
};
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
// 创建新规则
export async function routerRuleadd(params) {
  return ajaxAmd.post({
    url: '/routerRule/add',
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
// 收入
export function incomeList(params) {
  debugger;
  return ajaxAmd.post({
    url: '/incomeList',
    data: params,
  });
}
