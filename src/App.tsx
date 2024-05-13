import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Upload from './pages/Upload';
import Files from './pages/Files';

function App() {

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home/>
		},
		{
			path: "/upload",
			element: <Upload/>
		},
		{
			path: "/private-files",
			element: <Files/>
		},
	]);

	return (
		<RouterProvider router={router} />
	)
}

export default App
