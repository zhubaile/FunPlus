import ajaxAmd from '@ajax';
// 以下为示例
// 菜单查询接口
export async function getMenu(params) {
  return ajaxAmd.post({
    url: 'menu/user',
    data: params,
  });
}

