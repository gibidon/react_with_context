import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { TaskLayout } from "./TaskLayout"
import { removeHandler } from "../../handlers"

export function Task() {
  const [taskState, setTaskState] = useState(null)
  const [editingNow, setEditingNow] = useState(false)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3000/todos/${params.id}`)
      .then((response) => response.json())
      .then((loadedTask) => {
        if (!loadedTask.title) {
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
