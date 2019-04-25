// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
    children: [
      { name: '公司管理', path: '/manage/company', icon: 'set' },
      { name: '部门管理', path: '/manage/department', icon: 'lights' },
      { name: '团队管理', path: '/manage/team', icon: 'atm' },
    ],
  },
];

const asideMenuConfig = [
  {
    name: '管理概况',
    path: '/manage',
    icon: 'account',
    children: [
      { name: '管理de', path: '/manage/department', icon: 'account' },
      { name: '管理de', path: '/manage/company', icon: 'account' },
    ],
  },

  {
    name: '测试专用',
    path: '/account',
    icon: 'set',
    children: [
      { name: '质量管理', path: '/account/ceshi', icon: 'account' },
    ],
  },
  {
    name: '好asdd ',
    path: '/account',
    icon: 'account',
  },
  {
    name: '我是谁',
    path: '/user',
    icon: 'account',
    children: [
      { name: '登录', path: '/user/login', icon: 'refresh' },
      { name: '测试', path: '/account/ceshi', icon: 'account' },
    ],
  },
  {
    name: '专项管理',
    path: '/special',
    icon: 'set',
  },
];

export { headerMenuConfig, asideMenuConfig };
