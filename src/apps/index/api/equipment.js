import ajaxAmd from '@ajax';
// 以下为示例
// 添加应用（appId）
export function appspost(params) {
  return ajaxAmd.post({
    url: '/apps',
    data: params,
  });
}
