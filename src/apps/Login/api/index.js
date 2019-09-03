
import ajaxAmd from '@ajax';
// 引用的为assets文件夹下的common的axios
// 以下为示例
// 菜单查询接口
export async function getMenu(params) {
  return ajaxAmd.post({
    url: 'menu/user',
    data: params ,
  });
}
// 发送邮件
export async function sendMailbox(params) {
  return ajaxAmd.get({
    url: '/sendRegisterMail',
    params,
  });
}
// 登录接口
export async function loginUser(params) {
  return ajaxAmd.post({
    url: '/user/login',
    data: params ,
  });
}
// 注册接口
export async function registerUser(params) {
  debugger;
  return ajaxAmd.post({
    url: '/user/register',
    data: params ,
  });
}
//  获取用户权限
export async function functionUser() {
  return ajaxAmd.post({
    url: 'function/user',
  });
}
// 手机号找回密码
export async function smsfindPass(params) {
  return ajaxAmd.post({
    url: '/sms/findPass',
    data: params ,
  });
}
// 验证短信验证码
export async function smsverify(params) {
  return ajaxAmd.get({
    url: '/sms/verify',
    params ,
  });
}
// 重置密码
export async function usermodifyPwd(params) {
  return ajaxAmd.post({
    url: '/user/modifyPwd',
    data: params ,
  });
}
// 邮箱找回密码
export async function sendFindPassMail(params) {
  return ajaxAmd.get({
    url: '/sendFindPassMail',
    params ,
  });
}
