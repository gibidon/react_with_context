import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { TaskLayout } from "./TaskLayout"
import { removeHandler, editHandler } from "../../handlers"

export function Task() {
  const [taskState, setTaskState] = useState(null)
  const [editingNow, setEditingNow] = useState(false)
  const params = useParams()
  const navigate = useNavigate()

  console.log("paramsId:", params.id)
  console.log("taskState", taskState)

  useEffect(() => {
    fetch(`http://localhost:3000/todos/${params.id}`)
      .then((response) => response.json())
      .then((loadedTask) => {
        console.log("loasdedTask-", loadedTask)
        if (!loadedTask.title) {
          console.log("no such task")
          navigate("/404")
          return
        } else {
          setTaskState(loadedTask)
        }
      })
  }, [params.id, navigate, editingNow])

  if (!taskState) {
    return null
  }

  return (
    <TaskLayout
      taskState={taskState}
      removeTask={() => {
        removeHandler(taskState.id)
        navigate("/")
      }}
      moveBack={() => navigate(-1)}
      editingNow={editingNow}
      setEditingNow={setEditingNow}
    />
  )
}
