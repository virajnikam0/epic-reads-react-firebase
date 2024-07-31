import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Home from "./../components/Home";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);

export default routes;
