import { LazyExoticComponent } from "react";

export interface RouteConfig {
    path: string;
    Element: LazyExoticComponent<React.FC>;
    childs?: RouteConfig[];
}