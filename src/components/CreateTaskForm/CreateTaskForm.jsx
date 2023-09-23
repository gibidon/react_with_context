import { useState } from "react"

export function CreateTaskForm({ createTask, state }) {
  const [inputState, setInputState] = useState("")

  return (
    <form
      className="add_task"
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
      <button type="submit">Add task</button>
    </form>
  )
}
