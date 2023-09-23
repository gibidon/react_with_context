// import React from "react"
import { useState } from "react"
import { createTaskHandler } from "../../handlers"
import { CreateTaskLayout } from "./CreateTask.layout"

export function CreateTask() {
  const [input, setInput] = useState("")

  return (
    <CreateTaskLayout
      input={input}
      createTask={() => createTaskHandler(input)}
      setInput={(newValue) => setInput(newValue)}
    />
  )
}
