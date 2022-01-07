import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
	{
		name: "Index",
		path: "/",
		component: () => import("@/views/Index.vue")
	},
	{
		name: "About",
		path: "/about",
		component: () => import("@/views/About.vue")
	},
	{
		name: "About - Composition",
		path: "/about/composition",
		component: () => import("@/views/About-Composition.vue")
	}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router.beforeEach((to, from, next) => {
// 	next()
// })

export default router;