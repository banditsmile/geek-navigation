import Vue from "vue";
import VueRouter from "vue-router";

<<<<<<< HEAD
import Index from "@/pages/index/Index.vue"
import Login from "@/pages/Login.vue"
import Admin from "@/pages/admin/Index.vue"
import List from "@/pages/admin/List.vue"
import Category from "@/pages/admin/Category.vue"
import Audit from "@/pages/admin/Audit.vue"
=======
import Index from "@/pages/Index.vue";

>>>>>>> c2cb2ef4349e2d1d7ad37d9516f4edb4d874777c

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'index',
<<<<<<< HEAD
		component: Index,
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/admin',
		component: Admin,
		children: [
			{
				path: '/',
				component: Audit
			},
			{
				path: 'list',
				component: List
			},
			{
				path: 'category',
				component: Category
			}
		]
=======
		component: Index
>>>>>>> c2cb2ef4349e2d1d7ad37d9516f4edb4d874777c
	}
]

let router = new VueRouter({
	mode: 'history',
	routes
})

// router.beforeEach((to, from, next) => {
// 	const token = Vue.prototype.$storage.get('TOKEN')
//   if (to.path == '/admin' && !token) {
//     return next('/login')
//   }
//    next()
// })

export default router;