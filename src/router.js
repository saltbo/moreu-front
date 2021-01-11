import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/install', name: 'installer', meta: { title: "系统安装" }, component: () => import('./views/installer') },
    { path: '/moreu/signin', name: 'signin', meta: { title: "用户登录" }, component: () => import('./views/ucenter/Signin.vue') },
    { path: '/moreu/signout', name: 'signout', meta: { title: "用户登出" }, component: () => import('./views/ucenter/Signout.vue') },
    { path: '/moreu/signin/:token64', name: 'activate', meta: { title: "账户激活" }, component: () => import('./views/ucenter/Activate.vue') },
    { path: '/moreu/signup', name: 'signup', meta: { title: "用户注册" }, component: () => import('./views/ucenter/Signup.vue') },
    { path: '/moreu/password-reset', name: 'reset_apply', meta: { title: "密码找回" }, component: () => import('./views/ucenter/ResetApply.vue') },
    { path: '/moreu/password-reset/:token64', name: 'reset_confirm', meta: { title: "密码找回" }, component: () => import('./views/ucenter/ResetConfirm.vue') },
    { path: '/moreu/:username', name: 'profile', meta: { title: "用户详情" }, component: () => import('./views/ucenter/Profile.vue') },
    { path: '/moreu', name: 'profile', meta: { title: "用户详情" }, component: () => import('./views/ucenter/Profile.vue') },
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