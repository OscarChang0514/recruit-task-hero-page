import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "src/components/Layout";
import { RouteConfig } from "./AppRouter.type";
import routeConfigs from "./route-config";

const generateRoute = (routes: RouteConfig[]) => routes.map(({ path, element, childs }) => {
	let Element = element;
	return <Route path={path} element={<Element />}>{childs ? generateRoute(childs) : null}</Route>
});

const AppRouter: React.FC = () => {

	return (
		<BrowserRouter >
			<Routes>
				<Route path={'/'} element={<Layout />}>
					{generateRoute(routeConfigs)}
				</Route>
				{/* 無對應的url時導頁 */}
				<Route path={'*'} element={<Navigate to="/" replace />}/>
			</Routes>
		</BrowserRouter >
	);
}

export default AppRouter;