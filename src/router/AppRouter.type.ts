import { LazyExoticComponent } from "react";

export interface RouteConfig {
    path: string;
    title?: string;
    element: LazyExoticComponent<React.FC> | React.FC;
    childs?: RouteConfig[];
    index?: true;
}