import Vue from 'vue'
import VueRouter from "vue-router"
import MyIndex from "../view/MyIndex.vue"
import MyVideo from "../view/MyVideo.vue"
import MyHome from "../view/MyHome.vue"
import MyMine from "../view/MyMine.vue"
import MyPosition from "../view/MyPosition.vue"
// import Vuex from 'vuex'

// 引入
Vue.use(VueRouter)
// Vue.use(Vuex)

// 映射表
const routes = [
  { 
    path: '/index', 
    name:"index",
    redirect:'/index/one',
    component: MyIndex,
    // 子路由
    children:[
      // 注册
      {
        path:"one",
        name:"one",
        component: () => import("../view/CinemaOne.vue")
      },
      {
        path:"two",
        name:"two",
        component: () => import("../view/CinemaTwo.vue")
      },
      // 视频详情
      {
        path:"three",
        name:"three",
        component: () => import("../view/CinemaThree.vue")
      },
      {
        path:"four",
        name:"four",
        component: () => import("../view/CinemaFour.vue")
      }
    ]
  },
  // 小视频
  {
    path:"/video",
    name:"video",
    component:MyVideo,
  },
  {
    path:"/position",
    name:"position",
    component:MyPosition,
  },
  {
    path:"/search",
    name:"search",
    component:() => import("../view/MySearch.vue"),
  },
  {
    path:"/details",
    name:"details",
    component: () => import("../view/MyDetails.vue")
  },
  // 我的
  {
    path:"/myhome",
    name:"myhome",
    component:MyHome
  },
  {
    path:"/limovie",
    name:"limovie",
    component: () => import("../view/Limovie.vue")
  },
  // 我的详细页
  {
    path:"/mine",
    name:"mine",
    component:MyMine,
    beforeEnter: (to, from, next) => {
      /* must call `next` */
      // 页面缓存
      let MyID = window.localStorage.getItem("userid");
      if(MyID){
        next();
        return
      } else {
        next("/myhome")
      }
    }
  },
  {
    path:'/',
    redirect:'/index/one',
  },
  
];

// 注册实例
const router = new VueRouter ({
  mode:"hash",
  base:process.env.BASE_URL,
  routes,
})

// 暴露
export default router
// export default new VueRouter({
//   routes :[
//       {
//         path:'/',
//         redirect:'/index/one'
//       },
//       { 
//         path: '/index', 
//         name:"index",
//         redirect:'/index',
//         component: MyIndex
//       },
      
//     ]
// })
