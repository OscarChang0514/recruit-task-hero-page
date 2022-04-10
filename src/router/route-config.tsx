import HeroListPage from "src/pages/HeroListPage";
import HeroProfilePage from "src/pages/HeroProfilePage";
import Home from "src/pages/Home";
import { RouteConfig } from "./AppRouter.type";

export default [
	{
		path: '/',
		title: 'Home',
		index: true,
		element: Home, 
	},
	{
		path: '/heroes', 
		title: 'Heros',
		element: HeroListPage, 
		childs: [
			{ 
				path: '/heroes/:heroId', 
				element: HeroProfilePage
			}
		]
	},
] as RouteConfig[];