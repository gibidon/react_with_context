import { useEffect, useState, useRef } from "react"
import { TodoTemplate, AddTaskForm, SearchForm } from "./components"
import "./main.scss"

import {
  readTodos,
  addTodo,
  removeTodo,
  updateTodo,
  sortTodos,
  searchTodos,
} from "./api/api.js"

const App = () => {
  const [todos, setTodos] = useState([])
  const timeout = useRef()

  const onAddTodo = (newText) => {
    addTodo(newText).then((newTodo) => {
      let updatedTodos = [...todos, newTodo]
      setTodos(updatedTodos)
    })
  }

  const onUpdateTodo = (id, newText) => {
    updateTodo(id, newText).then(() => {
      let todoForUpdate = todos.find((todo) => todo.id === id)
      console.log("todoForpdate ", todoForUpdate)
      setTodos(todos.map((todo) => (todo.id === id ? { id: id, title: newText } : todo)))
    })
  }

  const onRemoveTodo = (id) => {
    removeTodo(id).then(() => {
      let cleanedTodos = todos.filter((todo) => todo.id !== id)
      setTodos(cleanedTodos)
    })
  }

  const onSortTodo = () => {
    sortTodos().then((sortedTodos) => setTodos(sortedTodos))
  }

  const onSearchTodos = (text) => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      searchTodos(text).then((foundTodos) => setTodos(foundTodos))
    }, 600)
  }

  useEffect(() => {
    readTodos().then((receivedList) => {
      setTodos(receivedList)
    })
  }, [])

  let todoElems = todos.map((todo) => (
    <TodoTemplate
      key={todo.id}
      title={todo.title}
      id={todo.id}
      updateTodo={(newText) => {
        onUpdateTodo(todo.id, newText)
      }}
      removeTodo={() => onRemoveTodo(todo.id)}
    />
  ))

  return (
    <div className="container">
      <h2>My todos:</h2>
      <div className="todo_main">{todoElems}</div>
      <br />
      <div className="todo_controls">
        <AddTaskForm addTask={(newTaskText) => onAddTodo(newTaskText)} />
        <SearchForm searchTodo={(text) => onSearchTodos(text)} />
        <button onClick={onSortTodo} className="sortBtn">
          Sort todos by name
        </button>
      </div>
    </div>
  )
}

export default App
