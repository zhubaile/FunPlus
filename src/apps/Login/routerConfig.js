// import Home from './pages/home';
import Login from './pages/UserLogin';
import Register from './pages/UserRegister';
import SendMailbox from './pages/SendMailbox';

// ========系统首页============ //
const login = [
  // 系统首页
  {
    path: '/user/login',
    component: Login,
  },
  {
    path: '/user/register',
    component: Register,
  },
  {
    path: '/user/sendmailbox',
    component: SendMailbox,
  },
];


export default [].concat(login, [{
  path: '*',
  component: Login,
}]);
