import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import Useradd from './views/useradd.vue'
import Userlist from './views/userlist.vue'
import AccountMan from './views/accountManagement.vue'
import AcountAdd from './views/AcountAdd.vue'
import ChangePassword from './views/changePassword.vue'

Vue.use(Router)

export default new Router({
  routes: [//主页路由
    {
      path: '/',
     
      component: Home
    }
    ,{//登陆路由
      path:'/login',
      component:Login,
    },
    {//添加路由
      path:'/useradd',
      component:Useradd,
    },{
      path:'/userlist',
      component:Userlist,
    },{
      path:'/accountManagement',
      component:AccountMan,
    },{
      path:'/acountAdd',
      component:AcountAdd,
    },{
      path:'/changePassword',
      component:ChangePassword,
    }
  ]
})
