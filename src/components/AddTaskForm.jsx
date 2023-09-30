import { useState } from "react"

export const AddTaskForm = ({ addTask }) => {
  const [inputState, setInputState] = useState("")

  return (
    <form
      className="add_task"
      onSubmit={(e) => {
        e.preventDefault()
        addTask(inputState)
        setInputState("")
      }}
    >
      <label htmlFor="add_task">Add new todo:</label>
      <input
        value={inputState}
        id="add_task"
        type="text"
        placeholder="enter new task"
        onChange={(e) => setInputState(e.target.value)}
      />
      <button type="submit">Add todo</button>
    </form>
  )
}
