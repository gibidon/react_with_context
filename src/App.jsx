import { useRoutes } from "react-router-dom"
import "./main.scss"
import { appRoutes } from "./routes/routes.jsx"

const App = () => {
  const routes = useRoutes(appRoutes)
  return <div className="container">{routes}</div>
}

export default App
