import Home from './pages/home';
import Login from './pages/UserLogin';
import Register from './pages/UserRegister';

// ========系统首页============ //
const home = [
  // 系统首页
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];


export default [].concat(home, [{
  path: '*',
  component: Login,
}]);
