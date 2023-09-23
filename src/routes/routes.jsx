import React from "react"
import { MainPage } from "../views/MainPage/MainPage.jsx"
import { Task } from "../views/TaskPage/Task.jsx"
import { NotFound } from "../views/404Page/404Page.jsx"
import { Navigate } from "react-router-dom"
// import {
// 	addHandler,
// 	removeHandler,
// 	sortHandler,
// 	updateHandler,
// 	searchHandler,
// } from "./handlers"
export const appRoutes = [
  {
    path: "/",
    element: <MainPage />,
  },
  { path: "/task/:id", element: <Task /> },
  { path: "/404", element: <NotFound /> },
  { path: "/*", element: <Navigate to="/404" /> },
  // { path: "/task-load-error", element: <ProductLoadError /> },
  // { path: "/task-not-exist", element: <ProductNotFound /> },
]

// {
//     path: "/",
//     element: <MainPage />,
// },
// {
//     path: "/catalog",
//     element: <Catalog />,
//     children: [
//         { path: "product/:id", element: <Product /> },
//         { path: "service/:id", element: <Product /> },
//     ],
// },
// { path: "/contacts", element: <Contacts /> },
// { path: "/404", element: <NotFound /> },
// { path: "/*", element: <Navigate to="/404" /> },
// { path: "/product-load-error", element: <ProductLoadError /> },
// { path: "/product-not-exist", element: <ProductNotFound /> },
// ])
