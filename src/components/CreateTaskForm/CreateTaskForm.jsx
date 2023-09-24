import { useState } from "react"
import styles from "./CreateTaskForm.module.scss"

export function CreateTaskForm({ createTask, state }) {
  const [inputState, setInputState] = useState("")

  return (
    <form
      className={styles.create_task_form}
      onSubmit={(e) => {
        e.preventDefault()
        createTask(inputState)
        setInputState("")
      }}
    >
      <label htmlFor="create_task">Add new task:</label>
      <input
        value={inputState}
        id="create_task"
        type="text"
        placeholder="enter new task"
        onChange={(e) => setInputState(e.target.value)}
      />
      <button type="submit" className={styles.submit_btn}>
        Add task
      </button>
    </form>
  )
}
