import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/layout";

const HomePage = lazy(() => import("./containers/homePage/homePage"));
const AppPage = lazy(() => import("./containers/appPage/appPage"));

function App() {
	let routes = (
		<Routes>
			<Route path="/app" element={<AppPage />} />
			<Route path="/" exact element={<HomePage />} />
			<Route path="*" element={<Navigate to="/" replace="true" />} />
		</Routes>
	);

	return (
		<div className="App">
			<Layout>
				<Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
			</Layout>
		</div>
	);
}

export default App;
