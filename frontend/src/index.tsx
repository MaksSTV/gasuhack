import { createRoot } from "react-dom/client"
import { App } from "./App"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { LazyAbout } from './components/About/LazyAbout'


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [ // дочерние ссылки 
			{
				path: "/about",
				element: <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>,
			},
			{
				path: "/shop",
				element: <div>shop</div>,
			},
		]
	},
])

const root = document.getElementById("root")

if (!root) {
	throw new Error("root not found")
}

const container = createRoot(root)
container.render(<RouterProvider router={router} />)
container.render(<App />)