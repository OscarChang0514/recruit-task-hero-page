import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "src/components/Layout";
import { RouteConfig } from "./AppRouter.type";
import routeConfigs from "./route-config";

const generateRoute = (routes: RouteConfig[]) => routes.map(({path, element, childs}) => {
    let Element = element;
    return <Route path={path} element={<Element />}>{childs ? generateRoute(childs) : null}</Route>
});

const AppRouter: React.FC = () => {

    return(
        <BrowserRouter >
            <Suspense fallback={<></>}>
                <Routes>
                    <Route path={'/'} element={<Layout />}>
                        {generateRoute(routeConfigs)}
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter >
    );
}

export default AppRouter;