import React from "react"
import { useState } from "react"

export default function CreateTaskForm({ addTask, state }) {
  const [inputState, setInputState] = useState("")

  return (
    <form
      className="add_task"
      onSubmit={(e) => {
        e.preventDefault()
        addTask(inputState)
        state.setRefreshState(!state.refreshState)
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
