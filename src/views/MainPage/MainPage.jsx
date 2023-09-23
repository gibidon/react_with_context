import { useState, useEffect, useRef } from "react"
import { MainPageLayout } from "./MainPage.layout.jsx"

export function MainPage() {
  const [tasks, setTasks] = useState([])
  const [refreshState, setRefreshState] = useState(false) //used to reload task list
  const timeout = useRef() //used to set debounced search function

  const state = { tasks, setTasks, refreshState, setRefreshState, timeout }

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((taskList) => setTasks(taskList))
  }, [refreshState])

  return <MainPageLayout tasks={tasks} state={state} />
}
