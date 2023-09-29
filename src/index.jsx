import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { ApiContext } from "./contexts/api.js"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ApiContext.Provider value={"sdfasdf"}>
    <App />
  </ApiContext.Provider>,
)
