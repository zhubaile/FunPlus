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
export async function deviceGrouplist() {
  return ajaxAmd.get({
    url: '/deviceGroup/list',
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
export async function deviceadd(params) {
  return ajaxAmd.post({
    url: '/device/add',
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
