import { lazy } from "react";
import { RouteConfig } from "./AppRouter.type";

export default [
	{
		path: '/',
		title: 'Home',
		index: true,
		element: lazy(() => import("../pages/Home")), 
	},
	{
		path: '/heroes', 
		title: 'Heros',
		element: lazy(() => import("../pages/HeroListPage")), 
		childs: [
			{ 
				path: '/heroes/:heroId', 
				element: lazy(() => import("../pages/HeroProfilePage")) 
			}
		]
	},
] as RouteConfig[];