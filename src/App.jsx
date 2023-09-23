import React from "react"
import { useEffect, useState } from "react"
import { useRoutes } from "react-router-dom"

import "./main.scss"
import {
  addHandler,
  removeHandler,
  sortHandler,
  updateHandler,
  searchHandler,
} from "./handlers"
import { appRoutes } from "./routes/routes.jsx"

const App = () => {
  const routes = useRoutes(appRoutes)
  // const [todos, setTodos] = useState([])
  // const [refreshState, setRefreshState] = useState(false)
  // const [isEditing, setIsEditing] = useState(false)
  // const [currentEditId, setCurrentEditId] = useState(null)
  // const timeout = useRef()
  // const updateRefreshState = () => setRefreshState(!refreshState)
  // const cancelEditing = () => setIsEditing(false)

  // const state = {
  // 	todos,
  // 	setTodos,
  // 	refreshState,
  // 	setRefreshState,
  // 	isEditing,
  // 	setIsEditing,
  // 	currentEditId,
  // 	setCurrentEditId,
  // 	timeout,
  // 	updateRefreshState,
  // 	cancelEditing,
  // }

  // let todoElems = todos.map((todo) => (
  // 	<TodoTemplate // в шаблоне устанавливаем дата атрибут чтобы вытащить информацию на каком туду нажали удалить или отредактировать
  // 		key={todo.id}
  // 		title={todo.title}
  // 		id={todo.id}
  // 		editTodo={() => {
  // 			setIsEditing(true)
  // 			setCurrentEditId(todo.id) //чтобы найти какую туду мы редактируем
  // 		}}
  // 		removeTodo={() => removeHandler(state, todo.id)}
  // 	/>
  // ))

  // useEffect(() => {

  // 	fetch("http://localhost:3000/todos")
  // 		.then((response) => response.json())
  // 		.then((todoList) => setTodos(todoList))
  // }, [refreshState])

  return (
    <div className="container">
      {/* <h1>My todos:</h1>
			<div className="todo_main">{todoElems}</div>
			<br />
			<div className="todo_controls">
				<AddTaskForm addTask={(newTaskText) => addHandler(state, newTaskText)} />
				<SearchForm searchTodo={(text) => searchHandler(state, text)} />
				<button onClick={() => sortHandler(state)} className="sortBtn">
					Sort todos by name
				</button>
			</div>
			<div className="todo_edit_form">
				{isEditing && (
					<EditTemplate
						cancelUpdate={() => cancelEditing()}
						update={(newValue) => {
							updateHandler(state, newValue, currentEditId)
						}}
					/>
				)}
			</div> */}
      {routes}
    </div>
  )
}

export default App
