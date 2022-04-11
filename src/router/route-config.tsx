import { lazy } from "react";
import { RouteConfig } from "./AppRouter.type";

export default [
  {
    path: '/',
    title: 'Home',
    index: true,
    element: lazy(() => import("src/pages/Home")),
  },
  {
    path: '/heroes',
    title: 'Heroes',
    element: lazy(() => import("src/pages/HeroList")),
    childs: [
      {
        path: '/heroes/:heroId',
        element: lazy(() => import("src/pages/HeroProfile"))
      }
    ]
  },
] as RouteConfig[];