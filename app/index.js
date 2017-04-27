// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'Vue'
import VueRouter from 'vue-router'
import './css/common.css'
import './css/font-awesome.css'
import c from './js/controller.js'
Vue.use(VueRouter)
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import Chat from './components/Chat.vue'
import Player from './components/Player.vue'
import Favlist from './components/Favlist'
import Find from './components/Find'
import Profile from './components/Profile'

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
	{ path: '/', redirect: '/home' },
	{ path: '/home', component: Favlist },
	{ path: '/find', component: Find },
	{ path: '/profile', component: Profile },
    { path: '/Chat', component: Chat },
    { path: '/Player', component: Player }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
	linkActiveClass:"active",
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
	el:"#app",
  router,
  created(){
  	console.log("---the app created");
  	c.init();
  	this.$on("openChat",()=>{
  		router.push("chat")
  	});
  	this.$on("closePlayer",()=>{
  		router.go(-1);
  	});
  	this.$on("closeChat",()=>{
  		router.go(-1);
  	})
  }
})