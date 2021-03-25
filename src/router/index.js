import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/commom/login'
import userIndex from '../views/users/index'
import personalSource from '../views/users/personalSource'
import myComplaint from '../views/users/myComplaint'
import makeComplaintOne from '../views/users/makeComplaintOne'
import makeComplaintTwo from '../views/users/makeComplaintTwo'
import makeComplaintThree from '../views/users/makeComplaintThree'
import agentsPersonalSource from '../views/agents/personalSource'
import uploadPersonalSource from '../views/agents/uploadSource'
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
    path: '/usersIndex',
    name: userIndex,
    component: userIndex,
    children: [
      // 用户
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
        path: '/usersIndex/makeComplaintOne',
        name: makeComplaintOne,
        component: makeComplaintOne
      },
      {
        path: '/usersIndex/makeComplaintTwo',
        name: makeComplaintTwo,
        component: makeComplaintTwo
      },
      {
        path: '/usersIndex/makeComplaintOne',
        name: makeComplaintThree,
        component: makeComplaintThree
      },

      // 经销商
      {
        path: '/agentsIndex/personalSource',
        name: agentsPersonalSource,
        component: agentsPersonalSource
      },
      {
        path: '/agentsIndex/uploadPersonalSource',
        name: uploadPersonalSource,
        component: uploadPersonalSource
      },
    ]
  }
]
// 创建路由对象
const mRouter = new Router({
  routes
})
export default mRouter
