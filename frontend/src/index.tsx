import { createRoot } from "react-dom/client"
import App from "./App"
import { BrowserRouter } from 'react-router-dom'
import { createContext } from 'react'
import Store from './store/store'


interface State {
	store: Store
}

const store = new Store()

export const Context = createContext<State>({
	store,
})

const root = document.getElementById("root")

if (!root) {
	throw new Error("root not found")
}

const container = createRoot(root)
container.render(
	<Context.Provider value={{
		store
	}}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Context.Provider>

)