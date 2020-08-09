import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie';

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/moreu/signin', name: 'signin', meta: { title: "用户登录" }, component: () => import('./views/users/Signin.vue') },
    { path: '/moreu/signup', name: 'signup', meta: { title: "用户注册" }, component: () => import('./views/users/Signup.vue') },
    { path: '/moreu/reset', name: 'reset', meta: { title: "密码找回" }, component: () => import('./views/users/Reset.vue') },
    { path: '/moreu/resetpwd', name: 'resetpwd', meta: { title: "密码找回" }, component: () => import('./views/users/Resetpwd.vue') }
  ]
})

const setTitle = (title) => {
  let defaultTitle = "Moreu"
  title = title ? `${defaultTitle} - ${title}` : defaultTitle;
  window.document.title = title;
}

router.beforeEach((to, from, next) => {
  setTitle(to.meta.title);
  // let token = Cookies.get('intoken')
  // if (!token && !to.path.startsWith('/login')) {  // 未登录则强制跳去登录
  //   window.location = '/login'
  //   return
  // }

  next();
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});


export default router