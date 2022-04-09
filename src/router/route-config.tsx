import { lazy } from "react";
import { RouteConfig } from "./AppRouter.type";

export default [
    { path: '/', element: lazy(() => import("../pages/Home")), index: true },
] as RouteConfig[];