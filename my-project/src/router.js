import Home from './pages/home.vue'
import About from './pages/about.vue'
import Blog from './pages/blog.vue'

// var router = [{
// 		path: '/',
// 		name: '',
// 		component: Home
// 	},{
// 		path: '/home',
// 		name: 'home',
// 		component: Home
// 	},{
// 		path: '/blog',
// 		name: 'blog',
// 		component: Blog
// 	},{
// 		path: '/about',
// 		name: 'about',
// 		component: About
// 	}
//   ]
export default function(routes){
	return routes = [{
		path: '/',
		name: '',
		component: Home
	},{
		path: '/home',
		name: 'home',
		component: Home
	},{
		path: '/blog',
		name: 'blog',
		component: Blog
	},{
		path: '/about',
		name: 'about',
		component: About
	}
  ]
}