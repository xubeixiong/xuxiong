import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/commom/login'
import userIndex from '../views/users/index'
import personalSource from '../views/users/personalSource'
import makeComplaint from '../views/users/makeComplaint'
import myComplaint from '../views/users/myComplaint'
Vue.use(Router)

let routes = [
  // 登录
  {
    path: '/login',
    name: login,
    component: login
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path:'/usersIndex',
    name:userIndex,
    component:userIndex,
    children:[
      {
        path: '/usersIndex/personalSource',
        name: personalSource,
        component: personalSource
      },
      {
        path: '/usersIndex/myComplaint',
        name: myComplaint,
        component: myComplaint
      },
      {
        path: '/usersIndex/makeComplaint',
        name: makeComplaint,
        component: makeComplaint
      },
    ]
  }
]
// 创建路由对象
const mRouter = new Router({
  routes
}, )
export default mRouter
