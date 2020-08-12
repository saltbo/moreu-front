import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie';

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/moreu/signin', name: 'signin',
      meta: { title: "用户登录" },
      component: () => import('./views/Signin.vue')
    },
    {
      path: '/moreu/signin/:token64', name: 'activate',
      meta: { title: "账户激活" },
      component: () => import('./views/Activate.vue')
    },
    {
      path: '/moreu/signup', name: 'signup',
      meta: { title: "用户注册" },
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/moreu/password-reset', name: 'reset_apply',
      meta: { title: "密码找回" },
      component: () => import('./views/ResetApply.vue')
    },
    {
      path: '/moreu/password-reset/:token64', name: 'reset_confirm',
      meta: { title: "密码找回" },
      component: () => import('./views/ResetConfirm.vue')
    },
    {
      path: '/moreu/:username', name: 'profile',
      meta: { title: "用户详情" },
      component: () => import('./views/Profile.vue')
    },
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