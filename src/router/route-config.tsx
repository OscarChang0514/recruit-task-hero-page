import { lazy } from "react";
import { RouteConfig } from "./AppRouter.type";

export default [
    { path: '/', element: lazy(() => import("../pages/Home")), index: true },
    { path: '/heroes', element: lazy(() => import("../pages/HeroListPage")), childs: 
        [
            { path: '/heroes/:heroId', element: lazy(() => import("../pages/HeroProfilePage")) }
        ]
    },
] as RouteConfig[];