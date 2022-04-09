import { LazyExoticComponent } from "react";

export interface RouteConfig {
    path: string;
    title?: string;
    element: LazyExoticComponent<React.FC>;
    childs?: RouteConfig[];
    index?: true;
}