import ajaxAmd from '@ajax';
// 以下为示例
// 菜单查询接口
export async function getMenu() {
  return ajaxAmd.post({
    url: 'menu/user',
  });
  // .then(({ status, data }) => {
  //   console.log(status);
  //   console.log(data);
  //   ;
  // });
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
