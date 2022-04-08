import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteConfig } from "./AppRouter.type";
import routeConfigs from "./route-config";

const generateRoute = (routes: RouteConfig[]) => {
    return routes.map(route => {
        <Route {...route} children={route.childs ? generateRoute(route.childs) : null} />
    })
};

const AppRouter: React.FC = () => {
    return(
        <BrowserRouter >
            <Suspense fallback={<></>}>
                <Routes>
                    {generateRoute(routeConfigs)}
                </Routes>
            </Suspense>
        </BrowserRouter >
    );
}

export default AppRouter;