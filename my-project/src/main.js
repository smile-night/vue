// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

import initRoutes from './router'

/* eslint-disable no-new */
// 在vue中注册空组件
Vue.use(VueRouter)
Vue.use(VueResource)

// 实例化VueRouter
// var router = new VueRouter({
// 	// 当hashbang的值为true时，所有的路径都会被格式化已#!开头，
// 	hashbang: true,
// 	history: false,
// 	saveScrollPosition: true,
// 	transitionOnLoad: true,
// 	routes : routes
// })
// console.log(initRoutes);
// var router = new VueRouter({
// 	hashbang: true,
// 	history: false,
// 	saveScrollPosition: true,
// 	transitionOnLoad: true,
// 	routes: initRoutes.router
// });
var router = new VueRouter({
	hashbang: true,
	history: false,
	saveScrollPosition: true,
	transitionOnLoad: true
});
// console.log(initRoutes(router));
var router = new VueRouter({
	routes: initRoutes(router)
})


router.afterEach(function (transition) {
	// console.log(transition)
	console.log('成功浏览到' + transition.path)
})

new Vue({
  el: '#app',
  router,
  // render: h => h(App)
  ...App
})
