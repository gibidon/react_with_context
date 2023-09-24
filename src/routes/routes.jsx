import { MainPage } from "../views/MainPage/MainPage.jsx"
import { Task } from "../views/TaskPage/Task.jsx"
import { NotFound } from "../views/404Page/404Page.jsx"
import { Navigate } from "react-router-dom"

export const appRoutes = [
  {
    path: "/",
    element: <MainPage />,
  },
  { path: "/task/:id", element: <Task /> },
  { path: "/404", element: <NotFound /> },
  { path: "/*", element: <Navigate to="/404" /> },
]
